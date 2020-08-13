function Page(settings) {
   this.settings = settings;
   this.init();
}
//默认配置
Page.prototype = {
    init: function() {
    this.create();
},
create: function() {
   var _template = `<div class="pages">
    <div class="page_left">
        共 <span class="all_data">${this.settings.count}</span> 条信息/共 <span class="all_pages">${Math.ceil(this.settings.countPage)}</span> 页
        </div>
         <div class="page_cont">
            <div class="hometrailer page_home">首页</div>
            <div class="updown page_up">上一页</div>
            <div class="page_view">
                <ul class="page_view_ul">
                </ul>
            </div>
            <div class="updown page_down">下一页</div>
            <div class=" hometrailer page_trailer">尾页</div>
        </div>
        
    </div>`;
    /*<div class="page_footer">
            <input type="text" class="page_input" />
            <span>页</span>
            <span class="page_btn">跳转</span>
        </div>*/
    $(this.settings.container).append(_template);
    this.refreshDom(this.settings);
    this.bindEvent();
    },
bindEvent: function() {
    var _this = this;
        //跳转首页
    $(this.settings.container).on("click", ".page_home", function() {
        var newpages = 1;
        _this.settings.nowPage = newpages;
        _this.settings.callBack(_this.settings.nowPage)
        _this.refreshDom(this.settings);
    });
    //跳转上一页
    $(this.settings.container).on("click", ".page_up", function() {
        var newpages = _this.settings.nowPage;
        newpages--;
        if(newpages < 1) {
            newpages = 1
            _this.settings.nowPage = newpages
        } else {
            _this.settings.nowPage = newpages
        }
    _this.settings.callBack(_this.settings.nowPage)
        _this.refreshDom(this.settings);
    });
    //跳转下一页
    $(this.settings.container).on("click", ".page_down", function() {
        var newpages = _this.settings.nowPage;
        newpages++;
        if(newpages > _this.settings.countPage) {
            newpages = _this.settings.countPage
            _this.settings.nowPage = newpages
        } else {
            _this.settings.nowPage = newpages
        }
        _this.settings.callBack(_this.settings.nowPage)
        _this.refreshDom(this.settings);
    });
    //跳转末页
    $(this.settings.container).on("click", ".page_trailer", function() {
        var newpages = _this.settings.countPage;
        _this.settings.nowPage = newpages;
        _this.settings.callBack(_this.settings.nowPage)
        _this.refreshDom(this.settings);
    });
    //Go跳转
    $(this.settings.container).on("click", ".page_btn", function() {
        var inputText = $(".page_input").val() - 0;
        if(inputText < 1 || inputText > _this.settings.countPage) {
            alert("输入的页面不正确，请重新输入")
        } else {
            _this.settings.nowPage = inputText;
            _this.settings.callBack(_this.settings.nowPage)
            _this.refreshDom(this.settings);
            //                establish(objpage);
            //外部的ajax
        }
        });
    },
    refreshDom: function() {
        var _this = this;
        $(".li").remove();
        var countPage = this.settings.countPage;
        var showPageCount = this.settings.showPageCount;
        var nowPage = this.settings.nowPage - 0;
        var count = this.settings.count;
        var bian = Math.ceil((showPageCount - 1) / 2) ;
        $(".all_data").html(count);
        $(".all_pages").html(countPage);
        var html = "";
        if(nowPage - bian <= 0) {
            for(var i = 1; i < showPageCount + 1; i++) {
                var index = i;
                if(nowPage == index) {
                pageHtml = `    <li index="${i}" class="li pageActive">${i}</li>`;
                } else {
                pageHtml = `    <li  index="${i}" class="li">${i}</li>`;
                }
            html += pageHtml;
            }
        } else if(nowPage - bian > 0 && nowPage + bian < countPage) {
            var num = nowPage - bian;
            for(var i = num; i < (num + showPageCount); i++) {
                var index = i;
                if(nowPage == index) {
                    pageHtml = `    <li index="${i}" class="li pageActive">${i}</li>`;
                } else {
                    pageHtml = `    <li  index="${i}" class="li">${i}</li>`;
                }
            html += pageHtml;
            }
 
        } else if(nowPage + bian >= countPage) {
            var numAll = countPage - showPageCount + 1;
            for(var i = numAll; i < (numAll + showPageCount); i++) {
                var index = i;
                if(nowPage == index) {
                    pageHtml = `    <li index="${i}" class="li pageActive">${i}</li>`;
                } else {
                    pageHtml = `    <li  index="${i}" class="li">${i}</li>`;
                }
            html += pageHtml;
        }
    }
 
    $(".page_view_ul").append(html)
 
    $(".li").click(function() {
        _this.settings.nowPage = $(this).attr("index")-0;
        console.log(_this.settings.nowPage);
            _this.settings.callBack(_this.settings.nowPage)
        _this.refreshDom(this.settings);
    })
    }
};
    var pageInit = function(opts) {
        return new Page(opts);
    };
 
    window.pageInit = $.pageInit = pageInit;