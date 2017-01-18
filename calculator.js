//Javascript Document

// Change Display
function d(val) {
	document.getElementById("d").value = val;	
}

// Type numbers and operators
function v(val) {
	//document.getElementById("d").value += val;
	var x = document.getElementById("d").value; 
	var y = x + val; //dfgcx6
	document.getElementById("d").value = y;
}

// Evaluate the equation 
function e() {
	try {
		//d(eval(document.getElementById("d").value));
		var x = document.getElementById("d").value;
		var y = eval(x);
		d(y);
	} catch(err) {
		d("Error");
	}
}

// Square Root
function sqrt() {
	var f  = document.getElementById("d").value;
	var x = eval(f);
	var y = Math.sqrt(x);
	d(y);
}

// Squared
function sq() {
	var f  = document.getElementById("d").value;
	var x = eval(f);
	var y = x * x;
	d(y);
}
