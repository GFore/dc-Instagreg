const picsArray = [
    {'url': 'https://images.pexels.com/photos/1471843/pexels-photo-1471843.jpeg',
     'altText': 'baby reaching for dads sunglasses',
     'thumb': 'images/thumb01.jpeg'},
    {'url': 'https://images.pexels.com/photos/1166990/pexels-photo-1166990.jpeg',
     'altText': 'man tossing baby into blue sky',
     'thumb': 'images/thumb02.jpeg'},
    {'url': 'https://images.pexels.com/photos/8640/pexels-photo.jpg',
     'altText': 'father kissing baby on cheek',
     'thumb': 'images/thumb03.jpeg'},
    {'url': 'https://images.pexels.com/photos/208106/pexels-photo-208106.jpeg',
     'altText': 'father and son in hammock',
     'thumb': 'images/thumb04.jpeg'},
    {'url': 'https://images.pexels.com/photos/160816/father-son-family-mountain-160816.jpeg',
     'altText': 'father and son in jeans and shirtless facing mountains',
     'thumb': 'images/thumb05.jpeg'},
    {'url': 'https://images.pexels.com/photos/139389/pexels-photo-139389.jpeg',
     'altText': 'father and daughter walking nature trail',
     'thumb': 'images/thumb06.jpeg'},
    {'url': 'https://images.pexels.com/photos/38302/father-daughter-beach-sea-38302.jpeg',
     'altText': 'father and daughter walking into ocean shoreline',
     'thumb': 'images/thumb07.jpeg'},
    {'url': 'https://images.pexels.com/photos/105952/pexels-photo-105952.jpeg',
     'altText': 'father hugging baby',
     'thumb': 'images/thumb08.jpeg'},
    {'url': 'https://images.pexels.com/photos/960829/pexels-photo-960829.jpeg',
     'altText': 'father with arm around teen son with matching shorts',
     'thumb': 'images/thumb09.jpeg'},
    {'url': 'https://images.pexels.com/photos/1040767/pexels-photo-1040767.jpeg',
     'altText': 'man with girl riding horse',
     'thumb': 'images/thumb10.jpeg'},
    {'url': 'https://images.pexels.com/photos/89521/pexels-photo-89521.jpeg',
     'altText': 'father outside smiling at swaddled baby he is holding',
     'thumb': 'images/thumb11.jpeg'},
    {'url': 'https://images.pexels.com/photos/254054/pexels-photo-254054.jpeg',
     'altText': 'father holding babys feet on floor in front of Christmas tree',
     'thumb': 'images/thumb12.jpeg'},
];

let currentPicIndex = 0;
let maxPicIndex = picsArray.length;
const picHolderDiv = document.querySelector('[data-pic]');
const modalDiv = document.querySelector('[data-modal]');
const picFrameDiv = document.querySelector('[data-frame]');

modalDiv.addEventListener('click', function () {
    modalDiv.classList.toggle('modal-hidden');
});

function getURL(thumbUrl) {
    //converts the thumbnail URL to the large image url
    return picsArray[picsArray.map(x => x.thumb).indexOf(thumbUrl)].url;
}

function makeImg(makeUrl, makeTitle) {
    const newImg = document.createElement('img');
    makeUrl = makeUrl.slice(5, makeUrl.length-2)  // trim off all but the actual URL
    newImg.setAttribute('src', getURL(makeUrl));
    newImg.setAttribute('alt', makeTitle);
    return newImg;
}

function loadPics() {
    const newImgThumbDiv = document.createElement('div');
    newImgThumbDiv.classList.add('picThumbnailHolder');
    // newImgThumbDiv.setAttribute('style', `background-image: url("${picsArray[currentPicIndex].url}")`);
    newImgThumbDiv.setAttribute('style', `background-image: url("${picsArray[currentPicIndex].thumb}")`);
    newImgThumbDiv.setAttribute('title', picsArray[currentPicIndex].altText);
    picHolderDiv.appendChild(newImgThumbDiv);
    newImgThumbDiv.addEventListener('click', function (event) {
        let clickedImg = makeImg(event.target.style.backgroundImage, event.target.title);
        picFrameDiv.innerHTML = '';
        picFrameDiv.appendChild(clickedImg);
        modalDiv.classList.toggle('modal-hidden');
    });

    currentPicIndex = (currentPicIndex+1) % maxPicIndex;
}



picsArray.forEach(loadPics);


window.addEventListener('keydown', function (event) {
    // debugger;
    console.log(event.keyCode);
});

