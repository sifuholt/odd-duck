'use strict';


console.log('hey world, hey!');

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


let canvasElem = document.getElementById('chart');


// constructor function placeholders and parameters unique to each object, in the function are properties that the object will have



function Image(name, imgExtension = 'jpg') {
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.img = `img/${name}.${imgExtension}`;

  allImages.push(this);

}



// helper function/utilities let is used to create a variable

let getImages = localStorage.getItem('myImages');

let parsedImages = JSON.parse(getImages);
console.log('parsed>>>', parsedImages);
if(getImages){
  allImages = parsedImages;

  if(getImages){
    for(let i; i < parsedImages.length;)
      allImages = parsedImages;
  }else{
    new Image('sweep', 'png');
    new Image('bag');
    new Image('banana');
    new Image('bathroom');
    new Image('boots');
    new Image('breakfast');
    new Image('bubblegum');
    new Image('chair');
    new Image('cthulhu');
    new Image('dog-duck');
    new Image('dragon');
    new Image('pen');
    new Image('pet-sweep');
    new Image('scissors');
    new Image('shark');
    new Image('tauntaun');
    new Image('unicorn');
    new Image('water-can');
    new Image('wine-glass');
    new Image('sweep');
  }
}

function getRandomIndex() {
  return Math.floor(Math.random() * allImages.length);

}

function renderImg() {

  while (indexArray.length < 6) {
    let randomNum = getRandomIndex();
    if(!indexArray.includes(randomNum)) {
      indexArray.push(randomNum);
    }
  }

  indexArray.splice(0, 3);

  let img1Index = indexArray[0];
  let img2Index = indexArray[1];
  let img3Index = indexArray[2];

  // while (img1Index === img2Index || img2Index === img3Index || img1Index === img3Index) {

  //   img1Index = getRandomIndex();
  //   img2Index = getRandomIndex();
  //   img3Index = getRandomIndex();

  // }

  img1.src = allImages[img1Index].img;
  img1.title = allImages[img1Index].name;
  img1.alt = `This is an image of ${allImages[img1Index].name}`;

  img2.src = allImages[img2Index].img;
  img2.title = allImages[img2Index].name;
  img2.alt = `This is an image of ${allImages[img2Index].name}`;

  img3.src = allImages[img3Index].img;
  img3.title = allImages[img3Index].name;
  img3.alt = `This is an image of ${allImages[img3Index].name}`;

  allImages[img1Index].views++;
  allImages[img2Index].views++;
  allImages[img3Index].views++;

}

// render chart

function renderChart() {
  let oddNames = [];
  let oddVotes = [];
  let oddViews = [];

  for (let i = 0; i < allImages.length; i++) {
    oddNames.push(allImages[i].name);
    oddVotes.push(allImages[i].votes);
    oddViews.push(allImages[i].views);

  }

  let chartObj = {
    type: 'bar',
    data: {
      labels: oddNames,
      datasets: [{
        label: '# of Votes',
        data: oddVotes,
        borderWidth: 3,
        backgroundColor: 'pink'

      },
      {
        label: "# of Views",
        data: oddViews,
        borderWidth: 3,
        backgroundColor: 'canary'
      }],

    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  };
  new Chart(canvasElem, chartObj);

}
let indexArray = [];

// function renderImage() {
//
// while (indexArray.length < 6) {
// let randomNum = getRandomIndex();
// if (!indexArray.includes(randomNum)) {
// indexArray.push(randomNum);
//
// }
// }
// }
//


// event handlers

function handleClick(event) {

  let imgClicked = event.target.title;

  for (let i = 0; i < allImages.length; i++) {
    if (imgClicked === allImages[i].name) {
      allImages[i].votes++;

    }
  }

  voteCount--;

  renderImg();

  if (voteCount === 0) {
    imgContainer.removeEventListener('click', handleClick);
    alert('Thank you for your input!');
    renderChart();

    voteCount

  }

}

function handleShowResults() {
  if (!voteCount === 0) {
    for (let i = 0; i < allImages.length; i++) {
      let liElem = document.createElement('li');
      liElem.textContent = `${allImages[i].name} was viewed: ${allImages[i].views} & votes: ${allImages[i].votes}`;
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

// console.log(allImages);

// 
// 
// function renderImg() {
// while(indexArray.length < 3){
// let randomNum = getRandomIndex();
// if(!indexArray.includes(randomNum)){
// indexArray.push(randomNum);
// }
// }
// }


renderImg();


imgContainer.addEventListener('click', handleClick);
resultsBtn.addEventListener('click', handleShowResults);

// stringify data

let stringifiedImages = JSON.stringify(allImages);
console.log(stringifiedImages);

// add local storeage

localStorage.setItem('images', stringifiedImages);




// let chartObj = {
// type: 'bar',
// data: {
// labels: [''],
// datasets: [{
// label: '# of Votes',
// data: [],
// borderWidth: 3,
// backgroundColor: 'pink'
//
// },
// {
// label: "# of Votes",
// data: [],
// borderWidth: 3,
// backgroundColor: 'canary'
// },
// {
// label: "# of Names",
// data: [],
// borderWidth: 3,
// backgroundColor: 'fucia',
// }]
//
// },
// options: {
// scales: {
// y: {
// beginAtZero: false
// }
// }
// }
// };






























