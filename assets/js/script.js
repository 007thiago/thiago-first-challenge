// Validar o select da 3rd.html
function validateSelect (form) {
	var ddl = document.getElementById("select_account");
	var selected = ddl.options[ddl.selectedIndex].value;
	if (selected == "blank") {
		document.getElementsByClassName("errorMessageForm1")[0].style.visibility = "visible";
		document.getElementsByClassName("select3rd")[0].style.backgroundColor = "#AEAEAE";
		
		setTimeout(() => {
			document.getElementsByClassName("select3rd")[0].style.backgroundColor = "";
		}, 450);
		
		return false;
	} else {
		return true;
	}
}


// Validar o formulario da 4th.html
function validateForm (form) {
	var ddl = document.getElementById("select_account");
	var selected = ddl.options[ddl.selectedIndex].value;
	if (selected == "blank") {
		document.getElementsByClassName("errorMessageForm1")[0].style.visibility = "visible";
		document.getElementsByClassName("select3rd")[0].style.backgroundColor = "#AEAEAE";
		
		setTimeout(() => {
			document.getElementsByClassName("select3rd")[0].style.backgroundColor = "";
		}, 450);
		return false;
	} else {
		if ((!form.op1.checked) && (!form.op2.checked) && (!form.op3.checked) && (!form.op4.checked)) {
		document.getElementsByClassName("errorMessageForm2")[0].style.visibility = "visible";
		document.getElementsByClassName("errorMessageForm1")[0].style.visibility = "hidden";
		return false;
	} else {
		return true;
	}
	}
	
	
}


//Hover do botao da index
function hover() {
	
	event.target.style.backgroundColor = "#FFFF7D";
	event.target.innerHTML = "Just Go Ahead";
	event.target.style.color = "black";
}


//Mouse fora do elemento
function fora() {
		event.target.style.backgroundColor = "";
		event.target.innerHTML = "";
}

function successful () {
	alert ("Seu cadastro foi completo. Muito obrigado :D");
}