let modal = document.getElementById("myModal");

let img1 = document.getElementById("carousel_1");
let img2 = document.getElementById("carousel_2");
let img3 = document.getElementById("carousel_3");
let img4 = document.getElementById("carousel_4");
let img5 = document.getElementById("carousel_5");
let img6 = document.getElementById("carousel_6");
let modalImg1 = document.getElementById("img_1");
let modalImg2 = document.getElementById("img_2");
let modalImg3 = document.getElementById("img_3");
let modalImg4 = document.getElementById("img_4");
let modalImg5 = document.getElementById("img_5");
let modalImg6 = document.getElementById("img_6");

img1.onclick = function(){
    modal.style.display = "block";
    modalImg1.src = this.src;
}

img2.onclick = function(){
    modal.style.display = "block";
    modalImg1.src = this.src;
}

img3.onclick = function(){
    modal.style.display = "block";
    modalImg1.src = this.src;
}

img4.onclick = function(){
    modal.style.display = "block";
    modalImg1.src = this.src;
}

img5.onclick = function(){
    modal.style.display = "block";
    modalImg1.src = this.src;
}

img6.onclick = function(){
    modal.style.display = "block";
    modalImg1.src = this.src;
}

let span1 = document.getElementsByClassName("close")[1];

span1.onclick = function() {
  modal.style.display = "none";
}