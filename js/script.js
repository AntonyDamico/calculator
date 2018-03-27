var button = document.querySelectorAll("#buttonNumbers td");
var mainDisplay = document.querySelector("#display");
var result = document.querySelector("#result");
var deleteOne = document.querySelector("#deleteOne");
var deleteAll = document.querySelector("#deleteAll");


for(var i = 0; i < button.length; i++){
	button[i].addEventListener("click", function(){
		if(this.textContent !== "=" && this.textContent !== "<-"){
			mainDisplay.textContent = mainDisplay.textContent + this.textContent;
		}

		if(this.textContent === "="){
			result.textContent = mainDisplay.textContent + " = " + calculate(mainDisplay.textContent);
		}
	})
}


deleteOne.addEventListener("click", function(){
	mainDisplay.textContent = mainDisplay.textContent.slice(0, -1);
})

deleteAll.addEventListener("click", function(){
	mainDisplay.textContent = "";
})








function calculate(str){
	var formatedArr = formatString(str);
	var result = operate(formatedArr);
	return result;
}


//Acepts a sting as a methods and returns an array with the numbers and operators separated
function formatString(str){
	var cont = 0;
	var arr = [""];

	for(var i = 0; i < str.length; i++){
		if(!isNaN(str[i]) || str[i] === "."){
			arr[cont] = arr[cont] + str[i];
		} else {
			arr.push(str[i]);
			arr.push("");
			cont += 2;
		}
	}
	return arr;
}


function operate(arr){
	var total = Number(arr[0]);
	var i = 1;
	while(i===1){
		switch(arr[i]){
			case "+":
				total = total + Number(arr[i + 1]);
				break;
			case "-":
				total = total - Number(arr[i + 1]);
				break;
			case "x":
				total = total * Number(arr[i + 1]);
				break;
			case "/":
				total = total / Number(arr[i + 1]);
			default:
				i = 0;
				break;
		}

		console.log(arr);
		arr[i + 1] = total;
		arr.shift();
		arr.shift();
		console.log(arr  + "------------------");
	}
	

	return total;
}