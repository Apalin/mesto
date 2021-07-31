
//Открытие закрытие попапа

const editButton = document.querySelector(".profile__edit-button");
const closeButton = document.querySelector(".popup__close");
const popup = document.querySelector(".popup");

let formElement = document.querySelector(".popup__container")
let nameInput = formElement.querySelector(".popup__input-name")
let jobInput = formElement.querySelector(".popup__input-work")


function togglePopup () {
popup.classList.toggle("popup_is-opened")

nameInput.value = document.querySelector(".profile__name").textContent;
jobInput.value = document.querySelector(".profile__description").textContent;

}

function closePopup () {
  popup.classList.remove("popup_is-opened")
  }

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    // Получите значение полей jobInput и nameInput из свойства value

    let name = nameInput.value;
    let job = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей

    let profileName = document.querySelector(".profile__name");
    let profileJob = document.querySelector(".profile__description");

    // Вставьте новые значения с помощью textContent

    profileName.textContent = name;
    profileJob.textContent = job;

    closePopup ()
}

editButton.addEventListener("click", togglePopup);
closeButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", formSubmitHandler);
