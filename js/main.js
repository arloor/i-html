/**
 * Created by moontell on 2017/6/14.
 */



//定义增加页面加载完成的操作
function addOnLoad(func){
    var oldOnLoad=window.onload;
    if(typeof oldOnLoad!='function'){
        window.onload=func;
    }else{
        window.onload=function(){
            oldOnLoad();
            func();
        }
    }
}

