var header=document.querySelector("header"),catechism=document.querySelector(".catechism").textContent,headerInfo=document.querySelector(".header-info"),imageCount=document.querySelectorAll(".thumbnail-trigger").length-1+" dogs + "+catechism;function toggleHeaderInfo(){headerInfo.classList.toggle("show-info")}document.querySelector("header").setAttribute("data-image-counter",imageCount),header.addEventListener("click",toggleHeaderInfo);