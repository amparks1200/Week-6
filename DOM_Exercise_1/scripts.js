function main() {
const grow = document.getElementById("grow-me");
grow.classList.add("big");

const shrink = document.getElementById("shrink-me");
shrink.classList.remove("big");

const lists = document.querySelectorAll("li");
for (let i = 0 < lists.length; i++); {
    console.log(lists[i].textContent);
}

const link = document.querySelector(".link");
link.setAttribute("href", "https://www.example.com");
link.innerText = "somewhere";

const hide = document.getElementById("hide-me");
hide.style.display = "none";

const show = document.querySelector("#show-me");
show.style.display = "block";

const enterName = document.getElementById("name");
const txt = enterName.value;
document.querySelector(".h1").innerText = txt;
}

