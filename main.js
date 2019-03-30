//array of objects with info about events
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

const beer = [
    {
        title: 'Vintage T Shirt',
        image: url('vintageShirt.png'),
        merchandise: 'Shirt',
        price: '$20.00',
        },
        {
        title: 'Exclusive Variety Six Pack',
        image: url('https://www.wegmans.com/content/dam/wegmans/products/560/20560.jpg'),
        merchandise: 'Six Pack',
        price: '$10.00',
        },
        {
        title: 'Beer Hat',
        image: url('https://images-na.ssl-images-amazon.com/images/I/71PjjenZxdL._SL1500_.jpg'),
        merchandise: 'picture of item',
        price: '$15.00',
        },
        {
        title: 'Bar Key',
        image: url('https://i.etsystatic.com/13657333/d/il/b5dcbd/1202095436/il_340x270.1202095436_8me5.jpg?version=0'),
        merchandise: 'Bar Key',
        price: '$20.00',
        },
        {
        title: 'Pint Glass',
        image: url('https://images.crateandbarrel.com/is/image/Crate/PintTumblerWCrownSHS16/?$web_product_hero$&160203172057&wid=625&hei=625'),
        merchandise: 'Glass',
        price: '$12.00',
        },
        {
        title: 'Coffee Mug',
        image: url('https://i.pinimg.com/236x/64/de/7a/64de7abcd9b031bd3eac82badde2a038--the-coffee-coffee-mugs.jpg'),
        merchandise: 'Mug',
        price: '$8.00',
    },
]

console.log(events[0].description);


