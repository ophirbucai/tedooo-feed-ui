import { lazy, Suspense } from "react";
import { NavLink } from "react-router";

const NAVIGATION_LINKS = [
	{
		href: "/",
		Icon: lazy(() => import("../assets/icons/navigation/home.svg?react")),
		content: "Home",
	},
	{
		href: "/messaging",
		Icon: lazy(() => import("../assets/icons/navigation/messaging.svg?react")),
		content: "Messaging",
	},
	{
		href: "/notifications",
		Icon: lazy(
			() => import("../assets/icons/navigation/notifications.svg?react"),
		),
		content: "Notifications",
	},
];

export function Navigation() {
	return (
		<nav className="navigation">
			<ul>
				{NAVIGATION_LINKS.map(({ href, content, Icon }) => (
					<NavLink to={href} key={href} className="nav-link">
						<Suspense>
							<Icon />
						</Suspense>{" "}
						{content}
					</NavLink>
				))}
			</ul>
		</nav>
	);
}
