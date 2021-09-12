    
   // Robotics Event card started
   function myfun(data) {
    var row = document.querySelector('#roboticsEventCards');
    const Imgurl = 'https://codingclubnitm.herokuapp.com/api/v1/image/e6b04d5f09f67f3741b197af6c48367e.jpg';
    for (let i = 0;i<data.length; i++) {
        let myhtml = '<div class="col-md-4 mt-4"><div class="blog-wrap pb-4"><a href="#"><img src="';
        myhtml += /*data[i].image*/ Imgurl + '" alt=""></a><h5 class="px-4 pt-3 text-center">';
        myhtml += data[i].name + '</h5><p class="px-4 mb-3 ">Total prize:<small class="h5 px-2 my-1"><i class="fa fa-rupee"></i> ';
        myhtml += data[i].total_prize.slice(3) + '</small></p><p class="px-4 text-justify">';
        myhtml += data[i].description.substring(0,100) + '</p><p class="px-4 py-2">Event Duration: <small class="px-2 pt-3 h6">';
        myhtml += data[i].duration.slice(0,6) + '</small></p><a href="';
        myhtml += data[i].doc_link + '"><div class="go-post pl-4 pt-2"><i class="fa fa-long-arrow-right"></i></div></a></div></div>';
        row.innerHTML += myhtml;
    }
}
fetch('https://cognitia2021.herokuapp.com/api/events/', )
    .then(response => response.json())
    .then(data => myfun(data.filter(e=>e.type==="Robotics")));
    
   // coding Event card Strated
function myfun1(data) {
    var row1 = document.querySelector('#codingEventCards');
    const Imgurl = 'https://codingclubnitm.herokuapp.com/api/v1/image/e6b04d5f09f67f3741b197af6c48367e.jpg';
    for (let i = 0;i<data.length; i++) {
        let myhtml = '<div class="col-md-4 mt-4"><div class="blog-wrap pb-4"><a href="#"><img src="';
        myhtml += /*data[i].image*/ Imgurl + '" alt=""></a><h5 class="px-4 pt-3 text-center">';
        myhtml += data[i].name + '</h5><p class="px-4 mb-3 ">Total prize:<small class="h5 px-2 my-1"><i class="fa fa-rupee"></i> ';
        myhtml += data[i].total_prize.slice(3) + '</small></p><p class="px-4 text-justify">';
        myhtml += data[i].description.substring(0,100) + '</p><p class="px-4 py-2">Event Duration: <small class="px-2 pt-3 h6">';
        myhtml += data[i].duration.slice(0,6) + '</small></p><a href="';
        myhtml += data[i].doc_link + '"><div class="go-post pl-4 pt-2"><i class="fa fa-long-arrow-right"></i></div></a></div></div>';
        row1.innerHTML += myhtml;
    }
}
fetch('https://cognitia2021.herokuapp.com/api/events/', )
    .then(response => response.json())
    .then(data => myfun1(data.filter(e=>e.type==="Coding")));

   // Departmental Event card Started
function myfun2(data) {
    var row2 = document.querySelector('#departmentalEventCards');
    const Imgurl = 'https://codingclubnitm.herokuapp.com/api/v1/image/e6b04d5f09f67f3741b197af6c48367e.jpg';
    for (let i = 0;i<data.length; i++) {
        let myhtml = '<div class="col-md-4 mt-4"><div class="blog-wrap pb-4"><a href="#"><img src="';
        myhtml += /*data[i].image*/ Imgurl + '" alt=""></a><h5 class="px-4 pt-3 text-center">';
        myhtml += data[i].name + '</h5><p class="px-4 mb-3 ">Total prize:<small class="h5 px-2 my-1"><i class="fa fa-rupee"></i> ';
        myhtml += data[i].total_prize.slice(3) + '</small></p><p class="px-4 text-justify">';
        myhtml += data[i].description.substring(0,100) + '</p><p class="px-4 py-2">Event Duration: <small class="px-2 pt-3 h6">';
        myhtml += data[i].duration.slice(0,6) + '</small></p><a href="';
        myhtml += data[i].doc_link + '"><div class="go-post pl-4 pt-2"><i class="fa fa-long-arrow-right"></i></div></a></div></div>';
        row2.innerHTML += myhtml;
    }
}
fetch('https://cognitia2021.herokuapp.com/api/events/', )
    .then(response => response.json())
    .then(data => myfun2(data.filter(e=>e.type==="Departmental")));
    