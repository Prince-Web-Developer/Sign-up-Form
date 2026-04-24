const viewPortHeight = document.documentElement.clientHeight
const viewPortWidth = document.documentElement.clientWidth

const textContainer = document.querySelector(".main")
const main = document.querySelector("main")

// now when text content is more than 100vh instead of increasing in height and causing 
// a layout break the flex direction will set to column

if (textContainer.offsetHeight > viewPortHeight || viewPortWidth < 950){
    main.style.flexDirection = "column"
    const imgContainer = document.querySelector(".img-logo-con")
    imgContainer.classList.add("img-logo-con-colum-styles")
}


const form = document.querySelector("form")

form.addEventListener("submit",(e) => {
    e.preventDefault()
})