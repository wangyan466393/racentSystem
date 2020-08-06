
$(function () {
    $(".leftMenus").on("click", "li", function (e) {  
        var sId = $(this).data("id");  //获取data-id的值
        window.location.hash = sId;  //设置锚点
        loadInner(sId);
    });
    $(".nav .select_menus").on("click", "li", function (e) {
        e.preventDefault()
        var sId = $(this).data("id");  //获取data-id的值
        window.location.hash = sId;  //设置锚点
        loadInner(sId);  
    });
    //订单详情
    $(".right_content").on("click", "#order_dataLists a", function (e) {
        e.preventDefault();
        console.log(e)
        var sId = $(this).data("id");  //获取data-id的值
        window.location.hash = sId;  //设置锚点
        loadInner(sId);
    });
    function loadInner(sId) {
        var sId = window.location.hash;
        var pathn, i;
        switch (sId) {
            case "#orderManagement": pathn = "orderManagement.html"; i = 0; break;
            case "#orderDetail": pathn = "orderDetail.html"; break;
            case "#subscriptionManagement": pathn = "subscriptionManagement.html"; break;
            case "#customerData": pathn = "customerData.html"; break;
            default: pathn = "orderManagement.html"; i = 0; break;
        }
        $(".right_content").load(pathn); //加载相对应的内容
        $(".leftMenus li").eq(i).addClass("active").siblings().removeClass("active"); //当前列表高亮
    }
    var sId = window.location.hash;
    loadInner(sId);

    //tab切换
    $('.right_content').on('click', '#tab li', function (e) {
        var i = $(this).index()
        e.preventDefault()
        $('#tab li').removeClass("active");
        $(".order_content").css('display', 'none');
        $("#content .order_content").eq(i).css('display', 'block');
        $(this).addClass("active");
    })
})




