
import appendHeaderNav from "./appendHeaderNav";
import appendHomeContent from "./appendHomeContent";
import appendMenuContent from './appendMenuContent'
import appendContactContent from './appendContactContent'

export function initPage() {
    appendHeaderNav();
    appendHomeContent();

    // Append menu and contact but leave them hidden initially
    appendMenuContent();
    appendContactContent();

    const menuTab = document.getElementById("menu")
    menuTab.classList.add("hide")
    const contactTab = document.getElementById("contact")
    contactTab.classList.add("hide")
}

