//阻止未登陆访问my.html
function hasLogin() {
    var username = getCookie("user");
    if (username == null) {//未登陆
        window.location.href = "login.html";
    }
}


//my.html界面的加载作品集
function loadWorks() {
    var req=new XMLHttpRequest();
    var user=getCookie("user");
    var index=document.getElementById("index").textContent;
    var link="http://localhost:8080/pomeapi/api/works/atAuthor?name="+user+"&index="+index;
    req.open("GET",link,true);
    req.send();
    req.onreadystatechange=function () {
        if(req.readyState==4&&this.status==200){
            var worksListText=req.responseText;

            var content=document.getElementById("content");
            content.innerHTML="";

            var worksList =eval("("+worksListText+")");//把responseText转换为json对象的方法。
            // [{"id":11,"title":"测试测试测试试","description":"这这这这怎么还是测试","fenlei":"3","author":"admin","time":"2017-10-27","num_zan":0},{"id":10,"title":"测试测试测试试","description":"这这这这怎么还是测试","fenlei":"3","author":"admin","time":"2017-10-27","num_zan":0},{"id":9,"title":"测试测试测试试","description":"这这这这怎么还是测试","fenlei":"3","author":"admin","time":"2017-10-27","num_zan":0},{"id":8,"title":"测试测试测试试","description":"这这这这怎么还是测试","fenlei":"3","author":"admin","time":"2017-10-27","num_zan":0},{"id":7,"title":"测试测试测试试","description":"这这这这怎么还是测试","fenlei":"3","author":"admin","time":"2017-10-27","num_zan":0},{"id":6,"title":"测试测试测试试","description":"这这这这怎么还是测试","fenlei":"3","author":"admin","time":"2017-10-27","num_zan":0},{"id":5,"title":"测试测试测试试","description":"这这这这怎么还是测试","fenlei":"3","author":"admin","time":"2017-10-27","num_zan":0},{"id":4,"title":"测试测试测试试","description":"这这这这怎么还是测试","fenlei":"3","author":"admin","time":"2017-10-27","num_zan":0},{"id":3,"title":"测试","description":"这还是测试座屏集","fenlei":"2","author":"admin","time":"2017-10-26","num_zan":0},{"id":2,"title":"测试","description":"这还是测试座屏集","fenlei":"2","author":"admin","time":"2017-10-26","num_zan":0},{"id":1,"title":"测试","description":"这是管理员上床的第一个座屏，仅作为测试使用略略略略","fenlei":"1","author":"admin","time":"2017-10-25","num_zan":1}]

            for(var i=0;i<worksList.length;i++){
                var id=worksList[i].id;
                var title=worksList[i].title;
                var description=worksList[i].description;
                var fenlei=worksList[i].fenlei;
                var author=worksList[i].author;
                var time=worksList[i].time;
                var num_zan=worksList[i].num_zan;

                var html="<div class=\"col-xs-4 col-md-2\">\n" +
                    "                            <a href=\"#\"><img class=\"img-responsive\" src=\"POMEimg/"+id+"/thumb/thumb.jpg\" href=\"#\" height=\" 180px\" width=\"180px\"></a>\n" +
                    "                            <h3 style=\"text-align: center\">"+title+"</h3>\n" +
                    "                        </div>";
                content.innerHTML+=html;
            }
        }
    }
}

//点击下一页的作品集加载工作
function clickNextWorks() {
    var index=document.getElementById("index").textContent;
    var MaxIndex=document.getElementById("MaxIndex").textContent
    if(index<MaxIndex){
        index++;
        document.getElementById("index").textContent=index;
        loadWorks();
    }else{
        alert("已经是最后一页");
    }
}
//添加下一页的监听
document.getElementById("nextWorksList").onclick=function () {
    clickNextWorks();
    return false;
};

//点击下一页的作品集加载工作
function clickPreWorks() {
    var index=document.getElementById("index").textContent;
    if(index>1){
        index--;
        document.getElementById("index").textContent=index;
        loadWorks();
    }else{
        alert("已经是第一页");
    }
}
//添加下一页的监听
document.getElementById("preWorksList").onclick=function () {
    clickPreWorks();
    return false;
};

addOnLoad(hasLogin);
addOnLoad(setUserInfoField(getCookie("user")));
addOnLoad(loadWorks());
