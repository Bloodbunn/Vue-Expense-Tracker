(function(){"use strict";var e={1997:function(e,t,n){var r=n(5130),o=n(7411),a=(n(7917),n(4114),n(6768));const s={class:"font-bold text-xl text-left mb-3"};function l(e,t){return(0,a.uX)(),(0,a.CE)("h1",s,"Expense Tracker")}var u=n(1241);const i={},c=(0,u.A)(i,[["render",l]]);var d=c,f=n(4232);const p=(0,a.Lk)("h4",{class:"uppercase text-left font-semibold text-sm"},"Your Balance: ",-1),m={class:"font-bold text-lg text-left"};var b={__name:"BalanceComponent",props:{total:{type:Number,required:!0}},setup(e){const t=e;return(e,n)=>((0,a.uX)(),(0,a.CE)(a.FK,null,[p,(0,a.Lk)("p",m,"$"+(0,f.v_)(t.total),1)],64))}};const v=b;var x=v;const y={class:"flex flex-row justify-around mt-3 p-2 border border-gray-100 shadow-md"},g={class:"border-r border-gray-200 basis-1/2"},h=(0,a.Lk)("h4",{class:"uppercase font-semibold text-sm text-center"},"INCOME",-1),k={class:"font-semibold text-green-600"},L={class:"basis-1/2"},w=(0,a.Lk)("h4",{class:"uppercase text-center font-semibold text-sm mx-auto"},"EXPENSE",-1),E={class:"font-semibold text-red-600"};var _={__name:"IncomeExpense",props:{income:{type:Number,required:!0},expense:{type:Number,required:!0}},setup(e){const t=e;return(e,n)=>((0,a.uX)(),(0,a.CE)("div",y,[(0,a.Lk)("div",g,[h,(0,a.Lk)("p",k,"+$"+(0,f.v_)(t.income),1)]),(0,a.Lk)("div",L,[w,(0,a.Lk)("p",E,"$"+(0,f.v_)(t.expense),1)])]))}};const C=_;var O=C;const F=(0,a.Lk)("h2",{class:"font-bold text-lg mt-5 border-b-2 border-gray-200 text-left"},"History",-1),T={class:"mt-2"},j=["onClick"];var X={__name:"TransactionList",props:{transactions:{type:Array,required:!0}},emits:["transactionDeleted"],setup(e,{emit:t}){const n=e,r=t,o=e=>{r("transactionDeleted",e)};return(e,t)=>((0,a.uX)(),(0,a.CE)(a.FK,null,[F,(0,a.Lk)("ul",T,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(n.transactions,(e=>((0,a.uX)(),(0,a.CE)("li",{key:e.id,class:(0,f.C4)([e.amount<0?"border-r-red-600 border-r-2":"border-r-green-600 border-r-2","relative group bg-white p-1 border border-gray-100 shadow-md mt-1 font-semibold text-sm flex justify-between"])},[(0,a.eW)((0,f.v_)(e.text)+" ",1),(0,a.Lk)("span",null,"$"+(0,f.v_)(e.amount),1),(0,a.Lk)("button",{onClick:t=>o(e.id),class:"absolute w-4 opacity-0 max-md:opacity-100 max-md:w-3 max-md:text-xs group-hover:opacity-100 transition-all duration-300 ease-linear -left-5 top-2 text-white text-sm bg-red-600"},"X",8,j)],2)))),128))])],64))}};const S=X;var A=S,N=n(144);const K=(0,a.Lk)("h2",{class:"font-bold text-lg mt-4 text-left border-b-2 border-gray-200"},"Add new transaction",-1),I={class:"flex flex-col text-left"},W=(0,a.Lk)("label",{class:"my-1 font-bold text-sm",for:"text"},"Text",-1),$={class:"flex flex-col text-left"},q=(0,a.Lk)("label",{class:"mt-3 mb-1 font-bold text-sm",for:"amount"},[(0,a.eW)("Amount "),(0,a.Lk)("br"),(0,a.eW)(" (Negative: Expense, Positive: Income)")],-1),D=(0,a.Lk)("button",{class:"w-full bg-purple-500 text-white text-sm font-bold p-1 mt-2 hover:bg-purple-700 transition-all duration-200 ease-linear"},"Add Transaction",-1);var J={__name:"AddTransaction",emits:["transactionSubmitted"],setup(e,{emit:t}){const n=(0,o.dj)(),s=(0,N.KR)(""),l=(0,N.KR)(""),u=t,i=()=>{if(!s.value||!l.value)return void n.error("Both fields must be filled");const e={text:s.value,amount:parseFloat(l.value)};u("transactionSubmitted",e),s.value="",l.value=""};return(e,t)=>((0,a.uX)(),(0,a.CE)(a.FK,null,[K,(0,a.Lk)("form",{onSubmit:(0,r.D$)(i,["prevent"])},[(0,a.Lk)("div",I,[W,(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.value=e),class:"p-1 border border-gray-300 outline-blue-400",type:"text",id:"text",placeholder:"Enter text..."},null,512),[[r.Jo,s.value]])]),(0,a.Lk)("div",$,[q,(0,a.bo)((0,a.Lk)("input",{"onUpdate:modelValue":t[1]||(t[1]=e=>l.value=e),class:"p-1 border border-gray-300 outline-blue-400",placeholder:"Enter amount...",type:"text",id:"amount"},null,512),[[r.Jo,l.value]])]),D],32)],64))}};const M=J;var P=M;const B={class:"w-[300px] max-[305px]:w-[90%] mx-auto border border-gray-200 shadow-lg p-5 bg-gray-100"};var R={__name:"App",setup(e){const t=(0,o.dj)(),n=(0,N.KR)([]);(0,a.sV)((()=>{const e=JSON.parse(localStorage.getItem("transactions"));e&&(n.value=e)}));const r=()=>{localStorage.setItem("transactions",JSON.stringify(n.value))},s=(0,a.EW)((()=>n.value.reduce(((e,t)=>e+t.amount),0))),l=(0,a.EW)((()=>n.value.filter((e=>e.amount>0)).reduce(((e,t)=>e+t.amount),0).toFixed(2))),u=(0,a.EW)((()=>n.value.filter((e=>e.amount<0)).reduce(((e,t)=>e+t.amount),0).toFixed(2))),i=e=>{n.value.push({id:c(),text:e.text,amount:e.amount}),r(),t.success("Transaction added successfully")},c=()=>Math.floor(1e3*Math.random()),f=e=>{n.value=n.value.filter((t=>t.id!==e)),r(),t.success("Transaction deleted successfully")};return(e,t)=>((0,a.uX)(),(0,a.CE)("div",B,[(0,a.bF)(d),(0,a.bF)(x,{total:+s.value},null,8,["total"]),(0,a.bF)(O,{income:+l.value,expense:+u.value},null,8,["income","expense"]),(0,a.bF)(A,{transactions:n.value,onTransactionDeleted:f},null,8,["transactions"]),(0,a.bF)(P,{onTransactionSubmitted:i})]))}};const V=R;var U=V,H=n(782),Y=(0,H.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});const z=(0,r.Ef)(U).use(Y);z.use(o.Ay),z.mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var l=!0,u=0;u<r.length;u++)(!1&a||s>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(l=!1,a<s&&(s=a));if(l){e.splice(c--,1);var i=o();void 0!==i&&(t=i)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,s=r[0],l=r[1],u=r[2],i=0;if(s.some((function(t){return 0!==e[t]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var c=u(n)}for(t&&t(r);i<s.length;i++)a=s[i],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkexpense"]=self["webpackChunkexpense"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[504],(function(){return n(1997)}));r=n.O(r)})();
//# sourceMappingURL=app.193e0bca.js.map