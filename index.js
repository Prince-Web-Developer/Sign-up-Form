const viewPortHeight = document.documentElement.clientHeight
const viewPortWidth = document.documentElement.clientWidth

const textContainer = document.querySelector(".main")
const main = document.querySelector("main")

// now when text content is more than 100vh instead of increasing in height and causing 
// a layout break the flex direction will set to column

if (textContainer.offsetHeight > viewPortHeight || viewPortWidth < 950) {
    main.style.flexDirection = "column"
    const imgContainer = document.querySelector(".img-logo-con")
    imgContainer.classList.add("img-logo-con-colum-styles")
}


const form = document.querySelector("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    


    const data = new FormData(e.target);
    const values = Object.fromEntries(data.entries());


    if (values["Cpassword"] != values["password"]) {
        addClass("invalid")
        changeFormMeassage("Both Password and Confirm Password Should be same")
    }else {
        addClass("opion")
        changeFormMeassage("")
    }  
    
    window.location.replace("https://www.youtube.com/watch?v=xvFZjo5PgG0");
})




function changeFormMeassage(msg) {
    const meassageContainer = document.querySelector(".message")
    meassageContainer.innerText = msg
}

function addClass(cl) {
    const passSpan = document.querySelectorAll("#passValid")
    passSpan.forEach((e) => {
        e.className = ""
        e.classList.add(cl)
    })
}