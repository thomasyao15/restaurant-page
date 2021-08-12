
export default function appendContactContent() {
    const contentDiv = document.querySelector(".content")

    // creating contact content
    const tabContent = document.createElement('div')
    tabContent.classList.add('tab-content')
    tabContent.id = "contact"

    const subHeader = document.createElement('h2')
    subHeader.textContent = "Contact Us"

    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '0463 274 384 - call Thomash'

    tabContent.append(subHeader, phoneNumber)
    contentDiv.append(tabContent)
}