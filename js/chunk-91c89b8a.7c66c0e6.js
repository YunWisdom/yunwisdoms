(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-91c89b8a"],{"0ae2":function(e,t,r){},"2dab":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-date-picker",{attrs:{disabled:e.disabled||e.readOnly,placeholder:e.placeholder,value:e.momVal,showTime:e.showTime,format:e.dateFormat,getCalendarContainer:e.getCalendarContainer},on:{change:e.handleDateChange}})},o=[],i={name:"JDate",props:{placeholder:{type:String,default:"",required:!1},value:{type:String,required:!1},dateFormat:{type:String,default:"YYYY-MM-DD",required:!1},triggerChange:{type:Boolean,required:!1,default:!1},readOnly:{type:Boolean,required:!1,default:!1},disabled:{type:Boolean,required:!1,default:!1},showTime:{type:Boolean,required:!1,default:!1},getCalendarContainer:{type:Function,default:function(){return document.body}}},data:function(){var e=this.value;return{decorator:"",momVal:e?moment(e,this.dateFormat):null}},watch:{value:function(e){this.momVal=e?moment(e,this.dateFormat):null}},methods:{moment:moment,handleDateChange:function(e,t){this.$emit("change",t)}},model:{prop:"value",event:"change"}},s=i,n=r("2877"),l=Object(n["a"])(s,a,o,!1,null,null,null);t["default"]=l.exports},"8a45":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("a-modal",{attrs:{title:e.title,width:1200,visible:e.visible,confirmLoading:e.confirmLoading},on:{ok:e.handleOk,cancel:e.handleCancel}},[r("a-spin",{attrs:{spinning:e.confirmLoading}},[r("a-form",{attrs:{form:e.form}},[r("a-row",{staticClass:"form-row",attrs:{gutter:16}},[r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单号"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderCode",{rules:[{required:!0,message:"请输入订单号!"}]}],expression:"['orderCode', {rules: [{ required: true, message: '请输入订单号!' }]}]"}],attrs:{placeholder:"请输入订单号"}})],1)],1),r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单类型"}},[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["ctype",{}],expression:"['ctype',{}]"}],attrs:{placeholder:"请输入订单类型"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("国内订单")]),r("a-select-option",{attrs:{value:"2"}},[e._v("国际订单")])],1)],1)],1),r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单日期"}},[r("a-date-picker",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderDate",{}],expression:"[ 'orderDate',{}]"}],attrs:{showTime:"",format:"YYYY-MM-DD HH:mm:ss"}})],1)],1)],1),r("a-row",{staticClass:"form-row",attrs:{gutter:16}},[r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单金额"}},[r("a-input-number",{directives:[{name:"decorator",rawName:"v-decorator",value:["orderMoney",{}],expression:"[ 'orderMoney', {}]"}],staticStyle:{width:"200px"}})],1)],1),r("a-col",{attrs:{lg:8}},[r("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"订单备注"}},[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["content",{}],expression:"['content', {}]"}],attrs:{placeholder:"请输入订单备注"}})],1)],1)],1),r("a-tabs",{attrs:{defaultActiveKey:"1"}},[r("a-tab-pane",{key:"1",attrs:{tab:"客户信息"}},[r("div",[r("a-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[r("a-col",{attrs:{span:5}},[e._v("客户名")]),r("a-col",{attrs:{span:5}},[e._v("性别")]),r("a-col",{attrs:{span:5}},[e._v("身份证号码")]),r("a-col",{attrs:{span:5}},[e._v("手机号")]),r("a-col",{attrs:{span:4}},[e._v("操作")])],1),e._l(e.orderMainModel.jeecgOrderCustomerList,(function(t,a){return r("a-row",{key:a,staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[r("a-col",{attrs:{span:5}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+a+"].name",{initialValue:t.name,rules:[{required:!0,message:"请输入用户名!"}]}],expression:"['jeecgOrderCustomerList['+index+'].name', {'initialValue':item.name,rules: [{ required: true, message: '请输入用户名!' }]}]"}],attrs:{placeholder:"客户名"}})],1)],1),r("a-col",{attrs:{span:5}},[r("a-form-item",[r("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+a+"].sex",{initialValue:t.sex}],expression:"['jeecgOrderCustomerList['+index+'].sex', {'initialValue':item.sex}]"}],attrs:{placeholder:"性别"}},[r("a-select-option",{attrs:{value:"1"}},[e._v("男")]),r("a-select-option",{attrs:{value:"2"}},[e._v("女")])],1)],1)],1),r("a-col",{attrs:{span:5}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+a+"].idcard",{initialValue:t.idcard,rules:[{pattern:"^\\d{6}(18|19|20)?\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\d|3[01])\\d{3}(\\d|[xX])$",message:"身份证号格式不对!"}]}],expression:"['jeecgOrderCustomerList['+index+'].idcard', {'initialValue':item.idcard,rules: [{ pattern: '^\\\\d{6}(18|19|20)?\\\\d{2}(0[1-9]|1[012])(0[1-9]|[12]\\\\d|3[01])\\\\d{3}(\\\\d|[xX])$', message: '身份证号格式不对!' }]}]"}],attrs:{placeholder:"身份证号"}})],1)],1),r("a-col",{attrs:{span:5}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderCustomerList["+a+"].telphone",{initialValue:t.telphone,rules:[{pattern:"^1(3|4|5|7|8)\\d{9}$",message:"手机号格式不对!"}]}],expression:"['jeecgOrderCustomerList['+index+'].telphone', {'initialValue':item.telphone,rules: [{ pattern: '^1(3|4|5|7|8)\\\\d{9}$', message: '手机号格式不对!' }]}]"}],attrs:{placeholder:"手机号"}})],1)],1),r("a-col",{attrs:{span:4}},[r("a-form-item",[r("a-button",{attrs:{icon:"plus"},on:{click:e.addRowCustom}}),e._v(" \n                  "),r("a-button",{attrs:{icon:"minus"},on:{click:function(t){return e.delRowCustom(a)}}})],1)],1)],1)}))],2)]),r("a-tab-pane",{key:"2",attrs:{tab:"机票信息",forceRender:""}},[r("div",[r("a-row",{staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[r("a-col",{attrs:{span:6}},[e._v("航班号")]),r("a-col",{attrs:{span:6}},[e._v("航班时间")]),r("a-col",{attrs:{span:6}},[e._v("操作")])],1),e._l(e.orderMainModel.jeecgOrderTicketList,(function(t,a){return r("a-row",{key:a,staticStyle:{"margin-bottom":"10px"},attrs:{type:"flex",gutter:16}},[r("a-col",{attrs:{span:6}},[r("a-form-item",[r("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderTicketList["+a+"].ticketCode",{initialValue:t.ticketCode,rules:[{required:!0,message:"请输入航班号!"}]}],expression:"['jeecgOrderTicketList['+index+'].ticketCode', {'initialValue':item.ticketCode,rules: [{ required: true, message: '请输入航班号!' }]}]"}],attrs:{placeholder:"航班号"}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-item",[r("j-date",{directives:[{name:"decorator",rawName:"v-decorator",value:["jeecgOrderTicketList["+a+"].tickectDate",{initialValue:t.tickectDate}],expression:"['jeecgOrderTicketList['+index+'].tickectDate', {'initialValue':item.tickectDate}]"}],attrs:{placeholder:"航班时间","trigger-change":!0}})],1)],1),r("a-col",{attrs:{span:6}},[r("a-form-item",[r("a-button",{attrs:{icon:"plus"},on:{click:e.addRowTicket}}),e._v(" \n                  "),r("a-button",{attrs:{icon:"minus"},on:{click:function(t){return e.delRowTicket(a)}}})],1)],1)],1)}))],2)])],1)],1)],1)],1)},o=[],i=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),s=r("0fea"),n=r("2dab");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(i["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={name:"JeecgOrderMainModal",components:{JDate:n["default"]},data:function(){return{title:"操作",visible:!1,orderMainModel:{jeecgOrderCustomerList:[{}],jeecgOrderTicketList:[{}]},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{},url:{add:"/test/jeecgOrderMain/add",edit:"/test/jeecgOrderMain/edit",orderCustomerList:"/test/jeecgOrderMain/queryOrderCustomerListByMainId",orderTicketList:"/test/jeecgOrderMain/queryOrderTicketListByMainId"}}},created:function(){},methods:{add:function(){this.edit({})},edit:function(e){var t=this;if(this.form.resetFields(),this.orderMainModel=Object.assign({},e),this.orderMainModel.jeecgOrderCustomerList=[{}],this.orderMainModel.jeecgOrderTicketList=[{}],console.log(this.orderMainModel.id),this.orderMainModel.id){var r={id:this.orderMainModel.id};Object(s["getAction"])(this.url.orderCustomerList,r).then((function(e){e.success&&(t.orderMainModel.jeecgOrderCustomerList=e.result,t.$forceUpdate())})),Object(s["getAction"])(this.url.orderTicketList,r).then((function(e){e.success&&(t.orderMainModel.jeecgOrderTicketList=e.result,t.$forceUpdate())}))}this.visible=!0,this.$nextTick((function(){t.form.setFieldsValue(pick(t.orderMainModel,"orderCode","ctype","orderMoney","content")),t.form.setFieldsValue({orderDate:t.orderMainModel.orderDate?moment(t.orderMainModel.orderDate):null})})),console.log(this.orderMainModel)},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(r,a){if(!r){t.confirmLoading=!0;var o="",i="";e.orderMainModel.id?(o+=e.url.edit,i="put"):(o+=e.url.add,i="post");var n=Object.assign(e.orderMainModel,a);n.orderDate=n.orderDate?n.orderDate.format("YYYY-MM-DD HH:mm:ss"):null;var l=d({},n,{jeecgOrderCustomerList:n.jeecgOrderCustomerList,jeecgOrderTicketList:n.jeecgOrderTicketList});console.log(l),Object(s["httpAction"])(o,l,i).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},addRowCustom:function(){this.orderMainModel.jeecgOrderCustomerList.push({}),this.$forceUpdate()},delRowCustom:function(e){console.log(e),this.orderMainModel.jeecgOrderCustomerList.splice(e,1),this.$forceUpdate()},addRowTicket:function(){this.orderMainModel.jeecgOrderTicketList.push({}),console.log(this.orderMainModel.jeecgOrderTicketList),this.$forceUpdate()},delRowTicket:function(e){console.log(e),this.orderMainModel.jeecgOrderTicketList.splice(e,1),this.$forceUpdate()}}},u=c,m=(r("e8d3"),r("2877")),p=Object(m["a"])(u,a,o,!1,null,"f7d1e05c",null);t["default"]=p.exports},e8d3:function(e,t,r){"use strict";var a=r("0ae2"),o=r.n(a);o.a}}]);