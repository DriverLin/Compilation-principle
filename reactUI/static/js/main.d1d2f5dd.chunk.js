(this.webpackJsonpgui=this.webpackJsonpgui||[]).push([[0],{260:function(e,t,a){e.exports=a(572)},265:function(e,t,a){},572:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(19),o=a.n(r),c=(a(265),a(79)),l=a(618),s=a(630),u=a(621),d=a(623),m=a(624),h=a(573),p=a(629),g=(a(266),a(3)),f=a.n(g);a(197),a(231),a(233);function E(e){return Object(n.useEffect)((function(){0!==e.chartData.state&&f.a.init(document.getElementById("treeChart")).setOption({title:{text:e.chartData.title},tooltip:{},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"none",symbolSize:50,roam:!0,label:{show:!0,formatter:function(e){return e.data.value}},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,10],edgeLabel:{fontSize:20},data:e.chartData.data,links:e.chartData.links,lineStyle:{opacity:.9,width:2,curveness:0}}]})}),[e]),i.a.createElement("div",null,i.a.createElement("div",{id:"treeChart",style:{width:1080,height:e.chartData.height}}))}var v=a(625),y=a(632),b=a(627),S=a(628),w=a(626),x=Object(l.a)((function(e){return{inputContainer:{display:"flex",flexWrap:"wrap"},inputTextArea:{width:e.spacing(64)},itemS:{"& > *":{margin:e.spacing(1),height:e.spacing(7)}},inputCard:{marginTop:e.spacing(8),minWidth:275},resultCard:{marginTop:e.spacing(8),minWidth:1080},chartContainer:{display:"flex",flexWrap:"wrap"}}}));var C=function(){var e=x(),t=Object(n.useState)({state:0}),a=Object(c.a)(t,2),r=a[0],o=a[1],l=i.a.useState(!1),g=Object(c.a)(l,2),f=g[0],C=g[1],j=0,O=function(e,t){if("ExpressionError"!==t[e]){t=t[e],j=0;var a=function e(t){if(void 0===t.op)return 1;var a=e(t.left),n=e(t.right);return a>n?a+1:n+1}(t),n=Math.pow(2,a),i=[],r=[];!function e(t,a,n,i){n.push({name:j++,value:a.op.toString(),x:a.x,y:a.y}),null!=t&&i.push({source:t.index,target:a.index});if(void 0===a.left)return;e(a,a.left,n,i),e(a,a.right,n,i)}(null,function e(t,a,n,i,r){var o=j;if(j++,void 0===t.op)return{op:t.toString(),x:a,y:n,index:o};var c=t.op.toString(),l=e(t.left,a-i/2,n+r,i/2,r),s=e(t.right,a+i/2,n+r,i/2,r);return{op:c,x:a,y:n,index:o,left:l,right:s}}(t,100*n*2,100,100*n,100*(n+1)/a),i,r),console.log({state:1,data:i,links:r,height:100*(n+1)*1080/(100*n*2)+100,title:e}),o({state:1,data:i,links:r,height:100*(n+1)*1080/(100*n*2)+100,title:e}),J(!1),C(!0)}else M()},k=Object(n.useState)(""),D=Object(c.a)(k,2),T=D[0],N=D[1],W=Object(n.useState)("\u7b97\u6570\u8868\u8fbe\u5f0f"),z=Object(c.a)(W,2),I=z[0],A=(z[1],i.a.useState(!1)),B=Object(c.a)(A,2),U=B[0],J=B[1],M=function(){J(!0)};return i.a.createElement(u.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},i.a.createElement(d.a,{className:e.inputCard},i.a.createElement(m.a,null,i.a.createElement("div",null,i.a.createElement(h.a,{elevation:0,className:e.inputContainer},i.a.createElement(u.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},i.a.createElement("div",{className:e.itemS},i.a.createElement(p.a,{className:e.inputTextArea,label:I,color:"secondary",id:"outlined-name",value:T,onChange:function(e){N(e.target.value)},variant:"outlined"}),i.a.createElement(s.a,{variant:"contained",color:"primary",size:"large",onClick:function(){fetch("./postApi",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json;charset=UTF-8"},body:T,mode:"cors",cache:"no-store"}).then((function(e){return e.json()})).then((function(e){return O(T,e)})).catch((function(e){M(),console.log(e)}))}},"\u5206\u6790"),i.a.createElement(s.a,{variant:"contained",color:"secondary",size:"large",onClick:function(){N(""),C(!1),o({state:0})}},"\u6e05\u7a7a"))))))),i.a.createElement(v.a,{in:f},i.a.createElement(d.a,{className:e.resultCard},i.a.createElement(m.a,null,i.a.createElement(h.a,{elevation:0,className:e.chartContainer},i.a.createElement(E,{chartData:r}))))),i.a.createElement(y.a,{open:U,onClose:function(){J(!1)},"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},i.a.createElement(w.a,{id:"alert-dialog-title"},"Error"),i.a.createElement(b.a,null,i.a.createElement(S.a,{id:"alert-dialog-description"},"\u8bf7\u68c0\u67e5\u8f93\u5165\u662f\u5426\u6709\u8bef"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(C,{onEnter:function(){document.title="\u6807\u9898"}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[260,1,2]]]);
//# sourceMappingURL=main.d1d2f5dd.chunk.js.map