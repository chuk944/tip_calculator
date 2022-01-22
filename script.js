
// **********Main Object*******

let calculator = {
  ticketPrice: 0,
  tipPercent: 0,
  numPeople: 0,
  results: function(){    
    console.log(calculator.tipPercent);
    console.log(calculator.ticketPrice);
    console.log(calculator.numPeople);

    if (calculator.ticketPrice == 0 || calculator.tipPercent ==0)  {
      alert("Ticket Amount or Tip not selected.\n Please select both Ticket and Tip amount.");
    }

    let newTicket = this.ticketPrice;
    let tip = this.ticketPrice * this.tipPercent;
    let total = parseFloat(tip) + parseFloat(newTicket);

    document.getElementById("tipAmount").innerHTML = "$" + (tip  / this.numPeople).toFixed(2);

    document.getElementById("totalTip").innerHTML = "$" + (total / this.numPeople).toFixed(2);
   

  }
  
}; 

//********* Buttons************

document.getElementById("five").addEventListener("click", function() {tipFunction(5);
});

document.getElementById("ten").addEventListener("click", function() {tipFunction(10);
});

document.getElementById("fifteen").addEventListener("click", function() {tipFunction(15);
});

document.getElementById("twentyfive").addEventListener("click", function() {tipFunction(25);
});

document.getElementById("fifty").addEventListener("click", function() {tipFunction(50);
});

// custom input button

// number of people input

document.getElementById("guests").addEventListener("change", function() {
 notZero();
}); 
 
// ticket amount and tip percent sent to object

 function tipFunction(tip) {  

  let percent = tip;
  calculator.tipPercent = (percent / 100);

  calculator.ticketPrice = document.getElementById("ticket-amount").value;
  
  notZero();  

}

// Number of people if not zero sent to object 
const notZero = () => {
  let numberPeople = document.getElementById("guests").value;
  if (numberPeople == 0) {
    document.getElementById("guests").classList.add("number-people-active");
    document.getElementById("zero").classList.add("no-zero-active");
    
  }else {
    document.getElementById("guests").classList.remove("number-people-active");
    document.getElementById("zero").classList.remove("no-zero-active");
    calculator.numPeople = document.getElementById("guests").value;
    calculator.results();
  
  }
 }









