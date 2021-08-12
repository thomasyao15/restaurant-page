
import { initPage } from './initPage';
import './style.css';

function setNavButtonListeners() {
    const homeButton = document.getElementById("home-button")
    homeButton.addEventListener("click", handleHomeButtonClick)

    const menuButton = document.getElementById("menu-button")
    menuButton.addEventListener("click", handleMenuButtonClick)

    const contactButton = document.getElementById("contact-button")
    contactButton.addEventListener("click", handleContactButtonClick)
}

function showTab(tabId) {
    const targetTab = document.getElementById(tabId)
    targetTab.classList.remove("hide")
}

function hideTab(tabId) {
    const targetTab = document.getElementById(tabId)
    targetTab.classList.add("hide")
}

function handleHomeButtonClick() {
    showTab("home")
    hideTab("menu")
    hideTab("contact")
}

function handleMenuButtonClick() {
    showTab("menu")
    hideTab("home")
    hideTab("contact")
}

function handleContactButtonClick() {
    showTab("contact")
    hideTab("home")
    hideTab("menu")
}


initPage();
setNavButtonListeners();
