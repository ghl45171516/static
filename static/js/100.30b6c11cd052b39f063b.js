webpackJsonp([100],{Dovf:function(t,n,e){(t.exports=e("FZ+f")(!0)).push([t.i,"\n.useCon[data-v-b7661be6]{\n  margin-top: 48px;\n}\n","",{version:3,sources:["F:/小程序dome/zihaiedian/ishop/src/components/UseCoupon.vue"],names:[],mappings:";AACA;EACE,iBAAiB;CAClB",file:"UseCoupon.vue",sourcesContent:["\n.useCon[data-v-b7661be6]{\n  margin-top: 48px;\n}\n"],sourceRoot:""}])},eqtx:function(t,n,e){var o=e("Dovf");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);e("rjj0")("ff84bc4a",o,!1,{})},mKa8:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("dyt9"),s=e("c2Ch"),i={name:"UseCoupon",components:{HeadTitle:o.a},data:function(){return{content:""}},mounted:function(){this.getData(),this.commonJs.changeColor()},methods:{getData:function(){var t=this;Object(s.M)({article_id:25}).then(function(n){t.content=n.content})}}},a=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"useCon"},[n("head-title",{attrs:{title:"使用说明"}}),this._v(" "),n("div",{staticClass:"description_con",domProps:{innerHTML:this._s(this.content)}})],1)};a._withStripped=!0;var c={render:a,staticRenderFns:[]},r=c;var u=!1;var p=e("VU/8")(i,r,!1,function(t){u||e("eqtx")},"data-v-b7661be6",null);p.options.__file="src/components/UseCoupon.vue";n.default=p.exports}});