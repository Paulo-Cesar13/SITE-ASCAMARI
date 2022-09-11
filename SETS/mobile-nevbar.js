class MobileNavbar {
    constructor() {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", () => console.log("hey dog"));
    }

    int() {
        if(this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new mobileNavbar(
    ".mobile-menu",
    ".nave-list",
    ".nave-list li"
);