// JavaScript code
function search_item() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('item-title');
    let c = document.getElementsByClassName('card');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			c[i].style.display="none";
			document.querySelector('.single-item').style.display = "none"
		}
		else {
			c[i].style.display="list-item";	
			document.querySelector('.single-item').style.display = "none"		
		}
	}

	if(c[0].style.display=="none" && c[1].style.display=="none" && c[2].style.display=="none" && c[3].style.display=="none") {
		document.getElementById('no-data').style.display = "flex"
	}
	else {
		document.getElementById('no-data').style.display = "none"
	}
}