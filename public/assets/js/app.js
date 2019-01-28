
// Carousel Click Template
const carouselClick = function(index,activeFlag){
    return `
        <li data-target="#carouselExampleIndicators" data-slide-to="${index}" class="${activeFlag}"></li>
    `
}
// Carousel Card Template
const carouselItem = function(photoUrl,activeFlag){
    return `
        <div class="carousel-item ${activeFlag}">
            <img src="${photoUrl}" class="d-block w-100" alt="...">
        </div>
    `
}
// Category Card Template
const categoryCard = function(name, photoUrl) {
   return `
        <div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
            <div class="card">
                <a href="#" class="card-body">
                    <h5 class="card-title">${name}</h5>
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
        initFlag="";
        if (i===0){
            initFlag="active";
        }
        let itemName = array[i].name;
        let photo = array[i].PhotoUrl;
        $('#categories').append(categoryCard(itemName, photo));
        $('#carouselItems').append(carouselItem(photo, initFlag));
        $('#carouselClicks').append(carouselClick(i, initFlag));
    }
}

// Get Category Data from database 
const getCategories = function() {
    $.get('/api/categories')
    .then(function(data){
        renderCategories(data);
    })
}
  
getCategories();