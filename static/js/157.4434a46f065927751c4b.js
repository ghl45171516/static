webpackJsonp([157],{"/HA5":function(n,t,e){var A=e("J7SC");"string"==typeof A&&(A=[[n.i,A,""]]),A.locals&&(n.exports=A.locals);e("rjj0")("7ab6221e",A,!1,{})},J7SC:function(n,t,e){var A=e("kxFB");(n.exports=e("FZ+f")(!0)).push([n.i,"/*登录*/\n.login_wrap[data-v-295b829e] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  max-width: 720px;\n  overflow: auto;\n}\n.login_con[data-v-295b829e] {\n  position: relative;\n  min-height: 100%;\n}\n.login_way[data-v-295b829e] {\n  width: 100%;\n  padding: 0 7%;\n  margin-top: 8%;\n}\n.way_title[data-v-295b829e] {\n  position: relative;\n  font-size: 0;\n  text-align: center;\n}\n.way_title[data-v-295b829e]::after {\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: #E9EEF3;\n  content: '';\n  left: 0;\n  top: 50%;\n  margin-top: -0.5px;\n  z-index: 1;\n}\n.way_title span[data-v-295b829e] {\n  display: inline-block;\n  font-size: 14px;\n  line-height: 20px;\n  padding: 0 20px;\n  background: #fff;\n  position: relative;\n  z-index: 2;\n}\n.way_list[data-v-295b829e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 25px 0;\n}\n.way_list li[data-v-295b829e] {\n  width: 50px;\n  height: 50px;\n}\n.relate_con[data-v-295b829e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 40px;\n}\n.relate_con .wechat[data-v-295b829e] {\n  width: 50px;\n}\n.relate_con .relate[data-v-295b829e] {\n  width: 30px;\n  margin: 0 10px;\n}\n.relate_con .logo[data-v-295b829e] {\n  width: 70px;\n}\n.login_main[data-v-295b829e] {\n  padding: 0 10%;\n  margin-top: 8%;\n}\n.login_tabList[data-v-295b829e] {\n  width: 100%;\n  padding: 0 2%;\n  margin: 10px auto 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.login_tabList .list[data-v-295b829e] {\n  font-size: 14px;\n  line-height: 30px;\n  color: #020224;\n  position: relative;\n  border-bottom: 2px solid transparent;\n}\n.guojia[data-v-295b829e] {\n  margin-top: 15px;\n  padding-top: 3%;\n  width: 100%;\n  font-size: 13px;\n  line-height: 24px;\n  color: #333;\n  background: transparent;\n  -webkit-user-select: auto !important;\n  -moz-user-select: auto !important;\n  -ms-user-select: auto !important;\n  -o-user-select: auto !important;\n  user-select: auto !important;\n}\n.guojia .icon[data-v-295b829e] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  margin-top: -12px;\n  width: 24px;\n  z-index: 2;\n  height: 24px;\n}\n.guojia .location_city[data-v-295b829e] {\n  background: #F7F7F7;\n  padding: 10px 50px;\n  position: relative;\n  border-radius: 2px;\n}\n.guojia .location_city .font_family[data-v-295b829e] {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  margin-top: -12px;\n}\n.login_sub[data-v-295b829e] {\n  width: 100%;\n  display: block;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 12px 0 !important;\n  color: #fff;\n  border-radius: 5px;\n  margin-top: 10%;\n  background: #D8D8D8;\n}\n.login_tabCon .active[data-v-295b829e] {\n  display: none;\n}\n.login_tabCon .con[data-v-295b829e] {\n  display: block;\n  padding-top: 3%;\n}\n.login_tabCon .text[data-v-295b829e] {\n  background: #F7F7F7;\n  padding: 12px 50px;\n  margin-top: 15px;\n  position: relative;\n  border-radius: 2px;\n}\n.login_tabCon .text .del[data-v-295b829e] {\n  right: 15px !important;\n}\n.login_tabCon .text .icon[data-v-295b829e] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  margin-top: -12px;\n  width: 24px;\n  z-index: 2;\n  height: 24px;\n}\n.login_tabCon .text .pass_icon[data-v-295b829e] {\n  content: '';\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  margin-top: -10px;\n  width: 21px;\n}\n.login_tabCon .text .pass_icon img[data-v-295b829e] {\n  width: 100%;\n  display: block;\n}\n.login_tabCon .text .pass_icon .show_icon[data-v-295b829e] {\n  display: none;\n}\n.login_tabCon .text .pass_icon.show .show_icon[data-v-295b829e] {\n  display: block;\n}\n.login_tabCon .text .pass_icon.show .hide_icon[data-v-295b829e] {\n  display: none;\n}\n.login_tabCon .text input[data-v-295b829e] {\n  display: block;\n  width: 100%;\n  font-size: 13px;\n  line-height: 24px;\n  padding: 0 5px;\n  color: #333;\n  background: transparent;\n  -webkit-user-select: auto !important;\n  -moz-user-select: auto !important;\n  -ms-user-select: auto !important;\n  -o-user-select: auto !important;\n  user-select: auto !important;\n}\n.login_tabCon .text input[data-v-295b829e]::-webkit-input-placeholder {\n  color: #b3b9c0;\n}\n.register_btn[data-v-295b829e],\n.pass_btn[data-v-295b829e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 80%;\n  margin: 15px auto 0;\n}\n.register_btn a[data-v-295b829e] {\n  color: #3c4043;\n  font-size: 13px;\n  line-height: 20px;\n}\n.pass_btn a[data-v-295b829e] {\n  color: #9ea3a9;\n  font-size: 13px;\n  line-height: 20px;\n}\n#get_code[data-v-295b829e] {\n  position: absolute;\n  padding: 0 15px;\n  font-size: 12px;\n  line-height: 20px;\n  top: 50%;\n  margin-top: -10px;\n  right: 0;\n  border: none;\n  outline: none;\n  color: #9ea3a9;\n  background: none;\n}\n#get_code[data-v-295b829e]::before {\n  content: '';\n  width: 1px;\n  height: 14px;\n  background: #D3D3D3;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -7px;\n}\n.new_board[data-v-295b829e] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  max-width: 720px;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 3;\n  display: none;\n}\n/*注册*/\n.colorActive.hide[data-v-295b829e] {\n  display: none;\n}\n.login_tabCon .area_num[data-v-295b829e] {\n  background: #F7F7F7;\n  padding: 12px 10px 12px 16px;\n  margin-top: 20px;\n  position: relative;\n  border-radius: 2px;\n}\n.login_tabCon .area_num a[data-v-295b829e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  font-size: 13px;\n  line-height: 24px;\n  color: #b3b9c0;\n}\n.protocol[data-v-295b829e] {\n  padding: 0 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 15px;\n  font-size: 13px;\n  line-height: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.protocol .check[data-v-295b829e] {\n  width: 14px;\n  height: 14px;\n  border: 1px solid #B3B9C0;\n  border-radius: 2px;\n  margin-right: 6px;\n}\n.protocol .check div[data-v-295b829e] {\n  background: url("+A(e("gcHf"))+");\n  width: 100%;\n  height: 100%;\n  background-size: 100% 100%;\n}\n.send_num[data-v-295b829e] {\n  text-align: center;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 20px 0;\n}\n.pass_tip[data-v-295b829e] {\n  \n  font-size: 13px;\n  line-height: 25px;\n  margin-top: 10px;\n  color: #b3b9c0;\n  letter-spacing: 1px;\n}\n.china[data-v-295b829e] {\n  font-size: 16px;\n  line-height: 24px;\n  position: absolute;\n  left: 50px;\n  top: 50%;\n  margin-top: -12px;\n  color: #202224;\n}\n","",{version:3,sources:["F:/小程序dome/zihaiedian/ishop/src/components/BindPhone.vue"],names:[],mappings:"AAAA,MAAM;AACN;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,iBAAiB;EACjB,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,cAAc;EACd,eAAe;CAChB;AACD;EACE,mBAAmB;EACnB,aAAa;EACb,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,YAAY;EACZ,QAAQ;EACR,SAAS;EACT,mBAAmB;EACnB,WAAW;CACZ;AACD;EACE,sBAAsB;EACtB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,WAAW;CACZ;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,0BAA0B;MACtB,8BAA8B;EAClC,gBAAgB;CACjB;AACD;EACE,YAAY;EACZ,aAAa;CACd;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,yBAAyB;MACrB,sBAAsB;UAClB,wBAAwB;EAChC,iBAAiB;CAClB;AACD;EACE,YAAY;CACb;AACD;EACE,YAAY;EACZ,eAAe;CAChB;AACD;EACE,YAAY;CACb;AACD;EACE,eAAe;EACf,eAAe;CAChB;AACD;EACE,YAAY;EACZ,cAAc;EACd,oBAAoB;EACpB,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;CACxC;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,mBAAmB;EACnB,qCAAqC;CACtC;AACD;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,YAAY;EACZ,wBAAwB;EACxB,qCAAqC;EACrC,kCAAkC;EAClC,iCAAiC;EACjC,gCAAgC;EAChC,6BAA6B;CAC9B;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;CACd;AACD;EACE,oBAAoB;EACpB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,kBAAkB;CACnB;AACD;EACE,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,kBAAkB;EAClB,2BAA2B;EAC3B,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;CACrB;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;EACf,gBAAgB;CACjB;AACD;EACE,oBAAoB;EACpB,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,uBAAuB;CACxB;AACD;EACE,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,aAAa;CACd;AACD;EACE,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,SAAS;EACT,kBAAkB;EAClB,YAAY;CACb;AACD;EACE,YAAY;EACZ,eAAe;CAChB;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;CAChB;AACD;EACE,cAAc;CACf;AACD;EACE,eAAe;EACf,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;EACf,YAAY;EACZ,wBAAwB;EACxB,qCAAqC;EACrC,kCAAkC;EAClC,iCAAiC;EACjC,gCAAgC;EAChC,6BAA6B;CAC9B;AACD;EACE,eAAe;CAChB;AACD;;EAEE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,WAAW;EACX,oBAAoB;CACrB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,SAAS;EACT,kBAAkB;EAClB,SAAS;EACT,aAAa;EACb,cAAc;EACd,eAAe;EACf,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,oBAAoB;EACpB,mBAAmB;EACnB,QAAQ;EACR,SAAS;EACT,iBAAiB;CAClB;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,OAAO;EACP,QAAQ;EACR,iBAAiB;EACjB,+BAA+B;EAC/B,WAAW;EACX,cAAc;CACf;AACD,MAAM;AACN;EACE,cAAc;CACf;AACD;EACE,oBAAoB;EACpB,6BAA6B;EAC7B,iBAAiB;EACjB,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;EAC5B,0BAA0B;MACtB,uBAAuB;UACnB,+BAA+B;EACvC,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,eAAe;EACf,qBAAqB;EACrB,qBAAqB;EACrB,cAAc;EACd,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;MACtB,uBAAuB;UACnB,oBAAoB;CAC7B;AACD;EACE,YAAY;EACZ,aAAa;EACb,0BAA0B;EAC1B,mBAAmB;EACnB,kBAAkB;CACnB;AACD;EACE,0CAA8C;EAC9C,YAAY;EACZ,aAAa;EACb,2BAA2B;CAC5B;AACD;EACE,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;CACjB;AACD;;EAEE,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;EACjB,eAAe;EACf,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,WAAW;EACX,SAAS;EACT,kBAAkB;EAClB,eAAe;CAChB",file:"BindPhone.vue",sourcesContent:["/*登录*/\n.login_wrap[data-v-295b829e] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  max-width: 720px;\n  overflow: auto;\n}\n.login_con[data-v-295b829e] {\n  position: relative;\n  min-height: 100%;\n}\n.login_way[data-v-295b829e] {\n  width: 100%;\n  padding: 0 7%;\n  margin-top: 8%;\n}\n.way_title[data-v-295b829e] {\n  position: relative;\n  font-size: 0;\n  text-align: center;\n}\n.way_title[data-v-295b829e]::after {\n  position: absolute;\n  width: 100%;\n  height: 1px;\n  background: #E9EEF3;\n  content: '';\n  left: 0;\n  top: 50%;\n  margin-top: -0.5px;\n  z-index: 1;\n}\n.way_title span[data-v-295b829e] {\n  display: inline-block;\n  font-size: 14px;\n  line-height: 20px;\n  padding: 0 20px;\n  background: #fff;\n  position: relative;\n  z-index: 2;\n}\n.way_list[data-v-295b829e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  padding: 25px 0;\n}\n.way_list li[data-v-295b829e] {\n  width: 50px;\n  height: 50px;\n}\n.relate_con[data-v-295b829e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  margin-top: 40px;\n}\n.relate_con .wechat[data-v-295b829e] {\n  width: 50px;\n}\n.relate_con .relate[data-v-295b829e] {\n  width: 30px;\n  margin: 0 10px;\n}\n.relate_con .logo[data-v-295b829e] {\n  width: 70px;\n}\n.login_main[data-v-295b829e] {\n  padding: 0 10%;\n  margin-top: 8%;\n}\n.login_tabList[data-v-295b829e] {\n  width: 100%;\n  padding: 0 2%;\n  margin: 10px auto 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n}\n.login_tabList .list[data-v-295b829e] {\n  font-size: 14px;\n  line-height: 30px;\n  color: #020224;\n  position: relative;\n  border-bottom: 2px solid transparent;\n}\n.guojia[data-v-295b829e] {\n  margin-top: 15px;\n  padding-top: 3%;\n  width: 100%;\n  font-size: 13px;\n  line-height: 24px;\n  color: #333;\n  background: transparent;\n  -webkit-user-select: auto !important;\n  -moz-user-select: auto !important;\n  -ms-user-select: auto !important;\n  -o-user-select: auto !important;\n  user-select: auto !important;\n}\n.guojia .icon[data-v-295b829e] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  margin-top: -12px;\n  width: 24px;\n  z-index: 2;\n  height: 24px;\n}\n.guojia .location_city[data-v-295b829e] {\n  background: #F7F7F7;\n  padding: 10px 50px;\n  position: relative;\n  border-radius: 2px;\n}\n.guojia .location_city .font_family[data-v-295b829e] {\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  margin-top: -12px;\n}\n.login_sub[data-v-295b829e] {\n  width: 100%;\n  display: block;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 12px 0 !important;\n  color: #fff;\n  border-radius: 5px;\n  margin-top: 10%;\n  background: #D8D8D8;\n}\n.login_tabCon .active[data-v-295b829e] {\n  display: none;\n}\n.login_tabCon .con[data-v-295b829e] {\n  display: block;\n  padding-top: 3%;\n}\n.login_tabCon .text[data-v-295b829e] {\n  background: #F7F7F7;\n  padding: 12px 50px;\n  margin-top: 15px;\n  position: relative;\n  border-radius: 2px;\n}\n.login_tabCon .text .del[data-v-295b829e] {\n  right: 15px !important;\n}\n.login_tabCon .text .icon[data-v-295b829e] {\n  position: absolute;\n  left: 16px;\n  top: 50%;\n  margin-top: -12px;\n  width: 24px;\n  z-index: 2;\n  height: 24px;\n}\n.login_tabCon .text .pass_icon[data-v-295b829e] {\n  content: '';\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  margin-top: -10px;\n  width: 21px;\n}\n.login_tabCon .text .pass_icon img[data-v-295b829e] {\n  width: 100%;\n  display: block;\n}\n.login_tabCon .text .pass_icon .show_icon[data-v-295b829e] {\n  display: none;\n}\n.login_tabCon .text .pass_icon.show .show_icon[data-v-295b829e] {\n  display: block;\n}\n.login_tabCon .text .pass_icon.show .hide_icon[data-v-295b829e] {\n  display: none;\n}\n.login_tabCon .text input[data-v-295b829e] {\n  display: block;\n  width: 100%;\n  font-size: 13px;\n  line-height: 24px;\n  padding: 0 5px;\n  color: #333;\n  background: transparent;\n  -webkit-user-select: auto !important;\n  -moz-user-select: auto !important;\n  -ms-user-select: auto !important;\n  -o-user-select: auto !important;\n  user-select: auto !important;\n}\n.login_tabCon .text input[data-v-295b829e]::-webkit-input-placeholder {\n  color: #b3b9c0;\n}\n.register_btn[data-v-295b829e],\n.pass_btn[data-v-295b829e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 80%;\n  margin: 15px auto 0;\n}\n.register_btn a[data-v-295b829e] {\n  color: #3c4043;\n  font-size: 13px;\n  line-height: 20px;\n}\n.pass_btn a[data-v-295b829e] {\n  color: #9ea3a9;\n  font-size: 13px;\n  line-height: 20px;\n}\n#get_code[data-v-295b829e] {\n  position: absolute;\n  padding: 0 15px;\n  font-size: 12px;\n  line-height: 20px;\n  top: 50%;\n  margin-top: -10px;\n  right: 0;\n  border: none;\n  outline: none;\n  color: #9ea3a9;\n  background: none;\n}\n#get_code[data-v-295b829e]::before {\n  content: '';\n  width: 1px;\n  height: 14px;\n  background: #D3D3D3;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  margin-top: -7px;\n}\n.new_board[data-v-295b829e] {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  max-width: 720px;\n  background: rgba(0, 0, 0, 0.6);\n  z-index: 3;\n  display: none;\n}\n/*注册*/\n.colorActive.hide[data-v-295b829e] {\n  display: none;\n}\n.login_tabCon .area_num[data-v-295b829e] {\n  background: #F7F7F7;\n  padding: 12px 10px 12px 16px;\n  margin-top: 20px;\n  position: relative;\n  border-radius: 2px;\n}\n.login_tabCon .area_num a[data-v-295b829e] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  font-size: 13px;\n  line-height: 24px;\n  color: #b3b9c0;\n}\n.protocol[data-v-295b829e] {\n  padding: 0 8px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-top: 15px;\n  font-size: 13px;\n  line-height: 20px;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n.protocol .check[data-v-295b829e] {\n  width: 14px;\n  height: 14px;\n  border: 1px solid #B3B9C0;\n  border-radius: 2px;\n  margin-right: 6px;\n}\n.protocol .check div[data-v-295b829e] {\n  background: url(\"../../static/img/check.svg\");\n  width: 100%;\n  height: 100%;\n  background-size: 100% 100%;\n}\n.send_num[data-v-295b829e] {\n  text-align: center;\n  font-size: 16px;\n  line-height: 24px;\n  padding: 20px 0;\n}\n.pass_tip[data-v-295b829e] {\n  \n  font-size: 13px;\n  line-height: 25px;\n  margin-top: 10px;\n  color: #b3b9c0;\n  letter-spacing: 1px;\n}\n.china[data-v-295b829e] {\n  font-size: 16px;\n  line-height: 24px;\n  position: absolute;\n  left: 50px;\n  top: 50%;\n  margin-top: -12px;\n  color: #202224;\n}\n"],sourceRoot:""}])},"xec+":function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var A=e("J1eH"),i=e("c2Ch"),a={name:"BindPhone",components:{GetCode:A.a},data:function(){return{phone:"",code:""}},mounted:function(){this.commonJs.changeColor()},methods:{getCode:function(){var n=this;"获取验证码"==this.$refs.get_code.msg&&Object(i._128)({type:10,phone:this.phone,wechat_open_id:localStorage.getItem("unionId")}).then(function(t){n.$refs.get_code.startCount()})},submit:function(){var n=this;6==this.code.length?Object(i.I)({phone:this.phone,code:this.code,unionId:localStorage.getItem("unionId")}).then(function(t){window.location.href=localStorage.getItem("beforeLogin"),localStorage.setItem("member_id",t.member_id),n.Global.member_id=t.member_id,n.commonJs.distributionInfo(),n.$bus.$emit("refreshCart")}):this.$Toast.toast("请正确输入验证码")},agreeOpe:function(){this.$router.push({name:"web",query:{article_id:17,title:"协议详情"}})}}},o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"login_wrap",staticStyle:{"padding-top":"48px"}},[e("div",{staticClass:"login_con"},[e("head-title",{attrs:{title:"微信联合登录"}}),n._v(" "),e("div",{staticClass:"relate_con"},[e("img",{staticClass:"wechat",attrs:{src:"/static/img/wechat.png"}}),n._v(" "),e("img",{staticClass:"relate",attrs:{src:"/static/img/relate.png"}}),n._v(" "),e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.Global.logo,expression:"Global.logo"}],staticClass:"logo"})]),n._v(" "),e("div",{staticClass:"login_main"},[e("div",{staticClass:"login_tabCon"},[e("div",{staticClass:"con active"},[e("div",{staticClass:"text",staticStyle:{"padding-left":"80px"}},[e("img",{staticClass:"icon",attrs:{src:"/static/img/number.png",title:"",alt:""}}),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.phone,expression:"phone"}],attrs:{type:"tel",maxlength:"11",placeholder:"请输入手机号"},domProps:{value:n.phone},on:{input:function(t){t.target.composing||(n.phone=t.target.value)}}}),n._v(" "),e("div",{staticClass:"china"},[n._v("+86")])]),n._v(" "),e("div",{staticClass:"text"},[e("img",{staticClass:"icon",attrs:{src:"/static/img/code.png",title:"",alt:""}}),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.code,expression:"code"}],attrs:{type:"tel",maxlength:"6",placeholder:"请输入验证码"},domProps:{value:n.code},on:{input:function(t){t.target.composing||(n.code=t.target.value)}}}),n._v(" "),e("get-code",{ref:"get_code",nativeOn:{click:function(t){return n.getCode(t)}}})],1),n._v(" "),e("div",{staticClass:"pass_tip"},[n._v("若您输入的手机号未注册，将为您直接注册，注册即视为同意"),e("span",{staticClass:"textActive",on:{click:n.agreeOpe}},[n._v("注册协议")])]),n._v(" "),e("input",{staticClass:"login_sub bgActive",attrs:{type:"submit",value:"关联"},on:{click:n.submit}})])])]),n._v(" "),e("div",{staticClass:"pass_btn"},[e("router-link",{attrs:{replace:{name:"Login"}}},[n._v("密码登录")])],1)],1)])};o._withStripped=!0;var p={render:o,staticRenderFns:[]},s=p;var l=!1;var C=e("VU/8")(a,s,!1,function(n){l||e("/HA5")},"data-v-295b829e",null);C.options.__file="src/components/BindPhone.vue";t.default=C.exports}});