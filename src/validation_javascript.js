// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
	
	window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
	var forms = document.getElementsByClassName('needs-validation');
	
	// Loop over them and prevent submission
	var element = document.getElementById('sbmbutton');

	
    Array.prototype.filter.call(forms, function(form) {
    	element.addEventListener('click', function(event) {
    		if (form.checkValidity() === false) {
    			event.preventDefault();
    			event.stopPropagation();
    		}
    		form.classList.add('was-validated');
    	}, false);
    });
}, false);
})();