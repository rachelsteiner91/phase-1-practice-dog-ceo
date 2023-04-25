/////**Global Variables */
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const dogImageContainer = document.querySelector("#dog-image-container") //in the div
const breedDropdown = document.querySelector("#breed-dropdown")
const dogBreedsUl = document.querySelector("#dog-breeds") //ul

let allDogArray = []
/////CHALLENGE 1//////
fetch(imgUrl)
/////*****- on page load, fetches the images using the url above ⬆️
.then(response => response.json()) /// - parses the response as `JSON`
.then((dogData) => {
    let soloDogArray = dogData.message; //dogData is the object and message is where the images are stored
    ///// - adds image elements to the DOM **for each** 🤔 image in the array// */FOR EACH
    soloDogArray.forEach((dogData) => { //soloDogArray is the array of dogs foreach dog. Dog Data is where it is stored
    let doggoImage = document.createElement("img")
    doggoImage.src = dogData //the source for the dog image is located in the dogdata
    dogImageContainer.appendChild(doggoImage) //appends the image to the DOM
//console.log(doggoImage)
})})

///////////////CHALLENGE 2//////
const breedUrl = "https://dog.ceo/api/breeds/list/all"
// on page load, fetches all the dog breeds using the url above ⬆️
fetch(breedUrl)
.then(response => response.json())
.then(breedData => {
    let allDogArray = breedData.message
    allDogArray.map(breedData => {
        let doggoBreedsList = document.createElement("li")
        doggoBreedsList.textContent = breedData.name //becaause these are breeds, the list would be .textContent 
        dogBreedsUl.appendChild(doggoBreedsList) //appends the breeds to the DOM
        // adds the breeds to the page in the <ul> provided in index.html
    }) 
    })
   // used .map and object.key()

//     Challenge 3
// Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. This can be a color of your choosing.
addEventListener("click", (e) => {
     let selectedBreed = e.target.textContent
   console.log(selectedBreed)
 })

    ////// ERROR CURRRENTLY
    // dex.js:40 Uncaught (in promise) TypeError: allDogArray.forEach is not a function
    // at index.js:40:17


   

   
        



// create, populate, append


///// - 

