//get the values from the UI
//starts or controller function

function getValues(){
    //get values from the page
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //need to validate input
    //parse into Int
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if(startValue < endValue){
        if(Number.isInteger(startValue) && Number.isInteger(endValue)){
            //call generateNumbers
            let numbers = generateNumbers(startValue, endValue);
        
            //call displayNumbers
            displayNumbers(numbers);
            }
        else{
            alert("You must enter integers")
            }
    }
    else{
        alert("First value must be smaller than second value")
        }
}

//generate numbers from startValue to endValue
//logic function(s)
function generateNumbers(sValue, eValue){
    let numbers = [];
    //want to get all numbers from start to end
    for(let i = sValue; i <= eValue; i++){
        numbers.push(i);
    }

    return numbers;
}

//display the numbers marking the even ones bold
//display or view function
function displayNumbers(numbers){

    let templateRows = "";
    for(let i = 0; i < numbers.length; i++){

        let className = "even";

        let number = numbers[i];

        if(number % 2 == 0){
            className = "even";
        }
        else{
            className = "odd";

        }
        templateRows += `<tr><td class="${className}">${number}</td></tr>`;
    }

    document.getElementById("results").innerHTML = templateRows;


}