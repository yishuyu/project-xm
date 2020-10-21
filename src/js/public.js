// 1导航栏搜索框的隐藏动画
// $('.two>ul>li a').on('mouseenter', function () {
// $('.two_hidden').stop().slideDown(300, 'linear');
// $('.all').on('mouseleave', function () {
// $('.two_hidden').stop().slideUp(300, 'linear')
// });
// })
// 1
console.log($('.two>ul>li a').eq(0).html());//小米手机列表
$('.two>ul>li a').eq(0).on('mouseenter', function () {
    $('.two_hidden').eq(0).children().children().empty();
    // console.log($('.two>ul>li').eq(i));
    $.ajax({
        url: "../interface/index-list.json",
        success: function (res) {
            var one = $('.two_hidden').eq(0).children().children();
            $.each($('.two_hidden').eq(0).children().children(), function (inde, result) {
                $.each(res, function (index, item) {
                    if (one.eq(inde).attr("num") == item.id) {
                        $(one.eq(inde)).append(`
                        <img src="${item.img}" alt="">
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                        `)
                    }

                })
            })
        },
        dataType: "json"
    })
})

// 2
$('.two>ul>li a').eq(1).on('mouseenter', function () {
    $('.two_hidden').eq(1).children().children().empty();
    // console.log($('.two>ul>li').eq(i));
    $.ajax({
        url: "../interface/index-list.json",
        success: function (res) {
            var one = $('.two_hidden').eq(1).children().children();
            $.each($('.two_hidden').eq(1).children().children(), function (inde, result) {
                $.each(res, function (index, item) {
                    if (one.eq(inde).attr("num") == item.id) {
                        $(one.eq(inde)).append(`
                        <img src="${item.img}" alt="">
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                        `)
                    }

                })
            })
        },
        dataType: "json"
    })
})
// 3
$('.two>ul>li a').eq(2).on('mouseenter', function () {
    $('.two_hidden').eq(2).children().children().empty();
    // console.log($('.two>ul>li').eq(i));
    $.ajax({
        url: "../interface/index-list.json",
        success: function (res) {
            var one = $('.two_hidden').eq(2).children().children();
            $.each($('.two_hidden').eq(2).children().children(), function (inde, result) {
                $.each(res, function (index, item) {
                    if (one.eq(inde).attr("num") == item.id) {
                        $(one.eq(inde)).append(`
                        <img src="${item.img}" alt="">
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                        `)
                    }

                })
            })
        },
        dataType: "json"
    })
})
// 4
$('.two>ul>li a').eq(3).on('mouseenter', function () {
    $('.two_hidden').eq(3).children().children().empty();
    // console.log($('.two>ul>li').eq(i));
    $.ajax({
        url: "../interface/index-list.json",
        success: function (res) {
            var one = $('.two_hidden').eq(3).children().children();
            $.each($('.two_hidden').eq(3).children().children(), function (inde, result) {
                $.each(res, function (index, item) {
                    if (one.eq(inde).attr("num") == item.id) {
                        $(one.eq(inde)).append(`
                        <img src="${item.img}" alt="">
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                        `)
                    }

                })
            })
        },
        dataType: "json"
    })
})
// 5
$('.two>ul>li a').eq(4).on('mouseenter', function () {
    $('.two_hidden').eq(4).children().children().empty();
    // console.log($('.two>ul>li').eq(i));
    $.ajax({
        url: "../interface/index-list.json",
        success: function (res) {
            var one = $('.two_hidden').eq(4).children().children();
            $.each($('.two_hidden').eq(4).children().children(), function (inde, result) {
                $.each(res, function (index, item) {
                    if (one.eq(inde).attr("num") == item.id) {
                        $(one.eq(inde)).append(`
                        <img src="${item.img}" alt="">
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                        `)
                    }

                })
            })
        },
        dataType: "json"
    })
})
// 5
$('.two>ul>li a').eq(5).on('mouseenter', function () {
    $('.two_hidden').eq(5).children().children().empty();
    // console.log($('.two>ul>li').eq(i));
    $.ajax({
        url: "../interface/index-list.json",
        success: function (res) {
            var one = $('.two_hidden').eq(5).children().children();
            $.each($('.two_hidden').eq(5).children().children(), function (inde, result) {
                $.each(res, function (index, item) {
                    if (one.eq(inde).attr("num") == item.id) {
                        $(one.eq(inde)).append(`
                        <img src="${item.img}" alt="">
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                        `)
                    }

                })
            })
        },
        dataType: "json"
    })
})
// 6
$('.two>ul>li a').eq(6).on('mouseenter', function () {
    $('.two_hidden').eq(6).children().children().empty();
    // console.log($('.two>ul>li').eq(i));
    $.ajax({
        url: "../interface/index-list.json",
        success: function (res) {
            var one = $('.two_hidden').eq(6).children().children();
            $.each($('.two_hidden').eq(6).children().children(), function (inde, result) {
                $.each(res, function (index, item) {
                    if (one.eq(inde).attr("num") == item.id) {
                        $(one.eq(inde)).append(`
                        <img src="${item.img}" alt="">
                        <p>${item.name}</p>
                        <p>${item.price}</p>
                        `)
                    }

                })
            })
        },
        dataType: "json"
    })
})
/*
for (var i = 0; i <= 6; i++) {
    $('.two>ul>li a').eq(i).on('mouseenter', function () {
        $('.two_hidden').eq(i).children().children().empty();
        // console.log($('.two>ul>li').eq(i));
        $.ajax({
            url: "../interface/index-list.json",
            success: function (res) {
                var one = $('.two_hidden').eq(i).children().children();
                $.each($('.two_hidden').eq(i).children().children(), function (inde, result) {
                    $.each(res, function (index, item) {
                        if (one.eq(inde).attr("num") == item.id) {
                            $(one.eq(inde)).append(`
                            <img src="${item.img}" alt="">
                            <p>${item.name}</p>
                            <p>${item.price}</p>
                            `)
                        }

                    })
                })
            },
            dataType: "json"
        })
    })
}
*/