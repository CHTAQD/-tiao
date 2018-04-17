/**
 * ITCAST WEB
 * Created by zhousg on 2017/4/15.
 */
/*��װajax���ߺ���*/
/*
* ����һЩ��ȷ���ĵ�
* ȷ���Ĳ���    ����      Ĭ��      ��������ֵ
* 1.����ʽ    �ַ���    get       get,post
* 2.�����ַ    �ַ���    ��ǰ��ַ   ��̨�������ĵ�ַ���ӿڵ�ַ��
* 3.�Ƿ��첽    ����      true      true  false
* 4.��������    ����      {}        {name:'xm',age:10}
*
* 5.�ɹ��ص�    ����      -         ��Ӧ�ɹ���ʱ��Ҫ��������  ��������������
* 6.ʧ�ܻص�    ����      -         ��Ӧʧ�ܵ�ʱ��Ҫ��������  ��������������
*
* */

/*
* 1.��������ԭ��ajax
* 2.���ajax��װԭ��
* */


    //$��һ��jquery�ﺭ�Ƿ�Χ����һ������ȫ�ֶ���
    //var a={name:"Echo"}     a.name   var $={ajax:function(){}}


})

/*ȫ�ֱ���*/
window.$ = {};
/*�����ȫ�ֱ�������һ��ajax����  ָ�����һ������*/
$.ajax = function(options){
    //�ж� �β�options�Ƿ���յ����û������ʵ��
    //������յ��ˣ���֤���û�������ʵ�ζ��󣬾Ϳ��Լ���ִ�к��������߼�
    //���û���ܵ�����֤���û�û�д���ʵ�Σ������û������ʵ�β��Ƕ������͵����� �Ϳ���ֱ�ӽ��������ִ��
    /*ʵ�ַ�װ*/

    /*options  ��һ��������6�������Ķ���*/
    /*var options = {
        type:'����ʽ',
        url:'�����ַ',
        async:'�Ƿ��첽',
        data:'��������',
        success:'�ɹ��ص�����',
        error:'ʧ�ܻص�����'
    }*/

    /*���û�д�options���ߴ��˲���һ������  ��ֹ����ִ��*/
    if(!options || typeof options != 'object' ){
        return false;
        //options���û���ܵ�ʵ�� ����ֵ��false ��options��ֵtrue
        //��ֱ�ӽ���ִ����
        //�û�������ʵ�� options ��ֵ��true !options��ֵ��false
        //�û���������ʵ�β��Ƕ������ͣ���ô�����ֵ����true
        //�ͻ����if�жϣ��ͽ���ִ��
    }




    //* 1.����ʽ    �ַ���    get       get,post
    //* 2.�����ַ    �ַ���    ��ǰ��ַ   ��̨�������ĵ�ַ���ӿڵ�ַ��
    //* 3.�Ƿ��첽    ����      true      true  false
    //* 4.��������    ����      {}        {name:'xm',age:10}

    /*������Ĭ�ϴ���*/
    var type = options.type != 'post' ? 'get' : 'post';//��Ԫ���ʽ

    var url = options.url || location.pathname;/*��ǰҳ��ľ���·��*/
    //��·����Ļ����㣬�����һ��ֵ��true����ȡ��һ��ֵ��
    // �����һ��ֵΪfalse����ȡ�ڶ���ֵ
    //��һ��ֵ���û������URL��ַ��

    // ��ô����û������ˣ�
    // ��һ��ֵ����true��ô��ȡ��һ��ֵ���û������URL��ַ��

    //����û�û������URL��ַ��
    // ��һ��ֵ����false��������Ҫȡ�ڶ���ֵ����ǰ��ַ��
    var async = options.async === false ? false : true;
    var data = options.data || {};


    //Ĭ�����󷽷���get����ôget������ǰ�����̨����ı�Ҫ����д��URL��ַ����
    //{name:"Echo",age:"19",sex:"girl"}
    //xxxx.php?name="Echo"&age="19"&sex="girl"



    /*���������紫�䣿{name:'xm',age:10} ===>  name=xm&age=18&*/
    /*��ʽ����xhr�ܷ��͵�����*/
    //����
    //
    var dataStr = '';
    for(key in data){
        dataStr += key+'='+data[key]+'&'
    }            //���� =   ��ֵ &
    /*��һ��&����  Ҫȥ��*/
    dataStr = dataStr && dataStr.slice(0,-1);
    /*if(dataStr){
        dataStr.slice(0,1)
    }*/


    //��������ǰ�Ļص�����
    //

    $.ajax({
        type:"",
        url:"",
        data:{},
        dataType:"",
        beforeSend:function(){
        }
    })
    /*����ǰ�ص�����*/
    //����û�������beforeSend������ԣ���ôoptions.beforeSendֵΪtrue
    //��֮��options.beforeSendֵΪfalse��
    if(options.beforeSend){
        options.beforeSend()
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
    //get��������Ҫ��������ͷ
    if(type == 'post'){
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    }

    /*�������� ����*/
    xhr.send(type=='post'?dataStr:null);

    /*��Ӧ*/
    xhr.onreadystatechange = function(){
        //������Ӧ״̬�루��Ӧ״̬��
        /*ͨѶ���*/
        //readyState��Ӧ״̬��  xhr.readyState��ʾxhr�������Ӧ״̬��
        if(xhr.readyState == 4){
            /*�ɹ�*/
            //status��Ӧ״ֵ̬ 200  304 403 404 500������
            if(xhr.status == 200){
                /*�õ����� ת����ʽ*/
                /*��̨��ȷ�����ظ�ǰ�˵����ݸ�ʽ*/
                /*��Ҫ���ݺ�̨��Ӧ��������ȷ�����ݸ�ʽ*/
                var contentType = xhr.getResponseHeader('Content-Type');
                /*�淶��д��   application/xml */
                /*�淶��д��   application/json */
                var result;//һ������£�result��ʾ��̨��Ӧ����������
                if(contentType.indexOf('xml') > -1){
                    /*����xml*/
                    result = xhr.responseXML;
                    //�ж����ǻ�ȡ����contentType�ǰ���ʲô�﷨��ʽ���н�����
                    //����ǰ���xml��ʽ���н����ģ���ô�Ͱѷ��ص�����ת����xml��ʽ������
                }
                else if(contentType.indexOf('json') > -1){
                    /*����json*/
                    //�����̨���ػ����������ǲ��ǰ���json��ʽ���н�����
                    //����ǣ��ͽ���if�����ж��
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
                    status:xhr.status,//xhr����Ӧ״ֵ̬
                    statusText:xhr.statusText//xhr����Ӧ״̬����
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

