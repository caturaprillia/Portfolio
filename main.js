// =============== toggle icon navbar ===================== //

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}


// Dapatkan semua link navbar
const menuItems = document.querySelectorAll('.navbar a');

// Tambahkan event listener ke setiap link
menuItems.forEach(item => {
    item.addEventListener('click', function() {
        // Hapus kelas active dari semua link
        menuItems.forEach(link => link.classList.remove('active'));

        // Tambahkan kelas active ke link yang diklik
        this.classList.add('active');
    });
});


// =============== scroll section active link ===================== //

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // =============== sticky navbar===================== //
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // =============== remove toggle icon and navbar ===================== //
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};
// =============== scroll reveal ===================== //
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skill-container, timeline-items, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-contact ', { delay: 500 });