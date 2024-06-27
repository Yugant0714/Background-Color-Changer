const button = document.querySelectorAll(".button")
const body = document.querySelector("body")
button.forEach((button)=>{
  // console.log(button)
  button.addEventListener("click", (e)=>{
    if(e.target.id == "grey"){
      body.style.backgroundColor = "grey"
    }
    else if(e.target.id == "white"){
      body.style.backgroundColor = "white"
    }
    else if(e.target.id == "blue"){
      body.style.backgroundColor = "blue"
    }
    else{
      body.style.backgroundColor = "yellow"
    }
  })
})