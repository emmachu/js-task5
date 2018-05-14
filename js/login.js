$(document).ready(function() {
	var user = $(".user");
	var password = $(".password");
	var tips = $(".tips");
	
	$(".btn").click(function() {
		var username = user.val();
		var pw = password.val();
		// var tip = tips.html();
		console.log(username);
		console.log(pw);

		if (username == false || pw == false) {
			tips.html("账户密码不能为空。");
		}else if (username == "admin" && pw == "123456") {
			sessionStorage.setItem("username", username);
			sessionStorage.setItem("pw", pw);
			// window.open("http://www.baidu.com");
			// window.location.href = "http://www.baidu.com";
			window.location.href = "http://dev.admin.carrots.ptteng.com/";
		}else {
			tips.html("账户或密码错误。");
		}
	})
});