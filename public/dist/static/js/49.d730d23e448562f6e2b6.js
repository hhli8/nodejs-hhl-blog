webpackJsonp([49],{QvXd:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r("Dd8w"),l=r.n(n),a=r("voil"),i=r("iIbE"),o={name:"brand",components:{Loading:a.a},data:function(){return{showLoading:!1,formInline:{sellerNmEn:"",sellerNm:"",rebateNm:"",driverSpider:"全部"},tabledata:[],queryParams:{currentPage:1,pageSize:20},totalSize:0,options:[],reptileArr:["全部","是","否"],multipleSelection:[]}},created:function(){this.getFaliWeb(),this.getSellerList()},methods:{indexMethod:function(e){return e+1+(this.queryParams.currentPage-1)*this.queryParams.pageSize},getFaliWeb:function(){var e=this;Object(i.f)().then(function(t){e.options=t.data&&["全部"].concat(t.data.webList)})},sortChange:function(e,t,r){},onAllOpen:function(){this.multipleSelection.length?(this.ids=this.multipleSelection.map(function(e){return e.idStr}).join(),this.batchDriverSpider({ids:this.ids})):this.$message({message:"请至少选择一个商品"})},batchDriverSpider:function(e){var t=this;Object(i.a)(e).then(function(){t.getSellerList(),t.alertMessage("爬虫状态切换成功","success")})},btnStatus:function(e){var t="warning";return"N"===e&&(t="success"),t},toggleStatus:function(e){var t=this;"Y"===e.driverSpider?e.driverSpider="N":e.driverSpider="Y";var r={id:e.idStr,driverSpider:e.driverSpider};Object(i.c)(r).then(function(){t.getSellerList(),t.alertMessage("爬虫状态切换成功","success")})},alertMessage:function(e,t){this.$message({message:e,type:t})},handleSelectionChange:function(e){this.multipleSelection=e},changeVal:function(e){},getSellerList:function(){var e=this,t=l()({},this.queryParams,this.formInline);this.showLoading=!0,"全部"===t.rebateNm&&(t.rebateNm=""),"全部"===t.driverSpider?t.driverSpider="":"否"===t.driverSpider?t.driverSpider="N":t.driverSpider="Y",Object(i.j)(t).then(function(t){e.totalSize=t.totalSize,e.tabledata=t.dataList,e.showLoading=!1}).catch(function(t){e.showLoading=!1,e.$message.error(t)})},onSearch:function(){this.queryParams.currentPage=1,this.getSellerList()},onReset:function(e){this.$refs[e].resetFields(),this.formInline.driverSpider="全部"},handleSizeChange:function(e){this.queryParams.pageSize=e,this.getSellerList()},handleCurrentChange:function(e){this.queryParams.currentPage=e,this.getSellerList()}}},s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container brand"},[r("el-form",{ref:"formInline",staticClass:"demo-form-inline",attrs:{inline:!0,model:e.formInline}},[r("el-form-item",{attrs:{label:"返利网",prop:"rebateNm"}},[r("el-select",{attrs:{placeholder:"请选择返利网站"},model:{value:e.formInline.rebateNm,callback:function(t){e.$set(e.formInline,"rebateNm",t)},expression:"formInline.rebateNm"}},e._l(e.options,function(e,t){return r("el-option",{key:t,attrs:{label:e,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"是否爬虫",prop:""}},[r("el-select",{on:{change:e.changeVal},model:{value:e.formInline.driverSpider,callback:function(t){e.$set(e.formInline,"driverSpider",t)},expression:"formInline.driverSpider"}},e._l(e.reptileArr,function(e){return r("el-option",{key:e,attrs:{label:e,value:e}})}))],1),e._v(" "),r("el-form-item",{attrs:{label:"官网名称(原文)",prop:"sellerNmEn"}},[r("el-input",{attrs:{placeholder:"请输入官网名称(原文)"},model:{value:e.formInline.sellerNmEn,callback:function(t){e.$set(e.formInline,"sellerNmEn",t)},expression:"formInline.sellerNmEn"}})],1),e._v(" "),r("el-form-item",{attrs:{label:"官网名称(中文)",prop:"sellerNm"}},[r("el-input",{attrs:{placeholder:"请输入官网名称(中文)"},model:{value:e.formInline.sellerNm,callback:function(t){e.$set(e.formInline,"sellerNm",t)},expression:"formInline.sellerNm"}})],1),e._v(" "),r("el-form-item",{staticClass:"fr"},[r("el-button",{attrs:{type:"danger"},on:{click:function(t){e.onReset("formInline")}}},[e._v("重置")]),e._v(" "),r("el-button",{attrs:{type:"primary"},on:{click:e.onSearch}},[e._v("查询")]),e._v(" "),r("el-button",{attrs:{type:"success"},on:{click:e.onAllOpen}},[e._v("启用")])],1)],1),e._v(" "),r("el-table",{staticClass:"lists",attrs:{data:e.tabledata,border:"","default-sort":{prop:"nameEn",order:"descending"}},on:{"sort-change":e.sortChange,"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection",align:"center",width:"55"}}),e._v(" "),r("el-table-column",{attrs:{width:"60",align:"center",label:"序号",type:"index",fixed:"",index:e.indexMethod}}),e._v(" "),r("el-table-column",{attrs:{prop:"nameEn",align:"center",label:"官网名称(原文)",sortable:"custom"}}),e._v(" "),r("el-table-column",{attrs:{prop:"name",align:"center",label:"官网名称(中文)"}}),e._v(" "),r("el-table-column",{attrs:{prop:"logo",align:"center",label:"logo"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:t.row.logo,fit:"contain"},on:{click:function(r){e.$store.dispatch("openImgPreview",{url:t.row.logo})}}})]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"url",align:"center",label:"品牌国外官网","show-overflow-tooltip":""}}),e._v(" "),r("el-table-column",{attrs:{prop:"rebasts",align:"center",label:"返利来源"}}),e._v(" "),r("el-table-column",{attrs:{prop:"rate",align:"center",label:"最高返利(%)"}}),e._v(" "),r("el-table-column",{attrs:{prop:"cnUrl",align:"center",label:"品牌中国官网"}}),e._v(" "),r("el-table-column",{attrs:{prop:"payment",align:"center",label:"支持的支付方式"}}),e._v(" "),r("el-table-column",{attrs:{prop:"",align:"center",label:"是否爬虫"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n          "+e._s("N"===t.row.driverSpider?"否":"是")+"\n        ")]}}])}),e._v(" "),r("el-table-column",{attrs:{prop:"",align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:e.btnStatus(t.row.driverSpider)},on:{click:function(r){e.toggleStatus(t.row)}}},[e._v(e._s("N"===t.row.driverSpider?"启用":"停用"))])]}}])})],1),e._v(" "),r("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.queryParams.currentPage,"page-sizes":[20,30,40,50],"page-size":e.queryParams.pageSize,total:e.totalSize,layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}}),e._v(" "),r("Loading",{directives:[{name:"show",rawName:"v-show",value:e.showLoading,expression:"showLoading"}]})],1)},staticRenderFns:[]};var c=r("VU/8")(o,s,!1,function(e){r("ZXcP")},"data-v-da9d8b52",null);t.default=c.exports},ZXcP:function(e,t){}});