$('#submit').click(function () {
    $.ajax({
        method: 'post',
        url: 'http://localhost:8080/project_xm/src/interface//register.php',
        data: {
            username: $('#un').val(),
            password: $('#pw').val()
        },
        success: function (data) {
            console.log(data);
            if (data.code == 1) {
                //表示成功,跳转到登陆页面
                alert('注册成功')
                location.href = "./login.html"
            } else {
                //表示失败
                alert(data.msg)
                console.log('失败');
            }
        },
        dataType: 'json'
    })
})