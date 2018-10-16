const picsArray = [
    {'url': 'https://images.pexels.com/photos/1471843/pexels-photo-1471843.jpeg',
     'altText': 'baby approaching mens black sunglasses',},
    {'url': 'https://images.pexels.com/photos/1166990/pexels-photo-1166990.jpeg',
     'altText': 'man tossing baby into blue sky',},
    {'url': 'https://images.pexels.com/photos/8640/pexels-photo.jpg',
     'altText': 'father kissing baby on cheek',},
    {'url': 'https://images.pexels.com/photos/208106/pexels-photo-208106.jpeg',
     'altText': 'father and son in hammock',},
    {'url': 'https://images.pexels.com/photos/160816/father-son-family-mountain-160816.jpeg',
     'altText': 'father and son in jeans and shirtless facing mountains',},
    {'url': 'https://images.pexels.com/photos/139389/pexels-photo-139389.jpeg',
     'altText': 'father and daughter walking nature trail',},
    {'url': 'https://images.pexels.com/photos/38302/father-daughter-beach-sea-38302.jpeg',
     'altText': 'father and daughter walking into ocean shoreline',},
    {'url': 'https://images.pexels.com/photos/105952/pexels-photo-105952.jpeg',
     'altText': 'father hugging baby',},
    {'url': 'https://images.pexels.com/photos/960829/pexels-photo-960829.jpeg',
     'altText': 'father with arm around teen son with matching shorts',},
    {'url': 'https://images.pexels.com/photos/1040767/pexels-photo-1040767.jpeg',
     'altText': 'man with girl riding horse',},
    {'url': 'https://images.pexels.com/photos/89521/pexels-photo-89521.jpeg',
     'altText': 'father outside smiling at swaddled baby he is holding',},
    {'url': 'https://images.pexels.com/photos/254054/pexels-photo-254054.jpeg',
     'altText': 'father holding babys feet on floor in front of Christmas tree',},
];

let currentPicIndex = 0;
let maxPicIndex = picsArray.length;
const picHolderDiv = document.querySelector('[data-pic]');
const modalDiv = document.querySelector('[data-modal]');
const picFrameDiv = document.querySelector('[data-frame]');

function makeImg(pos) {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', pos);
    //newImg.setAttribute('src', picsArray[pos].url);
    //newImg.setAttribute('alt', picsArray[pos].altText);

    // newImg.addEventListener('click', function (event) {
    //     // console.log(event.target.src);
    //     console.log(event.target.alt);
    // });

    return newImg;
}

function loadPics() {
    const newImgThumbDiv = document.createElement('div');
    newImgThumbDiv.classList.add('picThumbnailHolder');
    newImgThumbDiv.setAttribute('style', `background-image: url("${picsArray[currentPicIndex].url}")`);
    newImgThumbDiv.setAttribute('title', picsArray[currentPicIndex].altText);
    picHolderDiv.appendChild(newImgThumbDiv);
    newImgThumbDiv.addEventListener('click', function (event) {
        // console.log(event.target.src);
        //console.log(event.target.backgroundImage);
        console.log(event.toElement.style.backgroundImage);
        let a = event.toElement.style.backgroundImage;
        // document.body.appendChild(createThumbnail(a.slice(5, a.length-2)));
        picFrameDiv.innerHTML = '';
        picFrameDiv.appendChild(makeImg(a.slice(5, a.length-2)));
        modalDiv.classList.toggle('modal-hidden');
    });

    currentPicIndex = (currentPicIndex+1) % maxPicIndex;
}


// function that generates an img element
function createImage(imageURL) {
    const theImage = document.createElement('img');
    
    // theImage.src = imageURL;
    theImage.setAttribute('src', imageURL);

    // add an event listener to the image
    theImage.addEventListener('click', function (event) {
        console.log('hello!');
        // the element that got clicked is accessible as `event.target`
        // And, I can read the `src` attribute!
        console.log(event.target.src);

        // I can now set the output image's src
        // to event.target.src!
    });

    
    return theImage;
}

// function that generates the thumbnail div
function createThumbnail(imageURL){
    const theContainer = document.createElement('div');
    theContainer.classList.add('thumbnail-item');

    const image = createImage(imageURL);
    theContainer.appendChild(image);

    return theContainer;
}

picsArray.forEach(loadPics);


window.addEventListener('keydown', function (event) {
    debugger;
    console.log(event.keyCode);
});

