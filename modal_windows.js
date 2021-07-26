const modalSignIn = document.querySelector(".modal__sign-in");
const modalSignUp = document.querySelector(".modal__sign-up");
const btnOpenSignIn = document.querySelector(".sign-in");
const btnOpenSignUp = document.querySelector(".sign-up");
const closeSignIn = document.querySelector(".close__sign-in");
const closeSignUp = document.querySelector(".close__sign-up");
/* Advanced Search */
const popupSearchEl = document.querySelector(".popup-search-hidden");
const overlay = document.querySelector(".overlay");
const searchInputs = document.querySelectorAll(".search input");
const searchSelect = document.querySelector(
  ".popup-search-hidden .search-genres"
);

const resetSearchValues = function () {
  for (let input of searchInputs) {
    input.value = "";
  }
  searchSelect.value = searchSelect.options[0].value;
};

document
  .querySelector(".parametersSearchBtn")
  .addEventListener("click", function () {
    popupSearchEl.classList.toggle("popup-search");

    if (popupSearchEl.classList.contains("popup-search")) {
      overlay.classList.remove("hidden");
    }
    overlay.addEventListener("click", function () {
      popupSearchEl.classList.remove("popup-search");
      overlay.classList.add("hidden");
      resetSearchValues();
    });
  });

document
  .querySelector(".popup-search-btn")
  .addEventListener("click", function () {
    popupSearchEl.classList.toggle("popup-search");
    overlay.classList.add("hidden");
    resetSearchValues();
  });
/* / Advanced Search */
btnOpenSignIn.addEventListener("click", function () {
  modalSignIn.classList.toggle("hidden");
  overlay.classList.remove("hidden");
});
closeSignIn.addEventListener("click", function () {
  modalSignIn.classList.add("hidden");
  overlay.classList.add("hidden");
});
btnOpenSignUp.addEventListener("click", function () {
  modalSignUp.classList.toggle("hidden");
  overlay.classList.remove("hidden");
});
closeSignUp.addEventListener("click", function () {
  modalSignUp.classList.add("hidden");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  modalSignIn.classList.add("hidden");
  modalSignUp.classList.add("hidden");
  overlay.classList.add("hidden");
});
