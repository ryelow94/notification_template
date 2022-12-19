let arr = [];
let arr2 = [];

var form = document.getElementById("form");
form.addEventListener("submit", handleSubmit );
var userTemp = document.getElementById("userTemplate");

let count = 0; 

function handleChange(event){
  if(event.target.value !== "Simple Table") {
    var rows = document.getElementById("table-choice-rows")
    var columns = document.getElementById("table-choice-columns")
    var rowLabel = document.getElementById("rowLabel")
    var columnLabel = document.getElementById("colLabel")
    var cellLabel = document.getElementById("cellLabel")
    var cells = document.getElementById("table-choice-cells")
    cellLabel.style = "display:none"
    cells.style = "display:none"
    rowLabel.style="display:none"
    columnLabel.style="display:none"
    rows.style="display:none"
    columns.style = "display:none"
  } else {
    var rows = document.getElementById("table-choice-rows")
    var columns = document.getElementById("table-choice-columns")
    var rowLabel = document.getElementById("rowLabel")
    var columnLabel = document.getElementById("colLabel")
    var cellLabel = document.getElementById("cellLabel")
    var cells = document.getElementById("table-choice-cells")
    cellLabel.style = "display:visible"
    cells.style = "display:visible"
    rowLabel.style="display:visible"
    columnLabel.style="display:visible"
    rows.style="display:visible"
    columns.style = "display:visible"
  }
}

function clearAll(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
      
  }
}

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
function handleSubmit(event) {
  event.preventDefault();
  form.removeEventListener("submit", handleSubmit)
  var templateChoice = event.target[0].value;
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

      if((!rn || !cn || !headerColor) || (isNaN(parseInt(rn)) || isNaN(parseInt(cn)))){
        alert("Enter numeric values for both fields")
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
    case "Simple Email Notification":
      var emailNot = document.getElementById("emailNotification")
      emailNot.style = "display:visible; margin: auto"
      var emailHeader = document.getElementById("emailHeader")
      var mainText = document.querySelector(".mainText")
      var mainText2 = document.querySelector(".mainText2")
      var mainText3 = document.querySelector(".mainText3")
      emailHeader.style = `color:${event.target[3].value};`
      mainText.style = `color:${event.target[7].value};`
      mainText2.style = `color:${event.target[7].value};`
      mainText3.style = `color:${event.target[7].value};`
      console.log(emailNot)
      break;
    case "Alert":
      break;
    default:
      alert("Please select a template option from the dropdown menu.");
  }
}





