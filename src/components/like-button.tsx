import LikeIcon from "../assets/icons/common/like.svg?react";

export function LikeButton({
	children,
	...props
}: React.ComponentProps<"button">) {
	return (
		<button type="button" {...props} className="like-button">
			<span className="like-button__icon">
				<LikeIcon />
			</span>
			{children}
		</button>
	);
}
