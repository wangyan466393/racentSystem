window.onload=function(){
    var json = [
        { "name": "ljp", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "order_date": new Date(), "payment_method": "零钱支付", "order_type": "新", "order_status": "草稿", "order_price": "1229.60" },   //json[0]
        { "name": "ljp1", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "order_date": new Date(), "payment_method": "零钱支付", "order_type": "新", "order_status": "草稿", "order_price": "1229.60" },
        { "name": "ljp2", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "order_date": new Date(), "payment_method": "零钱支付", "order_type": "新", "order_status": "草稿", "order_price": "1229.60" },
        { "name": "ljp3", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "order_date": new Date(), "payment_method": "零钱支付", "order_type": "新", "order_status": "草稿", "order_price": "1229.60" },
        { "name": "ljp4", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "order_date": new Date(), "payment_method": "零钱支付", "order_type": "新", "order_status": "草稿", "order_price": "1229.60" },
    ];
    //订单管理--所有订单信息
    getTableData()
    function getTableData() {
        var tableInfo = ""
        for (var i = 0; i < json.length; i++) {    //遍历Table的所有Row
            tableInfo += "<tr>"
                //遍历Row中的每一列
                //获取Table中单元格的内容
                + " <td>" + json[i].name + "</td> "
                + "<td>20200803xcnjj63cm</td>"
                + "<td>Sectigo EV代码签名</td>"
                + "<td>2020-08-03 18:35:00</td>"
                + "<td>零钱支付</td>"
                + "<td>新</td>"
                + "<td>草稿</td>"
                + "<td>￥1299.60</td>"
                + "<td><a data-id='orderDetail'>详情</a></td>  ";

            tableInfo += "</tr>";
        }
        $(".right_content #order_dataLists tbody").html(tableInfo)
    }

    //获取订阅管理-所有订单
    var jsonSub = [
        { "name": "ljp", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "past_date": new Date(), "renewal_cycle": "1年", "order_price": "1229.60" ,"product_status":"申请中"},   //json[0]
        { "name": "ljp1", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "past_date": new Date(), "renewal_cycle": "1年", "order_price": "1229.60" ,"product_status":"申请中"},
        { "name": "ljp2", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "past_date": new Date(), "renewal_cycle": "1年",  "order_price": "1229.60" ,"product_status":"申请中"},
        { "name": "ljp3", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "past_date": new Date(), "renewal_cycle": "1年", "order_price": "1229.60","product_status":"申请中" },
        { "name": "ljp4", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "past_date": new Date(), "renewal_cycle": "1年", "order_price": "1229.60" ,"product_status":"申请中"},
    ];
    getSubscriptionData()
    function getSubscriptionData() {
        var tableInfo = ""
        for (var i = 0; i < jsonSub.length; i++) {    //遍历Table的所有Row
            tableInfo += "<tr>"
                //遍历Row中的每一列
                //获取Table中单元格的内容
                + " <td>" + jsonSub[i].name + "</td> "
                + "<td>" + jsonSub[i].order_num + "</td>"
                + "<td>" + jsonSub[i].product_name + "</td>"
                + "<td>2020-08-03 18:35:00</td>"
                + "<td>" + jsonSub[i].renewal_cycle + "</td>"
                + "<td>" + jsonSub[i].order_price + "</td>"
                + "<td>" + jsonSub[i].product_status + "</td>"
                + "<td><a data-id='orderDetail'><img src='images/delete.png'></a></td>  ";

            tableInfo += "</tr>";
        }
        $(".right_content #subscription_dataLists tbody").html(tableInfo)
    }
}
   










