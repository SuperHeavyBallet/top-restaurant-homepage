import _, { add, forEach } from 'lodash';
import { createNavBar } from './createNavBar';
import { createHomePage } from './createContent';
import { removeContent } from './removeContent';



//create modules for 
// - Home Page
// - Menu Page
// - Content Page

//add event listeners to each button
//on click button > do related function to load suitable elements vs loading new page

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
        }
        else if (button.id === 'contact-button')
        {
            removeContent();
        }

    });
});


