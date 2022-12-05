const search = document.querySelector(".search__input");
const recommend = document.querySelector(".search__recommendations");

search.addEventListener("focus", () => recommend.classList.add("focus"));
search.addEventListener("blur", () => recommend.classList.remove("focus"));