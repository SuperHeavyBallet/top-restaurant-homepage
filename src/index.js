import _, { add, forEach } from 'lodash';
import { createNavBar } from './createNavBar';
import { createHomePage } from './createHomePage';
import { createMenuPage } from './createMenuPage';
import { createContactPage } from './createContactPage';
import { removeContent } from './removeContent';






createNavBar();
createHomePage();


const navBarButtons = document.querySelectorAll('.navbar-buttons')

navBarButtons.forEach((button) => {
    button.addEventListener('click', () => {

        if (button.id === 'home-button')
        {
            removeContent();
            createHomePage();
        }
        else if (button.id === 'menu-button')
        {
            removeContent();
            console.log('click menu');
            createMenuPage(
                ['Spaghetti Bolognese', 'Pizza', 'Burger', 'Sandwich', 'Salad'],
                ['/src/img/spaghetti.jpg', '/src/img/pizza.jpg', '/src/img/burger.jpg', '/src/img/sandwich.jpg', '/src/img/salad.jpg']
                );
            
        }
        else if (button.id === 'contact-button')
        {
            removeContent();
            console.log('click contact');
            createContactPage();
            
        }

    });
});


