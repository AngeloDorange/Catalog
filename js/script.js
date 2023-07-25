// YEAR UPDATE
let yearUpdate = new Date().getFullYear();
let newYear = document.getElementById("year");
newYear.textContent = yearUpdate;


// LIGHT GALLERY
lightGallery(document.getElementById('lightgallery'), {
    download: false,
    share: false,
});



// SHOW & HIDE ABOUT
let aboutBtn = document.querySelector('.about-btn');

function showAbout () {
    let aboutCard = document.getElementById("about-card");
    aboutCard.style.display = "block";
    document.querySelector('.about-card').classList.add('show');
    aboutBtn.style.color = '#4fc031';

}

function closeAbout () {
    let aboutCard = document.getElementById("about-card");
    aboutCard.style.display = "none";
    document.querySelector('.about-card').classList.add('hide');
    aboutBtn.style.color = 'inherit';

}


// GSAP ANIMATION
const tl = gsap.timeline({defaults: {ease: 'power4.out'}});

tl.fromTo("nav", {y: 50}, {y: 0, duration: 1.5});
tl.fromTo(".portfolio", { opacity: 0 }, { opacity: 1, duration: 2});



//FLASH TITLE
let alert = false;
const interval = setInterval(() => {
    document.title = alert
    ? 'Catalog': 'Photography Website';
    alert = !alert;
}, 2000);
