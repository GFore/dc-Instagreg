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

function makeImg(pos) {
    const newImg = document.createElement('img');
    newImg.setAttribute('src', picsArray[pos].url);
    newImg.setAttribute('alt', picsArray[pos].altText);

    newImg.addEventListener('click', function (event) {
        // console.log(event.target.src);
        console.log(event.target.alt);
    });

    return newImg;
}

function getPic() {
    picDiv.appendChild(makeImg(picIndex));
    // picDiv.innerHTML = `<img src='${picsArray[picIndex].url}' alt='${picsArray[picIndex].altText}'>`;
    picIndex = (picIndex+1) % maxPicIndex;
}

// Need to add a thumbnail container div to hold images. That div can then be styled for the desired height
// and max-width: 100% and max-height: 100% can be applied to the images to control exact size of thumbnails.


