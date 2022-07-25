'use strict';
let showModal = document.querySelectorAll(`.show-modal`)
let theModal = document.querySelector(`.modal`)
let closeModal = document.querySelector(`.close-modal`)
let blurDiv = document.querySelector('.overlay')

function showTheModal() {
    theModal.classList.remove(`hidden`)
    blurDiv.classList.remove('hidden')
}

function hideTheModal() {
    theModal.classList.add(`hidden`)
    blurDiv.classList.add('hidden')
}

for (let eachbtn of showModal) {
    eachbtn.addEventListener(`click`, showTheModal)
}

closeModal.addEventListener(`click`, hideTheModal)
if (blurDiv.classList.contains(`hidden`)) blurDiv.addEventListener(`click`, hideTheModal)