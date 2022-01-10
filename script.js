const inputName = document.querySelector(".form_input--name");
const inputDesc = document.querySelector(".form_input--desc");
const btnAdd = document.querySelector(".btnAddInput");
const containerMovment = document.querySelector(".movement_display--main");

console.log("hello");
btnAdd.addEventListener("click", function (event) {
  event.preventDefault();

  const name = inputName.value;
  const desc = inputDesc.value;
  console.log(name, desc);
  const html = ` <div class="movement_type movement_row--main">
  <div class="movement_row movement_row--name">${name}</div>
  <div class="movement_row movement_row--desc">
    <p>${desc}</p>
  </div>
  <div>
    <button class="movement_row movement_row--btn">Details</button>
    <button class="movement_row movement_row--btn">Apply</button>
  </div>
</div>`;
  containerMovment.insertAdjacentHTML("afterbegin", html);
});

function apply() {
  const body = document.querySelector("body");
  body.style.zIndex = "1";
}
