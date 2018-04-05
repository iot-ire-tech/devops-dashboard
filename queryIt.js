$(document).ready(function () {
	alert("hi")
});


$(document).on('click', '#userName', function () {
	  localStorage.setItem("username", $(this).val());
  
});
