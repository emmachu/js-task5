$(document).ready(function() {
	var user = $(".user");
	var password = $(".password");
	var tips = $(".tips");
	
	$(".btn").click(function() {
		var username = user.val();
		var pwd = password.val();
		var formdata = new FormData();
		console.log(username);
		console.log(pwd);
		formdata.append("name", username);
		formdata.append("pwd", pwd);
		console.log(formdata);
		function loadXMLDoc() {
			var xmlhttp;
			if (window.XMLHttpRequest)
			{
				//  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
				xmlhttp = new XMLHttpRequest();
			}else {
				// IE6, IE5 浏览器执行代码
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			xmlhttp.open("POST","/carrots-admin-ajax/a/login",true);
			xmlhttp.send(formdata);
			xmlhttp.onreadystatechange=function() {
				if (username == " " && pwd == " ") {
					tips.html("账户密码不能为空。");
				}else if (username != "admin") {
					tips.html("无此用户。");
				}else if (xmlhttp.readyState==4 && xmlhttp.status==200) {

					var result = JSON.parse(xmlhttp.responseText);
					console.log(result.message);
					console.log(typeof result.message);
					if (result.message === "success") {
					// window.location.href = "http://dev.admin.carrots.ptteng.com/";
					}else {
						tips.html(result.message);
					}
			}
			
		};
		loadXMLDoc();
	});

});