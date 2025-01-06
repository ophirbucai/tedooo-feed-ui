import { useRef } from "react";
import { Post } from "../components/post";
import useInfiniteFeed from "../hooks/useInfiniteFeed";
import { Virtuoso } from "react-virtuoso";

export function FeedPage() {
	const minHeightMap = useRef(new Map<string, number>());
	const { posts, loading, fetchMore, onVisible, toggleLike } =
		useInfiniteFeed();

	return (
		<div className="feed">
			<Virtuoso
				data={posts}
				endReached={fetchMore}
				itemContent={(index, post) => (
					<Post
						post={post}
						toggleLike={() => toggleLike(index)}
						onVisible={(observer: IntersectionObserverEntry) => {
							onVisible(index);
							minHeightMap.current.set(post.id, observer.target.scrollHeight);
						}}
						style={{ minHeight: minHeightMap.current.get(post.id) }}
					/>
				)}
				components={{
					Footer: () => (
						<>
							{loading && <Post post={null} />}
							<div className="post-spacer-y" />
						</>
					),
					EmptyPlaceholder: () => loading && <Post post={null} />,
				}}
				increaseViewportBy={{ top: 2000, bottom: 800 }}
				useWindowScroll
			/>
		</div>
	);
}
