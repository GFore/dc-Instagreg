const picsArray = [
    {'url': 'https://images.pexels.com/photos/1471843/pexels-photo-1471843.jpeg',
     'altText': 'baby approaching mens black sunglasses',},
    {'url': 'https://images.pexels.com/photos/1166990/pexels-photo-1166990.jpeg',
     'altText': 'man tossing baby into blue sky',},
    {'url': 'https://images.pexels.com/photos/351495/pexels-photo-351495.jpeg',
     'altText': 'father carrying baby on shoulders near beach',},
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

let picIndex = 0;
let maxPicIndex = picsArray.length;
const picDiv = document.querySelector('[data-pic]');
const picBig = document.querySelector('[data-big]');
const modaler = document.querySelector('[data-modal]');

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

function getPic() {
    const newImgThumbDiv = document.createElement('div');
    newImgThumbDiv.classList.add('picThumbnailHolder');
    newImgThumbDiv.setAttribute('style', `background-image: url("${picsArray[picIndex].url}")`)
    picDiv.appendChild(newImgThumbDiv);
    newImgThumbDiv.addEventListener('click', function (event) {
        // console.log(event.target.src);
        //console.log(event.target.backgroundImage);
        console.log(event.toElement.style.backgroundImage);
        let a = event.toElement.style.backgroundImage;
        // document.body.appendChild(createThumbnail(a.slice(5, a.length-2)));
        picBig.innerHTML = '';
        picBig.appendChild(makeImg(a.slice(5, a.length-2)));
        modaler.classList.toggle('modal-hidden');
    });

    picIndex = (picIndex+1) % maxPicIndex;
}

// Need to add a thumbnail container div to hold images. That div can then be styled for the desired height
// and max-width: 100% and max-height: 100% can be applied to the images to control exact size of thumbnails.


// Instaclone!
const IMAGES = [
    "https://scontent-sjc3-1.cdninstagram.com/vp/54a8da585c48cc60b0f4cddc6d520550/5C5F929F/t51.2885-15/e35/39356533_2097180177200225_2485126450366119936_n.jpg",
    "https://scontent-sjc3-1.cdninstagram.com/vp/34f7ade8a4fe3b18c51b784591271ab1/5C60D8C4/t51.2885-15/e35/39309330_497705957372805_1938929854401478656_n.jpg",
    "https://scontent-sjc3-1.cdninstagram.com/vp/16fc6163cf9026578771dd056c553ee4/5C507411/t51.2885-15/e35/38753626_293030034614624_3652947776343375872_n.jpg"
];

// Alternate version if you're using images on the hard drive.
// Make sure to copy the images to an "images" folder in your project
// const IMAGES = [
//     "images/oakley-1.jpg",
//     "images/milla-666.jpg",
//     "images/oakley-2.jpg"
// ];

// function that generates an img element
function createImage(imageURL) {
    const theImage = document.createElement('img');
    
    // theImage.src = imageURL;
    theImage.setAttribute('src', imageURL);

    // add an event listener to the image
    theImage.addEventListener('click', function (event) {
        console.log('hello!');
        // the element that got clicked is accessible
        // as `event.target`
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

// just draw a thumbnail to the body
// so we can test the clicky mc clickersonability
let firstImageURL = IMAGES[0];
//let testThumb = createThumbnail(firstImageURL);
//document.body.appendChild(createThumbnail(firstImageURL));
picsArray.forEach(getPic);
