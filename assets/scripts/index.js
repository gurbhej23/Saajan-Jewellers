$(document).ready(function () {
    new Splide(".splide1", {
        perPage: 5,
        speed: 2000,
        breakpoints: {
            430: {
                perPage: 2,
            },
        }
    }).mount()

    new Splide(".splide2", {
        speed: 1600,
        fixedWidth: '16rem',
        gap: '4rem',
        padding: { left: 30, right: 30 },
        breakpoints: {
            430: {
                padding: { left: 23, right: 23 },
                type: 'loop',
                fixedWidth: '60vw',
                // gap:'5rem',  
            },
        }
    }).mount()

    new Splide(".splide3", {
        speed: 1600,
        fixedWidth: '16rem',
        gap: '4rem',
        padding: { left: 30, right: 30 },
        breakpoints: {
            430: {
                padding: { left: 23, right: 23 },
                type: 'loop',
                fixedWidth: '60vw',
                // gap:'5rem',     
            },
        }
    }).mount()

    new Splide(".splide5", {
        perPage: 5,
        breakpoints: {
            430: {
                speed: 1600,
                perPage: 2,
            },
        }
    }).mount()

    new Splide(".splide6", {
        perPage: 5,
        breakpoints: {
            430: {
                speed: 1600,
                perPage: 2,
            },
        }
    }).mount()
})

function hamburger() {
    navBar = document.querySelector('.nav-bar2');
    navBar.classList.toggle("active")
}

function dropmenu() {
    let dropmenu = document.querySelector('#drop-menu');
    navBar1 = document.querySelector('.drop-down');
    navBar1.classList.toggle("active")
}

function dropmenu1() {
    let dropmenu = document.querySelector('#drop-menu');
    navBar1 = document.querySelector('.drop-down1');
    navBar1.classList.toggle("active")
}


$('.wish-list').each(function () {
    let key = $(this).attr('data-key')
    if (getKeyValue(key) !== null) {
        $(this).children().addClass('color-class');
    }
})

function handleWishlist(elem, key) {
    $(elem).children().toggleClass('color-class');

    if ($(elem).children().hasClass('color-class')) {
        saveKey(key)
    } else {
        removeKey(key)
    }

}

function handleWishlistLoad() {
    console.log('handleWishlistLoad')
}

function saveKey(key, value) {
    localStorage.setItem(key, value)
}

function getKeyValue(key) {
    return localStorage.getItem(key)
}

function removeKey(key) {
    return localStorage.removeItem(key)
}
