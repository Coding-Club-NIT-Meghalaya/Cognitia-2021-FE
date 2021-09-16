async function showImg() {
    const response = await fetch('https://cognitia2021.herokuapp.com/api/gallery/');
    const data = await response.json();
    getImg(data);
}

function getImg(data) {
    var row = document.querySelector('#galleryimages');
    for (let i = 0; i<data.length; i++) {
        let myhtml = '<div  class="col-sm-6 col-md-4" style="padding: 15px;"><a href="https://cognitia2021.herokuapp.com/' + data[i].image;
        myhtml += '"data-fancybox="gallery">';
        myhtml += '<div class="img-wrap gallery"><img src="https://cognitia2021.herokuapp.com/' + data[i].image;
        myhtml += '" alt=""></div></a></div>';
        row.innerHTML += myhtml;
    }

}

showImg();
