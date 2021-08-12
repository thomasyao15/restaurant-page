
export default function initPage() {
    const header = document.createElement('h1')
    header.textContent = "Thomash's Bare Bones Restaurant"

    const navBar = document.createElement('div')
    navBar.classList.add("nav-bar")
    const homeButton = document.createElement('button')
    const menuButton = document.createElement('button')
    const contactButton = document.createElement('button')
    homeButton.textContent = "Home"
    menuButton.textContent = "Menu"
    contactButton.textContent = "Contact Us"

    navBar.append(homeButton, menuButton, contactButton)
    
    const contentDiv = document.querySelector(".content")
    contentDiv.append(header, navBar)
}