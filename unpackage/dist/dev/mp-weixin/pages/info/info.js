require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{15:function(e,t,n){"use strict";var o=u(n(2)),s=u(n(16));function u(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(s.default))},16:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(18),s=n.n(o),u=n(19),i=!1;var r=function(e){i||n(17)},a=n(0)(s.a,u.a,r,null,null);a.options.__file="C:\\Users\\Mr.黎\\Documents\\HBuilderProjects\\zhihu\\pages\\info\\info.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] info.vue: functional components are not supported with templates, they should use render functions."),t.default=a.exports},17:function(e,t){},18:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{title:"",tcss:""}},onLoad:function(t){var n=this;console.log(t),e.request({url:"http://news-at.zhihu.com/api/4/news/"+t.newsid,method:"GET",data:{},success:function(e){n.title=e.data.body,n.tcss=e.data.css},fail:function(){},complete:function(){}})}}}).call(t,n(3).default)},19:function(e,t,n){"use strict";var o=function(){var e=this.$createElement,t=this._self._c||e;return t("view",[t("rich-text",{staticClass:"richText",attrs:{nodes:this.title,mpcomid:"k33-0"}})],1)};o._withStripped=!0;var s={render:o,staticRenderFns:[]};t.a=s}},[15]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/info/info.js.map