function pay(){

		var form = document.payment;
		var numb = form.numb.value;
		var cvv = form.cvv.value;
		var date = form.date.value;
		var regex = new RegExp("^[0-9]{16}$");
		var regg = new RegExp("^[0-9]{3}$");
		var reg = new RegExp("^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$");
	 	if (!regex.test(numb))
			 	alert("invalid card number");

		else if(!regg.test(cvv)){
				alert("invalid cvv");
		}

		else if(!reg.test(date)){
				alert("invalid date");
		}
		else{
			alert("Tanks for your donation");
			window.location.href = "main.html"
		}
}
