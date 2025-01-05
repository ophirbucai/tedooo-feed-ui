import { Outlet } from "react-router";
import { Header } from "./header";

const currentUser = {
	image:
		"https://s3-alpha-sig.figma.com/img/221a/056c/8648ad917d5ce4117fc3c56ceb4adf90?Expires=1736726400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CHh5X6NYKuyt-05WCmBR02qcJeHVurgBL0jpUbFEq6PUzOtE25j6ytrrn7elF1PjJSLKH-wjRFDJjTa449sTcfjZ1GBM0ViFkj2dcMK4OY2Uogyjhtq96BKBe7gWCt91XgAAZiRCNyRMvCukeAA0yA2YPe6LuFSl2sOpem8upsj9zVOWPTJnws9sN0C~dYUjyk3BSwB1uhm7exvt2u5L9LjTRuxWGjYcRLHNaQQE56g0j4BSG2haZxM6ZbhcVesOhSkk5inOg7o98rbcEfTv-MVChXQGYz9tSJX2kvOzaSM7ZOtFcDVEUzv5sCzweOt3hB2uQGsSYiMy3o3GCwYAlg__",
};

export function AppLayout() {
	return (
		<div className="app-layout">
			<header className="app-layout__header">
				<Header user={currentUser} />
			</header>
			<main className="app-layout__content">
				<Outlet />
			</main>
		</div>
	);
}
