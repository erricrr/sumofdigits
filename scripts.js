
let numInput = document.getElementById("userNum")
let usernumTimesNine = document.getElementById("numResult")

let sumDigits = document.getElementById("sumResult")

let treeBranch1 = document.getElementById("tree1")

let treeBranch3 = document.getElementById("tree3")
let treeBranch31 = document.getElementById("tree3-1")
let treeBranch4 = document.getElementById("tree4")

let inputBox = document.querySelector(".box")

const firstButton = document.getElementById("firstButton")
const sumButton = document.getElementById("sumButton")
const magicButton = document.querySelector(".magicButton")

const limitOneClick = document.getElementById("magicButton")
const resetBtn = document.getElementById("resetBtn")

let treeOutput = document.querySelector(".treeOutput")
const arrowSum = document.getElementById("arrowSum")


 //Function for when input box is active
inputBox.addEventListener("input", function() {
	if(getNum() < 10) {
		firstButton.disabled = true
	} else if (getNum() >= 10){
		firstButton.disabled = false
	} 

	treeBranch1.textContent = " "
	treeBranch3.textContent = " "
	treeBranch31.textContent = " "
	treeBranch4.textContent = " "
	arrowSum.innerHTML = " "
})

//DETECT WHEN USER IS TYPING IN INPUT

//Trigger Button Click on Enter
numInput.addEventListener("keypress", function(event) {
	if (event.key === "Enter") {
	  event.preventDefault();
	  firstButton.click();
	}

  });


function getNum() {
	userNumber = parseInt(numInput.value)
	return userNumber
}



//Summing digits variable: sumOneDigit
function sumOfDigits() {
	let getSum = getNum()
	let = treeResult1()
	let sumOneDigit = getSum % 9 || 9; // Casting out nines
	sumDigits.textContent = sumOneDigit

	//treeBranch1.textContent = treeResult1()

	return sumOneDigit
}



//To string for resuse variable: numArr
function numString() {
	let getSum = getNum()
	let numArr = getSum.toString().split("").map(Number)

	return numArr
} 


//Joinging array variable: treeFun
function treeResult1() {
	let numToString = numString()
	let joinArray = numToString.join(" + ") // .split vs .join ???

	return joinArray
}


let slicePart = []

function treeResult3(n) {
	
			let sum = n[0] + n[1]
			slicePart = n.slice(2, 100)
			 slicePart.unshift(sum)
			 result1 = slicePart.join(" + ")

		treeBranch31.innerHTML += result1 + "<br>"
		
		//console.log(slicePart)
		//console.log(typeof slicePart)

		if(slicePart[0] < 10) {
			treeSlice(slicePart)
		} else {
			treeSlice(slicePart)
			treeDigits(slicePart)
		}

		//console.log(slicePart)
		//console.log(typeof slicePart)

		
	
	}


function treeSlice(n) {
	while(n.length > 1) {
		let result2 = treeResult3(n)
		return result2
	}
		}

//WORK ON THIS!!! WORKS FOR 2, NOW What is there are 3 DIGITS! USE IF ELSE LOOP?
let lastDigits = []
//let lastDigits2 = []
//let lastDigits3 = []

function treeDigits(n) {
	lastDigits = n.toString().split("").map(Number)	
	let joinDigits2 = lastDigits.join(" + ")

	let sum2 = lastDigits[0] + lastDigits[1]//WHAT IF THIS RESULT IS 2 DIGITS??? WHAT If it needs to add three digits?

let sumString = []
sumString = sum2.toString().split("").map(Number)

let joinDigits3 = sumString.join(" + ")

if (lastDigits.length == 3) {
		
	let sum4 = lastDigits[0] + lastDigits[1] + lastDigits[2]
	
	return treeBranch4.innerHTML = joinDigits2 + "<br>" + joinDigits3 + " + " + lastDigits[2] + "<br>" + sum4
	
} else if (sumString.length == 2) {
		
		let sum3 = sumString[0] + sumString[1]
		
		return treeBranch4.innerHTML = joinDigits2 + "<br>" + sum2 + "<br>" + joinDigits3 + "<br>" + sum3
} else { 
		return treeBranch4.innerHTML = joinDigits2 + "<br>" + sum2
	}

}

//treeBranch4.innerHTML = treeResult3(joinDigits2)

function treeResult4() {
	
	arrowSum.innerHTML = "sum of all digits" + "<sup>&nearr;</sup>"

	treeBranch1.textContent = treeResult1()

	treeBranch3.textContent = treeResult1()
	let numArrResult = numString()
	treeResult3(numArrResult)
	

	firstButton.disabled = true; 
	//limitOneClick.disabled = true
}

function reset() {
	numInput.value = " "
	//usernumTimesNine.textContent = " "
	//sumDigits.textContent = " "
	//treeOutput.textContent = " "
	treeBranch1.textContent = " "
	treeBranch3.textContent = " "
	treeBranch31.textContent = " "
	treeBranch4.textContent = " "
	arrowSum.innerHTML = " "

	firstButton.disabled = true
/*	firstButton.disabled = true
	sumButton.disabled = true
	magicButton.disabled = true
	
	inputBox.disabled = false

	resetBtn.disabled = true
*/

	//limitOneClick.disabled = true
	//firstButton.disabled = true; 

}