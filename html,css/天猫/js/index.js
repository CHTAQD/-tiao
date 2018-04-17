
var input1=document.getElementsByName('input1')


input1.onfoucs=function(){
    alert(1)
    if(input1.value=='原装进口全世界'){
        input1.value='';
    }
}
    input1.onblur=function(){
        if(input1.value==''){
            input1.value='原装进口全世界';
        }
    }




























