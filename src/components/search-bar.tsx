import SearchIcon from "../assets/icons/common/search.svg?react";

export function SearchBar() {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
	}
	return (
		<form onSubmit={handleSubmit} method="POST">
			<label>
                <SearchIcon />
				<input type="text" placeholder="Search" />
			</label>
		</form>
	);
}
