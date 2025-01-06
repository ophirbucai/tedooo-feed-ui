import { useState, useEffect, useCallback, useRef } from "react";
import type { Post } from "../lib/types";
import { getPosts, sendImpression } from "../lib/queries";

const useInfiniteFeed = () => {
	const firstRender = useRef(true);
	const [posts, setPosts] = useState<Post[]>([]);
	const [hasMore, setHasMore] = useState(true);
	const [loading, setLoading] = useState(false);
	const [skip, setSkip] = useState(0);
	const impressionSet = useRef(new Set());

	const fetchPosts = useCallback(async () => {
		if (!hasMore || loading) return;

		setLoading(true);
		firstRender.current = false;

		try {
			const { data, hasMore } = await getPosts(skip);
			setPosts((prevPosts) => [...prevPosts, ...data]);
			setHasMore(hasMore);
			setSkip((prevSkip) => prevSkip + data.length);
		} catch (error) {
			console.error("Failed to fetch posts:", error);
		} finally {
			setLoading(false);
		}
	}, [hasMore, loading, skip]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: Should occur only once on first load
	useEffect(() => {
		if (firstRender.current) fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onVisible = useCallback(
		async (index: number) => {
			const post = posts[index];
			if (impressionSet.current.has(post.id)) return;
			impressionSet.current.add(post.id);
			try {
				await sendImpression(post.id);
			} catch {
				impressionSet.current.delete(post.id);
			}
		},
		[posts],
	);

	const toggleLike = useCallback(async (index: number) => {
		let originalPost: Post;
		setPosts((prev) => {
			const posts = [...prev];
			originalPost = posts[index];
			const { likes, didLike } = originalPost;

			posts[index] = {
				...originalPost,
				didLike: !didLike,
				likes: didLike ? likes - 1 : likes + 1,
			};
			return posts;
		});
		try {
			// Post like/disliked post to the backend.
		} catch {
			// biome-ignore lint/correctness/noUnreachable: This code is indeed unreachable, remove this comment after implementing call to backend.
			setPosts((prev) => {
				const posts = [...prev];
				posts[index] = originalPost;
				return posts;
			});
		}
	}, []);

	return {
		posts,
		hasMore,
		loading,
		fetchMore: fetchPosts,
		onVisible,
		toggleLike,
	};
};

export default useInfiniteFeed;
