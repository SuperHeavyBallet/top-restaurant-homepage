export function createContactPage() {

    const contentContainer = document.querySelector('#content');

    const content = () => {

        //Main Content
        const mainContent = document.createElement('div');
        mainContent.id = 'main-content';
        contentContainer.appendChild(mainContent);



        const title = document.createElement('h2');
        title.classList.add('content-title');
        title.textContent = 'Contact Us!'

        const paragraph = document.createElement('p');
        paragraph.classList.add('content-text');
        paragraph.textContent = 'You can find us on the corner of 53rd and 2nd Street, New Gawk!';

        const paragraph1 = document.createElement('p');
        paragraph1.classList.add('content-text');
        paragraph1.textContent = '2, 53 West Bowling, New Gawk, NUS';

        const paragraph2 = document.createElement('p');
        paragraph2.classList.add('content-text');
        paragraph2.textContent = '01-68955-257';
   
        
        mainContent.appendChild(title);
        
        mainContent.appendChild(paragraph);
        mainContent.appendChild(paragraph1);
        mainContent.appendChild(paragraph2);
   
    };

    content();
  }
