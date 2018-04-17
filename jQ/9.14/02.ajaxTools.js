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

/*��װajax���ߺ���*/
/*
* ����һЩ��ȷ���ĵ�
* ȷ���Ĳ���    ����      Ĭ��      ��������ֵ
* 1.����ʽ    �ַ���    get       get,post
* 2.�����ַ    �ַ���    ��ǰ��ַ   ��̨�������ĵ�ַ���ӿڵ�ַ��
* 3.�Ƿ��첽    ����      true      true  false
* 4.��������    ����      {}        {name:'Echo',age:10}
*
* 5.�ɹ��ص�    ����      -  ��Ӧ�ɹ���ʱ��Ҫ��������  ��������������
* 6.ʧ�ܻص�    ����      -  ��Ӧʧ�ܵ�ʱ��Ҫ��������  ��������������
*
* */

/*
* 1.��������ԭ��ajax
* 2.���ajax��װԭ��
* */



/*ȫ�ֱ���*/
window.$ = {};
//$.ajax()
//$:{ajax:function(){}}
//$.ajax()
//var hahaha={name:"Echo",sayHi:function(){console.log("hello,my name is Echo!")}}
//hahaha.sayHi()
/*�����ȫ�ֱ�������һ��ajax����  ָ�����һ������*/



/*options  ��һ��������6�������Ķ���*/
/*var options = {
 type:'����ʽ',
 url:'�����ַ',
 async:'�Ƿ��첽',
 data:'��������',
 success:'�ɹ��ص�����',
 error:'ʧ�ܻص�����'
 }*/
$.ajax = function(options){
    /*ʵ�ַ�װ*/
    /*���û�д�options���ߴ��˲���һ������  ��ֹ����ִ��*/
    if(!options || typeof options != 'object' ){
        return false;
    }
//�жϴ����ʵ���ǲ��Ƕ���,������Ƕ����û�д���ֱ�ӽ���ִ��
//    if(!options||typeof options!="object"){
//
//    }

    /*������Ĭ�ϴ���*/
    //Ĭ������ʽ��get
    //��Ԫ���ʽ��xxxxxx==xxx  ?  xxxx  :  xxxxx
    $.ajax({
        type:'post/get',
        url:'',
        async:true,
    })
    var type = options.type != 'post' ? 'get' : 'post';
    //URL��ַΪ�û�����ĵ�ַ������û�û�����룬��ʹ�õ�ǰҳ�����·��
    var url = options.url || location.pathname;/*��ǰҳ��ľ���·��*/
    //�����첽���ԣ�Ĭ��Ϊ�첽  var async=options.async===false?false:true;
    //����û������ʵ�ζ����ﶨ����async���ԣ�
    // ����ֵΪfalse����ô���Ǿ���asyncΪfalse��
    // ����û���async��ֵ��ֵΪtrue���߾�û�д���async���ԣ�
    // ��ô���Ǿ�Ĭ��async����Ϊtrue
    var async = options.async === false ? false : true;
    //����ǰ�����̨��������ݣ����ǰ�����̨���������ݣ���ô���ô�������Ϊǰ����������ݣ�����Ĭ�ϴ���ն���
    var data = options.data || {};
    /*���������紫�䣿{name:'xm',age:10} ===>  name=xm&age=18*/
    //{name:'xm',age:10} ===> +?    "name=xm&age=10"
    /*��ʽ����xhr�ܷ��͵�����*/
    //���û��������ı�Ҫ���ݶ�����ı�Ҫ�����ó���
    // ƴ�ӳ�һ������Ҫ���ʽ���ַ���

    //data:{}
    var dataString="";
    for(key in data){
        //��ʽ��key1=value1&key2=value2&key3=value3
        dataString=dataString+key+"="+data[key]+"&";

        //dataString += key+'='+data[key]+'&';
        dataString.slice(1,-1);
    }
    //[1,2,3,4,6,7]
    //sex
    //var a={name:"Echo",age:19,sex:"girl"}
    ////key===>��
    //for(key in a){
    //
    //}
    //var dataStr = '';
    ////for in ���������ݶ����м�ֵ�Եļ��������б����ġ�
    //for(key in data){
    //    dataStr += key+'='+data[key]+'&';
    //}
    ///*��һ��&����  Ҫȥ��*/
    //dataStr = dataStr && dataStr.slice(0,-1);
    /*if(dataStr){
        dataStr.slice(0,1)
    }*/

    /*����ǰ�ص�����*/
    if(options.beforeSend){
        var flag = options.beforeSend();
        if(flag === false){
            /*��ʱ����谭��ajax����*/
            return false;
        }
    }

    /*ajax���*/
    var xhr = new XMLHttpRequest();
    /*������*/
    xhr.open(type,type=='get'?url+'?'+dataStr:url,async);
    /*����ͷ*/
    if(type == 'post'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    }
    /*�������� ����*/
    xhr.send(type=='post'?dataStr:null);

    /*��Ӧ*/
    xhr.onreadystatechange = function(){
        /*ͨѶ���*/
        if(xhr.readyState == 4){
            /*�ɹ�*/
            if(xhr.status == 200){
                /*�õ����� ת����ʽ*/
                /*��̨��ȷ�����ظ�ǰ�˵����ݸ�ʽ*/
                /*��Ҫ���ݺ�̨��Ӧ��������ȷ�����ݸ�ʽ*/
                var contentType = xhr.getResponseHeader('Content-Type');
                /*�淶��д��   application/xml */
                /*�淶��д��   application/json */
                var result;
                if(contentType.indexOf('xml') > -1){
                    /*����xml*/
                    result = xhr.responseXML;
                }else if(contentType.indexOf('json') > -1){
                    /*����json*/
                    result = JSON.parse(xhr.responseText);
                }else{
                    result = xhr.responseText;
                }
                /*ȥ���óɹ��ص�����*/
                options.success && options.success(result);
            }
            /*ʧ��*/
            else{
                /*ȥ����ʧ�ܻص�����*/
                var message = {
                    status:xhr.status,
                    statusText:xhr.statusText
                };
                options.error && options.error(message);
            }

            /*ͨѶ��ɻص�����*/
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

