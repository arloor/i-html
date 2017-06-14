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

function addStockNewsListener() {
    var stockNewsItem=document.getElementById("stock_news");
    stockNewsItem.onclick=function () {
        clearActived();
        //添加的话
        addActived(stockNewsItem);
        getNews();
        return false;
    }
}

function addActived(element) {
    var classval=element.getAttribute("class");
    classval = classval.concat(" active");
    element.setAttribute("class",classval );
}

function clearActived() {
    var nav_items=document.getElementsByClassName("nav_item");
    //清空active
    for(var i=0;i<nav_items.length;i++){
        var classval=nav_items[i].getAttribute("class");
        classval=classval.replace("active","");
        nav_items[i].setAttribute("class",classval);
    }
}

