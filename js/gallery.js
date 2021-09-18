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


async function showTeam(){
    const teamResponse = await fetch('https://cognitia2021.herokuapp.com/api/teammembers/');
    const data = await teamResponse.json();
    getTeam(data);
}

function getTeam(data) {
    const eventImg = document.querySelector('#eventTeam');
    const url = "https://cognitia2021.herokuapp.com/"
    for (let i = 0; i < data.length; i++) {
        if ( data[i].event_name === 1){
            let teamHtml = '<div class="col-lg-3"><h6>HackOverFlow</h6></div><div class="col-lg-9 mt-4 mt-lg-0"><div class="sponsors"><img  src="' + url + data[i].image + '" alt=""></div></div>'
        
            eventImg.innerHTML += teamHtml;
        
        }
    }

 
}

showTeam();