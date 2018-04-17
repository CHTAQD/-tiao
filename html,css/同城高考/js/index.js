var bigbox=document.querySelector('.bigbox');
var h=document.documentElement.clientHeight;
var inner=document.querySelectorAll('.inner');
var bth=document.querySelectorAll('.bth')
var num=0;
var flag=true;
for(var i=0;i<inner.length;i++){
	inner[i].style.height=h+'px';
	bigbox.style.height=inner.length*h+'px';
} 
mousewheel(bigbox,function(){
if(flag){
	flag=false;
	num--;
	if(num<=0){
		num=0;
	}


animate(bigbox,{marginTop:-h*num},1000,function(){
	flag=true;
})
}
},function(){
	if(flag){
	flag=false;
	num++;
	if(num>inner.length-1){
		num=inner.length-1;
	}


animate(bigbox,{marginTop:-h*num},1000,function(){
	flag=true;
})
}
})

for(var j=0;j<bth.length;j++){
	bth[j].index=j;
	
	bth[j].onclick=function(){
		num=this.index;
		for(var k=0;k<bth.length;k++){
			bth[k].style.backgroundColor='#8481FF';
		}
		animate(bigbox,{marginTop:-h*num},1000);
		bth[num].style.backgroundColor='#8E2CCB';
	}
}


























