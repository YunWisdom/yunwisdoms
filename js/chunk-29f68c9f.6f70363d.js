(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-29f68c9f","chunk-5980f2f6","chunk-57bac616","chunk-6ada31d3","chunk-f6d02986","chunk-2f6039ec","chunk-2d0bdf09","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6"],{"0517":function(e,t,a){},"09a7":function(e,t,a){},1424:function(e,t,a){},"2dab":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-date-picker",{attrs:{disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},i=[],n=a("c1df"),s=a.n(n),o={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(){return document.body}}},data:function(){var e=this.value;return{decorator:"",momVal:e?s()(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?s()(e,this.dateFormat):null}},methods:{moment:s.a,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},l=o,d=a("2877"),c=Object(d["a"])(l,r,i,!1,null,null,null);t["default"]=c.exports},"39a5":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,okButtonProps:{props:{disabled:e.disableSubmit}},cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[e.editStatus?a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"客户姓名",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:"请输入客户姓名!"}]}],expression:"['name', {rules: [{ required: true, message: '请输入客户姓名!' }]}]"}],attrs:{placeholder:"请输入客户姓名",readOnly:e.disableSubmit}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"性别",hasFeedback:""}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["sex",{}],expression:"['sex', {}]"}],attrs:{placeholder:"请选择性别"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("男性")]),a("a-select-option",{attrs:{value:"2"}},[e._v("女性")])],1)],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"身份证号码",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["idcard",e.validatorRules.idcard],expression:"['idcard', validatorRules.idcard]"}],attrs:{placeholder:"请输入身份证号码",readOnly:e.disableSubmit}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"身份证扫描件",hasFeedback:""}},[a("j-image-upload",{attrs:{text:"上传",isMultiple:!0},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"联系方式",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["telphone",e.validatorRules.telphone],expression:"[ 'telphone', validatorRules.telphone]"}],attrs:{readOnly:e.disableSubmit}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号码",hidden:e.hiding,hasFeedback:""},model:{value:this.orderId,callback:function(t){e.$set(this,"orderId",t)},expression:"this.orderId"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderId",{}],expression:"[ 'orderId', {}]"}],attrs:{disabled:"disabled"}})],1)],1)],1):e._e()],1)},i=[],n=(a("3b2b"),a("0fea")),s=a("88bc"),o=a.n(s),l=a("8bbf"),d=a.n(l),c=a("9fb0"),u=a("e610"),m={name:"JeecgOrderCustomerModal",components:{JImageUpload:u["default"]},data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},columns:[{title:"客户名",align:"center",dataIndex:"name"},{title:"性别",align:"center",dataIndex:"sex"},{title:"身份证号码",align:"center",dataIndex:"idcard"},{title:"身份证扫描件",align:"center",dataIndex:"idcardPic"},{title:"电话",dataIndex:"telphone",align:"center"},{title:"订单号码",dataIndex:"orderId",align:"center"},{title:"创建人",dataIndex:"createBy",align:"center"},{title:"创建时间",dataIndex:"createTime",align:"center"},{title:"更新时间",dataIndex:"updateBy",align:"center"},{title:"更新人",dataIndex:"updateTime",align:"center"}],fileList:[],disableSubmit:!1,selectedRowKeys:[],orderId:"",hiding:!1,headers:{},picUrl:"",picArray:[],previewVisible:!1,previewImage:"",addStatus:!1,editStatus:!1,confirmLoading:!1,form:this.$form.createForm(this),url:{add:"/test/order/addCustomer",edit:"/test/order/editCustomer",fileUpload:window._CONFIG["domianURL"]+"/sys/common/upload",imgerver:window._CONFIG["staticDomainURL"],getOrderCustomerList:"/test/order/listOrderCustomerByMainId"},validatorRules:{telphone:{rules:[{validator:this.validateMobile}]},idcard:{rules:[{validator:this.validateIdCard}]}}}},computed:{uploadAction:function(){return this.url.fileUpload}},created:function(){var e=d.a.ls.get(c["a"]);this.headers={"X-Access-Token":e}},methods:{add:function(e){this.hiding=!0,e?(this.orderId=e,this.edit({orderId:e},"")):this.$message.warning("请选择一个客户信息")},detail:function(e){this.edit(e,"d")},edit:function(e,t){var a=this;"e"==t?(this.hiding=!1,this.disableSubmit=!1):"d"==t?(this.hiding=!1,this.disableSubmit=!0):(this.hiding=!0,this.disableSubmit=!1),this.form.resetFields(),this.orderId=e.orderId,this.model=Object.assign({},e),e.id?(this.hiding=!1,this.addStatus=!1,this.editStatus=!0,this.$nextTick((function(){a.form.setFieldsValue(o()(a.model,"id","name","sex","idcard","telphone","orderId","createBy","createTime","updateBy","updateTime"))})),setTimeout((function(){a.fileList=e.idcardPic}),5)):(this.addStatus=!1,this.editStatus=!0),this.visible=!0},close:function(){this.$emit("close"),this.visible=!1,this.picUrl="",this.fileList=[]},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var i="",s="";e.model.id?(i+=e.url.edit,s="put"):(i+=e.url.add,s="post");var o=Object.assign(e.model,r);console.log(o),o.orderId=e.orderId,o.idcardPic=e.fileList,Object(n["m"])(i,o,s).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateMobile:function(e,t,a){!t||new RegExp(/^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/).test(t)?a():a("您的手机号码格式不正确!")},validateIdCard:function(e,t,a){!t||new RegExp(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/).test(t)?a():a("您的身份证号码格式不正确!")},handleChange:function(e){if(this.fileList=e.fileList,"uploading"!==e.file.status&&"done"===e.file.status){var t=e.file.response;t.success||this.$message.warning(t.message)}},handlePicCancel:function(){this.previewVisible=!1,this.previewImage=""},handlePicView:function(e){this.previewImage=this.url.imgerver+"/"+e,this.previewVisible=!0},handlePreview:function(e){this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0},getIdCardView:function(e){return this.url.imgerver+"/"+e}}},h=m,f=(a("4903"),a("2877")),p=Object(f["a"])(h,r,i,!1,null,"1ac5eb52",null);t["default"]=p.exports},4903:function(e,t,a){"use strict";var r=a("9bff"),i=a.n(r);i.a},6620:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单号"}},[a("a-input",{attrs:{placeholder:"请输入订单号"},model:{value:e.queryParam.orderCode,callback:function(t){e.$set(e.queryParam,"orderCode",t)},expression:"queryParam.orderCode"}})],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("a-form-item",{attrs:{label:"订单类型"}},[a("a-select",{attrs:{placeholder:"请输入订单类型"},model:{value:e.queryParam.ctype,callback:function(t){e.$set(e.queryParam,"ctype",t)},expression:"queryParam.ctype"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),a("a-col",{attrs:{md:6,sm:24}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("div",{staticClass:"table-operator"},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",filterMultiple:"filterMultiple",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange,type:e.type},customRow:e.clickThenCheck},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)}}])})],1),a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"客户信息"}},[a("Jeecg-Order-Customer-List",{ref:"JeecgOrderCustomerList"})],1),a("a-tab-pane",{key:"2",attrs:{tab:"机票信息",forceRender:""}},[a("Jeecg-Order-Ticket-List",{ref:"JeecgOrderTicketList"})],1)],1),a("jeecgOrderDMain-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},i=[],n=(a("28a5"),a("dd9d")),s=a("d544"),o=a("8c22"),l=a("0fea"),d=a("39a5"),c=a("aa8e"),u=a("b65a"),m={name:"JeecgOrderDMainList",mixins:[u["a"]],components:{JeecgOrderTicketModal:c["default"],JeecgOrderCustomerModal:d["default"],JeecgOrderDMainModal:n["default"],JeecgOrderCustomerList:s["default"],JeecgOrderTicketList:o["default"]},data:function(){return{description:"订单管理页面",ipagination:{current:1,pageSize:5,pageSizeOptions:["5","10","20"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},columns:[{title:"#",dataIndex:"",key:"rowIndex",width:60,align:"center",customRender:function(e,t,a){return parseInt(a)+1}},{title:"订单号",align:"center",dataIndex:"orderCode"},{title:"订单类型",align:"center",dataIndex:"ctype",customRender:function(e){var t="";return"1"===e?t="国内订单":"2"===e&&(t="国际订单"),t}},{title:"订单日期",align:"center",dataIndex:"orderDate"},{title:"订单金额",align:"center",dataIndex:"orderMoney"},{title:"订单备注",align:"center",dataIndex:"content"},{title:"操作",dataIndex:"action",align:"center",scopedSlots:{customRender:"action"}}],type:"radio",url:{list:"/test/order/orderList",delete:"/test/order/delete",deleteBatch:"/test/order/deleteBatch"}}},methods:{clickThenCheck:function(e){var t=this;return{on:{click:function(){t.onSelectChange(e.id.split(","),[e])}}}},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t,this.$refs.JeecgOrderCustomerList.getOrderMain(this.selectedRowKeys[0]),this.$refs.JeecgOrderTicketList.getOrderMain(this.selectedRowKeys[0])},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[],this.$refs.JeecgOrderCustomerList.queryParam.mainId=null,this.$refs.JeecgOrderTicketList.queryParam.mainId=null,this.$refs.JeecgOrderCustomerList.loadData(),this.$refs.JeecgOrderTicketList.loadData(),this.$refs.JeecgOrderCustomerList.selectedRowKeys=[],this.$refs.JeecgOrderCustomerList.selectionRows=[],this.$refs.JeecgOrderTicketList.selectedRowKeys=[],this.$refs.JeecgOrderTicketList.selectionRows=[]},handleDelete:function(e){var t=this,a=this;Object(l["b"])(a.url.delete,{id:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),t.$refs.JeecgOrderCustomerList.loadData(),t.$refs.JeecgOrderTicketList.loadData()):a.$message.warning(e.message)}))},searchQuery:function(){this.selectedRowKeys=[],this.selectionRows=[],this.$refs.JeecgOrderCustomerList.queryParam.mainId=null,this.$refs.JeecgOrderTicketList.queryParam.mainId=null,this.$refs.JeecgOrderCustomerList.loadData(),this.$refs.JeecgOrderTicketList.loadData(),this.$refs.JeecgOrderCustomerList.selectedRowKeys=[],this.$refs.JeecgOrderCustomerList.selectionRows=[],this.$refs.JeecgOrderTicketList.selectedRowKeys=[],this.$refs.JeecgOrderTicketList.selectionRows=[],this.loadData()}}},h=m,f=(a("a468"),a("2877")),p=Object(f["a"])(h,r,i,!1,null,"1bacfb3c",null);t["default"]=p.exports},7853:function(e,t,a){},"88bc":function(e,t,a){(function(t){var a=1/0,r=9007199254740991,i="[object Arguments]",n="[object Function]",s="[object GeneratorFunction]",o="[object Symbol]",l="object"==typeof t&&t&&t.Object===Object&&t,d="object"==typeof self&&self&&self.Object===Object&&self,c=l||d||Function("return this")();function u(e,t,a){switch(a.length){case 0:return e.call(t);case 1:return e.call(t,a[0]);case 2:return e.call(t,a[0],a[1]);case 3:return e.call(t,a[0],a[1],a[2])}return e.apply(t,a)}function m(e,t){var a=-1,r=e?e.length:0,i=Array(r);while(++a<r)i[a]=t(e[a],a,e);return i}function h(e,t){var a=-1,r=t.length,i=e.length;while(++a<r)e[i+a]=t[a];return e}var f=Object.prototype,p=f.hasOwnProperty,g=f.toString,b=c.Symbol,v=f.propertyIsEnumerable,y=b?b.isConcatSpreadable:void 0,w=Math.max;function C(e,t,a,r,i){var n=-1,s=e.length;a||(a=S),i||(i=[]);while(++n<s){var o=e[n];t>0&&a(o)?t>1?C(o,t-1,a,r,i):h(i,o):r||(i[i.length]=o)}return i}function O(e,t){return e=Object(e),k(e,t,(function(t,a){return a in e}))}function k(e,t,a){var r=-1,i=t.length,n={};while(++r<i){var s=t[r],o=e[s];a(o,s)&&(n[s]=o)}return n}function x(e,t){return t=w(void 0===t?e.length-1:t,0),function(){var a=arguments,r=-1,i=w(a.length-t,0),n=Array(i);while(++r<i)n[r]=a[t+r];r=-1;var s=Array(t+1);while(++r<t)s[r]=a[r];return s[t]=n,u(e,this,s)}}function S(e){return L(e)||$(e)||!!(y&&e&&e[y])}function I(e){if("string"==typeof e||P(e))return e;var t=e+"";return"0"==t&&1/e==-a?"-0":t}function $(e){return j(e)&&p.call(e,"callee")&&(!v.call(e,"callee")||g.call(e)==i)}var L=Array.isArray;function D(e){return null!=e&&R(e.length)&&!_(e)}function j(e){return M(e)&&D(e)}function _(e){var t=F(e)?g.call(e):"";return t==n||t==s}function R(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=r}function F(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function M(e){return!!e&&"object"==typeof e}function P(e){return"symbol"==typeof e||M(e)&&g.call(e)==o}var T=x((function(e,t){return null==e?{}:O(e,m(C(t,1),I))}));e.exports=T}).call(this,a("c8ba"))},"8c22":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator",staticStyle:{margin:"-25px 0px 10px 2px"},attrs:{md:24,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(r)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("JeecgOrderTicket-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},i=[],n=a("aa8e"),s=a("b65a"),o=a("0fea"),l={name:"JeecgOrderTicketList",mixins:[s["a"]],components:{JeecgOrderTicketModal:n["default"]},data:function(){return{description:"机票信息",columns:[{title:"航班号",align:"center",dataIndex:"ticketCode"},{title:"航班时间",align:"center",dataIndex:"tickectDate"},{title:"订单号码",align:"center",dataIndex:"orderId"},{title:"创建人",align:"center",dataIndex:"createBy"},{title:"创建时间",align:"center",dataIndex:"createTime",sorter:!0},{title:"操作",key:"operation",align:"center",width:130,scopedSlots:{customRender:"action"}}],url:{list:"/test/order/listOrderTicketByMainId",delete:"/test/order/deleteTicket",deleteBatch:"/test/order/deleteBatchTicket"}}},methods:{loadData:function(e){var t=this;1===e&&(this.ipagination.current=1);var a=this.getQueryParams();Object(o["h"])(this.url.list,{orderId:a.mainId,pageNo:this.ipagination.current,pageSize:this.ipagination.pageSize}).then((function(e){e.success?(t.dataSource=e.result.records,t.ipagination.total=e.result.total):t.dataSource=null}))},getOrderMain:function(e){this.queryParam.mainId=e,this.loadData(1)},handleAdd:function(){this.$refs.modalForm.add(this.queryParam.mainId),this.$refs.modalForm.title="添加机票信息"}}},d=l,c=(a("facd"),a("2877")),u=Object(c["a"])(d,r,i,!1,null,"3e5b2200",null);t["default"]=u.exports},"9bff":function(e,t,a){},a468:function(e,t,a){"use strict";var r=a("09a7"),i=a.n(r);i.a},aa8e:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,okButtonProps:{props:{disabled:e.disableSubmit}},confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"航班号",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["ticketCode",{rules:[{required:!0,message:"请输入航班号!"}]}],expression:"['ticketCode', {rules:[{ required: true,message: '请输入航班号!'}]}]"}],attrs:{placeholder:"请输入航班号",readOnly:e.disableSubmit}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"航班时间",hasFeedback:""}},[a("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["tickectDate",{rules:[{required:!0,message:"请输入航班号!"}]}],expression:"['tickectDate',{rules:[{ required: true,message: '请输入航班号!'}]}]"}],attrs:{"trigger-change":!0}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号码",hidden:e.hiding,hasFeedback:""},model:{value:this.orderId,callback:function(t){e.$set(this,"orderId",t)},expression:"this.orderId"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderId",{}],expression:"[ 'orderId', {}]"}],attrs:{disabled:"disabled"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"创建人",hidden:e.hiding,hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["createBy",{}],expression:"[ 'createBy', {}]"}],attrs:{readOnly:e.disableSubmit}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"创建时间",hidden:e.hiding,hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["createTime",{}],expression:"[ 'createTime', {}]"}],attrs:{readOnly:e.disableSubmit}})],1)],1)],1)],1)},i=[],n=a("0fea"),s=a("88bc"),o=a.n(s),l=a("c1df"),d=a.n(l),c=a("2dab"),u={components:{JDate:c["default"]},name:"JeecgOrderTicketModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},moment:d.a,format:"YYYY-MM-DD HH:mm:ss",disableSubmit:!1,orderId:"",hiding:!1,confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/test/order/addTicket",edit:"/test/order/editTicket"}}},created:function(){},methods:{add:function(e){e?this.edit({orderId:e},""):this.$message.warning("请选择一条航班数据")},detail:function(e){this.edit(e,"d")},edit:function(e,t){var a=this;"e"==t?(this.hiding=!1,this.disableSubmit=!1):"d"==t?(this.hiding=!1,this.disableSubmit=!0):(this.hiding=!0,this.disableSubmit=!1),this.form.resetFields(),this.orderId=e.orderId,this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){a.form.setFieldsValue(o()(a.model,"ticketCode","tickectDate","orderId","createBy","createTime","updateBy","updateTime"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var i="",s="";e.model.id?(i+=e.url.edit,s="put"):(i+=e.url.add,s="post");var o=Object.assign(e.model,r);o.mainId=e.orderId,Object(n["m"])(i,o,s).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}},m=u,h=a("2877"),f=Object(h["a"])(m,r,i,!1,null,"6f93af9c",null);t["default"]=f.exports},b046:function(e,t,a){"use strict";var r=a("1424"),i=a.n(r);i.a},b65a:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));a("8e6e"),a("7f7f");var r=a("bd86"),i=(a("456d"),a("ac6a"),a("ca00")),n=a("0fea"),s=a("8bbf"),o=a.n(s),l=a("9fb0");function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){Object(r["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u={data:function(){return{tokenHeader:{"X-Access-Token":o.a.ls.get(l["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(console.log(" -- mixin created -- "),this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();this.loading=!0,Object(n["h"])(this.url.list,a).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){console.log("--这是一个假的方法!")},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(i["h"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var a=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){a.loading=!0,Object(n["b"])(a.url.deleteBatch,{ids:e}).then((function(e){e.success?(a.$message.success(e.message),a.loadData(),a.onClearSelected()):a.$message.warning(e.message)})).finally((function(){a.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(n["b"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,a){Object.keys(a).length>0&&(this.isorter.column=a.field,this.isorter.order="ascend"==a.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var a=c({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(a["selections"]=this.selectedRowKeys.join(",")),console.log("导出参数",a),Object(n["g"])(this.url.exportXlsUrl,a).then((function(a){if(a)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([a],{type:"application/vnd.ms-excel"}),e+".xls");else{var r=window.URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),i=document.createElement("a");i.style.display="none",i.href=r,i.setAttribute("download",e+".xls"),document.body.appendChild(i),i.click(),document.body.removeChild(i),window.URL.revokeObjectURL(r)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if("uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var a=e.file.response,r=a.message,i=a.result,n=i.msg,s=i.fileUrl,o=i.fileName,l=window._CONFIG["domianURL"]+s;this.$warning({title:r,content:t("div",[t("span",[n]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:l,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}},d18d:function(e,t,a){"use strict";var r=a("0517"),i=a.n(r);i.a},d544:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-operator",staticStyle:{margin:"-25px 0px 10px 0px"},attrs:{md:24,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新增")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("\n          删除\n        ")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作\n        "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v(e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{attrs:{href:"javascript:;"},on:{click:function(t){return e.handleDetail(r)}}},[e._v("详情")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("jeecgOrderCustomer-modal",{ref:"modalForm",on:{ok:e.modalFormOk}})],1)},i=[],n=a("39a5"),s=a("6620"),o=a("b65a"),l=a("0fea"),d={name:"JeecgOrderCustomerList",mixins:[o["a"]],components:{JeecgOrderDMainList:s["default"],JeecgOrderCustomerModal:n["default"]},data:function(){return{description:"订单客户信息",columns:[{title:"客户名",align:"center",width:100,dataIndex:"name",key:"name"},{title:"性别",align:"center",dataIndex:"sex",customRender:function(e){return 1==e?"男":2==e?"女":e}},{title:"身份证号码",align:"center",dataIndex:"idcard"},{title:"电话",dataIndex:"telphone",align:"center"},{title:"操作",key:"operation",align:"center",width:130,scopedSlots:{customRender:"action"}}],url:{list:"/test/order/listOrderCustomerByMainId",delete:"/test/order/deleteCustomer",deleteBatch:"/test/order/deleteBatchCustomer"}}},methods:{loadData:function(e){var t=this;1===e&&(this.ipagination.current=1);var a=this.getQueryParams();Object(l["h"])(this.url.list,{orderId:a.mainId,pageNo:this.ipagination.current,pageSize:this.ipagination.pageSize}).then((function(e){e.success?(t.dataSource=e.result.records,t.ipagination.total=e.result.total):t.dataSource=null}))},getOrderMain:function(e){this.queryParam.mainId=e,this.loadData(1)},handleAdd:function(){this.$refs.modalForm.add(this.queryParam.mainId),this.$refs.modalForm.title="添加客户信息"}}},c=d,u=(a("d18d"),a("2877")),m=Object(u["a"])(c,r,i,!1,null,"032e064e",null);t["default"]=m.exports},dd9d:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:1e3,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号",hasFeedback:""}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderCode",{rules:[{required:!0,message:"请输入订单号!"}]}],expression:"['orderCode', {rules: [{ required: true, message: '请输入订单号!' }]}]"}],attrs:{placeholder:"请输入订单号"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[a("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ctype",{}],expression:"['ctype',{}]"}],attrs:{placeholder:"请输入订单类型"}},[a("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),a("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[a("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderDate",{}],expression:"[ 'orderDate',{}]"}],attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[a("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderMoney",{}],expression:"[ 'orderMoney', {}]"}],staticStyle:{width:"200px"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{}],expression:"['content', {}]"}],attrs:{placeholder:"请输入订单备注"}})],1)],1)],1)],1)},i=[],n=(a("8e6e"),a("ac6a"),a("456d"),a("bd86")),s=a("0fea"),o=a("2dab"),l=a("88bc"),d=a.n(l),c=a("c1df"),u=a.n(c);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function h(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){Object(n["a"])(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var f={name:"JeecgOrderDMainModal",components:{JDate:o["default"]},data:function(){return{title:"操作",visible:!1,orderMainModel:{jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/test/order/add",edit:"/test/order/edit",orderCustomerList:"/test/order/listOrderCustomerByMainId",orderTicketList:"/test/order/listOrderTicketByMainId"}}},methods:{add:function(){this.edit({})},edit:function(e){var t=this;this.form.resetFields(),this.orderMainModel=Object.assign({},e),console.log(this.orderMainModel.id),this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(d()(t.orderMainModel,"orderCode","ctype","orderMoney","content")),t.form.setFieldsValue({orderDate:t.orderMainModel.orderDate?u()(t.orderMainModel.orderDate):null})})),console.log(this.orderMainModel)},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var i="",n="";e.orderMainModel.id?(i+=e.url.edit,n="put"):(i+=e.url.add,n="post");var o=Object.assign(e.orderMainModel,r);o.orderDate=o.orderDate?o.orderDate.format("YYYY-MM-DD HH:mm:ss"):null;var l=h({},o);console.log(l),Object(s["m"])(i,l,n).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()}}},p=f,g=(a("b046"),a("2877")),b=Object(g["a"])(p,r,i,!1,null,"3947da84",null);t["default"]=b.exports},e610:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-upload",{attrs:{name:"file",listType:"picture-card",multiple:e.isMultiple,action:e.uploadAction,headers:e.headers,data:{biz:e.bizPath},fileList:e.fileList,beforeUpload:e.beforeUpload,disabled:e.disabled,isMultiple:e.isMultiple,showUploadList:e.isMultiple},on:{change:e.handleChange,preview:e.handlePreview}},[!e.isMultiple&&e.picUrl?a("img",{staticStyle:{height:"104px","max-width":"300px"},attrs:{src:e.getAvatarView()}}):a("div",[a("a-icon",{attrs:{type:e.uploadLoading?"loading":"plus"}}),a("div",{staticClass:"ant-upload-text"},[e._v(e._s(e.text))])],1),a("a-modal",{attrs:{visible:e.previewVisible,footer:null},on:{cancel:function(t){return e.handleCancel()}}},[a("img",{staticStyle:{width:"100%"},attrs:{alt:"example",src:e.previewImage}})])],1)},i=[],n=(a("7f7f"),a("28a5"),a("a481"),a("3b2b"),a("8bbf")),s=a.n(n),o=a("9fb0"),l=a("0fea"),d=function(){return"-"+parseInt(1e4*Math.random()+1,10)},c=function(e){if(e.lastIndexOf("\\")>=0){var t=new RegExp("\\\\","g");e=e.replace(t,"/")}return e.substring(e.lastIndexOf("/")+1)},u={name:"JImageUpload",data:function(){return{uploadAction:window._CONFIG["domianURL"]+"/sys/common/upload",urlView:window._CONFIG["staticDomainURL"],uploadLoading:!1,picUrl:!1,headers:{},fileList:[],previewImage:"",previewVisible:!1}},props:{text:{type:String,required:!1,default:"上传"},bizPath:{type:String,required:!1,default:"temp"},value:{type:[String,Array],required:!1},disabled:{type:Boolean,required:!1,default:!1},isMultiple:{type:Boolean,required:!1,default:!1}},watch:{value:function(e){e instanceof Array?this.initFileList(e.join(",")):this.initFileList(e)}},created:function(){var e=s.a.ls.get(o["a"]);this.headers={"X-Access-Token":e}},methods:{initFileList:function(e){if(e&&0!=e.length){this.picUrl=!0;for(var t=[],a=e.split(","),r=0;r<a.length;r++){var i=Object(l["i"])(a[r],this.urlView,"http");t.push({uid:d(),name:c(a[r]),status:"done",url:i,response:{status:"history",message:a[r]}})}this.fileList=t}else this.fileList=[]},beforeUpload:function(e){var t=e.type;if(t.indexOf("image")<0)return this.$message.warning("请上传图片"),!1},handleChange:function(e){this.picUrl=!1;var t=e.fileList;"done"===e.file.status?e.file.response.success&&(this.picUrl=!0,t=t.map((function(e){return e.response&&(e.url=e.response.message),e}))):"error"===e.file.status?this.$message.error("".concat(e.file.name," 上传失败.")):"removed"===e.file.status&&this.handleDelete(e.file),this.fileList=t,"done"!==e.file.status&&"removed"!==e.file.status||this.handlePathChange()},handlePreview:function(e){this.previewImage=e.url||e.thumbUrl,this.previewVisible=!0},getAvatarView:function(){if(this.fileList.length>0){var e=this.fileList[0].url;return Object(l["i"])(e,this.urlView,"http")}},handlePathChange:function(){var e=this.fileList,t="";e&&0!=e.length||(t="");var a=[];if(this.isMultiple)for(var r=0;r<e.length;r++)a.push(e[r].response.message);else a.push(e[e.length-1].response.message);a.length>0&&(t=a.join(",")),this.$emit("change",t)},handleDelete:function(e){console.log(e)},handleCancel:function(){this.close(),this.previewVisible=!1},close:function(){}},model:{prop:"value",event:"change"}},m=u,h=a("2877"),f=Object(h["a"])(m,r,i,!1,null,"07822c64",null);t["default"]=f.exports},facd:function(e,t,a){"use strict";var r=a("7853"),i=a.n(r);i.a}}]);