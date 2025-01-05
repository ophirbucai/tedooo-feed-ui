export type User = {
	image: string;
};

export type Post = {
	id: string;
	userId: string;
	username: string;
	avatar: string;
	shopName: string;
	shopId: string;
	images: string[];
	comments: number;
	date: string;
	text: string;
	likes: number;
	didLike: boolean;
	premium: boolean;
};

export type InfiniteResponse<T> = {
	hasMore: boolean;
	data: T[];
};
