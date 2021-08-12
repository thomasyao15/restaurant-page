import Icecream from './icecream.jpg'

export default function appendHomeContent() {
    const contentDiv = document.querySelector(".content")

    // creating menu content
    const tabContent = document.createElement('div')
    tabContent.classList.add('tab-content')
    tabContent.id = "menu"

    const subHeader = document.createElement('h2')
    subHeader.textContent = "Our delicious menu"

    const iceCreamImage = new Image()
    iceCreamImage.src = Icecream

    const price = document.createElement('p')
    price.textContent = '$15 - Raspberry Icecream'

    tabContent.append(subHeader, iceCreamImage, price)
    contentDiv.append(tabContent)
}