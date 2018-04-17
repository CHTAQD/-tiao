/**
 * ITCAST WEB
 * Created by zhousg on 2017/4/15.
 */
/*封装ajax工具函数*/
/*
* 有哪一些不确定的点
* 确定的参数    类型      默认      参数具体值
* 1.请求方式    字符串    get       get,post
* 2.请求地址    字符串    当前地址   后台处理程序的地址（接口地址）
* 3.是否异步    布尔      true      true  false
* 4.发送数据    对象      {}        {name:'xm',age:10}
*
* 5.成功回调    函数      -         响应成功的时候要做的事情  （需求来决定）
* 6.失败回调    函数      -         响应失败的时候要做的事情  （需求来决定）
*
* */

/*
* 1.熟练掌握原生ajax
* 2.理解ajax封装原理
* */


    //$是一个jquery里涵盖范围最大的一个对象，全局对象
    //var a={name:"Echo"}     a.name   var $={ajax:function(){}}


})

/*全局变量*/
window.$ = {};
/*给这个全局变量定义一个ajax属性  指向的是一个方法*/
$.ajax = function(options){
    //判断 形参options是否接收到了用户传入的实参
    //如果接收到了，就证明用户传入了实参对象，就可以继续执行后续代码逻辑
    //如果没接受到，就证明用户没有传入实参，或者用户出入的实参不是对象类型的数据 就可以直接结束代码的执行
    /*实现封装*/

    /*options  是一个可能有6个参数的对象*/
    /*var options = {
        type:'请求方式',
        url:'请求地址',
        async:'是否异步',
        data:'发送数据',
        success:'成功回调函数',
        error:'失败回调函数'
    }*/

    /*如果没有传options或者传了不是一个对象  终止代码执行*/
    if(!options || typeof options != 'object' ){
        return false;
        //options如果没接受到实参 他的值是false ！options的值true
        //就直接结束执行了
        //用户出入了实参 options 的值是true !options的值是false
        //用户如果传入的实参不是对象类型，那么后面的值就是true
        //就会进入if判断，就结束执行
    }




    //* 1.请求方式    字符串    get       get,post
    //* 2.请求地址    字符串    当前地址   后台处理程序的地址（接口地址）
    //* 3.是否异步    布尔      true      true  false
    //* 4.发送数据    对象      {}        {name:'xm',age:10}

    /*参数的默认处理*/
    var type = options.type != 'post' ? 'get' : 'post';//三元表达式

    var url = options.url || location.pathname;/*当前页面的绝对路径*/
    //短路运算的或运算，如果第一个值是true，就取第一个值，
    // 如果第一个值为false，就取第二个值
    //第一个值是用户输入的URL地址，

    // 那么如果用户输入了，
    // 第一个值就是true那么就取第一个值（用户输入的URL地址）

    //如果用户没有输入URL地址，
    // 第一个值就是false，这样就要取第二个值（当前地址）
    var async = options.async === false ? false : true;
    var data = options.data || {};


    //默认请求方法是get，那么get方法中前端向后台传输的必要数据写在URL地址后面
    //{name:"Echo",age:"19",sex:"girl"}
    //xxxx.php?name="Echo"&age="19"&sex="girl"



    /*对象能网络传输？{name:'xm',age:10} ===>  name=xm&age=18&*/
    /*格式化成xhr能发送的数据*/
    //键名
    //
    var dataStr = '';
    for(key in data){
        dataStr += key+'='+data[key]+'&'
    }            //键名 =   键值 &
    /*多一个&符合  要去掉*/
    dataStr = dataStr && dataStr.slice(0,-1);
    /*if(dataStr){
        dataStr.slice(0,1)
    }*/


    //发送请求前的回调函数
    //

    $.ajax({
        type:"",
        url:"",
        data:{},
        dataType:"",
        beforeSend:function(){
        }
    })
    /*发送前回调函数*/
    //如果用户输入了beforeSend这个属性，那么options.beforeSend值为true
    //反之，options.beforeSend值为false。
    if(options.beforeSend){
        options.beforeSend()
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
    //get方法不需要设置请求头
    if(type == 'post'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    }

    /*请求主体 发送*/
    xhr.send(type=='post'?dataStr:null);

    /*响应*/
    xhr.onreadystatechange = function(){
        //监听响应状态码（响应状态）
        /*通讯完成*/
        //readyState响应状态码  xhr.readyState表示xhr对象的响应状态码
        if(xhr.readyState == 4){
            /*成功*/
            //status响应状态值 200  304 403 404 500及以上
            if(xhr.status == 200){
                /*拿到数据 转换格式*/
                /*后台能确定返回给前端的数据格式*/
                /*需要根据后台响应的类型来确定数据格式*/
                var contentType = xhr.getResponseHeader('Content-Type');
                /*规范的写法   application/xml */
                /*规范的写法   application/json */
                var result;//一般情况下，result表示后台响应回来的数据
                if(contentType.indexOf('xml') > -1){
                    /*返回xml*/
                    result = xhr.responseXML;
                    //判断我们获取到的contentType是按照什么语法格式进行解析的
                    //如果是按照xml格式进行解析的，那么就把返回的数据转换成xml格式的数据
                }
                else if(contentType.indexOf('json') > -1){
                    /*返回json*/
                    //这个后台返回回来的数据是不是按照json格式进行解析的
                    //如果是，就进入if条件判断里，
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
                    status:xhr.status,//xhr的响应状态值
                    statusText:xhr.statusText//xhr的响应状态内容
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

