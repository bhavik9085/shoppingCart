(function(t){function e(e){for(var n,o,s=e[0],a=e[1],u=e[2],l=0,h=[];l<s.length;l++)o=s[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n]);d&&d(e);while(h.length)h.shift()();return c.push.apply(c,u||[]),i()}function i(){for(var t,e=0;e<c.length;e++){for(var i=c[e],n=!0,s=1;s<i.length;s++){var a=i[s];0!==r[a]&&(n=!1)}n&&(c.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},r={app:0},c=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var d=a;c.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0601":function(t,e,i){},"0735":function(t,e,i){"use strict";i("0601")},"37f0":function(t,e,i){"use strict";i("8b88")},"47cc":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAASCAYAAACtmXuIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAwdSURBVFhHrZl7cFT1Fce/d/fuO9ndsNkkbLJ5QwiYBw8BATOKitTWQbRM1VGs+kepWh0VqXWm4nNqZRBh1KJOUTFghQItCFSEGigCeZFk8yLvZLN57maf2ffj9mRzmRbyYhI+zM7s79x7z57fOed3zrkE3A1gafmC/3ZzsLUd4iKRCL+aOR5rI+e11PGrmTNi2VDzgdHFTWKg+hP+2+QIMAUcffxNWxF0dY0KbgJ9/9kCS91X/Grm9Fx4D6aLf+JXM2eooRims6/yq5njsXVh6OIzUV9OxZQBMV78DGqtDp72PbxkZgxb28F4etBfsYOXzBxn0z44Gr/lVzNnoGwb4OuD09zOS2ZGf/l2zNJloLv0c14yMVMGZLB8G6TKZHhNR3nJzBi4tB3i2CR4Bg0IuC28dPqYGw9BLJWAFbMwXznCS6dPwGOGz1ILmUqL7vM3J2lcLfsgj0vDQPkHvGRiJg1I0GtD0NoKgUgGkUwMu7GEvzJ9zDWfgRHFIMKq0Fv2ES+dPgMVH4ITKikgStrwLl46fXpKdyHMzgIrVaG/cjcvnT6WlpOQKxWQxsQhaLmCoN/JXxmfSQPS/MP7kGq04HwBCIUqKlv7+SvTY7D13xBGQogwIoBVoqv0U/7K9AiFwhjuPg8RK4FQLIfHVILwjRTqSTBe/AsFOJZsZCEWhGDp+Im/Mj3MtZ9DrtYhAgYyjRpd57bzV8aH8QzVcUIuiKDPBUR84EJeejQIsTiMfW8+iuVFudDPyYB32IeY1BSIMjeBYaTgwgIIggGEAoJohjIQg41Ngc/WAibiQdg/jHCAdHF+muR8EAoYGI79EUFnLxIyUmHpd0DC+FC48X0IJFk0OXAIBQUIgwUjUUMglEKkSKISYiGzzOCCpDPoJt0B+v0gRCMlyvAVeg3fI1YTN7IV6k8W6AofQHzeRrKLGQ08Q8GibBdK5PSJI1uoLDk6wIRpr/QRCkmXiAMjFdHvtKBq/xsIcRJoEtVovNwMjW4OFm14J7rPMCRRu1iZCqwkFgwlAiuNx/BgLYR0NewbBkv6pEnxgJB+m3PAWfEm/NYAFLOU6GxsRXVpKx55/VsEwyKEyY+MQBKtGCIp7UEgBmOsOsLV7F2PW5cpoBCFaNNkcfSHZGhucGPW3DxI6Ht83jKw2hBdi9AmZ5MDQlTODOi/UIa28jYkr9qMOfdsw5CpBmfeK8SC+SLoU9UU4ADdLyJ9CgSZWDLIBFViEgXYixUvvUR6qI94qHlauwF3EMZ6I/rbeiDRr0X+wyejiVLyQSHU4nbos3VQq1hyipCCFQMBOevK2TYEhgZHxnfIEhIwd0UGwn2tNBW6EAmH4Brm0NXaB5svGUUv1kAWo0HdoQ1wt/8dusxU6PPTgBhyXlwqIKUPNLj04YdUZuRob+xCQb6agueCgJI1TCdSwAphGfLjSguw5g+XoM1YhraSrWj77i3oslXILiqAdP5K0pNAn0FKND8CAwwcTdVwu92wt9YgZ76KAuwmFwYpUTm4yUXlF/zIfWwvJTAx7LDiyxdSkJUhw6KVKUjMVpMThegtbya3p2D27SsgSqQMDqvhswrgbGtBT2U5rD098Pr8uO3ZM0jMWkUG/I9Pnsuj8acOK+/NR+4SPcR6ygCpEvV7jsJiiWDVyy9SElFdDYTg7KpBX209TDVNcNkGsHTjHqQteZLXNMr5b15Ax7mPMTsjDTnLMpF4SxbEmiS6okb5jndoI8CSl7bS2kIB6sdAfRtayztgau1C2spNKHrs2n7VVVWMyr2/hiI2Dil585BUsACx6QVUGRiE/DaUfrQbMtaHRXfPI6cG4HCH0NlM8ktGhMTZeObjBl7TKFZjJS5+WgSpSEwnVgv9kqWIzZ4LsToCMeugoHDoO38RUuEAEm/NpGoUxmDzEMrO9aCleRhPftQNdXzSaEB4nfjHu6thqv6RNq3BAjJEIYkgIedOsCIHTVk2GhcG6UhSQBweeF1eBEQ6ZD/wTyoWDK/hWs7s3YKKA9ugT1ciQa9Fzl2LqS4LIYtPQ2wMA5+pHZzLDLcjALcviGG/EBlr90NBE8l4dNYcQ93hp5E0OwkKKRCbpIX2lkI47V467SLEyCh762vg6CedHg79ff1Y8NAeZBbez2u4FrfDhM4TGyAnXXIqWUolS6clHrJUPWx2Bn6aBIP+MFoqumDptsLYYcPC9Ztx1xM0Fo/DiCPbjj4AcaCbTpgSsUoqSyTkRnQmx8HjVsBhvASHM4j60y0wdQwhpaAIG7aeHVVAXBOQEQynPkDp/pepUcZg0e16qnMiuG0Rip4UCVol1VsWoYgfiL8P2oIt/FMTY2z6CT/uuh/x8QpE/B7k5Gngo/rpc/qhTYqDTCaj2i5BQJwFXdHuaGg5+jdRkL1uG+oPrkeMIojIsAtBWsdoqQmHRxzsgURBNsrjYPcIsODBw1SiRvrL5HSXPA2WymY46IePTry53wmVVk5jpg+dTXYwMgX6zXasefYEknOWR58Zcdr4FlIjr/4zBEPHqT9JqYIEYTFTqbIFEBcfifZiQ1kv/D43Vjy+E4X3Ph995uqexwRkhNO7H0dP9UE89EguGJ8P5Y0R9HY74PNSc2LJkSk5WL3lMn/31BhKvkDpl08hPUeHvBwVzeQaXK40UaDdYAURuJxD+OXOq2ZMttVR7INtOPVmNhKTtZQoMcicn0abF6O55gqdlgDMPf342XtWyBVTB+MqB3/DQB4fRxnNQJ0Qh4X5CRh2OlBVbUFPhxmrf3cEWUvW0Z2j9k1l5YnXM2C3DsIfkUFGR1CfKUdhJoswJeC+PVXIveMZ3PHk2LF/3LG3q+o4Vt6TDVefFWaLF4XzJEjSKaGNF0ObqITbXM/feWN0XT4JiUSE+Xk0kVAzd1pdyMhJo4yhektlIlbOUHD6+bsnD8YIJgPpk4lo2ADS5qVTIoejpSUtN4PqNQcxvTP11f/A3z01FmMVlRiG7BBAq1Ugc04y7PZhKst+3LIwkaqCAF21V/WN2jeVlSF3J3Q6FeI1IiSnxSA/Sw4znRT/wBBW3p2NLsP49o0JiNtOfYKzIUEVoebrg8PspCNsp3JgR0KiChKaskQMZWFHKf/E1DScP4j8ZenUgmz0gknlJehCb+cATSWZ0XGYYcTUu/bxd09Nx6ViCBkG+px0GhvFNKz4EeEC1OsUSJ6rA6mEqfIAf/fUdFfuJwezFGAWSWRTd+cg2eihyVCOgN2J3MXpaDxbzN89NT2Go5BL6D1GGIJWp4ZtwEzBsNHA4or6NEsvo2Rvjo7g1zMmII3n9mDh8mR01/fDYzdT50yD7r4jcCMdxtZuSORkZJCFsfIb/onJMTWVU7MEZPSSFQqGwIhjkHBXMUTJa9BQUQ9NWiqCIQGMpTf+f1Gm2lIKpp6MZ+Gw0ftMzmtAyiY4hywUFNKvn432ykP83VPTeuFrSnkWs9LTUF9eC1X2r6At+pxGfDbaA2bR6Yl46Z3CevUUT05nWTF8foZGcwU6GpohUC5G0ppDiIjU8LiGYKo3YenKBDScGxvkMQGxtR6DYNgOq82GlHu2o+DpKigSFuPht8ow5+c7UFNnpKBIYay4sYDU/FiM/FwVrL1GqOY/jtR1FyDV3oYlD+7E4idOoqGBxsD02ehrKeefmJzm0sPQ0IivVArhE2YjaW0JVJnrEDfnUWhWn4Q7Eo84jRRyMTDQXsU/NTF+D53+PrIhMxEtTW6serYU8+99A/LZd0K//jKNwmsxZOxEXr4KtSU3dkp6Kg5CSj6qq+vDrRsP4xdbTkGesAQFv22HZulmWM1WKIUB9NQd5p/4P0aa+lVG/g5w5jVw9XuXcwG/c1R4HX6flzv09jLu4FPg/F43L52Yv72i5S5/ksa5Bib+e0X5gee446+A6zZ8x0sm5vtd67mqj7WcueUYLxlLn+GvXNl2BXd+/2ZeMjENp3dw/3oVnOHkO7xk1A//j7XjDFexU80dfXc5L5kYq6k66pvjO9fxkrH6vI5OrvbTdO578vX1XCMxt53mXB3f8qvJabn0NddR/jW/Gh/PsIUznn+DX02OrbeWazj1Nr+amLrvnue/TU4o6Obqjk19r+H47zm308yvJqfxxKYxzr2eprO7uN6mc/xqcizV2zh7n4FfjcBx/wWyvAjGR0j54AAAAABJRU5ErkJggg=="},"56d7":function(t,e,i){"use strict";i.r(e);i("e623"),i("e379"),i("5dc8"),i("37e1");var n=i("7a23"),r={id:"nav"},c=Object(n["g"])("Home"),o=Object(n["h"])("div",{class:"devider"},"|",-1),s=Object(n["g"])("Cart "),a={class:"cart"},u={key:0,class:"items"};function d(t,e,i,d,l,h){var g=this,b=Object(n["v"])("router-link"),p=Object(n["v"])("router-view");return Object(n["q"])(),Object(n["e"])(n["a"],null,[Object(n["h"])("div",r,[Object(n["h"])(b,{to:"/",onClick:e[1]||(e[1]=function(t){return g.$store.dispatch("loadProductsAction",g.url)})},{default:Object(n["A"])((function(){return[c]})),_:1}),o,Object(n["h"])(b,{to:"/basket"},{default:Object(n["A"])((function(){return[s,Object(n["h"])("div",a,[h.inBag.length?(Object(n["q"])(),Object(n["e"])("div",u,Object(n["x"])(h.inBag.length),1)):Object(n["f"])("",!0)])]})),_:1})]),Object(n["h"])(p)],64)}var l={name:"App",data:function(){return{url:{baseUrl:"https://dummyjson.com/products",category:"",limit:"?limit=9",skipCode:"&skip=",skip:0},cartSelected:!1}},method:{},created:function(){},computed:{inBag:function(){var t=this.$store.state.inBag;return t}},beforeCreate:function(){this.$store.commit("initialiseStore")}};i("e135");l.render=d;var h=l,g=i("6c02"),b=(i("b680"),i("df8d")),p=i.n(b),f={class:"home"},j=Object(n["h"])("img",{src:p.a},null,-1),O={class:"products"},m={key:0,class:"pageControl"};function v(t,e,i,r,c,o){var s=this,a=Object(n["v"])("Aside"),u=Object(n["v"])("individualProduct");return Object(n["q"])(),Object(n["e"])("div",f,[Object(n["h"])(a,{ref:"asideComponent"},null,512),Object(n["h"])(u,{ref:"individualProductComponent"},null,512),this.currUrl.category?(Object(n["q"])(),Object(n["e"])("span",{key:0,onClick:e[1]||(e[1]=function(t){return s.$store.dispatch("loadProductsAction",s.url)})},[Object(n["g"])(Object(n["x"])(this.currUrl.category)+"   ",1),j])):Object(n["f"])("",!0),Object(n["h"])("div",O,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["u"])(this.products.products,(function(e,i){return Object(n["q"])(),Object(n["e"])("div",{class:["product",{inBag:t.isInBag(e.id)}],key:i,onClick:Object(n["B"])((function(t){return o.individualProductPushPopUp(e)}),["self","prevent"])},[Object(n["h"])("div",{class:"product-image",style:{backgroundImage:"url("+e.thumbnail+")"},onClick:function(t){return o.individualProductPushPopUp(e)}},null,12,["onClick"]),Object(n["h"])("h4",{innerHTML:e.title,onClick:function(t){return o.individualProductPushPopUp(e)}},null,8,["innerHTML","onClick"]),Object(n["h"])("p",{class:"price",onClick:function(t){return o.individualProductPushPopUp(e)}},"US$ "+Object(n["x"])(e.price.toFixed(2)),9,["onClick"]),t.isInBag(e.id)?(Object(n["q"])(),Object(n["e"])("button",{key:1,class:"remove",onClick:function(i){return t.removeFromBag(e.id)}},"❌Remove From Bag",8,["onClick"])):(Object(n["q"])(),Object(n["e"])("button",{key:0,onClick:function(i){return t.addToBag(e)}},"Add to Bag",8,["onClick"]))],10,["onClick"])})),128)),this.products.total?(Object(n["q"])(),Object(n["e"])("div",m,[o.hidePrev()?Object(n["f"])("",!0):(Object(n["q"])(),Object(n["e"])("button",{key:0,class:"prevPage",onClick:e[2]||(e[2]=function(t){return o.firstPage()})},"<<")),o.hidePrev()?Object(n["f"])("",!0):(Object(n["q"])(),Object(n["e"])("button",{key:1,class:"prevPage",onClick:e[3]||(e[3]=function(t){return o.prevPage()})},"<")),o.hideNext()?Object(n["f"])("",!0):(Object(n["q"])(),Object(n["e"])("button",{key:2,class:"nextPage",onClick:e[4]||(e[4]=function(t){return o.nextPage()})},">")),o.hideNext()?Object(n["f"])("",!0):(Object(n["q"])(),Object(n["e"])("button",{key:3,class:"prevPage",onClick:e[5]||(e[5]=function(t){return o.lastPage()})},">>"))])):Object(n["f"])("",!0)])])}var k={key:0},B=Object(n["h"])("h3",null,"Categories:",-1),U={class:"table"},y={key:0,class:"underline"};function A(t,e,i,r,c,o){var s=this;return this.categories?(Object(n["q"])(),Object(n["e"])("aside",k,[Object(n["h"])("div",{class:"menu",onClick:e[1]||(e[1]=function(t){return o.showMenu()})},"   >"),B,Object(n["h"])("div",U,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["u"])(this.categories,(function(i,r){return Object(n["q"])(),Object(n["e"])("ul",{key:r,class:{selected:o.isSelected(i)}},[Object(n["h"])("li",{onMouseover:function(t){return s.showPush(i)},onMouseleave:e[2]||(e[2]=function(t){return s.hide()}),onClick:function(e){return t.categoryLoad(c.categoryLoadUrl,i),o.showMenu()}},[Object(n["g"])(Object(n["x"])(i)+" ",1),Object(n["h"])(n["b"],{name:"width"},{default:Object(n["A"])((function(){return[o.showUndeline(i)?(Object(n["q"])(),Object(n["e"])("div",y)):Object(n["f"])("",!0)]})),_:2},1024)],40,["onMouseover","onClick"])],2)})),128))])])):Object(n["f"])("",!0)}i("7db0"),i("4de4");var P={categoryLoad:function(t,e){t.category=e,this.$store.dispatch("loadProductsAction",t)},isInBag:function(t){var e=this.$store.state.inBag,i=e.find((function(e){return e.id==t}));return i},addToBag:function(t){t.quantity=1;var e=this.$store.state.inBag;e.push(t),this.$store.dispatch("inBagAction",e)},removeFromBag:function(t){if(confirm("You are about to remove this item from the bag!!!")){var e=this.$store.state.inBag;e=e.filter((function(e){return e.id!=t})),this.$store.dispatch("inBagAction",e)}}},C={name:"Aside",data:function(){return{show:void 0,categoryLoadUrl:{baseUrl:"https://dummyjson.com/products/category/",category:"",limit:"?limit=9",skipCode:"&skip=",skip:0},position:"left",selectedCategory:void 0}},methods:{showPush:function(t){this.show=t},hide:function(){this.show=void 0},showUndeline:function(t){if(this.show==t)return this.currUrl.category!=t},showMenu:function(){var t=document.getElementsByTagName("aside"),e=document.getElementsByClassName("menu");window.innerWidth<=640&&("left"==this.position?(t[0].style.left="0",e[0].innerHTML="&nbsp;&nbsp;&nbsp;&#60;",this.position="right"):(t[0].style.left="-160px",e[0].innerHTML="&nbsp;&nbsp;&nbsp;&#62;",this.position="left"))},isSelected:function(t){if(t==this.currUrl.category)return!0}},mounted:function(){this.categoryLoad=P.categoryLoad,this.$store.dispatch("loadCategoriesAction")},computed:{categories:function(){var t=this.$store.state.categories;return t},currUrl:function(){var t=this.$store.state.currUrl;return t}}};i("37f0");C.render=A;var I=C,x=(i("a4d3"),i("e01a"),i("47cc")),w=i.n(x),M={key:0,class:"individualProductContainer"},q={class:"individualProduct"},F={class:"individualImage"},S={class:"description"},T={class:"individualTitle"},G={class:"individualDescription"},D={class:"individualRating"},N=Object(n["g"])("Customer Ratings: "),L={class:"ratingNumber"},R=Object(n["g"])(" "),V=Object(n["h"])("img",{src:w.a},null,-1),E={class:"individualAvailable"},Q={class:"individualPrice"};function Y(t,e,i,r,c,o){var s=this;return Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["u"])(this.products.products,(function(i,r){return Object(n["q"])(),Object(n["e"])(n["b"],{key:r,name:"fade"},{default:Object(n["A"])((function(){return[o.displayProduct(i.id)?(Object(n["q"])(),Object(n["e"])("div",M,[Object(n["h"])("div",q,[Object(n["h"])("div",F,[Object(n["h"])("button",{onClick:function(t){return o.prevImg(i.images.length)},class:"prev"},"<",8,["onClick"]),Object(n["h"])("img",{src:i.images[s.currentIndex],class:"imgSlider"},null,8,["src"]),Object(n["h"])("button",{onClick:function(t){return o.nextImg(i.images.length)},class:"next"},">",8,["onClick"])]),Object(n["h"])("div",S,[Object(n["h"])("div",T,[Object(n["g"])(Object(n["x"])(i.title)+" ",1),Object(n["h"])("div",{class:"individualCategory",onClick:function(e){return t.categoryLoad(s.categoryLoadUrl,i.category),o.close()}},"("+Object(n["x"])(i.category)+")",9,["onClick"])]),Object(n["h"])("p",G,Object(n["x"])(i.description),1),Object(n["h"])("div",D,[N,Object(n["h"])("span",L,"("+Object(n["x"])(i.rating)+")",1),R,Object(n["h"])("div",{class:"ratingImg",style:{width:i.rating/5*100+"px"}},[V],4)]),Object(n["h"])("div",E,"Available in Stock: "+Object(n["x"])(i.stock),1),Object(n["h"])("div",Q,[Object(n["g"])("after applying discount of "+Object(n["x"])(i.discountPercentage)+"% ",1),Object(n["h"])("strong",null,"$"+Object(n["x"])(i.price),1)]),t.isInBag(i.id)?(Object(n["q"])(),Object(n["e"])("button",{key:1,class:"remove",onClick:function(e){return t.removeFromBag(i.id)}},"❌Remove From Bag",8,["onClick"])):(Object(n["q"])(),Object(n["e"])("button",{key:0,onClick:function(e){return t.addToBag(i)}},"Add to Bag",8,["onClick"])),Object(n["h"])("div",{class:"close",onClick:e[1]||(e[1]=function(t){return o.close()})},"❌")])])])):Object(n["f"])("",!0)]})),_:2},1024)})),128)}var K={name:"individualProduct",data:function(){return{popUp:[],imagesLength:void 0,currentIndex:0,inBag:this.$store.state.inBag,categoryLoadUrl:{baseUrl:"https://dummyjson.com/products/category/",category:"",limit:"?limit=9",skipCode:"&skip=",skip:0}}},methods:{pushPopUp:function(t){this.popUp.push(t)},displayProduct:function(t){var e=this.popUp.find((function(e){return e.id==t}));return e},nextImg:function(t){this.currentIndex<t-1?this.currentIndex++:this.currentIndex=0},prevImg:function(t){this.currentIndex>0?this.currentIndex--:this.currentIndex=t-1},close:function(){this.popUp=[],this.currentIndex=0}},computed:{products:function(){var t=this.$store.state.allProducts;return t}},created:function(){this.categoryLoad=P.categoryLoad,this.isInBag=P.isInBag,this.addToBag=P.addToBag,this.removeFromBag=P.removeFromBag}};i("e82a");K.render=Y;var J=K,W={components:{Aside:I,individualProduct:J},name:"Home",data:function(){return{inBag:this.$store.state.inBag,url:{baseUrl:"https://dummyjson.com/products",category:"",limit:"?limit=9",skipCode:"&skip=",skip:0}}},methods:{nextPage:function(){this.url.baseUrl=this.currUrl.baseUrl,this.url.skip=parseInt(this.currUrl.skip)+9,this.$store.dispatch("loadProductsAction",this.url)},prevPage:function(){this.url.baseUrl=this.currUrl.baseUrl,this.url.skip=parseInt(this.currUrl.skip)-9,this.$store.dispatch("loadProductsAction",this.url)},firstPage:function(){this.url.baseUrl=this.currUrl.baseUrl,this.url.skip=0,this.$store.dispatch("loadProductsAction",this.url)},lastPage:function(){this.url.baseUrl=this.currUrl.baseUrl,this.url.skip=this.products.total-this.products.total%9,this.$store.dispatch("loadProductsAction",this.url)},individualProductPushPopUp:function(t){this.$refs.individualProductComponent.pushPopUp(t)},hideNext:function(){if(this.currUrl.skip+9>=this.products.total)return!0},hidePrev:function(){if(this.currUrl.skip-9<0)return!0}},created:function(){this.$store.dispatch("loadProductsAction",this.url),this.isInBag=P.isInBag,this.addToBag=P.addToBag,this.removeFromBag=P.removeFromBag},computed:{products:function(){var t=this.$store.state.allProducts;return t},currUrl:function(){var t=this.$store.state.currUrl;return t}}};i("5825");W.render=v;var X=W,H=i("d942"),z=i.n(H),Z={class:"basket"},$={key:0,class:"empty"},_=Object(n["h"])("img",{src:z.a,style:{height:"200px"}},null,-1),tt=Object(n["h"])("h3",null,"Please add Something In the Bag",-1),et={key:1,class:"items"},it={class:"photo"},nt={class:"description"},rt={class:"price"},ct={class:"quantity-area"},ot={class:"quantity"},st={class:"amount"},at={class:"grand-total"};function ut(t,e,i,r,c,o){var s=this;return Object(n["q"])(),Object(n["e"])("div",Z,[this.inBag.length<1?(Object(n["q"])(),Object(n["e"])("div",$,[_,tt])):(Object(n["q"])(),Object(n["e"])("div",et,[(Object(n["q"])(!0),Object(n["e"])(n["a"],null,Object(n["u"])(c.inBag,(function(t,e){return Object(n["q"])(),Object(n["e"])("div",{class:"item",key:e},[Object(n["h"])("div",{class:"remove",onClick:function(e){return o.removeFromBag(t.id)}},"Remove item",8,["onClick"]),Object(n["h"])("div",it,[Object(n["h"])("img",{src:t.thumbnail,alt:""},null,8,["src"])]),Object(n["h"])("div",nt,Object(n["x"])(t.description),1),Object(n["h"])("div",rt,[Object(n["h"])("span",ct,[Object(n["h"])("button",{disabled:t.quantity<=1,onClick:function(e){t.quantity--,s.$store.dispatch("inBagAction",s.inBag)}},"-",8,["disabled","onClick"]),Object(n["h"])("span",ot,Object(n["x"])(t.quantity),1),Object(n["h"])("button",{onClick:function(e){t.quantity++,s.$store.dispatch("inBagAction",s.inBag)}},"+",8,["onClick"])]),Object(n["h"])("span",st,"US$ "+Object(n["x"])((t.price*t.quantity).toFixed(2)),1)])])})),128)),Object(n["h"])("div",at," Grand Total: US$ "+Object(n["x"])(o.grandTotal()),1)]))])}var dt={name:"Basket",data:function(){return{inBag:this.$store.state.inBag}},methods:{removeFromBag:function(t){confirm("You are about to remove this item from the bag!!!")&&(this.inBag=this.inBag.filter((function(e){return e.id!=t})),this.$store.dispatch("inBagAction",this.inBag))},grandTotal:function(){for(var t=0,e=0;e<this.inBag.length;e++)t+=this.inBag[e].quantity*this.inBag[e].price;return t.toFixed(2)}},computed:{}};i("0735");dt.render=ut;var lt=dt,ht=[{path:"/",name:"Home",component:X},{path:"/basket",name:"Basket",component:lt}],gt=Object(g["a"])({history:Object(g["b"])(),routes:ht}),bt=gt,pt=i("bc3a"),ft=i.n(pt),jt=i("5502"),Ot=Object(jt["a"])({state:{allProducts:[],inBag:[],currUrl:{},categories:[]},mutations:{initialiseStore:function(t){localStorage.getItem("inBag")&&(t.inBag=JSON.parse(localStorage.getItem("inBag")))},loadProductsMutation:function(t,e){t.allProducts=e.products,t.currUrl.baseUrl=e.currUrl.baseUrl,t.currUrl.skip=e.currUrl.skip,t.currUrl.category=e.currUrl.category},inBagMutation:function(t,e){t.inBag=e},loadCategoriesMutation:function(t,e){t.categories=e.data}},actions:{loadProductsAction:function(t,e){var i=t.commit,n={};ft.a.get(e.baseUrl+e.category+e.limit+e.skipCode+e.skip).then((function(t){n.products=t.data,n.currUrl=e,i("loadProductsMutation",n)}))},inBagAction:function(t,e){var i=t.commit;i("inBagMutation",e)},loadCategoriesAction:function(t){var e=t.commit;ft.a.get("https://dummyjson.com/products/categories").then((function(t){e("loadCategoriesMutation",t)}))}},modules:{}});Object(n["d"])(h).use(Ot).use(bt).mount("#app"),Ot.subscribe((function(t,e){localStorage.setItem("inBag",JSON.stringify(e.inBag))}))},5825:function(t,e,i){"use strict";i("db65")},"8b88":function(t,e,i){},d942:function(t,e,i){t.exports=i.p+"img/download.fdf3f79d.svg"},db65:function(t,e,i){},df8d:function(t,e,i){t.exports=i.p+"img/cross.f0a8e785.png"},df8e:function(t,e,i){},e135:function(t,e,i){"use strict";i("df8e")},e82a:function(t,e,i){"use strict";i("fd7d")},fd7d:function(t,e,i){}});
//# sourceMappingURL=app.27a9a16d.js.map