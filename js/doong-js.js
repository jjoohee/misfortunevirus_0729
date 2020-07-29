//흉둥이

cell.onclick = function(){
		d_textbox1.style.display = "block";
	}

next1.onclick = function(){
		d_textbox1.style.display = "none";
		doongmain.style.display = "block";
		start.style.display = "none";
	}

next2.onclick = function(){
		d_textbox2.style.display = "none";
	}

next3.onclick = function(){
		d_textbox3.style.display = "none";
		eyes.style.display = "block";
	}


next4.onclick = function(){
		d_textbox4.style.display = "none";
	}

next5.onclick = function(){
		d_textbox5.style.display = "none";
	}



//스크롤 작용
window.onscroll = function(){
		var t =document.documentElement.scrollTop + document.body.scrollTop;
		moniter.innerHTML = t

		if (t > 550) {d_textbox2.style.display = "block";}
		else{d_textbox2.style.display = ""}

		if (t > 1250) {d_textbox3.style.display = "block";}
		else{d_textbox3.style.display = ""}

		if (t > 1800) {d_textbox4.style.display = "block";}
		else{d_textbox4.style.display = ""}

		if (t > 2500) {d_textbox5.style.display = "block";}
		else{d_textbox5.style.display = ""}

		if (t > 3017) {d_textbox6.style.display = "block";}
		else{d_textbox6.style.display = ""}
	}

