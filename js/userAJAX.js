
function login(name,password){
    var req=new XMLHttpRequest();
    var link="http://localhost:8080/pomeapi/api/user?name="+name+"&password="+password;
    req.open("GET",link,true);
    req.send();
    req.onreadystatechange=function () {
        if(req.readyState==4&&this.status==200){

            if(req.responseText==="true"){//普通用户，非管理员
                setCookie("user",name);
                delCookie("admin")
                window.location.href="http://localhost:63342/i-html/pome_html/index.html";
            }else if(req.responseText==="admin"){//管理员
                setCookie("user",name);
                setCookie("admin","true");
                window.location.href="http://localhost:63342/i-html/pome_html/index.html";
            }else{//登陆失败
                alert("登陆失败请重试！！");
            }

        }
    }
}

function setUserInfoField() {
    var req=new XMLHttpRequest();
    var user=getCookie("user");
    var link="http://localhost:8080/pomeapi/api/user/info?name="+user;
    req.open("GET",link,true);
    req.send();
    req.onreadystatechange=function () {
        if(req.readyState==4&&this.status==200){
            var userInfo=req.responseText;

            var user =eval("("+userInfo+")");//把responseText转换为json对象的方法。
            //user：
            //private String name;
            // private String zhiye;
            // private String dizhi;
            // private int age;
            // private int numGuanzhu
            //private int NumWorks;

            document.getElementById("userName").textContent=user.name;
            document.getElementById("zhiye").textContent=user.zhiye;
            document.getElementById("dizhi").textContent=user.dizhi;
            document.getElementById("age").textContent=user.age;
            document.getElementById("guanzhushu").textContent=user.numGuanzhu;
            document.getElementById("MaxIndex").textContent=Math.ceil(user.numWorks/18);
        }
    }
}