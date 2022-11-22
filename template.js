let arr = [];
let arr2 = []

var form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
var userTemp = document.getElementById("userTemplate")


function handleSubmit(event) {
  event.preventDefault();
  var header = parseInt(event.target[1].value);
  var row = parseInt(event.target[2].value)
  let count = 0;
  let rowCount = 0;
  var userTemp = document.getElementById("userTemplate")
  var table1 = document.createElement("table")
  table1.style = 'border-collapse: collapse; margin: 0 auto; font-size: 0.9em; font-family: sans-serif; min-width: 400px; box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);'
  userTemp.appendChild(table1)
  var headerThing = document.createElement("tr")
  table1.appendChild(headerThing)
  while (header > count) {
    count++;
    var headerActual = document.createElement("th")
    headerActual.style = "font-size: xx-large; padding:5px 10px; border: 1px solid;"
    arr.push(
      '<th style="font-size: xx-large; padding:5px 10px; border: 1px solid;">Column Header</th> '
    );
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      headerActual.innerHTML = element;
      headerThing.appendChild(headerActual)
       
  }
  }
  var afterHeadTr = document.createElement("tr")
  table1.appendChild(afterHeadTr)

  while (row > count) {
    var rowActual = document.createElement("td")
    rowActual.style = "padding: 5px 10px; border-top-width: 0; border-left-width: 0; border: 1px solid;"
    arr2.push(
      '<td style="padding: 5px 10px; border-top-width: 0; border-left-width: 0; border: 1px solid;">Row 1</td> '
    );
    for (let j = 0; j < arr2.length; j++) {
      const elementRow = arr2[j];
      rowActual.innerHTML = elementRow;
      afterHeadTr.appendChild(rowActual)
      console.log(afterHeadTr)
  }
    }
  }
  // for (let i = 0; i < arr2.length; i++) {
  //   const element = arr2[i];
  //  rowActual.innerHTML = element
  //   otherTr.appendChild(rowActual)
  //   headerThing.appendChild(otherTr)
  // }
  
 

  // for (let i = 0; i < arr.length; i++) {
  //   const element = arr[i];
  //   headerActual.innerHTML = element
  //   headerThing.appendChild(headerActual)
  //   userTemp.appendChild(table1)
  // }

  // for (let i = 0; i < arr2.length; i++) {
  //   const element = arr2[i];
  //  rowActual.innerHTML = element
  //   otherTr.appendChild(rowActual)
  //   headerThing.appendChild(otherTr)
  // }
      

