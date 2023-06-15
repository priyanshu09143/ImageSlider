let sliderDiv = document.querySelector("#slider")
let imageConatiner = document.querySelector(".image-conatiner")
let allImage = document.querySelectorAll("img")


let previous = document.querySelector("a:first-of-type")
let next = document.querySelector("a:last-of-type")
// console.log(imageConatiner.clientWidth)


let currentslide = 0;


allImage.forEach((img) => {
    img.style.width = imageConatiner.clientWidth + "px"
})
imageConatiner.style.width = imageConatiner.clientWidth * allImage.length + "px"

window.onload = () => {
    imageConatiner.style.transform = "translateX(-" + sliderDiv.clientWidth * (currentslide + 1) + "px)";
    currentslide++;
}

previous.onclick = (e) => {
    e.preventDefault();
    
    imageConatiner.style.transition = "all 0.5s";
    imageConatiner.style.transform = "translateX(-" + sliderDiv.clientWidth * (currentslide - 1) + "px)";
    currentslide--;
    
}

next.onclick = (e) => {
    e.preventDefault();
    
    imageConatiner.style.transition = "all 0.5s";
    imageConatiner.style.transform = "translateX(-" + sliderDiv.clientWidth * (currentslide + 1) + "px)";
    currentslide++;
   
    
}


imageConatiner.ontransitionend = () => {

    // if we have reached the last image ,  move current slide to first image 
    if(allImage[currentslide].id === "first"){
        currentslide = 1;
    }
    //if we reached the fisrt image , move current slide to the last image
    if(allImage[currentslide].id === "last"){
        currentslide = allImage.length - 2;
    }
    //user ko pagal banan
    imageConatiner.style.transition = "none";

    //do the transition
    imageConatiner.style.transform = "translateX(-" + sliderDiv.clientWidth * currentslide + "px)";

};
