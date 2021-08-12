import Pizza from './pizza.jpg';
import Location from './location.png'


export default function appendHomeContent() {
    const contentDiv = document.querySelector(".content")

    // creating home tab content
    const tabContent = document.createElement('div')
    tabContent.classList.add('tab-content')
    tabContent.id = "home"

    const subHeader = document.createElement('h2')
    subHeader.textContent = "Come on down for some delicious food!"
    const pizzaImage = new Image()
    pizzaImage.src = Pizza

    const orderNow = document.createElement('button')
    orderNow.textContent = "Order Now"

    const locationWrapper = document.createElement('div')
    locationWrapper.classList.add("location-wrapper")
    const locationIcon = new Image()
    locationIcon.src = Location
    locationIcon.id = "location-icon"
    const address = document.createElement('p')
    address.textContent = '14 Maple Street, Balwyn'
    locationWrapper.append(locationIcon, address)

    tabContent.append(subHeader, pizzaImage, orderNow, locationWrapper)
    contentDiv.append(tabContent)
}