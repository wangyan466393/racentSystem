$(function () {
    //常用工具-菜单
    $(".leftMenus").on("click", "li", function (e) {  
        var sId = $(this).data("id");  //获取data-id的值
        window.location.hash = sId;  //设置锚点
        loadInner(sId);
        $(".nav li[data-id='"+sId+"']").parent().parent().addClass('active').siblings().removeClass('active');
    });
     //导航
    $(".nav").on("click", "li", function (e) {
        e.preventDefault();
        e.stopPropagation();    //  阻止事件冒泡
        var sId = $(this).data("id");  //获取data-id的值
        window.location.hash = sId;  //设置锚点
        loadInner(sId); 
        $('li').removeClass('active'); 
        $(this).addClass('active');
        $(this).parent().parent().addClass('active');
        
    });
    //订单详情
    $(".right_content").on("click", "#order_dataLists a", function (e) {
        e.preventDefault();
        console.log(e)
        var sId = $(this).data("id");  //获取data-id的值
        window.location.hash = sId;  //设置锚点
        loadInner(sId);
    });
    //客户资料详情
    $(".right_content").on("click", "#customer_dataLists a", function (e) {
        e.preventDefault();
        var sId = $(this).data("id");  //获取data-id的值
        window.location.hash = sId;  //设置锚点
        loadInner(sId);
    });
    // 财务管理
    $(".right_content").on("click", ".finance_btn button", function (e) {
        e.preventDefault();
        console.log(e)
        var sId = $(this).data("id");  //获取data-id的值
        window.location.hash = sId;  //设置锚点
        loadInner(sId);
    });
    //新建邮件
    $(".right_content").on("click", ".email_btn", function (e) {
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
            //销售管理
            case "#orderManagement": pathn = "orderManagement.html"; i = 0; break;
            case "#orderDetail": pathn = "orderDetail.html"; break;
            case "#subscriptionManagement": pathn = "subscriptionManagement.html"; break;
            case "#customerListsData": pathn = "customerListsData.html"; break;
            case "#customerData": pathn = "customerData.html"; break;
            //客户支持
            case "#emailManagement": pathn = "emailManagement.html"; i=null;break;    //邮件管理
            case "#createEmail": pathn = "createEmail.html"; i=null;break;
            // 财务管理 - 发票管理
            case "#invoiceControl": pathn = "invoiceControl.html";i=3; break;
            case "#invoiceDetails": pathn = "invoiceDetails.html"; break;
            case "#invoiceInformation": pathn = "invoiceInformation.html"; break;
            case "#invoiceMailingInformation": pathn = "invoiceMailingInformation.html"; break;
            
            // 财务管理 - 流水记录
            case "#runningRecord": pathn = "runningRecord.html";i=2; break;
           //商品管理
           case "#commodityManagement": pathn = "commodityManagement.html";i=5; break;

           default: pathn = "orderManagement.html";  break;
        }
        $(".right_content").load(pathn); //加载相对应的内容
        $(".leftMenus li").eq(i).addClass("active").siblings().removeClass("active"); //当前列表高亮
    }
    var sId = window.location.hash;
    loadInner(sId);

    //tab切换右侧
    $('.right_content').on('click', '#tab li', function (e) {
        var i = $(this).index()
        console.log(i)
        e.preventDefault()
        $('#tab li').removeClass("active");
        $(".order_content").css('display', 'none');
        $("#content .order_content").eq(i).css('display', 'block');
        $(this).addClass("active");
        // 显示隐藏-客户资料按钮
        if (i == 1) {
            $(".right_content .personal_box_btn").css('display', 'block')
        }else {
            $(".right_content .personal_box_btn").css('display', 'none')
        }
        if (i == 5) {
            $(".right_content .level_box").css('display', 'block')
        }else{
            $(".right_content .level_box").css('display', 'none')
        }
        
    })
    

})




