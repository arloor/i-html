function getNews(){
    var req=new XMLHttpRequest();
    var link="http://nju.io:8080/i/api/stock_news";
    req.open("GET",link,true);
    req.send();
    req.onreadystatechange=function () {
        if(req.readyState==4&&this.status==200){
            //document.getElementById("content").innerHTML=req.responseText;

            var content=document.getElementById("content");
            content.innerHTML="";
            var json= eval(req.responseText);
            for(var i=0;i<json.length;i++){
                content.innerHTML+="<h2>"+json[i].title+"</h2>";
                content.innerHTML+="<h6>"+json[i].time+"</h6>";
                content.innerHTML+=json[i].article;
                content.innerHTML+="<br/><br/><br/>";
            }

        }
    }
}

function getPocoPhoto(){
    var req=new XMLHttpRequest();
    var link="http://nju.io:8080/i/api/poco_img";
    req.open("GET",link,true);
    req.send();
    req.onreadystatechange=function () {
        if(req.readyState==4&&this.status==200){
            //document.getElementById("content").innerHTML=req.responseText;

            var content=document.getElementById("content");
            content.innerHTML="";

            var classval=content.getAttribute("class");
            classval=classval.replace("col-md-10","col-md-8");
            classval=classval.replace("col-md-offset-1","col-md-offset-2");
            content.setAttribute("class",classval );

            var json= eval(req.responseText);
            for(var i=0;i<json.length;i++){

                content.innerHTML+="<div class=\"col-xs-12 col-md-6\"><a href=\""+json[i].link+"\">"+"<img class=\"img-responsive\" alt=\" \" src=\""+json[i].imgSrc+"\"/></a></div>";
                //content.innerHTML+="<img class=\"img-responsive\" alt=\" \" src=\""+json[i].imgSrc+"\"/></a>";
            }

        }
    }
}