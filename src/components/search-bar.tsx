import SearchIcon from "../assets/icons/common/search.svg?react";

export function SearchBar() {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		const searchEl = (e.target as HTMLFormElement).children.namedItem(
			"search",
		) as HTMLInputElement;
		if (searchEl.value.trim() !== "") {
			console.log("Search value", searchEl.value);
		}
	}
	return (
		<form onSubmit={handleSubmit} method="POST" className="search-bar">
			<label>
				<SearchIcon width={16} height={16} />
				<input type="text" placeholder="Search" id="search" />
			</label>
		</form>
	);
}
