document.getElementById("tmenu").onclick = function(){

	if(document.getelementById("linkmenu").style.display === ""){

		document.getelementById("linkmenu").style.display = "initial";
		document.getelementById("test").textContent = "Hide Menu";
	}

	else if(document.getelementById("linkmenu").style.display === "none"){

		document.getelementById("linkmenu").style.display = "initial";
		document.getelementById("test").textContent = "Show Menu";

	else{
		document.getelementById("linkmenu").style.display = "none";
		document.getelementById("test").textContent = "Show Menu";
	}
}
document.getelementById("link1").onclick = function(){
	document.getelementById("linkmenu").style.display = "none";
	document.getelementById("test").textContent = "Show Menu";
}
document.getelementById("link2").onclick = function(){
	document.getelementById("linkmenu").style.display = "none";
	document.getelementById("test").textContent = "Show Menu";
}
document.getelementById("link3").onclick = function(){
	document.getelementById("linkmenu").style.display = "none";
	document.getelementById("test").textContent = "Show Menu";
}
document.getelementById("link4").onclick = function(){
	document.getelementById("linkmenu").style.display = "none";
	document.getelementById("test").textContent = "Show Menu";
}
