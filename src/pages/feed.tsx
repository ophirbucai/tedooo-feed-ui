import { Post } from "../components/post";
import useInfiniteFeed from "../hooks/useInfiniteFeed";
import { useOnVisible } from "../hooks/useOnVisible";

export function FeedPage() {
	const { posts, loading, fetchMore, onVisible, toggleLike } =
		useInfiniteFeed();
	const loadMoreRef = useOnVisible(fetchMore);

	return (
		<div className="feed">
			<div>
				{posts.map((post, index) => (
					<Post
						key={post.id}
						post={post}
						toggleLike={() => toggleLike(index)}
						onVisible={() => onVisible(index)}
					/>
				))}
				{loading && <Post post={null} />}
				<div
					className="load-more-trigger"
					ref={loadMoreRef as React.LegacyRef<HTMLDivElement>}
				/>
			</div>
		</div>
	);
}
