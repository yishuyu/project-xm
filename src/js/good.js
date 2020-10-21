// 鼠标点击选中
$('.wrap_main ul li:nth-child(4) .one a').on('click', function () {
    $('.wrap_main ul li:nth-child(4) .one a').removeClass('te');
    $(this).addClass('te');
})
$('.wrap_main ul li:nth-child(5) .two a').on('click', function () {
    $('.wrap_main ul li:nth-child(5) .two a').removeClass('te');
    $(this).addClass('te');
})
//要先index.js的ajax请求完毕后才能有如下。
// 书写函数跳转对应详情页
// console.log(location.search.split('=')[1]); //传过来的对应id值
$.ajax({
    url: "../interface/index-phone.json",
    success: function (res) {
        // console.log(res);
        $.each(res, function (index, item) {
            // console.log(item);
            // console.log(item.id);
            if (location.search.split('=')[1] == item.id) {
                $('.wrap').append(`
                <div class="main clearfix">
                <!-- 轮播图 -->
                <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                    <!-- Indicators -->
                    <ol class="carousel-indicators">
                        <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                        <li data-target="#carousel-example-generic" data-slide-to="3"></li>
                    </ol>
                    <!-- Wrapper for slides -->
                    <div class="carousel-inner" role="listbox">
                        <div class="item active">
                            <img src="${item.img1}" alt="">
                        </div>
                        <div class="item">
                            <img src="${item.img2}" alt="">
                        </div>
                        <div class="item">
                            <img src="${item.img3}" alt="">
                        </div>
                        <div class="item">
                            <img src="${item.img4}" alt="">
                        </div>
                    </div>
                    <!-- Controls -->
                    <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true">
                            <i class="iconfont">&#xe609;</i>
                        </span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true">
                            <i class="iconfont">&#xe62f;</i></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <!-- 右侧详细信息 -->
                <div class="wrap_main">
                    <ul>
                        <li>
                            <p index="1">${item.name}</p>
                        </li>
                        <li>
                            <p><span>「128GB版本10月20日上午10点开售，购机抽奖赢70英寸电视」</span>120Hz弹出全面屏 /
                                天玑1000+旗舰处理器 / 索尼6400万四摄 /
                                立体声双扬声器 /
                                ${item.desc}</p>
                        </li>
                        <li>
                            <span>小米自营</span>
                            <p>${item.price}</p>
                        </li>
                        <li class="clearfix">
                            <p>选择颜色</p>
                            <div class="one">
                                <a href="javascript:;" class="te">极夜黑</a>
                                <a href="javascript:;">月木白</a>
                                <a href="javascript:;">薄荷绿</a>
                            </div>
                        </li>
                        <li class="clearfix">
                            <p>选择版本</p>
                            <div class="two">
                                <a href="javascript:;" class="te">8GB+128GB</a>
                                <a href="javascript:;">6GB+128GB</a>
                                <a href="javascript:;">8GB+512GB</a>
                            </div>
                        </li>
                        <li>总计<span>${item.price}</span></li>
                        <li>
                            <a href="javascript:;">加入购物车</a>
                        </li>
                    </ul>
                </div>
            </div>
                `)
            }
        })
    },
    dataType: "json"
})

console.log('good.js')
//点击购物车,把商品加入数据库
// console.log($('.wrap_main ul li:nth-child(7) a').eq(0));
// console.log($('.wrap_main ul li:nth-child(1) p').html());
// console.log($('.wrap_main ul li:nth-child(6) span').html());
// console.log($('.wrap_main ul li:nth-child(1) p').attr('index'));

// 运用事件委托
$('.wrap').on('click', '.wrap_main ul li:nth-child(7) a', function () {
    console.log($(this)) // button 按钮
    console.log($('.carousel-inner .item img').attr('src'));
    console.log($('.wrap_main ul li:nth-child(1) p').html());
    console.log($('.wrap_main ul li:nth-child(6) span').html());
    $.ajax({
        url: 'http://localhost:8080/project_xm/src/interface/addwq.php',
        data: {
            id: location.search.split('=')[1],
            // img: '../images/goods/1.jpg',
            img: $('.carousel-inner img').attr('src'),
            name: $('.wrap_main ul li:nth-child(1) p').html(),
            price: $('.wrap_main ul li:nth-child(6) span').html(),
            num: '1'
        },
        success: function (res) {
            if (res.code) {
                location.href = "../pages/shopcar.html"
            }
            console.log(res);
        },
        dataType: 'json'
    })
})
