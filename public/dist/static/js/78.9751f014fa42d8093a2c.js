webpackJsonp([78],{hZKj:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("oedn"),s=a("TIfe"),i={name:"hotbrand",data:function(){return{uploadUrl:"https://www.xiaoxiangyoupin.com/xxyp-manager/upload/uploadPic",dataList:[],currentPage:1,pageSize:10,totalSize:0,curRowIndex:null,brandTitle:"",addbrand:"新增标题"}},created:function(){this.getHotBrandList(),this.getBrandTitle()},computed:{uploadHeader:function(){return{Token:Object(s.c)()}}},methods:{getHotBrandList:function(){var t=this,e={pageNum:t.currentPage,pageSize:t.pageSize,type:2};n.a.queryHotBrand(e).then(function(e){e.dataList.length,t.dataList=e.dataList,t.totalSize=e.totalSize}).catch()},getBrandTitle:function(){var t=this,e={pageNum:t.currentPage,pageSize:t.pageSize,type:1};n.a.queryHotBrand(e).then(function(e){t.brandTitleList=e.dataList,t.brandTitleList.length<=0?t.addbrand="新增标题":(t.brandTitle=t.brandTitleList[0].brandTitle,console.log(t.brandTitleList[0].brandTitle),t.addbrand="更新标题")}).catch()},addNewLine:function(){this.dataList.push({})},dosomething:function(t){console.log(t)},save:function(t){var e=this,a=t;a.type=2,t.id?n.a.updateHotBrand(a).then(function(t){t&&(e.$message({type:"success",message:t.message}),e.getHotBrandList())}).catch():n.a.addHotBrand(a).then(function(t){t&&(e.$message({type:"success",message:t.message}),e.getHotBrandList())}).catch()},updateTitle:function(){var t=this;if(t.brandTitleList.length>0){var e={type:1,brandTitle:t.brandTitle,id:t.brandTitleList[0].id};n.a.updateHotBrand(e).then(function(e){e&&(t.$message({type:"success",message:e.message}),t.getHotBrandList(),t.getBrandTitle())}).catch()}else{var a={type:1,brandTitle:t.brandTitle};n.a.addHotBrand(a).then(function(e){e&&(t.$message({type:"success",message:e.message}),t.getHotBrandList(),t.getBrandTitle())}).catch()}},enable:function(t){var e=this,a=1===t.status?0:1,s={id:t.id,status:a};n.a.enableHotBrand(s).then(function(t){t&&(e.$message({type:"success",message:t.message}),e.getHotBrandList())}).catch()},deleteLine:function(t,e){var a=this;if(t.id){var s={id:t.id,status:-1};n.a.enableHotBrand(s).then(function(t){t&&(a.$message({type:"success",message:t.message}),a.getHotBrandList())}).catch()}else a.dataList.splice(e,1)},handleAvatarSuccess:function(t){console.log(this.curRowIndex),this.dataList[this.curRowIndex].brandBg=t.data},handleAvatarSuccessLogo:function(t){this.dataList[this.curRowIndex].brandLogo=t.data},handleSizeChange:function(t){this.pageSize=t,this.getHotBrandList()},handleCurrentChange:function(t){this.currentPage=t,this.getHotBrandList()}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container",attrs:{id:"hotbrand"}},[a("section",[a("el-form",{staticClass:"demo-form-inline"},[a("el-form-item",{staticClass:"fr"},[a("el-button",{attrs:{type:"primary"},on:{click:t.addNewLine}},[t._v("新增品牌")])],1)],1)],1),t._v(" "),a("section",[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[a("el-form-item",[a("el-input",{staticStyle:{width:"300px"},model:{value:t.brandTitle,callback:function(e){t.brandTitle=e},expression:"brandTitle"}})],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.updateTitle}},[t._v(t._s(t.addbrand))])],1)],1)],1),t._v(" "),a("section",[a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",stripe:"",data:t.dataList}},[a("el-table-column",{attrs:{align:"center",prop:"brand",label:"品牌名称",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.brand,callback:function(a){t.$set(e.row,"brand",a)},expression:"scope.row.brand"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"brandName",label:"品牌中文名称",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.brandName,callback:function(a){t.$set(e.row,"brandName",a)},expression:"scope.row.brandName"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"name",label:"商品LOGO"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"vertical-align":"middle"},attrs:{width:"120px",src:e.row.brandLogo,alt:""}}),t._v(" "),a("el-upload",{staticClass:"upload-demo",staticStyle:{display:"inline"},attrs:{headers:t.uploadHeader,action:t.uploadUrl,"on-success":t.handleAvatarSuccessLogo}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){t.curRowIndex=e.$index}}},[t._v("重新上传")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"brandBg",label:"品牌背景图"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("img",{staticStyle:{"vertical-align":"middle"},attrs:{width:"120px",src:e.row.brandBg,alt:""}}),t._v(" "),a("el-upload",{staticClass:"upload-demo",staticStyle:{display:"inline"},attrs:{headers:t.uploadHeader,action:t.uploadUrl,"on-success":t.handleAvatarSuccess}},[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){t.curRowIndex=e.$index}}},[t._v("重新上传")])],1)]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"100",align:"center",prop:"sort",label:"排序"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.sort,callback:function(a){t.$set(e.row,"sort",a)},expression:"scope.row.sort"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"center",prop:"gotoUrl",label:"跳转参数"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-input",{model:{value:e.row.gotoUrl,callback:function(a){t.$set(e.row,"gotoUrl",a)},expression:"scope.row.gotoUrl"}})]}}])}),t._v(" "),a("el-table-column",{attrs:{align:"right",prop:"address",width:"220",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.save(e.row)}}},[t._v("保存")]),t._v(" "),1===e.row.status?a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){t.enable(e.row)}}},[t._v("禁用")]):t._e(),t._v(" "),0===e.row.status?a("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(a){t.enable(e.row)}}},[t._v("启用")]):t._e(),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(a){t.deleteLine(e.row,e.$index)}}},[t._v("删除")])]}}])})],1),t._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30,40,50],"page-size":t.pageSize,total:t.totalSize,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])},staticRenderFns:[]};var o=a("VU/8")(i,r,!1,function(t){a("xzWR")},"data-v-2724e818",null);e.default=o.exports},xzWR:function(t,e){}});