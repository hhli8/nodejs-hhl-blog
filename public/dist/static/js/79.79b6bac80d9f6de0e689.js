webpackJsonp([79],{C88V:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("mvHQ"),i=n.n(a),o=n("NU8M"),s=n("TIfe"),l={name:"alipayicon",data:function(){return{queryparam:{modual:0},modualArr:[{label:"首页banner图",value:0},{label:"广告位1",value:1}],dataList:[],uploadUrl:"https://www.xiaoxiangyoupin.com/xxyp-manager/upload/uploadPic",pageSize:10,pageNum:1,currentPage:1,totalSize:0,curRowIndex:1}},computed:{uploadHeader:function(){return{Token:Object(s.c)()}}},created:function(){this.getIcon()},methods:{getIcon:function(){var e=this,t={pageNum:e.pageNum,pageSize:e.pageSize,showType:4,type:5};o.a.getbannerList(t).then(function(t){e.dataList=t.data.list,e.totalSize=t.data.total}).catch()},add:function(){this.dataList.unshift({showType:4,type:5,status:-1}),console.log(this.dataList)},updateLine:function(){},enableLine:function(e,t,n){var a=JSON.parse(i()(e));a.status=n,this.$set(this.dataList,t,a)},deleteLine:function(e,t){var n=this;e.id?n.$confirm("此操作将永久删除该文件, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){var t={id:e.id};o.a.deleteBanner(t).then(function(e){n.$message({type:"success",message:e.message}),n.getIcon()}).catch()}):n.dataList.splice(t,1)},release:function(){var e=this,t={};t.bannerDTOs=JSON.parse(i()(e.dataList)),o.a.releaseBanner(t).then(function(t){e.$message({type:"success",message:t.message}),e.getIcon()}).catch()},changeModual:function(){},upLoad:function(e,t,n){this.dataNow=e,this.currentRowIndex=t},handleAvatarSuccess:function(e){this.dataNow.imgUrl=e.data,this.$set(this.dataList,this.currentRowIndex,this.dataNow),this.$message({type:"success",message:"上传成功"})},handleCurrentChange:function(e){this.pageNum=e,this.getIcon()},handleSizeChange:function(e){this.pageSize=e,this.getIcon()}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[n("el-form-item",[n("el-button",{attrs:{type:"primary",icon:"el-icon-check"},on:{click:e.release}},[e._v("发布")]),e._v(" "),n("el-button",{attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.add}},[e._v("新增")])],1)],1),e._v(" "),n("section",[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.dataList,border:"",align:"center"}},[n("el-table-column",{attrs:{prop:"name",align:"center",label:"*分类名"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{model:{value:t.row.name,callback:function(n){e.$set(t.row,"name",n)},expression:"scope.row.name"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"bannerIndex",align:"center",label:"排列顺序"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{model:{value:t.row.bannerIndex,callback:function(n){e.$set(t.row,"bannerIndex",n)},expression:"scope.row.bannerIndex"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"imgUrl",align:"center",label:"轮播图片"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.row.imgUrl,fit:"contain"},on:{click:function(n){e.$store.dispatch("openImgPreview",{url:t.row.imgUrl})}}}),e._v(" "),n("el-upload",{staticClass:"upload-demo",attrs:{headers:e.uploadHeader,action:e.uploadUrl,"show-file-list":!1,"on-success":e.handleAvatarSuccess}},[n("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(n){e.upLoad(t.row,t.$index)}}},[e._v("重新上传")])],1)]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"gotoUrl",align:"center",label:"参数"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-input",{model:{value:t.row.gotoUrl,callback:function(n){e.$set(t.row,"gotoUrl",n)},expression:"scope.row.gotoUrl"}})]}}])}),e._v(" "),n("el-table-column",{attrs:{prop:"status",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.status?n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){e.enableLine(t.row,t.$index,-1)}}},[e._v("点击禁用")]):e._e(),e._v(" "),-1===t.row.status?n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){e.enableLine(t.row,t.$index,1)}}},[e._v("点击启用")]):e._e(),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){e.deleteLine(t.row,t.$index)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.totalSize>0,expression:"totalSize>0"}],staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"","current-page":e.currentPage,"page-sizes":[10,20,30,40,50],"page-size":e.pageSize,total:e.totalSize,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)],1)],1)},staticRenderFns:[]};var c=n("VU/8")(l,r,!1,function(e){n("TkN7")},null,null);t.default=c.exports},TkN7:function(e,t){}});