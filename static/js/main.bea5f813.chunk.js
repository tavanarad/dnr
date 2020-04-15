(this["webpackJsonplightbar-redux"]=this["webpackJsonplightbar-redux"]||[]).push([[0],{209:function(e,t,a){e.exports=a(432)},214:function(e,t,a){},431:function(e,t,a){},432:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(15),o=a.n(r),c=a(485),i=(a(214),a(464)),s=a(53),u=a(473),d=a(474),m=a(44),h=a(475),f=a(435),g=a(433),b=a(467),p=a(468),v=[{model:"SL-24",front:2,rear:2},{model:"SL-30",front:3,rear:3},{model:"SL-36",front:4,rear:4},{model:"SL-42",front:5,rear:5},{model:"SL-48",front:6,rear:6},{model:"SL-54",front:7,rear:7},{model:"SL-60",front:8,rear:8},{model:"SL-66",front:9,rear:9},{model:"SL-72",front:10,rear:10},{model:"SL-78",front:11,rear:11},{model:"SL-84",front:12,rear:12},{model:"SL-90",front:13,rear:13},{model:"SL-96",front:14,rear:14}],E=[{title:"Amber",schema:["#FFBF00","#000000"]},{title:"Red",schema:["#FF0000","#000000"]},{title:"Green",schema:["#00FF00","#000000"]},{title:"Blue",schema:["#0000FF","#000000"]},{title:"Amber, Red",schema:["#FFBF00","#FF0000","#000000"]},{title:"Amber, Green",schema:["#FFBF00","#00FF00","#000000"]},{title:"Amber, Blue",schema:["#FFBF00","#0000FF","#000000"]},{title:"Red, Green",schema:["#FF0000","#00FF00","#000000"]},{title:"Red, Blue",schema:["#FF0000","#0000FF","#000000"]},{title:"Green, Blue",schema:["#00FF00","#0000FF","#000000"]},{title:"Amber, Red, Green",schema:["#FFBF00","#FF0000","#00FF00","#000000"]},{title:"Amber, Red, Blue",schema:["#FFBF00","#FF0000","#0000FF","#000000"]},{title:"Amber, Green, Blue",schema:["#FFBF00","#00FF00","#0000FF","#000000"]},{title:"Amber, Red, Green, Blue",schema:["#FFBF00","#FF0000","#00FF00","#0000FF","#000000"]},{title:"Full Color (RGB)",schema:[]}],x=a(49),y=Object(x.b)({name:"lightbarSelector",initialState:{selectedModel:null,selectedColorSchema:null,hasGreen:!1},reducers:{selectLightbar:function(e,t){e.selectedModel=t.payload},selectColorSchema:function(e,t){e.selectedColorSchema=t.payload},setHasGreen:function(e,t){e.hasGreen=t.payload}}}),C=y.actions,w=C.selectLightbar,F=C.selectColorSchema,j=(C.setHasGreen,function(e){return e.lightbarSelector.selectedModel}),S=function(e){return e.lightbarSelector.selectedColorSchema},O=function(e){return e.lightbarSelector.hasGreen},k=y.reducer,N=a(11),L=Object(i.a)({list:{border:"solid 1px lightgray",borderRadius:3,marginTop:10,marginBottom:10,maxHeight:150,overflow:"auto"}}),B=function(e){var t=e.onClick,a=e.selected,n=void 0===a?null:a;return v.map((function(e){return l.a.createElement(g.a,{selected:(null===n||void 0===n?void 0:n.model)===e.model,key:e.model,onClick:function(){return t(e)},button:!0},l.a.createElement(b.a,{primary:e.model,secondary:"Front ".concat(e.front," / Rear ").concat(e.rear)}))}))};var R=function(){var e=L(),t=Object(N.c)(j);console.log(t);var a=Object(N.b)();return l.a.createElement(p.a,{className:e.list},l.a.createElement(B,{onClick:function(e){return a(w(e))},selected:t}))},A=a(4),P=a(490),D=a(486),I=a(472),z=a(104),G=Object(i.a)((function(e){return{select:{width:"100%",marginTop:e.spacing(2)},switch:{marginTop:e.spacing(2)}}}));Object(A.a)({switchBase:{color:z.a[300],"&$checked":{color:z.a[500]},"&$checked + $track":{backgroundColor:z.a[500]}},checked:{},track:{}})(P.a);var W=function(){var e=G(),t=Object(N.b)(),a=Object(N.c)(S);return Object(N.c)(O),l.a.createElement(l.a.Fragment,null,l.a.createElement(D.a,{value:a||"",onChange:function(e){return t(F(e.target.value))},displayEmpty:!0,className:e.select,inputProps:{"aria-label":"Without label"}},l.a.createElement(I.a,{value:null},l.a.createElement("em",null,"---")),E.map((function(e){return l.a.createElement(I.a,{key:e.title,value:e},e.title)}))))},H=Object(i.a)({root:{display:"flex",flexDirection:"row",alignContent:"stretch",justifyContent:"center",minHeight:400,marginTop:20},card:{width:500},subtitle:{fontSize:14},button:{justifyContent:"flex-end"}});function T(){var e=H(),t=Object(s.g)(),a=Object(N.c)(j),n=Object(N.c)(S);return l.a.createElement("div",{className:e.root},l.a.createElement(u.a,{className:e.card},l.a.createElement(d.a,null,l.a.createElement(m.a,{variant:"h6"},"Lightbars"),l.a.createElement(m.a,{className:e.subtitle},"Select a lightbar model to configure"),l.a.createElement(R,null),l.a.createElement(m.a,{variant:"h6"},"Color Schema"),l.a.createElement(m.a,{className:e.subtitle},"Select the color schema of the lightbar"),l.a.createElement(W,null)),l.a.createElement(h.a,{className:e.button},l.a.createElement(f.a,{color:"primary",disabled:!a||!n,variant:"contained",onClick:function(){return t.push("/lightbar")}},"Start Configurator"))))}var M=a(27),V=a(476),$=a(477),J=a(469),U=a(202),q=a(196),K=a.n(q),Q=a(194),X=a.n(Q),Y=a(195),Z=a.n(Y),_=a(62),ee=a(38),te=a(193),ae=a.n(te),ne=function(e){return Object.values(e).map((function(e){return function(e){var t=Number(e).toString(16);return t.length<2&&(t="0"+t),t}(e)})).join("")},le=function(e){if(!e||!e.length)return null;var t=e[0].lights.length,a=3+e.length*t*3,n=new ArrayBuffer(a),l=new DataView(n);l.setUint8(0,t),l.setUint16(1,e.length);var r=3;return e.forEach((function(e){return e.lights.forEach((function(e){return[(e.color.r*e.color.a).toFixed(0),(e.color.g*e.color.a).toFixed(0),(e.color.b*e.color.a).toFixed(0)].forEach((function(e){return l.setUint8(r++,e)}))}))})),new Blob([l.buffer],{type:"application/octet-stream"})},re={lightbar:null,cycles:[],selectedCycle:0,selectedLight:0,showPreview:!1,latestSelectedColor:null},oe=Object(x.b)({name:"lightbar",initialState:re,reducers:{setLightbar:function(e,t){return Object(_.a)({},re,{lightbar:t.payload})},setSelectedCycle:function(e,t){e.selectedCycle=t.payload},setSelectedLight:function(e,t){e.latestSelectedColor&&(e.cycles[e.selectedCycle].lights[t.payload].color=e.latestSelectedColor),e.selectedLight=t.payload},addCycle:function(e,t){var a;e.cycles.push({lights:t.payload||(a=e.lightbar,Object(ee.a)(Array(a.front+a.rear+6).keys()).map((function(e){return{color:{r:0,g:0,b:0,a:1}}})))}),e.selectedCycle=e.cycles.length-1},duplicateCycle:function(e){e.cycles.push(e.cycles[e.selectedCycle]),e.selectedCycle=e.cycles.length-1},deleteCycle:function(e,t){e.cycles.splice(t.payload,1)},setLightSetting:function(e,t){e.cycles[e.selectedCycle].lights[e.selectedLight]=t.payload,e.latestSelectedColor=t.payload.color},setInitialState:function(e){re},setShowPreview:function(e,t){e.showPreview=t.payload},saveAsFile:function(e,t){var a,n=t.payload?[(a={lightbar:e.lightbar,cycles:e.cycles},new Blob([JSON.stringify(a)],{type:"application/json"})),"json"]:[le(e.cycles),"bin"],l=Object(M.a)(n,2),r=l[0],o=l[1];!function(e,t){ae.a.saveAs(e,t)}(r,"".concat(e.lightbar.model,"-").concat((new Date).getTime(),".").concat(o))}}}),ce=oe.actions,ie=ce.setLightbar,se=ce.setSelectedCycle,ue=ce.setSelectedLight,de=ce.addCycle,me=ce.duplicateCycle,he=ce.deleteCycle,fe=ce.setLightSetting,ge=(ce.setInitialState,ce.setShowPreview),be=ce.saveAsFile,pe=function(e){return e.lightbar.cycles},ve=function(e){return e.lightbar.selectedCycle},Ee=function(e){return e.lightbar.selectedLight},xe=function(e){return e.lightbar.showPreview},ye=oe.reducer,Ce=Object(i.a)((function(e){return{menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},previewButton:{color:"#ffffff",borderColor:"#ffffff"}}}));var we=function(){var e=Ce(),t=Object(s.h)(),a=Object(s.g)(),r=Object(n.useState)(!1),o=Object(M.a)(r,2),c=o[0],i=o[1],u=l.a.useState(null),d=Object(M.a)(u,2),h=d[0],g=d[1],b=Object(N.b)(),p=function(e){return function(){null!==e&&b(be(e)),g(null)}};return Object(n.useEffect)((function(){console.log(t),t.pathname.search(/lightbar$/)>0?i(!0):i(!1)}),[t]),l.a.createElement(V.a,{position:"static"},l.a.createElement($.a,null,l.a.createElement(J.a,{edge:"start",color:"inherit","aria-label":"Menu",onClick:function(){return a.replace("/")}},l.a.createElement(X.a,null)),l.a.createElement(m.a,{variant:"h6",className:e.title},"DandR Electronic Lighbar Configurator"),c&&l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{className:e.previewButton,onClick:function(){return b(ge(!0))},startIcon:l.a.createElement(Z.a,null),variant:"outlined"},"Preview"),l.a.createElement(J.a,{"aria-label":"Download",color:"inherit",edge:"end",onClick:function(e){return g(e.currentTarget)}},l.a.createElement(K.a,null))),l.a.createElement(U.a,{id:"simple-menu",anchorEl:h,keepMounted:!0,open:Boolean(h),onClose:p()},l.a.createElement(I.a,{onClick:p(!1)},"Export BIN"),l.a.createElement(I.a,{onClick:p(!0)},"Export JSON"))))},Fe=(a(143),a(30)),je=a(21),Se=Object(i.a)({root:{display:"flex",flexDirection:"row",height:function(e){return e.width?"auto":200},justifyContent:"center",marginLeft:10,maxWidth:750,minWidth:function(e){return e.width||500},width:function(e){return e.width||"100%"}}});var Oe=function(e){var t,a=e.lights,r=void 0===a?[]:a,o=e.onClick,c=e.selectedLight,i=(e.title,e.width),s=Se({width:i}),u=Object(n.useRef)();if(!r.length)return null;var d=r.slice(0,(r.length-6)/2),m=r.slice(d.length+3,-3),h=114+45*d.length,f=(i||h)/h,g=d.length*(45*f),b=5*f,p=function(e){return function(){return o&&o(e)}},v=function(e){return c===e?"red":null},E=function(e){var t=e.r,a=e.g,n=e.b,l=e.a;return"#".concat(ne({r:(t*l).toFixed(0),g:(a*l).toFixed(0),b:(n*l).toFixed(0)}))};return l.a.createElement("div",{ref:u,className:s.root},l.a.createElement(je.Stage,{width:h*f,height:200*f},l.a.createElement(je.Layer,{x:57*f},d.map((function(e,t){return l.a.createElement(je.Rect,{key:t,x:45*t*f,y:20*f,width:40*f,height:24*f,fill:E(e.color),shadowBlur:b,cornerRadius:5,onClick:p(t),stroke:v(t)})}))),l.a.createElement(je.Layer,{rotation:-180,x:114*f+g,y:184*f},l.a.createElement(je.Rect,{x:58*f,y:44*f,width:40*f,height:24*f,fill:E(r[d.length+2].color),shadowBlur:b,rotation:135,cornerRadius:5,onClick:p(d.length+2),stroke:v(d.length+2)}),l.a.createElement(je.Rect,(t={x:30*f,y:73*f,width:40*f,height:24*f,fill:E(r[d.length+1].color),shadowBlur:b},Object(Fe.a)(t,"shadowBlur",b),Object(Fe.a)(t,"rotation",90),Object(Fe.a)(t,"cornerRadius",5),Object(Fe.a)(t,"onClick",p(d.length+1)),Object(Fe.a)(t,"stroke",v(d.length+1)),t)),l.a.createElement(je.Rect,{x:30*f,y:113*f,width:40*f,height:24*f,fill:E(r[d.length].color),shadowBlur:b,rotation:45,cornerRadius:5,onClick:p(d.length),stroke:v(d.length)})),l.a.createElement(je.Layer,{x:57*f},m.map((function(e,t){return l.a.createElement(je.Rect,{key:t,x:45*t*f,y:140*f,width:40*f,height:24*f,fill:E(r[r.length-4-t].color),shadowBlur:b,cornerRadius:5,onClick:p(r.length-4-t),stroke:v(r.length-4-t)})}))),l.a.createElement(je.Layer,null,l.a.createElement(je.Rect,{x:55*f,y:44*f,width:40*f,height:24*f,fill:E(r[r.length-1].color),shadowBlur:b,rotation:135,cornerRadius:5,onClick:p(r.length-1),stroke:v(r.length-1)}),l.a.createElement(je.Rect,{x:27*f,y:73*f,width:40*f,height:24*f,fill:E(r[r.length-2].color),shadowBlur:b,rotation:90,cornerRadius:5,onClick:p(r.length-2),stroke:v(r.length-2)}),l.a.createElement(je.Rect,{x:27*f,y:113*f,width:40*f,height:24*f,fill:E(r[r.length-3].color),shadowBlur:b,rotation:45,cornerRadius:5,onClick:p(r.length-3),stroke:v(r.length-3)}))))},ke=a(48),Ne=a(478),Le=a(489),Be=a(479),Re=a(480),Ae=Object(i.a)({});var Pe=function(){Ae();var e=Object(ke.a)(),t=Object(n.useState)(!1),a=Object(M.a)(t,2),r=(a[0],a[1],Object(Ne.a)(e.breakpoints.down("sm"))),o=Object(N.c)(xe),c=Object(N.c)(pe),i=Object(N.b)(),s=Object(n.useState)(0),u=Object(M.a)(s,2),d=u[0],m=u[1];return Object(n.useEffect)((function(){var e=setInterval((function(){m(d+1<c.length?d+1:0)}),50);return function(){return clearInterval(e)}})),l.a.createElement("div",null,l.a.createElement(Le.a,{fullScreen:r,open:o,onClose:function(){return i(ge(!1))},"aria-labelledby":"responsive-dialog-title"},l.a.createElement(Be.a,{id:"responsive-dialog-title"},"Lightbar Preview"),l.a.createElement(Re.a,null,c&&c[d]&&l.a.createElement(Oe,{lights:c[d].lights}))))},De=a(481),Ie=a(488),ze=a(103),Ge=a(102),We=a(7),He=a.n(We),Te=a(40),Me=a.n(Te),Ve=a(24),$e=a.n(Ve),Je=a(29),Ue=a.n(Je),qe=a(13),Ke=function(e){var t=e.onChange,a=e.onSwatchHover,n=(e.hex,e.colors),r=e.width,o=e.triangle,c=e.styles,i=void 0===c?{}:c,s=e.className,u=void 0===s?"":s,d=He()($e()({default:{card:{width:r,background:"#fff",border:"0 solid rgba(0,0,0,0.25)",boxShadow:"0 1px 4px rgba(0,0,0,0.25)",borderRadius:"4px",position:"relative"},body:{padding:"15px 9px 9px 15px",height:40},label:{fontSize:"18px",color:"#fff"},triangle:{width:"0px",height:"0px",borderStyle:"solid",borderWidth:"0 9px 10px 9px",borderColor:"transparent transparent #fff transparent",position:"absolute"},triangleShadow:{width:"0px",height:"0px",borderStyle:"solid",borderWidth:"0 9px 10px 9px",borderColor:"transparent transparent rgba(0,0,0,.1) transparent",position:"absolute"},hash:{background:"#F0F0F0",height:"30px",width:"30px",borderRadius:"4px 0 0 4px",float:"left",color:"#98A1A4",display:"flex",alignItems:"center",justifyContent:"center"},input:{width:"100px",fontSize:"14px",color:"#666",border:"0px",outline:"none",height:"28px",boxShadow:"inset 0 0 0 1px #F0F0F0",boxSizing:"content-box",borderRadius:"0 4px 4px 0",float:"left",paddingLeft:"8px"},swatch:{width:"30px",height:"30px",float:"left",borderRadius:"4px",margin:"0 6px 6px 0"},clear:{clear:"both"}},"hide-triangle":{triangle:{display:"none"},triangleShadow:{display:"none"}},"top-left-triangle":{triangle:{top:"-10px",left:"12px"},triangleShadow:{top:"-11px",left:"12px"}},"top-right-triangle":{triangle:{top:"-10px",right:"12px"},triangleShadow:{top:"-11px",right:"12px"}}},i),{"hide-triangle":"hide"===o,"top-left-triangle":"top-left"===o,"top-right-triangle":"top-right"===o}),m=function(e,a){Ue.a.isValidHex(e)&&t({hex:e,source:"hex"},a)};return l.a.createElement("div",{style:d.card,className:"twitter-picker ".concat(u)},l.a.createElement("div",{style:d.triangleShadow}),l.a.createElement("div",{style:d.triangle}),l.a.createElement("div",{style:d.body},Me()(n,(function(e,t){return l.a.createElement(qe.Swatch,{key:t,color:e,hex:e,style:d.swatch,onClick:m,onHover:a,focusStyle:{boxShadow:"0 0 4px ".concat(e)}})}))))};Ke.defaultProps={width:276,colors:["#FF6900","#FCB900","#7BDCB5","#00D084","#8ED1FC","#0693E3","#ABB8C3","#EB144C","#F78DA7","#9900EF"],triangle:"top-left",styles:{}};var Qe=Object(qe.ColorWrap)(Ke),Xe=Object(i.a)({root:{position:"fixed",margin:"-50px 40px",zIndex:2,backgroundColor:"white"},pallete:{backgroundColor:"white",position:"absolute",zIndex:"2"},innerPallete:{position:"fixed",top:0,right:0,bottom:0,left:0}}),Ye=function(e){var t=e.colors,a=e.value,n=e.onClick,r=e.onChange,o=Xe({colors:t});return l.a.createElement("div",{className:o.root},l.a.createElement("div",{className:o.pallete},l.a.createElement("div",{className:o.innerPallete,onClick:n}),(null===t||void 0===t?void 0:t.length)?l.a.createElement(Qe,{colors:t,hex:!1,triangle:"hide",onChange:r}):l.a.createElement(Ge.SketchPicker,{presetColors:["#FFBF00","#FF0000","#00FF00","#0000FF","#000000"],color:a,onChange:r,disableAlpha:!0})))},Ze=Object(i.a)({root:{minWidth:400,maxWidth:500},card:{},cardHeader:{color:"#ffffff",backgroundColor:ze.a[500]},cardContent:{},colorInfo:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},colorView:{width:25,height:25,backgroundColor:function(e){return"rgb(".concat(Object.values(e.color),")")}}});var _e=function(e){var t=e.colors,a=e.config,r=e.onChange,o=Ze({color:(null===a||void 0===a?void 0:a.color)||{r:255,g:255,b:255}}),c=Object(n.useState)(!1),i=Object(M.a)(c,2),s=i[0],h=i[1],g=function(e){var t=e.target;console.log(t.value),r({color:Object(_.a)({},null===a||void 0===a?void 0:a.color,Object(Fe.a)({},t.name,+t.value>=0&&+t.value<=255?t.value.trim():null===a||void 0===a?void 0:a.color[t.name]))})},b=function(){return h(!s)};return l.a.createElement("div",{className:o.root},l.a.createElement(u.a,{className:o.card},l.a.createElement(De.a,{className:o.cardHeader,title:"Set the color"}),l.a.createElement(d.a,{className:o.cardContent},a?l.a.createElement("div",{className:o.colorInfo},t.length?l.a.createElement(Ge.AlphaPicker,{color:a.color,onChange:function(e){console.log(e),r({color:e.rgb})},width:280}):l.a.createElement(l.a.Fragment,null,l.a.createElement(Ie.a,{label:"Red",inputProps:{max:255,min:0},name:"r",onChange:g,size:"small",type:"number",value:a.color?a.color.r:255,variant:"outlined"}),l.a.createElement(Ie.a,{label:"Green",inputProps:{max:255,min:0},name:"g",onChange:g,size:"small",type:"number",value:a.color?a.color.g:255,variant:"outlined"}),l.a.createElement(Ie.a,{label:"Blue",inputProps:{max:255,min:0},name:"b",onChange:g,size:"small",type:"number",value:a.color?a.color.b:255,variant:"outlined"})),l.a.createElement(f.a,{color:"default",onClick:b,variant:"contained"},l.a.createElement("span",{className:o.colorView})),s&&l.a.createElement(Ye,{colors:t,onClick:b,onChange:function(e){return r({color:e.rgb})},value:null===a||void 0===a?void 0:a.color})):l.a.createElement(m.a,{variant:"h6"},"Please select a light module from the lightbar preview to set the color."))))},et=a(199),tt=a.n(et),at=a(198),nt=a.n(at),lt=a(482),rt=a(197),ot=a.n(rt),ct=Object(i.a)({root:{width:"100%",overflow:"auto",maxHeight:400},item:{height:75}}),it=function(e){var t=e.className,a=e.id,n=e.lights,r=e.onClick,o=e.onDelete,c=e.selected;return l.a.createElement(g.a,{alignItems:"center",className:t,selected:c,onClick:r,button:!0},l.a.createElement(b.a,{primary:"Cycle #".concat(a+1)}),l.a.createElement(Oe,{lights:n,width:10*(n.length-6)}),l.a.createElement(lt.a,null,l.a.createElement(J.a,{"arial-label":"delete",edge:"end",onClick:o},l.a.createElement(ot.a,null))))};var st=function(){var e=ct(),t=Object(N.c)(pe),a=Object(N.c)(ve),n=Object(N.b)(),r=function(e){return function(){return n(he(e))}};return l.a.createElement(p.a,{className:e.root},t.map((function(t,o){return l.a.createElement(it,{className:e.item,key:o,id:o,lights:t.lights,onClick:(c=o,function(){return n(se(c))}),onDelete:r(o),selected:o===a});var c})))},ut=Object(i.a)({action:{color:"#ffffff"},card:{},cardHeader:{color:"#ffffff",backgroundColor:ze.a[500]},root:{}});var dt=function(){var e=ut(),t=Object(N.b)();return l.a.createElement("div",{className:e.root},l.a.createElement(u.a,{className:e.card},l.a.createElement(De.a,{className:e.cardHeader,action:l.a.createElement(l.a.Fragment,null,l.a.createElement(J.a,{"arial-label":"Add a new cycle",className:e.action,onClick:function(){return t(me())}},l.a.createElement(nt.a,null)),l.a.createElement(J.a,{"arial-label":"Add a new cycle",className:e.action,onClick:function(){return t(de())}},l.a.createElement(tt.a,null))),title:"Cycles"}),l.a.createElement(d.a,null,l.a.createElement(st,null))))},mt=Object(i.a)({root:{display:"flex",flexDirection:"row",marginTop:20,padding:"0 16px",alignContent:"space-between",flexWrap:function(e){return e.mqMatches?null:"wrap-reverse"}},cycles:{minWidth:400,flexGrow:1,bottom:0},details:{flexGrow:2,display:"flex",flexDirection:"column",alignItems:"center",alignContent:"stretch",padding:"0 10px"}});var ht=function(){var e,t,a=Object(Ne.a)("(min-width: 800px)"),r=mt({mqMatches:a}),o=Object(N.b)(),c=Object(N.c)(j),i=Object(N.c)(ve),u=Object(N.c)(Ee),d=Object(N.c)(pe),m=Object(N.c)(j),h=Object(N.c)(xe),f=Object(N.c)(S);return Object(n.useEffect)((function(){o(ie(c))}),[]),Object(n.useEffect)((function(){m&&o(de())}),[m]),c?(console.log(i),l.a.createElement(l.a.Fragment,null,!!m&&l.a.createElement("div",{className:r.root},l.a.createElement("div",{className:r.cycles},l.a.createElement(dt,null)),l.a.createElement("div",{className:r.details},l.a.createElement(Oe,{lights:null===(e=d[i])||void 0===e?void 0:e.lights,onClick:function(e){return o(ue(e))},selectedLight:u,title:c.model}),l.a.createElement(_e,{config:null===(t=d[i])||void 0===t?void 0:t.lights[u],colors:f.schema,onChange:function(e){return o(fe(e))}}))),h&&l.a.createElement(Pe,null))):l.a.createElement(s.a,{to:"/"})},ft=a(483),gt=a(200),bt=a.n(gt),pt={column:5,row:7,chars:{" ":[0,0,0,0,0,0,0],"!":[4,4,4,4,4,0,4],'"':[9,9,18,0,0,0,0],"#":[10,10,31,10,31,10,10],$:[4,15,20,14,5,30,4],"%":[25,25,2,4,8,19,19],"&":[4,10,10,10,21,18,13],"'":[4,4,8,0,0,0,0],"(":[2,4,8,8,8,4,2],")":[8,4,2,2,2,4,8],"*":[4,21,14,31,14,21,4],"+":[0,4,4,31,4,4,0],",":[0,0,0,0,4,4,8],"-":[0,0,0,31,0,0,0],".":[0,0,0,0,0,12,12],"/":[1,1,2,4,8,16,16],0:[14,17,19,21,25,17,14],1:[4,12,4,4,4,4,14],2:[14,17,1,2,4,8,31],3:[14,17,1,6,1,17,14],4:[2,6,10,18,31,2,2],5:[31,16,30,1,1,17,14],6:[6,8,16,30,17,17,14],7:[31,1,2,4,8,8,8],8:[14,17,17,14,17,17,14],9:[14,17,17,15,1,2,12],":":[0,12,12,0,12,12,0],";":[0,12,12,0,12,4,8],"<":[2,4,8,16,8,4,2],"=":[0,0,31,0,31,0,0],">":[8,4,2,1,2,4,8],"?":[14,17,1,2,4,0,4],"@":[14,17,23,21,23,16,15],A:[4,10,17,17,31,17,17],B:[30,17,17,30,17,17,30],C:[14,17,16,16,16,17,14],D:[30,9,9,9,9,9,30],E:[31,16,16,28,16,16,31],F:[31,16,16,31,16,16,16],G:[14,17,16,16,19,17,15],H:[17,17,17,31,17,17,17],I:[14,4,4,4,4,4,14],J:[31,2,2,2,2,18,12],K:[17,18,20,24,20,18,17],L:[16,16,16,16,16,16,31],M:[17,27,21,17,17,17,17],N:[17,17,25,21,19,17,17],O:[14,17,17,17,17,17,14],P:[30,17,17,30,16,16,16],Q:[14,17,17,17,21,18,13],R:[30,17,17,30,20,18,17],S:[14,17,16,14,1,17,14],T:[31,4,4,4,4,4,4],U:[17,17,17,17,17,17,14],V:[17,17,17,17,17,10,4],W:[17,17,17,21,21,27,17],X:[17,17,10,4,10,17,17],Y:[17,17,10,4,4,4,4],Z:[31,1,2,4,8,16,31],"[":[14,8,8,8,8,8,14],"\\":[16,16,8,4,2,1,1],"]":[14,2,2,2,2,2,14],"^":[4,10,17,0,0,0,0],_:[0,0,0,0,0,0,31],"`":[4,4,2,0,0,0,0],a:[0,14,1,13,19,19,13],b:[16,16,16,28,18,18,28],c:[0,0,0,14,16,16,14],d:[1,1,1,7,9,9,7],e:[0,0,14,17,31,16,15],f:[6,9,8,28,8,8,8],g:[14,17,19,13,1,1,14],h:[16,16,16,22,25,17,17],i:[0,4,0,12,4,4,14],j:[2,0,6,2,2,18,12],k:[16,16,18,20,24,20,18],l:[12,4,4,4,4,4,4],m:[0,0,10,21,21,17,17],n:[0,0,22,25,17,17,17],o:[0,0,14,17,17,17,14],p:[0,28,18,18,28,16,16],q:[0,7,9,9,7,1,1],r:[0,0,22,25,16,16,16],s:[0,0,15,16,14,1,30],t:[8,8,28,8,8,9,6],u:[0,0,17,17,17,19,13],v:[0,0,17,17,17,10,4],w:[0,0,17,17,21,21,10],x:[0,0,17,10,4,10,17],y:[0,17,17,15,1,17,14],z:[0,0,31,2,4,8,31],"{":[6,8,8,16,8,8,6],"|":[4,4,4,0,4,4,4],"}":[12,2,2,1,2,2,12],"~":[8,21,2,0,0,0,0],DEL:[31,31,31,31,31,31,31]}},vt=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=[];return Object(ee.a)(Array(pt.row).keys()).forEach((function(n){return Object(ee.a)(Array(pt.column).keys()).forEach((function(){a[n]=[],e.split("").forEach((function(e){var l;(l=a[n]).push.apply(l,Object(ee.a)(pt.chars[e][n].toString(2).padStart(" "!==e?5:1,0).split("").map((function(e){return+e}))).concat(Object(ee.a)(Object(ee.a)(Array(t).keys()).map((function(){return 0})))))}))}))})),a},Et=Object(i.a)({root:{backgroundColor:function(e){return e.backgroundColor||"#565656"},borderRadius:4,borderColor:"#333",display:"inline-block",padding:5,margin:5}});var xt=function(e){var t=e.backgroundColor,a=e.column,n=(e.hasGlow,e.pixelColor),r=void 0===n?"green":n,o=e.pixelCornerRadius,c=e.pixelSize,i=void 0===c?10:c,s=e.pixelStatus,u=void 0===s?[]:s,d=e.row,m=e.scrollSpeed,h=void 0===m?1e3:m,f=e.space,g=void 0===f?2:f,b=Et({backgroundColor:t}),p=window.innerWidth-100<(i+g)*a?(window.innerWidth-100)/((i+g)*a):1,v=(i+g)*p,E=l.a.useState(0),x=Object(M.a)(E,2),y=(x[0],x[1]);l.a.useEffect((function(){var e=0;return u.forEach((function(t){t.pixels.length&&t.pixels[0].length>a&&(e=setInterval((function(){t.pixels.forEach((function(e){return e.push(e.shift())})),y((function(e){return e+1}))}),h))})),function(){e&&clearInterval(e)}}),[u]);var C=function(e,t){var a="rgba(0, 0, 0, 0.1)";return u.forEach((function(n){t>=n.x&&e>=n.y&&n.pixels[e-n.y]&&n.pixels[e-n.y][t]&&(a=r)})),a};return l.a.createElement("div",{className:b.root},l.a.createElement(je.Stage,{width:v*a,height:v*d},l.a.createElement(je.Layer,{x:0,y:0},Object(ee.a)(Array(d).keys()).map((function(e){return Object(ee.a)(Array(a).keys()).map((function(t){return l.a.createElement(je.Rect,{key:"".concat(e,"-").concat(t),cornerRadius:o||0,fill:C(e,t),x:g+v*t,y:g+v*e,width:i*p,height:i*p})}))})).flat())))},yt=Object(x.b)({name:"scrollingBoard",initialState:{column:41,firstLine:"Hello World",ledColor:{r:0,g:255,b:0,a:1},pixelCornerRadius:0,pixelSize:10,row:15,secondLine:"Line 2",scrollSpeed:1e3,spaceBetweenPixels:null},reducers:{setColumn:function(e,t){e.column=t.payload},setLedColor:function(e,t){e.ledColor=t.payload},setFirstLine:function(e,t){e.firstLine=t.payload},setPixelCornerRadius:function(e,t){e.pixelCornerRadius=t.payload},setRow:function(e,t){e.row=t.payload},setSecondLine:function(e,t){e.secondLine=t.payload},setScrollSpeed:function(e,t){e.scrollSpeed=t.payload},setBoardState:function(e,t){return t.payload}}}),Ct=yt.actions,wt=(Ct.setColumn,Ct.setLedColor),Ft=(Ct.setFirstLine,Ct.setRow,Ct.setSecondLine,Ct.setScrollSpeed,Ct.setBoardState),jt=function(e){return e.scrollingBoard},St=yt.reducer,Ot=Object(i.a)({root:{alignItems:"center",display:"flex",flexDirection:"column"},matrixLCD:{marginTop:20,textAlign:"center"},card:{width:"60vw",marginTop:20},cardContent:{display:"flex",flexDirection:"column"},row:{alignItems:"center",display:"flex",flexDirection:"row",justifyContent:"center",margin:"5px 0"},textField:{margin:"0 5px"},fullwidth:{width:"100%"},colorView:{background:function(e){return"rgba(".concat(Object.values(e.ledColor),")")},height:25,width:25}});var kt=function(){var e=Object(N.b)(),t=Object(N.c)(jt);console.log(t);var a=Ot(t),n=[{x:0,y:0,pixels:vt(t.firstLine,1)},{x:0,y:8,pixels:vt(t.secondLine,1)}],r=l.a.useState(!1),o=Object(M.a)(r,2),c=o[0],i=o[1],s=function(){return i(!c)},m=function(a){return e(Ft(Object(_.a)({},t,Object(Fe.a)({},a.target.name,+a.target.value))))},h=function(a){return e(Ft(Object(_.a)({},t,Object(Fe.a)({},a.target.name,a.target.value))))};return l.a.createElement("div",{className:a.root},l.a.createElement("div",{className:a.matrixLCD},l.a.createElement(xt,{column:t.column,pixelColor:"rgba(".concat(Object.values(t.ledColor),")"),pixelCornerRadius:t.pixelCornerRadius,pixelStatus:n,scrollSpeed:t.scrollSpeed,row:t.row})),l.a.createElement(u.a,{className:a.card},l.a.createElement(De.a,{title:"Message Board Setting"}),l.a.createElement(d.a,{className:a.cardContent},l.a.createElement("div",{className:a.row},l.a.createElement(Ie.a,{className:a.textField,label:"Row",inputProps:{max:200,min:0},name:"row",onChange:m,size:"small",type:"number",value:t.row,variant:"outlined"}),l.a.createElement(bt.a,null),l.a.createElement(Ie.a,{className:a.textField,label:"Column",inputProps:{max:200,min:0},name:"column",onChange:m,size:"small",type:"number",value:t.column,variant:"outlined"}),l.a.createElement(Ie.a,{className:a.textField,label:"Pixel corner",inputProps:{max:360,min:0},name:"pixelCornerRadius",onChange:m,size:"small",type:"number",value:t.pixelCornerRadius,variant:"outlined"}),l.a.createElement(Ie.a,{className:a.textField,label:"Scroll Interval",inputProps:{max:1e3,min:0},InputProps:{endAdornment:l.a.createElement(ft.a,{position:"end"},"ms")},name:"scrollSpeed",onChange:m,size:"small",type:"number",value:t.scrollSpeed,variant:"outlined"})),l.a.createElement("div",{className:a.row},l.a.createElement(Ie.a,{className:a.textField,label:"Red",inputProps:{max:255,min:0},name:"red",onChange:m,size:"small",type:"number",value:t.ledColor.r,variant:"outlined",disabled:!0}),l.a.createElement(Ie.a,{className:a.textField,label:"Green",inputProps:{max:255,min:0},name:"green",onChange:m,size:"small",type:"number",value:t.ledColor.g,variant:"outlined",disabled:!0}),l.a.createElement(Ie.a,{className:a.textField,label:"Blue",inputProps:{max:255,min:0},name:"blue",onChange:m,size:"small",type:"number",value:t.ledColor.b,variant:"outlined",disabled:!0}),l.a.createElement(f.a,{color:"default",onClick:s,variant:"contained"},l.a.createElement("span",{className:a.colorView})),c&&l.a.createElement(Ye,{onClick:s,onChange:function(t){return e(wt(t.rgb))},value:t.ledColor})),l.a.createElement("div",{className:a.row},l.a.createElement(Ie.a,{className:[a.textField,a.fullwidth],label:"First Line",name:"firstLine",onChange:h,size:"small",type:"text",value:t.firstLine,variant:"outlined"})),l.a.createElement("div",{className:a.row},l.a.createElement(Ie.a,{className:[a.textField,a.fullwidth],label:"Second Line",name:"secondLine",onChange:h,size:"small",type:"text",value:t.secondLine,variant:"outlined"})))))},Nt=(a(431),a(484)),Lt=Object(i.a)({root:{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:20},card:{width:"60vw"},cardContent:{textAlign:"center"},button:{minHeight:60}});var Bt=function(){var e=Lt(),t=Object(s.g)(),a=function(e){return function(){return t.push(e)}};return l.a.createElement("div",{className:e.root},l.a.createElement(u.a,{className:e.card},l.a.createElement(De.a,{title:"Select The Device"}),l.a.createElement(d.a,{className:e.cardContent},l.a.createElement(Nt.a,{className:e.buttonGroup,orientation:"vertical",color:"primary"},l.a.createElement(f.a,{className:e.button,onClick:a("/lightbars")},"Lightbars Configurator"),l.a.createElement(f.a,{className:e.button,onClick:a("/message-board")},"Message Board Configurator")))))},Rt=Object(i.a)({root:{}});var At=function(){var e=Rt();return l.a.createElement("div",{className:e.root},l.a.createElement(we,null),l.a.createElement(s.d,null,l.a.createElement(s.b,{path:"/lightbars"},l.a.createElement(T,null)),l.a.createElement(s.b,{path:"/lightbar"},l.a.createElement(ht,null)),l.a.createElement(s.b,{path:"/message-board"},l.a.createElement(kt,null)),l.a.createElement(s.b,{path:"/"},l.a.createElement(Bt,null))))},Pt=Object(x.a)({reducer:{lightbarSelector:k,lightbar:ye,scrollingBoard:St}}),Dt=a(201),It=Object(Dt.a)();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var zt=a(58);o.a.render(l.a.createElement(c.a,{theme:It},l.a.createElement(N.a,{store:Pt},l.a.createElement(zt.a,{basename:"/"},l.a.createElement(At,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[209,1,2]]]);
//# sourceMappingURL=main.bea5f813.chunk.js.map