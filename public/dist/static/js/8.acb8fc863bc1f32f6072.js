webpackJsonp([8],{"2UfB":function(t,e,o){"use strict";var i=o("TIfe"),a=this,r={name:"uploadImg",props:{uploadUrl:{type:String,default:"https://www.xiaoxiangyoupin.com/xxyp-manager/upload/uploadPic"},handleAvatarSuccess:{type:Function,required:!0},onUploadError:{type:Function,default:function(){a.alertMessage("error","上传图片失败，请重新上传")}},imgUrl:{type:String,required:!0},maxWidth:{type:String,default:"160px"}},computed:{uploadHeader:function(){return{Token:Object(i.c)()}}},alertMessage:function(t,e){this.$message({type:t,message:e})}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"upload-img"},[o("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,headers:t.uploadHeader,"show-file-list":!1,"on-success":t.handleAvatarSuccess,"on-error":t.onUploadError}},[o("div",{staticClass:"upload-area"},[t.imgUrl?o("img",{staticClass:"avatar firstImg",style:{maxWidth:t.maxWidth},attrs:{src:t.imgUrl}}):o("div",{staticClass:"noImgDisplay",style:{width:t.maxWidth}},[t._v("\n        请点击上传按钮"),o("br"),t._v("上传图片\n      ")]),t._v(" "),t._t("default")],2)])],1)},staticRenderFns:[]};var n=o("VU/8")(r,s,!1,function(t){o("IvGY")},"data-v-0513a2e8",null);e.a=n.exports},IvGY:function(t,e){},N8VB:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o("Gu7T"),a=o.n(i),r=o("pFYg"),s=o.n(r),n=o("bOdI"),l=o.n(n),c=o("mvHQ"),d=o.n(c),u=o("woOf"),p=o.n(u),m=o("Dd8w"),g=o.n(m),h=o("TIfe"),f=this,v={name:"uploadImg",data:function(){return{dialogVisible:!1,dialogImageUrl:""}},props:{uploadUrl:{type:String,required:!0},handleSuccess:{type:Function,required:!0},onUploadError:{type:Function,default:function(){f.alertMessage("error","上传图片失败，请重新上传")}},imgUrlArr:{type:Array,default:function(){return[]}},maxNumber:{type:Number,default:1}},computed:{uploadHeader:function(){return{Token:Object(h.c)()}}},alertMessage:function(t,e){this.$message({type:t,message:e})},methods:{beforeRemove:function(t){return this.$confirm("确定要删除图片吗？")},handlePictureCardPreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},onRemove:function(t,e){console.log(e);var o=e.map(function(t){return{url:t.url}});this.$emit("update:imgUrlArr",o)},alertMessage:function(t,e){this.$message({type:t,message:e})}}},b={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"upload-img",class:{visibleUploadIcon:t.imgUrlArr.length===t.maxNumber}},[o("el-upload",{attrs:{"list-type":"picture-card",action:t.uploadUrl,headers:t.uploadHeader,"on-success":t.handleSuccess,"on-error":t.onUploadError,"before-remove":t.beforeRemove,"on-preview":t.handlePictureCardPreview,"on-remove":t.onRemove,"file-list":t.imgUrlArr}},[o("i",{staticClass:"el-icon-plus"})]),t._v(" "),o("el-dialog",{attrs:{"append-to-body":"",visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[o("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]};var w=o("VU/8")(v,b,!1,function(t){o("ovxN")},null,null).exports,y=o("2UfB"),S=o("sVqv"),_={name:"topicManage",data:function(){return{name:"",value:"状态",selectArr:[{label:"状态",value:""},{label:"停用",value:0},{label:"展示",value:1}],status:"",currentPage:1,pagesize:10,tableData:[],totalSize:0,dialogFormVisible:!1,form:{id:"",name:"",img:[],votingContents:[{celebrityId:"",id:"",num:"",option:"",status:""}],url:"",topicUrl:"",photo:"",voteCopywriter:"",manualRank:"",comment:"",columnTitle:""},isAddGoods:!1,editSort:{show:!1,sort:""},editTopicStatusId:"",index:-1,currentTopicGoodsEdit:-1,uploadUrl:"https://www.xiaoxiangyoupin.com/xxyp-manager/upload/uploadPic",imgUrl:[],topicAvatar:"",displayGoods:{show:!1,lists:[],currentPage:1,pageNum:10,totalSize:0,sort:0,status:"",title:"",goodsCode:"",celebrityId:""},addTopicGoodsList:{searchWord:"",pageNum:10,currentPage:1,totalSize:0},selectGoodsStatus:[{label:"状态",value:""},{label:"在用",value:1},{label:"停用",value:0}],selectGood:"状态",displaySort:"最新",displaySortArr:[{label:"最新",value:0},{label:"展示顺序升序",value:1},{label:"展示顺序降序",value:2}],count:0,goodsName:"",goodsNumber:"",addTopicGoodsData:[],addTopicGoodsSelected:[],multipleSelection:[],addTopicGoodsSelectedButton:"选择",rewardSetting:{show:!1},rewardMethod:"奖励方式",rewardMethodArr:[{label:"奖励方式",value:""},{label:"红包",value:1},{label:"现金",value:2},{label:"礼品",value:3}],giftArr:[{number:"",prizeName:"",userPrice:"",realPrice:"",prizeNumber:"",giftLink:""}],freeImg:"",startTime:"",endTime:"",loading:!1,asModifyTopicVoteContent:[]}},computed:{uploadHeader:function(){return{Token:Object(h.c)()}},topicGoodsEdit:{get:function(){return-1!==this.currentTopicGoodsEdit?g()({},this.displayGoods.lists[this.currentTopicGoodsEdit],{show:!1}):{title:"",picture:"",url:"",goodsComment:"",manualRank:""}},set:function(t){this.topicGoodsEdit=t}}},components:{uploadImgs:w,uploadImg:y.a},created:function(){this.getTopicList(),this.filterImgStringAsArray()},methods:{getTopicList:function(){var t=this,e={name:this.name,status:this.status,pageNum:this.pagesize,currentPage:this.currentPage};Object(S.o)(e).then(function(e){t.tableData=e.dataList,t.totalSize=e.totalSize,t.filterImgStringAsArray()}).catch(function(e){t.$message.error(e)})},saveTopic:function(){var t=this;console.log(1),this.asModifyTopicVoteContent.length>0&&(this.form.votingContents=this.form.votingContents.concat(this.asModifyTopicVoteContent)),Object(S.y)(this.form).then(function(e){t.editTopicStatusId||0===t.editTopicStatusId?t.alertMessage("编辑成功"):t.addTopicListAlert(e.message),t.getTopicList()}).catch(function(e){t.$message.error(e)})},addTopicListAlert:function(t){"请求成功"===t?(this.addTopicListInfo="添加成功",this.addTopicListInfoType="success"):(this.addTopicListInfo=t,this.addTopicListInfoType="error"),this.alertMessage(this.addTopicListInfo,this.addTopicListInfoType)},onSaveTopicList:function(){this.isEmpty()||(this.saveIsModifyOrAdd(),this.form.manualRank=Number(this.form.manualRank),this.saveTopic(),this.dialogFormVisible=!1)},saveIsModifyOrAdd:function(){this.form.photo=this.topicAvatar,this.form.id||delete this.form.id},isEmpty:function(){var t=this.form,e=t.name,o=t.comment,i=t.url,a=t.photo,r=t.img,s=t.voteCopywriter,n=t.columnTitle;return e?o?i?a?r.length<1?(this.$message.error("请上传话题图片"),!0):s?n?void 0:(this.$message.error("请输入商品栏标题"),!0):(this.$message.error("请输入投票文案"),!0):(this.$message.error("请上传话题头像"),!0):(this.$message.error("请输入微博地址"),!0):(this.$message.error("请输入话题描述"),!0):(this.$message.error("请输入话题名称"),!0)},clearTopicListForm:function(){this.form={id:"",name:"",img:[],votingContents:[{celebrityId:"",id:"",num:"",option:"",status:""}],url:"",photo:"",voteCopywriter:"",manualRank:"",comment:"",topicUrl:"",columnTitle:""},this.topicAvatar=""},configTopic:function(t,e,o){var i=this;Object(S.d)({celebrityId:t,fieldValue:e,fieldName:o}).then(function(){i.alertMessage("修改成功"),i.getTopicList()}).catch(function(t){i.$message.error(t)})},configTopicGoods:function(t,e,o){var i=this;Object(S.e)({goodsId:t,fieldValue:e,fieldName:o}).then(function(){i.alertMessage("修改成功"),i.getTopicDisplayGoods()}).catch(function(t){i.$message.error(t)})},typeToggle:function(t){return 1===t?"warning":"success"},onToggleStatus:function(t){t.goodsCount?(t.status=0===t.status?1:0,this.configTopic(t.id,t.status+"","status")):this.$message.error("商品总数为0，状态开启失败")},onToggleTopicGoodsStatus:function(t){t.status=0===t.status?1:0,this.configTopicGoods(t.id,t.status+"","status")},onTopping:function(t){this.configTopicGoods(t.id,"top","top")},onModifyTopicGoods:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.currentTopicGoodsEdit=t,this.count+=1,this.topicGoodsEdit.show=e},closeTopicGoodsEdit:function(){this.topicGoodsEdit.goodsComment="",this.onModifyTopicGoods()},onCancelTopicGoodsEdit:function(){this.closeTopicGoodsEdit()},onSaveTopicGoodsEdit:function(){var t=this;this.topicGoodsEdit.manualRank=Number(this.topicGoodsEdit.orderNum),Object(S.z)(this.topicGoodsEdit).then(function(){t.alertMessage("修改成功"),t.closeTopicGoodsEdit(),t.getTopicDisplayGoods()}).catch(function(e){t.$message.error(e)})},onTopicListTop:function(t){this.configTopic(t.id,"top","top")},onSaveEditSort:function(){this.editSort.show=!1,this.configTopic(this.form.id,this.editSort.sort+"","orderNum"),this.tableData[this.index].manualRank=this.editSort.sort},filterImgStringAsArray:function(){this.tableData=this.tableData.map(function(t){return t.img=JSON.parse(t.img),t.manualRank+="",t})},onAddOrModifyData:function(t,e){this.isAddOrModify(t,e),this.editTopicStatusId=this.form.id,this.dialogFormVisible=!0},isAddOrModify:function(t,e){t&&(p()(this.form,t),this.topicAvatar=this.form.photo,this.editSort.sort=this.form.manualRank+"",this.index=e)},uploadImgDisplay:function(t){this.currentIndex=t},handleGoodsSuccess:function(t){var e=this;this.displayGoods.lists[this.currentIndex].picture=t.data,this.$nextTick(function(){e.configTopicGoods(e.displayGoods.lists[e.currentIndex].id,t.data,"picture")})},onUploadEditImg:function(){console.log(this.topicGoodsEdit)},handleModifyGoodsSuccess:function(t){this.topicGoodsEdit.picture=t.data,this.count++,this.alertMessage("图片上传成功")},onDisplayGoods:function(t,e){this.displayGoods.show=!0,this.displayGoods.celebrityId=t.id,this.getTopicDisplayGoods()},getTopicDisplayGoods:function(){var t=this,e=JSON.parse(d()(this.displayGoods));delete e.lists,delete e.show,Object(S.l)(e).then(function(e){t.displayGoods.totalSize=e.totalSize,t.displayGoods.lists=e.dataList})},onSearchTopicGoods:function(){this.getTopicDisplayGoods()},handleSelectionChange:function(t){this.addTopicGoodsSelected=t},onSaveAddGoods:function(){var t=this;this.addTopicGoodsSelected.forEach(function(e){e.celebrityId=t.displayGoods.celebrityId}),Object(S.A)(this.addTopicGoodsSelected).then(function(){t.alertMessage("数据添加成功"),t.getTopicDisplayGoods(),t.saveAddGoodsAfter()})},saveAddGoodsAfter:function(){this.isAddGoods=!1,this.addTopicGoodsList={searchWord:"",pageNum:10,currentPage:1,totalSize:0},this.addTopicGoodsData=[],this.getTopicList()},onSearchAddTopicGoods:function(){var t=this;this.loading=!0,Object(S.B)(this.addTopicGoodsList).then(function(e){t.loading=!1,t.addTopicGoodsList.totalSize=e.totalSize,t.addTopicGoodsData=e.dataList}).catch(function(e){t.loading=!1,t.$message.error(e)})},onCloseTopicGoods:function(){this.saveAddGoodsAfter()},changeGoodsStatus:function(t){this.displayGoods.status=t},changeSort:function(t){this.displayGoods.sort=t},getNewImgArr:function(t){this.form.img=t},onEditSort:function(t,e){this.editSort={show:!0,sort:t.manualRank+""},p()(this.form,t),this.index=e},handleTopicImgSuccess:function(t){(this.index||0===this.index)&&(this.form.img.push({url:t.data}),this.alertMessage("话题图片上传成功"))},handleAvatarSuccess:function(t){this.topicAvatar=t.data,this.form.photo=this.topicAvatar,this.alertMessage("话题头像上传成功")},changeVal:function(t){this.status=t},onSearch:function(){this.getTopicList()},onAddTopicContent:function(){this.form.votingContents.push({celebrityId:"",id:"",num:"",option:"",status:""})},onReduceTopicContent:function(){var t=this.form.votingContents.length-1;this.form.votingContents[t].status=0,this.asModifyTopicVoteContent.push(this.form.votingContents[t]),this.form.votingContents.splice(this.form.votingContents.length-1,1)},onCloseTopicList:function(){this.asModifyTopicVoteContent=[]},onCancel:function(){this.dialogFormVisible=!1},indexMethod:function(t){return t+1+(this.currentPage-1)*this.pagesize},handleSizeChange:function(t){this.pagesize=t,this.getTopicList()},handleCurrentChange:function(t){this.currentPage=t,this.getTopicList()},topicGoodsSizeChange:function(t){this.displayGoods.pageSize=t,this.getTopicDisplayGoods()},topicGoodsAddSizeChange:function(t){this.addTopicGoodsList.pageNum=t,this.onSearchAddTopicGoods()},currentTopicGoodsChange:function(t){this.displayGoods.currentPage=t,this.getTopicDisplayGoods()},currentTopicGoodsAddChange:function(t){this.addTopicGoodsList.currentPage=t,this.onSearchAddTopicGoods()},alertMessage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";this.$message({type:e,message:t})},changeReward:function(t){this.rewardSetting.type=t,3===t?this.giftArr=[{number:"",prizeName:"",userPrice:"",realPrice:"",prizeNumber:1,giftLink:""}]:(this.rewardSetting.prizeContent="",this.rewardSetting.prizeNumber=1),this.rewardSetting.winningNumbers=[{num:""}]},onRewardConfig:function(t){p()(this.rewardSetting,t.weiboTopicPrizeInfo,{celebrityId:t.id}),this.startTime=this.rewardSetting.startTime,this.endTime=this.rewardSetting.endTime,this.modifyRewardConfigTypeJudge(),this.freeImgJudge(),this.rewardSetting.winningNumbers?this.rewardSetting.winningNumbers=this.strConversionArrayobject(this.rewardSetting.winningNumbers,"num"):this.rewardSetting.winningNumbers=[],this.rewardSetting.show=!0},onCloseReward:function(){this.rewardSetting={show:!1}},freeImgJudge:function(){this.rewardSetting.url?this.freeImg=this.rewardSetting.url:this.freeImg=""},modifyRewardConfigTypeJudge:function(){1===this.rewardSetting.type?this.rewardMethod="红包":2===this.rewardSetting.type?this.rewardMethod="现金":3===this.rewardSetting.type?(this.rewardMethod="礼品",this.giftArr=[JSON.parse(this.rewardSetting.prizeContent)]):this.rewardMethod="奖励方式"},strConversionArrayobject:function(t,e){return t.split(",").map(function(t){return t=l()({},e,t)})},arrayobjectConversionString:function(t,e){return t.map(function(t){return t[e]}).join(",")},handleFreeImg:function(t){this.rewardSetting.url=t.data,this.freeImg=this.rewardSetting.url,this.alertMessage("图片上传成功")},changePrizeNumber:function(t){var e=Number(t)-this.rewardSetting.winningNumbers.length,o=[];if(Number(t)>0){if(e>0){for(var i,a=0;a<e;a++)o.push({num:""});(i=this.rewardSetting.winningNumbers).push.apply(i,o)}else this.rewardSetting.winningNumbers=this.rewardSetting.winningNumbers.slice(0,Number(t));this.count++}},onSaveRewardSetting:function(){var t=this;if("object"===s()(this.rewardSetting.winningNumbers)&&(this.rewardSetting.winningNumbers=this.arrayobjectConversionString(this.rewardSetting.winningNumbers,"num")),3===this.rewardSetting.type){var e=JSON.parse(d.a.apply(JSON,a()(this.giftArr)));this.rewardSetting.prizeNumber=e.prizeNumber,this.rewardSetting.prizeContent=d.a.apply(JSON,a()(this.giftArr))}this.rewardSetting.url=this.freeImg,p()(this.rewardSetting,{startTime:this.startTime,endTime:this.endTime}),this.saveRewardSettingValidate()||Object(S.t)(this.rewardSetting).then(function(){t.rewardSetting.show=!1,t.alertMessage("修改成功"),t.getTopicList()}).catch(function(e){t.$message.error(e)})},saveRewardSettingValidate:function(){return this.rewardSetting.winningCopywriter?this.rewardSetting.noWinningCopywriter?this.rewardSetting.type?this.rewardSetting.prizeContent?this.rewardSetting.winningNumbers?this.rewardSetting.prizeNumber?this.rewardSetting.startTime?this.rewardSetting.endTime?this.rewardSetting.url?void 0:(this.$message.error("请上传中奖活动图片"),!0):(this.$message.error("请选择活动结束时间"),!0):(this.$message.error("请选择活动开始时间"),!0):(this.$message.error("请输入奖品份数"),!0):(this.$message.error("请输入对应中奖号码"),!0):(this.$message.error("请输入对应奖品内容"),!0):(this.$message.error("请选择奖励方式"),!0):(this.$message.error("未中奖文案不能为空"),!0):(this.$message.error("中奖文案不能为空"),!0)},onJumpAwardInquiry:function(){this.$router.push({path:"/weiboyx/awardInquiry"})}},watch:{dialogFormVisible:function(t){t||this.clearTopicListForm()}}},T={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"topicManage app-container"},[o("div",{staticClass:"search"},[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:2}},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.onAddOrModifyData(void 0)}}},[t._v("添加")])],1),t._v(" "),o("el-col",{attrs:{span:3}},[o("el-input",{attrs:{placeholder:"名称"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),o("el-col",{attrs:{span:3}},[o("el-select",{attrs:{placeholder:"状态"},on:{change:t.changeVal},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.selectArr,function(t){return o("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),o("el-col",{attrs:{span:2}},[o("el-button",{attrs:{type:"success"},on:{click:t.onSearch}},[t._v("查询")])],1),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-button",{attrs:{type:"primary"},on:{click:t.onJumpAwardInquiry}},[t._v("中奖查询")])],1)],1)],1),t._v(" "),o("div",{staticClass:"table-main"},[o("el-table",{attrs:{data:t.tableData,border:""}},[o("el-table-column",{attrs:{align:"center",label:"编号",width:"80",type:"index",index:t.indexMethod}}),t._v(" "),o("el-table-column",{attrs:{prop:"name",align:"center",label:"话题"}}),t._v(" "),o("el-table-column",{attrs:{prop:"",align:"center",label:"话题头像",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.row.photo,fit:"fit"},on:{click:function(o){t.$store.dispatch("openImgPreview",{url:e.row.photo})}}})]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"状态",width:"80"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(1===e.row.status?"展示":"停用")+"\n          ")]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"comment",align:"center",label:"话题描述","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"url",align:"center",label:"微博地址","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"topicUrl",align:"center",label:"话题主页地址","show-overflow-tooltip":""}}),t._v(" "),o("el-table-column",{attrs:{prop:"createTime",align:"center",label:"发布时间",width:"166"}}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"展示商品",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:"info"},on:{click:function(o){t.onDisplayGoods(e.row,e.$index)}}},[t._v(t._s(e.row.goodsCount))])]}}])}),t._v(" "),o("el-table-column",{attrs:{align:"center",label:"展示排序"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{size:"mini",icon:"el-icon-edit"},on:{click:function(o){t.onEditSort(e.row,e.$index)}}}),o("span",[t._v(t._s(e.row.manualRank))])]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"操作",align:"center",width:"380"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:t.typeToggle(e.row.status)},on:{click:function(o){t.onToggleStatus(e.row)}}},[t._v(t._s(1===e.row.status?"停用":"展示"))]),t._v(" "),o("el-button",{on:{click:function(o){t.onAddOrModifyData(e.row,e.$index)}}},[t._v("编辑")]),t._v(" "),o("el-button",{on:{click:function(o){t.onRewardConfig(e.row)}}},[t._v("奖励设置")]),t._v(" "),o("el-button",{attrs:{type:"info"},on:{click:function(o){t.onTopicListTop(e.row)}}},[t._v("置顶")])]}}])})],1),t._v(" "),o("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.currentPage,"page-sizes":[10,20,30,40],"page-size":t.pagesize,layout:"total, sizes, prev, pager, next, jumper",total:t.totalSize},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}),t._v(" "),o("el-dialog",{attrs:{visible:t.dialogFormVisible},on:{"update:visible":function(e){t.dialogFormVisible=e},close:t.onCloseTopicList}},[o("el-form",{attrs:{model:t.form,"label-width":"96px"}},[o("el-form-item",{attrs:{label:"话题"}},[o("el-input",{model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"话题主页地址"}},[o("el-input",{model:{value:t.form.topicUrl,callback:function(e){t.$set(t.form,"topicUrl",e)},expression:"form.topicUrl"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"话题头像"}},[o("el-upload",{staticClass:"avatar-uploader topicAvatar-uploader",attrs:{action:t.uploadUrl,"show-file-list":!1,"on-success":t.handleAvatarSuccess}},[t.topicAvatar?o("div",{ref:"topicAvatar",staticClass:"avatar",style:{backgroundImage:"url("+t.topicAvatar+")"}}):o("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),t._v(" "),o("el-form-item",{attrs:{label:"微博地址"}},[o("el-input",{model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"话题描述内容"}},[o("el-input",{attrs:{type:"textarea"},model:{value:t.form.comment,callback:function(e){t.$set(t.form,"comment",e)},expression:"form.comment"}})],1),t._v(" "),t.form.manualRank||0===t.form.manualRank?o("el-form-item",{attrs:{label:"展示顺序"}},[o("el-input",{model:{value:t.form.manualRank,callback:function(e){t.$set(t.form,"manualRank",e)},expression:"form.manualRank"}})],1):t._e(),t._v(" "),o("el-form-item",{attrs:{label:"商品栏标题"}},[o("el-input",{model:{value:t.form.columnTitle,callback:function(e){t.$set(t.form,"columnTitle",e)},expression:"form.columnTitle"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"话题图片"}},[o("uploadImgs",{attrs:{"img-url-arr":t.form.img,"upload-url":t.uploadUrl,"handle-success":t.handleTopicImgSuccess,"max-number":9},on:{"update:imgUrlArr":t.getNewImgArr}})],1),t._v(" "),o("el-form-item",{attrs:{label:"投票文案"}},[o("el-input",{model:{value:t.form.voteCopywriter,callback:function(e){t.$set(t.form,"voteCopywriter",e)},expression:"form.voteCopywriter"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"投票内容"}},[o("el-row",{staticClass:"content"},[t._l(t.form.votingContents,function(e,i){return o("el-col",{key:i,staticClass:"topicContent",attrs:{span:6}},[o("el-input",{model:{value:e.option,callback:function(o){t.$set(e,"option",o)},expression:"item.option"}})],1)}),t._v(" "),o("el-col",{attrs:{span:3}},[t.form.votingContents.length<4?o("el-button",{staticClass:"addInput",attrs:{type:"primary",icon:"el-icon-plus",circle:""},on:{click:t.onAddTopicContent}}):t._e()],1),t._v(" "),o("el-col",{attrs:{span:3}},[t.form.votingContents.length>1?o("el-button",{class:{marginTop:t.form.votingContents.length>2},attrs:{typeof:"primary",icon:"el-icon-minus",circle:""},on:{click:t.onReduceTopicContent}}):t._e()],1)],2)],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:t.onCancel}},[t._v("取消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.onSaveTopicList}},[t._v("保存")])],1)],1),t._v(" "),o("el-dialog",{attrs:{title:"修改排序",visible:t.editSort.show},on:{"update:visible":function(e){t.$set(t.editSort,"show",e)}}},[o("el-form",[o("el-form-item",{attrs:{label:"排序值:","label-width":"120px"}},[o("el-input",{attrs:{type:"number"},model:{value:t.editSort.sort,callback:function(e){t.$set(t.editSort,"sort",e)},expression:"editSort.sort"}}),t._v(" "),o("p",{staticStyle:{color:"red"}},[t._v("排序值越小越靠前")])],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.editSort.show=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.onSaveEditSort}},[t._v("确 定")])],1)],1),t._v(" "),o("el-dialog",{attrs:{title:"话题展示商品",visible:t.displayGoods.show,width:"80%"},on:{"update:visible":function(e){t.$set(t.displayGoods,"show",e)},close:t.onCloseTopicGoods}},[t.isAddGoods?o("div",[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:4}},[o("el-input",{attrs:{placeholder:"商品名称"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.onSearchAddTopicGoods(e)}},model:{value:t.addTopicGoodsList.searchWord,callback:function(e){t.$set(t.addTopicGoodsList,"searchWord",e)},expression:"addTopicGoodsList.searchWord"}})],1),t._v(" "),o("el-col",{attrs:{span:3}},[o("el-button",{attrs:{type:"primary"},on:{click:t.onSearchAddTopicGoods}},[t._v("搜索")])],1)],1),t._v(" "),o("div",[o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.addTopicGoodsData},on:{"selection-change":t.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),o("el-table-column",{attrs:{prop:"id",align:"center",label:"id",width:"80"}}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsCode",align:"center",label:"商品编号",width:"150"}}),t._v(" "),o("el-table-column",{attrs:{prop:"title",align:"left",label:"商品名称"}}),t._v(" "),o("el-table-column",{attrs:{prop:"picture",label:"商品主图",align:"center",width:"140"},scopedSlots:t._u([{key:"default",fn:function(t){return[o("div",{staticClass:"topicAvatar addTopicGoodsImg",style:{backgroundImage:"url("+t.row.picture+")"}})]}}])})],1)],1),t._v(" "),o("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.addTopicGoodsList.currentPage,"page-sizes":[10,20,30,40],"page-size":t.addTopicGoodsList.pageNum,layout:"total, sizes, prev, pager, next, jumper",total:t.addTopicGoodsList.totalSize},on:{"size-change":t.topicGoodsAddSizeChange,"current-change":t.currentTopicGoodsAddChange}}),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.isAddGoods=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.onSaveAddGoods}},[t._v("保 存")])],1)],1):o("div",[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:2}},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.isAddGoods=!0}}},[t._v("添加")])],1),t._v(" "),o("el-col",{attrs:{span:5}},[o("el-select",{on:{change:t.changeGoodsStatus},model:{value:t.selectGood,callback:function(e){t.selectGood=e},expression:"selectGood"}},t._l(t.selectGoodsStatus,function(t,e){return o("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),o("el-col",{attrs:{span:5}},[o("el-select",{on:{change:t.changeSort},model:{value:t.displaySort,callback:function(e){t.displaySort=e},expression:"displaySort"}},t._l(t.displaySortArr,function(t,e){return o("el-option",{key:e,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-input",{attrs:{placeholder:"商品名称"},model:{value:t.displayGoods.title,callback:function(e){t.$set(t.displayGoods,"title",e)},expression:"displayGoods.title"}})],1),t._v(" "),o("el-col",{attrs:{span:4}},[o("el-input",{attrs:{placeholder:"商品编号"},model:{value:t.displayGoods.goodsCode,callback:function(e){t.$set(t.displayGoods,"goodsCode",e)},expression:"displayGoods.goodsCode"}})],1),t._v(" "),o("el-col",{attrs:{span:3}},[o("el-button",{attrs:{type:"primary"},on:{click:t.onSearchTopicGoods}},[t._v("查询")])],1)],1),t._v(" "),o("el-table",{attrs:{data:t.displayGoods.lists}},[o("el-table-column",{attrs:{prop:"id",label:"id",align:"center",width:"80"}}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsCode",label:"商品编号",align:"center",width:"120"}}),t._v(" "),o("el-table-column",{attrs:{prop:"title",label:"商品名称",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"goodsComment",label:"商品描述",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"picture",label:"商品主图",align:"center",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("uploadImg",{attrs:{"upload-url":t.uploadUrl,"handle-avatar-success":t.handleGoodsSuccess,"img-url":e.row.picture,"max-width":"120px"}},[o("el-button",{staticClass:"uploadButton",attrs:{size:"small",type:"primary"},on:{click:function(o){t.uploadImgDisplay(e.$index)}}},[t._v(t._s(e.row.picture?"重新上传":"图片上传"))])],1)]}}])}),t._v(" "),o("el-table-column",{attrs:{prop:"url",label:"商品链接",align:"center"}}),t._v(" "),o("el-table-column",{attrs:{prop:"orderNum",label:"展示顺序",align:"center",width:"80"}}),t._v(" "),o("el-table-column",{attrs:{label:"操作",align:"center",width:"280"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-button",{attrs:{type:t.typeToggle(e.row.status)},on:{click:function(o){t.onToggleTopicGoodsStatus(e.row)}}},[t._v(t._s(1===e.row.status?"停用":0===e.row.status?"展示":"爬虫中"))]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(o){t.onModifyTopicGoods(e.$index,!0)}}},[t._v("修改")]),t._v(" "),o("el-button",{attrs:{type:"info"},on:{click:function(o){t.onTopping(e.row)}}},[t._v("置顶")])]}}])})],1),t._v(" "),o("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.displayGoods.currentPage,"page-sizes":[10,20,30,40],"page-size":t.displayGoods.pageNum,layout:"total, sizes, prev, pager, next, jumper",total:t.displayGoods.totalSize},on:{"size-change":t.topicGoodsSizeChange,"current-change":t.currentTopicGoodsChange}})],1),t._v(" "),o("el-dialog",{attrs:{title:"商品编辑",width:"50%","append-to-body":"",visible:t.topicGoodsEdit.show},on:{"update:visible":function(e){t.$set(t.topicGoodsEdit,"show",e)},close:t.closeTopicGoodsEdit}},[o("el-form",{key:t.count,attrs:{model:t.topicGoodsEdit,"label-width":"80px"}},[o("el-form-item",{attrs:{label:"商品名称"}},[o("el-input",{model:{value:t.topicGoodsEdit.title,callback:function(e){t.$set(t.topicGoodsEdit,"title",e)},expression:"topicGoodsEdit.title"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"商品描述"}},[o("el-input",{model:{value:t.topicGoodsEdit.goodsComment,callback:function(e){t.$set(t.topicGoodsEdit,"goodsComment",e)},expression:"topicGoodsEdit.goodsComment"}})],1),t._v(" "),o("el-form-item",{key:t.count,attrs:{label:"商品主图"}},[o("uploadImg",{attrs:{"upload-url":t.uploadUrl,"handle-avatar-success":t.handleModifyGoodsSuccess,"img-url":t.topicGoodsEdit.picture,"max-width":"120px"}},[o("el-button",{staticClass:"uploadButton",attrs:{size:"small",type:"primary"},on:{click:t.onUploadEditImg}},[t._v(t._s(t.topicGoodsEdit.picture?"重新上传":"图片上传"))])],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"商品链接"}},[o("el-input",{model:{value:t.topicGoodsEdit.url,callback:function(e){t.$set(t.topicGoodsEdit,"url",e)},expression:"topicGoodsEdit.url"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"展示顺序"}},[o("el-input",{model:{value:t.topicGoodsEdit.orderNum,callback:function(e){t.$set(t.topicGoodsEdit,"orderNum",e)},expression:"topicGoodsEdit.orderNum"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:t.onCancelTopicGoodsEdit}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.onSaveTopicGoodsEdit}},[t._v("保 存")])],1)],1)],1),t._v(" "),o("el-dialog",{attrs:{title:"文案模板",width:"70%",visible:t.rewardSetting.show},on:{"update:visible":function(e){t.$set(t.rewardSetting,"show",e)},close:t.onCloseReward}},[o("el-form",{attrs:{model:t.rewardSetting,"label-width":"96px"}},[o("el-form-item",{attrs:{label:"中奖活动图片"}},[o("uploadImg",{attrs:{"upload-url":t.uploadUrl,"handle-avatar-success":t.handleFreeImg,"img-url":t.freeImg,"max-width":"200x"}},[o("el-button",{staticClass:"uploadButton",attrs:{size:"small",type:"primary"},on:{click:t.uploadImgDisplay}},[t._v(t._s(t.freeImg?"重新上传":"图片上传"))])],1)],1),t._v(" "),o("el-form-item",{attrs:{label:"中奖文案",prop:"winningCopywriter"}},[o("el-input",{attrs:{type:"textarea",rows:4},model:{value:t.rewardSetting.winningCopywriter,callback:function(e){t.$set(t.rewardSetting,"winningCopywriter",e)},expression:"rewardSetting.winningCopywriter"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"未中奖文案",prop:"noWinningCopywriter"}},[o("el-input",{attrs:{type:"textarea",rows:4},model:{value:t.rewardSetting.noWinningCopywriter,callback:function(e){t.$set(t.rewardSetting,"noWinningCopywriter",e)},expression:"rewardSetting.noWinningCopywriter"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"奖励方式"}},[o("el-select",{on:{change:t.changeReward},model:{value:t.rewardMethod,callback:function(e){t.rewardMethod=e},expression:"rewardMethod"}},t._l(t.rewardMethodArr,function(t){return o("el-option",{key:t.label,attrs:{label:t.label,value:t.value}})}))],1),t._v(" "),2===t.rewardSetting.type?o("el-form-item",[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:8}},[o("label",{staticClass:"rightspace"},[t._v("现金")]),t._v(" "),o("el-input",{staticClass:"rightspace prizeNumber",attrs:{"controls-position":"right",type:"number"},model:{value:t.rewardSetting.prizeContent,callback:function(e){t.$set(t.rewardSetting,"prizeContent",e)},expression:"rewardSetting.prizeContent"}}),t._v("元\n              ")],1),t._v(" "),o("el-col",{attrs:{span:10}},[o("label",{staticClass:"rightspace"},[t._v("份数")]),t._v(" "),o("el-input",{staticClass:"prizeNumber",on:{change:t.changePrizeNumber},model:{value:t.rewardSetting.prizeNumber,callback:function(e){t.$set(t.rewardSetting,"prizeNumber",e)},expression:"rewardSetting.prizeNumber"}})],1)],1)],1):t._e(),t._v(" "),1===t.rewardSetting.type?o("el-form-item",[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:8}},[o("label",{staticClass:"rightspace"},[t._v("红包额度")]),t._v(" "),o("el-input",{staticClass:"rightspace prizeNumber",attrs:{"controls-position":"right",type:"number"},model:{value:t.rewardSetting.prizeContent,callback:function(e){t.$set(t.rewardSetting,"prizeContent",e)},expression:"rewardSetting.prizeContent"}}),t._v("元\n              ")],1),t._v(" "),o("el-col",{attrs:{span:10}},[o("label",{staticClass:"rightspace"},[t._v("红包个数")]),t._v(" "),o("el-input",{staticClass:"prizeNumber",on:{change:t.changePrizeNumber},model:{value:t.rewardSetting.prizeNumber,callback:function(e){t.$set(t.rewardSetting,"prizeNumber",e)},expression:"rewardSetting.prizeNumber"}})],1)],1)],1):t._e(),t._v(" "),3===t.rewardSetting.type?o("el-form-item",[o("el-row",{attrs:{gutter:20}},[o("el-col",{attrs:{span:2}},[o("label",[t._v("礼品")])]),t._v(" "),o("el-col",{attrs:{span:22}},[o("el-table",{attrs:{data:t.giftArr}},[o("el-table-column",{attrs:{label:"编号"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-input",{model:{value:e.row.number,callback:function(o){t.$set(e.row,"number",o)},expression:"scope.row.number"}})]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"名称"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-input",{model:{value:e.row.prizeName,callback:function(o){t.$set(e.row,"prizeName",o)},expression:"scope.row.prizeName"}})]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"用户看到的价值"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-input",{model:{value:e.row.userPrice,callback:function(o){t.$set(e.row,"userPrice",o)},expression:"scope.row.userPrice"}})]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"实际价值"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-input",{model:{value:e.row.realPrice,callback:function(o){t.$set(e.row,"realPrice",o)},expression:"scope.row.realPrice"}})]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"链接"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-input",{model:{value:e.row.giftLink,callback:function(o){t.$set(e.row,"giftLink",o)},expression:"scope.row.giftLink"}})]}}])}),t._v(" "),o("el-table-column",{attrs:{label:"份数"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("el-input",{on:{change:t.changePrizeNumber},model:{value:e.row.prizeNumber,callback:function(o){t.$set(e.row,"prizeNumber",o)},expression:"scope.row.prizeNumber"}})]}}])})],1)],1)],1)],1):t._e(),t._v(" "),o("el-form-item",[o("label",{staticStyle:{width:"96px"}},[t._v("奖励号码")]),t._v(" "),o("el-row",{key:t.count,attrs:{gutter:20}},t._l(t.rewardSetting.winningNumbers,function(e,i){return o("el-col",{key:i,staticStyle:{"margin-bottom":"12px"},attrs:{span:3}},[o("el-input",{model:{value:e.num,callback:function(o){t.$set(e,"num",o)},expression:"item.num"}})],1)}))],1),t._v(" "),o("el-form-item",{attrs:{label:"活动有效时间"}},[o("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"开始时间"},model:{value:t.startTime,callback:function(e){t.startTime=e},expression:"startTime"}}),t._v("\n            -\n            "),o("el-date-picker",{attrs:{type:"datetime","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"结束时间"},model:{value:t.endTime,callback:function(e){t.endTime=e},expression:"endTime"}})],1)],1),t._v(" "),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.rewardSetting.show=!1}}},[t._v("取 消")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.onSaveRewardSetting}},[t._v("保 存")])],1)],1)],1)])},staticRenderFns:[]};var G=o("VU/8")(_,T,!1,function(t){o("RgvN"),o("njZQ")},"data-v-c2413448",null);e.default=G.exports},RgvN:function(t,e){},njZQ:function(t,e){},ovxN:function(t,e){}});