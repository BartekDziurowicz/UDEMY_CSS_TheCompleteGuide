var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButton = document.querySelectorAll('.plan button');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

for (var i=0; i<selectPlanButton.length; i++) {
    selectPlanButton[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        // modal.className = 'open';
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function() {backdrop.classList.add('open');}, 10);
    });
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open');
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
});

if (modalNoButton) {
    modalNoButton.addEventListener('click', function() {
        // modal.style.display = 'none';
        // backdrop.style.display = 'none';
        if (modal) {
            modal.classList.remove('open');
        }
        backdrop.classList.remove('open');        
        setTimeout(function() {backdrop.style.display = 'none';}, 10);
    });
}

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function() {backdrop.classList.add('open');}, 200);    
});
