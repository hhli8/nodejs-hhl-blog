(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22c2fcaa"],{"10f0":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tabBar-wrap"},[t._t("default"),n("nav",t._l(t.nav,(function(e,a){return n("div",{key:a,staticClass:"item",class:a===t.index?"act":"",on:{click:function(n){return t.jump(e,a)}}},[n("span",{staticClass:"iconfont",domProps:{innerHTML:t._s(e.icon)}}),n("div",{staticClass:"name"},[t._v(t._s(e.name))])])})),0)],2)},i=[],r=(n("513c"),{props:{index:{type:Number,default:0}},data:function(){return{nav:[{name:"首页",icon:"&#xe621;",linkname:"Default"},{name:"分类",icon:"&#xe61e;",linkname:"Classify"},{name:"购物车",icon:"&#xe602;",linkname:"Shopcar"},{name:"我的",icon:"&#xe7ae;",linkname:"Mine"}]}},methods:{jump:function(t,e){e!==this.index&&this.$router.push({name:t.linkname})}}}),c=r,s=(n("c737"),n("e90a")),o=Object(s["a"])(c,a,i,!1,null,"317ad582",null);e["a"]=o.exports},"1dc0":function(t,e,n){},"2b00":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-default"},[n("div",{staticClass:"container"},[n("banner"),n("recommend",{attrs:{list:t.recommends}})],1),n("btm-nav")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-default-banner"},[n("van-swipe",{staticClass:"my-swipe",attrs:{autoplay:3e3,"indicator-color":"white"}},t._l(t.banners,(function(t,e){return n("van-swipe-item",{key:e},[n("img",{attrs:{src:t.url,alt:"","data-id":t.id}})])})),1)],1)},c=[],s={data:function(){return{banners:[]}},created:function(){var t=this;setTimeout((function(){t.banners=[{url:"https://img.yzcdn.cn/upload_files/2020/03/06/Fjo43b1oFhT0wNie_VwbR1cmByU7.jpg!large.jpg",id:"1"},{url:"https://img.yzcdn.cn/upload_files/2020/03/06/Fjo43b1oFhT0wNie_VwbR1cmByU7.jpg!large.jpg",id:"2"},{url:"https://img.yzcdn.cn/upload_files/2020/03/06/Fjo43b1oFhT0wNie_VwbR1cmByU7.jpg!large.jpg",id:"3"},{url:"https://img.yzcdn.cn/upload_files/2020/03/06/Fjo43b1oFhT0wNie_VwbR1cmByU7.jpg!large.jpg",id:"4"},{url:"https://img.yzcdn.cn/upload_files/2020/03/06/Fjo43b1oFhT0wNie_VwbR1cmByU7.jpg!large.jpg",id:"5"}]}),1e3)}},o=s,u=(n("5a93"),n("e90a")),l=Object(u["a"])(o,r,c,!1,null,null,null),f=l.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"recommend"},t._l(t.list,(function(e,a){return n("div",{key:a,staticClass:"item flex",on:{click:function(n){return t.goodDetail(e,a)}}},[t._m(0,!0),n("div",{staticClass:"item-right"},[n("p",{staticClass:"good-title text-line2"},[t._v("正版现货【 曾国藩家书 冰鉴 挺经 全3册 】曾国藩经典文集 曾文正公家训相人术文言文原版译注白话文译文书籍 中华名人传记书局人物传记")]),n("div",{staticClass:"good-tag"},t._l(t.tags,(function(e,a){return n("span",{key:a},[t._v(t._s(e))])})),0),t._m(1,!0)])])})),0)},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-img"},[n("img",{attrs:{src:"https://img.yzcdn.cn/upload_files/2020/03/30/Fl58QeuRKhMSjhGlxt-08YveU1nY.jpg!large.jpg",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"good-price"},[n("span",{staticClass:"unit"},[t._v("¥")]),n("span",{staticClass:"value"},[t._v("300.50")])])}],m={props:{list:{type:Array,default:function(){return[]}}},data:function(){return{tags:["直降","爆款","直销"]}},methods:{goodDetail:function(t,e){this.$router.push({name:"Detail",params:{id:11,source:"taobao"},query:{x:99}})}}},v=m,g=(n("5b69"),Object(u["a"])(v,p,d,!1,null,"0ce281c1",null)),b=g.exports,_=n("10f0"),h={components:{banner:f,recommend:b,btmNav:_["a"]},data:function(){return{recommends:[]}},created:function(){var t=this;setTimeout((function(){t.recommends=[1,2,2,2,2,2,2,2,2]}),0)}},y=h,N=(n("e8d1"),Object(u["a"])(y,a,i,!1,null,"3b21b00b",null));e["default"]=N.exports},"513c":function(t,e,n){"use strict";var a=n("1e2c"),i=n("d890"),r=n("e8d6"),c=n("1944"),s=n("faa8"),o=n("2118"),u=n("7063"),l=n("9f67"),f=n("efe2"),p=n("6d60"),d=n("b338").f,m=n("aa6b").f,v=n("d910").f,g=n("c10f").trim,b="Number",_=i[b],h=_.prototype,y=o(p(h))==b,N=function(t){var e,n,a,i,r,c,s,o,u=l(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+u}for(r=u.slice(2),c=r.length,s=0;s<c;s++)if(o=r.charCodeAt(s),o<48||o>i)return NaN;return parseInt(r,a)}return+u};if(r(b,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var j,w=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof w&&(y?f((function(){h.valueOf.call(n)})):o(n)!=b)?u(new _(N(e)),n,w):N(e)},C=a?d(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),x=0;C.length>x;x++)s(_,j=C[x])&&!s(w,j)&&v(w,j,m(_,j));w.prototype=h,h.constructor=w,c(i,b,w)}},"5a93":function(t,e,n){"use strict";var a=n("715a"),i=n.n(a);i.a},"5b69":function(t,e,n){"use strict";var a=n("1dc0"),i=n.n(a);i.a},7063:function(t,e,n){var a=n("a719"),i=n("50fb");t.exports=function(t,e,n){var r,c;return i&&"function"==typeof(r=e.constructor)&&r!==n&&a(c=r.prototype)&&c!==n.prototype&&i(t,c),t}},"715a":function(t,e,n){},c10f:function(t,e,n){var a=n("2732"),i=n("fc8c"),r="["+i+"]",c=RegExp("^"+r+r+"*"),s=RegExp(r+r+"*$"),o=function(t){return function(e){var n=String(a(e));return 1&t&&(n=n.replace(c,"")),2&t&&(n=n.replace(s,"")),n}};t.exports={start:o(1),end:o(2),trim:o(3)}},c737:function(t,e,n){"use strict";var a=n("ea2b"),i=n.n(a);i.a},cbfb:function(t,e,n){},e8d1:function(t,e,n){"use strict";var a=n("cbfb"),i=n.n(a);i.a},ea2b:function(t,e,n){},fc8c:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"}}]);