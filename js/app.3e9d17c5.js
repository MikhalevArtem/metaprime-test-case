(function(){"use strict";var e={9564:function(e,t,n){var l=n(9242),a=n(3396);const r={class:"wrapper h-screen mx-auto pa-6 d-flex flex-column flex-sm-row justify-start justify-sm-space-around"};function i(e,t,n,l,i,u){const c=(0,a.up)("unselected-faculties"),s=(0,a.up)("selected-faculties");return(0,a.wg)(),(0,a.iD)("div",r,[(0,a.Wm)(c),(0,a.Wm)(s)])}var u=n(65),c=n(7139),s=n(7312),o=n(848),d=n(9066),f=n(2666),m=n(4413);const p=e=>((0,a.dD)("data-v-377a7668"),e=e(),(0,a.Cn)(),e),v={key:1,class:"font-weight-bold font-weight-bold text-center"},h=p((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",{class:"text-left"}),(0,a._)("th",{class:"text-left"},"ID"),(0,a._)("th",{class:"text-left"},"Имя")])],-1)));function g(e,t,n,l,r,i){return(0,a.wg)(),(0,a.j4)(o._,{class:"list-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(f.r,{class:"list-card__filter",label:"сортировать по:",variant:"solo",modelValue:r.select,"onUpdate:modelValue":t[0]||(t[0]=e=>r.select=e),items:r.sortСriteria,"item-title":"text","item-value":"value","return-object":""},null,8,["modelValue","items"]),e.loadingStatus?((0,a.wg)(),(0,a.j4)(d.L,{key:0,class:"loader",size:50,color:"amber",indeterminate:""})):e.unselectedFaculties.length?((0,a.wg)(),(0,a.j4)(m.Y,{key:2},{default:(0,a.w5)((()=>[h,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.sortedFaculties,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",null,[(0,a.Wm)(s.T,{color:"secondary",icon:"mdi-check-bold",size:"x-small",onClick:n=>e.selectFaculty(t.id)},null,8,["onClick"])]),(0,a._)("td",null,(0,c.zw)(t.id),1),(0,a._)("td",null,(0,c.zw)(t.data.name),1)])))),128))])])),_:1})):((0,a.wg)(),(0,a.iD)("p",v," Список пуст. "))])),_:1})}var b={name:"unselectedFaculties",data(){return{select:{text:"ID",value:0},"sortСriteria":[{text:"ID",value:0},{text:"Имя",value:1}]}},methods:{...(0,u.OI)(["selectFaculty"])},computed:{...(0,u.Se)({unselectedFaculties:"getUnselectedFaculties",loadingStatus:"getLoadingStatus"}),sortedFaculties(){return 0===this.select.value?this.unselectedFaculties.slice().sort(((e,t)=>e.id-t.id)):this.unselectedFaculties.slice().sort(((e,t)=>e.data.name[0].toUpperCase().localeCompare(t.data.name[0].toUpperCase())))}}},y=n(89);const _=(0,y.Z)(b,[["render",g],["__scopeId","data-v-377a7668"]]);var F=_;const w=e=>((0,a.dD)("data-v-7abdb38a"),e=e(),(0,a.Cn)(),e),x={key:0,class:"font-weight-bold text-center"},j=w((()=>(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th"),(0,a._)("th",{class:"text-left"},"ID"),(0,a._)("th",{class:"text-left"},"Имя")])],-1)));function k(e,t,n,l,r,i){return(0,a.wg)(),(0,a.j4)(o._,{class:"selected-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(f.r,{class:"selected-card__filter",label:"сортировать по:",variant:"solo",modelValue:r.select,"onUpdate:modelValue":t[0]||(t[0]=e=>r.select=e),items:r.sortСriteria,"item-title":"text","item-value":"value","return-object":""},null,8,["modelValue","items"]),e.selectedFaculties.length?((0,a.wg)(),(0,a.j4)(m.Y,{key:1},{default:(0,a.w5)((()=>[j,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.sortedFaculties,(t=>((0,a.wg)(),(0,a.iD)("tr",{key:t.id},[(0,a._)("td",null,[(0,a.Wm)(s.T,{color:"primary",icon:"mdi-close-thick",size:"x-small",onClick:n=>e.unselectFaculty(t.id)},null,8,["onClick"])]),(0,a._)("td",null,(0,c.zw)(t.id),1),(0,a._)("td",null,(0,c.zw)(t.data.name),1)])))),128))])])),_:1})):((0,a.wg)(),(0,a.iD)("p",x," Список пуст. "))])),_:1})}var O={name:"selectedFaculties",data(){return{select:{text:"ID",value:0},"sortСriteria":[{text:"ID",value:0},{text:"Имя",value:1}]}},methods:{...(0,u.OI)(["unselectFaculty"])},computed:{...(0,u.Se)({selectedFaculties:"getSelectedFaculties"}),sortedFaculties(){return 0===this.select.value?this.selectedFaculties.slice().sort(((e,t)=>e.id-t.id)):this.selectedFaculties.slice().sort(((e,t)=>e.data.name[0].toUpperCase().localeCompare(t.data.name[0].toUpperCase())))}}};const C=(0,y.Z)(O,[["render",k],["__scopeId","data-v-7abdb38a"]]);var S=C,D={components:{UnselectedFaculties:F,SelectedFaculties:S},methods:{...(0,u.nv)(["fetchFaculties"])},mounted(){this.fetchFaculties()}};const I=(0,y.Z)(D,[["render",i],["__scopeId","data-v-c9a500f6"]]);var T=I,P=(0,u.MT)({state:()=>({unselectedFaculties:[],selectedFaculties:[],loadingStatus:!1}),mutations:{addFaculties(e,t){e.unselectedFaculties=t},selectFaculty(e,t){e.selectedFaculties.push(...e.unselectedFaculties.splice(e.unselectedFaculties.findIndex((e=>e.id===t)),1))},unselectFaculty(e,t){e.unselectedFaculties.push(...e.selectedFaculties.splice(e.selectedFaculties.findIndex((e=>e.id===t)),1))}},actions:{async fetchFaculties({commit:e,state:t}){t.loadingStatus=!0;let l=await n.e(275).then(n.bind(n,8275));e("addFaculties",l.default),t.loadingStatus=!1}},getters:{getUnselectedFaculties(e){return e.unselectedFaculties},getSelectedFaculties(e){return e.selectedFaculties},getLoadingStatus(e){return e.loadingStatus}}}),U=(n(9773),n(8685)),z=(0,U.Rd)();async function E(){const e=await n.e(461).then(n.t.bind(n,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}E(),(0,l.ri)(T).use(P).use(z).mount("#app")}},t={};function n(l){var a=t[l];if(void 0!==a)return a.exports;var r=t[l]={exports:{}};return e[l](r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,l,a,r){if(!l){var i=1/0;for(o=0;o<e.length;o++){l=e[o][0],a=e[o][1],r=e[o][2];for(var u=!0,c=0;c<l.length;c++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](l[c])}))?l.splice(c--,1):(u=!1,r<i&&(i=r));if(u){e.splice(o--,1);var s=a();void 0!==s&&(t=s)}}return t}r=r||0;for(var o=e.length;o>0&&e[o-1][2]>r;o--)e[o]=e[o-1];e[o]=[l,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(l,a){if(1&a&&(l=this(l)),8&a)return l;if("object"===typeof l&&l){if(4&a&&l.__esModule)return l;if(16&a&&"function"===typeof l.then)return l}var r=Object.create(null);n.r(r);var i={};e=e||[null,t({}),t([]),t(t)];for(var u=2&a&&l;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){i[e]=function(){return l[e]}}));return i["default"]=function(){return l},n.d(r,i),r}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,l){return n.f[l](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+(461===e?"webfontloader":e)+"."+{275:"7ff70d2b",461:"184240fb"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="metaprime-test-case:";n.l=function(l,a,r,i){if(e[l])e[l].push(a);else{var u,c;if(void 0!==r)for(var s=document.getElementsByTagName("script"),o=0;o<s.length;o++){var d=s[o];if(d.getAttribute("src")==l||d.getAttribute("data-webpack")==t+r){u=d;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",t+r),u.src=l),e[l]=[a];var f=function(t,n){u.onerror=u.onload=null,clearTimeout(m);var a=e[l];if(delete e[l],u.parentNode&&u.parentNode.removeChild(u),a&&a.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/metaprime-test-case/"}(),function(){var e={143:0};n.f.j=function(t,l){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)l.push(a[2]);else{var r=new Promise((function(n,l){a=e[t]=[n,l]}));l.push(a[2]=r);var i=n.p+n.u(t),u=new Error,c=function(l){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=l&&("load"===l.type?"missing":l.type),i=l&&l.target&&l.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",u.name="ChunkLoadError",u.type=r,u.request=i,a[1](u)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,l){var a,r,i=l[0],u=l[1],c=l[2],s=0;if(i.some((function(t){return 0!==e[t]}))){for(a in u)n.o(u,a)&&(n.m[a]=u[a]);if(c)var o=c(n)}for(t&&t(l);s<i.length;s++)r=i[s],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(o)},l=self["webpackChunkmetaprime_test_case"]=self["webpackChunkmetaprime_test_case"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(9564)}));l=n.O(l)})();
//# sourceMappingURL=app.3e9d17c5.js.map