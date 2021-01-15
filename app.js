// replicate a json file
const menuData = [
    {
        img: './images/item-1.jpg',
        name: 'The Crispy Bun',
        price: '13.99',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rerum quod corrupti voluptate rem nobis ratione blanditiis modi aspernatur obcaecati?'
    },
    {
        img: './images/item-2.jpeg',
        name: 'Gourdon Hamsey',
        price: '13.99',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rerum quod corrupti voluptate rem nobis ratione blanditiis modi aspernatur obcaecati?'
    },
    {
        img: './images/item-3.jpg',
        name: 'Eggers Cant Be Cheesers',
        price: '15.99',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rerum quod corrupti voluptate rem nobis ratione blanditiis modi aspernatur obcaecati?'
    },
    {
        img: './images/item-4.jpg',
        name: 'Sweet Home Avocado',
        price: '16.99',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rerum quod corrupti voluptate rem nobis ratione blanditiis modi aspernatur obcaecati?'
    },
    {
        img: './images/item-5.jpeg',
        name: 'Peas And Thank You',
        price: '16.99',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rerum quod corrupti voluptate rem nobis ratione blanditiis modi aspernatur obcaecati?'
    },
    {
        img: './images/item-6.jpg',
        name: 'Bohemian Radishy',
        price: '13.99',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rerum quod corrupti voluptate rem nobis ratione blanditiis modi aspernatur obcaecati?'
    },
    {
        img: './images/item-7.jpg',
        name: 'Dont You Four Cheddar Bout Me',
        price: '14.99',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rerum quod corrupti voluptate rem nobis ratione blanditiis modi aspernatur obcaecati?'
    },
    {
        img: './images/item-8.jpeg',
        name: 'Baby You Can Chive My Car',
        price: '13.99',
        desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea rerum quod corrupti voluptate rem nobis ratione blanditiis modi aspernatur obcaecati?'
    },
];

//IIFE
( () => {

    // loop over all key in menuData
    for (let key in menuData) {
        
        // initialize variables
        const section = document.body.children[1];
        const img = menuData[key].img;
        const name = menuData[key].name;
        const price = menuData[key].price;
        const desc = menuData[key].desc;

        // assign new article element to item
        const item = `<article>
                        <div class="image-container">
                            <img src="${img}">
                        </div>
                        <div class="item-info">
                            <div class="item-title">
                                <p>${name}</p>
                                <p>$${price}</p>
                            </div>
                            <div class="item-description">
                                <p>${desc}</p>
                            </div>
                        </div>
                    </article>`

        // insert item to HTML document
        section.insertAdjacentHTML('beforeend', item);
    }

})();

const displayFilter = (array) => {

    // assign html section
    const section = document.body.children[1];

    // while first child element exist remove first child
    while (section.firstElementChild) {
        section.firstElementChild.remove();
    }
    
    // loop over all key in array
    for (let key in array) {
        
        // iniitialize variables
        const img = array[key].img;
        const name = array[key].name;
        const price = array[key].price;
        const desc = array[key].desc;

        // assign new article element to item
        const item = `<article>
                        <div class="image-container">
                            <img src="${img}">
                        </div>
                        <div class="item-info">
                            <div class="item-title">
                                <p>${name}</p>
                                <p>$${price}</p>
                            </div>
                            <div class="item-description">
                                <p>${desc}</p>
                            </div>
                        </div>
                    </article>`

        // insert item to HTML document
        section.insertAdjacentHTML('beforeend', item);
    }
};

const getAll = () => {

    // filter menuData
    const all = menuData.filter( (menu) => {

        // return objects with price > 10
        return menu.price > 10;
    })

    // call displayFilter function
    displayFilter(all);
        
}

const getPremium = () => {

    // filter menuData
    const premium = menuData.filter( (menu) => {

        // return object with price > 16
        return menu.price > 16;
    })

    // call displayFilter function
    displayFilter(premium);
};

const getClassic = () => {

    // filter menuData
    const classic = menuData.filter( (menu) => {

        // return object with price < 14
        return menu.price < 14;
    })

    // call displayFilter function
    displayFilter(classic);
};

// assign all buttons
const buttons = document.querySelectorAll('.buttons');

// add event listener for each button
buttons.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        
        // assign current target id
        const id = e.target.id;

        // check if id is equal to all
        if (id === 'all') {

            // call getAll function
            getAll();
        }

        // check if id is equal to premium
        if (id === 'premium') {

            // call getPremium function
            getPremium();
        }

        // check if id is equal to classic
        if (id === 'classic') {

            // call getPremium function
            getClassic();
        }
    })
})