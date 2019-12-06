const navigation = document.getElementById("sticky-navigation");
const big_text = document.getElementById("big-text");
const header_1 = document.getElementById("header-1");
const sub_1 = document.getElementById("sub-1");
const header_2 = document.getElementById("header-2");
const header_3 = document.getElementById("header-3");
const sub_3 = document.getElementById("sub-3");
window.onload = () => {
	big_text.style.marginLeft = "150px";
}
setInterval(() => {
	let data = navigation.getBoundingClientRect(); 
	if(data.top == 0) navigation.style.backgroundColor = "rgba(81, 81, 81, 0.51)";
	else navigation.style.background = "transparent";
	data = header_1.getBoundingClientRect(); 
	
}, 1000/60);