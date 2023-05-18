const textareaEl = document.getElementById("textarea");
const totalCharacterEl = document.getElementById("totalCharacter");
const remainingCharacterEl = document.getElementById("remainingCharacter");


textareaEl.addEventListener("keyup", function(){
    updateCounter();
});

updateCounter();

function updateCounter(){
    totalCharacterEl.innerText = textareaEl.value.length;
    remainingCharacterEl.innerText = textareaEl.getAttribute("maxlength") - textareaEl.value.length;
}