(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{1085:
/*!*********************************************************!*\
  !*** ./src/pages/admin/manage/SourceEdit/CacheForm.vue ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module exports are unknown */function(e,t,a){"use strict";a.r(t);var n=a(/*! ./CacheForm.vue?vue&type=template&id=570dcbcb&scoped=true& */1152),i=a(/*! ./CacheForm.vue?vue&type=script&lang=js& */866);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a(/*! ./CacheForm.vue?vue&type=style&index=0&id=570dcbcb&lang=scss&scoped=true& */1086);var r=a(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */1),c=Object(r.a)(i.default,n.a,n.b,!1,null,"570dcbcb",null);t.default=c.exports},1086:
/*!*******************************************************************************************************************!*\
  !*** ./src/pages/admin/manage/SourceEdit/CacheForm.vue?vue&type=style&index=0&id=570dcbcb&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */function(e,t,a){"use strict";var n=a(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CacheForm.vue?vue&type=style&index=0&id=570dcbcb&lang=scss&scoped=true& */868);a.n(n).a},1087:
/*!*******************************************************************************************************************!*\
  !*** ./src/pages/admin/manage/SourceEdit/CacheEdit.vue?vue&type=style&index=0&id=58d75051&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module exports are unknown */function(e,t,a){"use strict";var n=a(/*! -!../../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/lib!../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CacheEdit.vue?vue&type=style&index=0&id=58d75051&lang=scss&scoped=true& */869);a.n(n).a},1122:
/*!****************************************************************************************************************!*\
  !*** ./src/pages/admin/manage/SourceEdit/CacheEdit.vue?vue&type=template&id=58d75051&scoped=true& + 1 modules ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cache-edit"},[a("div",{staticClass:"cache-content"},[e._l(e.list,(function(t,n){return a("cache-form",{key:n,attrs:{value:t},on:{updateCache:e.updateCache,deleteCache:e.deleteCache}})})),e._v(" "),0===e.list.length?a("div",{staticClass:"add-cache",on:{click:e.onCreateCache}},[e._v(e._s(e.i18n.addCache))]):e._e()],2),e._v(" "),a("div",{staticClass:"operate-area"},[a("router-link",{staticClass:"bk-button bk-default",attrs:{to:"/admin/manage/source_edit/package_edit/"}},[e._v(e._s(e.i18n.prevStep))]),e._v(" "),a("bk-button",{staticClass:"save-btn",attrs:{theme:"success",loading:e.pending},on:{click:e.onSaveSetting}},[e._v("\n            "+e._s(e.i18n.save)+"\n        ")]),e._v(" "),a("router-link",{staticClass:"bk-button bk-default",attrs:{to:"/admin/manage/source_manage/"}},[e._v(e._s(e.i18n.cancel))])],1)])},i=[];a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}))},1152:
/*!****************************************************************************************************************!*\
  !*** ./src/pages/admin/manage/SourceEdit/CacheForm.vue?vue&type=template&id=570dcbcb&scoped=true& + 1 modules ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/*! exports used: render, staticRenderFns */function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"cache-form"},[a("bk-button",{staticClass:"delete-btn",attrs:{theme:"default",size:"small"},on:{click:e.onDeleteCache}},[e._v("\n        "+e._s(e.i18n.delete)+"\n    ")]),e._v(" "),a("table",{staticClass:"form-table"},[a("tbody",[a("tr",[a("th",[a("div",{staticClass:"form-label required"},[a("label",[e._v(e._s(e.i18n.name))])])]),e._v(" "),a("td",{staticClass:"value"},[a("div",{staticClass:"form-content"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"},{name:"validate",rawName:"v-validate",value:e.nameRule,expression:"nameRule"}],staticClass:"cache-name",class:{"error-border":e.errors.first("cacheName")},attrs:{type:"text",name:"cacheName",disabled:e.isEditing},domProps:{value:e.name},on:{blur:e.updateValue,input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),a("i",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips.top",value:e.errors.first("cacheName"),expression:" errors.first('cacheName')",modifiers:{top:!0}}],staticClass:"common-icon-info common-error-tip"})])])]),e._v(" "),a("tr",[a("th",[a("div",{staticClass:"form-label required"},[a("label",[e._v(e._s(e.i18n.type))])])]),e._v(" "),a("td",{staticClass:"value"},[a("div",{staticClass:"form-content"},[a("bk-select",{staticClass:"bk-select-inline",attrs:{"popover-width":260,disabled:e.isEditing,searchable:!0},on:{selected:e.onTypeSelect},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}},e._l(e.list,(function(e,t){return a("bk-option",{key:t,attrs:{id:e.id,name:e.name}})})),1)],1)])]),e._v(" "),a("tr",[a("th",[a("div",{staticClass:"form-label"},[a("label",[e._v(e._s(e.i18n.desc))])])]),e._v(" "),a("td",{staticClass:"value"},[a("div",{staticClass:"form-content"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.desc,expression:"desc"}],staticClass:"cache-desc",attrs:{rows:"4"},domProps:{value:e.desc},on:{blur:e.updateValue,input:function(t){t.target.composing||(e.desc=t.target.value)}}})])])]),e._v(" "),a("tr",[a("th",[a("div",{staticClass:"form-label"},[a("label",[e._v(e._s(e.i18n.detail))])])]),e._v(" "),a("td",{staticClass:"value"},[a("table",{staticClass:"detail-table"},[a("tbody",e._l(e.detailFields,(function(t){return a("tr",{key:t.id},[a("th",[e._v(e._s(t.name))]),e._v(" "),a("td",{staticClass:"td-with-input",class:{"error-border":e.errors.first("detailValue"+t.id)}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.details[t.id],expression:"details[field.id]"},{name:"validate",rawName:"v-validate",value:e.valueRule,expression:"valueRule "}],staticClass:"table-input",attrs:{type:"text",name:"detailValue"+t.id,placeholder:t.placeholder},domProps:{value:e.details[t.id]},on:{blur:e.updateValue,input:function(a){a.target.composing||e.$set(e.details,t.id,a.target.value)}}}),e._v(" "),a("i",{directives:[{name:"bk-tooltips",rawName:"v-bk-tooltips.top",value:e.i18n.required,expression:"i18n.required",modifiers:{top:!0}}],staticClass:"common-icon-info common-error-tip"}),e._v(" "),a("span",{staticClass:"common-error-tip error-msg"},[e._v("\n                                        "+e._s(e.i18n.required)+"\n                                    ")])])])})),0)])])])])])],1)},i=[];a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}))},488:
/*!*********************************************************!*\
  !*** ./src/pages/admin/manage/SourceEdit/CacheEdit.vue ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module exports are unknown */function(e,t,a){"use strict";a.r(t);var n=a(/*! ./CacheEdit.vue?vue&type=template&id=58d75051&scoped=true& */1122),i=a(/*! ./CacheEdit.vue?vue&type=script&lang=js& */864);for(var s in i)"default"!==s&&function(e){a.d(t,e,(function(){return i[e]}))}(s);a(/*! ./CacheEdit.vue?vue&type=style&index=0&id=58d75051&lang=scss&scoped=true& */1087);var r=a(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */1),c=Object(r.a)(i.default,n.a,n.b,!1,null,"58d75051",null);t.default=c.exports},504:
/*!************************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/get-iterator.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports={default:a(/*! core-js/library/fn/get-iterator */516),__esModule:!0}},516:
/*!*********************************************************!*\
  !*** ./node_modules/core-js/library/fn/get-iterator.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){a(/*! ../modules/web.dom.iterable */140),a(/*! ../modules/es6.string.iterator */91),e.exports=a(/*! ../modules/core.get-iterator */517)},517:
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.get-iterator.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){var n=a(/*! ./_an-object */16),i=a(/*! ./core.get-iterator-method */141);e.exports=a(/*! ./_core */2).getIterator=function(e){var t=i(e);if("function"!=typeof t)throw TypeError(e+" is not iterable!");return n(t.call(e))}},530:
/*!*************************************************************!*\
  !*** ./node_modules/babel-runtime/helpers/slicedToArray.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){"use strict";t.__esModule=!0;var n=s(a(/*! ../core-js/is-iterable */555)),i=s(a(/*! ../core-js/get-iterator */504));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if(Array.isArray(e))return e;if((0,n.default)(Object(e)))return function(e,t){var a=[],n=!0,s=!1,r=void 0;try{for(var c,l=(0,i.default)(e);!(n=(c=l.next()).done)&&(a.push(c.value),!t||a.length!==t);n=!0);}catch(e){s=!0,r=e}finally{try{!n&&l.return&&l.return()}finally{if(s)throw r}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}},553:
/*!*********************************!*\
  !*** ./src/constants/manage.js ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=[{type:"git",name:gettext("GIT"),keys:{repo_address:{name:gettext("仓库链接"),placeholder:gettext("请输入 GIT 仓库地址，如 https://github.com/bk-sops/plugins_example.git")},repo_raw_address:{name:gettext("文件托管仓库链接"),placeholder:gettext("请输入仓库中文件的 Raw 链接的前缀，如 https://raw.githubusercontent.com/bk-sops/plugins_example/")},branch:{name:gettext("分支名"),placeholder:gettext("请输入分支名")}}},{type:"s3",name:gettext("S3"),keys:{service_address:{name:gettext("对象存储服务地址"),placeholder:gettext("请输入")},bucket:{name:gettext("Bucket"),placeholder:gettext("请输入")},access_key:{name:gettext("Access Key"),placeholder:gettext("请输入")},secret_key:{name:gettext("Secret Key"),placeholder:gettext("请输入")}}},{type:"fs",name:gettext("文件系统"),keys:{path:{name:gettext("服务器文件系统路径"),placeholder:gettext("请输入")}}}];t.SOURCE_TYPE=n},555:
/*!***********************************************************!*\
  !*** ./node_modules/babel-runtime/core-js/is-iterable.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){e.exports={default:a(/*! core-js/library/fn/is-iterable */556),__esModule:!0}},556:
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/is-iterable.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){a(/*! ../modules/web.dom.iterable */140),a(/*! ../modules/es6.string.iterator */91),e.exports=a(/*! ../modules/core.is-iterable */557)},557:
/*!******************************************************************!*\
  !*** ./node_modules/core-js/library/modules/core.is-iterable.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){var n=a(/*! ./_classof */142),i=a(/*! ./_wks */5)("iterator"),s=a(/*! ./_iterators */29);e.exports=a(/*! ./_core */2).isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||s.hasOwnProperty(n(t))}},864:
/*!**********************************************************************************!*\
  !*** ./src/pages/admin/manage/SourceEdit/CacheEdit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module exports are unknown */function(e,t,a){"use strict";a.r(t);var n=a(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CacheEdit.vue?vue&type=script&lang=js& */865),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t.default=i.a},865:
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/admin/manage/SourceEdit/CacheEdit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(a(/*! babel-runtime/core-js/promise */42));a(/*! @/utils/i18n.js */8);var i=r(a(/*! @/utils/tools.js */194)),s=r(a(/*! ./CacheForm.vue */1085));function r(e){return e&&e.__esModule?e:{default:e}}t.default={name:"CacheEdit",components:{CacheForm:s.default},props:{cacheList:{type:Array,default:function(){return[]}},pending:{type:Boolean,default:!1}},data:function(){return{list:i.default.deepClone(this.cacheList),i18n:{prevStep:gettext("上一步"),save:gettext("完成"),cancel:gettext("取消"),addCache:gettext("添加本地缓存")}}},computed:{isEditing:function(){return this.cacheList.length>0&&"number"==typeof this.cacheList[0].id}},watch:{cacheList:function(e){this.list=i.default.deepClone(e)}},methods:{onCreateCache:function(){this.list.push({id:void 0,name:"",type:"s3",desc:"",details:{access_key:"",bucket:"",secret_key:"",service_address:""}})},updateCache:function(e){var t=i.default.deepClone(e);this.list.splice(0,1,t),this.$emit("updateList","cacheList",this.list)},deleteCache:function(){this.list=[],this.$emit("updateList","cacheList",[])},onSaveSetting:function(){var e=this,t=this.$children.filter((function(e){return"CacheForm"===e.$options.name})).map((function(e){return e.validate()}));n.default.all(t).then((function(t){t.every((function(e){return e}))&&e.$emit("saveSetting")}))}}}},866:
/*!**********************************************************************************!*\
  !*** ./src/pages/admin/manage/SourceEdit/CacheForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module exports are unknown */function(e,t,a){"use strict";a.r(t);var n=a(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./CacheForm.vue?vue&type=script&lang=js& */867),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,(function(){return n[e]}))}(s);t.default=i.a},867:
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/admin/manage/SourceEdit/CacheForm.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e&&e.__esModule?e:{default:e}}(a(/*! babel-runtime/helpers/slicedToArray */530));a(/*! @/utils/i18n.js */8);var i=a(/*! @/constants/manage.js */553),s=a(/*! @/constants/index.js */195);t.default={name:"CacheForm",props:{value:{type:Object,default:function(){return{id:void 0,name:"",type:"s3",desc:"",details:{access_key:"",bucket:"",secret_key:"",service_address:""}}}}},data:function(){var e=this.getCacheTypeList(),t=this.value,a=t.id,i=t.name,r=t.type,c=t.desc,l=t.details,o=this.getCacheKeys("s3");return{id:a,name:i,type:r,desc:c,details:l,detailFields:(0,n.default)(o,1)[0],list:e,cacheValid:!1,nameRule:{required:!0,max:s.STRING_LENGTH.SOURCE_NAME_MAX_LENGTH,regex:s.PACKAGE_NAME_REG},valueRule:{required:!0},i18n:{delete:gettext("删除"),name:gettext("名称"),type:gettext("类型"),desc:gettext("描述"),detail:gettext("详细信息"),placeholder:gettext("请输入"),required:gettext("必填项")}}},computed:{isEditing:function(){return"number"==typeof this.value.id}},methods:{getCacheTypeList:function(){return i.SOURCE_TYPE.filter((function(e){return"git"!==e.type})).map((function(e){return{id:e.type,name:e.name}}))},getCacheKeys:function(e){var t=[],a={},n=i.SOURCE_TYPE.find((function(t){return t.type===e}));for(var s in n.keys)t.push({id:s,name:n.keys[s].name,placeholder:n.keys[s].placeholder}),a[s]="";return[t,a]},validate:function(){return this.$validator.validateAll().then((function(e){return e}))},updateValue:function(){var e={id:this.id,name:this.name,type:this.type,desc:this.desc,details:this.details};this.$emit("updateCache",e)},onTypeSelect:function(e){this.type=e;var t=this.getCacheKeys(e);this.detailFields=t[0],this.details=t[1],this.updateValue()},onDeleteCache:function(){this.$emit("deleteCache")}}}},868:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/admin/manage/SourceEdit/CacheForm.vue?vue&type=style&index=0&id=570dcbcb&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){},869:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/lib!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/admin/manage/SourceEdit/CacheEdit.vue?vue&type=style&index=0&id=58d75051&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,a){}}]);
//# sourceMappingURL=25.js.map