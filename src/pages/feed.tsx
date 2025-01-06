import { Post } from "../components/post";
import useInfiniteFeed from "../hooks/useInfiniteFeed";
import { Virtuoso } from "react-virtuoso";

export function FeedPage() {
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
						onVisible={() => onVisible(index)}
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
					Item: (props) => <div {...props} className="post-spacer-y" />,
				}}
				increaseViewportBy={{ top: 800, bottom: 800 }}
				useWindowScroll
			/>
		</div>
	);
}
