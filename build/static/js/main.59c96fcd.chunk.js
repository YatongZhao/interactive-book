(this["webpackJsonpinteractive-book"]=this["webpackJsonpinteractive-book"]||[]).push([[0],{124:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n(0),a=n.n(c),o=n(12),r=n.n(o),s=n(18),l=n(15),u=n(92),d=n(8),j=n(156),b=n(183),h=n(180),p=n(161),O=n(162),f=n(57),x=n(160),g=n(164),m=n(166),v=n(169),S=n(170),k=n(171),y=n(172),I=n(168),C=n(83),N={apiHost:"",phoneRegExp:/^1[3|4|5|7|8][0-9]{9}$/,passwordRegExp:/(?=.*([a-zA-Z].*))(?=.*[0-9].*)[a-zA-Z0-9-*/+.~!@#$%^&*()]{6,20}$/,nickRegExp:/^\S{4,20}$/},w=Object(c.createContext)({}),T=w.Provider,B=n(90),L=n.n(B),E=n(56),H=n(158),z=n(184),R=n(163),F=n(165),P=n(179),W=n(167),M=n(89),A=n.n(M),J=Object(j.a)((function(e){return Object(b.a)({section:Object(E.a)(Object(E.a)({},e.typography.body1),{},{minHeight:"1.5rem",textIndent:e.spacing(4),marginTop:e.spacing(1),marginBottom:e.spacing(1)}),container:{outline:"none",border:function(t){return"1px solid ".concat(t.error?e.palette.error.main:e.palette.grey[600])},borderRadius:e.spacing(1),minHeight:e.spacing(50),position:"relative",marginTop:e.spacing(2),"&::before":{content:'"\u5185\u5bb9"',position:"absolute",fontSize:e.typography.body1.fontSize,color:function(t){return t.error?e.palette.error.main:e.palette.grey[600]},left:0,bottom:"calc(100% + ".concat(e.spacing(.5),"px)")},"&:focus":{borderColor:function(t){return t.error?e.palette.error.main:e.palette.primary.main},"&::before":{color:function(t){return t.error?e.palette.error.main:e.palette.primary.main}},"&::after":{color:function(t){return t.error?e.palette.error.main:e.palette.primary.main}}},"&::after":{content:function(e){return'"'.concat(e.helpText,'"')},fontSize:e.typography.caption.fontSize,color:function(t){return t.error?e.palette.error.main:e.palette.grey[600]},position:"absolute",left:"40px",bottom:"calc(100% + ".concat(e.spacing(.5),"px)")}}})})),D=function(e){var t=e.value,n=e.onChange,a=e.error,o=e.helpText,r=J({error:a,helpText:o}),s=Object(c.useRef)(),l=Object(c.useState)([]),u=Object(d.a)(l,2),j=u[0],b=u[1];return Object(c.useEffect)((function(){b(t)}),[]),Object(i.jsxs)("div",{ref:s,contentEditable:!0,className:r.container,suppressContentEditableWarning:!0,onInput:function(e){n(Array.prototype.map.call(e.target.children,(function(e){return e.innerText})))},children:[0===j.length&&Object(i.jsx)(h.a,{className:r.section}),j.map((function(e){return Object(i.jsx)(h.a,{className:r.section,children:e})}))]})},U=Object(j.a)((function(e){return Object(b.a)({appBar:{position:"relative"},title:{marginLeft:e.spacing(2),flex:1},container:{padding:e.spacing(2)},progress:{position:"fixed",top:0,left:0,width:"100vw",zIndex:1e4},contentHeader:{fontSize:e.typography.body1.fontSize,color:e.palette.grey[700]}})})),G=a.a.forwardRef((function(e,t){return Object(i.jsx)(H.a,Object(E.a)({direction:"up",ref:t},e))})),$=function(e){var t=e.open,n=e.handleClose,a=e.onSubmit,o=e.titleLabel,r=e.dialogTitle,s=(e.contentPlaceHolder,U()),l=Object(c.useState)(""),u=Object(d.a)(l,2),j=u[0],b=u[1],h=Object(c.useState)(!1),x=Object(d.a)(h,2),m=x[0],v=x[1],S=Object(c.useState)(""),k=Object(d.a)(S,2),y=k[0],I=k[1],C=Object(c.useState)([]),N=Object(d.a)(C,2),w=N[0],T=N[1],B=Object(c.useState)(!1),L=Object(d.a)(B,2),E=L[0],M=L[1],J=Object(c.useState)(""),$=Object(d.a)(J,2),Z=$[0],K=$[1],q=Object(c.useState)(!1),Q=Object(d.a)(q,2),V=Q[0],X=Q[1];return Object(c.useEffect)((function(){v(!1),I("")}),[j]),Object(c.useEffect)((function(){M(!1),K("")}),[w]),Object(i.jsxs)(z.a,{fullScreen:!0,open:t,onClose:n,TransitionComponent:G,children:[Object(i.jsx)(p.a,{className:s.appBar,color:"default",children:Object(i.jsxs)(O.a,{children:[Object(i.jsx)(R.a,{edge:"start",color:"inherit",onClick:n,"aria-label":"close",children:Object(i.jsx)(A.a,{})}),Object(i.jsx)(f.a,{variant:"h6",className:s.title,children:r}),Object(i.jsx)(g.a,{autoFocus:!0,color:"inherit",onClick:function(){if(!j)return v(!0),void I("".concat(o,"\u4e0d\u80fd\u4e3a\u7a7a"));if(0===w.length)return M(!0),void K("\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a");if(!w.reduce((function(e,t){return e+t.trim()}),""))return M(!0),void K("\u5185\u5bb9\u4e0d\u80fd\u4e3a\u7a7a");X(!0),a({content:w,title:j}).then((function(e){X(!1),n()}))},children:"\u63d0\u4ea4"})]})}),Object(i.jsxs)(F.a,{container:!0,spacing:4,className:s.container,children:[Object(i.jsx)(F.a,{item:!0,xs:12,children:Object(i.jsx)(P.a,{autoFocus:!0,value:j,error:m,helperText:y,onChange:function(e){return b(e.target.value)},label:o,fullWidth:!0})}),Object(i.jsx)(F.a,{item:!0,xs:12,children:Object(i.jsx)(D,{value:w,onChange:T,helpText:Z,error:E})})]}),Object(i.jsx)(H.a,{in:V,direction:"down",children:Object(i.jsx)(W.a,{className:s.progress})})]})},Z=Object(j.a)((function(e){return Object(b.a)({title:{flexGrow:1},fab:{position:"absolute",bottom:e.spacing(2),right:e.spacing(2)},loginTips:{textAlign:"center",marginTop:e.spacing(10),marginBottom:e.spacing(10),color:e.palette.grey[400]}})})),K=function(){var e=Z(),t=Object(c.useState)([]),n=Object(d.a)(t,2),a=n[0],o=n[1],r=Object(l.e)(),j=Object(c.useContext)(w),b=Object(c.useState)(!1),T=Object(d.a)(b,2),B=T[0],E=T[1];return Object(c.useEffect)((function(){fetch("".concat(N.apiHost,"/api/book"),{method:"get"}).then((function(e){return e.json()})).then((function(e){o(e.books)}))}),[]),Object(i.jsxs)(h.a,{children:[Object(i.jsx)(p.a,{position:"sticky",color:"primary",children:Object(i.jsxs)(O.a,{variant:"dense",children:[Object(i.jsx)(f.a,{variant:"h6",className:e.title,children:"ZBOOK"}),Object(i.jsx)(C.a,{children:function(){return Object(i.jsx)(i.Fragment,{children:j.isIsLoginReady?Object(i.jsx)(i.Fragment,{children:j.isLogin?Object(i.jsx)(x.a,{in:j.isLogin,children:Object(i.jsx)(g.a,{color:"inherit",onClick:function(){return r.push("/center")},children:j.userInfo.nick})}):Object(i.jsx)(x.a,{in:!j.isLogin,children:Object(i.jsx)(g.a,{color:"inherit",onClick:function(){return r.push("/login")},children:"Login"})})}):Object(i.jsx)(I.a,{animation:"wave",width:60})})}})]})}),Object(i.jsx)(m.a,{children:a.map((function(e){return Object(i.jsxs)(v.a,{button:!0,onClick:function(){return t=e.id,void r.push("/book-ver2/".concat(t));var t},children:[Object(i.jsx)(S.a,{primary:e.title,secondary:e.content[0]}),Object(i.jsx)(h.a,{children:e.author})]},e.id)}))}),Object(i.jsx)(C.a,{children:function(){return Object(i.jsxs)(i.Fragment,{children:[!j.isLogin&&a.length>0&&Object(i.jsx)(h.a,{className:e.loginTips,children:Object(i.jsxs)(f.a,{variant:"caption",children:["\u5feb\u53bb",Object(i.jsx)(k.a,{component:s.b,to:"/login",children:"\u767b\u5f55"}),"\u5f00\u59cb\u81ea\u5df1\u7684\u521b\u4f5c\u5427\uff5e"]})}),j.isLogin&&Object(i.jsx)(y.a,{className:e.fab,color:"primary",onClick:function(){return E(!0)},children:Object(i.jsx)(L.a,{})})]})}}),Object(i.jsx)($,{open:B,dialogTitle:"\u521b\u5efa\u56fe\u4e66",contentPlaceHolder:"\u672c\u4e66\u524d\u8a00\u90e8\u5206\u5185\u5bb9",titleLabel:"\u4e66\u540d",handleClose:function(){return E(!1)},onSubmit:function(e){var t=e.content,n=e.title;return fetch("".concat(N.apiHost,"/api/book"),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n,content:t})}).then((function(e){return e.json()})).then((function(e){var t;1e3!==e.errCode?(t=e.book,o([].concat(Object(u.a)(a),[t]))):r.push("/login")}))}})]})},q=n(176),Q=n(68),V=n(66),X=n(55),Y=n(9),_=n(77);console.log(Object(_.v4)());var ee=function(){function e(t){Object(V.a)(this,e),this.title="",this.author="",this.content=[],this.sub=[],this.subMap={},this.id="",this.likeNum=0,this.liked=!1,this.selectedSubId="",this.initialized=!1,t&&this.initialize(t),Object(Y.g)(this,{initialized:Y.h,id:Y.h,title:Y.h,author:Y.h,content:Y.h,sub:Y.h,subMap:Y.h,selectedSubId:Y.h,likeNum:Y.h,liked:Y.h,selectedSubIdIndex:Y.d,hasPreSubId:Y.d,hasNextSubId:Y.d,addSub:Y.b,addSubMap:Y.b,setSelectedSubId:Y.b,setNextSelectedSubId:Y.b,setPreSelectedSubId:Y.b,initialize:Y.b,setLikeNum:Y.b,setLiked:Y.b})}return Object(X.a)(e,[{key:"selectedSubIdIndex",get:function(){var e=this;return this.sub.findIndex((function(t){return e.selectedSubId===t.id}))}},{key:"hasPreSubId",get:function(){return this.selectedSubIdIndex>0}},{key:"hasNextSubId",get:function(){return this.selectedSubIdIndex<this.sub.length-1}}]),Object(X.a)(e,[{key:"initialize",value:function(e){this.id=e.id||Object(_.v4)(),this.title=e.title,this.author=e.author,this.content=e.content,this.sub=e.sub||[],this.likeNum=e.likeNum,this.liked=e.liked,this.initialized=!0}},{key:"addSub",value:function(t){this.sub.push({id:t.id,title:t.title,author:t.author}),this.addSubMap(new e(t))}},{key:"addSubMap",value:function(e){this.subMap[e.id]=e}},{key:"setSelectedSubId",value:function(e){this.selectedSubId=e}},{key:"setNextSelectedSubId",value:function(){this.selectedSubId=this.sub[this.selectedSubIdIndex+1].id}},{key:"setPreSelectedSubId",value:function(){this.selectedSubId=this.sub[this.selectedSubIdIndex-1].id}},{key:"setLikeNum",value:function(e){this.likeNum=e}},{key:"setLiked",value:function(e){this.liked=e}}]),e}(),te=n(173),ne=n(174),ie=n(181),ce=Object(j.a)((function(e){return Object(b.a)({loginTips:{marginTop:e.spacing(1),marginBottom:e.spacing(1),color:e.palette.grey[400]}})})),ae=function(e){var t=e.onSubmit,n=Object(c.useState)(!1),a=Object(d.a)(n,2),o=a[0],r=a[1],l=Object(c.useContext)(w),u=ce();return Object(i.jsx)(C.a,{children:function(){return Object(i.jsx)(i.Fragment,{children:l.isLogin?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(g.a,{onClick:function(){return r(!0)},fullWidth:!0,variant:"outlined",children:"\u521b\u4f5c\u5267\u60c5"}),Object(i.jsx)($,{titleLabel:"\u6807\u9898",dialogTitle:"\u6dfb\u52a0\u7ae0\u8282",contentPlaceHolder:"\u672c\u7ae0\u5185\u5bb9...",open:o,handleClose:function(){return r(!1)},onSubmit:t})]}):Object(i.jsx)(h.a,{className:u.loginTips,children:Object(i.jsxs)(f.a,{variant:"caption",children:["\u5feb\u53bb",Object(i.jsx)(k.a,{to:"/login",component:s.b,children:"\u767b\u5f55"}),"\u5f00\u59cb\u81ea\u5df1\u5bf9\u672c\u7ae0\u7684\u521b\u4f5c\u5427\uff5e"]})})})}})},oe=Object(j.a)((function(e){return Object(b.a)({container:{marginTop:e.spacing(2),backgroundColor:e.palette.grey[300]},addChapterBox:{padding:e.spacing(4)}})})),re=function(e){var t=e.data,n=e.onSelect,c=e.selectId,a=e.onSubmit,o=e.header,r=oe();return Object(i.jsxs)(h.a,{className:r.container,children:[0!==t.sub.length&&Object(i.jsx)(C.a,{children:function(){return Object(i.jsx)(m.a,{subheader:Object(i.jsx)(te.a,{disableSticky:!0,children:o}),children:t.sub.map((function(e){return Object(i.jsxs)(v.a,{button:!0,onClick:function(){return n(e.id)},children:[Object(i.jsx)(ne.a,{children:Object(i.jsx)(ie.a,{checked:e.id===c})}),Object(i.jsx)(S.a,{primary:e.title})]},e.id)}))})}}),Object(i.jsx)(h.a,{className:r.addChapterBox,children:Object(i.jsx)(ae,{onSubmit:a})})]})},se=Object(j.a)((function(e){return Object(b.a)({title:{marginTop:e.spacing(8),width:"100%",alignItems:"flex-start",flexDirection:"column"},author:{fontWeight:400,color:e.palette.grey[400],fontSize:e.spacing(2),textAlign:"right",width:"100%",marginTop:e.spacing(1)},content:{marginTop:e.spacing(6),textIndent:e.spacing(4),lineHeight:e.spacing(.22)},selectorContainer:{paddingLeft:e.spacing(3),marginTop:e.spacing(2),marginBottom:e.spacing(2)}})})),le=function e(t){var n=t.data,a=t.parent,o=t.setParentId,r=se(),s=Object(c.useState)(""),u=Object(d.a)(s,2),j=u[0],b=u[1],p=Object(c.useState)(null),O=Object(d.a)(p,2),x=O[0],g=O[1],m=Object(c.useState)(!1),v=Object(d.a)(m,2),S=v[0],k=v[1],y=Object(l.e)(),I=function(e){b(e),k(!1)};function w(e){return function(t){var n=t.content,i=t.title;return fetch("".concat(N.apiHost,"/api/chapter"),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:i,content:n,parentId:e.id})}).then((function(e){return e.json()})).then((function(t){1e3!==t.errCode?e.addSub(t.chapter):y.push("/login")}))}}return Object(c.useEffect)((function(){0!==n.sub.length&&b(n.sub[0].id)}),[n]),Object(c.useEffect)((function(){j&&(n.subMap[j]?g(n.subMap[j]):fetch("".concat(N.apiHost,"/api/chapter/").concat(j),{method:"get"}).then((function(e){return e.json()})).then((function(e){var t=e.chapter,i=new ee(t);g(i),n.addSubMap(i)})))}),[j,n]),Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(h.a,{className:r.content,children:n.content.map((function(e){return Object(i.jsx)(h.a,{children:e})}))}),a&&Object(i.jsx)(re,{header:"\u89c9\u5f97\u672c\u7ae0\u770b\u7684\u4e0d\u8fc7\u763e\uff1f\u770b\u770b\u5176\u4ed6\u540c\u6837\u4f18\u79c0\u7684\u7248\u672c\u5427\uff1a",onSubmit:w(a),data:a,onSelect:function(e){o&&o(e)},selectId:n.id}),x&&Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)(Q.a,{className:r.title,onClick:function(){return k(!S)},children:[Object(i.jsx)(f.a,{variant:"h4",children:x.title}),Object(i.jsxs)(h.a,{className:r.author,children:["author: ",x.author]})]})}),Object(i.jsx)(C.a,{children:function(){return Object(i.jsx)(i.Fragment,{children:(!j||S)&&Object(i.jsx)(re,{header:"\u672c\u7ae0\u5176\u4ed6\u5206\u652f\uff1a",onSubmit:w(n),data:n,onSelect:I,selectId:j})})}}),Object(i.jsx)(C.a,{children:function(){return Object(i.jsx)(i.Fragment,{children:x&&Object(i.jsx)(e,{data:x,parent:n,setParentId:b},x.id)})}})]})},ue=n(175),de=function(e){var t=e.children,n=Object(ue.a)();return Object(i.jsx)(H.a,{appear:!1,direction:"down",in:!n,children:t})},je=n(38),be=n.n(je),he=Object(j.a)((function(e){return Object(b.a)({title:{flexGrow:1},container:{marginTop:e.spacing(3)},menuButton:{marginRight:e.spacing(2)}})})),pe=function(){var e=he(),t=Object(l.f)().id,n=Object(c.useState)(null),a=Object(d.a)(n,2),o=a[0],r=a[1],s=Object(l.e)();return Object(c.useEffect)((function(){fetch("".concat(N.apiHost,"/api/chapter/").concat(t),{method:"get"}).then((function(e){return e.json()})).then((function(e){r(new ee(e.chapter))}))}),[t]),Object(i.jsxs)(h.a,{children:[Object(i.jsx)(de,{children:Object(i.jsx)(p.a,{position:"sticky",color:"default",children:Object(i.jsxs)(O.a,{variant:"dense",children:[Object(i.jsx)(R.a,{onClick:function(){return s.goBack()},edge:"start",className:e.menuButton,color:"inherit",children:Object(i.jsx)(be.a,{})}),Object(i.jsx)(f.a,{variant:"h6",className:e.title,children:o?Object(i.jsx)(x.a,{in:!!o,children:Object(i.jsx)(h.a,{children:o.title})}):Object(i.jsx)(I.a,{animation:"wave",width:100})})]})})}),Object(i.jsx)(q.a,{className:e.container,children:Object(i.jsx)(C.a,{children:function(){return Object(i.jsx)(i.Fragment,{children:o?o.initialized?Object(i.jsx)(le,{data:o}):Object(i.jsx)(h.a,{children:"error"}):Object(i.jsx)(h.a,{children:"waiting..."})})}})})]})},Oe=Object(j.a)((function(e){return Object(b.a)({title:{flexGrow:1},container:{},menuButton:{marginRight:e.spacing(2)},line:{textIndent:e.spacing(4)},nextChapterBox:{marginTop:e.spacing(2)},nextChapterBtn:{display:"block",width:"100%",textAlign:"left"}})})),fe=function(){var e=Oe(),t=Object(l.f)().id,n=Object(c.useState)(null),a=Object(d.a)(n,2),o=a[0],r=a[1],s=Object(l.e)();return Object(c.useEffect)((function(){fetch("".concat(N.apiHost,"/api/chapter/").concat(t),{method:"get"}).then((function(e){return e.json()})).then((function(e){r(new ee(e.chapter))}))}),[t]),Object(i.jsxs)(h.a,{children:[Object(i.jsx)(de,{children:Object(i.jsx)(p.a,{position:"sticky",color:"default",children:Object(i.jsxs)(O.a,{variant:"dense",children:[Object(i.jsx)(R.a,{onClick:function(){return s.push("/")},edge:"start",className:e.menuButton,color:"inherit",children:Object(i.jsx)(be.a,{})}),Object(i.jsx)(f.a,{variant:"h6",className:e.title,children:o?Object(i.jsx)(x.a,{in:!!o,children:Object(i.jsx)(h.a,{children:o.title})}):Object(i.jsx)(I.a,{animation:"wave",width:100})})]})})}),Object(i.jsxs)(q.a,{className:e.container,children:[Object(i.jsx)(g.a,{fullWidth:!0,children:"\u52a0\u8f7d\u4e0a\u4e00\u7bc7"}),Object(i.jsx)(h.a,{children:null===o||void 0===o?void 0:o.content.map((function(t){return Object(i.jsx)(h.a,{className:e.line,children:Object(i.jsx)(f.a,{variant:"body1",children:t})})}))}),Object(i.jsxs)(h.a,{className:e.nextChapterBox,children:[Object(i.jsx)(h.a,{children:"\u4e0b\u4e00\u4e2a\u5267\u60c5\u8282\u70b9\uff1a"}),null===o||void 0===o?void 0:o.sub.map((function(t){return Object(i.jsx)(Q.a,{className:e.nextChapterBtn,onClick:function(){s.push("/book-new/".concat(t.id))},children:Object(i.jsx)(h.a,{children:t.title})})}))]}),Object(i.jsx)(g.a,{fullWidth:!0,children:"\u52a0\u8f7d\u4e0b\u4e00\u7bc7"})]})]})},xe=n(177),ge=function(){var e=Object(l.e)();return Object(i.jsx)(p.a,{position:"sticky",color:"inherit",elevation:0,children:Object(i.jsx)(O.a,{variant:"dense",children:Object(i.jsx)(R.a,{onClick:function(){return e.goBack()},edge:"start",color:"inherit",children:Object(i.jsx)(be.a,{})})})})},me=Object(j.a)((function(e){return Object(b.a)({container:{margin:"".concat(e.spacing(4),"px auto"),maxWidth:e.spacing(40)},submitBtnContainer:{position:"relative"},submitBtn:{marginTop:e.spacing(1)},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-10,marginLeft:-12},signInBox:{display:"flex",justifyContent:"center"}})})),ve=function(){var e=Object(l.e)(),t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],o=n[1],r=Object(c.useState)(!1),u=Object(d.a)(r,2),j=u[0],b=u[1],p=Object(c.useState)(""),O=Object(d.a)(p,2),x=O[0],m=O[1],v=Object(c.useState)(""),S=Object(d.a)(v,2),y=S[0],I=S[1],C=Object(c.useState)(!1),T=Object(d.a)(C,2),B=T[0],L=T[1],E=Object(c.useState)(""),H=Object(d.a)(E,2),z=H[0],R=H[1],W=Object(c.useState)(!1),M=Object(d.a)(W,2),A=M[0],J=M[1],D=Object(c.useContext)(w),U=me();return Object(c.useEffect)((function(){m(""),b(!1)}),[a]),Object(c.useEffect)((function(){R(""),L(!1)}),[y]),Object(i.jsxs)(h.a,{children:[Object(i.jsx)(ge,{}),Object(i.jsxs)(F.a,{container:!0,className:U.container,spacing:4,children:[Object(i.jsx)(F.a,{item:!0,xs:12,children:Object(i.jsx)(P.a,{autoFocus:!0,error:j,helperText:x,value:a,onChange:function(e){return o(e.target.value)},label:"\u624b\u673a",type:"number",fullWidth:!0})}),Object(i.jsx)(F.a,{item:!0,xs:12,children:Object(i.jsx)(P.a,{error:B,helperText:z,value:y,type:"password",onChange:function(e){return I(e.target.value)},label:"\u5bc6\u7801",fullWidth:!0})}),Object(i.jsxs)(F.a,{item:!0,xs:12,className:U.submitBtnContainer,children:[Object(i.jsx)(g.a,{disabled:A,onClick:function(){if(!j&&!B){if(!a)return m("\u8bf7\u8f93\u5165\u624b\u673a\u53f7"),void b(!0);if(!N.phoneRegExp.test(a))return m("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7"),void b(!0);J(!0),fetch("".concat(N.apiHost,"/api/user/sign-in"),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:a,password:y})}).then((function(e){return e.json()})).then((function(t){if(J(!1),!t.errCode)return e.goBack(),D.setIsLogin(!0),void D.setUserInfo(t.info);1===t.errCode?(m(t.errMsg),b(!0)):2===t.errCode&&(R(t.errMsg),L(!0))}))}},className:U.submitBtn,variant:"outlined",color:"primary",fullWidth:!0,children:"\u767b\u5f55"}),A&&Object(i.jsx)(xe.a,{size:24,className:U.buttonProgress})]}),Object(i.jsx)(F.a,{item:!0,xs:12,className:U.signInBox,children:Object(i.jsxs)(f.a,{variant:"caption",children:["\u8fd8\u6ca1\u6709\u8d26\u53f7\uff0c\u7acb\u5373\u524d\u5f80",Object(i.jsx)(k.a,{component:s.b,to:"/sign-up",children:"\u6ce8\u518c"})]})})]})]})},Se=Object(j.a)((function(e){return Object(b.a)({container:{margin:"".concat(e.spacing(4),"px auto"),maxWidth:e.spacing(40)},submitBtnContainer:{position:"relative"},submitBtn:{marginTop:e.spacing(1)},buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-10,marginLeft:-12}})})),ke=function(){var e=Object(l.e)(),t=Object(c.useState)(""),n=Object(d.a)(t,2),a=n[0],o=n[1],r=Object(c.useState)(!1),s=Object(d.a)(r,2),u=s[0],j=s[1],b=Object(c.useState)(""),p=Object(d.a)(b,2),O=p[0],f=p[1],x=Object(c.useState)(""),m=Object(d.a)(x,2),v=m[0],S=m[1],k=Object(c.useState)(!1),y=Object(d.a)(k,2),I=y[0],C=y[1],T=Object(c.useState)(""),B=Object(d.a)(T,2),L=B[0],E=B[1],H=Object(c.useState)(""),z=Object(d.a)(H,2),R=z[0],W=z[1],M=Object(c.useState)(!1),A=Object(d.a)(M,2),J=A[0],D=A[1],U=Object(c.useState)(""),G=Object(d.a)(U,2),$=G[0],Z=G[1],K=Object(c.useState)(""),q=Object(d.a)(K,2),Q=q[0],V=q[1],X=Object(c.useState)(!1),Y=Object(d.a)(X,2),_=Y[0],ee=Y[1],te=Object(c.useState)(""),ne=Object(d.a)(te,2),ie=ne[0],ce=ne[1],ae=Object(c.useState)(!1),oe=Object(d.a)(ae,2),re=oe[0],se=oe[1],le=Object(c.useContext)(w),ue=Se();return Object(c.useEffect)((function(){f(""),j(!1)}),[a]),Object(c.useEffect)((function(){E(""),C(!1)}),[v]),Object(c.useEffect)((function(){Z(""),D(!1)}),[R]),Object(c.useEffect)((function(){ce(""),ee(!1)}),[Q]),Object(i.jsxs)(h.a,{children:[Object(i.jsx)(ge,{}),Object(i.jsxs)(F.a,{container:!0,className:ue.container,spacing:4,children:[Object(i.jsx)(F.a,{item:!0,xs:12,children:Object(i.jsx)(P.a,{autoFocus:!0,error:u,helperText:O,value:a,onChange:function(e){return o(e.target.value)},label:"\u6635\u79f0",fullWidth:!0})}),Object(i.jsx)(F.a,{item:!0,xs:12,children:Object(i.jsx)(P.a,{error:I,helperText:L,value:v,onChange:function(e){return S(e.target.value)},label:"\u624b\u673a",type:"number",fullWidth:!0})}),Object(i.jsx)(F.a,{item:!0,xs:12,children:Object(i.jsx)(P.a,{error:J,helperText:$,value:R,type:"password",onChange:function(e){return W(e.target.value)},label:"\u5bc6\u7801",fullWidth:!0})}),Object(i.jsx)(F.a,{item:!0,xs:12,children:Object(i.jsx)(P.a,{error:_,helperText:ie,value:Q,type:"password",onChange:function(e){return V(e.target.value)},label:"\u786e\u8ba4\u5bc6\u7801",fullWidth:!0})}),Object(i.jsxs)(F.a,{item:!0,xs:12,className:ue.submitBtnContainer,children:[Object(i.jsx)(g.a,{disabled:re,onClick:function(){return v?N.phoneRegExp.test(v)?a?N.nickRegExp.test(a)?R?N.passwordRegExp.test(R)?Q?R!==Q?(ce("\u4e24\u6b21\u8f93\u5165\u5bc6\u7801\u4e0d\u76f8\u540c"),ee(!0),void D(!0)):(se(!0),void fetch("".concat(N.apiHost,"/api/user/sign-up"),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:v,password:R,nick:a})}).then((function(e){return e.json()})).then((function(t){if(se(!1),!t.errCode)return le.setIsLogin(!0),le.setUserInfo(t.info),void e.push("/");4===t.errCode?(E("\u8be5\u624b\u673a\u53f7\u5df2\u88ab\u6ce8\u518c"),C(!0)):5===t.errCode&&(f("\u8be5\u6635\u79f0\u5df2\u5b58\u5728"),j(!0))}))):(ce("\u8bf7\u8f93\u5165\u4e8c\u6b21\u786e\u8ba4\u5bc6\u7801"),void ee(!0)):(Z("\u5bc6\u7801\u683c\u5f0f\u4e0d\u6b63\u786e(\u5fc5\u987b\u6709\u6570\u5b57\u548c\u5b57\u6bcd\uff0c6-20\u4e2a\u5b57\u7b26)"),void D(!0)):(Z("\u8bf7\u8bbe\u7f6e\u5bc6\u7801"),void D(!0)):(f("\u6635\u79f0\u683c\u5f0f\u4e0d\u7b26\u5408\u8981\u6c42(4-20\u4e2a\u5b57\u7b26)"),void j(!0)):(f("\u8bf7\u8f93\u5165\u6635\u79f0"),void j(!0)):(E("\u8bf7\u8f93\u5165\u6b63\u786e\u624b\u673a\u53f7"),void C(!0)):(E("\u8bf7\u8f93\u5165\u624b\u673a\u53f7"),void C(!0))},className:ue.submitBtn,variant:"outlined",color:"primary",fullWidth:!0,children:"\u6ce8\u518c"}),re&&Object(i.jsx)(xe.a,{size:24,className:ue.buttonProgress})]})]})]})},ye=Object(j.a)((function(e){return Object(b.a)({container:{padding:e.spacing(4)}})})),Ie=function(){var e=Object(c.useContext)(w),t=Object(l.e)(),n=ye();function a(){fetch("".concat(N.apiHost,"/api/user/logout"),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(n){e.setIsLogin(!1),e.setUserInfo({phone:"",nick:"",id:""}),t.replace("/")}))}return Object(c.useEffect)((function(){return Object(Y.c)((function(){e.isIsLoginReady&&!e.isLogin&&t.replace("/login")}))}),[e,t]),Object(i.jsxs)(h.a,{children:[Object(i.jsx)(ge,{}),Object(i.jsx)(C.a,{children:function(){return Object(i.jsxs)(F.a,{container:!0,spacing:2,className:n.container,children:[Object(i.jsxs)(F.a,{item:!0,xs:12,children:["\u6635\u79f0\uff1a",e.userInfo.nick]}),Object(i.jsxs)(F.a,{item:!0,xs:12,children:["\u7535\u8bdd\uff1a",e.userInfo.phone]}),Object(i.jsx)(F.a,{item:!0,xs:12,children:Object(i.jsx)(g.a,{fullWidth:!0,variant:"outlined",onClick:a,children:"\u9000\u51fa\u767b\u5f55"})})]})}})]})},Ce=n(185),Ne=n(91),we=n.n(Ne),Te=Object(j.a)((function(e){return Object(b.a)({titleBox:{position:"sticky",zIndex:10,top:0,backgroundColor:e.palette.background.default,paddingBottom:e.spacing(1),boxShadow:"0px -3px 3px 1px ".concat(e.palette.grey[200])},title:{width:"100%",display:"flex",alignItems:"center",flexDirection:"row",justifyContent:"flex-start",borderBottom:"1px solid ".concat(e.palette.divider),paddingRight:e.spacing(1)},titleMiddle:{display:"flex",flexDirection:"column",flexGrow:1,width:0},mainTitle:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},subTitle:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},titleCreateBtn:{height:"100%"},author:{fontWeight:400,color:e.palette.grey[400],fontSize:e.spacing(2),textAlign:"right",width:"100%",marginTop:e.spacing(1)},content:{marginTop:e.spacing(6),marginBottom:e.spacing(8),paddingLeft:e.spacing(1),paddingRight:e.spacing(1),textIndent:e.spacing(4),lineHeight:e.spacing(.22)},selectorContainer:{paddingLeft:e.spacing(3),marginTop:e.spacing(2),marginBottom:e.spacing(2)},bottomBar:{borderTop:"1px solid ".concat(e.palette.divider),display:"flex",justifyContent:"space-between",paddingLeft:e.spacing(1),paddingRight:e.spacing(1),position:"sticky",bottom:0,backgroundColor:e.palette.background.default},likeBtn:{width:e.spacing(4.5),height:e.spacing(4.5),display:"flex",flexDirection:"column",color:e.palette.grey[600]},likeBtnBox:{display:"flex",flexDirection:"column"},liked:{color:e.palette.secondary.main},unliked:{},iconBtnNum:{lineHeight:1,position:"relative",top:"-2px"}})})),Be=function e(t){var n=t.data,a=t.parent,o=Te({liked:null===n||void 0===n?void 0:n.liked}),r=Object(c.useState)(void 0),s=Object(d.a)(r,2),u=s[0],j=s[1],b=Object(l.e)(),p=Object(c.useState)(!1),O=Object(d.a)(p,2),x=O[0],m=O[1],v=Object(c.useContext)(w),S=Object(c.useState)(!1),k=Object(d.a)(S,2),y=k[0],I=k[1];function C(e){var t=e.content,n=e.title;return fetch("".concat(N.apiHost,"/api/chapter"),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:n,content:t,parentId:null===a||void 0===a?void 0:a.id})}).then((function(e){return e.json()})).then((function(e){1e3!==e.errCode?null===a||void 0===a||a.addSub(e.chapter):b.push("/login")}))}Object(c.useEffect)((function(){return Object(Y.c)((function(){(null===n||void 0===n?void 0:n.selectedSubId)&&((null===n||void 0===n?void 0:n.subMap[null===n||void 0===n?void 0:n.selectedSubId])?j(null===n||void 0===n?void 0:n.subMap[null===n||void 0===n?void 0:n.selectedSubId]):fetch("".concat(N.apiHost,"/api/chapter/").concat(null===n||void 0===n?void 0:n.selectedSubId),{method:"get",mode:"cors",credentials:"include"}).then((function(e){return e.json()})).then((function(e){var t=e.chapter,i=new ee(t);j(i),null===n||void 0===n||n.addSubMap(i)})))}))}),[n]);var T=Object(c.useCallback)((function(){v.isIsLoginReady&&v.isLogin?I(!0):b.push("/login")}),[v,b]),B=function(){v.isIsLoginReady&&v.isLogin?fetch("".concat(N.apiHost,"/api/chapter/").concat((null===n||void 0===n?void 0:n.liked)?"unlike":"like","?id=").concat(null===n||void 0===n?void 0:n.id),{method:"post",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"}}).then((function(e){null===n||void 0===n||n.setLikeNum(n.liked?n.likeNum-1:n.likeNum+1),null===n||void 0===n||n.setLiked(!n.liked)})):b.push("/login")};return Object(Ce.a)((function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)(h.a,{children:[Object(i.jsxs)(h.a,{className:o.titleBox,children:[n&&Object(i.jsxs)(h.a,{className:o.title,children:[Object(i.jsx)(R.a,{onClick:b.goBack,children:Object(i.jsx)(be.a,{})}),Object(i.jsxs)(h.a,{className:o.titleMiddle,onClick:function(){return m(!x)},children:[Object(i.jsx)(f.a,{className:o.mainTitle,variant:"subtitle1",children:n.title}),Object(i.jsx)(f.a,{className:o.subTitle,variant:"caption",children:n.content[0]})]}),Object(i.jsx)(g.a,{className:o.titleCreateBtn,color:"primary",onClick:T,children:"\u5199\u5267\u60c5"}),v.isIsLoginReady&&v.isLogin&&Object(i.jsx)($,{open:y,handleClose:function(){return I(!1)},onSubmit:C,titleLabel:"\u6807\u9898",dialogTitle:"\u6dfb\u52a0\u5267\u60c5",contentPlaceHolder:"\u672c\u7ae0\u5185\u5bb9..."})]}),a&&x&&Object(i.jsx)(re,{header:"\u5267\u60c5\u5206\u652f\u9009\u62e9\uff1a",onSubmit:C,data:a,onSelect:function(e){m(!1),a&&a.setSelectedSubId(e)},selectId:a.selectedSubId})]}),a&&!n&&Object(i.jsx)(re,{header:"\u5267\u60c5\u5206\u652f\u9009\u62e9\uff1a",onSubmit:C,data:a,onSelect:function(e){a&&a.setSelectedSubId(e)},selectId:a.selectedSubId}),n&&Object(i.jsx)(h.a,{className:o.content,children:null===n||void 0===n?void 0:n.content.map((function(e,t){return Object(i.jsx)(h.a,{children:e},t)}))}),n&&Object(i.jsxs)(h.a,{className:o.bottomBar,children:[Object(i.jsx)(h.a,{children:Object(i.jsx)(R.a,{className:o.likeBtn,size:"small",onClick:B,children:Object(i.jsxs)(h.a,{className:o.likeBtnBox,children:[Object(i.jsx)(we.a,{className:n.liked?o.liked:o.unliked,fontSize:"small"}),Object(i.jsx)(f.a,{className:o.iconBtnNum,variant:"caption",children:n.likeNum})]})})}),Object(i.jsxs)(h.a,{children:[Object(i.jsx)(g.a,{onClick:function(){return null===a||void 0===a?void 0:a.setPreSelectedSubId()},disabled:!(null===a||void 0===a?void 0:a.hasPreSubId),children:"\u4e0a\u4e00\u4e2a\u5267\u60c5"}),Object(i.jsx)(g.a,{onClick:function(){return null===a||void 0===a?void 0:a.setNextSelectedSubId()},disabled:!(null===a||void 0===a?void 0:a.hasNextSubId),children:"\u4e0b\u4e00\u4e2a\u5267\u60c5"})]})]})]}),(n||u)&&Object(i.jsx)(e,{data:u,parent:n},""+(null===u||void 0===u?void 0:u.id)+(null===n||void 0===n?void 0:n.id))]})}))},Le=Object(j.a)((function(e){return Object(b.a)({title:{flexGrow:1},container:{},menuButton:{marginRight:e.spacing(2)}})})),Ee=function(){var e=Le(),t=Object(l.f)().id,n=Object(c.useState)(null),a=Object(d.a)(n,2),o=a[0],r=a[1];return Object(c.useEffect)((function(){fetch("".concat(N.apiHost,"/api/chapter/").concat(t),{method:"get",mode:"cors",credentials:"include"}).then((function(e){return e.json()})).then((function(e){r(new ee(e.chapter))}))}),[t]),Object(i.jsx)(h.a,{className:e.container,children:Object(i.jsx)(C.a,{children:function(){return Object(i.jsx)(i.Fragment,{children:o?o.initialized?Object(i.jsx)(Be,{data:o}):Object(i.jsx)(h.a,{children:"error"}):Object(i.jsx)(h.a,{children:"waiting..."})})}})})},He=function(){var e=Object(c.useContext)(w);return Object(c.useEffect)((function(){fetch("".concat(N.apiHost,"/api/user/info"),{method:"get",credentials:"include"}).then((function(e){return e.json()})).then((function(t){1e3===t.errCode?e.setIsLogin(!1):(e.setIsLogin(!0),e.setUserInfo(t.info))}))}),[e]),Object(i.jsxs)(s.a,{children:[Object(i.jsx)(l.a,{path:"/",exact:!0,children:Object(i.jsx)(K,{})}),Object(i.jsx)(l.a,{path:"/book/:id",children:Object(i.jsx)(pe,{})}),Object(i.jsx)(l.a,{path:"/book-ver2/:id",children:Object(i.jsx)(Ee,{})}),Object(i.jsx)(l.a,{path:"/book-new/:id",children:Object(i.jsx)(fe,{})}),Object(i.jsx)(l.a,{path:"/login",children:Object(i.jsx)(ve,{})}),Object(i.jsx)(l.a,{path:"/sign-up",children:Object(i.jsx)(ke,{})}),Object(i.jsx)(l.a,{path:"/center",children:Object(i.jsx)(Ie,{})})]})},ze=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,187)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),i(e),c(e),a(e),o(e)}))},Re=n(178),Fe=new(function(){function e(){Object(V.a)(this,e),this.isLogin=!1,this.isIsLoginReady=!1,this.userInfo={phone:"",nick:"",id:""},Object(Y.g)(this,{isLogin:Y.h,isIsLoginReady:Y.h,userInfo:Y.h,setIsLogin:Y.b,setUserInfo:Y.b})}return Object(X.a)(e,[{key:"setIsLogin",value:function(e){this.isLogin=e,this.isIsLoginReady=!0}},{key:"setUserInfo",value:function(e){this.userInfo=e}}]),e}());r.a.render(Object(i.jsxs)(T,{value:Fe,children:[Object(i.jsx)(Re.a,{}),Object(i.jsx)(He,{})]}),document.getElementById("root")),ze()}},[[124,1,2]]]);
//# sourceMappingURL=main.59c96fcd.chunk.js.map