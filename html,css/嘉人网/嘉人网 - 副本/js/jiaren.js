var kuang=document.querySelector('.kuang');
var text=document.querySelector('.text');
var rightsou=document.querySelector('.rightsou');
var flag=true;
rightsou.onmouseenter=function(){
    if(flag){
        flag=false;
        animate(text,{display:'block'},500,function(){
            animate(text,{width:200},500);
            flag=true;
        })
    }
};
rightsou.onmouseleave=function(){
    if(flag){
        flag=false;
        animate(text,{width:0},500,function(){
            animate(text,{display:'none'},100);
            flag=true
        })
    }

};




//下拉列表
var inbox=document.querySelectorAll('.inbox');
var inbix=document.querySelectorAll('.inbix');
var bix=document.querySelector('.bix');
for(var i=0;i<inbox.length;i++){
    inbox[i].index=inbix[i].index=i;
    inbix[i].onmouseenter=inbox[i].onmouseenter=function(){
        for(var j=0;j<inbix.length;j++){
            inbix[j].style.zIndex=1;
        }
        bix.style.display='block';
        animate(bix,{height:290},500);
        inbix[this.index].style.zIndex=2;
    };
    inbix[i].onmouseleave=inbox[i].onmouseleave=function(){
        animate(bix,{height:0},500,function(){
            bix.style.display='none'
        })
    }
}


//轮播
var fwtwoa=document.querySelectorAll('.fwtwoa');
var incenter=document.querySelectorAll('.incenter');
var fwtwo=document.querySelector('.fwtwo');
var t=setInterval(move,1500);
num=0;
incenter[0].style.opacity=1;
function move(){
    num++;
    if(num>fwtwoa.length-1){
        num=0;
    }
    for(var i=0;i<fwtwoa.length;i++){
        animate(fwtwoa[i],{zIndex:1,opacity:0},1000)
    }
    animate(fwtwoa[num],{zIndex:2,opacity:1},1000,function(){
        nn()
    })
}
for(var f=0;f<incenter.length;f++) {
    incenter[f].index= f;
    incenter[f].onclick= function () {
        num=this.index;
        for(var l=0;l<fwtwoa.length;l++){
            animate(fwtwoa[l], {zIndex:1, opacity:0}, 1000);
        }
        animate(fwtwoa[this.index], {zIndex: 2, opacity: 1}, 1000);
        nn()
    }
}
function nn(){
    for ( var j=0;j<incenter.length;j++) {
        incenter[j].style.opacity=0.4;
    }
    incenter[num].style.opacity=1
}
fwtwo.onmouseenter=function(){
    clearTimeout(t)
};
fwtwo.onmouseleave=function(){
    t=setInterval(move,1500);
};


//选项卡
var list=document.querySelectorAll('.htleft li');
var twolis=document.querySelectorAll('.htright li');
for(var i=0;i<twolis.length;i++){
    twolis[i].index=i;
    twolis[i].onmouseenter=function(){
        for(var j=0;j<list.length;j++){
            list[j].style.display='none'
        }
        list[this.index].style.display='block'
    }
}


//节点轮播
var fwtop=document.querySelector('.fwtop');
//var fwtops=document.querySelectorAll('.fwtop li');
var q=setInterval(movea,3000);
function movea(){
    if(flag){
        flag=false;
        animate(fwtop,{marginLeft:-700},2000,function(){
            var first=getFirst(fwtop);
            appendObj(first,fwtop);
            fwtop.style.marginLeft=0;
            flag=true;
        });
    }
}
fwtop.onmouseenter=function(){
    clearInterval(q)
};
fwtop.onmouseleave=function(){
    q=setInterval(movea,1000);
};

//2、节点轮播
var fashiontwo=document.querySelector('.fashiontwo');
var colfashion=document.querySelector('.colfashion');
var m=setInterval(aa,1000);
function aa(){
    animate(fashiontwo,{marginLeft:-670},500,function(){
        var fir=getFirst(fashiontwo);
        appendObj(fir,fashiontwo);
        fashiontwo.style.marginLeft=0;
    });
}
colfashion.onmouseenter=function(){
    clearInterval(m)
};
colfashion.onmouseleave=function(){
    m=setInterval(aa,1000);
};

//3、节点轮播
var ul=document.querySelector('.itaslide ul');
var s=setInterval(san,1500);
var flag1=true;
function san(){
    if(flag1){
        flag1=false;
        animate(ul,{marginLeft:-310},1000,function(){
            var firs=getFirst(ul);
            appendObj(firs,ul);
            ul.style.marginLeft=0;
            flag1=true;
        });
    }
}
ul.onmouseenter=function(){
    clearInterval(s)
};
ul.onmouseleave=function(){
    s=setInterval(san,1000);
};

//4节点轮播
//var fashiontwo=document.querySelector('.fashiontwo');
var fashiontwoa=document.querySelector('.fashiontwoa');
var ma=setInterval(aaa,1000);
function aaa(){
    animate(fashiontwoa,{marginLeft:-670},500,function(){
        var fir=getFirst(fashiontwoa);
        appendObj(fir,fashiontwoa);
        fashiontwoa.style.marginLeft=0;
    });
}
fashiontwoa.onmouseenter=function(){
    clearInterval(ma)
};
fashiontwoa.onmouseleave=function(){
    ma=setInterval(aaa,1000);
};
//5节点轮播
//var fashiontwo=document.querySelector('.fashiontwo');
var fashiontwob=document.querySelector('.fashiontwob');
var mb=setInterval(aab,1000);
function aab(){
    animate(fashiontwob,{marginLeft:-670},500,function(){
        var fir=getFirst(fashiontwob);
        appendObj(fir,fashiontwob);
        fashiontwob.style.marginLeft=0;
    });
}
fashiontwob.onmouseenter=function(){
    clearInterval(mb)
};
fashiontwob.onmouseleave=function(){
    mb=setInterval(aab,1000);
};










