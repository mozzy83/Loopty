//get the values from UI
function getValues(){

    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(startValue>endValue)alert("Start value must be smaller than end value");

    if(Number.isInteger(startValue) && Number.isInteger(endValue)){
        let numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);
    }
    else{alert("Please enter integers");}
}

//generate numbers from startValue to the endValue
    function generateNumbers(startValue, endValue){
        let numbers = [];
        for (let index = startValue; index <= endValue; index++) {            
            numbers.push(index);            
        }
        return numbers;
    }

//display numbers making evens bold
function displayNumbers(numbers){

    let templateRows = "";

    for (let index = 0; index < numbers.length; index++) {
        let className = "";
        let number = numbers[index];

        if(number % 2 == 0){className="even";}
        else{className="odd";}
        
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;

}