document.querySelector(".btn1").addEventListener("click", function () {
	document.querySelector(".text01").innerHTML =
		"Text01 has been changed with Event Listener";
});

$(".btn2").click(function () {
	$(".text02").text("Text02 has been changed	with jQuery code");
});
