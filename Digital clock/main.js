const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const seconde = document.querySelector(".seconde")
const timeIndicator = document.querySelector(".period")

const dataFormat = document.querySelector("[data-format]")

function showTime(){
    let time = new Date()
    let hours = time.getHours()
    let minutes = time.getMinutes()
    let secondes = time.getSeconds()
    let period = "AM"

    if(hours >= 12){
        period = "PM"
    }


    const format = changeFormatButton.getAttribute("data-format")
    if(format === "12") {
        hours = hours > 12 ? hours % 12 : hours
    }

   
    if(hours < 10){
        hours = hours.toString().padStart(2,"0")
    }

    if(minutes < 10){
        minutes = minutes.toString().padStart(2,"0")
    }

    if(secondes < 10){
        secondes = secondes.toString().padStart(2,"0")
    }
    

    hour.textContent =  `${hours} : `
    minute.textContent = `${minutes} : `
    seconde.textContent = secondes
    timeIndicator.textContent = period
}


const changeFormatButton = document.querySelector(".change-format-btn")

changeFormatButton.addEventListener("click", () => {
    let currentFormat = changeFormatButton.getAttribute("data-format")
    
    if(currentFormat === "12"){
        changeFormatButton.setAttribute("data-format","24")
        timeIndicator.classList.add("hidden-format")
    }else{
        changeFormatButton.setAttribute("data-format","12")
        timeIndicator.classList.remove("hidden-format")
    }

    changeFormatButton.classList.toggle("active")
    changeFormatButton.classList.toggle("toggle")
})


const showFormatBox = document.querySelector(".show-format-button")
const formatBox = document.querySelector(".change-format-box")

showFormatBox.addEventListener("click", () => {
    formatBox.classList.add("show")
})

document.addEventListener("click", (e) => {
    const hiddenFormatBox = e.target.id

    if(hiddenFormatBox !=="format-box"){
        formatBox.classList.remove("show")
    }
}
)


setInterval(showTime,1000)

document.addEventListener("DOMContentLoaded", showTime)


const dateShow = document.querySelector("#Date")
const today = new Date()
let dateDisplay = today.toLocaleDateString("en-EN",{weekday:"long", month:"short",day:"numeric",year:"numeric"})

dateShow.textContent = dateDisplay