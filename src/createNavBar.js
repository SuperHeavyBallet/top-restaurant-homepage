export function createNavBar() {

    const contentContainer = document.querySelector('#content');

    const content = () => {

        const navBar = document.createElement('nav');
        const navBarHome = document.createElement('h2');
        const navBarMenu = document.createElement('h2');
        const navBarContact = document.createElement('h2');

        navBar.classList.add('navbar');

        navBarHome.setAttribute("id", "home-button");
        navBarHome.classList.add("navbar-buttons");

        navBarMenu.setAttribute("id", "menu-button");
        navBarMenu.classList.add("navbar-buttons");

        navBarContact.setAttribute("id", "contact-button");
        navBarContact.classList.add("navbar-buttons");

        navBarHome.textContent = 'Home';
        navBarMenu.textContent = 'Menu';
        navBarContact.textContent = 'Contact';

        navBar.appendChild(navBarHome);
        navBar.appendChild(navBarMenu);
        navBar.appendChild(navBarContact);

        contentContainer.appendChild(navBar);
    };

    content();
  }
