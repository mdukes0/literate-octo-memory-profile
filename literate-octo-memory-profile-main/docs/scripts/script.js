document.addEventListener("DOMContentLoaded", () => {
    console.log("document successfully loaded");
    // alert("hi");
  });

	document.getElementById('btnClicky').addEventListener('Click,') //unfinished


	const btnClicky = document.getElementById('btnClicky').style.transofrm='rotate(15deg)'; 
	btnClicky.addEventListener('click', () => { });

	function btnClicky() {
		console.log('in btnClicky event')
		document.getElementById('btnClicky').style.transform='rotate(15deg)'
		console.log('after rotation');
	}