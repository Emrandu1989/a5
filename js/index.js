

let len = document.querySelectorAll(".myButton").length;
console.log(len);



for( let i = 0; i< len; i++){
    document.querySelectorAll('.myButton')[i].addEventListener('click', function(){
        console.log('btn-clicked')
        let text = this.innerText;
         
        

        
        const seatContainer = document.getElementById('seat-no');
        const p = document.createElement('p');
        p.innerText = text;
        seatContainer.appendChild(p);

        this.style.backgroundColor = '#1DD100';

        
       
       

    })
}



function setBackgroundColorById(elementId){
    const element = document.querySelectorAll(elementId);
    element.classList.add("bg-green-400");

}
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-green-400');
}