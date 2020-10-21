// 登录
$('#submit').click(function () {
    $.ajax({
        method: 'post',
        url: 'http://localhost:8080/project_xm/src/interface/login.php',
        // url:'./login.php',
        // http://localhost:8080/project_xm/src/interface/addwq.php
        data: {
            username: $('#un').val(),
            password: $('#pw').val()
        },
        success: function (data) {
            console.log(data);
            if (data.code == 1) {
                //表示成功
                //把用户名存入本地存储
                localStorage.setItem('un', data.data.username)
                //跳转到登陆页面
                location.href = "./index.html"
            } else {
                //表示失败
                alert(data.msg)
                console.log('失败');
            }
        },
        dataType: 'json'
    })
})