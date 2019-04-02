
const brewmasters = [
    {
        name : "Daniel Fornica",
        github: "https://github.com/Dannyboy85",
        imageUrl: "https://avatars2.githubusercontent.com/u/38631819?s=400&u=dce6bc66d171b8fb61df5fb4ab16df1e405b8b5e&v=4",
        description: "One of the most distinct beers you will ever have. It black colour and froth make the drink almost liquid meal. Very filling with bitter taste",

    },
    {
        name : "Sarah Thorne",
        github: "https://github.com/sarahjulesthorne",
        imageUrl: "https://avatars1.githubusercontent.com/u/47871647?s=400&v=4",
        description: "My favorite brewery is slightly odd around the edges and a bit wrinkled. Their beer has the taste of yesterdays fondly remembered with hints of that time you forgot about. I go there often, when the future seems inexplicably unreadable, and find clarity in the muses and the brews.",


    },
    {
        name : "Mark Okafor",
        github: "https://github.com/okaformark",
        imageUrl: "https://avatars2.githubusercontent.com/u/38026989?s=400&v=4",
        description: "You will mainly find Mark working on production in the brewery. He follows each brew through every stage making sure the beer holds true to Howling oat's high quality standards.",


    },
    {
        name : "Mary West",
        github: "https://github.com/westmary48",
        imageUrl: "https://avatars2.githubusercontent.com/u/42101883?s=400&v=4",
        description: "Mary is one of the many loyal Howling Oats customers turned employee. Mary moved from California back in 2011 and hasn't looked back every since.  When she's not working at the brewery you can find her drinking beer with her fiancé and friends and hanging out with her pup Cooper.",


    }
];
    const events = [
        {
        name: 'Clockwork Tasting',
        description: 'We will serve you disturbingly tiny glasses of beer, but many of them, in the surprisingly capacious workings of our grandfather clock. The door is in the back.',
        image: 'https://www.theclockdepot.com/images/D/Corner-Grandfather-Clock-611-252-HR.jpg',
        imageAlt: 'Image of our grandfather clock, which put in an appearance this afternoon',
        date: '04/26/2019',
        address: '123 The Other Way, Nook Grandfather Clock, Nashville, 37211',
        attendees: ['Mary', 'Daniel', 'Mark', 'James Hook']
        },
        {
        name: 'The Haunted Bottles One-Night Smash',
        description: 'Join us for a night of ghostly music. If you\'ve never heard a ghost sing from a bottle, this event is for you. Also door prizes!',
        image: './images/bottle-picture.png',
        imageAlt: 'Image of several bottles, each a different color and haunted by a very nice spirit',
        date: '10/31/2019',
        address: '123 The Other Way, Ghost-hosting Room, Nashville, 37211',
        attendees: ['Mary', 'Daniel', 'Mark', 'Ebeneezer']
        },
        {
            name: 'Echo\'s SpokenWord',
            description: 'An "open mirror" night, in which you speak heartfelt poetry to our mirror and your words are echoed back to you. Your reflection is definitely not alive.',
            image: 'https://www.t2day.com/ebay/Vanity_Makeup_Mirror/Hand_Held_Mirror/Vintage_Antique_Style_Girls_Princess_Oval_Roune_Vanity_Makeup_Hand_Held_Mirror_Silver_Small_01.jpg',
            imageAlt: 'Image of our handheld mirror, with silver embroidery around the edge. Not magical in the least.',
            date: '05/01/2019',
            address: '123 The Other Way, Room Of Disappearance, Nashville, 37211',
            attendees: ['Mary', 'Daniel', 'Mark', 'Anastasia']
            },{
                name: 'Nashville Bar Festival',
                description: 'A perfectly ordinary, humdrum bar festival in which we are the only shining beacon of hope.',
                image: 'https://media.timeout.com/images/103932506/630/472/image.jpg',
                imageAlt: 'Image of a green sward with people who are more interested in beer than magical occurrences. Stations are arranged about the sward in the in-between light of not quite day, where patrons can obtain beer.',
                date: '05/15/2019',
                address: '123 The Other Way, Our Sliver Of Nature, Nashville, 37211',
                attendees: ['Mary', 'Daniel', 'Mark', 'Sarah']
                }
        ];

const brewmastersBuilder = (brewmasters) => {
    let domString = '';
    brewmasters.forEach((brewmaster) =>{
        domString += `<div class = "container">`
        domString += `<img src='${brewmaster.imageUrl}' title ='${brewmaster.description}'>`
        domString +=  `<h1>${brewmaster.name}</h1>`
        domString +=  `<h5>${brewmaster.github}</h5>`
        domString += `</div>`

    });

    printToDom('brew',domString)
}


//array of objects with info about events

    // definition DOM Elements
    const beerEl = document.querySelector(".beer-container");
    const cartEl = document.querySelector(".shopping-cart-list");
    const productQuantityEl = document.querySelector(".product-quantity");
    const emptyCartEl = document.querySelector(".empty-cart-btn");
    const cartCheckoutEl = document.querySelector(".cart-checkout");
    const totalPriceEl = document.querySelector(".total-price");

    // end of definitions
// beer data
const beers = [
{
    title: 'Vintage T Shirt',
    id: 0,
    imageUrl:'https://img.etsystatic.com/il/380a33/1548068326/il_570xN.1548068326_km2w.jpg?version=0',
    description: 'Shirt',
    price: '20',
},
    {
    title: 'Exclusive Variety Six Pack',
    id: 1,
    imageUrl: 'https://www.wegmans.com/content/dam/wegmans/products/560/20560.jpg',
    description: 'Six Pack',
    price: '10',
},
    {
    title: 'Beer Hat',
    id: 2,
    imageUrl:'https://images-na.ssl-images-amazon.com/images/I/71PjjenZxdL._SL1500_.jpg',
    description: 'hat',
    price: '15',
},
    {
    title: 'Bar Key',
    id: 3,
    imageUrl:'https://i.etsystatic.com/13657333/d/il/b5dcbd/1202095436/il_340x270.1202095436_8me5.jpg?version=0',
    description: 'Bar Key',
    price: '20',
},
    {
    title: 'Pint Glass',
    id: 4,
    imageUrl:'https://images.crateandbarrel.com/is/image/Crate/PintTumblerWCrownSHS16/?$web_product_hero$&160203172057&wid=625&hei=625',
    description: 'Glass',
    price: '12',
},
    {
    title: 'Coffee Mug',
    id: 5,
    imageUrl:'https://i.pinimg.com/236x/64/de/7a/64de7abcd9b031bd3eac82badde2a038--the-coffee-coffee-mugs.jpg',
    description: 'Mug',
    price: '8',
    },
]

productsInCart = [];

//end of beer data

const eventsCardBuilder = () => {
    let domString   = '';
    domString += `<div class="events-title-container row">`;
    domString += `<h2>Our Events</h2>`;
    domString += `</div>`;

    domString += `<div class="row">`;
    events.forEach((event) => {
domString += `<div class="col-sm-12 col-md-8 col-lg-6">`;
        domString += `<div class="card events-card">`;
        domString += `<img class="card-img-top events-img" src="${event.image}" alt="Image of ${event.imageAlt}">`;
        domString += `<div class="card-body">`;
        domString += `<h5 class="card-title events-card-title">${event.name}</h5>`;
        domString += `<p class="card-text events-card-description">${event.description}</p>`;
        domString += `<p class="card-text events-card-date"><span class='bold-text'>When</span>: ${event.date}</p>`;
        domString += `<p class="card-text event-address"><span class='bold-text'>Where</span>: ${event.address}</p>`;
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
    printToDom('eventsPage', domString);
};


//printToDom function
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};
// end printToDom function


// Start of beer card builder
const buyBeerCardBuilder = () => {
    let domString = '';
    beers.forEach((beer) => {
        domString += `<div class = 'beer-card'>`
        domString += `<h2 class = 'beerHeader'>${beer.title}</h2>`
        domString += `<img class="beer-card-img-top" src="${beer.imageUrl}" alt="Card image cap">`
        domString += `<h4 class = "beerDescription">${beer.description}</h4>`
        domString += `<h4 class = "beerPrice"> $ ${beer.price}.00</h4>`
        domString += `<footer class = 'beetFooter'>`
        domString += ` <a class="btn add-to-cart" id =${beer.id}>Add to Cart</a>`;
        domString += `</footer>`
        domString += `</div>`;
    });
    printToDom('beer-page', domString)
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

// console.log(events[0].description);
const clearFormInput = () => {
    document.getElementById('nameInput').value = '';
    document.getElementById('emailInput').value = '';
};
const submitEvent = () => {
    document.getElementById('submitButton').addEventListener('click',function (e) {
        alert('your response has been received');
    });
};


const init = () => {
eventsCardBuilder();
buyBeerCardBuilder();
submitEvent();
setupListeners();
brewmastersBuilder(brewmasters);

};

init();

