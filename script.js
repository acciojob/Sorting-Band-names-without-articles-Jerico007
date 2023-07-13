//your code here

const bands = [
    "The Plot in You",
    "The Devil Wears Prada",
    "Pierce the Veil",
    "Norma Jean",
    "The Bled",
    "Say Anything",
    "The Midway State",
    "We Came as Romans",
    "Counterparts",
    "Oh, Sleeper",
    "A Skylit Drive",
    "Anywhere But Here",
    "An Old Dog"
];



/** 
 * add ul list in HTML
 **/
document.querySelector('#bands').innerHTML = 
    sortedBands.map(item => `<li>${item}</li>`).join('');