(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-89b4da64","chunk-513090ce","chunk-4e064c6c","chunk-2d0bce7e","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6"],{"0025":function(e,t,a){},2285:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,n){return a("a-col",{key:"dr"+n,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},s=[],i=(a("28a5"),a("290c")),r=a("da05"),o=a("0fea"),l={name:"RoleDataruleModal",components:{ACol:r["a"],ARow:i["a"]},data:function(){return{functionId:"",roleId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/role/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(o["getAction"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.roleId)).then((function(t){if(console.log(t),t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,roleId:this.roleId,dataRuleIds:this.dataruleChecked.join(",")};console.log("保存数据权限",t),Object(o["postAction"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t){this.onReset(),this.functionId=e,this.roleId=t,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.roleId="",this.dataruleList=[],this.dataruleChecked=[]}}},c=l,d=a("2877"),u=Object(d["a"])(c,n,s,!1,null,"5fa38486",null);t["default"]=u.exports},"290c":function(e,t,a){"use strict";var n=a("6042"),s=a.n(n),i=a("1098"),r=a.n(i),o=a("41b2"),l=a.n(o),c=a("4d91"),d=a("b488"),u=a("4df5"),h=null;if("undefined"!==typeof window){var m=function(e){return{media:e,matches:!1,addListener:function(){},removeListener:function(){}}};window.matchMedia=window.matchMedia||m,h=a("8e95")}var f=c["a"].shape({xs:c["a"].number,sm:c["a"].number,md:c["a"].number,lg:c["a"].number,xl:c["a"].number,xxl:c["a"].number}).loose,p={gutter:c["a"].oneOfType([c["a"].number,f]),type:c["a"].oneOf(["flex"]),align:c["a"].oneOf(["top","middle","bottom"]),justify:c["a"].oneOf(["start","end","center","space-around","space-between"]),prefixCls:c["a"].string},g=["xxl","xl","lg","md","sm","xs"],y={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"};t["a"]={name:"ARow",mixins:[d["a"]],props:l()({},p,{gutter:c["a"].oneOfType([c["a"].number,f]).def(0)}),provide:function(){return{rowContext:this}},inject:{configProvider:{default:function(){return u["a"]}}},data:function(){return{screens:{}}},mounted:function(){var e=this;this.$nextTick((function(){Object.keys(y).map((function(t){return h.register(y[t],{match:function(){"object"===r()(e.gutter)&&e.setState((function(e){return{screens:l()({},e.screens,s()({},t,!0))}}))},unmatch:function(){"object"===r()(e.gutter)&&e.setState((function(e){return{screens:l()({},e.screens,s()({},t,!1))}}))},destroy:function(){}})}))}))},beforeDestroy:function(){Object.keys(y).map((function(e){return h.unregister(y[e])}))},methods:{getGutter:function(){var e=this.gutter;if("object"===("undefined"===typeof e?"undefined":r()(e)))for(var t=0;t<g.length;t++){var a=g[t];if(this.screens[a]&&void 0!==e[a])return e[a]}return e}},render:function(){var e,t=arguments[0],a=this.type,n=this.justify,i=this.align,r=this.prefixCls,o=this.$slots,l=this.configProvider.getPrefixCls,c=l("row",r),d=this.getGutter(),u=(e={},s()(e,c,!a),s()(e,c+"-"+a,a),s()(e,c+"-"+a+"-"+n,a&&n),s()(e,c+"-"+a+"-"+i,a&&i),e),h=d>0?{marginLeft:d/-2+"px",marginRight:d/-2+"px"}:{};return t("div",{class:u,style:h},[o["default"]])}}},"2a70":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{staticStyle:{top:"5%",height:"85%","overflow-y":"hidden"},attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭",wrapClassName:"ant-modal-cust-warp"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"角色名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleName",e.validatorRules.roleName],expression:"[ 'roleName', validatorRules.roleName]"}],attrs:{placeholder:"请输入角色名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"角色编码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleCode",e.validatorRules.roleCode],expression:"[ 'roleCode', validatorRules.roleCode]"}],attrs:{placeholder:"请输入角色编码",disabled:e.roleDisabled}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述"}},[a("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",e.validatorRules.description],expression:"[ 'description', validatorRules.description ]"}],attrs:{rows:5,placeholder:"..."}})],1)],1)],1)],1)},s=[],i=a("4ec3"),r={name:"RoleModal",data:function(){return{title:"操作",visible:!1,roleDisabled:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{roleName:{rules:[{required:!0,message:"请输入角色名称!"},{min:2,max:30,message:"长度在 2 到 30 个字符",trigger:"blur"}]},roleCode:{rules:[{required:!0,message:"请输入角色名称!"},{min:0,max:64,message:"长度不超过 64 个字符",trigger:"blur"},{validator:this.validateRoleCode}]},description:{rules:[{min:0,max:126,message:"长度不超过 126 个字符",trigger:"blur"}]}}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.model.id?this.roleDisabled=!0:this.roleDisabled=!1,this.$nextTick((function(){t.form.setFieldsValue(pick(t.model,"roleName","description","roleCode"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,n){if(!a){t.confirmLoading=!0;var s,r=Object.assign(e.model,n);console.log(r),s=e.model.id?Object(i["q"])(r):Object(i["d"])(r),s.then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateRoleCode:function(e,t,a){if(/[\u4E00-\u9FA5]/g.test(t))a("角色编码不可输入汉字!");else{var n={tableName:"sys_role",fieldName:"role_code",fieldVal:t,dataId:this.model.id};Object(i["m"])(n).then((function(e){e.success?a():a(e.message)}))}}}},o=r,l=a("2877"),c=Object(l["a"])(o,n,s,!1,null,"0468b732",null);t["default"]=c.exports},"2dab":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-date-picker",{attrs:{disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},s=[],i={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(){return document.body}}},data:function(){var e=this.value;return{decorator:"",momVal:e?moment(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?moment(e,this.dateFormat):null}},methods:{moment:moment,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},r=i,o=a("2877"),l=Object(o["a"])(r,n,s,!1,null,null,null);t["default"]=l.exports},"4fa6":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{staticClass:"card-area",attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchQuery(t)}}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:8}},[a("a-form-item",{attrs:{label:"名称",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("a-input",{attrs:{placeholder:"请输入名称查询"},model:{value:e.queryParam.roleName,callback:function(t){e.$set(e.queryParam,"roleName",t)},expression:"queryParam.roleName"}})],1)],1),a("a-col",{attrs:{md:10,sm:12}},[a("a-form-item",{attrs:{label:"创建时间",labelCol:{span:5},wrapperCol:{span:18,offset:1}}},[a("j-date",{staticStyle:{width:"45%"},attrs:{showTime:!0,"date-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择开始时间"},model:{value:e.queryParam.createTime_begin,callback:function(t){e.$set(e.queryParam,"createTime_begin",t)},expression:"queryParam.createTime_begin"}}),a("span",{staticStyle:{width:"10px"}},[e._v("~")]),a("j-date",{staticStyle:{width:"45%"},attrs:{showTime:!0,"date-format":"YYYY-MM-DD HH:mm:ss",placeholder:"请选择结束时间"},model:{value:e.queryParam.createTime_end,callback:function(t){e.$set(e.queryParam,"createTime_end",t)},expression:"queryParam.createTime_end"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{attrs:{type:"primary"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator",staticStyle:{"margin-top":"5px"}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),a("a-button",{attrs:{type:"primary",icon:"download"},on:{click:function(t){return e.handleExportXls("角色信息")}}},[e._v("导出")]),a("a-upload",{attrs:{name:"file",showUploadList:!1,multiple:!1,headers:e.tokenHeader,action:e.importExcelUrl},on:{change:e.handleImportExcel}},[a("a-button",{attrs:{type:"primary",icon:"import"}},[e._v("导入")])],1),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v("\n        批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项  \n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,n){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(n)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(t){return e.handlePerssion(n.id)}}},[e._v("授权")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(n.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("role-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("user-role-modal",{ref:"modalUserRole"})],1)},s=[],i=a("2a70"),r=a("ee18"),o=a("b65a"),l=a("2dab"),c={name:"RoleList",mixins:[o["a"]],components:{RoleModal:i["default"],UserRoleModal:r["default"],JDate:l["default"]},data:function(){return{description:"角色管理页面",queryParam:{roleName:""},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"角色名称",align:"center",dataIndex:"roleName"},{title:"角色编码",align:"center",dataIndex:"roleCode"},{title:"备注",align:"center",dataIndex:"description"},{title:"创建时间",dataIndex:"createTime",align:"center",sorter:!0},{title:"更新时间",dataIndex:"updateTime",align:"center",sorter:!0},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],url:{list:"/sys/role/list",delete:"/sys/role/delete",deleteBatch:"/sys/role/deleteBatch",exportXlsUrl:"/sys/role/exportXls",importExcelUrl:"sys/role/importExcel"}}},computed:{importExcelUrl:function(){return"".concat(window._CONFIG["domianURL"],"/").concat(this.url.importExcelUrl)}},methods:{handlePerssion:function(e){this.$refs.modalUserRole.show(e)},onChangeDate:function(e,t){console.log(e,t)}}},d=c,u=(a("5a6a"),a("2877")),h=Object(u["a"])(d,n,s,!1,null,"3f3eaa00",null);t["default"]=h.exports},"5a6a":function(e,t,a){"use strict";var n=a("a132"),s=a.n(n);s.a},9410:function(e,t,a){"use strict";var n=a("0025"),s=a.n(n);s.a},a132:function(e,t,a){},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a("8e6e"),a("7f7f");var n=a("bd86"),s=(a("456d"),a("ac6a"),a("ca00")),i=a("0fea"),r=a("9fb0");function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={data:function(){return{tokenHeader:{"X-Access-Token":Vue.ls.get(r["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(console.log(" -- mixin created -- "),this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(i["getAction"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){console.log("--这是一个假的方法!")},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(s["filterObj"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(i["deleteAction"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(i["deleteAction"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=l({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),console.log("导出参数",a),Object(i["downFile"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var n=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),s=document.createElement("a");s.style.display="none",s.href=n,s.setAttribute("download",e+".xls"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(n)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if("uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,n=a.message,s=a.result,i=s.msg,r=s.fileUrl,o=s.fileName,l=window._CONFIG["domianURL"]+r;this.$warning({title:n,content:t("div",[t("span",[" ",i," "]),t("br"),t("span",[" 具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:o}},[" 点击下载 "])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}},ee18:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{height:"calc(100% - 55px)",overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:"650",placement:"right",closable:!0,visible:e.visible},on:{close:e.close}},[a("a-form",[a("a-form-item",{attrs:{label:"所拥有的权限"}},[a("a-tree",{attrs:{checkable:"",checkedKeys:e.checkedKeys,treeData:e.treeData,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeysss,checkStrictly:e.checkStrictly},on:{check:e.onCheck,expand:e.onExpand,select:e.onTreeNodeSelect},scopedSlots:e._u([{key:"hasDatarule",fn:function(t){var n=t.slotTitle,s=t.ruleFlag;return a("span",{},[e._v("\n          "+e._s(n)),s?a("a-icon",{staticStyle:{"margin-left":"5px",color:"red"},attrs:{type:"align-left"}}):e._e()],1)}}])})],1)],1),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:function(t){return e.switchCheckStrictly(1)}}},[e._v("父子关联")]),a("a-menu-item",{key:"2",on:{click:function(t){return e.switchCheckStrictly(2)}}},[e._v("取消关联")]),a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n        树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.close}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),a("a-button",{staticStyle:{"margin-right":"0.8rem"},attrs:{type:"primary",loading:e.loading,ghost:""},on:{click:function(t){return e.handleSubmit(!1)}}},[e._v("仅保存")]),a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleSubmit(!0)}}},[e._v("保存并关闭")])],1),a("role-datarule-modal",{ref:"datarule"})],1)},s=[],i=a("75fc"),r=a("4ec3"),o=a("2285"),l={name:"RoleModal",components:{RoleDataruleModal:o["default"]},data:function(){return{roleId:"",treeData:[],defaultCheckedKeys:[],checkedKeys:[],expandedKeysss:[],allTreeKeys:[],autoExpandParent:!0,checkStrictly:!0,title:"角色权限配置",visible:!1,loading:!1,selectedKeys:[]}},methods:{onTreeNodeSelect:function(e){e&&e.length>0&&(this.selectedKeys=e),this.$refs.datarule.show(this.selectedKeys[0],this.roleId)},onCheck:function(e){this.checkStrictly?this.checkedKeys=e.checked:this.checkedKeys=e},show:function(e){this.roleId=e,this.visible=!0},close:function(){this.reset(),this.$emit("close"),this.visible=!1},onExpand:function(e){this.expandedKeysss=e,this.autoExpandParent=!1},reset:function(){this.expandedKeysss=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.loading=!1},expandAll:function(){this.expandedKeysss=this.allTreeKeys},closeAll:function(){this.expandedKeysss=[]},checkALL:function(){this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},switchCheckStrictly:function(e){1==e?this.checkStrictly=!1:2==e&&(this.checkStrictly=!0)},handleCancel:function(){this.close()},handleSubmit:function(e){var t=this,a=this,n={roleId:a.roleId,permissionIds:a.checkedKeys.join(","),lastpermissionIds:a.defaultCheckedKeys.join(",")};a.loading=!0,console.log("请求参数：",n),Object(r["R"])(n).then((function(n){n.success?(a.$message.success(n.message),a.loading=!1,e&&a.close()):(a.$message.error(n.message),a.loading=!1,e&&a.close()),t.loadData()}))},loadData:function(){var e=this;Object(r["L"])().then((function(t){e.treeData=t.result.treeList,e.allTreeKeys=t.result.ids,Object(r["I"])({roleId:e.roleId}).then((function(t){e.checkedKeys=Object(i["a"])(t.result),e.defaultCheckedKeys=Object(i["a"])(t.result),e.expandedKeysss=e.allTreeKeys}))}))}},watch:{visible:function(){this.visible&&this.loadData()}}},c=l,d=(a("9410"),a("2877")),u=Object(d["a"])(c,n,s,!1,null,"4f6f2062",null);t["default"]=u.exports}}]);