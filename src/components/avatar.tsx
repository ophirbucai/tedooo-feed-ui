import { cn } from "../lib/cn";

type AvatarProps = React.ComponentProps<"img"> & {
	size: number;
};

export function Avatar({ className, size, ...props }: AvatarProps) {
	return (
		<img
			draggable={false}
			{...props}
			alt={props.alt}
			className={cn("avatar", className)}
			style={{ "--avatar-size": `${size}px` } as React.CSSProperties}
		/>
	);
}
