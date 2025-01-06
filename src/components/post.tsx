import type { Post as PostType } from "../lib/types";
import { Avatar } from "../components/avatar";
import { LikeButton } from "../components/like-button";
import LikeIcon from "../assets/icons/actions/like-outline.svg?react";
import CommentIcon from "../assets/icons/actions/comment-outline.svg?react";
import dayjs from "dayjs";
import { cn } from "../lib/cn";

type Props = { post: PostType | null; toggleLike?: () => Promise<void> };

export function Post({ post, toggleLike }: Props) {
	if (post) {
		const hasInteractions = [post.likes, post.comments].filter(Boolean);
		return (
			<article className="post" key={post.id}>
				<header className="post__header">
					<span className="post__header_avatar">
						<Avatar src={post.avatar} size={40} />
					</span>
					<span className="post__header_name">
						<span>{post.shopName}</span>
					</span>
					<span className="post__header_bottom">
						<span className="post__header_bottom_username">
							{post.username}
						</span>
						<span className="post__header_bottom_date">
							&middot; {dayjs(post.date).fromNow(true)}
						</span>
					</span>
				</header>
				<div className="post__content">
					<p>{post.text}</p>
				</div>
				<div className="post__images">
					{post.images.slice(0, 2).map((src) => (
						<img key={src} src={src} alt={`Posted by @${post.username}`} />
					))}
				</div>
				{hasInteractions && (
					<div className="post__interactions">
						<div className="post__interactions_likes">
							{post.likes > 0 && (
								<LikeButton>
									{post.likes > 0 &&
										`${post.likes} like${post.likes > 1 ? "s" : ""}`}
								</LikeButton>
							)}
						</div>
						<div className="post__interactions_comments">
							{post.comments > 0 && (
								<button type="button">
									{post.comments} comment{post.comments > 1 && "s"}
								</button>
							)}
						</div>
					</div>
				)}
				<div className="post__actions">
					<button
						type="button"
						className={cn(post.didLike && "active")}
						onClick={toggleLike}
					>
						<LikeIcon />
						Like
					</button>
					<button type="button">
						<CommentIcon />
						Comment
					</button>
				</div>
			</article>
		);
	}
	return (
		<article className="post skeleton">
			<header className="post__header">
				<span className="post__header_avatar" />
				<span className="post__header_name" />
				<span className="post__header_bottom" />
			</header>
			<div className="post__content" />
			<div className="post__images" />
			<div className="post__interactions" />
		</article>
	);
}
