// DOM Ready
$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 4,
        slideBy: 1,
        margin: 10,
        loop: false,
        nav: true,
        navText: ['<span style="font-size:48px"><i class="fas fa-angle-left"></i></span>','<span style="font-size:48px"><i class="fas fa-angle-right"></i></span>'],
        dots: false
    });
    getCategories();
    //getCarousel();
});

// Carousel Click Template
const carouselClick = function(index,activeFlag){
    return `
        <li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="${activeFlag}"></li>
    `
}
// Carousel Card Template
const tmplCarouselItem = function(photoUrl){
    return `
        <div class="card">
            <img src="${photoUrl}" class="card-img-top" alt="...">
        </div>
    `
}

// Category Card Template
const categoryCard = function(id, name, photoUrl) {
   return `
        <div class="col-sm-12 col-md-6 col-lg-4">
            <div class="card mb-3">
                <a href="/results.html?categoryId=${id}">
                    <h5 class="card-title pl-2 pt-2">${name}</h5>
                    <img src="${photoUrl}" class="card-img-top" alt="...">
                </a>
            </div>
        </div>
    </div>
  `
}

// Render Category Table content to index.html
const renderCategories = function(array) {
    $('#categories').empty();
    $('#carouselItems').empty();
    for (let i = 0; i < array.length; i++) {
        let catId = array[i].categoryId;
        let itemName = array[i].name;
        let photo = array[i].PhotoUrl;
        $('#categories').append(categoryCard(catId, itemName, photo));
    }
}

const renderCarousel = function(array){
    $('.owl-carousel').empty();
    for (let i = 0; i < array.length; i++) {
        let photo = array[i].image;
        $('#todCarousel .owl-carousel').append(tmplCarouselItem(photo));
        //let item = tmplCarouselItem(photo);
        //$('#todCarousel .owl-carousel').trigger('add.owl.carousel',[`<div>TEXTHERE</div>`,0]).trigger('refresh.owl.carousel');
    }
}
 
// Get Carousel Data from database based on time of day
const getCarousel = function() {
    let now = new Date();
    let carouselCategory=5;
    if (now.getHours() > 3 && (now.getHours() < 10 )) {
        carouselCategory=1;
    }
    if (now.getHours() > 9 && (now.getHours() < 16 )) {
        carouselCategory=2;
    }
    if (now.getHours() > 15 && (now.getHours() < 22 )) {
       carouselCategory=3;
    } 
    $.get(`/api/recipes?categoryId=${carouselCategory}`)
    .then(function(data){
        renderCarousel(data);
    })
}

// Get Category Data from database 
const getCategories = function() {
    $.get('/api/categories')
    .then(function(data){
        renderCategories(data);
    })
}