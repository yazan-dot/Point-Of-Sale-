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
  let confText = document.createTextNode("Yes, Delete!");
  confButton.className = "confirm-button";
  confButton.appendChild(confText);
  divParent.appendChild(confButton);
  popupBox.appendChild(divParent);
});
// end pop up ------------------------------------------- for reset cash
document.addEventListener("DOMContentLoaded", function () {
  // Define the data source for suppliers
  const suppliersData = [
    {
      id: 1,
      supplierNo: "1102",
      companyName: "Dafaf Al-Nahrain Company",
      phoneNumber: "+96800022214456",
      email: "dafaf56@gmail.com",
    },
    {
      id: 2,
      supplierNo: "1103",
      companyName: "AL-Marai Company",
      phoneNumber: "+96800022255556",
      email: "almarai@gmail.com",
    },
    // Add more supplier data as needed
  ];

  // Function to generate table rows for suppliers
  function generateSupplierRows() {
    const tbody = document.querySelector("#suppliers-table tbody");
    tbody.innerHTML = "";

    suppliersData.forEach((supplier) => {
      const row = `
        <tr>
          <td>
            <div class="remember">
              <input class="appearance-none" type="checkbox" id="supp-${supplier.id}" />
              <label class="p-relative cursor-pointer" for="supp-${supplier.id}"></label>
            </div>
          </td>
          <td>${supplier.supplierNo}</td>
          <td>${supplier.companyName}</td>
          <td>${supplier.phoneNumber}</td>
          <td>${supplier.email}</td>
          <td class="txt-center"><i class="fa-regular fa-envelope fa-lg"></i></td>
        </tr>
      `;
      tbody.insertAdjacentHTML("beforeend", row);
    });
  }

  // Call the function to generate table rows
  generateSupplierRows();
});
//start  pop up msg out of stock
document
  .getElementById("popupButtonOos")
  .addEventListener("click", function () {
    document.getElementById("popupModalOos").style.display = "block";
  });

// Function to close the pop-up when the close button is clicked
document.getElementById("closePopupOos").addEventListener("click", function () {
  document.getElementById("popupModalOos").style.display = "none";
});
//end  pop up msg out of stock
