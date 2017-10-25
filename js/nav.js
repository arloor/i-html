function haslogin() {
    var label_username=document.getElementById("name");
    var label_my=document.getElementById("my");

    var username=getCookie("user");
    if(username!=null){//已经登陆
        label_username.textContent=username;
        label_username.href="my.html";
        label_my.href="my.html";
    }else{//未登录或者登出了
        label_username.textContent="注册";
        label_username.href="signup.html";
        label_my.href="login.html";
    }

}

function logout() {
    delCookie("user");
    delCookie("admin");
    //alert("退出登陆啦~");
    haslogin();
}

document.getElementById("logout").onclick=logout;

addOnLoad(haslogin)