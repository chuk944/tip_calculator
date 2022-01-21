

const myFunction = (temp) =>  {
  let total = temp;  
  let ticketAmount = document.getElementById("ticket-amount").value;
  console.log(ticketAmount);
  console.log(total);
}


document.getElementById("ticket-amount").addEventListener("mouseout", function() {myFunction(30);
});

document.getElementById("five").addEventListener("click", function() {myFunction(5);
});

document.getElementById("ten").addEventListener("click", function() {myFunction(10);
});

document.getElementById("fifteen").addEventListener("click", function() {myFunction(15);
});

document.getElementById("twentyfive").addEventListener("click", function() {myFunction(25);
});

document.getElementById("fifty").addEventListener("click", function() {myFunction(50);
});