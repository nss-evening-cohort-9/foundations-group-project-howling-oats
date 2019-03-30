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

];
const printToDom = (divId, textToPrint)=>{
   const selectiveDiv = document.getElementById(divId);
   selectiveDiv.innerHTML = textToPrint;
}

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

const init = () => {
    brewmastersBuilder(brewmasters);
}
 
init();