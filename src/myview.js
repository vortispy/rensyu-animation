export class MyView{
	constructor(){
		this.getsByClass = document.getElementsByClassName;
	}

	activate(){
		var pagehost = document.getElementsByClassName('page-host')[0];
		pagehost.onscroll = this.scroll;
	}

	scroll() {
		var pagehost = document.getElementsByClassName('page-host')[0];
		var yvalue = document.getElementById("scroll");
		var container = document.getElementsByClassName("scrollcontainer")[0];
		var first = document.getElementsByClassName("first")[0];
		var second = document.getElementsByClassName("second")[0];
		var third = document.getElementsByClassName("third")[0];
		var fourth = document.getElementsByClassName("fourth")[0];
		var y = pagehost.scrollTop;
		yvalue.innerText = y;
		var children = container.children;
		for (var i = 0; i < children.length; i++) {
			children[i].classList.add("hide");
		}
		var h = 200;
		if (0 <= y && y <= h*1) {
			first.classList.remove("hide");
		} else if (h*1 < y && y <= h*2) {
			second.classList.remove("hide");
		} else if (h*2 < y && y <= h*3) {
			third.classList.remove("hide");
		} else if (h*3 < y && y <= h*4) {
			fourth.classList.remove("hide");
		}

	}

	hide_all() {
		var container = document.getElementsByClassName("scrollcontainer")[0];
		var children = container.children;
		for (var i = 0; i < children.length; i++) {
			children[i].classList.add("hide");
		}
	}
}

