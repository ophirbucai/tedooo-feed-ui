import { BACKEND_ENDPOINTS } from "./endpoints";
import type { InfiniteResponse, Post } from "./types";
import DUMMY_DATA from "./data.json";

let simulatedBackend = location.host !== "localhost:3000";

export async function getPosts(skip = 0, maxPerPage = 6) {
	if (simulatedBackend) {
		const result = {
			hasMore: DUMMY_DATA.length > skip + maxPerPage,
			data: DUMMY_DATA.slice(skip, skip + maxPerPage),
		} satisfies InfiniteResponse<Post>;
		console.log("Fetched", result);
		return result;
	}
	try {
		const response = await fetch(`${BACKEND_ENDPOINTS.FEED}?skip=${skip}`);
		const data: Promise<InfiniteResponse<Post>> = await response.json();
		return data;
	} catch {
		simulatedBackend = true;
		return getPosts(skip, maxPerPage);
	}
}

export async function sendImpression(id: string) {
	if (simulatedBackend) {
		console.log("Sent an impression", id);
		return;
	}
	return fetch(`${BACKEND_ENDPOINTS.IMPRESSION}?itemId=${id}`);
}
