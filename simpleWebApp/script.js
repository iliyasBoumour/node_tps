let userTemplate = document.querySelector("template");
let usersContainer = document.querySelector(".users");
let searchInput = document.querySelector("#search");
let users = [];
const url = "https://jsonplaceholder.typicode.com/users";

function searching(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      users = data.map((user) => {
        setTemplate(user);
        return { name: user.name, website: user.website };
      });
    });
}
function setTemplate(user) {
  const clone = document.importNode(userTemplate.content, true);
  clone.querySelectorAll(".user")[0].id = user.name;
  const name = clone.querySelector(".header");
  const website = clone.querySelector(".body");
  name.textContent = user.name;
  website.textContent = user.website;
  usersContainer.appendChild(clone);
}
searching(url);
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  users.forEach(({ name, website }) => {
    document.getElementById(name).classList.remove("hide");
    if (name.indexOf(value) <= -1 && website.indexOf(value) <= -1) {
      const userDiv = document.getElementById(name);
      userDiv.classList.add("hide");
    }
  });
});
