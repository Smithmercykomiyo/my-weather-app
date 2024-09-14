function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#form-class-input");
  console.log(searchInput.value);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
}

let formClassElement = document.querySelector("#form-class");
formClassElement.addEventListener("submit", handleSearchSubmit);
