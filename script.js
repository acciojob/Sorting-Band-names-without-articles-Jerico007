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


 //Map will give the modified array of articles
 let sortedBands = bands.map((val) => {
	 //Split the current val map array
	 // "An Old Dog" => ['An','Old','Dog']
	let currentVal = val.split(" ");
	 // Use array reduce function to remove ["The","An","A"]
	let ans = currentVal.reduce((prev, curr) => {
		if(curr != "A" && curr != "An" && curr != "The")
		{
			return prev + " " + curr;
		}
		return prev;
	}, "")
	 // return the ans string.
	 return ans;
})

sortedBands.sort();
/** 
 * add ul list in HTML
 **/
document.querySelector('#bands').innerHTML = 
    sortedBands.map(item => `<li>${item}</li>`).join('');