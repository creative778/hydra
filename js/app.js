/*
Hydra Tools v1.0
Main JavaScript
*/


// ===============================
// Page Loading Animation
// ===============================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});




// ===============================
// Tool Button Action
// ===============================


const startButton = document.querySelector("button");


if(startButton){

startButton.addEventListener("click",()=>{


    const input =
    document.querySelector("input");


    if(input.value.trim()===""){

        alert(
        "Please enter a link or text first."
        );

        return;

    }


    alert(
    "Your request has been received. Tool processing will be available soon."
    );


});


}




// ===============================
// Smooth Scroll
// ===============================


document.querySelectorAll("a")
.forEach(link=>{


link.addEventListener("click",function(e){


if(this.hash){


e.preventDefault();


document
.querySelector(this.hash)
.scrollIntoView({

behavior:"smooth"

});


}


});


});





// ===============================
// Dynamic Year Footer
// ===============================


const footer =
document.querySelector("footer");


if(footer){


const year =
new Date().getFullYear();


footer.innerHTML =
`© ${year} Hydra Tools. All Rights Reserved.`;

}






// ===============================
// Simple Tool Search
// ===============================


const search =
document.querySelector("input");



if(search){


search.addEventListener("keyup",()=>{


let value =
search.value.toLowerCase();



document
.querySelectorAll(".card")
.forEach(card=>{


let text =
card.innerText.toLowerCase();



if(text.includes(value)){


card.style.display="block";


}

else{


card.style.display="none";


}



});



});


}




// ===============================
// Scroll Reveal Animation
// ===============================


const cards =
document.querySelectorAll(".card");



window.addEventListener("scroll",()=>{


cards.forEach(card=>{


const position =
card.getBoundingClientRect()
.top;



if(position < window.innerHeight - 100){


card.style.opacity="1";

card.style.transform=
"translateY(0)";


}



});



});




// Initial Card Animation


cards.forEach(card=>{


card.style.opacity="0";

card.style.transform=
"translateY(50px)";

card.style.transition=
"all .6s ease";


});

// ===============================
// Mobile Menu
// ===============================


const menuBtn =
document.getElementById("menuBtn");


const navLinks =
document.getElementById("navLinks");



if(menuBtn){


menuBtn.onclick=()=>{


navLinks.classList.toggle("active");


};


}




// ===============================
// Dark Light Mode
// ===============================


const themeBtn =
document.getElementById("themeToggle");



if(themeBtn){



let theme =
localStorage.getItem("theme");



if(theme==="light"){


document.body.classList.add(
"light-mode"
);


themeBtn.innerHTML="☀️";


}




themeBtn.onclick=()=>{


document.body.classList.toggle(
"light-mode"
);



if(document.body.classList.contains(
"light-mode"
)){


localStorage.setItem(
"theme",
"light"
);


themeBtn.innerHTML="☀️";


}

else{


localStorage.setItem(
"theme",
"dark"
);


themeBtn.innerHTML="🌙";


}



};



}
