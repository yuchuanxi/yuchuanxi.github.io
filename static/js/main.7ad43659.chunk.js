(this["webpackJsonpconvert-user-feedback"]=this["webpackJsonpconvert-user-feedback"]||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),i=n(7),c=n.n(i),o=(n(12),n(3)),u=n(1),l=n.n(u),s=n(4),d=n(5),h=n.n(d);function p(e){for(var t=[],n=function(n){var a=new Promise((function(t){var a=new Image;a.crossOrigin="*",a.src=e[n],a.onload=function(){t(a)}}));t.push(a)},a=0;a<e.length;a++)n(a);return Promise.all(t).then((function(e){return Promise.resolve(e)}))}function f(e){return m.apply(this,arguments)}function m(){return(m=Object(s.a)(l.a.mark((function e(t){var n,a,r,i,c,o,u,s,d,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p(t);case 2:for(n=e.sent,a=0,r=0,i=0;i<n.length;i++)c=n[i],a+=c.naturalWidth/2+10,r<c.naturalHeight/2&&(r=c.naturalHeight/2);for((o=document.createElement("canvas")).width=a+10,o.height=r+20,u=o.getContext("2d"),s=10,d=0;d<n.length;d++)h=n[d],u.drawImage(h,s,10,h.naturalWidth/2,h.naturalHeight/2),s+=h.naturalWidth/2+10;return e.abrupt("return",{img:o.toDataURL("image/jpeg"),width:a/(r/133),imgNum:n.length});case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=function(e,t){var n=document.createElement("a"),a=new Blob([t],{type:"text/plain"});n.download=e,n.href=URL.createObjectURL(a),n.click()},w=function(e){return e&&e.data&&Array.isArray(e.data.list)||alert("\u6570\u636e\u683c\u5f0f\u6709\u95ee\u9898\uff01"),e.data.list.map((function(e){var t=e.createTIme.split(" ")[0].split("-");return t.splice(1,0,"\u5e74"),t.splice(3,0,"\u6708"),t.splice(5,0,"\u65e5"),{userName:e.username,userId:e.userId,date:t.join(""),category:e.category,content:e.content,img:e.img,responsible:"",comment:"",followup:""}}))},x=function(e,t){var n=[];t.map((function(e){return n.push({header:e.title,key:e.key||e.dataIndex,width:parseInt(e.width/6,10)||80}),!0})),e.columns=n},v=function(){var e=Object(s.a)(l.a.mark((function e(t,n,a){var r,i,c,o,u,d,h,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.addRows(a),n.getRow(1).eachCell((function(e,t){n.getColumn(t).alignment={vertical:"middle",horizontal:"center"}})),n.getColumn("content").eachCell((function(e,t){1!==t&&(e.alignment={wrapText:!0,horizontal:"left",vertical:"middle"})})),r=n.getColumn("img"),i=[],r.eachCell(function(){var e=Object(s.a)(l.a.mark((function e(t,n){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i.push(t);case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),c=i.length,o=0,u=0;case 11:if(!(u<c)){e.next=28;break}if("object"===typeof(d=i[u]).value&&d.value.length>0){e.next=16;break}return 1!==d.row&&(d.value=""),e.abrupt("continue",25);case 16:return n.getRow(d.row).height=110,e.next=20,f(d.value);case 20:h=e.sent,o<h.width&&(o=h.width+50),p=t.addImage({base64:h.img,extension:"jpeg"}),n.addImage(p,{tl:{col:d.col-1,row:d.row-1},ext:{width:h.width,height:133}}),d.value="";case 25:u++,e.next=11;break;case 28:r.width=o/6;case 29:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),b=function(){var e=Object(s.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new h.a.Workbook).creator="\u6c6a\u98de",a.lastModifiedBy="\u6c6a\u98de",a.created=new Date,a.modified=new Date,r=a.addWorksheet("\u660e\u7ec6",{views:[{state:"frozen",ySplit:1}]}),x(r,t),e.next=9,v(a,r,n);case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),y=function(){var e=Object(s.a)(l.a.mark((function e(t,n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[{dataIndex:"userName",key:"userName",title:"\u7528\u6237\u6635\u79f0",width:128},{dataIndex:"userId",key:"userId",title:"\u7528\u6237ID",width:100},{dataIndex:"date",key:"date",title:"\u53cd\u9988\u65e5\u671f",width:100},{dataIndex:"category",key:"category",title:"\u53cd\u9988\u7c7b\u578b",width:80},{dataIndex:"content",key:"content",title:"\u53cd\u9988\u5185\u5bb9",width:288},{dataIndex:"img",key:"img",title:"\u56fe\u7247",width:500},{dataIndex:"responsible",key:"responsible",title:"\u590d\u6838\u65b9",width:88},{dataIndex:"comment",key:"comment",title:"\u5907\u6ce8",width:288},{dataIndex:"followup",key:"followup",title:"\u5468\u4e00\u8ddf\u8fdb\u60c5\u51b5",width:288}],r=w(t),e.next=4,b(a,r);case 4:e.sent.xlsx.writeBuffer().then((function(e){g("".concat(n,".xlsx"),e)}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),j=y,k=(n(15),n(0));var I=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)("\u529f\u80fd\u53cd\u9988\u8868"),c=Object(o.a)(i,2),u=c[0],l=c[1];return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("textarea",{placeholder:"\u8bf7\u8f93\u5165\u9700\u8981\u8f6c\u6210excel\u7684\u6570\u636e",style:{width:"100%",height:300},onChange:function(e){r(e.target.value),e.preventDefault()}}),Object(k.jsxs)("p",{children:[Object(k.jsx)("label",{htmlFor:"fname",children:"\u8868\u540d\uff1a"}),Object(k.jsx)("input",{id:"fname",style:{width:200,height:32},placeholder:u,onChange:function(e){l(e.target.value),e.preventDefault()}})]}),Object(k.jsx)("div",{onClick:function(){if(n){var e=JSON.parse(n);j(e,u)}else alert("\u8bf7\u8f93\u5165\u6570\u636e")},style:{display:"inline-block",cursor:"pointer",padding:"10px 30px",margin:10,border:"1px solid red"},children:"\u5bfc\u51fa Excel"})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),i(e),c(e)}))};c.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(I,{})}),document.getElementById("root")),O()}},[[17,1,2]]]);
//# sourceMappingURL=main.7ad43659.chunk.js.map