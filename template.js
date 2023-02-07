let arr = [];

var form = document.getElementById("form");
form.addEventListener("submit", handleSubmit );
var customSubmitButton = document.getElementById("submitCustom")
 customSubmitButton.addEventListener("click", customHeader)
 var customFooterButton = document.getElementById("submitCustomFooter")
 customFooterButton.addEventListener("click", customFooter)
var userTemp = document.getElementById("userTemplate");
var hideSubmit = document.getElementById("submit")
var initialForm = document.getElementById("template") 
var textLineBreak = document.getElementById("table-choice-textContent")
var mainText = document.querySelector(".mainText") 

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle); 
  

function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')

  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));

}

document.querySelector('.Navbar__Link-toggle')
  .addEventListener('click', classToggle); 


let count = 0; 

function customFooter(){
  var inputFooter = document.getElementById("table-choice-footer")

  if(inputFooter.value===""){
    alert("Enter a custom footer to add to option list below")
    return;
  }

  var footerInputSelect = document.getElementById("table-choice-footer-system")
  var footerOption = document.createElement("option")
  footerOption.setAttribute("class", "footerOption")
  footerOption.value = inputFooter.value
  footerOption.text = inputFooter.value
  footerInputSelect.add(footerOption)
  var footerAdded = document.createElement("p")
  footerAdded.setAttribute("class","footerAdded")
  footerAdded.textContent="Added Custom Value"
  customFooterButton.after(footerAdded)
}

function customHeader(){
  var inputHeader = document.getElementById("table-choice-text")
  if(inputHeader.value===""){
    alert("Enter a custom header to add to option list below")
    return;
  }
 
  var inputSelect = document.getElementById("table-choice-system")
  var option = document.createElement("option")
  option.setAttribute("class", "option")
  option.value = inputHeader.value
  option.text = inputHeader.value
  inputSelect.add(option)
  var added = document.createElement("p")
  added.setAttribute("class","added")
  added.textContent="Added Custom Value"
  customSubmitButton.after(added)
  
}

function clearAll(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
      
  }
 
  hideSubmit.style = "display:visible"
  var hideCustom = document.getElementById("submitCustom")
  hideCustom.style="display:visible"
 
  let removeOptions = Array.from(document.getElementsByClassName("option"))
  removeOptions.forEach(element => {
    element.remove()
  }) 
  var hideCustomFooter = document.getElementById("submitCustomFooter")
  hideCustomFooter.style="display:visible"

  let removeFooterOptions = Array.from(document.getElementsByClassName("footerOption"))
  removeFooterOptions.forEach(element => {
    element.remove()
  }) 
  form.reset()
}


//submitting the form
function handleSubmit(event) {
  event.preventDefault();
  var hideCustom = document.getElementById("submitCustom")
  hideCustom.style="display:none"
  var hideCustomFooter = document.getElementById("submitCustomFooter")
  hideCustomFooter.style="display:none"

 

  let removeAdded = Array.from(document.getElementsByClassName("added"))
  console.log(removeAdded)
  removeAdded.forEach(element => {
    element.remove()
  });
  hideSubmit.style = "display:none"
  let removeAddedFooter = Array.from(document.getElementsByClassName("footerAdded"))
  removeAddedFooter.forEach(element => {
    element.remove()
  });
  form.removeEventListener("submit", function handleSubmit(){})
      var emailNot = document.getElementById("emailNotification")
      emailNot.style = "display:visible; margin: 0 auto"
      var emailHeader = document.getElementById("emailHeader")
      var footerText = document.getElementById("footerText") 
      var logo = document.getElementById("logo") 
      var mainText = document.querySelector(".mainText") 

      if(event.target[0].value === ""){
        logo.setAttribute("src", "https://images.g2crowd.com/uploads/optimized_product_banner/image/815/a94e25efd798e04b4bf6fed25cf304d1.png")
      } else{
        logo.setAttribute("src", event.target[0].value)
      }

      
      emailHeader.style = `color:${event.target[1].value};`
      emailHeader.textContent = "Hello " + `${event.target[6].value}`+","
      footerText.textContent= `${event.target[9].value}`
      mainText.style = `color:${event.target[1].value};`
      mainText.textContent = `${event.target[3].value}`

      var clear = document.createElement("button")
      clear.setAttribute("id", "clear")
      clear.textContent = "Clear"
      var clearBtnDiv = document.getElementById("button")
      clearBtnDiv.appendChild(clear) 
      clear.addEventListener("click", function(){
        count = 0;
        emailNot.style = "display:none;"
        clearAll(clearBtnDiv)
        form.addEventListener("submit", function handleSubmit (){} );
      })
      var copyToClipBoard = document.createElement("button")
      clear.after(copyToClipBoard)
      copyToClipBoard.textContent = "Copy HTML to clipboard"
      copyToClipBoard.setAttribute("id", "copy")

      copyToClipBoard.onclick = async () => {
        await navigator.clipboard.writeText(emailNot.outerHTML)
      } 
  }






