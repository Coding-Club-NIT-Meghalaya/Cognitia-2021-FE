function myfun(data) {
    var row = document.querySelector('#teamimages');
    for (let i = 0; i < data.count; i++) {
        var myhtml = '<div  class="col-sm-6 col-md-4"><a href="#"';
        myhtml += 'data-fancybox="gallery">';
        myhtml += '<div class="img-wrap gallery"><img src="#"';
        myhtml += ' alt=""></div></a></div>';

    }
}
fetch('https://cognitia2021.herokuapp.com/api/teammembers/', )
    .then(response => response.json())
    .then(data => myfun(data));