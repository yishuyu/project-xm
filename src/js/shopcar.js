// 一打开购物车页面,展示购物车里面的商品
showTbody();
function showTbody() {
    $.ajax({
        url: 'http://localhost:8080/project_xm/src/interface/showlist.php',
        success: function (res) {
            console.log(res);
            if (res.code) {
                var arr = res.data;
                if (res.data) {
                    $('table').show();
                    $('.noshop').hide();
                    //在table里面展示商品信息
                    $('tbody').empty();
                    $.each(arr, function (index, item) {
                        $('tbody').append(`<tr id="${item.product_id}">
                        <td><input type="checkbox" name="" id="" class="inp"></td>
                        <td>
                            <img src="${item.product_img}" alt="" style="width: 80px;height: 80px;">
                        </td>
                        <td>${item.product_name}</td>
                        <td>${item.product_price}</td>
                        <td>
                            <span class='add'>+</span>
                            <span>${item.product_num}</span>
                            <span class="jian">-</span>
                        </td>
                        <td class="del">删除</td>
                    </tr>`)
                    })
                }
            } else {
                //如果没有商品
                $('table').hide();
                $('.noshop').show();
            }
        },
        dataType: 'json',
        cache: false
    })

}

// 点击+增加一个商品数量,点击-减少一个商品数量
$('tbody').click(function (e) {
    var target = e.target;
    if ((target.className == 'add') || (target.className == 'jian')) {
        // 点击+增加一个商品数量,点击-减少一个商品数量
        $.ajax({
            url: 'http://localhost:8080/project_xm/src/interface/updatewq.php',
            data: {
                type: target.className,
                id: $(target).parents('tr').attr('id')
            },
            success: function (res) {
                if (res.code) {
                    showTbody()
                }
            },
            dataType: 'json'
        })
    } else if (target.className == 'del') {
        // 点击删除按钮删除一个商品
        $.ajax({
            url: 'http://localhost:8080/project_xm/src/interface/delwq.php',
            data: {
                id: $(target).parents('tr').attr('id')
            },
            success: function (res) {
                if (res.code) {
                    console.log(confirm("确定要删除吗？"));
                    var num = confirm("确定要删除吗？");
                    if (num) {
                        showTbody();
                    }
                }
            },
            dataType: 'json'
        })
    }
})