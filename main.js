const brewmasters = [
    {
        name : "Daniel Fornica",
        github: "https://github.com/Dannyboy85",
        imageUrl: "https://avatars2.githubusercontent.com/u/38631819?s=400&u=dce6bc66d171b8fb61df5fb4ab16df1e405b8b5e&v=4",
        imageAlt: 'Image of Daniel looking off to the side.',
        description: "One of the most distinct beers you will ever have. It black colour and froth make the drink almost liquid meal. Very filling with bitter taste",

    },
    {
        name : "Sarah Thorne",
        github: "https://github.com/sarahjulesthorne",
        imageUrl: "https://avatars1.githubusercontent.com/u/47871647?s=400&v=4",
        imageAlt: 'Image of a laptop displaying an alert that says "Hello world, I am Sarah Thorne". Black gloved hands are poised as if to type on the keyboard.',
        description: "My favorite brewery is slightly odd around the edges and a bit wrinkled. Their beer has the taste of yesterdays fondly remembered with hints of that time you forgot about. I go there often, when the future seems inexplicably unreadable, and find clarity in the muses and the brews.",


    },
    {
        name : "Mark Okafor",
        github: "https://github.com/okaformark",
        imageUrl: "https://avatars2.githubusercontent.com/u/38026989?s=400&v=4",
        imageAlt: 'Black-and-white image of Mark standing casually between two white cars, wearing a light-colored coat, with his hands in his pockets.',
        description: "You will mainly find Mark working on production in the brewery. He follows each brew through every stage making sure the beer holds true to Howling oat's high quality standards.",


    },
    {
        name : "Mary West",
        github: "https://github.com/westmary48",
        imageUrl: "https://avatars2.githubusercontent.com/u/42101883?s=400&v=4",
        imageAlt: 'Headshot of Mary smiling at the camera.',
        description: "Mary is one of the many loyal Howling Oats customers turned employee. Mary moved from California back in 2011 and hasn't looked back every since.  When she's not working at the brewery you can find her drinking beer with her fiancé and friends and hanging out with her pup Cooper.",


    }
];

//array of objects with info about events

    const events = [
        {
        name: 'Clockwork Tasting',
        description: 'We will serve you disturbingly tiny glasses of beer, but many of them, in the surprisingly capacious workings of our grandfather clock. The door is in the back.',
        image: 'https://www.theclockdepot.com/images/D/Corner-Grandfather-Clock-611-252-HR.jpg',
        imageAlt: 'our grandfather clock, which put in an appearance this afternoon',
        date: '04/26/2019',
        address: '123 The Other Way, Nook Grandfather Clock, Nashville, 37211',
        attendees: ['Mary', 'Daniel', 'Mark', 'James Hook']
        },
        {
        name: 'The Haunted Bottles One-Night Smash',
        description: 'Join us for a night of ghostly music. If you\'ve never heard a ghost sing from a bottle, this event is for you. Also door prizes!',
        image: './images/bottle-picture.png',
        imageAlt: 'several bottles, each a different color and haunted by a very nice spirit',
        date: '10/31/2019',
        address: '123 The Other Way, Ghost-hosting Room, Nashville, 37211',
        attendees: ['Mary', 'Daniel', 'Mark', 'Ebeneezer']
    },
    {
        name: 'Echo\'s SpokenWord',
        description: 'An "open mirror" night, in which you speak heartfelt poetry to our mirror and your words are echoed back to you. Your reflection is definitely not alive.',
        image: 'https://www.t2day.com/ebay/Vanity_Makeup_Mirror/Hand_Held_Mirror/Vintage_Antique_Style_Girls_Princess_Oval_Roune_Vanity_Makeup_Hand_Held_Mirror_Silver_Small_01.jpg',
        imageAlt: 'our handheld mirror, with silver embroidery around the edge. Not magical in the least.',
        date: '05/01/2019',
        address: '123 The Other Way, Room Of Disappearance, Nashville, 37211',
        attendees: ['Mary', 'Daniel', 'Mark', 'Anastasia']
    }, 
    {
        name: 'Nashville Bar Festival',
        description: 'A perfectly ordinary, humdrum bar festival in which we are the only shining beacon of hope.',
        image: 'https://media.timeout.com/images/103932506/630/472/image.jpg',
        imageAlt: 'patrons enjoying a variety of mundane beer-stations set around a green sward in the half-light of not quite day',
        date: '05/15/2019',
        address: '123 The Other Way, Our Sliver Of Nature, Nashville, 37211',
        attendees: ['Mary', 'Daniel', 'Mark', 'Sarah']
    }
    ];

  //array of beer objects  
const beers = [
    {
        title: 'Vintage T Shirt',
        id: 0,
        imageUrl:'https://img.etsystatic.com/il/380a33/1548068326/il_570xN.1548068326_km2w.jpg?version=0',
        imageAlt: 'Image of a black t shirt with two howling wolfs on it.',
        description: 'Shirt',
        price: '20',
    },
        {
        title: 'Exclusive Variety Six Pack',
        id: 1,
        imageUrl: 'https://www.wegmans.com/content/dam/wegmans/products/560/20560.jpg',
        imageAlt: 'Image of a six pack of beer',
        description: 'Six Pack',
        price: '10',
    },
        {
        title: 'Beer Hat',
        id: 2,
        imageUrl:'https://images-na.ssl-images-amazon.com/images/I/71PjjenZxdL._SL1500_.jpg',
        imageAlt: 'Image of a hat that can hold two beer cans by the ears and has a straw for drinking',
        description: 'hat',
        price: '15',
    },
        {
        title: 'Bar Key',
        id: 3,
        imageUrl:'https://i.etsystatic.com/13657333/d/il/b5dcbd/1202095436/il_340x270.1202095436_8me5.jpg?version=0',
        imageAlt: 'Image of a bar key to open bottled beer',
        description: 'Bar Key',
        price: '20',
    },
        {
        title: 'Pint Glass',
        id: 4,
        imageUrl:'https://images.crateandbarrel.com/is/image/Crate/PintTumblerWCrownSHS16/?$web_product_hero$&160203172057&wid=625&hei=625',
        imageAlt: 'Image of a pint glass for a beer',
        description: 'Glass',
        price: '12',
    },
        {
        title: 'Coffee Mug',
        id: 5,
        imageUrl:'https://i.pinimg.com/236x/64/de/7a/64de7abcd9b031bd3eac82badde2a038--the-coffee-coffee-mugs.jpg',
        imageAlt: 'Image of a coffee mug that looks like a beer mug',
        description: 'Mug',
        price: '8',
        },
    ];

    productsInCart = [];

    //end of beer data


    // definition DOM Elements
    const beerEl = document.querySelector("#store-page");
    const cartEl = document.querySelector(".shopping-cart-list");
    const productQuantityEl = document.querySelector(".product-quantity");
    const emptyCartEl = document.querySelector(".empty-cart-btn");
    const cartCheckoutEl = document.querySelector(".cart-checkout");
    const totalPriceEl = document.querySelector(".total-price");

    // end of definitions
    
//printToDom function
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
// end printToDom function

// start of brew-masters domString
const brewmastersBuilder = () => {
    let domString = '';
    brewmasters.forEach((brewmaster) =>{
        domString += `<div class = "container">`
        domString += `<img src='${brewmaster.imageUrl}' title ='${brewmaster.description}' alt='${brewmaster.imageAlt} ${brewmaster.description}'>`
        domString +=  `<h1>${brewmaster.name}</h1>`
        domString +=  `<h5>${brewmaster.github}</h5>`
        domString += `</div>`

    });
    printToDom('brewmaster-page',domString)
}

// end of brew-masters domString

// start of events card builder
//function which loops over the events array and forms cards which are printed to the dom
const eventsCardBuilder = () => {
    let domString = '';
    domString += `<div class="events-title-container row">`;
    domString += `<h2 class="text-white">Our Events</h2>`;
    domString += `</div>`;

    domString += `<div class="row  d-flex flex-wrap">`;
    events.forEach((event) => {
        domString += `<div class="col-sm-12 col-md-8 col-lg-6">`;
        domString += `<div class="card events-card d-flex mb-3 flex-column flex-nowrap justify-content-center">`;
        domString += `<img class="card-img-top events-img" src="${event.image}" alt="Image of ${event.imageAlt}">`;
        domString += `<div class="card-body d-flex flex-column flex-nowrap justify-content-around" style="height: 400px;">`;
        domString += `<h5 class="card-title events-card-title">${event.name}</h5>`;
        domString += `<p class="card-text events-card-description">${event.description}</p>`;
        domString += `<p class="card-text events-card-date"><span class='bold-text'>When</span>: ${event.date}</p>`;
        domString += `<p class="card-text event-address"><span class='bold-text'>Where</span>: ${event.address}</p>`;
        domString += `</div>`;
        domString += `<div class="card-footer">`;
        domString += `<p class="card-text event-attendees"><span class='bold-text'>Patrons Definitely Attending</span></p>`;
        domString += `<p class="card-text">`;
        event.attendees.forEach((attendee, index) => {
            if (index < event.attendees.length - 1) {
                domString += `${attendee}, `;
            } else {
                domString += `${attendee}`;
            }
        })
        domString += `</p>`;
        domString += `</div>`;
        domString += `</div>`;
        domString += `</div>`;
    })
    domString += `</div>`;
    printToDom('events-page', domString);

};

// end of events cardbuilder

// Start of beer card builder
const buyBeerCardBuilder = () => {
    let domString = '';
    beers.forEach((beer) => {
        domString += `<div class = 'beer-card'>`
        domString += `<h2 class = 'beerHeader'>${beer.title}</h2>`
        domString += `<img class="beer-card-img-top" src="${beer.imageUrl}" alt="${beer.imageAlt}">`
        domString += `<h4 class = "beerDescription">${beer.description}</h4>`
        domString += `<h4 class = "beerPrice"> $ ${beer.price}.00</h4>`
        domString += `<footer class = 'beetFooter'>`
        domString += ` <button type="button" class="btn add-to-cart" id =${beer.id}>Add to Cart</button>`;
        domString += `</footer>`
        domString += `</div>`;
    });
    printToDom('card-print', domString)
}
// end of beer card builder

// start of Cart functions
const generateCartList = () => {
    cartEl.innerHTML = "";

    productsInCart.forEach((item) => {
        console.log(productsInCart);
      const li = document.createElement("li");
      li.innerHTML = `${item.quantity} ${item.product.title} - $${item.product.price * item.quantity}`;
      cartEl.appendChild(li);
    });

    productQuantityEl.innerHTML = productsInCart.length;

    generateCartButtons()
  }


  // Function that generates Empty Cart and Checkout buttons based on condition that checks if productsInCart array is empty
  const generateCartButtons = () => {
    if(productsInCart.length > 0) {
      emptyCartEl.style.display = "block";
      cartCheckoutEl.style.display = "block"
      totalPriceEl.innerHTML = "$ " + calculateTotalPrice();
    } else {
      emptyCartEl.style.display = "none";
      cartCheckoutEl.style.display = "none";
    }
  }

  // Setting up listeners for click event on all products and Empty Cart button as well
  const setupListeners = (e) =>  {
    beerEl.addEventListener("click", function(e) {
      const el = e.target;
      console.log(el);
      if(el.classList.contains("add-to-cart")) {
       const elId = el.id;
       addToCart(elId);
      }
    });

    emptyCartEl.addEventListener("click", function(e) {
        console.log(emptyCartEl);
      if(confirm("Are you sure?")) {
        productsInCart = [];
      }
      generateCartList();
    });
  }

  // Adds new items or updates existing one in productsInCart array
  const addToCart = (id) =>  {
    console.log(id)
    const obj = beers[id];
    if(productsInCart.length === 0 || productFound(obj.id) === undefined) {
      productsInCart.push({product: obj, quantity: 1});
    } else {
      productsInCart.forEach(function(item) {
        if(item.beer.id === obj.id) {
          item.quantity++;
        }
      });
    }
    generateCartList();
  }

  // This function checks if project is already in productsInCart array
  const productFound = (productId) => {
      console.log(productId);
    return productsInCart.find(function(item) {
      return item.product.id === productId;
    });
  }

  const calculateTotalPrice = () => {
    return productsInCart.reduce(function(total, item) {
      return total + (item.product.price *  item.quantity);
    }, 0);
  }


  // nav functions

  const showPage =(e)=> {
    const navId = e.target.id;

    const pageElements = document.getElementsByClassName('page');
    for(let i = 0; i<pageElements.length; i++){
        pageElements[i].classList.add('hideStuff');
    }
    switch (navId) {
        case 'navToHome':
          document.getElementById('home-page').classList.remove('hideStuff');
          break;
        case 'navToBrew':
          document.getElementById('brewmaster-page').classList.remove('hideStuff');
          break;
        case 'navToEvents':
          document.getElementById('events-page').classList.remove('hideStuff');
          break;
        case 'navToBuy':
          document.getElementById('store-page').classList.remove('hideStuff');
          break;
      }
};

const addClickEvents = () => {
    const navElements = document.getElementsByClassName('nav-item');
    for(let i = 0; i<navElements.length; i++){
        navElements[i].addEventListener('click',showPage);
    }
   };

   // end of nav functions

// form functions
const clearFormInput = () => {
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
};
const submitEvent = () => {
    document.getElementById('submitButton').addEventListener('click', function (e) {
        alert('your response has been received');
    });
};

// end of form functions

// carousel function

const carousel = () => {
$('.carousel').carousel({
    interval: 3000
  })

}

const init = () => {
addClickEvents();
eventsCardBuilder();
buyBeerCardBuilder();
submitEvent();
setupListeners();
brewmastersBuilder(brewmasters);
carousel();
};
init();
