let selectedSeatNo = 0;
let seatLeftCount = 40;
let totalTicketPrice = 0;
let grandTotal = 0;
let ticketLimit = 4;

function buttonClickHandler(event) {
  if (selectedSeatNo < ticketLimit) {
    console.log("btn-clicked");
    let text = this.innerText;

    const seatContainer = document.getElementById("seat-no");
    const p = document.createElement("p");
    p.innerText = text;
    seatContainer.appendChild(p);

    this.style.backgroundColor = "#1DD100";
    selectedSeatNo++;
    seatLeftCount--;
    totalTicketPrice += 550;
    grandTotal += 550;
   
    if (selectedSeatNo === 4) {
      const applyBtn = document.getElementById("apply-btn");
      applyBtn.removeAttribute("disabled");
    }

    const seatCount = document.getElementById("selectedSeat-no");
    seatCount.innerText = selectedSeatNo;
    const seatLeft = document.getElementById("seat-left");
    seatLeft.innerText = seatLeftCount;

    const totalPrice = document.getElementById("total-price");
    totalPrice.innerText = totalTicketPrice;

    // Remove the event listener after the button is clicked
    event.currentTarget.removeEventListener("click", buttonClickHandler);

    let selectedSeats = seatContainer.childNodes;
    let selectedSeatCount = [];
    for (let selectedSeat of selectedSeats) {
      selectedSeatCount.push(selectedSeat.innerText);
    }

    const grandTotalPrice = document.getElementById("grand-total");
    grandTotalPrice.innerText = grandTotal;
  } else {
    alert("you cannot buy more then 4 tickets");
  }
}

const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function () {
  let couponElement = document.getElementById("input-field").value;
  const couponCode = couponElement.split(" ").join("").toUpperCase();
  console.log(couponCode);
  const applyBtnContainer =document.getElementById('apply-btn-container');
  if (couponCode === "NEW15") {
    if (selectedSeatNo === 4) {
      let discountPrice = totalTicketPrice * 0.15;
      grandTotal -= discountPrice;
      const discountContainer = document.getElementById("discount-container");
      const p = document.createElement("p");
      p.innerText = "discount Price :" + discountPrice + "Tk Only";
      discountContainer.appendChild(p);
      applyBtnContainer.classList.add('hidden')
    } else {
      alert("You have to purchase 4 tickets to get the discount");
      applyBtnContainer.classList.add('hidden')
    }
  } else if (couponCode === "COUPLE20") {
    let discountPrice = totalTicketPrice * 0.2;
    grandTotal -= discountPrice;

    const discountContainer = document.getElementById("discount-container");
    const p = document.createElement("p");
    const p2 = document.createElement("p");
    p.innerText = "discount Price : " + discountPrice + " Tk Only";

    discountContainer.appendChild(p);
    applyBtnContainer.classList.add('hidden')
  } else {
    alert("Invalid couponCode");
    applyBtnContainer.classList.add('hidden')
  }

  const restTotal = document.getElementById("grand-total");
  restTotal.innerText = grandTotal;
  document.getElementById("input-field").value = "";
});

document.getElementById("btn-next").addEventListener("click", function () {
  const inputNum = document.getElementById("phone-number").value;
  if (selectedSeatNo !== 0 && inputNum.trim() !== "") {
    document.location = "#my_modal_8";
  } else {
    alert("Please Book a Seat");
  }
});

// Attach the event listener to each button
const buttons = document.querySelectorAll(".myButton");
buttons.forEach((button) => {
  button.addEventListener("click", buttonClickHandler);
});

function nextBTNAndEna() {
  const nextButton = document.getElementById("btn-next");
  const inputNum = document.getElementById("phone-number").value;
  if (selectedSeatNo > 0 && inputNum.trim() !== "") {
    nextButton.removeAttribute("disabled");
  } else {
    nextButton.setAttribute("disabled", "disabled");
  }
}

document
  .getElementById("phone-number")
  .addEventListener("input", nextBTNAndEna);
nextBTNAndEna();
