window.addEventListener("load",function(){
   document.querySelector(".preloader").classList.add("opacity-0"); 

   setTimeout(function() {
       document.querySelector(".preloader").style.display="none";
   }, 1000);
})

const filtercontainer = document.querySelector(".portafolios-filter"),
    filterBtn = filtercontainer.children,
    totalFilterBtn = filterBtn.length,
    portafolioItems = document.querySelectorAll(".portafolios-item");
totalPotafoliosItem = portafolioItems.length;
for (let index = 0; index < totalFilterBtn; index++) {
    filterBtn[index].addEventListener("click", function () {
        filtercontainer.querySelector(".activar").classList.remove("activar");
        this.classList.add("activar");

        const filterValue = this.getAttribute("data-filter");
        for (let k = 0; k < totalPotafoliosItem; k++) {
            if (filterValue === portafolioItems[k].getAttribute("data-category")) {
                portafolioItems[k].classList.remove("hide");
                portafolioItems[k].classList.add("show");
            } else {
                portafolioItems[k].classList.add("hide");
                portafolioItems[k].classList.remove("show");
            }
            if (filterValue === "all") {
                portafolioItems[k].classList.remove("hide");
                portafolioItems[k].classList.add("show");
            }
        }
    });

}

const lightbox = document.querySelector(".lightbox"),
    lightboxImg = lightbox.querySelector(".light-img"),
    lightboxClose = lightbox.querySelector(".lightbox-close"),
    lightText = lightbox.querySelector(".caption-text"),
    lightConteo = lightbox.querySelector(".caption-counter");

let itemIndex = 0;
for (let i = 0; i < totalPotafoliosItem; i++) {

    portafolioItems[i].addEventListener("click", function () {
        itemIndex = i;
        changeItem();
        toggleLightbox();
    });
}

function nextItem() {
    if (itemIndex === totalPotafoliosItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++
    }
    changeItem();
}

function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalPotafoliosItem - 1;
    } else {
        itemIndex--
    }
    changeItem();
}
function toggleLightbox() {
    lightbox.classList.toggle("open");
}
function changeItem() {
    ImgSrc = portafolioItems[itemIndex].querySelector(".portafolios-img img").getAttribute("src");
    lightboxImg.src = ImgSrc;
    lightText.innerHTML = portafolioItems[itemIndex].querySelector("h4").innerHTML;
    lightConteo.innerHTML = (itemIndex + 1) + "of" + totalPotafoliosItem
}


lightbox.addEventListener("click", function (event) {
    if (event.target === lightboxClose || event.target === lightbox) {
        toggleLightbox();
    }

})

//typing Animation
var typed = new Typed(".typing", {
    strings: ["Desarrollador Web", "Desarrollador Desktop", "Electrónico Industrial", "Dibujante"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing2", {
    strings: ["Desarrollador Web", "Desarrollador Desktop", "Electrónico Industrial", "Dibujante"],
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
        if (window.innerWidth< 1200) {
            asideSctionTooglerBtn();
        }
    })

}

function removeBackSectionClass(){
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-active");

    }
}
function addBackSectionClass(num){
    allSection[num].classList.add("back-active");
}

function showSection(element) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");

    }
    const target = element.getAttribute("href").split("#")[1];
    document.querySelector("#" + target).classList.add("active")
}

function updateNav(element){
for (let i = 0; i < totalList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target=element.getAttribute("href").split("#")[1];
    if (target===navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
        navList[i].querySelector("a").classList.add("active");
    }
    
}
}

document.querySelector(".hire-me").addEventListener("click",function(){
    const sectionindex=this.getAttribute("data-section-index");
   // console.log(sectionindex)
    showSection(this);
    updateNav(this);
    removeBackSectionClass();
    addBackSectionClass(sectionindex);
})

const navTogglerBtn=document.querySelector(".nav-toggler"),
aside=document.querySelector(".aside");
//navTogglerBtn.addEventListener("click",function(){})
/*navTogglerBtn.addEventListener("click",()=>{
    asideSctionTooglerBtn();
});*/
navTogglerBtn.addEventListener("click",asideSctionTooglerBtn);
function asideSctionTooglerBtn(){
aside.classList.toggle("open");
navTogglerBtn.classList.toggle("open");
for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");

}
}