(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7705c3a1"],{7502:function(t,e,a){"use strict";var r=a("82f2"),c=a.n(r);c.a},"82f2":function(t,e,a){},"9cbf":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search-content"},[a("router-view")],1)},c=[],s={name:"SearchLayout",data:function(){var t=this;return{tabs:{items:[{key:"1",title:"文章"},{key:"2",title:"项目"},{key:"3",title:"应用"}],active:function(){switch(t.$route.path){case"/list/search/article":return"1";case"/list/search/project":return"2";case"/list/search/application":return"3";default:return"1"}},callback:function(e){switch(e){case"1":t.$router.push("/list/search/article");break;case"2":t.$router.push("/list/search/project");break;case"3":t.$router.push("/list/search/application");break;default:t.$router.push("/workplace")}}},search:!0}},computed:{},methods:{}},i=s,n=(a("7502"),a("2877")),u=Object(n["a"])(i,r,c,!1,null,"204a1a1b",null);e["default"]=u.exports}}]);