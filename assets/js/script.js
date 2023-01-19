function validateForm (form) {
	
	if ((!form.op1.checked) && (!form.op2.checked) && (!form.op3.checked) && (!form.op4.checked)) {
		document.getElementsByClassName("errorMessageForm")[0].style.visibility = "visible";
		return false;
	} else {
		return true;
	}
}