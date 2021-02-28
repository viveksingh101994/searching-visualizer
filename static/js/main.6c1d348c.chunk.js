(this["webpackJsonpsearching-visualizer"]=this["webpackJsonpsearching-visualizer"]||[]).push([[0],{53:function(e,n,r){},54:function(e,n,r){},70:function(e,n,r){"use strict";r.r(n);var t=r(0),a=r.n(t),i=r(12),c=r.n(i),u=(r(53),r(54),r(7)),s=r.n(u),o=r(9),l=r(11),p=r(30),h={linearSearch:"Linear search",binarySearch:"Binary search",jumpSearch:"Jump search",interpolationSearch:"Interpolation search",exponentialSearch:"Exponential search",fibonacciSearch:"Fibonacci search"},m=function(e){switch(e){case h.binarySearch:return d(f.binarySearch.complexity);case h.jumpSearch:return d(f.jumpSearch.complexity);case h.interpolationSearch:return d(f.interpolationSearch.complexity);case h.exponentialSearch:return d(f.exponentialSearch.complexity);case h.fibonacciSearch:return d(f.fibonacciSearch.complexity);case h.linearSearch:default:return d(f.linearSearch.complexity)}},d=function(e){var n=[];for(var r in e)n.push("".concat(b[r],": ").concat(e[r]));return n},b={worst:"WORST CASE PERFORMANCE",best:"BEST CASE PERFORMANCE",average:"AVERAGE CASE PERFORMANCE"},f={linearSearch:{complexity:{worst:"O(1)",best:"O(1)",average:"O(n/2)"}},binarySearch:{complexity:{worst:"O(1)",best:"O(1)",average:"O(log n)"}},jumpSearch:{complexity:{worst:"O(1)",best:"O(1)",average:"O(\u221an)"}},interpolationSearch:{complexity:{worst:"O(1)",best:"O(1)",average:"O(log log n)"}},exponentialSearch:{complexity:{worst:"O(1)",best:"O(1)",average:"O(log n)"}},fibonacciSearch:{complexity:{worst:"O(1)",best:"O(1)",average:"O(log n)"}}},x=function(e,n){return Math.floor(Math.random()*(n-e+1)+e)},g=function(e){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r=[],t=0;t<n;t+=1)r.push({num:x(5,500),visited:!1,result:!1});return e!==h.linearSearch&&r.sort((function(e,n){return e.num-n.num})),r},j=function(e){return new Promise((function(n){return setTimeout(n,500*(e<0?-1*e:e))}))},v="SET_BINARY_SEARCH",O="SET_LINEAR_SEARCH",S=function(e,n){return{type:O,payload:{items:Object(p.a)(e),currentAlgo:n,isRunning:y(e)}}},y=function(e){return e.every((function(e){return!e.result&&!e.visited}))?0:e.some((function(e){return e.result}))?1:e.some((function(e){return e.visited}))?-1:void 0},k=r(14),w=function(){var e=Object(o.a)(s.a.mark((function e(n,r,t,a){var i,c,u,o,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=Object(p.a)(n),c=0,u=i.length-1;case 2:if(!(c<=u)){e.next=22;break}return o=Math.floor((c+u)/2),(l=Object(k.a)({},i[o])).visited=!0,i[o]=l,e.next=9,j(a);case 9:if(t(S(i,h.binarySearch)),i[o].num!==parseInt(r)){e.next=19;break}return l.result=!0,i[o]=l,e.next=15,j(a);case 15:return t(S(i,h.binarySearch)),e.abrupt("break",22);case 19:i[o].num<parseInt(r)?c=o+1:u=o-1;case 20:e.next=2;break;case 22:return e.next=24,j(a);case 24:t(S(i,h.binarySearch));case 25:case"end":return e.stop()}}),e)})));return function(n,r,t,a){return e.apply(this,arguments)}}(),A=function(){var e=Object(o.a)(s.a.mark((function e(n,r,t,a){var i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=Math.floor(Math.sqrt(n.length)),c=0;case 2:if(!(n[Math.min(i,n.length)-1].num<parseInt(r))){e.next=13;break}return n[Math.min(i,n.length)-1]={num:n[Math.min(i,n.length)-1].num,visited:!0,result:!1},e.next=6,j(a);case 6:if(t(S(n,h.jumpSearch)),c=i,i+=Math.floor(Math.sqrt(n.length)),!(c>=i)){e.next=11;break}return e.abrupt("return",t(S(n,h.jumpSearch)));case 11:e.next=2;break;case 13:if(!(n[c].num<parseInt(r))){e.next=25;break}return n[c]={num:n[c].num,visited:!0,result:!1},e.next=17,j(a);case 17:if(t(S(n,h.jumpSearch)),++c!==Math.min(i,n.length)){e.next=23;break}return e.next=22,j(a);case 22:return e.abrupt("return",t(S(n,h.jumpSearch)));case 23:e.next=13;break;case 25:return n[c].num===parseInt(r)&&(n[c]={num:n[c].num,visited:!0,result:!0}),e.next=28,j(a);case 28:t(S(n,h.jumpSearch));case 29:case"end":return e.stop()}}),e)})));return function(n,r,t,a){return e.apply(this,arguments)}}(),N=function(){var e=Object(o.a)(s.a.mark((function e(n,r,t,a){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0;case 1:if(!(i<n.length)){e.next=14;break}if(parseInt(r)!==n[i].num){e.next=7;break}return n[i]={num:n[i].num,visited:!0,result:!0},e.abrupt("break",14);case 7:n[i]={num:n[i].num,visited:!0,result:!1};case 8:return e.next=10,j(a);case 10:t(S(n,h.linearSearch));case 11:i++,e.next=1;break;case 14:return e.next=16,j(a);case 16:t(S(n,h.linearSearch));case 17:case"end":return e.stop()}}),e)})));return function(n,r,t,a){return e.apply(this,arguments)}}(),E=function(){var e=Object(o.a)(s.a.mark((function e(n,r,t,a){var i,c,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i=0,c=n.length-1;case 2:if(!(i<=c&&parseInt(r)>=n[i].num&&parseInt(r)<=n[c].num)){e.next=26;break}return n[i]={num:n[i].num,visited:!0,result:!1},n[c]={num:n[c].num,visited:!0,result:!1},e.next=7,j(a);case 7:if(t(S(n,h.interpolationSearch)),i!==c){e.next=13;break}return n[i].num===parseInt(r)&&(n[i]={num:n[i].num,visited:!0,result:!0}),e.next=12,j(a);case 12:return e.abrupt("return",t(S(n,h.interpolationSearch)));case 13:if(u=Math.floor(i+(c-i)/(n[c].num-n[i].num)*(parseInt(r)-n[i].num)),n[u]={num:n[u].num,visited:!0,result:!1},n[u].num!==parseInt(r)){e.next=20;break}return n[u]={num:n[u].num,visited:!0,result:!0},e.next=19,j(a);case 19:return e.abrupt("return",t(S(n,h.interpolationSearch)));case 20:return e.next=22,j(a);case 22:t(S(n,h.interpolationSearch)),n[u].num<parseInt(r)?i=u+1:c=u-1,e.next=2;break;case 26:return e.abrupt("return",t(S(n,h.interpolationSearch)));case 27:case"end":return e.stop()}}),e)})));return function(n,r,t,a){return e.apply(this,arguments)}}(),C=function(){var e=Object(o.a)(s.a.mark((function e(n,r,t,a){var i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=parseInt(r),n[0].num!==r){e.next=6;break}return n[0]={num:n[0].num,visited:!0,result:!0},e.next=5,j(a);case 5:t(S(n,h.exponentialSearch));case 6:for(i=1;i<n.length&&n[i].num<=r;)i*=2;return e.next=10,I(n,i/2,Math.min(i,n.length-1),r,t,a);case 10:case"end":return e.stop()}}),e)})));return function(n,r,t,a){return e.apply(this,arguments)}}();function I(e,n,r,t,a,i){return R.apply(this,arguments)}function R(){return(R=Object(o.a)(s.a.mark((function e(n,r,t,a,i,c){var u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t>=r)){e.next=16;break}return u=Math.floor(r+(t-r)/2),n[u]={num:n[u].num,visited:!0,result:!1},e.next=5,j(c);case 5:if(i(S(n,h.exponentialSearch)),n[u].num!==a){e.next=11;break}return n[u]={num:n[u].num,visited:!0,result:!0},e.next=10,j(c);case 10:return e.abrupt("return",i(S(n,h.exponentialSearch)));case 11:if(!(n[u].num>a)){e.next=15;break}return e.abrupt("return",I(n,r,u-1,a,i));case 15:return e.abrupt("return",I(n,u+1,t,a,i));case 16:return e.abrupt("return",i(S(n,h.exponentialSearch)));case 17:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var M,L,T=function(){var e=Object(o.a)(s.a.mark((function e(n,r,t,a){var i,c,u,o,l;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(r=parseInt(r),u=(i=0)+(c=1);u<r;)u=(i=c)+(c=u);o=-1;case 6:if(!(u>1)){e.next=31;break}if(l=Math.min(o+i,n.length-1),n[l]={num:n[l].num,visited:!0,result:!1},!(n[l].num<r)){e.next=16;break}i=(u=c)-(c=i),o=l,e.next=26;break;case 16:if(!(n[l].num>r)){e.next=22;break}i=(u=i)-(c-=i),e.next=26;break;case 22:return n[l]={num:n[l].num,visited:!0,result:!0},e.next=25,j(a);case 25:return e.abrupt("return",t(S(n,h.fibonacciSearch)));case 26:return e.next=28,j(a);case 28:t(S(n,h.fibonacciSearch)),e.next=6;break;case 31:if(!c||n[o+1].num!==r){e.next=36;break}return n[o+1]={num:n[o+1].num,visited:!0,result:!0},e.next=35,j(a);case 35:return e.abrupt("return",t(S(n,h.fibonacciSearch)));case 36:t(S(n,h.fibonacciSearch));case 37:case"end":return e.stop()}}),e)})));return function(n,r,t,a){return e.apply(this,arguments)}}(),_=function(e,n,r,t,a){var i=e.map((function(e){return{num:e.num,visited:!1,result:!1}}));r(S(i,t)),t===h.linearSearch?N(i,n,r,a):t===h.binarySearch?w(i,n,r,a):t===h.jumpSearch?A(i,n,r,a):t===h.interpolationSearch?E(i,n,r,a):t===h.exponentialSearch?C(i,n,r,a):T(i,n,r,a)},P=r(42),B=r(35),z=r(36),F=r(2),D=z.a.div(L||(L=Object(B.a)(["\n  grid-row-start: 1;\n  grid-row-end: 75;\n  border-radius: 5px 5px 5px 5px;\n  padding-top: 7px;\n  font-family: sans-serif;\n  font-weight: 100;\n  display: inline-block;\n  color: transparent;\n  background-color: ",";\n  height: ",";\n  animation: ",";\n  animation-duration: 1s;\n  cursor: pointer;\n"])),(function(e){return e.backgroundColor}),(function(e){return e.height+"px"}),(function(e){return n=e.height,Object(z.b)(M||(M=Object(B.a)(["\n    0% { height: 0px; }\n    100% { height: ","px }\n"])),n);var n})),H=function(e){var n=e.title,r=e.height,t=e.backgroundColor,a=e.onClick;Object(P.a)(e,["title","height","backgroundColor","onClick"]);return Object(F.jsx)(D,{className:"transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110",title:n,height:r,backgroundColor:t,onClick:function(e){return a(e)}})},J=Object(l.b)((function(e){var n=e.algorithm,r=n.currentAlgo,t=n.items,a=e.operation;return{currentAlgo:r,items:t,arrayLength:a.arrayLength,operationSpeed:a.operationSpeed}}),(function(){return function(e){return{findElement:function(){var n=Object(o.a)(s.a.mark((function n(r,t,a,i){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_(t,r,e,a,i);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(e,r,t,a){return n.apply(this,arguments)}}()}}}))((function(e){var n=e.items,r=e.findElement,t=e.currentAlgo,a=e.arrayLength,i=e.operationSpeed,c="grid grid-cols-".concat(a.length-1," gap-2");return Object(F.jsx)("div",{className:c,children:n.map((function(e,a){var c=e.num,u=function(e,n){return e&&n?"#8bcf0c":e?"#0c9ecf":"#181e54"}(e.visited,e.result);return Object(F.jsx)(H,{title:c,height:c,backgroundColor:u,onClick:function(e){return r(e.target.title,n,t,i)},children:c},a)}))})})),q=r(77),G=r(78),Y=r(76),V=(r(65),Object(l.b)((function(e){return{arrayLength:e.operation.arrayLength}}),(function(){return function(e){return{setAlgoDispatch:function(n,r){return e(function(e,n){return{type:O,payload:{items:g(e,n),currentAlgo:e,isRunning:0}}}(n.target.title,parseInt(r)))}}}}))((function(e){var n=e.algorithms,r=e.setAlgoDispatch,t=e.arrayLength;return Object(F.jsxs)(q.a,{bg:"dark",variant:"dark",children:[Object(F.jsx)(q.a.Brand,{href:"#home",children:"Algo-viz"}),Object(F.jsx)(q.a.Collapse,{id:"responsive-navbar-nav",children:Object(F.jsx)(G.a,{className:"mr-auto",children:Object(F.jsx)(Y.a,{title:"Select Algorithm",id:"collasible-nav-dropdown",children:n.map((function(e,n){return Object(F.jsx)(Y.a.Item,{title:e,onClick:function(e){return r(e,t)},children:e},n)}))})})})]})}))),W=Object(l.b)((function(e){return{currentAlgo:e.algorithm.currentAlgo}}),null)((function(e){var n=e.currentAlgo,r=e.children;e.complexity;return Object(F.jsx)("div",{className:"border mt-3",children:Object(F.jsxs)("div",{className:"p-4",children:[Object(F.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[Object(F.jsx)("div",{children:Object(F.jsx)("h5",{className:"text-lg text-gray-500 font-bold tracking-widest mb-2 uppercase text-left",children:n})}),Object(F.jsx)("div",{className:"grid-rows-3",children:m(n).map((function(e,n){return Object(F.jsx)("div",{children:Object(F.jsx)("h5",{className:"text-lg text-gray-500 font-bold tracking-widest mb-2 text-right",children:e})},n)}))})]}),r]})})})),K=function(e){return 0===e?"Select an item":1===e?"Item found":-1===e?"Searching":void 0},Q=Object(l.b)((function(e){return{isRunning:e.algorithm.isRunning}}),null)((function(e){var n=e.isRunning;return Object(F.jsxs)("span",{className:"relative inline-flex rounded-md shadow-sm",children:[Object(F.jsx)("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-purple-400 text-base leading-6 font-medium rounded-md text-purple-800 bg-white hover:text-purple-700 focus:border-purple-300 transition ease-in-out duration-150",children:K(n)}),-1===n?Object(F.jsxs)("span",{className:"flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1",children:[Object(F.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"}),Object(F.jsx)("span",{className:"relative inline-flex rounded-full h-3 w-3 bg-purple-500"})]}):""]})})),U=function(e){var n=e.min,r=e.max,t=e.value,a=e.onChange;return Object(F.jsx)("p",{className:"range-field",children:Object(F.jsx)("input",{type:"range",min:n,step:"1",max:r,value:t,onChange:function(e){return a(e)}})})},X=function(e){var n=e.max,r=e.min,t=e.sliderName,a=e.onChange,i=e.value;return Object(F.jsxs)("div",{className:"grid-rows-2",children:[Object(F.jsx)("div",{children:t}),Object(F.jsx)("div",{children:Object(F.jsx)(U,{max:n,min:r,onChange:a,value:i})})]})},Z="SET_ARRAY_LENGTH",$="SET_OPERATION_SPEED",ee=Object(l.b)((function(e){var n=e.algorithm.currentAlgo,r=e.operation;return{currentAlgo:n,arrayLength:r.arrayLength,operationSpeed:r.operationSpeed}}),(function(){return function(e){return{dispatchArrayLength:function(n,r){var t;e(S(g(n,r),n)),e((t=parseInt(r),{type:Z,payload:{items:t}}))},dispatchOperationSpeed:function(n){return e((r=parseInt(n),{type:$,payload:{operationSpeed:r}}));var r}}}}))((function(e){var n=e.dispatchArrayLength,r=e.dispatchOperationSpeed,t=e.currentAlgo,a=e.operationSpeed,i=e.arrayLength;return Object(F.jsxs)("div",{className:"grid grid-cols-2",children:[Object(F.jsx)(X,{sliderName:"Change Array Size",max:"30",min:"10",step:"1",value:i,onChange:function(e){return n(t,e.target.value)}}),Object(F.jsx)(X,{sliderName:"Speed",max:"-1",min:"-3",step:"1",value:a,onChange:function(e){return r(e.target.value)}})]})}));var ne=function(){return Object(F.jsxs)("div",{className:"App",children:[Object(F.jsx)(V,{algorithms:Object.values(h)}),Object(F.jsxs)("div",{className:"container",children:[Object(F.jsx)(ee,{}),Object(F.jsxs)(W,{children:[Object(F.jsx)(J,{}),Object(F.jsx)(Q,{})]})]})]})},re=(r(69),r(19)),te={currentAlgo:h.linearSearch,error:null,items:g("linear-search"),isRunning:0},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case v:case O:return Object(k.a)(Object(k.a)({},e),{},{items:n.payload.items,currentAlgo:n.payload.currentAlgo,isRunning:n.payload.isRunning,error:null});default:return e}},ie={arrayLength:10,operationSpeed:-3},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Z:return Object(k.a)(Object(k.a)({},e),{},{arrayLength:n.payload.items});case $:return Object(k.a)(Object(k.a)({},e),{},{operationSpeed:n.payload.operationSpeed});default:return e}},ue=Object(re.c)({algorithm:ae,operation:ce}),se=[r(48).a];var oe=Object(re.d)(ue,re.a.apply(void 0,se));c.a.render(Object(F.jsx)(a.a.StrictMode,{children:Object(F.jsx)(l.a,{store:oe,children:Object(F.jsx)(ne,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.6c1d348c.chunk.js.map