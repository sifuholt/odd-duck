'use strict';

// global variables

let voteCount = 25;

let allImages = [];

// Dom windows images that will get interacted with

let imgContainer = document.getElementById('img-container');
let img1 = document.getElementById('img1');
let img2 = document.getElementById('img2');
let img3 = document.getElementById('img3');

let resultsBtn = document.getElementById('results-btn');

let resultsList = document.getElementById('results-container');



// constructor function placeholders and parameters unique to each object, in the function are properties that the object will have



function Image(name, imgExtension = 'jpg') {
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.img = `img/${name}.${imgExtension}`;

  allImages.push(this);

}



// helper function/utilities let is used to create a variable

function getRandomIndex() {
  return Math.floor(Math.random()* allImages.length);

}

function renderImg() {

  let img1Index = getRandomIndex();
  let img2Index = getRandomIndex();
  let img3Index = getRandomIndex();

  while(img1Index === img2Index || img2Index === img3Index || img1Index === img3Index) {
    img1Index = getRandomIndex();
    img2Index = getRandomIndex();
    img3Index = getRandomIndex();

  }

  img1.src = allImages[1].img;
  img1.title = allImages[1].name;
  img1.alt = `This is an image of ${allImages[img1Index].name}`;

  img2.src = allImages[2].img;
  img2.title = allImages[2].name;
  img2.alt = `This is an image of ${allImages[img2Index].name}`;

  img3.src = allImages[3].img;
  img3.src = allImages[3].name;
  img3.alt = `This is an image of ${allImages[img3Index].name}`;




}


// let indexArray = [];



// event handlers

function handleClick(event){

  let imgClicked = event.target.title;

  for(let i = 0; i < allImages.length; i++){
    if (imgClicked === allImages[i].name){
      allImages[i].votes++;

    }
  }

  voteCount--;

  renderImg();

  if(voteCount === 0){
    imgContainer.removeEventListener('click', handleClick);
    alert('Thank you for your input!');

  }
}

function handleShowResults(){
  if(voteCount === 0){
    for(let i = 0; i < allImages.length; i++){
      let liElem = document.createElement('li');
      liElem.textContent = `${allImages[i].name} was voted: ${allImages[i].votes} times`;
      resultsList.appendChild(liElem);
    }
    resultsBtn.removeEventListener('click', handleShowResults);
  }
}

// executable code "new" calls the image based on info 

let sweep = new Image('sweep', 'png');
let bag = new Image('bag');
let banana = new Image('banana');
let bathroom = new Image('bathroom');
let boots = new Image('boots');
let breakfast = new Image('breakfast');
let bubblegum = new Image('bubblegum');
let chair = new Image('chair');
let cthulhu = new Image('cthulhu');
let dogDuck = new Image('dog-duck');
let dragon = new Image('dragon');
let pen = new Image('pen');
let petSweep = new Image('pet-sweep');
let scissors = new Image('scissors');
let shark = new Image('shark');
let tauntaun = new Image('tauntaun');
let unicorn = new Image('unicorn');
let waterCan = new Image('water-can');
let wineGlass = new Image('wine-glass');

allImages.push(sweep, bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, tauntaun, unicorn, waterCan, wineGlass);

console.log(allImages);

//
// function renderImg() {
// while(indexArray.length < 25){
// let randomNum = getRandomIndex();
// if(indexArray.includes(randomNum)){
// indexArray.push(randomNum);
// }
// }
// }
//


renderImg();


imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);
