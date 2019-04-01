
const brewmasters = [
    {
        name : "Daniel Fornica",
        github: "https://github.com/Dannyboy85",
        imageUrl: "https://avatars2.githubusercontent.com/u/38631819?s=400&u=dce6bc66d171b8fb61df5fb4ab16df1e405b8b5e&v=4",
        description: "One of the most distinct beers you will ever have. It black colour and froth make the drink almost liquid meal. Very filling with bitter taste"

    },
    {
        name : "Sarah Thorne",
        github: "https://github.com/sarahjulesthorne",
        imageUrl: "https://avatars1.githubusercontent.com/u/47871647?s=400&v=4",
        description: "My favorite brewery is slightly odd around the edges and a bit wrinkled. Their beer has the taste of yesterdays fondly remembered with hints of that time you forgot about. I go there often, when the future seems inexplicably unreadable, and find clarity in the muses and the brews."
    

    },
    {
        name : "Mark Okafor",
        github: "https://github.com/sarahjulesthorne",
        imageUrl: "https://avatars2.githubusercontent.com/u/38026989?s=400&v=4",
        description: "You will mainly find Mark working on production in the brewery. He follows each brew through every stage making sure the beer holds true to Howling oat's high quality standards."
    

    },
    {
        name : "Mary West",
        github: "https://github.com/westmary48",
        imageUrl: "https://avatars2.githubusercontent.com/u/42101883?s=400&v=4",
        description: "Mary is one of the many loyal Howling Oats customers turned employee. Mary moved from California back in 2011 and hasn't looked back every since.  When she's not working at the brewery you can find her drinking beer with her fiancé and friends and hanging out with her pup Cooper."
    

    }
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
        // beer data
        const beers = [
            {
                title: 'Vintage T Shirt',
                imageUrl:'https://img.etsystatic.com/il/380a33/1548068326/il_570xN.1548068326_km2w.jpg?version=0',
                description: 'Shirt',
                price: '$20.00',
                },
                {
                title: 'Exclusive Variety Six Pack',
                imageUrl: 'https://www.wegmans.com/content/dam/wegmans/products/560/20560.jpg',
                description: 'Six Pack',
                price: '$10.00',
                },
                {
                title: 'Beer Hat',
                imageUrl:'https://images-na.ssl-images-amazon.com/images/I/71PjjenZxdL._SL1500_.jpg',
                description: 'picture of item',
                price: '$15.00',
                },
                {
                title: 'Bar Key',
                imageUrl:'https://i.etsystatic.com/13657333/d/il/b5dcbd/1202095436/il_340x270.1202095436_8me5.jpg?version=0',
                description: 'Bar Key',
                price: '$20.00',
                },
                {
                title: 'Pint Glass',
                imageUrl:'https://images.crateandbarrel.com/is/image/Crate/PintTumblerWCrownSHS16/?$web_product_hero$&160203172057&wid=625&hei=625',
                description: 'Glass',
                price: '$12.00',
                },
                {
                title: 'Coffee Mug',
                imageUrl:'https://i.pinimg.com/236x/64/de/7a/64de7abcd9b031bd3eac82badde2a038--the-coffee-coffee-mugs.jpg',
                description: 'Mug',
                price: '$8.00',
            },
        ]

{}
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


//end of beer data

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
        console.log(beer);
        domString += `<div = 'card'>`
        domString += `<h2 class = 'header'>${beer.title}</h2>`
        domString += `<img class="card-img-top" src="${beer.imageUrl}" alt="Card image cap">`
        domString += `<h2>${beer.description}</h2>`
        domString += `<h2>${beer.price}</h2>`
        domString += `<footer = 'footer'>`
        domString += ` <button ="btn btn-danger addBtn" id =${beer.id}>Add</button>`;
        domString += `</footer>`
        domString += `</div>`

    });
    printToDom('beer-page', domString)
    console.log(domString);

}

// end of beer card builder

console.log(events[0].description);

const init = () => {
    buyBeerCardBuilder();
    brewmastersBuilder(brewmasters);
}

init();

