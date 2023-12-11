// Code your solutions in this file

const names = [];
function writeCards(names, event){
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderfull ${event} gift!`);
        debugger;
      }
    
      return names;
}
writeCards(["Guadalupe", "Ollie", "Aki"], "surprise")

function countDown(startingNumber) {
  if (startingNumber <= 0 || !Number.isInteger(startingNumber)) {
    console.log("Please provide a positive integer.");
    return;
  }

  while (startingNumber >= 0) {
    console.log(startingNumber);
    startingNumber--;
  }
}

countDown(10);
