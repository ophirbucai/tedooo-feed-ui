const BACKEND_URL =
	import.meta.env.VITE_BACKEND_URL || "https://backend.tedooo.com";

export const BACKEND_ENDPOINTS = {
	FEED: `${BACKEND_URL}/hw/feed.json`,
	IMPRESSION: BACKEND_URL,
};
