// Essa const irá armazenar todos os card encontrado na estrutura HTML
const cards = document.querySelectorAll('.card')

// Essa const irá armazenar todos os dropzones encontrado na estrutura HTML
const dropzones = document.querySelectorAll('.dropzone')

// Para cada card será executada uma função
cards.forEach(card => {
    // Add events a cada card atribuído a uma function:
    card.addEventListener('dragstart', dragstart)
    card.addEventListener('drag', drag)
    card.addEventListener('dragend', dragend)
})

// Declarando functions que serão atribuídas aos events dos cards:

function dragstart() {
    // console.log('> CARD: Start dragging')
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
}

function drag() {
    // console.log('> CARD: IS dragging')
}

function dragend() {
    // console.log('> CARD: Stop drag')
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}

/** Place where we will drop cards */

// Para cada dropzone será executada uma função
dropzones.forEach( dropzone => {
    // Add events a cada dropzone atribuído a uma function:
    dropzone.addEventListener('dragenter', dragenter)
    dropzone.addEventListener('dragover', dragover)
    dropzone.addEventListener('dragleave', dragleave)
    dropzone.addEventListener('drop', drop)
})

function dragenter() {
    // log('DROPZONE: Enter in zone ')
}

function dragover() {
    // this = dropzone
    this.classList.add('over')

    // get dragging card
    const cardBeingDragged = document.querySelector('.is-dragging')

    // this = dropzone
    this.appendChild(cardBeingDragged)
}

function dragleave() {
    // log('DROPZONE: Leave ')
    // this = dropzone
    this.classList.remove('over')

}

function drop() {
    // log('DROPZONE: dropped ')
    this.classList.remove('over')
}



