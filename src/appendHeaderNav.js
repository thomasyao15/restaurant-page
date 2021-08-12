
export default function appendHeaderNav() {
    const contentDiv = document.querySelector(".content")

    // Page main header    
    const header = document.createElement('h1')
    header.textContent = "Thomash's Bare Bones Restaurant"
    contentDiv.append(header)

    // Creating nav bar
    const navBar = document.createElement('div')
    navBar.classList.add("nav-bar")
    const homeButton = document.createElement('button')
    homeButton.id = "home-button"
    const menuButton = document.createElement('button')
    menuButton.id = "menu-button"
    const contactButton = document.createElement('button')
    contactButton.id = "contact-button"
    homeButton.textContent = "Home"
    menuButton.textContent = "Menu"
    contactButton.textContent = "Contact Us"
    navBar.append(homeButton, menuButton, contactButton)
    contentDiv.append(navBar)
}
