import _, { add, forEach } from 'lodash';
import { createNavBar } from './createNavBar';
import { createHomePage } from './createHomePage';
import { createMenuPage } from './createMenuPage';
import { createContactPage } from './createContactPage';
import { removeContent } from './removeContent';



//create modules for 
// - Home Page
// - Menu Page
// - Content Page


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
            createMenuPage();
            
        }
        else if (button.id === 'contact-button')
        {
            removeContent();
            console.log('click contact');
            createContactPage();
            
        }

    });
});


