import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import { Post } from "../components/post";
import useInfiniteFeed from "../hooks/useInfiniteFeed";
import { Virtuoso } from "react-virtuoso";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);
dayjs.updateLocale("en", {
	relativeTime: {
		future: "%s",
		past: "%s",
		s: "1s",
		m: "1m",
		mm: "%dm",
		h: "1h",
		hh: "%dh",
		d: "ad",
		dd: "%dd",
		M: "1m",
		MM: "%dm",
		y: "1y",
		yy: "%dy",
	},
});

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
