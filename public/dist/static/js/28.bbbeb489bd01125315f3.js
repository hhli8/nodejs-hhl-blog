webpackJsonp([28],{"5gIr":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("woOf"),r=a.n(n),o=a("6yp2"),l=a("X6bn"),i=a("voil"),s={name:"engine",mixins:[l.a],components:{Loading:i.a},data:function(){return{searchForm:{},supplierCode:"",supList:[],cateOpt:[],cateData:[],cateType:{label:"categoryName",value:"categoryName",children:"children"},tabledata:[],tableKey:1,headerStyle:{"text-align":"center"},showLoading:!1}},methods:{getSupplierAndCate:function(){var e=this;Object(o.m)({currentPage:1,pageSize:100}).then(function(t){"200"===t.resultCode&&(e.supList=t.result.data||[])}),Object(o.g)({}).then(function(t){"200"===t.resultCode&&(e.cateOpt=t.result||[])})},handleSupChange:function(e){this.supplierCode=e},handleReset:function(){this.searchForm={},this.supplierCode="",this.cateData=[],this.currentPage=1,this.getData()},handleSearch:function(){this.currentPage=1,this.getData()},getData:function(){var e=this;this.showLoading=!0;var t={currentPage:this.currentPage,pageSize:this.pageNum,category:this.cateData.length?this.cateData[this.cateData.length-1]:"",supplierCode:this.supplierCode?parseInt(this.supplierCode):""};this.data=r()(t,this.searchForm),Object(o.j)(t).then(function(t){if("200"===t.resultCode){var a=t.result.data||[];a.map(function(e){return e.gRate=100*e.gRate,e.contractPrice=e.contractPrice?e.contractPrice/100:0,e.gPrice=e.gPrice?e.gPrice/100:0,e.freight=e.freight?e.freight/100:0,e}),e.tabledata=a,e.totalSize=t.totalSize,e.showLoading=!1}else e.showLoading=!1}).catch(function(){e.showLoading=!1})},handleOffSale:function(){var e=this;if(this.multipleSelection.length){var t={ids:this.idsArr.join(",")};Object(o.o)(t).then(function(t){"200"===t.resultCode&&(e.$message({message:"下架成功",type:"success"}),e.getData())})}else this.$message({message:"请至少选择一个商品"})}},created:function(){this.getSupplierAndCate(),this.getData()}},c={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"app-container"},[a("el-form",{attrs:{inline:!0,model:e.searchForm}},[a("el-form-item",{attrs:{label:"供应商"}},[a("el-select",{attrs:{placeholder:"供应商",clearable:""},on:{change:e.handleSupChange},model:{value:e.supplierCode,callback:function(t){e.supplierCode=t},expression:"supplierCode"}},e._l(e.supList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.code}})}))],1),e._v(" "),a("el-form-item",{attrs:{label:"类目"}},[a("el-cascader",{attrs:{options:e.cateOpt,"show-all-levels":!1,props:e.cateType,clearable:"",placeholder:"请选择品类"},on:{change:e.cateChange},model:{value:e.cateData,callback:function(t){e.cateData=t},expression:"cateData"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品名称"}},[a("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:e.searchForm.gTitle,callback:function(t){e.$set(e.searchForm,"gTitle",t)},expression:"searchForm.gTitle"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"商品编号"}},[a("el-input",{attrs:{placeholder:"请输入商品名称"},model:{value:e.searchForm.goodsCode,callback:function(t){e.$set(e.searchForm,"goodsCode",t)},expression:"searchForm.goodsCode"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"品牌"}},[a("el-input",{attrs:{placeholder:"请输入品牌名称"},model:{value:e.searchForm.gBrand,callback:function(t){e.$set(e.searchForm,"gBrand",t)},expression:"searchForm.gBrand"}})],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"warning"},on:{click:e.handleReset}},[e._v("重置")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.handleSearch}},[e._v("查询")]),e._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:e.handleOffSale}},[e._v("下架")])],1)],1),e._v(" "),a("el-table",{key:e.tableKey,staticClass:"goods-engine-table",attrs:{data:e.tabledata,"header-cell-style":e.headerStyle,"empty-text":"暂无数据"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55",align:"center",fixed:"left"}}),e._v(" "),a("el-table-column",{attrs:{label:"序号",type:"index",width:"55",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsCode",label:"商品编号",align:"center",width:"170"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gTitle",label:"商品名称(中文）",width:"240","show-overflow-tooltip":"",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"goodsName",label:"商品名称",width:"240","show-overflow-tooltip":"",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{label:"类目",width:"210",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",[e._v(e._s(t.row.gGategory1+"/"+t.row.gGategory2+"/"+t.row.gGategory3))])]}}])}),e._v(" "),a("el-table-column",{attrs:{prop:"madeIn",label:"产地",width:"150",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gBrand",label:"品牌",width:"160",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"contractPrice",label:"价格(RMB）",width:"180",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"gPrice",label:"商品展示价(RMB）",width:"180",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"freightFee",label:"运费(RMB）",width:"180",align:"center"}}),e._v(" "),a("el-table-column",{attrs:{prop:"supplierName",label:"供应商",width:"200",align:"center"}})],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.currentPage,"page-sizes":[10,20,30,50,100],"page-size":e.pageNum,layout:"total, sizes, prev, pager, next, jumper",total:e.totalSize},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),a("Loading",{directives:[{name:"show",rawName:"v-show",value:e.showLoading,expression:"showLoading"}]})],1)},staticRenderFns:[]};var d=a("VU/8")(s,c,!1,function(e){a("wQ94")},"data-v-0eaec792",null);t.default=d.exports},"6yp2":function(e,t,a){"use strict";t.m=function(e){return Object(n.a)({url:l+"/v1/manager/supplier/search",method:"post",data:o.a.stringify(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.g=function(e){return Object(n.a)({url:l+"/v1/erp/category/search",method:"get",params:e,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.j=function(e){return Object(n.a)({url:l+"/v1/manager/goodsEngine/search",method:"post",data:o.a.stringify(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.o=function(e){return Object(n.a)({url:l+"/v1/manager/goodsEngine/deleteFromEs",method:"post",data:o.a.stringify(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.k=function(e){return Object(n.a)({url:l+"/v1/manager/goods/search",method:"post",data:o.a.stringify(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.q=function(e){return Object(n.a)({url:l+"/v1/manager/goods/likeSearch",method:"post",data:o.a.stringify(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.b=function(e){return Object(n.a)({url:l+"/v1/manager/goods/batchApprove",method:"post",data:e})},t.a=function(e){return Object(n.a)({url:l+"/v1/manager/goods/approve",method:"post",data:o.a.stringify(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.p=function(e){return Object(n.a)({url:l+"/v1/manager/goods/putGoodsToES",method:"post",data:o.a.stringify(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.c=function(e){return Object(n.a)({url:l+"/v1/manager/goods/delete",method:"post",data:o.a.stringify(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.n=function(e){return Object(n.a)({url:l+"/v1/manager/goods/getGoodsCategory",method:"get",params:e,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.d=function(e){return Object(n.a)({url:l+"/v1/manager/goods/modifyGoodsCategory",method:"post",data:o.a.stringify(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.i=function(e){return Object(n.a)({url:l+"/v1/manager/goods/getMainImages",method:"get",params:e,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.e=function(e){return Object(n.a)({url:l+"/v1/manager/goods/modifyMainImages",method:"post",data:o.a.stringify(e),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.l=function(e){return Object(n.a)({url:l+"/v1/manager/goods/getGoodsSKU",method:"get",params:e,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})},t.f=function(e){return Object(n.a)({url:l+"/v1/manager/goods/modifyGoodsSKU",method:"post",data:e})},t.h=function(e){return Object(n.a)({url:l+"/v1/manager/goods/get",method:"get",params:e,headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"}})};var n=a("vLgD"),r=a("mw3O"),o=a.n(r),l="http://10.1.1.24:9090"},X6bn:function(e,t,a){"use strict";var n={data:function(){return{currentPage:1,pageNum:20,totalSize:0,multipleSelection:[],idsArr:[]}},created:function(){},methods:{handleSizeChange:function(e){this.pageNum=e,this.getData()},handleCurrentChange:function(e){this.currentPage=e,this.similarSearchId?this.getSimilarData():this.getData()},cateChange:function(e){console.log(e)},handleSelectionChange:function(e){this.multipleSelection=e;for(var t=[],a=0;a<this.multipleSelection.length;a++)t.push(this.multipleSelection[a].id);this.idsArr=t,console.log(this.idsArr),console.log(this.multipleSelection)}}};t.a=n},wQ94:function(e,t){}});