const recruitment = document.querySelector("nav div:last-of-type ul li:first-child span");

setTimeout(() => {
    recruitment.classList.add("recruitment");
    
    recruitment.style.transform = "translateX(-25px)"
    recruitment.style.opacity = "1";
},500)

const detailMethodBtn = document.querySelector(".newschool-newmethod button");
const btnSpan = detailMethodBtn.querySelectorAll("span")


detailMethodBtn.addEventListener("mouseenter", () =>  {
    btnSpan[0].style.opacity = "1"
    btnSpan[0].style.transform = "translateX(-30px)"
    
})
detailMethodBtn.addEventListener("mouseleave", () =>  {
    btnSpan[0].style.opacity = "0"
    btnSpan[0].style.transform = "translateX(-40px)"
})
