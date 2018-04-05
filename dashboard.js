
var ajaxUtil = function () {
	var payload = "";
	var url = "";
	var rs = "";
	var method = "";
	var message = "";
	var isSuccessful = false;

	this.init = function () {
		return this;
	};

	this.getMe = function () {
		var sendMeMessage = this.message;
		var sendMeUrl = this.url;

		$.ajax({
			url: sendMeUrl, type: 'get', contentType: "application/json; charset=utf-8", async: false, dataType: 'json',
			success: function (data, text) {
				rs = data;
				isSuccessful = true;
				console.log("INF: HTTP Get Success");
				console.log("Message " + sendMeMessage);
			}
			,
			error: function (request, status, error) {
				ajaxErrorHandler(request, status, error);
			}
		});
		return this;
};

var html;
function rowIt(box) {
	html="<div class=\"w3-row\">";
	html+="<div class=\"w3-col m1 w3-center w3-grey\">"+box+"</div>"
	html+="</div>"
}
	
function boxIt(cnt,color) {
	html="<div class=\"w3-container w3-cell-middle w3-"+color+" w3-cell w3-mobile\">";
  	html+="<p>"+cnt+"</p>"
	html+="</div>"
}
	

