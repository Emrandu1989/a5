

// let len = document.querySelectorAll(".myButton").length;
// console.log(len);

// let selectedSeatCount = []


/* for( let i = 0; i< len; i++){
    document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
        console.log('btn-clicked')
        let text = this.innerText;
         
        

        
        const seatContainer = document.getElementById('seat-no');
      
        const p = document.createElement('p');
        p.innerText = text;
        seatContainer.appendChild(p);

        this.style.backgroundColor = '#1DD100';
        // console.log(seatContainer.childNodes)
        let selectedSeats = seatContainer.childNodes;
         for(let selectedSeat of selectedSeats){
            selectedSeatCount.push(selectedSeat.innerText);
         }

        
       
         console.log(selectedSeatCount.length);
         if(selectedSeatCount.length > 14){
            alert("you cannot buy more then 4 ticket")
         }
            
         function buttonClickHandler() {
            // Event handling logic
            this.removeEventListener('click', buttonClickHandler);
        }
        
      
    })
}
 */

let selectedSeatNo = 0;
let seatLeftCount = 40;
let totalTicketPrice = 0;


function buttonClickHandler(event) {
    console.log('btn-clicked');
    let text = this.innerText;
    
    const seatContainer = document.getElementById('seat-no');
    const p = document.createElement('p');
    p.innerText = text;
    seatContainer.appendChild(p);

    this.style.backgroundColor = '#1DD100';
    selectedSeatNo++;
    seatLeftCount--; 
    totalTicketPrice += 500;
    // if(selectedSeatNo> 4){
    //      alert('You cannot buy more than 4 tickets.');
        

    // }
     
    const seatCount = document.getElementById('selectedSeat-no');
    seatCount.innerText = selectedSeatNo;
    const seatLeft = document.getElementById('seat-left');
    seatLeft.innerText = seatLeftCount;

    const totalPrice = document.getElementById('total-price');
    totalPrice.innerText = totalTicketPrice;

    // Remove the event listener after the button is clicked
    event.currentTarget.removeEventListener('click', buttonClickHandler);

    let selectedSeats = seatContainer.childNodes;
    let selectedSeatCount = []; // Define selectedSeatCount array here
    for (let selectedSeat of selectedSeats) {
        selectedSeatCount.push(selectedSeat.innerText);
    }

    console.log(selectedSeatCount.length);
    // if (selectedSeatCount.length > 14) {
    //     alert("You cannot buy more than 4 tickets.");
    
    // }
}

// Attach the event listener to each button
const buttons = document.querySelectorAll('.myButton');
buttons.forEach(button => {
    button.addEventListener('click', buttonClickHandler);
});

// Function to disable all buttons
function disableAllButtons() {
    const buttons = document.querySelectorAll('.myButton');
    buttons.forEach(button => {
        button.disabled = true;
    });
}



