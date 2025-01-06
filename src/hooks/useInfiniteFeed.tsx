import { useState, useEffect, useCallback, useRef } from "react";
import type { InfiniteResponse, Post } from "../lib/types";

const FEED_ENDPOINT_URL = `${import.meta.env.VITE_BACKEND_URL}/hw/feed.json`;

const useInfiniteFeed = () => {
	const firstRender = useRef(true);
	const [posts, setPosts] = useState<Post[]>([]);
	const [hasMore, setHasMore] = useState(true);
	const [loading, setLoading] = useState(false);
	const [skip, setSkip] = useState(0);

	const fetchPosts = useCallback(async () => {
		if (!hasMore || loading) return;

		setLoading(true);
		firstRender.current = false;

		try {
			// const response = await fetch(`${FEED_ENDPOINT_URL}?skip=${skip}`);
			// const res: InfiniteResponse<Post> = await response.json();
			const res: typeof data = await new Promise((res) =>
				setTimeout(() => {
					res({
						...data,
						data: [data.data[skip]],
						hasMore: data.data.length - 1 > skip,
					});
				}, 3500),
			);
			setPosts((prevPosts) => [...prevPosts, ...res.data]);
			setHasMore(res.hasMore);
			setSkip((prevSkip) => prevSkip + res.data.length);
		} catch (error) {
			console.error("Failed to fetch posts:", error);
		} finally {
			setLoading(false);
		}
	}, [hasMore, loading, skip]);

	// biome-ignore lint/correctness/useExhaustiveDependencies: Should occur only once on first load
	useEffect(() => {
		if (firstRender.current) fetchPosts();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { posts, hasMore, loading, fetchMore: fetchPosts };
};

export default useInfiniteFeed;

const data = {
	hasMore: true,
	data: [
		{
			id: "6318751da037be08c3b94046",
			userId: "6282267febfcb07f771359c7",
			username: "craftyfun",
			avatar:
				"https://images.tedooo.com/biz/6282267febfcb07f771359c7/5173eadb-0c97-4850-8892-9df4c442c238.jpg",
			shopName: "Crafts ideas",
			shopId: "628227cdebfcb07f771359ce",
			images: [
				"https://images.tedooo.com/biz/6282267febfcb07f771359c7/d2b86a82-a665-4759-b832-d48f292e2c0b.jpg",
			],
			comments: 263,
			date: "2022-09-06T14:40:29.347Z",
			text: "Upload the last 3 pictures of handmade items you’ve made or bought!",
			likes: 2142,
			didLike: false,
			premium: true,
		},
		{
			id: "6317155754c28a17ace8f82c",
			userId: "62e984eca4ff286b57699578",
			username: "melissabel",
			avatar:
				"https://images.tedooo.com/biz/62e984eca4ff286b57699578/01fda2c9-85c8-44f8-a1c7-f20a628c9dfb.jpg",
			shopName: "",
			shopId: "",
			images: [
				"https://images.tedooo.com/biz/62e984eca4ff286b57699578/6dbc294b-4959-44f3-aca0-ba82799e28ab.jpg",
			],
			comments: 11,
			date: "2022-09-06T09:39:35.727Z",
			text: 'Hagámoslo el post más largo de "Hecho A Mano". Publica cualquier manualidad que hayas hecho,\n            Vamos!\n        ',
			likes: 112,
			didLike: false,
			premium: false,
		},
		{
			id: "6319f52ed519ba15e06d72a7",
			userId: "631762c2a2967db5fdc89596",
			username: "vintage57",
			avatar:
				"https://images.tedooo.com/biz/631762c2a2967db5fdc89596/e7fa1bd9-adb8-4ba5-bf2b-80e8909ed4ed.jpg",
			shopName: "Vintage 57",
			shopId: "6317638ba2967db5fdc895a4",
			images: [
				"https://images.tedooo.com/biz/631762c2a2967db5fdc89596/60e88bbd-1a16-46df-861d-99dbf3076230.jpg",
				"https://images.tedooo.com/biz/631762c2a2967db5fdc89596/be5ea7dc-69cc-451e-b641-be09e6d0c3cd.jpg",
				"https://images.tedooo.com/biz/631762c2a2967db5fdc89596/760233af-57dd-400c-8942-213461d9cea4.jpg",
			],
			comments: 0,
			date: "2022-09-08T13:59:10.012Z",
			text: "some new teal & black glitter Halloweenies",
			likes: 102,
			didLike: true,
			premium: false,
		},
		{
			id: "6319ec1a6b1b2acc7df75e15",
			userId: "6254e599f625234b67ec881f",
			username: "zenmalas",
			avatar:
				"https://images.tedooo.com/6254e599f625234b67ec881f/945dea80-1002-4e24-af6b-7a276cf6de07.jpg",
			shopName: "Shop number",
			shopId: "6254e7f35596798fd53199fd",
			images: [
				"https://images.tedooo.com/biz/6254e599f625234b67ec881f/a5797c4c-cc1e-4387-9107-dec8a8af7638.jpg",
			],
			comments: 0,
			date: "2022-09-08T13:20:26.478Z",
			text: "",
			likes: 945,
			didLike: true,
			premium: false,
		},
		{
			id: "6319eb6cd519ba15e06d7290",
			userId: "6318e42f1e092fadca580648",
			username: "bmkapparel",
			avatar:
				"https://images.tedooo.com/biz/6318e42f1e092fadca580648/d1d767f5-8956-4ad4-9ed8-30ee923bc6b2.jpg",
			shopName: "BMK Apparel & More",
			shopId: "6318e5d4e475b6486f6e7524",
			images: [
				"https://images.tedooo.com/biz/6318e42f1e092fadca580648/5e4a4b77-fcb3-4b3f-978a-bacdd778daa4.jpg",
			],
			comments: 0,
			date: "2022-09-08T13:17:32.762Z",
			text: "95% polyester, soft feel, unisex sizing",
			likes: 0,
			didLike: false,
			premium: false,
		},
		{
			id: "6319eacd6b1b2acc7df75e08",
			userId: "6318e42f1e092fadca580648",
			username: "bmkapparel",
			avatar:
				"https://images.tedooo.com/biz/6318e42f1e092fadca580648/d1d767f5-8956-4ad4-9ed8-30ee923bc6b2.jpg",
			shopName: "BMK Apparel & More",
			shopId: "6318e5d4e475b6486f6e7524",
			images: [
				"https://images.tedooo.com/biz/6318e42f1e092fadca580648/2f10fbf3-1202-438c-8ab1-835594f212a4.jpg",
				"https://images.tedooo.com/biz/6318e42f1e092fadca580648/81930fac-518d-4841-b968-ec0a5d0e6f3c.jpg",
				"https://images.tedooo.com/biz/6318e42f1e092fadca580648/3a5d3717-8aa1-485c-b0cd-c3ddc7415335.jpg",
				"https://images.tedooo.com/biz/6318e42f1e092fadca580648/0de6e932-8275-43d2-9ac9-c992aba89b65.jpg",
			],
			comments: 0,
			date: "2022-09-08T13:14:53.63Z",
			text: "Shirts added!! More to come 😉😳",
			likes: 11,
			didLike: false,
			premium: false,
		},
	],
};
