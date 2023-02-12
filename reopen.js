let arr = [];

var form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);
var customSubmitButton = document.getElementById("submitCustom");
customSubmitButton.addEventListener("click", customHeader);
var customSubmitActionButton = document.getElementById("submitCustomAction");
customSubmitActionButton.addEventListener("click", customActions);
var customFooterButton = document.getElementById("submitCustomFooter");
customFooterButton.addEventListener("click", customFooter);
var userTemp = document.getElementById("userTemplate");
var hideSubmit = document.getElementById("submit");
var initialForm = document.getElementById("template");
var textLineBreak = document.getElementById("table-choice-textContent");
var mainText = document.querySelector(".mainText");
var hideExample = document.querySelector("#hideExample");
hideExample.addEventListener("click", hide);
var unHideExample = document.querySelector("#unHideExample");
unHideExample.addEventListener("click", unHide);
var hideExample2 = document.querySelector("#hideExample2");
hideExample2.addEventListener("click", hide2);
var unHideExample2 = document.querySelector("#unHideExample2");
unHideExample2.addEventListener("click", unHide2);

function hide() {
  var example = document.getElementById("example");
  example.style = "display:none; ";
  hideExample.style = "display:none";
  unHideExample.style = "display:visible";
}
function hide2() {
    var example2 = document.getElementById("example2");
    example2.style = "display:none";
    hideExample2.style = "display:none";
    unHideExample2.style = "display:visible";
  }
function unHide() {
  var example = document.getElementById("example");
  example.style =
    "display: block; margin-left: auto; margin-right: auto; margin-top: 15px; ";
  hideExample.style = "display:visible";
  unHideExample.style = "display:none";
}
function unHide2() {
    var example2 = document.getElementById("example2");
    example2.style =
      "display: block; margin-left: auto; margin-right: auto; margin-top: 15px; ";
    hideExample2.style = "display:visible";
    unHideExample2.style = "display:none";
  }

document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);

function classToggle() {
  const navs = document.querySelectorAll(".Navbar__Items");

  navs.forEach((nav) => nav.classList.toggle("Navbar__ToggleShow"));
}

document
  .querySelector(".Navbar__Link-toggle")
  .addEventListener("click", classToggle);

let count = 0;

function customFooter() {
  var inputFooter = document.getElementById("table-choice-footer");

  if (inputFooter.value === "") {
    alert("Enter a custom footer to add to option list below");
    return;
  }

  var footerInputSelect = document.getElementById("table-choice-footer-system");
  var footerOption = document.createElement("option");
  footerOption.setAttribute("class", "footerOption");
  footerOption.value = inputFooter.value;
  footerOption.text = inputFooter.value;
  footerInputSelect.add(footerOption);
  var footerAdded = document.createElement("p");
  footerAdded.setAttribute("class", "footerAdded");
  footerAdded.textContent = "Added Custom Value";
  customFooterButton.after(footerAdded);
}

function customHeader() {
  var inputHeader = document.getElementById("table-choice-text");
  if (inputHeader.value === "") {
    alert("Enter a custom header to add to option list below");
    return;
  }

  var inputSelect = document.getElementById("table-choice-system");
  var option = document.createElement("option");
  option.setAttribute("class", "option");
  option.value = inputHeader.value;
  option.text = inputHeader.value;
  inputSelect.add(option);
  var added = document.createElement("p");
  added.setAttribute("class", "added");
  added.textContent = "Added Custom Value";
  customSubmitButton.after(added);
}
function removeAction(){
    console.log("remove called")
    let removedAction = Array.from(document.getElementsByClassName("actionItem"));
    let removedActionDisplay = Array.from(document.getElementsByClassName("addedAction"));
    if(removedAction.length===1){
        var removeRemove = document.getElementById("remove")
        removeRemove.remove()   
    }
    var removeThisToo = removedActionDisplay.shift()
    var removeThis = removedAction.shift()
    removeThis.remove()
    removeThisToo.remove();
  }
function customActions() {
  var inputVal = document.getElementById("table-choice-textContentL");
  if (inputVal.value === "") {
    alert("Enter an action");
    return;
  }

  var inputListItems = document.getElementById("textContentRight");
  var optionAdd = document.createElement("li");
  optionAdd.setAttribute("class", "actionItem");
  optionAdd.style = "font-size: 16px; padding-bottom:7.5px";
  optionAdd.textContent = inputVal.value;
  inputListItems.appendChild(optionAdd);
  var submitCustomButton = document.getElementById("submitCustomAction")
  var actionDiv = document.createElement("div")
  submitCustomButton.after(actionDiv)
  var addedAction = document.createElement("p");
  actionDiv.appendChild(addedAction)
  let actionDisplay = Array.from(document.getElementsByClassName("addedAction"));
  addedAction.setAttribute("class", "addedAction");
  addedAction.textContent = "Action Added: " + `${inputVal.value}`;
  
  if(!document.getElementById("remove")){
  var remove = document.createElement("div");
  remove.setAttribute("id", "remove")
  remove.textContent = "Remove Action";
  actionDiv.after(remove);
  remove.addEventListener("click", removeAction) 
  console.log("here")
  } 
  inputVal.value = "";  
}

//clears the form and makes the submit button visible again
function clearAll(parent) { 
    hide();
    hide2();
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  } 
  
  hideSubmit.style = "display:visible";
  var hideCustom = document.getElementById("submitCustom");
  hideCustom.style = "display:visible";

  let removeOptions = Array.from(document.getElementsByClassName("option"));
  removeOptions.forEach((element) => {
    element.remove();
  });
  var hideCustomFooter = document.getElementById("submitCustomFooter");
  hideCustomFooter.style = "display:visible";

  let removeFooterOptions = Array.from(
    document.getElementsByClassName("footerOption")
  );
  removeFooterOptions.forEach((element) => {
    element.remove();
  });
  let actionDisplay = Array.from(document.getElementsByClassName("addedAction"));
  while(actionDisplay.length>0){
    removeAction()
  }
  form.reset();
}

//submitting the form
function handleSubmit(event) {
  console.log(event);
  event.preventDefault();
  console.log("submitted");
  var hideCustom = document.getElementById("submitCustom");
  hideCustom.style = "display:none";
  var hideCustomFooter = document.getElementById("submitCustomFooter");
  hideCustomFooter.style = "display:none";

  let removeAdded = Array.from(document.getElementsByClassName("added"));
  console.log(removeAdded);
  removeAdded.forEach((element) => {
    element.remove();
  });
  hideSubmit.style = "display:none";
  let removeAddedFooter = Array.from(
    document.getElementsByClassName("footerAdded")
  );
  removeAddedFooter.forEach((element) => {
    element.remove();
  });
  form.removeEventListener("submit", function handleSubmit() {});

  var emailNot = document.getElementById("emailNotification");
  emailNot.style = "display:visible; margin: 0 auto";

  var emailHeader = document.getElementById("emailHeader");
  var headerBackground = document.getElementById("headerCopyColor")
  var footerText = document.getElementById("footerText");
 
  var logo = document.getElementById("logo");
  var mainText1 = document.getElementById("mainText1")
  var mainText2 = document.getElementById("mainText2")
  var mainText3 = document.getElementById("mainText3")
  var mainText4 = document.getElementById("mainText4")
  var mainText5 = document.getElementById("mainText5")

  if (event.target[0].value === "") {
    logo.setAttribute(
      "src",
      "https://images.g2crowd.com/uploads/optimized_product_banner/image/815/a94e25efd798e04b4bf6fed25cf304d1.png"
    );
  } else {
    logo.setAttribute("src", event.target[0].value);
  }
  headerBackground.style=`background:${event.target[1].value}`
//   emailHeader.style = `font-size:24px`;
  emailHeader.style= `color:${event.target[2].value}; font-size:24px;`
  emailHeader.textContent = "Hello " + `${event.target[10].value}` + ",";
  footerText.textContent = `${event.target[13].value}`;
  if(footerText.textContent === "Default"||footerText.textContent ==="None"){
   footerText.outerHTML = `<p id="footerText" style="margin: 0; font-size: 16px; line-height: 20px; font-family: Arial, sans-serif; color: #ffffff;"><strong>Vision:</strong> Deliver the world's smartest <strong>integrated</strong> platform that enables organizations to <strong>predict</strong> and <strong>mitigate</strong> risk.</p>`
  } else{
  footerText.textContent = `${event.target[13].value}`;
  }
  //   mainText.style = `color:${event.target[1].value};`
  //   mainText.textContent = `${event.target[3].value}`
  mainText1.style = `color:${event.target[2].value}; font-size:16px;`
  mainText2.style = `color:${event.target[2].value}; font-size:16px;`
  mainText3.style = `color:${event.target[2].value}; font-size:16px;`
  mainText4.style = `color:${event.target[2].value}; font-size:16px;`
  mainText5.style = `color:${event.target[2].value}; font-size:16px;`
  // mainText3.style = `color:${event.target[7].value};`
  // mainText2.textContent = `${event.target[9].value}`
  // mainText3.textContent = `${event.target[10].value}`

  var clear = document.createElement("button");
  clear.setAttribute("id", "clear");
  clear.textContent = "Clear";
  var clearBtnDiv = document.getElementById("button");
  clearBtnDiv.appendChild(clear);
  clear.addEventListener("click", function () {
    count = 0;
    emailNot.style = "display:none;";
    clearAll(clearBtnDiv);
    form.addEventListener("submit", function handleSubmit() {});
  });
  var copyToClipBoard = document.createElement("button");
  clear.after(copyToClipBoard);
  copyToClipBoard.textContent = "Copy HTML to clipboard";
  copyToClipBoard.setAttribute("id", "copy");

  copyToClipBoard.onclick = async () => {
    await navigator.clipboard.writeText(emailNot.outerHTML);
  };
}