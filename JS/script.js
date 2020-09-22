function login () {
	var name = document.getElementById('email').value;

	var pass = document.getElementById('pwd').value;

	var checker = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

	var err1 = document.getElementById('error1');
	err1.innerHTML = "";

	var err2 = document.getElementById('error2');
	err2.innerHTML = "";

	var x;

	if(name == '') {
		err1.innerHTML = "Please enter email id";
	}
	else if(!checker.test(name)) {
		err1.innerHTML = "Enter valid email id";
	}
	else if(pass == '') {
		err2.innerHTML = "Enter password";
	}
	else if(pass.length < 6) {
		err2.innerHTML = "Password must have more than 5 letters";
	}
	else {
		var temp = document.getElementById('loader');
		temp.style.display = "block";

		y = setTimeout(Loader, 10000);

		function Loader () {
			temp.style.display = "none"; 
		}

		x = setTimeout(showLoader, 10020);

		function showLoader () {
			alert("Logged in Successfully!");
		}
	}
}