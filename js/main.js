//需求：单击标题，让对于的内容显示
        //tab切换
        var as = document.querySelectorAll("#tab li a");
        var lis = document.querySelectorAll("#tab li");
        for (var i = 0; i < as.length; i++) {
            //绑定事件
            as[i].onclick = function () {
                console.log(this)
                //查找要修改的元素
                //当触发a的时候 ，让所有的 div内容隐藏
                var divs = document.querySelectorAll("#content>div");
                for (var j = 0; j < divs.length; j++) {
                    divs[j].style.display = "none";
                    lis[j].className = ""
                }
                //进行修改
                //让当前a对应的 div显示
                var i = this.href.lastIndexOf("#");  //查找的就是#出现的位置；this.href  完整的路径地址；
                var id = this.href.substring(i);   // 截取#到结尾的内容
                console.log(document.querySelector(id).parentNode);  //#content1  #content2  #content3
                document.querySelector(id).style.display = "block";
                this.parentElement.className = "active";
            }
        }

        var json = [
            { "name": "ljp", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "order_date": new Date(), "payment_method": "零钱支付", "order_type": "新", "order_status": "草稿", "order_price": "1229.60" },   //json[0]
            { "name": "ljp1", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "order_date": new Date(), "payment_method": "零钱支付", "order_type": "新", "order_status": "草稿", "order_price": "1229.60" },
            { "name": "ljp2", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "order_date": new Date(), "payment_method": "零钱支付", "order_type": "新", "order_status": "草稿", "order_price": "1229.60" },
            { "name": "ljp3", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "order_date": new Date(), "payment_method": "零钱支付", "order_type": "新", "order_status": "草稿", "order_price": "1229.60" },
            { "name": "ljp4", "order_num": "20200803xcnjj63cm", "product_name": "Sectigo EV代码签名", "order_date": new Date(), "payment_method": "零钱支付", "order_type": "新", "order_status": "草稿", "order_price": "1229.60" },
        ];

        //获取所有订单表数据
        getTableData()
        function getTableData() {
            var tableInfo = "";
            var tbody = document.getElementsByTagName("tbody")[0];
            for (var i = 0; i < json.length; i++) {    //遍历Table的所有Row
                tableInfo += "<tr>"
                    //遍历Row中的每一列
                    //获取Table中单元格的内容
                    + " <td>"+json[i].name+"</td> "
                    + "<td>20200803xcnjj63cm</td>"
                    + "     <td>Sectigo EV代码签名</td>"
                    + "     <td>2020-08-03 18:35:00</td>"
                    + "       <td>零钱支付</td>"
                    + "       <td>新</td>"
                    + "       <td>草稿</td>"
                    + "       <td>￥1299.60</td>"
                    + "       <td><a href='#'>详情</a></td>  ";

                + "</tr>";
            }
            tbody.innerHTML = tableInfo ;
        }