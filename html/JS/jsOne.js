let btn = document.querySelector(".scroll-up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else if (window.scrollY <= 600) {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
let lis = document.querySelectorAll("ul li");
let exp = document.querySelector("body");

if (window.localStorage.getItem("color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  document
    .querySelector(`[data-color="${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
// start pop up ------------------------------------------- for reset cash
let resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", (e) => {
  // creat overLay(الديف الرئيسي اللي فيه جميع عناصر الصفحة)
  let overLay = document.createElement("div");
  overLay.className = "popup-overlay";
  document.body.appendChild(overLay);
  //   creat pop up(الديف الغرعي اللي فيه الهيد و الخ)
  let popupBox = document.createElement("div");
  popupBox.className = "popup-box";
  document.body.appendChild(popupBox);
  //   creat icon
  let iconConfirm = document.createElement("i");
  iconConfirm.className = "fa-solid fa-circle-exclamation fa-lg";
  popupBox.appendChild(iconConfirm);
  //   creat head h3 for  confirm
  let headConfirm = document.createElement("h3");
  let headText = document.createTextNode("Confirm");
  headConfirm.className = "head-confirm";
  headConfirm.appendChild(headText);
  popupBox.appendChild(headConfirm);
  //   creat p
  let paraConfirm = document.createElement("p");
  let paraText = document.createTextNode(
    "Are you sure want to reset the Page?"
  );
  paraConfirm.className = "para-confirm";
  paraConfirm.appendChild(paraText);
  popupBox.appendChild(paraConfirm);
  // creat div for  cancle and confirm  button
  let divParent = document.createElement("div");
  divParent.className = "div-pop-parent";
  // creat cancle  button (close the pop up)
  let cancleButton = document.createElement("button");
  let cancleText = document.createTextNode("Cancel");
  cancleButton.className = "cancle-button";
  cancleButton.appendChild(cancleText);
  divParent.appendChild(cancleButton);
  document.addEventListener("click", function (e) {
    cancleButton.onclick = function () {
      document.querySelector(".popup-overlay").remove();
      document.querySelector(".popup-box").remove();
    };
  });

  // creat confirm  button (confirm the pop up)
  let confButton = document.createElement("button");
  let confText = document.createTextNode("Yes, Reset!");
  confButton.className = "confirm-button";
  confButton.appendChild(confText);
  divParent.appendChild(confButton);
  popupBox.appendChild(divParent);
});
// end pop up ------------------------------------------- for reset cash
// start pop of cach calculaton
document
  .getElementById("completePaymentBtn")
  .addEventListener("click", function () {
    showPopup();
  });

function showPopup() {
  var popup = document.getElementById("popup-calaculaion");
  popup.style.display = "block";
}

function hidePopup() {
  var popup = document.getElementById("popup-calaculaion");
  popup.style.display = "none";
}

function appendToPaid(value) {
  var paidInput = document.getElementById("paidInput");
  var currentValue = paidInput.value;
  paidInput.value = currentValue + value;
}

function clearLastCharacter() {
  var paidInput = document.getElementById("paidInput");
  var currentValue = paidInput.value;
  paidInput.value = currentValue.slice(0, -1);
}
//  for return
document
  .getElementById("completePaymentBtnRe")
  .addEventListener("click", function () {
    showPopup();
  });

function showPopup() {
  var popup = document.getElementById("popup-calaculaion");
  popup.style.display = "block";
}

function hidePopup() {
  var popup = document.getElementById("popup-calaculaion");
  popup.style.display = "none";
}

function appendToPaid(value) {
  var paidInput = document.getElementById("paidInput");
  var currentValue = paidInput.value;
  paidInput.value = currentValue + value;
}

function clearLastCharacter() {
  var paidInput = document.getElementById("paidInput");
  var currentValue = paidInput.value;
  paidInput.value = currentValue.slice(0, -1);
}
// end pop up of calculation
// start pop up of hold
document.getElementById("holdOrderBtn").addEventListener("click", function () {
  var popupHoldOrder = document.getElementById("popupHoldOrder");
  popupHoldOrder.style.display = "block";
});

function hidePopupHold() {
  var popupHoldOrder = document.getElementById("popupHoldOrder");
  popupHoldOrder.style.display = "none";
}

// end pop up of hold
// start pop up of archive
document
  .getElementById("archiveOrderBtn")
  .addEventListener("click", function () {
    var popupAarchiveOrder = document.getElementById("popupAarchiveOrder");
    popupAarchiveOrder.style.display = "block";
  });

function hidePopupArchive() {
  var popupAarchiveOrder = document.getElementById("popupAarchiveOrder");
  popupAarchiveOrder.style.display = "none";
}

// end pop up of archive
// // start add new user
// // Function to display the modal when the "Add a User" button is clicked
// document.getElementById("addUserButton").addEventListener("click", function () {
//   document.getElementById("myModal").style.display = "block";
//   document.getElementById("closePopupButton").style.display = "block"; // Display the close button
// });

// // Function to close the modal when the close button is clicked
// document
//   .getElementById("closePopupButton")
//   .addEventListener("click", function () {
//     document.getElementById("myModal").style.display = "none";
//   });

// // Function to save the user information and close the modal
// document
//   .getElementById("saveUserButton")
//   .addEventListener("click", function () {
//     var customerName = document.getElementById("customerName").value;
//     var address = document.getElementById("address").value;
//     var phoneNumber = document.getElementById("phoneNumber").value;

//     // You can add further processing here, such as sending the data to a server

//     // For this example, just log the values to the console
//     console.log("Customer Name:", customerName);
//     console.log("Address:", address);
//     console.log("Phone Number:", phoneNumber);

//     // Close the modal
//     document.getElementById("myModal").style.display = "none";
//   });
document
  .getElementById("popupButtonCust")
  .addEventListener("click", function () {
    document.getElementById("popupCust").style.display = "block";
  });

document.getElementById("closeButton").addEventListener("click", function () {
  document.getElementById("popupCust").style.display = "none";
});

function openTab(evt, tabName) {
  var i, tabcontentCust, tablinks;
  tabcontentCust = document.getElementsByClassName("tabcontentCust");
  for (i = 0; i < tabcontentCust.length; i++) {
    tabcontentCust[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document
  .getElementById("customerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var customerName = document.getElementById("customerName").value;
    var phoneNumber = document.getElementById("phoneNumber").value;
    var address = document.getElementById("addressCust").value;
    addCustomerToTable(customerName, phoneNumber, address);
    document.getElementById("customerForm").reset();
  });

function addCustomerToTable(name, phone, address) {
  var table = document.getElementById("customerList");
  var newRow = table.insertRow();
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  cell1.innerHTML = name;
  cell2.innerHTML = phone;
  cell3.innerHTML = address;
  cell4.innerHTML = '<button onclick="deleteCustomer(this)">Delete</button>';
}

function deleteCustomer(row) {
  var i = row.parentNode.parentNode.rowIndex;
  document.getElementById("customerList").deleteRow(i);
}

// end add new user
