
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
