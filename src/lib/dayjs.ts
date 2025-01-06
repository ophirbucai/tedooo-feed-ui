import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

export function initPluginsDayJS() {
	dayjs.extend(relativeTime);
	dayjs.extend(updateLocale);
	dayjs.updateLocale("en", {
		relativeTime: {
			future: "in %s",
			past: "%s ago",
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
}
