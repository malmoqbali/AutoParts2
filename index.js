/*initializing constants to access images and gallery class */
const photos = ["/img/bmw.jpg", "/img/gtr34.jpg", "/img/m3.jpg",];
const gallery = document.querySelector('.gallery');

/*function to decide how often the images change */
const interval = setInterval(function () {
    startGallery();
}, 3000);

/*variable that goes through array with incrimentation/decrementation */
var index = 1;

/*function for the image changing process */
startGallery = () => {
    gallery.style.backgroundImage = `url(${photos[index++]})`;
    gallery.classList.remove('fade');
    void gallery.offsetwidth;
    gallery.classList.add('fade');
    if (index > photos.length - 1) index = 0;
}


 // Welcome bar by JQuery frameworks

 $("#website-name").html("  Welcome to the Auto parts website!");
 




 setInterval(function () {
     var now = new Date();
     var date = now.toLocaleDateString();
     var time = now.toLocaleTimeString();
     document.getElementById("current-date").textContent = date;
     document.getElementById("current-time").textContent = time;
 }, 1000);