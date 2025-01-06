import { useEffect, useRef } from "react";

export function useOnVisible(
	callback?: (observer: IntersectionObserverEntry) => void | Promise<void>,
	options: IntersectionObserverInit = {},
) {
	const ref = useRef<HTMLElement>(null);

	useEffect(() => {
		const element = ref.current;
		const observer = new IntersectionObserver(([entry]) => {
			const inView = entry.isIntersecting;
			if (inView && callback) {
				callback(entry);
			}
		}, options);

		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
			observer.disconnect();
		};
	}, [callback, options]);

	return ref;
}
