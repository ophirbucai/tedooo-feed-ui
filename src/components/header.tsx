import type { User } from "../lib/types";
import { Avatar } from "./avatar";
import { Navigation } from "./navigation";
import { TedoooLogo } from "./tedooo-logo";

export function Header({ user }: { user: User }) {
	return (
		<div className="header">
			<TedoooLogo />
			<Navigation />
			<Avatar src={user.image} alt="User Profile" size={40} />
		</div>
	);
}
