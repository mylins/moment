var close = document.querySelector(".close");
window.alert = function(){
	var bgDiv = document.createElement("div");
		bgDiv.style.position = "fixed";
		bgDiv.style.left = "0px";
		bgDiv.style.top = "0px";
		bgDiv.style.width = "100%";
	var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
		bgDiv.style.height = h+"px";
	try{
		bgDiv.style.background = "rgba(255,255,255,.8)";
	}catch(e){
		bgDiv.style.background = "#fff";
		bgDiv.style.filter = "alpha(opacity=50)";
	}
	bgDiv.style.zIndex = "299";
	document.body.appendChild(bgDiv);
	var div = document.querySelector(".login");
	div.style.display = "block";
	div.style.height = h+"px";
	close.style.display = "block";
	var li = document.querySelector(".loginUl").querySelectorAll("li");
	var show = document.querySelectorAll(".sh");
	for(let i = 0;i<li.length;i++){
		li[i].onmouseover = function(){
			for(var j = 0;j<li.length;j++){
				li[j].style.color = "#aaa";
				show[j].className = "sh";
			}
			li[i].style.color = "#000";
			show[i].className = "sh show";
		}
	}
	close.onclick = function(){
		bgDiv.style.display = "none";
		div.style.display = "none";
		close.style.display = "none";
	}
}




//var secImg = document.getElementsByClassName("ul1")[0].querySelectorAll("img"),
//	timer;
//var imgW,imgH;
//for(let i = 0;i<secImg.length;i++){
//	secImg[i].onmouseover = function(){
//		var img = new Image();
//		img.src = secImg[i].src;
//		img.onload = function(){
//			imgW = secImg[i].width;
//			imgH = secImg[i].height;
//			timer = window.setInterval(function(){
//				secImg[i].width += 10;
//				secImg[i].height += 10;
////				console.log(secImg[i].width);
//			},5)
//		}
//	}
//	secImg[i].onmouseout = function(){
//		secImg[i].width = imgW;
//		secImg[i].height = imgH;
//		clearInterval(timer);
//	}
//}

var btn7 = document.getElementById("btn7");
var timer=null;
btn7.onclick = function(){
	clearInterval(timer);
	timer=setInterval(function(){
		var oSt = document.documentElement.scrollTop || document.body.scrollTop;
		var speed=Math.floor(-oSt/6);
		
		if(document.body.scrollTop){
			document.body.scrollTop = oSt+speed;
		}else{
			document.documentElement.scrollTop = oSt+speed;
		}
		
		if (oSt==0) {
			clearInterval(timer);
		}
	},30);
}

var scrollPos;  
var aaa = document.getElementsByClassName("top")[0];
function getScrollTop() {  
        if (window.pageYOffset) {            //IE8及以下不支持
        scrollPos = window.pageYOffset; }  
        else if (document.compatMode && document.compatMode != 'BackCompat')  // != 'BackCompat' 即 = 'CSS1Compat'标准兼容模式开启
        { scrollPos = document.documentElement.scrollTop; }  
        else if (document.body) { scrollPos = document.body.scrollTop; }   //只IE支持
		if(scrollPos>100){
			aaa.style.display = "block";
		}else{
			aaa.style.display = "none";
		}
		
}  				
document.onmousemove = function(){
	getScrollTop();
}


