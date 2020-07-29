//흉둥이

cell.onclick = function(){
		d_textbox1.style.display = "block";
	}

next1.onclick = function(){
		d_textbox1.style.display = "none";
		doongmain.style.display = "block";
		start.style.display = "none";
	}

bigcell.onclick = function(){
		d_textbox2.style.display = "block";
	}

next2.onclick = function(){
		d_textbox2.style.display = "none";
	}

human1.onclick = function(){
		d_textbox3.style.display = "block";
	}

next3.onclick = function(){
		d_textbox3.style.display = "none";
		eyes.style.display = "block";
	}

human.onclick = function(){
		d_textbox4.style.display = "block";
	}

next4.onclick = function(){
		d_textbox4.style.display = "none";
	}

scull.onclick = function(){
		d_textbox5.style.display = "block";
	}
next5.onclick = function(){
		d_textbox5.style.display = "none";
	}



//스크롤 작용
window.onscroll = function(){
		var t =document.documentElement.scrollTop + document.body.scrollTop;
		moniter.innerHTML = t

		if (t > 3017) {d_textbox6.style.display = "block";}
		else{d_textbox6.style.display = ""}
	}

