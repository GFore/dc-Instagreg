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
let modalVisible = false;

function hideModal() {
    modalDiv.classList.toggle('modal-hidden');
    modalVisible = false;
}
function getURL(thumbUrl) {
    //converts the thumbnail URL to the large image url
    return picsArray[picsArray.map(x => x.thumb).indexOf(thumbUrl)].url;
}
function makeImg(makeUrl, makeTitle) {
    const newImg = document.createElement('img');
    makeUrl = makeUrl.slice(5, makeUrl.length-2)  // trim off all but the actual URL
    newImg.setAttribute('src', getURL(makeUrl));
    newImg.setAttribute('alt', makeTitle);
    newImg.setAttribute('data-bigpic','');
    return newImg;
}
function loadPics() {
    const newImgThumbDiv = document.createElement('div');
    newImgThumbDiv.classList.add('picThumbnailHolder');
    newImgThumbDiv.setAttribute('style', `background-image: url("${picsArray[currentPicIndex].thumb}")`);
    newImgThumbDiv.setAttribute('title', picsArray[currentPicIndex].altText);
    picHolderDiv.appendChild(newImgThumbDiv);
    newImgThumbDiv.addEventListener('click', function (event) {
        let clickedImg = makeImg(event.target.style.backgroundImage, event.target.title);
        picFrameDiv.innerHTML = '';
        picFrameDiv.appendChild(clickedImg);
        modalDiv.classList.toggle('modal-hidden');
        modalVisible = true;
    });
    currentPicIndex = (currentPicIndex+1) % maxPicIndex;
}
function showPrevPic(){
    const bigImg = document.querySelector('[data-bigpic]');
    let newIndex = picsArray.map(x => x.url).indexOf(bigImg.src) - 1;
    if (newIndex < 0) {newIndex = maxPicIndex - 1;};
    bigImg.src = picsArray[newIndex].url;
    bigImg.alt = picsArray[newIndex].altText;
}
function showNextPic(){
    const bigImg = document.querySelector('[data-bigpic]');
    let newIndex = picsArray.map(x => x.url).indexOf(bigImg.src) + 1;
    if (newIndex === maxPicIndex) {newIndex = 0;};
    bigImg.src = picsArray[newIndex].url;
    bigImg.alt = picsArray[newIndex].altText;
}

modalDiv.addEventListener('click', hideModal);
picsArray.forEach(loadPics);

window.addEventListener('keydown', function (event) {
    if (modalVisible) {
        if (event.keyCode === 27) {
            hideModal();
        } else if ([37, 40, 80].includes(event.keyCode)) {
            // show previous pic if left arrow, down arrow, or p are pressed
            showPrevPic();
        } else if ([32, 38, 39, 78].includes(event.keyCode)) {
            // show next pic if space, up arrow, right arrow, or n are pressed
            showNextPic();
        }
    };
});


// ideas:
// - add/delete options for adding new pics and removing existing ones
// - use local storage to keep up with images the user added
