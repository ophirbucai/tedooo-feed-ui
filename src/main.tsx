import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/700.css";
import "./assets/styles/main.scss";
import { initPluginsDayJS } from "./lib/dayjs";

initPluginsDayJS();

import App from "./App.tsx";

createRoot(document.getElementById("root") as HTMLElement).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
