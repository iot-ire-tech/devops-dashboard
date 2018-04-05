var urlRest="http://example.com/"

$(document).ready(function () {
	var endPointsArr=["/"];
	
	endPointsArr.forEach(function (ep) {

		url = urlRest + "/";
		var tmpObj = nw.setUrl(url).setMessage("Retrieving Status Information").getMe().getResult();
	//	nw.setUrl(url).setMethod("post").setPayload(dataIn).setMessage("Posting New Authentication").sendMe().getStatus()
		// Update cell status
		$(".status").html("Good");
		
	});
	
});


$(document).on('click', '#userName', function () {
	  localStorage.setItem("username", $(this).val());
  
});
