(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dbd701ce"],{"12c8":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{class:{abcdefg:!0},attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:24}},[a("a-col",{attrs:{md:7,sm:7}},[a("a-form-item",{attrs:{label:"事项"}},[a("a-select",{staticStyle:{width:"100%"},model:{value:e.queryParam.type,callback:function(t){e.$set(e.queryParam,"type",t)},expression:"queryParam.type"}},[a("a-select-option",{attrs:{value:"审批"}},[e._v("审批")]),a("a-select-option",{attrs:{value:"知会"}},[e._v("知会")])],1)],1)],1),a("a-col",{attrs:{md:7,sm:7}},[a("a-form-item",{attrs:{label:"业务"}},[a("a-select",{staticStyle:{width:"100%"},model:{value:e.queryParam.name,callback:function(t){e.$set(e.queryParam,"name",t)},expression:"queryParam.name"}},e._l(e.tableNameList,(function(t){return a("a-select-option",{key:t.id},[e._v(e._s(t.name))])})),1)],1)],1),a("a-col",{attrs:{md:7,sm:7}},[a("a-form-item",{attrs:{label:"主题"}},[a("a-input",{attrs:{placeholder:"请输入主题信息"},model:{value:e.queryParam.topic,callback:function(t){e.$set(e.queryParam,"topic",t)},expression:"queryParam.topic"}})],1)],1),a("a-col",{attrs:{md:7,sm:7}},[a("a-form-item",{attrs:{label:"时间"}},[a("a-range-picker",{attrs:{format:"YYYY-MM-DD"},model:{value:e.queryParam.time,callback:function(t){e.$set(e.queryParam,"time",t)},expression:"queryParam.time"}})],1)],1),a("a-col",{attrs:{md:7,sm:7}},[a("a-form-item",{attrs:{label:"流程发起人"}},[a("a-input",{attrs:{placeholder:"请输入流程发起人"},model:{value:e.queryParam.startman,callback:function(t){e.$set(e.queryParam,"startman",t)},expression:"queryParam.startman"}})],1)],1),a("a-col",{attrs:{md:7,sm:7}},[a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-button",{staticStyle:{"margin-left":"0px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)])],1)],1)],1),a("a-col",{attrs:{md:24,sm:24}},[[a("div",{staticStyle:{top:"50px"}},[a("a-spin",{staticStyle:{top:"50px"},attrs:{spinning:e.spinning}},[a("div",{staticClass:"spin-content"})])],1),a("a-table",{staticStyle:{"padding-top":"-10px","margin-top":"-10px"},attrs:{columns:e.columns,dataSource:e.dataWaitList,pagination:!0},scopedSlots:e._u([{key:"type",fn:function(t,r){return a("a",{},[a("a-menu-item",[a("a",{attrs:{"data-info":JSON.stringify(r)},on:{click:function(t){return e.handleDetailWF(r)}}},[a("span",{domProps:{innerHTML:e._s(r.type)}})])])],1)}},{key:"topic",fn:function(t,r){return a("a",{},[a("a-menu-item",[a("a",{staticStyle:{color:"#303030"},attrs:{"data-info":JSON.stringify(r)},on:{click:function(t){return e.handleDetailWF(r)}}},[a("span",{staticStyle:{color:"#303030"},domProps:{innerHTML:e._s(r.topic)}})])])],1)}},{key:"name",fn:function(t,r){return a("span",{},[a("a-tag",{key:r.name,attrs:{color:r.name.length>5?"geekblue":"green"},on:{click:function(t){return e.handleDetailWF(r)}}},[e._v(e._s(r.name.toUpperCase()))])],1)}},{key:"username",fn:function(t){return a("span",{},e._l(t,(function(t){return a("a-tag",{key:t,staticStyle:{"margin-top":"5px"},attrs:{color:"admin"===t?"volcano":t.length>5?"geekblue":"green"}},[e._v(e._s(t))])})),1)}},{key:"create_time",fn:function(t,r){return a("span",{},[a("a-tag",{key:r.create_time,attrs:{color:"red"}},[e._v(e._s(r.create_time))])],1)}}])})]],2)],1)},n=[],i=(a("96cf"),a("3b8d")),s=a("da05"),c=a("290c"),o=a("261e"),u=a("0fea"),l=a("5d2d"),m=(a("1157"),a("ca00")),p=a("c1df"),d=[{title:"办理事项",dataIndex:"type",key:"type",slots:{title:"type"},width:100,align:"center",scopedSlots:{customRender:"type"}},{title:"业务",width:100,align:"center",key:"name",dataIndex:"name",scopedSlots:{customRender:"name"}},{title:"主题",width:400,align:"left",key:"topic",dataIndex:"topic",scopedSlots:{customRender:"topic"}},{title:"操作人员",key:"username",width:150,align:"left",dataIndex:"username",scopedSlots:{customRender:"username"}},{title:"流程发起人",key:"proponents",width:150,align:"left",dataIndex:"proponents",scopedSlots:{customRender:"proponents"}},{title:"创建时间",width:100,align:"center",key:"create_time",dataIndex:"create_time",scopedSlots:{customRender:"create_time"}}],y={components:{ATextarea:o["a"],ARow:c["a"],ACol:s["b"]},name:"Printgzsld",props:{reBizCode:{type:String,default:""}},data:function(){return{columns:d,labelCol:{xs:{span:24},sm:{span:2}},wrapperCol:{xs:{span:24},sm:{span:8}},activeKey:1,dataWaitList:[],dataDoneList:[],tableNameList:[],queryParam:{},spinning:!1}},created:function(){this.loadData()},methods:{loadData:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=l["c"]("cur_user"),e.next=4,u["ib"]("v_table_name");case 4:if(a=e.sent,this.tableNameList=a,setTimeout((function(){}),100),this.queryParam=l["c"]("system_wait_list_user@".concat(t.username)),""!=this.queryParam&&null!=this.queryParam&&"{}"!=JSON.stringify(this.queryParam)&&'{"startman":""}'!=JSON.stringify(this.queryParam)){e.next=15;break}return this.queryParam={},e.next=13,this.getDate();case 13:e.next=19;break;case 15:return this.queryParam.time.length>0&&(this.queryParam.time[0]=m["i"](this.queryParam.time[0],"yyyy-MM-dd"),this.queryParam.time[1]=m["i"](this.queryParam.time[1],"yyyy-MM-dd"),this.queryParam.time=[p(this.queryParam.time[0],"YYYY-MM-DD"),p(this.queryParam.time[1],"YYYY-MM-DD")]),e.next=19,this.searchQuery();case 19:console.log("table name list :"+JSON.stringify(a));case 20:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),getDate:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(1!=this.activeKey&&2!=this.activeKey){e.next=15;break}if(t=l["c"]("cur_user"),a=t["username"],r=t["realname"],1!=this.activeKey){e.next=11;break}return e.next=8,u["cb"](a,r);case 8:this.dataWaitList=e.sent,e.next=15;break;case 11:if(2!=this.activeKey){e.next=15;break}return e.next=14,u["V"](a,r);case 14:this.dataDoneList=e.sent;case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleCancel:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.previewVisible=!1;case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handlePreview:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.previewImage=t.url||t.thumbUrl,this.previewVisible=!0;case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleChange:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t.fileList,this.fileList=a;case 2:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),handleDetailWF:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t){var a,r,n,i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=JSON.parse(JSON.stringify(t)),r=l["c"]("cur_user"),n=a["tname"],i="知会"==a["type"]?"notify":"workflow",s="/workflow/view?table_name=".concat(n,"&id=").concat(a.id,"&processLogID=").concat(a.pid,"&user=").concat(r.username,"&type=").concat(i),this.$router.push(s);case 6:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),searchQuery:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){var t,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=l["c"]("cur_user"),a=t["username"],e.next=4,u["db"](a,this.queryParam);case 4:this.dataWaitList=e.sent,l["d"]("system_wait_list_user@".concat(t.username),JSON.stringify(this.queryParam),3600),console.log("dataWaitList :"+JSON.stringify(this.dataWaitList));case 7:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),searchReset:function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:this.queryParam={};case 1:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()}},f=y,h=(a("e17e"),a("2877")),g=Object(h["a"])(f,r,n,!1,null,"59f9fc94",null);t["default"]=g.exports},ad41:function(e,t,a){},e17e:function(e,t,a){"use strict";var r=a("ad41"),n=a.n(r);n.a}}]);