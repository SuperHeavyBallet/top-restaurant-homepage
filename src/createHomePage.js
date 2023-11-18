export function createHomePage() {

    console.log('Contact');
    const contentContainer = document.querySelector('#content');

    const content = () => {

        //Main Content
        const mainContent = document.createElement('div');
        mainContent.id = 'main-content';
        contentContainer.appendChild(mainContent);

        const image = document.createElement('img');
        const title = document.createElement('h2');
        const paragraph = document.createElement('p');

        image.src = '/src/img/spaghetti.jpg';
        title.textContent = 'The most wonderful restaurant ever!'
        paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea dicta aliquid autem rem, magnam similique eum dolore nemo in eveniet esse labore consectetur? Laudantium quibusdam debitis deserunt nam ratione!';

        mainContent.appendChild(image);
        mainContent.appendChild(title);
        mainContent.appendChild(paragraph);
    };

    content();
  }
