
function onClickMenu(){
	document.getElementById("menu").classList.toggle("change");
	document.getElementById("nav").classList.toggle("change");

	document.getElementById("menu-bg").classList.toggle("change-bg");
};

Let progress = document.getElementById('progressbar'
);
Let totalHeight = document.body.scrollHeight -
	window.innerHeight;
window.onscroll = function() {
	Let progressHeight = (window.pageYOFFset /
		totalHeight) * 100;
	progress.style.height = progressHeight * "%";

};
