// 封装ajax
/*
  *参数说明：
  *opts: {'可选参数'}
  **method: 请求方式:GET/POST,默认值:'POST';
  **url:    发送请求的地址, 默认值: 当前页地址;
  **data: string,json;
  **async: 是否异步:true/false,默认值:true;
  **cache: 是否缓存：true/false,默认值:true;
  **contentType: HTTP头信息，默认值：'application/x-www-form-urlencoded;charset=utf-8';
  **success: 请求成功后的回调函数;
  **error: 请求失败后的回调函数;
*/
function requestFuction(opts){
    //一.设置默认参数
    var defaults = {    
            method: 'POST',
               url: '',
              data: '',        
             async: true,
             cache: true,
       contentType:'application/x-www-form-urlencoded;charset=utf-8',
           success: function (){},
             error: function (){}
        };    

    //二.用户参数覆盖默认参数    
    for(var key in opts){
        defaults[key] = opts[key];
    }

    //三.对数据进行处理
    if(typeof defaults.data === 'object'){    //处理 data
        var str = '';
        var value = '';
        for(var key in defaults.data){
            value = defaults.data[key];
            if( defaults.data[key].indexOf('&') !== -1 ) value = defaults.data[key].replace(/&/g, escape('&'));   //对参数中有&进行兼容处理
            if( key.indexOf('&') !== -1 )  key = key.replace(/&/g, escape('&'));   //对参数中有&进行兼容处理
            str += key + '=' + value + '&';
        }
        defaults.data = str.substring(0, str.length - 1);
    }

    defaults.method = defaults.method.toUpperCase();    //处理 method

    defaults.cache = defaults.cache ? '' : '&' + new Date().getTime() ;//处理 cache

    if(defaults.method === 'GET' && (defaults.data || defaults.cache))    defaults.url += '?' + defaults.data + defaults.cache;    //处理 url    
    
    //四.开始编写ajax
    //1.创建ajax对象
    var oXhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    //2.和服务器建立联系，告诉服务器你要取什么文件
    oXhr.open(defaults.method, defaults.url, defaults.async);
    //3.发送请求
    if(defaults.method === 'GET')    
        oXhr.send(null);
    else{
        oXhr.setRequestHeader("Content-type", defaults.contentType);
        oXhr.send(defaults.data);
    }    
    //4.等待服务器回应
    oXhr.onreadystatechange = function (){
        if(oXhr.readyState === 4){
            if(oXhr.status === 200)
               defaults.success.call(oXhr, oXhr.responseText);
            else{
                defaults.error();
           }
        }
    };
}

//调用ajax函数
 
/*requestFuction({
 
    　　url: '1.php',
    
    　　data: {name: 'ivan', sex: 'male', age: '23'},
    
    　　success: function (data){ alert('返回数据是：' + data); }

})  
*/ 