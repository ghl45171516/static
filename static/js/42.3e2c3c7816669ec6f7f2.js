webpackJsonp([42],{"/KFX":function(n,t,A){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=A("AHJT"),e=function(){var n=this,t=n.$createElement,A=n._self._c||t;return A("div",[0==n.Configuration.VersionSwitch?A("head-search",{attrs:{search_key:n.keyword,placeholder:1==n.$route.query.type?"搜索商品/品牌":"搜索店铺"},on:{search:n.search}}):n._e(),n._v(" "),1==n.Configuration.VersionSwitch?A("head-search",{attrs:{search_key:n.keyword,placeholder:n.$t("person.search")},on:{search:n.search}}):n._e(),n._v(" "),void 0!=n.hotList&&0!=n.hotList.length?A("div",{staticClass:"search_hot search_history"},[A("div",{staticClass:"title"},[n._v("热门搜索")]),n._v(" "),A("ul",{staticClass:"history_list"},n._l(n.hotList,function(t){return A("li",{directives:[{name:"show",rawName:"v-show",value:""!=t,expression:"item != ''"}],on:{click:function(A){n.search(t)}}},[n._v("\n        "+n._s(t)+"\n      ")])}),0)]):n._e(),n._v(" "),A("div",{staticClass:"zhongjian"}),n._v(" "),A("div",{staticClass:"search_hot search_history"},[A("div",{staticClass:"title"},[n._v("历史搜索"),A("img",{staticClass:"del_icon",attrs:{src:"/static/img/delete.png"},on:{click:n.deleteHistory}})]),n._v(" "),A("ul",{staticClass:"history_list"},n._l(n.history,function(t){return A("li",{on:{click:function(A){n.search(t)}}},[n._v("\n        "+n._s(t)+"\n      ")])}),0)])],1)};e._withStripped=!0;var i={render:e,staticRenderFns:[]},o=i;var c=!1;var l=function(n){c||A("i+tC")},r=A("VU/8")(a.a,o,!1,l,"data-v-7cb41050",null);r.options.__file="src/components/Search.vue";t.default=r.exports},AHJT:function(n,t,A){"use strict";(function(n){var a=A("mvHQ"),e=A.n(a),i=A("Jnm5"),o=A("c2Ch");t.a={name:"Search",components:{headSearch:i.a},data:function(){return{tabList:[{text:"商品",type:1},{text:"店铺",type:2}],current:1,hotList:[],history:[],keyword:""}},beforeMount:function(){this.getData()},mounted:function(){this.commonJs.changeColor()},methods:{getData:function(){var n=this;console.log(this.$route.query.type),Object(o._120)({type:this.$route.query.type}).then(function(t){n.$nextTick(function(){localStorage.getItem("search_history")&&(n.history=JSON.parse(localStorage.getItem("search_history"))),n.hotList=t.result})})},searchCate:function(t){n(".search_cate > li").removeAttr("style"),this.current=t.type,this.commonJs.changeColor(),this.getData()},search:function(n){if(console.log(n),this.keyword=n,-1==n.indexOf(" ")){if(""!=n)if(localStorage.getItem("search_history")){this.history=JSON.parse(localStorage.getItem("search_history"));for(var t=0;t<this.history.length;t++)this.history[t]==n&&this.history.splice(t,1);this.history.unshift(n),localStorage.setItem("search_history",e()(this.history))}else this.history=[n],localStorage.setItem("search_history",e()(this.history));1==this.$route.query.type?this.$router.push({name:"SearchGoodResult",query:{keyword:n}}):this.$router.push({name:"SearchShopResult",query:{keyword:n}})}else this.$Toast.toast("搜索内容不可为空")},deleteHistory:function(){localStorage.removeItem("search_history"),this.history=[]}}}}).call(t,A("7t+N"))},"i+tC":function(n,t,A){var a=A("yboS");"string"==typeof a&&(a=[[n.i,a,""]]),a.locals&&(n.exports=a.locals);A("rjj0")("97779c58",a,!1,{})},yboS:function(n,t,A){(n.exports=A("FZ+f")(!0)).push([n.i,"/*分类*/\n.cate_content[data-v-7cb41050] {\n  position: absolute;\n  width: 100%;\n  max-width: 720px;\n  height: 100%;\n  padding: 48px 0 55px;\n  background-color: #F6F6F6;\n}\n.cate_head[data-v-7cb41050] {\n  padding: 8px 3%;\n  width: 100%;\n  height: 48px;\n  background: #fff;\n}\n.cate_head .head[data-v-7cb41050] {\n  border-radius: 20px;\n  overflow: hidden;\n}\n.cate_head .head .search[data-v-7cb41050] {\n  background: #EDF0F3;\n  height: 32px;\n  display: block;\n  border-radius: 4px;\n  padding: 0 10px;\n  overflow: hidden;\n}\n.cate_head .head .search .icon[data-v-7cb41050] {\n  width: 16px;\n  margin-top: 7px;\n}\n.cate_head .head .search .tip[data-v-7cb41050] {\n  font-size: 13px;\n  line-height: 31px;\n  margin-left: 10px;\n  color: #b3b9c0;\n}\n.mes_icon[data-v-7cb41050] {\n  width: 26px;\n  margin-top: 4px;\n  margin-right: 2px;\n}\n.mes_num[data-v-7cb41050] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  color: #fff;\n  font-size: 12px;\n  line-height: 16px;\n  min-width: 16px;\n  padding: 0 3px;\n  border-radius: 10px;\n  text-align: center;\n}\n.cate_con[data-v-7cb41050] {\n  height: 100%;\n  width: 100%;\n  /*padding-bottom: 55px;*/\n  position: relative;\n}\n.cate_list[data-v-7cb41050] {\n  width: 30%;\n  height: 100%;\n  position: absolute;\n  overflow: auto;\n  left: 0;\n  top: 0;\n  overflow: auto;\n  background-color: #f6f6f6;\n}\n.cate_list ul li[data-v-7cb41050] {\n  background: #f6f6f6;\n  border-bottom: 1px solid white;\n  text-align: center;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 14px 8px;\n  position: relative;\n}\n.cate_list ul li .line[data-v-7cb41050] {\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.cate_list ul li span[data-v-7cb41050] {\n  display: block;\n  color: #202224;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.cate_list_con[data-v-7cb41050] {\n  height: 100%;\n  width: 70%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  overflow: auto;\n  padding: 0 3%;\n}\n.cate_list_con .main_con[data-v-7cb41050] {\n  height: auto;\n}\n.cate_list_con .enter[data-v-7cb41050] {\n  width: 94%;\n  font-size: 15px;\n  line-height: 40px;\n  border-radius: 5px;\n  text-align: center;\n  margin: 15px auto 0;\n}\n.cate_list_con .enter a[data-v-7cb41050] {\n  color: #fff;\n  display: block;\n}\n.cateList[data-v-7cb41050] {\n  padding: 10px 0;\n}\n.cateList[data-v-7cb41050]:last-child {\n  border-bottom: none;\n}\n.cateList .cate_title[data-v-7cb41050] {\n  font-size: 16px;\n  text-align: center;\n  line-height: 36px;\n  color: #202224;\n  position: relative;\n}\n.cateList .cate_title a[data-v-7cb41050] {\n  display: block;\n}\n.cateList .cate_title span[data-v-7cb41050] {\n  position: relative;\n  color: #202224;\n}\n.cateList .cate_title span[data-v-7cb41050]:before {\n  position: absolute;\n  content: '';\n  width: 28px;\n  height: 1px;\n  background: #D8D8D8;\n  left: -40px;\n  top: 50%;\n  margin-top: -0.5px;\n}\n.cateList .cate_title span[data-v-7cb41050]:after {\n  position: absolute;\n  content: '';\n  width: 28px;\n  height: 1px;\n  background: #D8D8D8;\n  right: -40px;\n  top: 50%;\n  margin-top: -0.5px;\n}\n.cateList .cate_title .more[data-v-7cb41050] {\n  width: 16px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -8px;\n}\n.cateList ul[data-v-7cb41050] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /*justify-content: space-around;*/\n  overflow: hidden;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.cateList ul li[data-v-7cb41050] {\n  width: 26%;\n  margin-right: 10%;\n  float: left;\n  margin-top: 10px;\n}\n.cateList ul li[data-v-7cb41050]:nth-child(3n) {\n  margin-right: 0;\n}\n.cateList ul li[data-v-7cb41050]:last-child {\n  margin-right: 0;\n}\n.cateList ul li .title[data-v-7cb41050] {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #202224;\n  text-align: center;\n}\n.cate_main_list ul[data-v-7cb41050] {\n  overflow: hidden;\n  padding: 0 3% 65px;\n  margin: 0 auto;\n  background: #f6f6f6;\n}\n.cate_main_list ul li[data-v-7cb41050] {\n  float: left;\n  width: 49%;\n  margin-left: 2%;\n  margin-top: 3%;\n  border-radius: 2px;\n  background: #fff;\n}\n.cate_main_list ul li[data-v-7cb41050]:nth-child(2n+1) {\n  margin-left: 0;\n  background: #fff;\n}\n.cate_main_list ul li a[data-v-7cb41050] {\n  display: block;\n}\n.cate_main_list ul li .text[data-v-7cb41050] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 10px;\n}\n.cate_main_list ul li .cate_pic[data-v-7cb41050] {\n  width: 40%;\n}\n.cate_main_list .cate_tit[data-v-7cb41050] {\n  width: 50%;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 14px;\n  line-height: 30px;\n  color: #202224;\n}\n.search_cate[data-v-7cb41050] {\n  overflow: hidden;\n  border-top: 1px solid #eee;\n}\n.search_cate li[data-v-7cb41050] {\n  float: left;\n  width: 50%;\n  text-align: center;\n  font-size: 13px;\n  line-height: 40px;\n  color: #202224;\n  position: relative;\n  border-bottom: 1px solid #eee;\n}\n.search_cate li[data-v-7cb41050]:first-child::after {\n  width: 1px;\n  height: 20px;\n  position: absolute;\n  content: '';\n  top: 50%;\n  margin-top: -10px;\n  right: 0;\n  background: #E4E4E4;\n}\n.search_cate li .line[data-v-7cb41050] {\n  width: 100%;\n  height: 2px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n.search_hot[data-v-7cb41050] {\n  padding-bottom: 15px;\n}\n.search_hot .title[data-v-7cb41050] {\n  font-size: 16px;\n  line-height: 48px;\n  padding: 0 3%;\n  position: relative;\n}\n.search_hot .hot_list[data-v-7cb41050] {\n  white-space: nowrap;\n  font-size: 0;\n  overflow: auto;\n  padding-right: 3%;\n}\n.search_hot .hot_list[data-v-7cb41050]::-webkit-scrollbar {\n  opacity: 0;\n  display: none;\n}\n.search_hot .hot_list li[data-v-7cb41050] {\n  /*display: inline-block;*/\n  /*margin-left: 3%;*/\n  font-size: 13px;\n  line-height: 30px;\n  padding: 0 10px;\n  background: #F3F3F3;\n  border-radius: 10px;\n}\n.search_hot .hot_list li a[data-v-7cb41050],\n.search_history .history_list li a[data-v-7cb41050] {\n  color: #202224;\n  display: block;\n  word-break: break-all;\n}\n.search_history[data-v-7cb41050] {\n  border-top: 1px solid #e8e8e8;\n}\n.history_list[data-v-7cb41050] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.history_list li[data-v-7cb41050] {\n  margin-left: 2%;\n  font-size: 13px;\n  line-height: 18px;\n  padding: 7px 13px;\n  background: #F3F3F3;\n  border-radius: 15px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-bottom: 10px;\n  max-width: 94%;\n}\n.del_icon[data-v-7cb41050] {\n  position: absolute;\n  right: 3%;\n  top: 50%;\n  margin-top: -8px;\n  width: 16px;\n}\n.cate_list ul li.active[data-v-7cb41050] {\n  background: white;\n}\n.zhongjian[data-v-7cb41050]{\n  width: 100%;\n  height: 8px;\n  background-color: #ececec;\n}\n","",{version:3,sources:["F:/小程序dome/zihaiedian/ishop/src/components/Search.vue"],names:[],mappings:"AAAA,MAAM;AACN;EACE,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;EACjB,aAAa;EACb,qBAAqB;EACrB,0BAA0B;CAC3B;AACD;EACE,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,iBAAiB;CAClB;AACD;EACE,oBAAoB;EACpB,iBAAiB;CAClB;AACD;EACE,oBAAoB;EACpB,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB;CAClB;AACD;EACE,YAAY;EACZ,gBAAgB;CACjB;AACD;EACE,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,eAAe;CAChB;AACD;EACE,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;CACnB;AACD;EACE,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,YAAY;EACZ,gBAAgB;EAChB,kBAAkB;EAClB,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,mBAAmB;CACpB;AACD;EACE,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,mBAAmB;CACpB;AACD;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,QAAQ;EACR,OAAO;EACP,eAAe;EACf,0BAA0B;CAC3B;AACD;EACE,oBAAoB;EACpB,+BAA+B;EAC/B,mBAAmB;EACnB,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;CACpB;AACD;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,OAAO;CACR;AACD;EACE,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,oBAAoB;CACrB;AACD;EACE,aAAa;EACb,WAAW;EACX,mBAAmB;EACnB,SAAS;EACT,OAAO;EACP,eAAe;EACf,cAAc;CACf;AACD;EACE,aAAa;CACd;AACD;EACE,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,oBAAoB;CACrB;AACD;EACE,YAAY;EACZ,eAAe;CAChB;AACD;EACE,gBAAgB;CACjB;AACD;EACE,oBAAoB;CACrB;AACD;EACE,gBAAgB;EAChB,mBAAmB;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",file:"Search.vue",sourcesContent:["/*分类*/\n.cate_content[data-v-7cb41050] {\n  position: absolute;\n  width: 100%;\n  max-width: 720px;\n  height: 100%;\n  padding: 48px 0 55px;\n  background-color: #F6F6F6;\n}\n.cate_head[data-v-7cb41050] {\n  padding: 8px 3%;\n  width: 100%;\n  height: 48px;\n  background: #fff;\n}\n.cate_head .head[data-v-7cb41050] {\n  border-radius: 20px;\n  overflow: hidden;\n}\n.cate_head .head .search[data-v-7cb41050] {\n  background: #EDF0F3;\n  height: 32px;\n  display: block;\n  border-radius: 4px;\n  padding: 0 10px;\n  overflow: hidden;\n}\n.cate_head .head .search .icon[data-v-7cb41050] {\n  width: 16px;\n  margin-top: 7px;\n}\n.cate_head .head .search .tip[data-v-7cb41050] {\n  font-size: 13px;\n  line-height: 31px;\n  margin-left: 10px;\n  color: #b3b9c0;\n}\n.mes_icon[data-v-7cb41050] {\n  width: 26px;\n  margin-top: 4px;\n  margin-right: 2px;\n}\n.mes_num[data-v-7cb41050] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  color: #fff;\n  font-size: 12px;\n  line-height: 16px;\n  min-width: 16px;\n  padding: 0 3px;\n  border-radius: 10px;\n  text-align: center;\n}\n.cate_con[data-v-7cb41050] {\n  height: 100%;\n  width: 100%;\n  /*padding-bottom: 55px;*/\n  position: relative;\n}\n.cate_list[data-v-7cb41050] {\n  width: 30%;\n  height: 100%;\n  position: absolute;\n  overflow: auto;\n  left: 0;\n  top: 0;\n  overflow: auto;\n  background-color: #f6f6f6;\n}\n.cate_list ul li[data-v-7cb41050] {\n  background: #f6f6f6;\n  border-bottom: 1px solid white;\n  text-align: center;\n  font-size: 14px;\n  line-height: 24px;\n  padding: 14px 8px;\n  position: relative;\n}\n.cate_list ul li .line[data-v-7cb41050] {\n  width: 2px;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.cate_list ul li span[data-v-7cb41050] {\n  display: block;\n  color: #202224;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.cate_list_con[data-v-7cb41050] {\n  height: 100%;\n  width: 70%;\n  position: absolute;\n  right: 0;\n  top: 0;\n  overflow: auto;\n  padding: 0 3%;\n}\n.cate_list_con .main_con[data-v-7cb41050] {\n  height: auto;\n}\n.cate_list_con .enter[data-v-7cb41050] {\n  width: 94%;\n  font-size: 15px;\n  line-height: 40px;\n  border-radius: 5px;\n  text-align: center;\n  margin: 15px auto 0;\n}\n.cate_list_con .enter a[data-v-7cb41050] {\n  color: #fff;\n  display: block;\n}\n.cateList[data-v-7cb41050] {\n  padding: 10px 0;\n}\n.cateList[data-v-7cb41050]:last-child {\n  border-bottom: none;\n}\n.cateList .cate_title[data-v-7cb41050] {\n  font-size: 16px;\n  text-align: center;\n  line-height: 36px;\n  color: #202224;\n  position: relative;\n}\n.cateList .cate_title a[data-v-7cb41050] {\n  display: block;\n}\n.cateList .cate_title span[data-v-7cb41050] {\n  position: relative;\n  color: #202224;\n}\n.cateList .cate_title span[data-v-7cb41050]:before {\n  position: absolute;\n  content: '';\n  width: 28px;\n  height: 1px;\n  background: #D8D8D8;\n  left: -40px;\n  top: 50%;\n  margin-top: -0.5px;\n}\n.cateList .cate_title span[data-v-7cb41050]:after {\n  position: absolute;\n  content: '';\n  width: 28px;\n  height: 1px;\n  background: #D8D8D8;\n  right: -40px;\n  top: 50%;\n  margin-top: -0.5px;\n}\n.cateList .cate_title .more[data-v-7cb41050] {\n  width: 16px;\n  position: absolute;\n  right: 0;\n  top: 50%;\n  margin-top: -8px;\n}\n.cateList ul[data-v-7cb41050] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  /*justify-content: space-around;*/\n  overflow: hidden;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.cateList ul li[data-v-7cb41050] {\n  width: 26%;\n  margin-right: 10%;\n  float: left;\n  margin-top: 10px;\n}\n.cateList ul li[data-v-7cb41050]:nth-child(3n) {\n  margin-right: 0;\n}\n.cateList ul li[data-v-7cb41050]:last-child {\n  margin-right: 0;\n}\n.cateList ul li .title[data-v-7cb41050] {\n  font-size: 13px;\n  line-height: 20px;\n  margin-top: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #202224;\n  text-align: center;\n}\n.cate_main_list ul[data-v-7cb41050] {\n  overflow: hidden;\n  padding: 0 3% 65px;\n  margin: 0 auto;\n  background: #f6f6f6;\n}\n.cate_main_list ul li[data-v-7cb41050] {\n  float: left;\n  width: 49%;\n  margin-left: 2%;\n  margin-top: 3%;\n  border-radius: 2px;\n  background: #fff;\n}\n.cate_main_list ul li[data-v-7cb41050]:nth-child(2n+1) {\n  margin-left: 0;\n  background: #fff;\n}\n.cate_main_list ul li a[data-v-7cb41050] {\n  display: block;\n}\n.cate_main_list ul li .text[data-v-7cb41050] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 10px;\n}\n.cate_main_list ul li .cate_pic[data-v-7cb41050] {\n  width: 40%;\n}\n.cate_main_list .cate_tit[data-v-7cb41050] {\n  width: 50%;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 14px;\n  line-height: 30px;\n  color: #202224;\n}\n.search_cate[data-v-7cb41050] {\n  overflow: hidden;\n  border-top: 1px solid #eee;\n}\n.search_cate li[data-v-7cb41050] {\n  float: left;\n  width: 50%;\n  text-align: center;\n  font-size: 13px;\n  line-height: 40px;\n  color: #202224;\n  position: relative;\n  border-bottom: 1px solid #eee;\n}\n.search_cate li[data-v-7cb41050]:first-child::after {\n  width: 1px;\n  height: 20px;\n  position: absolute;\n  content: '';\n  top: 50%;\n  margin-top: -10px;\n  right: 0;\n  background: #E4E4E4;\n}\n.search_cate li .line[data-v-7cb41050] {\n  width: 100%;\n  height: 2px;\n  position: absolute;\n  left: 0;\n  bottom: 0;\n}\n.search_hot[data-v-7cb41050] {\n  padding-bottom: 15px;\n}\n.search_hot .title[data-v-7cb41050] {\n  font-size: 16px;\n  line-height: 48px;\n  padding: 0 3%;\n  position: relative;\n}\n.search_hot .hot_list[data-v-7cb41050] {\n  white-space: nowrap;\n  font-size: 0;\n  overflow: auto;\n  padding-right: 3%;\n}\n.search_hot .hot_list[data-v-7cb41050]::-webkit-scrollbar {\n  opacity: 0;\n  display: none;\n}\n.search_hot .hot_list li[data-v-7cb41050] {\n  /*display: inline-block;*/\n  /*margin-left: 3%;*/\n  font-size: 13px;\n  line-height: 30px;\n  padding: 0 10px;\n  background: #F3F3F3;\n  border-radius: 10px;\n}\n.search_hot .hot_list li a[data-v-7cb41050],\n.search_history .history_list li a[data-v-7cb41050] {\n  color: #202224;\n  display: block;\n  word-break: break-all;\n}\n.search_history[data-v-7cb41050] {\n  border-top: 1px solid #e8e8e8;\n}\n.history_list[data-v-7cb41050] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n.history_list li[data-v-7cb41050] {\n  margin-left: 2%;\n  font-size: 13px;\n  line-height: 18px;\n  padding: 7px 13px;\n  background: #F3F3F3;\n  border-radius: 15px;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n  margin-bottom: 10px;\n  max-width: 94%;\n}\n.del_icon[data-v-7cb41050] {\n  position: absolute;\n  right: 3%;\n  top: 50%;\n  margin-top: -8px;\n  width: 16px;\n}\n.cate_list ul li.active[data-v-7cb41050] {\n  background: white;\n}\n.zhongjian[data-v-7cb41050]{\n  width: 100%;\n  height: 8px;\n  background-color: #ececec;\n}\n"],sourceRoot:""}])}});