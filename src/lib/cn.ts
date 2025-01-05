type ClassLike = string | null | false | undefined;
export function cn(...classes: ClassLike[]) {
	return classes.filter(Boolean).join(" ");
}
