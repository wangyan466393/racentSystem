$(function(){
    $(".leftMenus").on("click", "li", function(){
        var sId = $(this).data("id");  //获取data-id的值
        window.location.hash = sId;  //设置锚点
        loadInner(sId);
    });

    function loadInner(sId){
        var sId = window.location.hash;
        var pathn, i;
        switch(sId){
            case "#orderManagement": pathn = "orderManagement.html"; i = 0; break;
// 　　　　　　　case "#account": pathn = "user_account.html"; i = 1; break;
//             case "#trade": pathn = "user_trade.html"; i = 2; break;
//             case "#info": pathn = "user_info.html"; i = 3; break;
// 　　　　　　  default: pathn = "user_center.html"; i = 0; break;
        }
        $(".right_content").load(pathn); //加载相对应的内容
        $(".leftMenus li").eq(i).addClass("active").siblings().removeClass("active"); //当前列表高亮
    }
    var sId = window.location.hash;
    loadInner(sId);
})