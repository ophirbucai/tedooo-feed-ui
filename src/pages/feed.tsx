import { Post } from "../components/post";
import useInfiniteFeed from "../hooks/useInfiniteFeed";
import { Virtuoso } from "react-virtuoso";

export function FeedPage() {
	const { posts, loading, fetchMore } = useInfiniteFeed();

	return (
		<div className="feed">
			<Virtuoso
				data={posts}
				endReached={fetchMore}
				itemContent={(_index, post) => <Post post={post} />}
				components={{
					Footer: () => (
						<>
							{loading && <Post post={null} />}
							<div className="feed-spacer-y" />
						</>
					),
					EmptyPlaceholder: () => loading && <Post post={null} />,
				}}
				useWindowScroll
			/>
		</div>
	);
}
