webpackJsonp([59],{OKP2:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o("sVqv"),s=o("voil"),a=o("mtWM"),n=o.n(a),d=o("TIfe"),r={components:{Loading:s.a},data:function(){return{showLoading:!1,search:{name:"",nick:"",status:"",sort:""},status:[{value:"",label:"全部"},{value:1,label:"展示"},{value:0,label:"停用"}],sort:[{value:"",label:"全部"},{value:1,label:"展示顺序"},{value:2,label:"最后更新时间"},{value:3,label:"创建时间"}],tabledata:[],temp:{item:"",index:""},edSort:{show:!1,sort:""},edit:{id:"",show:!1,name:"",phone:"",wbAdr:"",nickname:"",headimg:"",winAdr:"",showsort:"",status:""},editgood:{show:!1,goodsCode:"",name:"",price:"",img:"",link:"",sort:"",id:"",celebrityId:"",status:""},currentPage:1,pagesize:10,totalSize:0,goodsEd:{id:"",show:!1,lists:[],curPage:1,pageSize:10,totalSize:0},fileListGood:[]}},created:function(){this.load()},computed:{uploadUrl:function(){return"https://www.xiaoxiangyoupin.com/xxyp-manager/upload/uploadPic"},importGoodsUrl:function(){return"https://www.xiaoxiangyoupin.com/xxyp-manager/weibo/v2/uploadCelebrityWinGoods"}},methods:{indexMethod:function(e){return e+1+(this.currentPage-1)*this.pagesize},load:function(){var e=this;Object(i.n)({name:this.search.name,nickname:this.search.nick,status:this.search.status,sort:this.search.sort,pageNum:this.pagesize,currentPage:this.currentPage}).then(function(t){e.totalSize=t.totalSize,e.tabledata=[],t.dataList&&t.dataList.length&&t.dataList.forEach(function(t){e.tabledata.push({id:t.id,status:t.status,name:t.realname?t.realname:"",phone:t.phone?t.phone:"",showname:t.name?t.name:"",nick:t.nickname?t.nickname:"",headimg:t.photo,href:t.winUrl,sort:t.orderNum,wbhref:t.blogAddr,goodcount:t.goodsCount,create_time:t.create_time,update_time:t.update_time})})})},doSearch:function(){this.load()},loadSort:function(){this.load()},editSort:function(e,t,o){"good"===o?(this.edSort={show:!0,sort:e.orderNum+""},this.temp={item:e,index:t,type:"good"}):(this.edSort={show:!0,sort:e.sort+""},this.temp={item:e,index:t})},saveEditSort:function(){var e=this.temp.item;"good"===this.temp.type?(this.editgood={show:!1,goodsCode:e.goodsCode,name:e.title,img:e.picture,link:e.url,sort:this.edSort.sort+"",id:e.id,celebrityId:e.celebrityId,status:e.status,index:this.temp.index},this.saveEditgood("setSort")):(this.edit={index:this.temp.index,id:e.id,show:!1,name:e.showname,phone:e.phone,wbAdr:e.wbhref,nickname:e.nick,headimg:e.headimg,winAdr:e.href,showsort:this.edSort.sort+"",status:e.status},this.saveEdit("setSort"))},changeConfig:function(e,t){this.edit={index:t,id:e.id,show:!1,name:e.showname,phone:e.phone,wbAdr:e.wbhref,nickname:e.nick,headimg:e.headimg,winAdr:e.href,showsort:e.sort+"",status:0===e.status?1:0},this.saveEdit("setUse")},changeConfigGood:function(e,t){this.editgood={show:!1,goodsCode:e.goodsCode,name:e.title,img:e.picture,link:e.url,sort:e.orderNum+"",id:e.id,celebrityId:e.celebrityId,status:0===e.status?1:0,index:t},this.saveEditgood("setUse")},setTop:function(e){var t=this;this.showLoading=!0,Object(i.D)({celebrityId:e.id,fieldValue:1,fieldName:"top"}).then(function(e){t.showLoading=!1,t.$message({message:"设置成功",type:"success"})}).catch(function(e){t.showLoading=!1,t.$message.error(e)})},messageConfirm:function(e,t,o){var i=this;this.$confirm(e,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t()}).catch(function(){i.$message({type:"info",message:o})})},setTopgood:function(e){var t=this;this.showLoading=!0,Object(i.c)({goodsId:e.id,fieldValue:1,fieldName:"top"}).then(function(e){t.showLoading=!1,t.$message({message:"置顶成功",type:"success"})}).catch(function(e){t.showLoading=!1,t.$message.error(e)})},showEdit:function(e){e.id?this.edit={id:e.id,show:!0,name:e.showname,phone:e.phone,wbAdr:e.wbhref,nickname:e.nick,headimg:e.headimg,winAdr:e.href,showsort:e.sort+"",status:e.status}:this.edit={id:"",show:!0,name:"",phone:"",wbAdr:"",nickname:"",headimg:"",winAdr:"",showsort:"",status:""}},saveEdit:function(e){var t=this;if(!this.edit.wbAdr)return this.$message.error("请输入微博地址"),!1;if(!this.edit.nickname)return this.$message.error("请输入微博昵称"),!1;this.showLoading=!0;var o={name:this.edit.name,blogAddr:this.edit.wbAdr,phone:this.edit.phone,nickname:this.edit.nickname,photo:this.edit.headimg,winUrl:this.edit.winAdr,orderNum:this.edit.showsort};this.edit.id?(o.id=this.edit.id,o.status=this.edit.status):o.status=0,Object(i.v)(o).then(function(o){t.edit.show=!1,t.showLoading=!1,"setUse"===e?(t.$message({message:"修改成功",type:"success"}),t.tabledata[t.edit.index].status=t.edit.status):"setSort"===e?(t.$message({message:"修改成功",type:"success"}),t.load(),t.edSort.show=!1):(t.edit.id?t.$message({message:"编辑成功",type:"success"}):t.$message({message:"添加成功",type:"success"}),t.load())}).catch(function(e){t.showLoading=!1,t.$message.error(e)})},handleSizeChange:function(e){this.pagesize=e,this.load()},handleCurrentChange:function(e){this.currentPage=e,this.load()},handleSizeChangeGood:function(e){this.goodsEd.pageSize=e,this.seeGoods()},handleCurrentChangeGood:function(e){this.goodsEd.curPage=e,this.seeGoods()},seeGoods:function(e){var t=this;this.goodsEd.show=!0,e&&(this.goodsEd.id=e.id,this.goodsEd.curPage=1,this.goodsEd.pageSize=10,this.editgood.celebrityId=e.id),Object(i.i)({pageNum:this.goodsEd.pageSize,currentPage:this.goodsEd.curPage,celebrityId:this.goodsEd.id}).then(function(e){t.goodsEd.totalSize=e.totalSize,t.goodsEd.lists=e.dataList})},showEditgood:function(e){this.fileListGood=[],e.id?this.editgood={show:!0,goodsCode:e.goodsCode,name:e.title,price:e.price?Number(e.price)/100:"",img:e.picture,link:e.url,sort:e.orderNum+"",id:e.id,celebrityId:e.celebrityId,status:e.status}:this.editgood={show:!0,goodsCode:"",name:"",price:"",img:"",link:"",sort:"",id:"",celebrityId:this.editgood.celebrityId,status:""}},saveEditgood:function(e){var t=this;if(!this.editgood.goodsCode)return this.$message.error("请输入商品编号"),!1;if(!this.editgood.name)return this.$message.error("请输入商品名称"),!1;if(!this.editgood.img)return this.$message.error("请选择商品图片"),!1;if(!this.editgood.link)return this.$message.error("请输入商品链接"),!1;if(!this.editgood.sort)return this.$message.error("请输入展示顺序"),!1;this.showLoading=!0;var o={goodsCode:this.editgood.goodsCode,title:this.editgood.name,picture:this.editgood.img,url:this.editgood.link,orderNum:this.editgood.sort,celebrityId:this.editgood.celebrityId,price:this.editgood.price?Math.round(100*this.editgood.price):""};this.editgood.id?(o.id=this.editgood.id,o.status=this.editgood.status):o.status=1,Object(i.u)(o).then(function(o){t.editgood.show=!1,t.showLoading=!1,"setUse"===e?(t.goodsEd.lists[t.editgood.index].status=t.editgood.status,t.$message({message:"修改成功",type:"success"})):"setSort"===e?(t.$message({message:"修改成功",type:"success"}),t.seeGoods(),t.edSort.show=!1):(t.editgood.id?t.$message({message:"修改成功",type:"success"}):t.$message({message:"添加成功",type:"success"}),t.seeGoods())}).catch(function(e){t.showLoading=!1,t.$message.error(e)})},handleError:function(e,t,o){this.$message("文件上传失败: "+String(e))},handleAvatarSuccess:function(e,t){this.editgood.img=e.data},downloadExcel:function(){Object(i.h)({tempCode:"EXC_001"}).then(function(e){var t=new Blob([e],{type:"application/vnd.ms-excel"});if("download"in document.createElement("a")){var o=document.createElement("a");o.download="模板",o.style.display="none",o.href=URL.createObjectURL(t),document.body.appendChild(o),o.click(),URL.revokeObjectURL(o.href),document.body.removeChild(o)}else navigator.msSaveBlob(t,"模板")})},uploadExcel:function(e){var t=this;this.showLoading=!0;var o=new FormData;o.append("file",e.target.files[0]),o.append("celebrityId",this.editgood.celebrityId),n.a.post(this.importGoodsUrl,o,{headers:{"Content-Type":"multipart/form-data",Token:Object(d.c)()}}).then(function(e){t.showLoading=!1,t.$message({message:"导入成功",type:"success"}),t.seeGoods()}).catch(function(e){t.showLoading=!1,t.$message.error(e)})},catchGoods:function(e){console.log(e),this.$message.error("开发中")}}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"app-container starwindow"},[o("div",{staticClass:"operation-container"},[o("el-button",{attrs:{type:"primary",icon:"el-icon-edit"},on:{click:e.showEdit}},[e._v("添加")]),e._v(" "),o("el-input",{attrs:{placeholder:"展示名称"},model:{value:e.search.name,callback:function(t){e.$set(e.search,"name",t)},expression:"search.name"}}),e._v(" "),o("el-input",{attrs:{placeholder:"微博昵称"},model:{value:e.search.nick,callback:function(t){e.$set(e.search,"nick",t)},expression:"search.nick"}}),e._v(" "),o("el-select",{attrs:{placeholder:"状态"},model:{value:e.search.status,callback:function(t){e.$set(e.search,"status",t)},expression:"search.status"}},e._l(e.status,function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),e._v(" "),o("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:e.doSearch}},[e._v("查询")]),e._v(" "),o("el-select",{attrs:{placeholder:"排序方式"},on:{change:e.loadSort},model:{value:e.search.sort,callback:function(t){e.$set(e.search,"sort",t)},expression:"search.sort"}},e._l(e.sort,function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})}))],1),e._v(" "),o("el-table",{staticClass:"lists",attrs:{data:e.tabledata,border:""}},[o("el-table-column",{attrs:{label:"编号",type:"index",fixed:"",index:e.indexMethod}}),e._v(" "),o("el-table-column",{attrs:{prop:"phone",label:"联系方式",width:"180"}}),e._v(" "),o("el-table-column",{attrs:{prop:"showname",label:"展示名称",width:"180"}}),e._v(" "),o("el-table-column",{attrs:{prop:"nick",label:"微博昵称",width:"180"}}),e._v(" "),o("el-table-column",{attrs:{label:"微博头像",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.row.headimg,fit:"fit"},on:{click:function(o){e.$store.dispatch("openImgPreview",{url:t.row.headimg})}}})]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"href",label:"橱窗地址",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("a",{attrs:{href:t.row.href,target:"_blank"}},[e._v(e._s(t.row.href))])]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"sort",label:"展示顺序",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.sort))]),o("el-button",{attrs:{size:"mini",icon:"el-icon-edit"},on:{click:function(o){e.editSort(t.row,t.$index)}}})]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"wbhref",label:"微博地址",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("a",{attrs:{href:t.row.wbhref,target:"_blank"}},[e._v(e._s(t.row.wbhref))])]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"goodcount",label:"展示商品",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("el-button",{attrs:{type:"info"},on:{click:function(o){e.seeGoods(t.row)}}},[e._v(e._s(t.row.goodcount))])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作",width:"400"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.status?o("el-button",{attrs:{type:"warning"},on:{click:function(o){e.changeConfig(t.row,t.$index)}}},[e._v("停用")]):e._e(),e._v(" "),0===t.row.status?o("el-button",{attrs:{type:"success"},on:{click:function(o){e.changeConfig(t.row,t.$index)}}},[e._v("启用")]):e._e(),e._v(" "),o("el-button",{on:{click:function(o){e.showEdit(t.row)}}},[e._v("编辑")]),e._v(" "),o("el-button",{on:{click:function(o){e.setTop(t.row)}}},[e._v("一键置顶")])]}}])})],1),e._v(" "),o("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,40],"page-size":e.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:e.totalSize},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),o("el-dialog",{attrs:{title:"修改排序：",width:"40%",visible:e.edSort.show},on:{"update:visible":function(t){e.$set(e.edSort,"show",t)}}},[o("el-form",[o("el-form-item",{attrs:{label:"排序值:","label-width":"120px"}},[o("el-input",{attrs:{type:"number",placeholder:"请输入数字"},model:{value:e.edSort.sort,callback:function(t){e.$set(e.edSort,"sort",t)},expression:"edSort.sort"}}),e._v(" "),o("p",{staticStyle:{color:"red"}},[e._v("排序值越小越靠前")])],1)],1),e._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.edSort.show=!1}}},[e._v("取 消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.saveEditSort}},[e._v("确 定")])],1)],1),e._v(" "),o("el-dialog",{attrs:{title:"网红橱窗编辑",visible:e.edit.show,width:"40%"},on:{"update:visible":function(t){e.$set(e.edit,"show",t)}}},[o("el-form",{ref:"form",attrs:{model:e.edit,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"展示名称"}},[o("el-input",{model:{value:e.edit.name,callback:function(t){e.$set(e.edit,"name",t)},expression:"edit.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"联系电话"}},[o("el-input",{model:{value:e.edit.phone,callback:function(t){e.$set(e.edit,"phone",t)},expression:"edit.phone"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"微博地址*"}},[o("el-input",{model:{value:e.edit.wbAdr,callback:function(t){e.$set(e.edit,"wbAdr",t)},expression:"edit.wbAdr"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"微博昵称*"}},[o("el-input",{model:{value:e.edit.nickname,callback:function(t){e.$set(e.edit,"nickname",t)},expression:"edit.nickname"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"微博头像"}},[o("el-input",{model:{value:e.edit.headimg,callback:function(t){e.$set(e.edit,"headimg",t)},expression:"edit.headimg"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"橱窗地址"}},[o("el-input",{model:{value:e.edit.winAdr,callback:function(t){e.$set(e.edit,"winAdr",t)},expression:"edit.winAdr"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"展示顺序"}},[o("el-input",{attrs:{type:"number"},model:{value:e.edit.showsort,callback:function(t){e.$set(e.edit,"showsort",t)},expression:"edit.showsort"}})],1),e._v(" "),o("el-form-item",[o("el-button",{on:{click:function(t){e.edit.show=!1}}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("保存")])],1)],1)],1),e._v(" "),o("el-dialog",{staticClass:"goods-box",attrs:{title:"网红橱窗展示商品",visible:e.goodsEd.show,width:"80%"},on:{"update:visible":function(t){e.$set(e.goodsEd,"show",t)}}},[o("div",[o("el-button",{attrs:{type:"primary"},on:{click:e.showEditgood}},[e._v("添加")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.downloadExcel}},[e._v("下载导入模板")]),e._v(" "),o("div",{staticClass:"importGoods"},[o("input",{attrs:{type:"file"},on:{change:function(t){e.uploadExcel(t)}}}),e._v(" "),o("el-button",{attrs:{type:"primary"}},[e._v("一键导入")])],1)],1),e._v(" "),o("div",{staticClass:"table-box"},[o("el-table",{staticClass:"goods-lists",attrs:{data:e.goodsEd.lists}},[o("el-table-column",{attrs:{prop:"id",label:"id",width:"80"}}),e._v(" "),o("el-table-column",{attrs:{prop:"goodsCode",label:"商品编号",width:"280"}}),e._v(" "),o("el-table-column",{attrs:{prop:"price",label:"商品价格",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("div",{},[e._v(e._s(t.row.price?(Number(t.row.price)/100).toFixed(2)+"元":""))])]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"title",label:"商品名称","show-overflow-tooltip":"",width:"180"}}),e._v(" "),o("el-table-column",{attrs:{label:"商品主图",width:"180"},scopedSlots:e._u([{key:"default",fn:function(e){return[o("img",{staticClass:"img",attrs:{src:e.row.picture}})]}}])}),e._v(" "),o("el-table-column",{attrs:{prop:"url",label:"商品链接",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("a",{staticClass:"good-url",attrs:{href:t.row.url,target:"_blank"}},[e._v(e._s(t.row.url))])]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"展示顺序",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[o("span",[e._v(e._s(t.row.orderNum))]),o("el-button",{attrs:{size:"mini",icon:"el-icon-edit"},on:{click:function(o){e.editSort(t.row,t.$index,"good")}}})]}}])}),e._v(" "),o("el-table-column",{attrs:{label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.status?o("el-button",{attrs:{type:"warning"},on:{click:function(o){e.changeConfigGood(t.row,t.$index)}}},[e._v("停用")]):e._e(),e._v(" "),0===t.row.status?o("el-button",{attrs:{type:"success"},on:{click:function(o){e.changeConfigGood(t.row,t.$index)}}},[e._v("启用")]):e._e(),e._v(" "),o("el-button",{on:{click:function(o){e.showEditgood(t.row)}}},[e._v("修改")]),e._v(" "),o("el-button",{on:{click:function(o){e.setTopgood(t.row,"good")}}},[e._v("置顶")])]}}])})],1)],1),e._v(" "),o("div",[o("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.goodsEd.curPage,"page-sizes":[10,20,30,40],"page-size":e.goodsEd.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:e.goodsEd.totalSize},on:{"size-change":e.handleSizeChangeGood,"current-change":e.handleCurrentChangeGood}})],1),e._v(" "),o("div",{staticStyle:{"text-align":"center"}})]),e._v(" "),o("el-dialog",{attrs:{title:"商品编辑",visible:e.editgood.show,width:"40%"},on:{"update:visible":function(t){e.$set(e.editgood,"show",t)}}},[o("el-form",{ref:"form",attrs:{model:e.editgood,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"商品编号"}},[o("el-input",{model:{value:e.editgood.goodsCode,callback:function(t){e.$set(e.editgood,"goodsCode",t)},expression:"editgood.goodsCode"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"商品名称"}},[o("el-input",{model:{value:e.editgood.name,callback:function(t){e.$set(e.editgood,"name",t)},expression:"editgood.name"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"商品价格"}},[o("el-input",{model:{value:e.editgood.price,callback:function(t){e.$set(e.editgood,"price",t)},expression:"editgood.price"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"选择图片"}},[o("el-upload",{attrs:{action:e.uploadUrl,"on-error":e.handleError,limit:1,"file-list":e.fileListGood,"on-success":e.handleAvatarSuccess}},[o("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")])],1),e._v(" "),o("img",{staticClass:"editgood-img",attrs:{src:e.editgood.img,alt:""}})],1),e._v(" "),o("el-form-item",{attrs:{label:"商品链接"}},[o("el-input",{model:{value:e.editgood.link,callback:function(t){e.$set(e.editgood,"link",t)},expression:"editgood.link"}})],1),e._v(" "),o("el-form-item",{attrs:{label:"展示顺序"}},[o("el-input",{model:{value:e.editgood.sort,callback:function(t){e.$set(e.editgood,"sort",t)},expression:"editgood.sort"}})],1),e._v(" "),o("el-form-item",[o("el-button",{on:{click:function(t){e.editgood.show=!1}}},[e._v("取消")]),e._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:e.saveEditgood}},[e._v("保存")])],1)],1)],1),e._v(" "),o("Loading",{directives:[{name:"show",rawName:"v-show",value:e.showLoading,expression:"showLoading"}]})],1)},staticRenderFns:[]};var c=o("VU/8")(r,l,!1,function(e){o("tc0F")},null,null);t.default=c.exports},tc0F:function(e,t){}});