webpackJsonp([24],{"2Ad1":function(e,t){},FGDC:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("jeJb"),l={data:function(){return{currentPage:1,pagesize:20,totalSize:0,multipleSelection:[],headerStyle:{"text-align":"center"}}},created:function(){},methods:{handleSizeChange:function(e){this.pagesize=e,this.getData()},handleCurrentChange:function(e){this.currentPage=e,this.getData()},handleClose:function(){this.previewVisible=!1,this.uploadVisible=!1,this.lookVisible=!1},cateChange:function(e){console.log(e)},cateDataChange:function(e){},handleSelectionChange:function(e){console.log(e),this.multipleSelection=e;for(var t=[],a=0;a<this.multipleSelection.length;a++)t.push(this.multipleSelection[a].idStr);this.idsArr=t,console.log(this.idsArr)},handleInput:function(e){e.target.value=e.target.value.match(/^\d*(\.?\d{0,1})/g)[0]||null}}},s=a("TIfe"),r=this,i={name:"uploadImg",props:{uploadUrl:{type:String,required:!0},handleAvatarSuccess:{type:Function,required:!0},onUploadError:{type:Function,default:function(){r.alertMessage("error","上传图片失败，请重新上传")}},imgUrl:{type:String,required:!0}},computed:{uploadHeader:function(){return{Token:Object(s.c)()}}},alertMessage:function(e,t){this.$message({type:e,message:t})}},o={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"upload-img"},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.uploadHeader,"show-file-list":!1,"on-success":e.handleAvatarSuccess,"on-error":e.onUploadError}},[a("div",{staticClass:"upload-area"},[e.imgUrl?a("img",{staticClass:"avatar firstImg",attrs:{src:e.imgUrl}}):a("div",{staticClass:"noImgDisplay"},[e._v("\n        请点击上传按钮"),a("br"),e._v("上传图片\n      ")]),e._v(" "),e._t("default")],2)])],1)},staticRenderFns:[]};var c={name:"banner",components:{uploadImg:a("VU/8")(i,o,!1,function(e){a("fDmB")},"data-v-2b62ed42",null).exports},mixins:[l],data:function(){return{pageSize:10,tabledata:[],shelvesArr:[],shelvesData:"买手特权icon",businessData:"小象买手",type:"",bannerIndex:1,bannerIndexArr:[],crowdArr:[{label:"全部可见",value:1},{label:"买手可见",value:2},{label:"普通用户可见",value:3}],uploadUrl:"https://www.xiaoxiangyoupin.com/xxyp-manager/upload/uploadPic"}},created:function(){this.getTypeList()},methods:{getData:function(){var e=this,t={type:this.type,pageNum:this.currentPage,pageSize:this.pageSize};Object(n.b)(t).then(function(t){var a=t.dataList;e.tabledata=a,e.bannerIndexArr=a&&a.length&&a[0].numList,e.totalSize=t.totalSize})},btnType:function(e){var t="success";return 1===e&&(t="warning"),t},uploadImgDisplay:function(e){this.currentIndex=e},getTypeList:function(){var e=this;Object(n.c)({type:10}).then(function(t){e.shelvesArr=t.data,e.type=e.shelvesArr[0].type,e.showType=e.shelvesArr[0].showType,e.getData()})},saveStateDelete:function(){var e=this;this.$confirm("你确定要删除当前数据吗？","确认信息",{distinguishCancelAndClose:!0,confirmButtonText:"确定",cancelButtonText:"取消"}).then(function(){e.deleteConfirm()}).catch(function(t){e.deleteCancel(t)})},addStateDelete:function(){this.alertMessage("error","当前数据不存在，请先保存！")},demove:function(e,t){this.row=t,this.saveStateDelete()},deleteConfirm:function(){var e=this;Object(n.a)({bannerId:this.row.bannerId}).then(function(){e.getData(),e.$message({type:"success",message:"删除成功!"})})},deleteCancel:function(e){this.$message({type:"info",message:"取消删除"})},save:function(e,t,a){var l=this;2===a&&(1===t.status?t.status=-1:t.status=1),""!==t.name.trim()&&""!==t.imgUrl.trim()&&""!==t.gotoUrl.trim()&&""!==String(t.bannerIndex).trim()?(t.showType=this.showType,Object(n.f)({bannerDTOs:[t]}).then(function(){l.getData(),l.alertMessage("success","修改成功")})):this.alertMessage("warning","请填写完整数据")},alertMessage:function(e,t){this.$message({type:e,message:t})},searchF:function(){this.getData()},addData:function(){this.tabledata.splice(0,0,{name:"",bannerId:"",colour:"",crowd:1,gotoUrl:"",status:1,type:this.type,bannerIndex:"",bannerType:this.showType,imgUrl:""})},changePositionName:function(e){console.log(e);var t=this.shelvesArr.filter(function(t){return t.typeName===e})[0];this.type=t.type,console.log(this.type)},changeVal:function(e){},handleAvatarSuccess:function(e){this.tabledata[this.currentIndex].imgUrl=e.data,this.alertMessage("success","图片上传成功")},getOldVal:function(e){var t=this.tabledata[e];this.oldSort=t.bannerIndex,this.bannerId=t.id}}},u={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"xiaoxiang-wrapper xiaoxiang-wrapper-2"},[a("div",{staticClass:"header"},[a("el-form",{staticClass:"pd-15",attrs:{inline:!0}},[a("el-form-item",{attrs:{label:"所属业务"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.businessData,callback:function(t){e.businessData=t},expression:"businessData"}},[a("el-option",{attrs:{label:"小象买手",value:"小象买手"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"位置名称"}},[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changePositionName},model:{value:e.shelvesData,callback:function(t){e.shelvesData=t},expression:"shelvesData"}},e._l(e.shelvesArr,function(e){return a("el-option",{key:e.typeName,attrs:{label:e.typeName,value:e.typeName}})}))],1),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.searchF}},[e._v("搜索")]),e._v(" "),a("el-button",{attrs:{type:"success",icon:"el-icon-plus"},on:{click:e.addData}},[e._v("新增")])],1)],1),e._v(" "),a("el-table",{staticClass:"lists",attrs:{border:"",data:e.tabledata,"empty-text":"暂无数据"}},[a("el-table-column",{attrs:{type:"index",label:"序号",align:"center",width:"200"}}),e._v(" "),a("el-table-column",{attrs:{prop:"name",label:"icon名称",width:"180",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"icon名称",clearable:""},model:{value:t.row.name,callback:function(a){e.$set(t.row,"name",a)},expression:"scope.row.name"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"imgUrl",label:"icon图片",width:"240",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[a("uploadImg",{attrs:{"upload-url":e.uploadUrl,"handle-avatar-success":e.handleAvatarSuccess,"img-url":t.row.imgUrl}},[a("el-button",{staticClass:"uploadButton",attrs:{size:"small",type:"primary"},on:{click:function(a){e.uploadImgDisplay(t.$index)}}},[e._v(e._s(t.row.imgUrl?"重新上传":"图片上传"))])],1)],1)]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"gotoUrl",label:"跳转页面/H5",width:"300",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{attrs:{placeholder:"跳转页面/H5",clearable:""},model:{value:t.row.gotoUrl,callback:function(a){e.$set(t.row,"gotoUrl",a)},expression:"scope.row.gotoUrl"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"*排列顺序",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-input",{model:{value:t.row.bannerIndex,callback:function(a){e.$set(t.row,"bannerIndex",a)},expression:"scope.row.bannerIndex"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"",label:"*可见对象",width:"200",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-select",{attrs:{placeholder:"请选择"},on:{change:e.changeVal},model:{value:t.row.crowd,callback:function(a){e.$set(t.row,"crowd",a)},expression:"scope.row.crowd"}},e._l(e.crowdArr,function(e){return a("el-option",{key:e.label,attrs:{label:e.label,value:e.value}})}))]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作","min-width":"240",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:function(a){e.save(t.$index,t.row,1)}}},[e._v("保存")]),e._v(" "),a("el-button",{attrs:{size:"medium",type:e.btnType(t.row.status)},on:{click:function(a){e.save(t.$index,t.row,2)}}},[e._v(e._s(1===t.row.status?"停用":"启用"))]),e._v(" "),a("el-button",{attrs:{size:"medium",type:"danger"},on:{click:function(a){e.demove(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),a("el-pagination",{staticClass:"pagination other-pagination",attrs:{"current-page":e.currentPage,"page-sizes":[20,30,40,50],"page-size":e.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalSize},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var d=a("VU/8")(c,u,!1,function(e){a("2Ad1"),a("QuBU")},"data-v-3937d7a1",null);t.default=d.exports},QuBU:function(e,t){},fDmB:function(e,t){}});