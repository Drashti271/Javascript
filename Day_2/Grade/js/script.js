// Grade

let avg = parseInt(prompt("Enter your avg: "));

avg >= 35
    ? avg >= 80
    ? console.log("A grade")
    : avg >= 60
        ? console.log("B grade")
        : avg >= 50
            ? console.log("C grade")
            : console.log("Pass Class")  
            
    :
        alert("Wrong Input or Fail.")