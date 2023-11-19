export function createHomePage() {

    console.log('Contact');
    const contentContainer = document.querySelector('#content');

    const content = () => {

        //Main Content
        const mainContent = document.createElement('div');
        mainContent.id = 'main-content';
        contentContainer.appendChild(mainContent);

        const image = document.createElement('img');
        image.classList.add('content-image');
        image.src = '/src/img/spaghetti.jpg';

        const title = document.createElement('h2');
        title.classList.add('content-title');
        title.textContent = 'The most wonderful restaurant ever!'

        const paragraph = document.createElement('p');
        paragraph.classList.add('content-text');
        paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea dicta aliquid autem rem, magnam similique eum dolore nemo in eveniet esse labore consectetur? Laudantium quibusdam debitis deserunt nam ratione!';
        
        
        
        mainContent.appendChild(title);
        mainContent.appendChild(image);
        mainContent.appendChild(paragraph);
    };

    content();
  }
