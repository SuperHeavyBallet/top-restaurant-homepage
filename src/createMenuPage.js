export function createMenuPage(itemNames, itemImages) {

    const contentContainer = document.querySelector('#content');

    const content = () => {

        //Main Content
        const mainContent = document.createElement('div');
        mainContent.id = 'main-content';
        contentContainer.appendChild(mainContent);

        //Create Recipe

        for (let i = 0; i < itemNames.length; i++)
        {
            const recipeContainer = document.createElement('div');
            recipeContainer.classList.add('recipe-container');
            mainContent.appendChild(recipeContainer);

            const title = document.createElement('h2');
            title.classList.add('content-title');
            title.textContent = itemNames[i];

            const image = document.createElement('img');
            image.classList.add('content-image');
            image.src = itemImages[i];

            

            const paragraph = document.createElement('p');
            paragraph.classList.add('content-text');
            paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea dicta aliquid autem rem, magnam similique eum dolore nemo in eveniet esse labore consectetur? Laudantium quibusdam debitis deserunt nam ratione!';
            
            const paragraph1 = document.createElement('p');
            paragraph1.classList.add('content-text');
            paragraph1.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea dicta aliquid autem rem, magnam similique eum dolore nemo in eveniet esse labore consectetur? Laudantium quibusdam debitis deserunt nam ratione!';
            
            const paragraph2 = document.createElement('p');
            paragraph2.classList.add('content-text');
            paragraph2.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ea dicta aliquid autem rem, magnam similique eum dolore nemo in eveniet esse labore consectetur? Laudantium quibusdam debitis deserunt nam ratione!';
            
            
            recipeContainer.appendChild(title);
            recipeContainer.appendChild(image);
            
            const paragraphs = [paragraph, paragraph1, paragraph2];
            for (let i = 0; i < paragraphs.length; i++)
            {
                recipeContainer.appendChild(paragraphs[i]);
            }
            

        }
    };

    content();
  }
