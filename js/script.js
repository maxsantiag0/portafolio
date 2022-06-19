window.addEventListener("load", function () {
    document.querySelector(".preloader").classList.add("opacity-0");

    setTimeout(function () {
        document.querySelector(".preloader").style.display = "none";
    }, 1000);
})

//typing Animation
var typed = new Typed(".typing", {
    strings: ["Desarrollador de Software", "Electrónico Industrial", "Docente de Robótica", "Dibujante"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing2", {
    strings: ["Desarrollador de Software", "Electrónico Industrial", "Docente de Robótica", "Dibujante"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


//Navbar = list 

const list = document.querySelector(".list"),
    navList = list.querySelectorAll("li"),
    totalList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;
for (let x = 0; x < totalList; x++) {
    const a = navList[x].querySelector("a");
    a.addEventListener("click", function () {
        //remove back section class
        removeBackSectionClass();
        for (let j = 0; j < totalList; j++) {
            if (navList[j].querySelector("a").classList.contains("active")) {
                //add back section class
                addBackSectionClass(j);
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        if (window.innerWidth < 1200) {
            asideSctionTooglerBtn();
        }
    })

}

function removeBackSectionClass() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-active");

    }
}
function addBackSectionClass(num) {
    allSection[num].classList.add("back-active");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");

    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element) {
    for (let i = 0; i < totalList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const target = element.getAttribute("href").split("#")[1];
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }

    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionindex = this.getAttribute("data-section-index");
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
    addBackSectionClass(sectionindex);
})

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", asideSctionTooglerBtn);
function asideSctionTooglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");

    }
}
