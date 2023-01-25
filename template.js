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
function initial(){
  var textColorLabel = document.getElementById("textColorLabel")
  var textColor = document.getElementById("table-choice-textColor")
  var rows = document.getElementById("table-choice-rows")
  var columns = document.getElementById("table-choice-columns")
  var rowLabel = document.getElementById("rowLabel")
  var columnLabel = document.getElementById("colLabel")
  var cellLabel = document.getElementById("cellLabel")
  var cells = document.getElementById("table-choice-cells")
  var bgColorLabel = document.getElementById("bgColorLabel")
  var bgColor = document.getElementById("table-choice-bg")
  var textContentLabel = document.getElementById("textContentLabel")
    var textContent = document.getElementById("table-choice-textContent")
    var textContentLabelL = document.getElementById("textContentLabelL")
    var textContentL = document.getElementById("table-choice-textContentL")
    var textContentLabelR = document.getElementById("textContentLabelR")
    var textContentR = document.getElementById("table-choice-textContentR")
    var linearLabel = document.getElementById("linearLabel")
    var linear = document.getElementById("table-choice-linear") 
    var headerLabel = document.getElementById("headerLabel")
    var headerColor = document.getElementById("table-choice-header")
    var headerText = document.getElementById("table-choice-text");
    var submitCustom = document.getElementById("submitCustom");
    var headerSystem = document.getElementById("headerSystem");
    var tableChoiceSystem= document.getElementById("table-choice-system");
    var headerLabel = document.getElementById("headerLabel")
    var headerTextLabel = document.getElementById("headerTextLabel")

    var footerText = document.getElementById("table-choice-footer");
    var submitCustomFooter = document.getElementById("submitCustomFooter");
    var footerSystem = document.getElementById("footerSystem")
    var footerTextSystem = document.getElementById("table-choice-footer-system")
    var footerLabel = document.getElementById("footerLabel")
    var headerColorLabel = document.getElementById("headerColor")
    var headerColorActual = document.getElementById("table-choice-headerColor")

    headerColorLabel.style ="display: none"
    headerColorActual.style = "display: none"
    headerTextLabel.style = "display:none"
    headerLabel.style = "display:none"
    headerSystem.style="display:none"
    tableChoiceSystem.style="display:none"
    headerText.style = 'display:none'
    submitCustom.style = "display:none"
    headerLabel.style = "display:none;"

    footerLabel.style="display:none"
    footerSystem.style="display:none"
    footerTextSystem.style="display:none"
    footerText.style = 'display:none'
    submitCustomFooter.style = "display:none"

    headerColor.style = "display:none;"
    linearLabel.style = "display:none"
    linear.style = "display:none"
    textContentLabel.style= "display:none"
    textContent.style= "display:none"
    textContentLabelL.style= "display:none"
    textContentL.style= "display:none"
    textContentLabelR.style= "display:none"
    textContentR.style= "display:none"
  bgColorLabel.style = "display:none"
  bgColor.style = "display:none"
  cellLabel.style = "display:none"
  cells.style = "display:none"
  rowLabel.style="display:none"
  columnLabel.style="display:none"
  rows.style="display:none"
  columns.style = "display:none"
  textColorLabel.style = "display:none"
  textColor.style = "display:none"
  hideSubmit.style = "display:none"
}
//initial screen before template option is selected hides all form inputs
if(initialForm.value === "none"){
  initial()
} 

//when template options change, hide/show certain form inputs
function handleChange(event){
  hideSubmit.style = "display: visible"
  form.style="margin-bottom:20px;"

  if(event.target.value === "Simple Table") {
    var rows = document.getElementById("table-choice-rows")
    var columns = document.getElementById("table-choice-columns")
    var rowLabel = document.getElementById("rowLabel")
    var columnLabel = document.getElementById("colLabel")
    var cellLabel = document.getElementById("cellLabel")
    var cells = document.getElementById("table-choice-cells")
    var bgColorLabel = document.getElementById("bgColorLabel")
    var bgColor = document.getElementById("table-choice-bg")
    var textColorLabel = document.getElementById("textColorLabel")
    var textColor = document.getElementById("table-choice-textColor") 
    var linearLabel = document.getElementById("linearLabel")
    var linear = document.getElementById("table-choice-linear") 
    var headerTextLabel = document.getElementById("headerTextLabel")
    var headerColor = document.getElementById("table-choice-header")
    var headerText = document.getElementById("table-choice-text");
    var submitCustom = document.getElementById("submitCustom");
    headerText.style = 'display:none'
    submitCustom.style = "display:none"
    headerTextLabel.style = "display:none"
    headerColor.style = "display:visible;"
    //text content
    var textContentLabel = document.getElementById("textContentLabel")
    var textContent = document.getElementById("table-choice-textContent")
    var textContentLabelL = document.getElementById("textContentLabelL")
    var textContentL = document.getElementById("table-choice-textContentL")
    var textContentLabelR = document.getElementById("textContentLabelR")
    var textContentR = document.getElementById("table-choice-textContentR")
    var headerSystem = document.getElementById("headerSystem")
    var textSystem = document.getElementById("table-choice-system")
    var headerLabel = document.getElementById("headerLabel");
    headerLabel.style="display:visible"
    headerSystem.style="display:none"
    textSystem.style="display:none"
    textContentLabel.style= "display:none"
    textContent.style= "display:none"
    textContentLabelL.style= "display:none"
    textContentL.style= "display:none"
    textContentLabelR.style= "display:none"
    textContentR.style= "display:none"

    linearLabel.style = "display:visible"
    linear.style = "display:visible"
    textColorLabel.style = "display:none"
    textColor.style = "display:none"
    bgColorLabel.style = "display:visible"
    bgColor.style = "display:visible"
    cellLabel.style = "display:visible"
    cells.style = "display:visible"
    rowLabel.style="display:visible"
    columnLabel.style="display:visible"
    rows.style="display:visible"
    columns.style = "display:visible"
  }  if(event.target.value === "Assessment Notification") {
    var headerLabel = document.getElementById("headerLabel")
    var headerColor = document.getElementById("table-choice-header")
    headerLabel.style = "display:visible;"
    headerColor.style = "display:visible;"
    
  } if(event.target.value === "Email Notification"){
    var rows = document.getElementById("table-choice-rows")
    var columns = document.getElementById("table-choice-columns")
    var rowLabel = document.getElementById("rowLabel")
    var columnLabel = document.getElementById("colLabel")
    var cellLabel = document.getElementById("cellLabel")
    var cells = document.getElementById("table-choice-cells")
    var bgColorLabel = document.getElementById("bgColorLabel")
    var bgColor = document.getElementById("table-choice-bg")
    var textColorLabel = document.getElementById("textColorLabel")
    var textColor = document.getElementById("table-choice-textColor")
    var linearLabel = document.getElementById("linearLabel")
    var linear = document.getElementById("table-choice-linear") 
    var headerTextLabel = document.getElementById("headerTextLabel")
    var headerColor = document.getElementById("table-choice-header")
    var headerColorLabel = document.getElementById("headerColor")
    var headerColorActual = document.getElementById("table-choice-headerColor")
    headerTextLabel.style = "display:visible;"
    headerColor.style = "display:none;"
    headerColorLabel.style ="display: visible"
    headerColorActual.style = "display: visible"
    var textContentLabel = document.getElementById("textContentLabel")
    var textContent = document.getElementById("table-choice-textContent")
    var textContentLabelL = document.getElementById("textContentLabelL")
    var textContentL = document.getElementById("table-choice-textContentL")
    var textContentLabelR = document.getElementById("textContentLabelR")
    var textContentR = document.getElementById("table-choice-textContentR")
    var headerText = document.getElementById("table-choice-text");
    var submitCustom = document.getElementById("submitCustom");
    var headerSystem = document.getElementById("headerSystem")
    var textSystem = document.getElementById("table-choice-system")
    var headerLabel = document.getElementById("headerLabel")
    var footerText = document.getElementById("table-choice-footer");
    var submitCustomFooter = document.getElementById("submitCustomFooter");
    var footerSystem = document.getElementById("footerSystem")
    var footerTextSystem = document.getElementById("table-choice-footer-system")
    var footerLabel = document.getElementById("footerLabel")

    footerLabel.style="display:visible"
    footerSystem.style="display:visible"
    footerTextSystem.style="display:visible"
    footerText.style = 'display:visible'
    submitCustomFooter.style = "display:visible"

    headerLabel.style="display:none"
    headerSystem.style="display:visible"
    textSystem.style="display:visible"
    headerText.style = 'display:visible'
    submitCustom.style = "display:visible"
    textContentLabel.style= "display:visible"
    textContent.style= "display:visible"
    textContentLabelL.style= "display:none"
    textContentL.style= "display:none"
    textContentLabelR.style= "display:none"
    textContentR.style= "display:none"
    textColorLabel.style= "display:visible"
    textColor.style = "display:visible"
    linearLabel.style = "display:none"
    linear.style = "display:none"
    bgColorLabel.style = "display:none"
    bgColor.style = "display:none"
    cellLabel.style = "display:none"
    cells.style = "display:none"
    rowLabel.style="display:none"
    columnLabel.style="display:none"
    rows.style="display:none"
    columns.style = "display:none"
  }
}
//clears the form and makes the submit button visible again
function clearAll(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
      
  }
 
  hideSubmit.style = "display:visible"
  var hideCustom = document.getElementById("submitCustom")
  hideCustom.style="display:visible"
  initial()
  
  let removeOptions = Array.from(document.getElementsByClassName("option"))
  removeOptions.forEach(element => {
    element.remove()
  }) 
  var hideCustomFooter = document.getElementById("submitCustomFooter")
  hideCustomFooter.style="display:visible"
  initial()
  
  let removeFooterOptions = Array.from(document.getElementsByClassName("footerOption"))
  removeFooterOptions.forEach(element => {
    element.remove()
  }) 
  form.reset()
}
//makes a lighter color of the background color selected for linear gradient
function LightenDarkenColor(col, amt) {
  
  var usePound = false;

  if (col[0] == "#") {
      col = col.slice(1);
      usePound = true;
  }

  var num = parseInt(col,16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);

}

//submitting the form
function handleSubmit(event) {
  event.preventDefault();
  var hideCustom = document.getElementById("submitCustom")
  hideCustom.style="display:none"
  var hideCustomFooter = document.getElementById("submitCustomFooter")
  hideCustomFooter.style="display:none"
  var templateChoice = event.target[0].value;
  if(templateChoice==="Email Notification" && event.target[14].value===""){
    alert("Enter a Header Value to Submit")
    var rows = document.getElementById("table-choice-rows")
    var columns = document.getElementById("table-choice-columns")
    var rowLabel = document.getElementById("rowLabel")
    var columnLabel = document.getElementById("colLabel")
    var cellLabel = document.getElementById("cellLabel")
    var cells = document.getElementById("table-choice-cells")
    var bgColorLabel = document.getElementById("bgColorLabel")
    var bgColor = document.getElementById("table-choice-bg")
    var textColorLabel = document.getElementById("textColorLabel")
    var textColor = document.getElementById("table-choice-textColor")
    var linearLabel = document.getElementById("linearLabel")
    var linear = document.getElementById("table-choice-linear") 
    var headerTextLabel = document.getElementById("headerTextLabel")
    var headerColor = document.getElementById("table-choice-header")
    var headerColorActual = document.getElementById("table-choice-headerColor")
    var headerColorLabel = document.getElementById("headerColor")
    headerColorActual.style = "display:visible"
    headerColorLabel.style="display:visible"
    headerTextLabel.style = "display:visible;"
    headerColor.style = "display:visible;"
    var textContentLabel = document.getElementById("textContentLabel")
    var textContent = document.getElementById("table-choice-textContent")
    var textContentLabelL = document.getElementById("textContentLabelL")
    var textContentL = document.getElementById("table-choice-textContentL")
    var textContentLabelR = document.getElementById("textContentLabelR")
    var textContentR = document.getElementById("table-choice-textContentR")
    var headerText = document.getElementById("table-choice-text");
    var submitCustom = document.getElementById("submitCustom");
    var headerSystem = document.getElementById("headerSystem")
    var textSystem = document.getElementById("table-choice-system")
    var footerText = document.getElementById("table-choice-footer");
    var submitCustomFooter = document.getElementById("submitCustomFooter");
    var footerSystem = document.getElementById("footerSystem")
    var footerTextSystem = document.getElementById("table-choice-footer-system")
    var footerLabel = document.getElementById("footerLabel")
    var headerLabel = document.getElementById("headerLabel")

    headerLabel.style="display:visible"
    headerSystem.style="display:visible"
    textSystem.style="display:visible"
    headerText.style = 'display:visible'
    submitCustom.style = "display:visible"

    footerLabel.style="display:visible"
    footerSystem.style="display:visible"
    footerTextSystem.style="display:visible"
    footerText.style = 'display:visible'
    submitCustomFooter.style = "display:visible"

    textContentLabel.style= "display:visible"
    textContent.style= "display:visible"
    textContentLabelL.style= "display:none"
    textContentL.style= "display:none"
    textContentLabelR.style= "display:none"
    textContentR.style= "display:none"
    textColorLabel.style= "display:visible"
    textColor.style = "display:visible"
    linearLabel.style = "display:none"
    linear.style = "display:none"
    bgColorLabel.style = "display:none"
    bgColor.style = "display:none"
    cellLabel.style = "display:none"
    cells.style = "display:none"
    rowLabel.style="display:none"
    columnLabel.style="display:none"
    rows.style="display:none"
    columns.style = "display:none"
    return;
  }
  
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
  switch (templateChoice) {
    case "Simple Table":
      let rn = event.target[2].value;
      let cn = event.target[1].value;
      let headerColor = event.target[3].value;
      let cellColor = event.target[4].value;
      let bgColor = event.target[5].value;
      let linGradColor = event.target[6].value;

      if(linGradColor === "Yes"){
        var lighterColor = LightenDarkenColor(bgColor,-50)
        console.log(lighterColor)
      }

      if((!rn || !cn ) || (isNaN(parseInt(rn)) || isNaN(parseInt(cn)))){
        alert("Enter numeric values for both fields")
        hideSubmit.style = "display:visible"
        return;
      }
      var tableDiv = document.getElementById("table-div")
      var x = document.createElement("table");
      tableDiv.appendChild(x)
      var headerThing = document.createElement("tr");
      while (cn > count) {
        count++;
        var headerActual = document.createElement("th");
        headerActual.style =
          `font-size: xx-large; color:${headerColor}; padding:5px 10px; border: 1px solid black;`
        arr.push(
          '<th style="font-size: xx-large; padding:5px 10px; border: 1px solid;">Column Header</th>'
        );
        for (let i = 0; i < arr.length; i++) {
          const element = arr[i];
          headerActual.innerHTML = element;
          headerThing.appendChild(headerActual);
        }
      }
      for (var r = 0; r < parseInt(rn, 10); r++) {
        x.style =
          `background: linear-gradient(to bottom, ${lighterColor},${bgColor}); background-color:${bgColor}; border-collapse: collapse; margin: auto; font-size: 0.9em; font-family: sans-serif; box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);`;
        var row = x.insertRow(r);
        for (var c = 0; c < parseInt(cn, 10); c++) {
          var y = row.insertCell(c);
          y.style =
            `color: ${cellColor}; padding: 5px 10px; border-top-width: 0; border-left-width: 0; border: 1px solid black;`;
          y.innerHTML = "Row-" + (r + 1) + " Column-" + (c + 1);
        }
      }
      x.prepend(headerThing);
      var clear = document.createElement("button")
      clear.setAttribute("id", "clear")
      clear.textContent = "Clear"
      var clearBtnDiv = document.getElementById("button")
      clearBtnDiv.appendChild(clear) 
      clear.addEventListener("click", function(){
        count = 0;
        clearAll(tableDiv)
        clearAll(clearBtnDiv)
        form.addEventListener("submit", handleSubmit );
      })
      var copyToClipBoard = document.createElement("button")
      clear.after(copyToClipBoard)
      copyToClipBoard.textContent = "Copy HTML to clipboard"
      copyToClipBoard.setAttribute("id", "copy")

      copyToClipBoard.onclick = async () => {
        await navigator.clipboard.writeText(x.outerHTML)

      }
      break;
    case "Email Notification":
      var emailNot = document.getElementById("emailNotification")
      emailNot.style = "display:visible; margin: 0 auto"
      var emailHeader = document.getElementById("emailHeader")
      var headerColorCopy = document.getElementById("headerCopyColor")
      var footerText= document.getElementById("footerText")
      var mainText = document.querySelector(".mainText")
      // var mainText2 = document.querySelector(".mainText2")
      // var mainText3 = document.querySelector(".mainText3")
      console.log(event.target[7].value)
      headerColorCopy.style = `background:${event.target[7].value};`
      emailHeader.style = `color:${event.target[8].value};`
      emailHeader.textContent = "Hello " + `${event.target[14].value}`+","
      footerText.textContent= `${event.target[17].value}`
      mainText.style = `color:${event.target[8].value}; line-height:30px;`
      // mainText2.style = `color:${event.target[7].value};`
      // mainText3.style = `color:${event.target[7].value};`
      mainText.textContent = `${event.target[9].value}`
      // mainText2.textContent = `${event.target[9].value}`
      // mainText3.textContent = `${event.target[10].value}`
      console.log(emailNot)
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
      break;
    case "Alert":
      break;
    default:
      alert("Please select a template option from the dropdown menu.");
      
  }
}





