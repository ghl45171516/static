"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _Global = _interopRequireDefault(require("../../src/tool/Global"));

var _api = require("../../src/axios/api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  getColor: function getColor() {
    //十六进制颜色值的正则表达式
    var result1 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_Global["default"].Color);
    var result2 = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(_Global["default"].color); // var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    // 主色

    var Color = result1 ? {
      colour: "rgb(".concat(parseInt(result1[1], 16), ",").concat(parseInt(result1[2], 16), ",").concat(parseInt(result1[3], 16), ")"),
      ColorRg: "".concat(parseInt(result1[1], 16), ",").concat(parseInt(result1[2], 16), ",").concat(parseInt(result1[3], 16))
    } : null; // 幅色

    var color = result2 ? {
      Color: "rgb".concat(parseInt(result2[1], 16) + parseInt(result2[2], 16) + parseInt(result2[3], 16)),
      ColorRg: "".concat(parseInt(result2[1], 16) + parseInt(result2[2], 16) + parseInt(result2[3], 16))
    } : null;
    return {
      Color: Color,
      color: color
    };
  },
  changeColor: function changeColor() {
    //十六进制颜色值的正则表达式
    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
    /*16进制颜色转为RGB格式*/

    String.prototype.colorRgb = function () {
      var sColor = this.toLowerCase();

      if (sColor && reg.test(sColor)) {
        if (sColor.length === 4) {
          var sColorNew = "#";

          for (var i = 1; i < 4; i += 1) {
            sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
          }

          sColor = sColorNew;
        } //处理六位的颜色值


        var sColorChange = [];

        for (var i = 1; i < 7; i += 2) {
          sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
        } // return "rgba(" + sColorChange.join(",") + ",0.7)";


        return {
          color: sColorChange.join(","),
          colors: "rgba(" + sColorChange.join(",") + ")",
          sColor: "rgba(" + sColorChange.join(",") + ",0.7)",
          sColorFour: "rgba(" + sColorChange.join(",") + ",0.4)"
        };
      } else {
        return sColor;
      }
    };

    _vue["default"].nextTick(function () {
      // Color主色，color副色
      var Color = _Global["default"].Color,
          Rgba = '',
          color = _Global["default"].color,
          similarColor = _Global["default"].similarColor; // 带边框的文字

      $(".colorActive").css({
        "color": Color,
        "borderColor": Color
      }); // 上边框变色

      $(".colorTop").css({
        "borderTopColor": Color
      }); // 下边框变色

      $(".colorBottom").css({
        "borderBottomColor": Color
      }); // 上边框变色

      $(".colorLeft").css({
        "borderLeftColor": Color
      }); // 右边框变颜色

      $(".colorRight").css({
        "borderRightColor": Color
      }); // 文字

      $(".textActive").css("color", Color);
      $(".similarText").css("color", similarColor); // 背景色

      $(".bgActive").css({
        "background": Color
      }); // 背景色

      $(".bgActiveColor").css({
        "backgroundColor": Color
      }); // 边框和背景色

      $(".colorBg").css({
        "borderColor": Color,
        "background": Color
      }); // 边框颜色

      $(".colorDer").css({
        "borderColor": Color
      }); // 我的渐变色

      $(".usAdientBgRight").css({
        'background': "linear-gradient(to left,rgb(".concat(Color.colorRgb().color, ")")
      });
      $(".iconPar").each(function () {
        var Width = $(this).width();
        $(this).find(".iconColor").css({
          left: -Width + 'px',
          width: Width + 'px',
          'filter': "drop-shadow(".concat(Width, "px 0 0 ").concat(Color, ")")
        });
      }); //

      $(".opacityBg").css({
        "borderColor": color,
        "background": color
      }); // 商品详情按钮

      $(".bgUnder").css({
        "background": color
      }); // 领券已抢数量

      $(".GaugeMeter SPAN,.GaugeMeter B").css({
        color: Color
      }); // 倒计时颜色

      $(".time_det").css({
        color: Color
      }); // //十六进制颜色值的正则表达式
      // var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // /*16进制颜色转为RGB格式*/
      // String.prototype.colorRgb = function () {
      //   var sColor = this.toLowerCase();
      //   if (sColor && reg.test(sColor)) {
      //     if (sColor.length === 4) {
      //       var sColorNew = "#";
      //       for (var i = 1; i < 4; i += 1) {
      //         sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      //       }
      //       sColor = sColorNew;
      //     }
      //     //处理六位的颜色值
      //     var sColorChange = [];
      //     for (var i = 1; i < 7; i += 2) {
      //       sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
      //     }
      //     return "rgba(" + sColorChange.join(",") + ",0.7)";
      //   } else {
      //     return sColor;
      //   }
      // };
      //十六进制颜色值的正则表达式

      var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      /*16进制颜色转为RGB格式*/

      String.prototype.colorRgb = function () {
        var sColor = this.toLowerCase();

        if (sColor && reg.test(sColor)) {
          if (sColor.length === 4) {
            var sColorNew = "#";

            for (var i = 1; i < 4; i += 1) {
              sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }

            sColor = sColorNew;
          } //处理六位的颜色值


          var sColorChange = [];

          for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
          } // return "rgba(" + sColorChange.join(",") + ",0.7)";


          return {
            color: sColorChange.join(","),
            colors: "rgb(" + sColorChange.join(",") + ")",
            sColor: "rgba(" + sColorChange.join(",") + ",0.7)",
            sColorFour: "rgba(" + sColorChange.join(",") + ",0.4)"
          };
        } else {
          return sColor;
        }
      }; // 渐变颜色背景


      var RgbColor = Color.colorRgb().sColor; //转为RGB颜色值的方法

      var RgbColorFour = Color.colorRgb().sColorFour; //转为RGB颜色值的方法

      var RgbColorGroupIcon = RgbColor.split('.')[0] + '.4)';
      var Rgb = Color.colorRgb().color; //带透明度的背景色

      $(".bgActiveAlp").css({
        "background": RgbColorFour
      }); // 边框和文字和背景色加透明度

      $(".colorBgAlp").css({
        "borderColor": Color,
        "background": RgbColorFour,
        "color": Color
      }); // 渐变色

      $(".bgadientBgRight").css({
        'background': "linear-gradient(to right,".concat(color, ",").concat(Color, ")")
      });
      $(".gradientBg").css({
        'background': "linear-gradient(to bottom,".concat(RgbColor, ",").concat(Color, ")")
      });
      $(".gradientBgRight").css({
        'background': "linear-gradient(to right,".concat(RgbColor, ",").concat(Color, ")")
      });
      $(".gradientBgLeft").css({
        'background': "linear-gradient(to right,".concat(Color, ",").concat(RgbColor, ")")
      }); // 阴影

      $(".colorShadow").css('box-shadow', "0 0 20px ".concat(RgbColor));
      $(".groupShadow").css('box-shadow', "0 2px 8px 0 ".concat(RgbColor));
      $(".groupIcon").css('background', "linear-gradient(to right,".concat(Color, ",").concat(RgbColorGroupIcon));
      $(".limitBg").css({
        'background': RgbColor.split('.')[0] + '.2)'
      }); // 我的背景

      $(".userBg").css({
        'background': 'linear-gradient(135deg,' + Color + ' 1%,rgba(255,255,255,0.3)'
      }); // // 我的渐变色
      // $(".usAdientBgRight").css({'background': `linear-gradient(to left,rgb(${Rgb}),rgb(${Rgb},0.8)`})
    });

    return _Global["default"].Color.colorRgb();
  },
  // 商品飞入购物车动画
  addFly: function addFly(obj, event) {
    var offset = $('#amount').offset();
    var img = $(obj).parents('li').find('.pic_ratio img').attr('src'); //获取当前点击图片链接

    var flyer = $('<img class="u-flyer" style="width: 40px;height: 40px;border-radius: 50%" src="/static/img/default.png"/>'); //抛物体对象

    flyer.fly({
      start: {
        left: event.pageX - 10,
        top: event.pageY - $(window).scrollTop()
      },
      end: {
        left: offset.left + 5,
        top: offset.top - $(window).scrollTop(),
        width: 0,
        height: 0
      },
      onEnd: function onEnd() {
        this.destory();
      }
    });
  },
  // 获取分销商信息
  distributionInfo: function distributionInfo() {
    (0, _api.requestDistributionShareGetInfo)({
      distribution_id: localStorage.getItem('prevDistributionId') ? localStorage.getItem('prevDistributionId') : 0
    }).then(function (res) {
      localStorage.setItem('distributionInfo', JSON.stringify(res.data.cur)); // 判断是否已注册成为分销商

      if (localStorage.getItem('MyDistributionId') != null) {
        return;
      }

      if (localStorage.getItem('prevDistributionId') != undefined && localStorage.getItem('prevDistributionId') != 0) {
        (0, _api.requestDistributionShareBindDistribution)({
          superior: localStorage.getItem('prevDistributionId')
        }).then(function (res) {
          console.log(res);
        });
      }
    });
  }
};
exports["default"] = _default;