(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64ecabca","chunk-64ecabca","chunk-68b81eec"],{"11cb":function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-modal",{attrs:{width:900,keyboard:!1,closable:!1,centered:!0,maskClosable:!1,mask:!1,okText:"确认",cancelText:"取消"},on:{ok:e.ok,cancel:e.cancel},model:{value:e.show,callback:function(a){e.show=a},expression:"show"}},[t("a-tabs",[t("a-tab-pane",{key:"1",attrs:{tab:"方向性图标"}},[t("ul",e._l(e.icons.directionIcons,(function(a){return t("li",{key:a},[t("a-icon",{class:{active:e.activeIndex===a},attrs:{type:a,title:a},on:{click:function(t){return e.chooseIcon(a)}}})],1)})),0)]),t("a-tab-pane",{key:"2",attrs:{tab:"指示性图标"}},[t("ul",e._l(e.icons.suggestionIcons,(function(a){return t("li",{key:a},[t("a-icon",{class:{active:e.activeIndex===a},attrs:{type:a,title:a},on:{click:function(t){return e.chooseIcon(a)}}})],1)})),0)]),t("a-tab-pane",{key:"3",attrs:{tab:"编辑类图标"}},[t("ul",e._l(e.icons.editIcons,(function(a){return t("li",{key:a},[t("a-icon",{class:{active:e.activeIndex===a},attrs:{type:a,title:a},on:{click:function(t){return e.chooseIcon(a)}}})],1)})),0)]),t("a-tab-pane",{key:"4",attrs:{tab:"数据类图标"}},[t("ul",e._l(e.icons.dataIcons,(function(a){return t("li",{key:a},[t("a-icon",{class:{active:e.activeIndex===a},attrs:{type:a,title:a},on:{click:function(t){return e.chooseIcon(a)}}})],1)})),0)]),t("a-tab-pane",{key:"5",attrs:{tab:"网站通用图标"}},[t("ul",e._l(e.icons.webIcons,(function(a){return t("li",{key:a},[t("a-icon",{class:{active:e.activeIndex===a},attrs:{type:a,title:a},on:{click:function(t){return e.chooseIcon(a)}}})],1)})),0)]),t("a-tab-pane",{key:"6",attrs:{tab:"品牌和标识"}},[t("ul",e._l(e.icons.logoIcons,(function(a){return t("li",{key:a},[t("a-icon",{class:{active:e.activeIndex===a},attrs:{type:a,title:a},on:{click:function(t){return e.chooseIcon(a)}}})],1)})),0)])],1)],1)},r=[],l=["step-backward","step-forward","fast-backward","fast-forward","shrink","arrows-alt","down","up","left","right","caret-up","caret-down","caret-left","caret-right","up-circle","down-circle","left-circle","right-circle","up-circle-o","down-circle-o","right-circle-o","left-circle-o","double-right","double-left","vertical-left","vertical-right","forward","backward","rollback","enter","retweet","swap","swap-left","swap-right","arrow-up","arrow-down","arrow-left","arrow-right","play-circle","play-circle-o","up-square","down-square","left-square","right-square","up-square-o","down-square-o","left-square-o","right-square-o","login","logout","menu-fold","menu-unfold","border-bottom","border-horizontal","border-inner","border-left","border-right","border-top","border-verticle","pic-center","pic-left","pic-right","radius-bottomleft","radius-bottomright","radius-upleft","radius-upright","fullscreen","fullscreen-exit"],i=["question","question-circle","plus","plus-circle","pause","pause-circle","minus","minus-circle","plus-square","minus-square","info","info-circle","exclamation","exclamation-circle","close","close-circle","close-square","check","check-circle","check-square","clock-circle","warning","issues-close","stop"],n=["edit","form","copy","scissor","delete","snippets","diff","highlight","align-center","align-left","align-right","bg-colors","bold","italic","underline","strikethrough","redo","undo","zoom-in","zoom-out","font-colors","font-size","line-height","colum-height","dash","small-dash","sort-ascending","sort-descending","drag","ordered-list","radius-setting"],s=["area-chart","pie-chart","bar-chart","dot-chart","line-chart","radar-chart","heat-map","fall","rise","stock","box-plot","fund","sliders"],c=["lock","unlock","bars","book","calendar","cloud","cloud-download","code","copy","credit-card","delete","desktop","download","ellipsis","file","file-text","file-unknown","file-pdf","file-word","file-excel","file-jpg","file-ppt","file-markdown","file-add","folder","folder-open","folder-add","hdd","frown","meh","smile","inbox","laptop","appstore","link","mail","mobile","notification","paper-clip","picture","poweroff","reload","search","setting","share-alt","shopping-cart","tablet","tag","tags","to-top","upload","user","video-camera","home","loading","loading-3-quarters","cloud-upload","star","heart","environment","eye","camera","save","team","solution","phone","filter","exception","export","customer-service","qrcode","scan","like","dislike","message","pay-circle","calculator","pushpin","bulb","select","switcher","rocket","bell","disconnect","database","compass","barcode","hourglass","key","flag","layout","printer","sound","usb","skin","tool","sync","wifi","car","schedule","user-add","user-delete","usergroup-add","usergroup-delete","man","woman","shop","gift","idcard","medicine-box","red-envelope","coffee","copyright","trademark","safety","wallet","bank","trophy","contacts","global","shake","api","fork","dashboard","table","profile","alert","audit","branches","build","border","crown","experiment","fire","money-collect","property-safety","read","reconciliation","rest","security-scan","insurance","interation","safety-certificate","project","thunderbolt","block","cluster","deployment-unit","dollar","euro","pound","file-done","file-exclamation","file-protect","file-search","file-sync","gateway","gold","robot","shopping"],u=["android","apple","windows","ie","chrome","github","aliwangwang","dingding","weibo-square","weibo-circle","taobao-circle","html5","weibo","twitter","wechat","youtube","alipay-circle","taobao","skype","qq","medium-workmark","gitlab","medium","linkedin","google-plus","dropbox","facebook","codepen","amazon","google","codepen-circle","alipay","ant-design","aliyun","zhihu","slack","slack-square","behance","behance-square","dribbble","dribbble-square","instagram","yuque","alibaba","yahoo"],d={name:"Icons",props:{iconChooseVisible:{default:!1}},data:function(){return{icons:{directionIcons:l,suggestionIcons:i,editIcons:n,dataIcons:s,webIcons:c,logoIcons:u},choosedIcon:"",activeIndex:""}},computed:{show:{get:function(){return this.iconChooseVisible},set:function(){}}},methods:{reset:function(){this.activeIndex=""},chooseIcon:function(e){this.activeIndex=e,this.choosedIcon=e,this.$message.success("选中 ".concat(e))},ok:function(){""!==this.choosedIcon?(this.reset(),this.$emit("choose",this.choosedIcon)):this.$message.warning("尚未选择任何图标")},cancel:function(){this.reset(),this.$emit("close")}}},h=d,p=(t("3ab1"),t("2877")),m=Object(p["a"])(h,o,r,!1,null,"ea6fbdbc",null);a["default"]=m.exports},"3ab1":function(e,a,t){"use strict";var o=t("3bf4"),r=t.n(o);r.a},"3bf4":function(e,a,t){},"88bc":function(e,a,t){(function(a){var t=1/0,o=9007199254740991,r="[object Arguments]",l="[object Function]",i="[object GeneratorFunction]",n="[object Symbol]",s="object"==typeof a&&a&&a.Object===Object&&a,c="object"==typeof self&&self&&self.Object===Object&&self,u=s||c||Function("return this")();function d(e,a,t){switch(t.length){case 0:return e.call(a);case 1:return e.call(a,t[0]);case 2:return e.call(a,t[0],t[1]);case 3:return e.call(a,t[0],t[1],t[2])}return e.apply(a,t)}function h(e,a){var t=-1,o=e?e.length:0,r=Array(o);while(++t<o)r[t]=a(e[t],t,e);return r}function p(e,a){var t=-1,o=a.length,r=e.length;while(++t<o)e[r+t]=a[t];return e}var m=Object.prototype,b=m.hasOwnProperty,f=m.toString,w=u.Symbol,v=m.propertyIsEnumerable,g=w?w.isConcatSpreadable:void 0,y=Math.max;function C(e,a,t,o,r){var l=-1,i=e.length;t||(t=S),r||(r=[]);while(++l<i){var n=e[l];a>0&&t(n)?a>1?C(n,a-1,t,o,r):p(r,n):o||(r[r.length]=n)}return r}function k(e,a){return e=Object(e),x(e,a,(function(a,t){return t in e}))}function x(e,a,t){var o=-1,r=a.length,l={};while(++o<r){var i=a[o],n=e[i];t(n,i)&&(l[i]=n)}return l}function I(e,a){return a=y(void 0===a?e.length-1:a,0),function(){var t=arguments,o=-1,r=y(t.length-a,0),l=Array(r);while(++o<r)l[o]=t[a+o];o=-1;var i=Array(a+1);while(++o<a)i[o]=t[o];return i[a]=l,d(e,this,i)}}function S(e){return q(e)||T(e)||!!(g&&e&&e[g])}function O(e){if("string"==typeof e||M(e))return e;var a=e+"";return"0"==a&&1/e==-t?"-0":a}function T(e){return j(e)&&b.call(e,"callee")&&(!v.call(e,"callee")||f.call(e)==r)}var q=Array.isArray;function N(e){return null!=e&&$(e.length)&&!_(e)}function j(e){return L(e)&&N(e)}function _(e){var a=E(e)?f.call(e):"";return a==l||a==i}function $(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=o}function E(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}function L(e){return!!e&&"object"==typeof e}function M(e){return"symbol"==typeof e||L(e)&&f.call(e)==n}var V=I((function(e,a){return null==e?{}:k(e,h(C(a,1),O))}));e.exports=V}).call(this,t("c8ba"))},b90e:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("a-drawer",{attrs:{title:e.title,width:e.drawerWidth,visible:e.visible,confirmLoading:e.confirmLoading,wrapStyle:{height:"calc(100% - 108px)",overflow:"auto",paddingBottom:"108px"}},on:{close:e.handleCancel}},[t("div",{style:{width:"100%",border:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff"}},[t("a-spin",{attrs:{spinning:e.confirmLoading}},[t("a-form",{attrs:{form:e.form}},[t("a-form-item",{attrs:{label:"菜单类型",labelCol:e.labelCol,wrapperCol:e.wrapperCol}},[t("a-radio-group",{directives:[{name:"decorator",rawName:"v-decorator",value:["menuType",{initialValue:e.localMenuType}],expression:"['menuType',{'initialValue':localMenuType}]"}],on:{change:e.onChangeMenuType}},[t("a-radio",{attrs:{value:0}},[e._v("一级菜单")]),t("a-radio",{attrs:{value:1}},[e._v("子菜单")]),t("a-radio",{attrs:{value:2}},[e._v("按钮/权限")])],1)],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:e.menuLabel,hasFeedback:""}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",e.validatorRules.name],expression:"[ 'name', validatorRules.name]"}],attrs:{placeholder:"请输入菜单名称",readOnly:e.disableSubmit}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:0!=e.localMenuType,expression:"localMenuType!=0"}],attrs:{label:"上级菜单",labelCol:e.labelCol,wrapperCol:e.wrapperCol,"validate-status":e.validateStatus,hasFeedback:!0,required:!0}},[t("span",{attrs:{slot:"help"},slot:"help"},[e._v(e._s("error"==e.validateStatus?"请选择上级菜单":"  "))]),t("a-tree-select",{staticStyle:{width:"100%"},attrs:{dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.treeData,placeholder:"请选择父级菜单",disabled:e.disableSubmit},on:{change:e.handleParentIdChange},model:{value:e.model.parentId,callback:function(a){e.$set(e.model,"parentId",a)},expression:"model.parentId"}})],1),t("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"菜单路径"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["url",e.validatorRules.url],expression:"[ 'url',validatorRules.url]"}],attrs:{placeholder:"请输入菜单路径",readOnly:e.disableSubmit}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"前端组件"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["component",e.validatorRules.component],expression:"[ 'component',validatorRules.component]"}],attrs:{placeholder:"请输入前端组件",readOnly:e.disableSubmit}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:0==e.localMenuType,expression:"localMenuType==0"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"默认跳转地址"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["redirect",{}],expression:"[ 'redirect',{}]"}],attrs:{placeholder:"请输入路由参数 redirect",readOnly:e.disableSubmit}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"授权标识"}},[t("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["perms",{}],expression:"[ 'perms', {}]"}],attrs:{placeholder:"多个用逗号分隔, 如: user:list,user:create",readOnly:e.disableSubmit}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"授权策略"}},[t("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["permsType",{}],expression:"['permsType', {}]"}],attrs:{placeholder:"请选择授权策略",type:"radio",triggerChange:!0,dictCode:"global_perms_type"}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!e.show,expression:"!show"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"状态"}},[t("j-dict-select-tag",{directives:[{name:"decorator",rawName:"v-decorator",value:["status",{}],expression:"['status', {}]"}],attrs:{placeholder:"请选择状态",type:"radio",triggerChange:!0,dictCode:"valid_status"}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"菜单图标"}},[t("a-input",{attrs:{placeholder:"点击右侧按钮选择图标",readOnly:e.disableSubmit},model:{value:e.model.icon,callback:function(a){e.$set(e.model,"icon",a)},expression:"model.icon"}},[t("a-icon",{attrs:{slot:"addonAfter",type:"setting"},on:{click:e.selectIcons},slot:"addonAfter"})],1)],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"排序"}},[t("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["sortNo",e.validatorRules.sortNo],expression:"[ 'sortNo',validatorRules.sortNo]"}],staticStyle:{width:"200px"},attrs:{placeholder:"请输入菜单排序",readOnly:e.disableSubmit}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"是否路由菜单"}},[t("a-switch",{attrs:{checkedChildren:"是",unCheckedChildren:"否"},model:{value:e.routeSwitch,callback:function(a){e.routeSwitch=a},expression:"routeSwitch"}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"隐藏路由"}},[t("a-switch",{attrs:{checkedChildren:"是",unCheckedChildren:"否"},model:{value:e.menuHidden,callback:function(a){e.menuHidden=a},expression:"menuHidden"}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"是否缓存路由"}},[t("a-switch",{attrs:{checkedChildren:"是",unCheckedChildren:"否"},model:{value:e.isKeepalive,callback:function(a){e.isKeepalive=a},expression:"isKeepalive"}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"聚合路由"}},[t("a-switch",{attrs:{checkedChildren:"是",unCheckedChildren:"否"},model:{value:e.alwaysShow,callback:function(a){e.alwaysShow=a},expression:"alwaysShow"}})],1),t("a-form-item",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"打开方式"}},[t("a-switch",{attrs:{checkedChildren:"外部",unCheckedChildren:"内部"},model:{value:e.internalOrExternal,callback:function(a){e.internalOrExternal=a},expression:"internalOrExternal"}})],1)],1),t("icons",{attrs:{iconChooseVisible:e.iconChooseVisible},on:{choose:e.handleIconChoose,close:e.handleIconCancel}})],1),t("a-row",{style:{textAlign:"right"}},[t("a-button",{style:{marginRight:"8px"},on:{click:e.handleCancel}},[e._v("\n        关闭\n      ")]),t("a-button",{attrs:{disabled:e.disableSubmit,type:"primary"},on:{click:e.handleOk}},[e._v("确定")])],1)],1)])},r=[],l=(t("3b2b"),t("4ec3")),i=t("11cb"),n=t("88bc"),s=t.n(n),c={name:"PermissionModal",components:{Icons:i["default"]},data:function(){return{drawerWidth:700,treeData:[],treeValue:"0-0-4",title:"操作",visible:!1,disableSubmit:!1,model:{},localMenuType:0,alwaysShow:!1,menuHidden:!1,routeSwitch:!0,internalOrExternal:!1,isKeepalive:!0,show:!0,menuLabel:"菜单名称",isRequrie:!0,labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),iconChooseVisible:!1,validateStatus:""}},computed:{validatorRules:function(){return{name:{rules:[{required:!0,message:"请输入菜单标题!"}]},component:{rules:[{required:this.show,message:"请输入前端组件!"}]},url:{rules:[{required:this.show,message:"请输入菜单路径!"}]},permsType:{rules:[{required:!0,message:"请输入授权策略!"}]},sortNo:{initialValue:1}}}},created:function(){this.initDictConfig()},methods:{loadTree:function(){var e=this;Object(l["J"])().then((function(a){if(a.success){console.log("----queryTreeList---"),console.log(a),e.treeData=[];for(var t=a.result.treeList,o=0;o<t.length;o++){var r=t[o];r.isLeaf=r.leaf,e.treeData.push(r)}}}))},add:function(){this.edit({status:"1",permsType:"1",route:!0})},edit:function(e){var a=this;this.resetScreenSize(),this.form.resetFields(),this.model=Object.assign({},e),console.log(e),this.alwaysShow=!!e.alwaysShow,this.menuHidden=!!e.hidden,null!=e.route&&(this.routeSwitch=!!e.route),null!=e.keepAlive?this.isKeepalive=!!e.keepAlive:this.isKeepalive=!1,null!=e.internalOrExternal?this.internalOrExternal=!!e.internalOrExternal:this.internalOrExternal=!1,this.show=2!=e.menuType,this.menuLabel=2==e.menuType?"按钮/权限":"菜单名称",this.model.parentId?this.localMenuType=1:this.localMenuType=0,this.visible=!0,this.loadTree();var t=s()(this.model,"name","perms","permsType","component","url","sortNo","menuType","status");this.$nextTick((function(){a.form.setFieldsValue(t)}))},close:function(){this.$emit("close"),this.disableSubmit=!1,this.visible=!1},handleOk:function(){var e=this,a=this;this.form.validateFields((function(t,o){if(!t){e.model.alwaysShow=e.alwaysShow,e.model.hidden=e.menuHidden,e.model.route=e.routeSwitch,e.model.keepAlive=e.isKeepalive,e.model.internalOrExternal=e.internalOrExternal;var r,i=Object.assign(e.model,o);if(!(1!=i.menuType&&2!=i.menuType||i.parentId))return a.validateStatus="error",void a.$message.error("请检查你填的类型以及信息是否正确！");a.validateStatus="success",a.confirmLoading=!0,console.log(i),r=e.model.id?Object(l["p"])(i):Object(l["c"])(i),r.then((function(e){e.success?(a.$message.success(e.message),a.$emit("ok")):a.$message.warning(e.message)})).finally((function(){a.confirmLoading=!1,a.close()}))}}))},handleCancel:function(){this.close()},validateNumber:function(e,a,t){!a||new RegExp(/^[0-9]*[1-9][0-9]*$/).test(a)?t():t("请输入正整数!")},onChangeMenuType:function(e){var a=this;this.localMenuType=e.target.value,2==e.target.value?(this.show=!1,this.menuLabel="按钮/权限"):(this.show=!0,this.menuLabel="菜单名称"),this.$nextTick((function(){a.form.validateFields(["url","component"],{force:!0})}))},selectIcons:function(){this.iconChooseVisible=!0},handleIconCancel:function(){this.iconChooseVisible=!1},handleIconChoose:function(e){console.log(e),this.model.icon=e,this.form.icon=e,this.iconChooseVisible=!1},resetScreenSize:function(){var e=document.body.clientWidth;this.drawerWidth=e<500?e:700},initDictConfig:function(){},handleParentIdChange:function(e){this.validateStatus=e?"success":"error"}}},u=c,d=t("2877"),h=Object(d["a"])(u,o,r,!1,null,"7a2ff295",null);a["default"]=h.exports}}]);