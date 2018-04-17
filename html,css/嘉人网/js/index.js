window.onload=function(){
//节点轮波
var innerbox=document.querySelector('.innerbox');
setInterval(move,1500)
function move(){
	animate(innerbox,{marginLeft:-700},500,function(){
		 var i=getFirst(innerbox);
		 innerbox.appendChild(i);
		 innerbox.style.marginLeft=0;
	})
}

var input1=document.getElementById('input1');
var tijiao=document.querySelector('#tijiao');
var form1=document.querySelector('.form1')
var aa=document.querySelector('.aa');
var bb=document.querySelector('.bb')
var bob=document.querySelector('.bob');
var index=document.querySelectorAll('.index')

var inner=document.querySelectorAll('.inner');
	var btn=document.querySelectorAll('.btn');
	var img1=document.querySelectorAll('.btn img');
	var left=document.querySelector('.left');
	var right=document.querySelector('.right');
	var box=document.querySelector('.box');
var left1=document.querySelectorAll('.left1');
var img2=document.querySelectorAll('.bigright img')
var nav2=document.querySelector('.nav2')










// nav2
window.onscroll=function(){
var t=document.body.scrollTop||document.documentElement.scrollTop;

if(t>=70){
	nav2.style.position='fixed';
	nav2.style.top=0;
	nav2.style.left=0;
	nav2.style.zIndex=99;
}else{
	nav2.style.position='static';
}
}









for(var k=0;k<img2.length;k++){
	img2[k].index=k;
img2[k].onmouseenter=function(){
	for(var l=0;l<left1.length;l++){
		left1[l].style.zIndex=1;
	}
	left1[this.index].style.zIndex=2;
}
}












input1.onfocus=function(){
		if(input1.value=='请输入关键字'){
			this.value=''
		}
	}
input1.onblur=function(){
		if(input1.value==''){
			this.value='请输入关键字';
		}
	}

form1.onmouseover=function(){
	animate(input1,{display:'block'},20,function(){
		animate(input1,{width:200},500,function(){})
	})
	
	// input1.style.border=1+'px'+'solid'+'#ccc';

}
form1.onmouseout=function(){
	animate(input1,{width:0},500,function(){
		animate(input1,{display:'none'},20,function(){})
	})
	// input1.style.width=0;
	// input1.style.display='none';
}

img1[0].style.opacity=1;

	var flag=true;

	var num=0;

	var t=setInterval(move,2000)

	function move(){
		if(flag){
			flag=false;
		num++;
		if(num>inner.length-1){
			num=0
		}
		for(var i=0;i<inner.length;i++){
			animate(inner[i],{opacity:0,display:'none'},1000)
		
			img1[i].style.opacity=0.5;
		}
		animate(inner[num],{opacity:1,display:'block'},1000,function(){
			flag=true;
		})
		img1[num].style.opacity=1;
		}
	}


	for(var i=0;i<btn.length;i++){
		btn[i].index=i;
		btn[i].onclick=function(){
			
			num=this.index;
			for(var j=0;j<inner.length;j++){
				animate(inner[j],{opacity:0,display:'none'},1000);
				img1[j].style.opacity=0.5;
			}
			animate(inner[num],{opacity:1,display:'block'},1000)
			img1[num].style.opacity=1;
		}
	}



box.onmouseenter=function(){
	clearInterval(t)
}
box.onmouseleave=function(){
	t=setInterval(move,2000)
}


left.onclick=function(){
	if(flag){
		flag=false;
		num--;
		if(num<0){
			num=inner.length-1
		}
		for(var i=0;i<inner.length;i++){
			animate(inner[i],{opacity:0,display:'none'},1000)
	
			img1[i].style.opacity=0.5;
		} 
		animate(inner[num],{opacity:1,display:'block'},1000,function(){
			flag=true;
		})
		img1[num].style.opacity=1;
	}
}


right.onclick=function(){
	move()	
}




















}