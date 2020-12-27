// create map
const map = L.map('mapid').setView([-16.6399859, -49.2367302], 16);

// create and add titleLayer
L
    .tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
    .addTo(map);


// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer{
    marker = L.marker([lat, lng], { icon })
        .addTo(map)
})

// add photos field
function addPhotoField() {

    // pegar o container de fotos #images
    const container = document.querySelector('#images')
    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // realizar o clone da ultima imagem adicionada
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    if (input.value == "") {
        return
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""

    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove()
}

// seleção do sim ou não
function toggleSelect(event) {

    // atualizar o input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')

    // retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button')
        .forEach(function (button) {
            button.classList.remove('active')
        })
    // colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // verificar se sim ou não
    input.value = button.dataset.value

    if (input.value == 0) {
        var element = document.getElementById("cor");
        element.style.color = "red";
        element.style.border = "2px solid red";
        element.style.backgroundColor = "#ffbcbc";
    }
    else {
        var element = document.getElementById("cor");
        element.style.color = "";
        element.style.border = "";
        element.style.backgroundColor = "#ffff"
    }

}