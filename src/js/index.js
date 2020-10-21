
//2小米秒杀按钮动画
var prebtn = $('#prebtn')[0];
var nextbtn = $('#nextbtn')[0];
var one = $('.sale .two .swiper-slide')[0];
var two = $('.sale .two .swiper-slide')[1];
var clear1 = $('.sale .two .swiper-slide')[3];
var clear2 = $('.sale .two .swiper-slide')[4];
var clear3 = $('.sale .two .swiper-slide')[5];
var box = $('swiper-wrapper')[0];
$(prebtn).on('click', function () {
    $(one).addClass('swiper-slide-active');
    $(two).addClass('swiper-slide-next');
    $(clear1).removeClass('swiper-slide-prev');
    $(clear2).removeClass('swiper-slide-active');
    $(clear3).removeClass('swiper-slide-next');
    $(box).attr('style', 'transform: translate3d(0px, 0px, 0px); transition-duration: 2000ms;');
})

$(nextbtn).on('click', function () {
})


//3秒杀倒计时

var startTime = new Date();
//设置结束时间 
startTime.setFullYear(2020, 9, 20);
startTime.setHours(22);
startTime.setMinutes(0);
startTime.setSeconds(59);
startTime.setMilliseconds(999);
var EndTime = startTime.getTime();
function GetRTime() {
    var NowTime = new Date();
    var nMS = EndTime - NowTime.getTime();
    var nH = Math.floor(nMS / (1000 * 60 * 60)) % 24;
    var nM = Math.floor(nMS / (1000 * 60)) % 60;
    var nS = Math.floor(nMS / 1000) % 60;
    if (nMS < 0) {
        $('#dao').hide();
        $("#daoend").show();
    } else {
        $("#dao").show();
        $("#daoend").hide();
        nH = nH < 10 ? "0" + nH : nH;
        $("#RemainH").text(nH);
        nM = nM < 10 ? "0" + nM : nM;
        $("#RemainM").text(nM);
        nS = nS < 10 ? "0" + nS : nS;
        $("#RemainS").text(nS);
    }
}

//定义方法
setInterval(function () {
    GetRTime();
}, 1000)


// 欢迎用户
// console.log($('.nav_right a:nth-child(1)'));
if (localStorage.getItem('un')) {
    $('.nav_right>a:nth-child(1)').html('欢迎你!' + localStorage.getItem('un'));
} else {
    $('.nav_right>a:nth-child(1)').html('欢迎你!请登录');
}

// ajax请求手机信息
$.ajax({
    url: "../interface/index-phone.json",
    async: false,
    success: function (res) {
        console.log('index.js')
        // console.log(res);
        // console.log(res[0].id);
        // console.log(res[1].img);
        // $('img').attr('src', res[1].img);
        $.each(res, function (index, item) {
            $('.phone_left').append(`
            <a href="./goods.html?id=${item.id}">
        <dl>
            <dt><img src="${item.img}" alt=""></dt>
            <dd>
            <p>${item.name}</p>
            <p>${item.desc}</p>
            <p><span>${item.price}</span></p>
            </dd>
        </dl>
        </a>
            `)
        })

    },
    dataType: 'json'
})






