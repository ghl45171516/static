webpackJsonp([105],{"5Yzp":function(n,t,A){var a=A("dkB+");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);A("rjj0")("7b57e77b",a,!1,{})},"U+Ej":function(n,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=A("c2Ch"),i={name:"ForgetPayPsw-1",mounted:function(){this.commonJs.changeColor()},methods:{next:function(){var n=this;Object(a._128)({type:2,phone:this.$route.params.phone}).then(function(t){n.$skip.replace({name:"ForgetPayPsw-2",params:{phone:n.$route.params.phone}})})}}},e=function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"login_wrap"},[t("div",{staticClass:"login_con"},[t("head-title",{attrs:{title:"忘记支付密码"}}),this._v(" "),t("div",{staticClass:"login_main"},[t("div",{staticClass:"login_tabCon"},[t("div",{staticClass:"con active"},[t("div",{staticClass:"text input_text"},[t("img",{staticClass:"icon",attrs:{src:"/static/img/user.png",title:"",alt:""}}),this._v(" "),t("input",{attrs:{type:"tel",disabled:"",required:"required"},domProps:{value:this.$route.params.phone}})]),this._v(" "),t("input",{staticClass:"login_sub bgActive",attrs:{type:"button",value:"下一步"},on:{click:this.next}})])])])],1)])};e._withStripped=!0;var o={render:e,staticRenderFns:[]},p=o;var C=!1;var B=A("VU/8")(i,p,!1,function(n){C||A("5Yzp")},"data-v-a0126726",null);B.options.__file="src/components/ForgetPayPsw-1.vue";t.default=B.exports},"dkB+":function(n,t,A){var a=A("kxFB");(n.exports=A("FZ+f")(!0)).push([n.i,"/*登录*/\n.login_wrap[data-v-a0126726] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  max-width: 720px;\n  overflow: auto;\n}\n.login_con[data-v-a0126726] {\n  position: relative;\n  min-height: 100%;\n}\n.login_way[data-v-a0126726] {\n  width: 100%;\n  padding: 0 7%;\n  margin-top: 8%;\n}\n.way_title[data-v-a0126726] {\n  position: relative;\n  font-size: 0;\n  text-align: center;\n}\n.way_title[data-v-a0126726]::after {\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: #E9EEF3;\n  content: '';\n  left: 0;\n  top: 50%;\n  margin-top: -0.5px;\n  z-index: 1;\n}\n.way_title span[data-v-a0126726] {\n  display: inline-block;\n  font-size: 14px;\n  line-height: 20px;\n  padding: 0 20px;\n  background: #fff;\n  position: relative;\n  z-index: 2;\n}\n.way_list[data-v-a0126726] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 25px 0;\n}\n.way_list li[data-v-a0126726] {\n  width: 50px;\n  height: 50px;\n}\n.relate_con[data-v-a0126726] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 40px;\n}\n.relate_con .wechat[data-v-a0126726] {\n  width: 50px;\n}\n.relate_con .relate[data-v-a0126726] {\n  width: 30px;\n  margin: 0 10px;\n}\n.relate_con .logo[data-v-a0126726] {\n  width: 70px;\n}\n.login_main[data-v-a0126726] {\n  padding: 0 10%;\n  margin-top: 8%;\n}\n.login_tabList[data-v-a0126726] {\n  width: 100%;\n  padding: 0 2%;\n  margin: 10px auto 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.login_tabList .list[data-v-a0126726] {\n  font-size: 14px;\n  line-height: 30px;\n  color: #020224;\n  position: relative;\n  border-bottom: 2px solid transparent;\n}\n.guojia[data-v-a0126726] {\n  margin-top: 15px;\n  padding-top: 3%;\n  width: 100%;\n  font-size: 13px;\n  line-height: 24px;\n  color: #333;\n  background: transparent;\n  -webkit-user-select: auto !important;\n  -moz-user-select: auto !important;\n  -ms-user-select: auto !important;\n  -o-user-select: auto !important;\n  user-select: auto !important;\n}\n.guojia .icon[data-v-a0126726] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  margin-top: -12px;\n  width: 24px;\n  z-index: 2;\n  height: 24px;\n}\n.guojia .location_city[data-v-a0126726] {\n  background: #F7F7F7;\n  padding: 10px 50px;\n  position: relative;\n  border-radius: 2px;\n}\n.guojia .location_city .font_family[data-v-a0126726] {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  margin-top: -12px;\n}\n.login_sub[data-v-a0126726] {\n  width: 100%;\n  display: block;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 12px 0 !important;\n  color: #fff;\n  border-radius: 5px;\n  margin-top: 10%;\n  background: #D8D8D8;\n}\n.login_tabCon .active[data-v-a0126726] {\n  display: none;\n}\n.login_tabCon .con[data-v-a0126726] {\n  display: block;\n  padding-top: 3%;\n}\n.login_tabCon .text[data-v-a0126726] {\n  background: #F7F7F7;\n  padding: 12px 50px;\n  margin-top: 15px;\n  position: relative;\n  border-radius: 2px;\n}\n.login_tabCon .text .del[data-v-a0126726] {\n  right: 15px !important;\n}\n.login_tabCon .text .icon[data-v-a0126726] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  margin-top: -12px;\n  width: 24px;\n  z-index: 2;\n  height: 24px;\n}\n.login_tabCon .text .pass_icon[data-v-a0126726] {\n  content: '';\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  margin-top: -10px;\n  width: 21px;\n}\n.login_tabCon .text .pass_icon img[data-v-a0126726] {\n  width: 100%;\n  display: block;\n}\n.login_tabCon .text .pass_icon .show_icon[data-v-a0126726] {\n  display: none;\n}\n.login_tabCon .text .pass_icon.show .show_icon[data-v-a0126726] {\n  display: block;\n}\n.login_tabCon .text .pass_icon.show .hide_icon[data-v-a0126726] {\n  display: none;\n}\n.login_tabCon .text input[data-v-a0126726] {\n  display: block;\n  width: 100%;\n  font-size: 13px;\n  line-height: 24px;\n  padding: 0 5px;\n  color: #333;\n  background: transparent;\n  -webkit-user-select: auto !important;\n  -moz-user-select: auto !important;\n  -ms-user-select: auto !important;\n  -o-user-select: auto !important;\n  user-select: auto !important;\n}\n.login_tabCon .text input[data-v-a0126726]::-webkit-input-placeholder {\n  color: #b3b9c0;\n}\n.register_btn[data-v-a0126726],\n.pass_btn[data-v-a0126726] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 80%;\n  margin: 15px auto 0;\n}\n.register_btn a[data-v-a0126726] {\n  color: #3c4043;\n  font-size: 13px;\n  line-height: 20px;\n}\n.pass_btn a[data-v-a0126726] {\n  color: #9ea3a9;\n  font-size: 13px;\n  line-height: 20px;\n}\n#get_code[data-v-a0126726] {\n  position: absolute;\n  padding: 0 15px;\n  font-size: 12px;\n  line-height: 20px;\n  top: 50%;\n  margin-top: -10px;\n  right: 0;\n  border: none;\n  outline: none;\n  color: #9ea3a9;\n  background: none;\n}\n#get_code[data-v-a0126726]::before {\n  content: '';\n  width: 1px;\n  height: 14px;\n  background: #D3D3D3;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -7px;\n}\n.new_board[data-v-a0126726] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  max-width: 720px;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 3;\n  display: none;\n}\n/*注册*/\n.colorActive.hide[data-v-a0126726] {\n  display: none;\n}\n.login_tabCon .area_num[data-v-a0126726] {\n  background: #F7F7F7;\n  padding: 12px 10px 12px 16px;\n  margin-top: 20px;\n  position: relative;\n  border-radius: 2px;\n}\n.login_tabCon .area_num a[data-v-a0126726] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  font-size: 13px;\n  line-height: 24px;\n  color: #b3b9c0;\n}\n.protocol[data-v-a0126726] {\n  padding: 0 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 15px;\n  font-size: 13px;\n  line-height: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.protocol .check[data-v-a0126726] {\n  width: 14px;\n  height: 14px;\n  border: 1px solid #B3B9C0;\n  border-radius: 2px;\n  margin-right: 6px;\n}\n.protocol .check div[data-v-a0126726] {\n  background: url("+a(A("gcHf"))+");\n  width: 100%;\n  height: 100%;\n  background-size: 100% 100%;\n}\n.send_num[data-v-a0126726] {\n  text-align: center;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 20px 0;\n}\n.pass_tip[data-v-a0126726] {\n  \n  font-size: 13px;\n  line-height: 25px;\n  margin-top: 10px;\n  color: #b3b9c0;\n  letter-spacing: 1px;\n}\n.china[data-v-a0126726] {\n  font-size: 16px;\n  line-height: 24px;\n  position: absolute;\n  left: 50px;\n  top: 50%;\n  margin-top: -12px;\n  color: #202224;\n}\n","",{version:3,sources:["F:/小程序dome/zihaiedian/ishop/src/components/ForgetPayPsw-1.vue"],names:[],mappings:"AAAA,MAAM;AACN;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,cAAc;EACd,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,YAAY;EACZ,QAAQ;EACR,SAAS;EACT,mBAAmB;EACnB,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;CACZ;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,0BAA0B;MACtB,8BAA8B;EAClC,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,iBAAiB;CAClB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;EACZ,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;EACf,eAAe;CAChB;AACD;EACE,YAAY;EACZ,cAAc;EACd,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;CACxC;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,qCAAqC;CACtC;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,wBAAwB;EACxB,qCAAqC;EACrC,kCAAkC;EAClC,iCAAiC;EACjC,gCAAgC;EAChC,6BAA6B;CAC9B;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;CACd;AACD;EACE,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,2BAA2B;EAC3B,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;CACd;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,YAAY;CACb;AACD;EACE,YAAY;EACZ,eAAe;CAChB;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;CAChB;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,wBAAwB;EACxB,qCAAqC;EACrC,kCAAkC;EAClC,iCAAiC;EACjC,gCAAgC;EAChC,6BAA6B;CAC9B;AACD;EACE,eAAe;CAChB;AACD;;EAEE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,WAAW;EACX,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,SAAS;EACT,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,cAAc;EACd,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,OAAO;EACP,QAAQ;EACR,iBAAiB;EACjB,+BAA+B;EAC/B,WAAW;EACX,cAAc;CACf;AACD,MAAM;AACN;EACE,cAAc;CACf;AACD;EACE,oBAAoB;EACpB,6BAA6B;EAC7B,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,eAAe;EACf,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;CAC7B;AACD;EACE,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,0CAA8C;EAC9C,YAAY;EACZ,aAAa;EACb,2BAA2B;CAC5B;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;CACjB;AACD;;EAEE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,kBAAkB;EAClB,eAAe;CAChB",file:"ForgetPayPsw-1.vue",sourcesContent:["/*登录*/\n.login_wrap[data-v-a0126726] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  max-width: 720px;\n  overflow: auto;\n}\n.login_con[data-v-a0126726] {\n  position: relative;\n  min-height: 100%;\n}\n.login_way[data-v-a0126726] {\n  width: 100%;\n  padding: 0 7%;\n  margin-top: 8%;\n}\n.way_title[data-v-a0126726] {\n  position: relative;\n  font-size: 0;\n  text-align: center;\n}\n.way_title[data-v-a0126726]::after {\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: #E9EEF3;\n  content: '';\n  left: 0;\n  top: 50%;\n  margin-top: -0.5px;\n  z-index: 1;\n}\n.way_title span[data-v-a0126726] {\n  display: inline-block;\n  font-size: 14px;\n  line-height: 20px;\n  padding: 0 20px;\n  background: #fff;\n  position: relative;\n  z-index: 2;\n}\n.way_list[data-v-a0126726] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 25px 0;\n}\n.way_list li[data-v-a0126726] {\n  width: 50px;\n  height: 50px;\n}\n.relate_con[data-v-a0126726] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 40px;\n}\n.relate_con .wechat[data-v-a0126726] {\n  width: 50px;\n}\n.relate_con .relate[data-v-a0126726] {\n  width: 30px;\n  margin: 0 10px;\n}\n.relate_con .logo[data-v-a0126726] {\n  width: 70px;\n}\n.login_main[data-v-a0126726] {\n  padding: 0 10%;\n  margin-top: 8%;\n}\n.login_tabList[data-v-a0126726] {\n  width: 100%;\n  padding: 0 2%;\n  margin: 10px auto 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.login_tabList .list[data-v-a0126726] {\n  font-size: 14px;\n  line-height: 30px;\n  color: #020224;\n  position: relative;\n  border-bottom: 2px solid transparent;\n}\n.guojia[data-v-a0126726] {\n  margin-top: 15px;\n  padding-top: 3%;\n  width: 100%;\n  font-size: 13px;\n  line-height: 24px;\n  color: #333;\n  background: transparent;\n  -webkit-user-select: auto !important;\n  -moz-user-select: auto !important;\n  -ms-user-select: auto !important;\n  -o-user-select: auto !important;\n  user-select: auto !important;\n}\n.guojia .icon[data-v-a0126726] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  margin-top: -12px;\n  width: 24px;\n  z-index: 2;\n  height: 24px;\n}\n.guojia .location_city[data-v-a0126726] {\n  background: #F7F7F7;\n  padding: 10px 50px;\n  position: relative;\n  border-radius: 2px;\n}\n.guojia .location_city .font_family[data-v-a0126726] {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  margin-top: -12px;\n}\n.login_sub[data-v-a0126726] {\n  width: 100%;\n  display: block;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 12px 0 !important;\n  color: #fff;\n  border-radius: 5px;\n  margin-top: 10%;\n  background: #D8D8D8;\n}\n.login_tabCon .active[data-v-a0126726] {\n  display: none;\n}\n.login_tabCon .con[data-v-a0126726] {\n  display: block;\n  padding-top: 3%;\n}\n.login_tabCon .text[data-v-a0126726] {\n  background: #F7F7F7;\n  padding: 12px 50px;\n  margin-top: 15px;\n  position: relative;\n  border-radius: 2px;\n}\n.login_tabCon .text .del[data-v-a0126726] {\n  right: 15px !important;\n}\n.login_tabCon .text .icon[data-v-a0126726] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  margin-top: -12px;\n  width: 24px;\n  z-index: 2;\n  height: 24px;\n}\n.login_tabCon .text .pass_icon[data-v-a0126726] {\n  content: '';\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  margin-top: -10px;\n  width: 21px;\n}\n.login_tabCon .text .pass_icon img[data-v-a0126726] {\n  width: 100%;\n  display: block;\n}\n.login_tabCon .text .pass_icon .show_icon[data-v-a0126726] {\n  display: none;\n}\n.login_tabCon .text .pass_icon.show .show_icon[data-v-a0126726] {\n  display: block;\n}\n.login_tabCon .text .pass_icon.show .hide_icon[data-v-a0126726] {\n  display: none;\n}\n.login_tabCon .text input[data-v-a0126726] {\n  display: block;\n  width: 100%;\n  font-size: 13px;\n  line-height: 24px;\n  padding: 0 5px;\n  color: #333;\n  background: transparent;\n  -webkit-user-select: auto !important;\n  -moz-user-select: auto !important;\n  -ms-user-select: auto !important;\n  -o-user-select: auto !important;\n  user-select: auto !important;\n}\n.login_tabCon .text input[data-v-a0126726]::-webkit-input-placeholder {\n  color: #b3b9c0;\n}\n.register_btn[data-v-a0126726],\n.pass_btn[data-v-a0126726] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 80%;\n  margin: 15px auto 0;\n}\n.register_btn a[data-v-a0126726] {\n  color: #3c4043;\n  font-size: 13px;\n  line-height: 20px;\n}\n.pass_btn a[data-v-a0126726] {\n  color: #9ea3a9;\n  font-size: 13px;\n  line-height: 20px;\n}\n#get_code[data-v-a0126726] {\n  position: absolute;\n  padding: 0 15px;\n  font-size: 12px;\n  line-height: 20px;\n  top: 50%;\n  margin-top: -10px;\n  right: 0;\n  border: none;\n  outline: none;\n  color: #9ea3a9;\n  background: none;\n}\n#get_code[data-v-a0126726]::before {\n  content: '';\n  width: 1px;\n  height: 14px;\n  background: #D3D3D3;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -7px;\n}\n.new_board[data-v-a0126726] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  max-width: 720px;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 3;\n  display: none;\n}\n/*注册*/\n.colorActive.hide[data-v-a0126726] {\n  display: none;\n}\n.login_tabCon .area_num[data-v-a0126726] {\n  background: #F7F7F7;\n  padding: 12px 10px 12px 16px;\n  margin-top: 20px;\n  position: relative;\n  border-radius: 2px;\n}\n.login_tabCon .area_num a[data-v-a0126726] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  font-size: 13px;\n  line-height: 24px;\n  color: #b3b9c0;\n}\n.protocol[data-v-a0126726] {\n  padding: 0 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 15px;\n  font-size: 13px;\n  line-height: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.protocol .check[data-v-a0126726] {\n  width: 14px;\n  height: 14px;\n  border: 1px solid #B3B9C0;\n  border-radius: 2px;\n  margin-right: 6px;\n}\n.protocol .check div[data-v-a0126726] {\n  background: url(\"../../static/img/check.svg\");\n  width: 100%;\n  height: 100%;\n  background-size: 100% 100%;\n}\n.send_num[data-v-a0126726] {\n  text-align: center;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 20px 0;\n}\n.pass_tip[data-v-a0126726] {\n  \n  font-size: 13px;\n  line-height: 25px;\n  margin-top: 10px;\n  color: #b3b9c0;\n  letter-spacing: 1px;\n}\n.china[data-v-a0126726] {\n  font-size: 16px;\n  line-height: 24px;\n  position: absolute;\n  left: 50px;\n  top: 50%;\n  margin-top: -12px;\n  color: #202224;\n}\n"],sourceRoot:""}])}});