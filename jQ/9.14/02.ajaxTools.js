/**
 * ITCAST WEB
 * Created by zhousg on 2017/4/15.
 */
//$.ajax({
//    type:'',
//    url:'',
//    data:{},
//    dataType:'',
//    beforeSend:function(){
//
//    },
//    success:function(){
//
//    },
//    complete:function(){
//
//    }
//})

/*封装ajax工具函数*/
/*
* 有哪一些不确定的点
* 确定的参数    类型      默认      参数具体值
* 1.请求方式    字符串    get       get,post
* 2.请求地址    字符串    当前地址   后台处理程序的地址（接口地址）
* 3.是否异步    布尔      true      true  false
* 4.发送数据    对象      {}        {name:'Echo',age:10}
*
* 5.成功回调    函数      -  响应成功的时候要做的事情  （需求来决定）
* 6.失败回调    函数      -  响应失败的时候要做的事情  （需求来决定）
*
* */

/*
* 1.熟练掌握原生ajax
* 2.理解ajax封装原理
* */



/*全局变量*/
window.$ = {};
//$.ajax()
//$:{ajax:function(){}}
//$.ajax()
//var hahaha={name:"Echo",sayHi:function(){console.log("hello,my name is Echo!")}}
//hahaha.sayHi()
/*给这个全局变量定义一个ajax属性  指向的是一个方法*/



/*options  是一个可能有6个参数的对象*/
/*var options = {
 type:'请求方式',
 url:'请求地址',
 async:'是否异步',
 data:'发送数据',
 success:'成功回调函数',
 error:'失败回调函数'
 }*/
$.ajax = function(options){
    /*实现封装*/
    /*如果没有传options或者传了不是一个对象  终止代码执行*/
    if(!options || typeof options != 'object' ){
        return false;
    }
//判断传入的实参是不是对象,如果不是对象或没有传，直接结束执行
//    if(!options||typeof options!="object"){
//
//    }

    /*参数的默认处理*/
    //默认请求方式是get
    //三元表达式：xxxxxx==xxx  ?  xxxx  :  xxxxx
    $.ajax({
        type:'post/get',
        url:'',
        async:true,
    })
    var type = options.type != 'post' ? 'get' : 'post';
    //URL地址为用户输入的地址，如果用户没有输入，就使用当前页面绝对路径
    var url = options.url || location.pathname;/*当前页面的绝对路径*/
    //设置异步属性，默认为异步  var async=options.async===false?false:true;
    //如果用户传入的实参对象里定义了async属性，
    // 属性值为false，那么我们就让async为false，
    // 如果用户将async的值赋值为true或者就没有传入async属性，
    // 那么我们就默认async属性为true
    var async = options.async === false ? false : true;
    //设置前端向后台传入的数据，如果前端向后台传入了数据，那么就让传入数据为前端输入的数据，否则默认传入空对象
    var data = options.data || {};
    /*对象能网络传输？{name:'xm',age:10} ===>  name=xm&age=18*/
    //{name:'xm',age:10} ===> +?    "name=xm&age=10"
    /*格式化成xhr能发送的数据*/
    //把用户传进来的必要数据对象里的必要数据拿出来
    // 拼接成一个符合要求格式的字符串

    //data:{}
    var dataString="";
    for(key in data){
        //格式：key1=value1&key2=value2&key3=value3
        dataString=dataString+key+"="+data[key]+"&";

        //dataString += key+'='+data[key]+'&';
        dataString.slice(1,-1);
    }
    //[1,2,3,4,6,7]
    //sex
    //var a={name:"Echo",age:19,sex:"girl"}
    ////key===>键
    //for(key in a){
    //
    //}
    //var dataStr = '';
    ////for in 遍历是依据对象中键值对的键名来进行遍历的。
    //for(key in data){
    //    dataStr += key+'='+data[key]+'&';
    //}
    ///*多一个&符合  要去掉*/
    //dataStr = dataStr && dataStr.slice(0,-1);
    /*if(dataStr){
        dataStr.slice(0,1)
    }*/

    /*发送前回调函数*/
    if(options.beforeSend){
        var flag = options.beforeSend();
        if(flag === false){
            /*这时候就阻碍了ajax发送*/
            return false;
        }
    }

    /*ajax编程*/
    var xhr = new XMLHttpRequest();
    /*请求行*/
    xhr.open(type,type=='get'?url+'?'+dataStr:url,async);
    /*请求头*/
    if(type == 'post'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    }
    /*请求主体 发送*/
    xhr.send(type=='post'?dataStr:null);

    /*响应*/
    xhr.onreadystatechange = function(){
        /*通讯完成*/
        if(xhr.readyState == 4){
            /*成功*/
            if(xhr.status == 200){
                /*拿到数据 转换格式*/
                /*后台能确定返回给前端的数据格式*/
                /*需要根据后台响应的类型来确定数据格式*/
                var contentType = xhr.getResponseHeader('Content-Type');
                /*规范的写法   application/xml */
                /*规范的写法   application/json */
                var result;
                if(contentType.indexOf('xml') > -1){
                    /*返回xml*/
                    result = xhr.responseXML;
                }else if(contentType.indexOf('json') > -1){
                    /*返回json*/
                    result = JSON.parse(xhr.responseText);
                }else{
                    result = xhr.responseText;
                }
                /*去调用成功回调函数*/
                options.success && options.success(result);
            }
            /*失败*/
            else{
                /*去调用失败回调函数*/
                var message = {
                    status:xhr.status,
                    statusText:xhr.statusText
                };
                options.error && options.error(message);
            }

            /*通讯完成回调函数*/
            options.complete && options.complete();

        }
    }
};

$.get = function(options){
    options.type = 'get';
    $.ajax(options);
}
$.post = function(options){
    options.type = 'post';
    $.ajax(options);
}

