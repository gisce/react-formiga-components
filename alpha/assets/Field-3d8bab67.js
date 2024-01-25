import{j as ne}from"./jsx-runtime-f6d73c06.js";import{r as l}from"./index-8ee6c85d.js";import{Q as tt,L as nt}from"./Label-e0ed68ba.js";import{L as rt,t as ot}from"./LocaleContext-58eb36ec.js";import{s as fe,C as lt}from"./styled-components.browser.esm-e721a1b2.js";import{g as at,e as ze,a as ae,m as it,w as z,l as st,c as U,T as ct,D as dt,C as $e,V as ut,U as mt,S as ft,x as je,B as pt,H as gt,d as ht,y as bt,I as yt,i as Ct,A as xt}from"./index-7b090294.js";import{i as Pe}from"./motion-343f592f.js";import{a as Ie,u as vt,V as St,b as De,c as Q,R as wt,F as ue,d as Be,C as $t,L as It,W as Ft,e as Et,f as Ot}from"./context-4f71b533.js";import{z as ke,T as _t}from"./index-45663ff8.js";import{g as Nt}from"./collapse-97de76d4.js";import{u as Fe}from"./useCSSVarCls-313dcfc7.js";import{b as Mt}from"./Compact-7e23d0f8.js";import{i as jt,c as Pt}from"./reactNode-c432c2b0.js";import{t as Vt}from"./toArray-f9441672.js";import{i as Lt}from"./isVisible-f24c26d5.js";import{o as Rt}from"./omit-c5f18c7c.js";import{C as pe,R as Xe}from"./row-0ae67c61.js";import{u as Tt}from"./useLocale-3708b049.js";import{C as qt}from"./CheckCircleFilled-d8efb997.js";import{C as Wt}from"./CloseCircleFilled-4563a35c.js";import{E as Ht}from"./ExclamationCircleFilled-4441be00.js";import{L as At}from"./compact-item-82d41e68.js";const Ve=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Le=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",ye=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const n=getComputedStyle(e,null);return Le(n.overflowY,t)||Le(n.overflowX,t)||(r=>{const o=(a=>{if(!a.ownerDocument||!a.ownerDocument.defaultView)return null;try{return a.ownerDocument.defaultView.frameElement}catch{return null}})(r);return!!o&&(o.clientHeight<r.scrollHeight||o.clientWidth<r.scrollWidth)})(e)}return!1},de=(e,t,n,r,o,a,i,s)=>a<e&&i>t||a>e&&i<t?0:a<=e&&s<=n||i>=t&&s>=n?a-e-r:i>t&&s<n||a<e&&s>n?i-t+o:0,zt=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},Re=(e,t)=>{var n,r,o,a;if(typeof document>"u")return[];const{scrollMode:i,block:s,inline:c,boundary:m,skipOverflowHiddenElements:h}=t,f=typeof m=="function"?m:P=>P!==m;if(!Ve(e))throw new TypeError("Invalid target");const O=document.scrollingElement||document.documentElement,S=[];let b=e;for(;Ve(b)&&f(b);){if(b=zt(b),b===O){S.push(b);break}b!=null&&b===document.body&&ye(b)&&!ye(document.documentElement)||b!=null&&ye(b,h)&&S.push(b)}const $=(r=(n=window.visualViewport)==null?void 0:n.width)!=null?r:innerWidth,I=(a=(o=window.visualViewport)==null?void 0:o.height)!=null?a:innerHeight,{scrollX:v,scrollY:d}=window,{height:u,width:p,top:y,right:x,bottom:j,left:M}=e.getBoundingClientRect(),{top:W,right:R,bottom:H,left:D}=(P=>{const g=window.getComputedStyle(P);return{top:parseFloat(g.scrollMarginTop)||0,right:parseFloat(g.scrollMarginRight)||0,bottom:parseFloat(g.scrollMarginBottom)||0,left:parseFloat(g.scrollMarginLeft)||0}})(e);let _=s==="start"||s==="nearest"?y-W:s==="end"?j+H:y+u/2-W+H,w=c==="center"?M+p/2-D+R:c==="end"?x+R:M-D;const V=[];for(let P=0;P<S.length;P++){const g=S[P],{height:B,width:Z,top:ee,right:T,bottom:k,left:te}=g.getBoundingClientRect();if(i==="if-needed"&&y>=0&&M>=0&&j<=I&&x<=$&&y>=ee&&j<=k&&M>=te&&x<=T)return V;const X=getComputedStyle(g),A=parseInt(X.borderLeftWidth,10),C=parseInt(X.borderTopWidth,10),F=parseInt(X.borderRightWidth,10),E=parseInt(X.borderBottomWidth,10);let L=0,q=0;const G="offsetWidth"in g?g.offsetWidth-g.clientWidth-A-F:0,K="offsetHeight"in g?g.offsetHeight-g.clientHeight-C-E:0,Y="offsetWidth"in g?g.offsetWidth===0?0:Z/g.offsetWidth:0,N="offsetHeight"in g?g.offsetHeight===0?0:B/g.offsetHeight:0;if(O===g)L=s==="start"?_:s==="end"?_-I:s==="nearest"?de(d,d+I,I,C,E,d+_,d+_+u,u):_-I/2,q=c==="start"?w:c==="center"?w-$/2:c==="end"?w-$:de(v,v+$,$,A,F,v+w,v+w+p,p),L=Math.max(0,L+d),q=Math.max(0,q+v);else{L=s==="start"?_-ee-C:s==="end"?_-k+E+K:s==="nearest"?de(ee,k,B,C,E+K,_,_+u,u):_-(ee+B/2)+K/2,q=c==="start"?w-te-A:c==="center"?w-(te+Z/2)+G/2:c==="end"?w-T+F+G:de(te,T,Z,A,F+G,w,w+p,p);const{scrollLeft:re,scrollTop:se}=g;L=N===0?0:Math.max(0,Math.min(se+L/N,g.scrollHeight-B/N+K)),q=Y===0?0:Math.max(0,Math.min(re+q/Y,g.scrollWidth-Z/Y+G)),_+=se-L,w+=re-q}V.push({el:g,top:L,left:q})}return V},Dt=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function Bt(e,t){if(!e.isConnected||!(o=>{let a=o;for(;a&&a.parentNode;){if(a.parentNode===document)return!0;a=a.parentNode instanceof ShadowRoot?a.parentNode.host:a.parentNode}return!1})(e))return;const n=(o=>{const a=window.getComputedStyle(o);return{top:parseFloat(a.scrollMarginTop)||0,right:parseFloat(a.scrollMarginRight)||0,bottom:parseFloat(a.scrollMarginBottom)||0,left:parseFloat(a.scrollMarginLeft)||0}})(e);if((o=>typeof o=="object"&&typeof o.behavior=="function")(t))return t.behavior(Re(e,t));const r=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:o,top:a,left:i}of Re(e,Dt(t))){const s=a-n.top+n.bottom,c=i-n.left+n.right;o.scroll({top:s,left:c,behavior:r})}}function me(e){const[t,n]=l.useState(e);return l.useEffect(()=>{const r=setTimeout(()=>{n(e)},e.length?0:10);return()=>{clearTimeout(r)}},[e]),t}const kt=e=>{const{componentCls:t}=e,n=`${t}-show-help`,r=`${t}-show-help-item`;return{[n]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[r]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${r}-appear, &${r}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${r}-leave-active`]:{transform:"translateY(-5px)"}}}}},Xt=kt,Gt=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${ae(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${ae(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),Te=(e,t)=>{const{formItemCls:n}=e;return{[n]:{[`${n}-label > label`]:{height:t},[`${n}-control-input`]:{minHeight:t}}}},Kt=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},ze(e)),Gt(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},Te(e,e.controlHeightSM)),"&-large":Object.assign({},Te(e,e.controlHeightLG))})}},Yt=e=>{const{formItemCls:t,iconCls:n,componentCls:r,rootPrefixCls:o,labelRequiredMarkColor:a,labelColor:i,labelFontSize:s,labelHeight:c,labelColonMarginInlineStart:m,labelColonMarginInlineEnd:h,itemMarginBottom:f}=e;return{[t]:Object.assign(Object.assign({},ze(e)),{marginBottom:f,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden.${o}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:c,color:i,fontSize:s,[`> ${n}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:a,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${r}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:m,marginInlineEnd:h},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:ke,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},Ut=e=>{const{componentCls:t,formItemCls:n}=e;return{[`${t}-horizontal`]:{[`${n}-label`]:{flexGrow:0},[`${n}-control`]:{flex:"1 1 0",minWidth:0},[`${n}-label[class$='-24'], ${n}-label[class*='-24 ']`]:{[`& + ${n}-control`]:{minWidth:"unset"}}}}},Qt=e=>{const{componentCls:t,formItemCls:n}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[n]:{flex:"none",marginInlineEnd:e.margin,marginBottom:0,"&-row":{flexWrap:"nowrap"},[`> ${n}-label,
        > ${n}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${n}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${n}-has-feedback`]:{display:"inline-block"}}}}},le=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),Jt=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${n} ${n}-label`]:le(e),[`${t}:not(${t}-inline)`]:{[n]:{flexWrap:"wrap",[`${n}-label, ${n}-control`]:{[`&:not([class*=" ${r}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},Zt=e=>{const{componentCls:t,formItemCls:n,rootPrefixCls:r}=e;return{[`${t}-vertical`]:{[n]:{"&-row":{flexDirection:"column"},"&-label > label":{height:"auto"},[`${t}-item-control`]:{width:"100%"}}},[`${t}-vertical ${n}-label,
      .${r}-col-24${n}-label,
      .${r}-col-xl-24${n}-label`]:le(e),[`@media (max-width: ${ae(e.screenXSMax)})`]:[Jt(e),{[t]:{[`.${r}-col-xs-24${n}-label`]:le(e)}}],[`@media (max-width: ${ae(e.screenSMMax)})`]:{[t]:{[`.${r}-col-sm-24${n}-label`]:le(e)}},[`@media (max-width: ${ae(e.screenMDMax)})`]:{[t]:{[`.${r}-col-md-24${n}-label`]:le(e)}},[`@media (max-width: ${ae(e.screenLGMax)})`]:{[t]:{[`.${r}-col-lg-24${n}-label`]:le(e)}}}},en=e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0}),Ge=(e,t)=>it(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),Ee=at("Form",(e,t)=>{let{rootPrefixCls:n}=t;const r=Ge(e,n);return[Kt(r),Yt(r),Xt(r),Ut(r),Qt(r),Zt(r),Nt(r),ke]},en,{order:-1e3}),qe=[];function Ce(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${r}`,error:e,errorStatus:n}}const tn=e=>{let{help:t,helpStatus:n,errors:r=qe,warnings:o=qe,className:a,fieldId:i,onVisibleChanged:s}=e;const{prefixCls:c}=l.useContext(Ie),m=`${c}-item-explain`,h=Fe(c),[f,O,S]=Ee(c,h),b=l.useMemo(()=>Pe(c),[c]),$=me(r),I=me(o),v=l.useMemo(()=>t!=null?[Ce(t,"help",n)]:[].concat(z($.map((u,p)=>Ce(u,"error","error",p))),z(I.map((u,p)=>Ce(u,"warning","warning",p)))),[t,n,$,I]),d={};return i&&(d.id=`${i}_help`),f(l.createElement(st,{motionDeadline:b.motionDeadline,motionName:`${c}-show-help`,visible:!!v.length,onVisibleChanged:s},u=>{const{className:p,style:y}=u;return l.createElement("div",Object.assign({},d,{className:U(m,p,S,h,a,O),style:y,role:"alert"}),l.createElement(ct,Object.assign({keys:v},Pe(c),{motionName:`${c}-show-help-item`,component:!1}),x=>{const{key:j,error:M,errorStatus:W,className:R,style:H}=x;return l.createElement("div",{key:j,className:U(R,{[`${m}-${W}`]:W}),style:H},M)}))}))},Ke=tn,nn=["parentNode"],rn="form_item";function ie(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Ye(e,t){if(!e.length)return;const n=e.join("_");return t?`${t}_${n}`:nn.includes(n)?`${rn}_${n}`:n}function Ue(e,t,n,r,o,a){let i=r;return a!==void 0?i=a:n.validating?i="validating":e.length?i="error":t.length?i="warning":(n.touched||o&&n.validated)&&(i="success"),i}function We(e){return ie(e).join("_")}function Qe(e){const[t]=vt(),n=l.useRef({}),r=l.useMemo(()=>e??Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:o=>a=>{const i=We(o);a?n.current[i]=a:delete n.current[i]}},scrollToField:function(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=ie(o),s=Ye(i,r.__INTERNAL__.name),c=s?document.getElementById(s):null;c&&Bt(c,Object.assign({scrollMode:"if-needed",block:"nearest"},a))},getFieldInstance:o=>{const a=We(o);return n.current[a]}}),[e,t]);return[r]}var on=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const ln=(e,t)=>{const n=l.useContext(dt),{getPrefixCls:r,direction:o,form:a}=l.useContext($e),{prefixCls:i,className:s,rootClassName:c,size:m,disabled:h=n,form:f,colon:O,labelAlign:S,labelWrap:b,labelCol:$,wrapperCol:I,hideRequiredMark:v,layout:d="horizontal",scrollToFirstError:u,requiredMark:p,onFinishFailed:y,name:x,style:j,feedbackIcons:M,variant:W}=e,R=on(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),H=Mt(m),D=l.useContext(ut),_=l.useMemo(()=>p!==void 0?p:v?!1:a&&a.requiredMark!==void 0?a.requiredMark:!0,[v,p,a]),w=O??(a==null?void 0:a.colon),V=r("form",i),P=Fe(V),[g,B,Z]=Ee(V,P),ee=U(V,`${V}-${d}`,{[`${V}-hide-required-mark`]:_===!1,[`${V}-rtl`]:o==="rtl",[`${V}-${H}`]:H},Z,P,B,a==null?void 0:a.className,s,c),[T]=Qe(f),{__INTERNAL__:k}=T;k.name=x;const te=l.useMemo(()=>({name:x,labelAlign:S,labelCol:$,labelWrap:b,wrapperCol:I,vertical:d==="vertical",colon:w,requiredMark:_,itemRef:k.itemRef,form:T,feedbackIcons:M}),[x,S,$,I,d,w,_,T,M]);l.useImperativeHandle(t,()=>T);const X=(C,F)=>{if(C){let E={block:"nearest"};typeof C=="object"&&(E=C),T.scrollToField(F,E)}},A=C=>{if(y==null||y(C),C.errorFields.length){const F=C.errorFields[0].name;if(u!==void 0){X(u,F);return}a&&a.scrollToFirstError!==void 0&&X(a.scrollToFirstError,F)}};return g(l.createElement(St.Provider,{value:W},l.createElement(mt,{disabled:h},l.createElement(ft.Provider,{value:H},l.createElement(De,{validateMessages:D},l.createElement(Q.Provider,{value:te},l.createElement(wt,Object.assign({id:x},R,{name:x,onFinishFailed:A,form:T,style:Object.assign(Object.assign({},a==null?void 0:a.style),j),className:ee}))))))))},an=l.forwardRef(ln),sn=an;function cn(e){if(typeof e=="function")return e;const t=Vt(e);return t.length<=1?t[0]:t}const Je=()=>{const{status:e,errors:t=[],warnings:n=[]}=l.useContext(ue);return{status:e,errors:t,warnings:n}};Je.Context=ue;const dn=Je;function un(e){const[t,n]=l.useState(e),r=l.useRef(null),o=l.useRef([]),a=l.useRef(!1);l.useEffect(()=>(a.current=!1,()=>{a.current=!0,je.cancel(r.current),r.current=null}),[]);function i(s){a.current||(r.current===null&&(o.current=[],r.current=je(()=>{r.current=null,n(c=>{let m=c;return o.current.forEach(h=>{m=h(m)}),m})})),o.current.push(s))}return[t,i]}function mn(){const{itemRef:e}=l.useContext(Q),t=l.useRef({});function n(r,o){const a=o&&typeof o=="object"&&o.ref,i=r.join("_");return(t.current.name!==i||t.current.originRef!==a)&&(t.current.name=i,t.current.originRef=a,t.current.ref=pt(e(r),a)),t.current.ref}return n}const fn=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},pn=gt(["Form","item-item"],(e,t)=>{let{rootPrefixCls:n}=t;const r=Ge(e,n);return[fn(r)]}),gn=e=>{const{prefixCls:t,status:n,wrapperCol:r,children:o,errors:a,warnings:i,_internalItemRender:s,extra:c,help:m,fieldId:h,marginBottom:f,onErrorVisibleChanged:O}=e,S=`${t}-item`,b=l.useContext(Q),$=r||b.wrapperCol||{},I=U(`${S}-control`,$.className),v=l.useMemo(()=>Object.assign({},b),[b]);delete v.labelCol,delete v.wrapperCol;const d=l.createElement("div",{className:`${S}-control-input`},l.createElement("div",{className:`${S}-control-input-content`},o)),u=l.useMemo(()=>({prefixCls:t,status:n}),[t,n]),p=f!==null||a.length||i.length?l.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},l.createElement(Ie.Provider,{value:u},l.createElement(Ke,{fieldId:h,errors:a,warnings:i,help:m,helpStatus:n,className:`${S}-explain-connected`,onVisibleChanged:O})),!!f&&l.createElement("div",{style:{width:0,height:f}})):null,y={};h&&(y.id=`${h}_extra`);const x=c?l.createElement("div",Object.assign({},y,{className:`${S}-extra`}),c):null,j=s&&s.mark==="pro_table_render"&&s.render?s.render(e,{input:d,errorList:p,extra:x}):l.createElement(l.Fragment,null,d,p,x);return l.createElement(Q.Provider,{value:v},l.createElement(pe,Object.assign({},$,{className:I}),j),l.createElement(pn,{prefixCls:t}))},hn=gn;var bn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function yn(e){return e?typeof e=="object"&&!l.isValidElement(e)?e:{title:e}:null}const Cn=e=>{let{prefixCls:t,label:n,htmlFor:r,labelCol:o,labelAlign:a,colon:i,required:s,requiredMark:c,tooltip:m}=e;var h;const[f]=Tt("Form"),{vertical:O,labelAlign:S,labelCol:b,labelWrap:$,colon:I}=l.useContext(Q);if(!n)return null;const v=o||b||{},d=a||S,u=`${t}-item-label`,p=U(u,d==="left"&&`${u}-left`,v.className,{[`${u}-wrap`]:!!$});let y=n;const x=i===!0||I!==!1&&i!==!1;x&&!O&&typeof n=="string"&&n.trim()!==""&&(y=n.replace(/[:|：]\s*$/,""));const M=yn(m);if(M){const{icon:D=l.createElement(tt,null)}=M,_=bn(M,["icon"]),w=l.createElement(_t,Object.assign({},_),l.cloneElement(D,{className:`${t}-item-tooltip`,title:"",onClick:V=>{V.preventDefault()},tabIndex:null}));y=l.createElement(l.Fragment,null,y,w)}const W=c==="optional",R=typeof c=="function";R?y=c(y,{required:!!s}):W&&!s&&(y=l.createElement(l.Fragment,null,y,l.createElement("span",{className:`${t}-item-optional`,title:""},(f==null?void 0:f.optional)||((h=ht.Form)===null||h===void 0?void 0:h.optional))));const H=U({[`${t}-item-required`]:s,[`${t}-item-required-mark-optional`]:W||R,[`${t}-item-no-colon`]:!x});return l.createElement(pe,Object.assign({},v,{className:p}),l.createElement("label",{htmlFor:r,className:H,title:typeof n=="string"?n:""},y))},xn=Cn,vn={success:qt,warning:Ht,error:Wt,validating:At};function Ze(e){let{children:t,errors:n,warnings:r,hasFeedback:o,validateStatus:a,prefixCls:i,meta:s,noStyle:c}=e;const m=`${i}-item`,{feedbackIcons:h}=l.useContext(Q),f=Ue(n,r,s,null,!!o,a),{isFormItemInput:O,status:S,hasFeedback:b,feedbackIcon:$}=l.useContext(ue),I=l.useMemo(()=>{var v;let d;if(o){const p=o!==!0&&o.icons||h,y=f&&((v=p==null?void 0:p({status:f,errors:n,warnings:r}))===null||v===void 0?void 0:v[f]),x=f&&vn[f];d=y!==!1&&x?l.createElement("span",{className:U(`${m}-feedback-icon`,`${m}-feedback-icon-${f}`)},y||l.createElement(x,null)):null}const u={status:f||"",errors:n,warnings:r,hasFeedback:!!o,feedbackIcon:d,isFormItemInput:!0};return c&&(u.status=(f??S)||"",u.isFormItemInput=O,u.hasFeedback=!!(o??b),u.feedbackIcon=o!==void 0?u.feedbackIcon:$),u},[f,o,c,O,S]);return l.createElement(ue.Provider,{value:I},t)}var Sn=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function wn(e){const{prefixCls:t,className:n,rootClassName:r,style:o,help:a,errors:i,warnings:s,validateStatus:c,meta:m,hasFeedback:h,hidden:f,children:O,fieldId:S,required:b,isRequired:$,onSubItemMetaChange:I}=e,v=Sn(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange"]),d=`${t}-item`,{requiredMark:u}=l.useContext(Q),p=l.useRef(null),y=me(i),x=me(s),j=a!=null,M=!!(j||i.length||s.length),W=!!p.current&&Lt(p.current),[R,H]=l.useState(null);bt(()=>{if(M&&p.current){const P=getComputedStyle(p.current);H(parseInt(P.marginBottom,10))}},[M,W]);const D=P=>{P||H(null)},w=function(){let P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const g=P?y:m.errors,B=P?x:m.warnings;return Ue(g,B,m,"",!!h,c)}(),V=U(d,n,r,{[`${d}-with-help`]:j||y.length||x.length,[`${d}-has-feedback`]:w&&h,[`${d}-has-success`]:w==="success",[`${d}-has-warning`]:w==="warning",[`${d}-has-error`]:w==="error",[`${d}-is-validating`]:w==="validating",[`${d}-hidden`]:f});return l.createElement("div",{className:V,style:o,ref:p},l.createElement(Xe,Object.assign({className:`${d}-row`},Rt(v,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),l.createElement(xn,Object.assign({htmlFor:S},e,{requiredMark:u,required:b??$,prefixCls:t})),l.createElement(hn,Object.assign({},e,m,{errors:y,warnings:x,prefixCls:t,status:w,help:a,marginBottom:R,onErrorVisibleChanged:D}),l.createElement(Be.Provider,{value:I},l.createElement(Ze,{prefixCls:t,meta:m,errors:m.errors,warnings:m.warnings,hasFeedback:h,validateStatus:w},O)))),!!R&&l.createElement("div",{className:`${d}-margin-offset`,style:{marginBottom:-R}}))}const $n="__SPLIT__";function In(e,t){const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every(o=>{const a=e[o],i=t[o];return a===i||typeof a=="function"||typeof i=="function"})}const Fn=l.memo(e=>{let{children:t}=e;return t},(e,t)=>In(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((n,r)=>n===t.childProps[r]));function He(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function En(e){const{name:t,noStyle:n,className:r,dependencies:o,prefixCls:a,shouldUpdate:i,rules:s,children:c,required:m,label:h,messageVariables:f,trigger:O="onChange",validateTrigger:S,hidden:b,help:$}=e,{getPrefixCls:I}=l.useContext($e),{name:v}=l.useContext(Q),d=cn(c),u=typeof d=="function",p=l.useContext(Be),{validateTrigger:y}=l.useContext($t),x=S!==void 0?S:y,j=t!=null,M=I("form",a),W=Fe(M),[R,H,D]=Ee(M,W);yt();const _=l.useContext(It),w=l.useRef(),[V,P]=un({}),[g,B]=Ct(()=>He()),Z=C=>{const F=_==null?void 0:_.getKey(C.name);if(B(C.destroy?He():C,!0),n&&$!==!1&&p){let E=C.name;if(C.destroy)E=w.current||E;else if(F!==void 0){const[L,q]=F;E=[L].concat(z(q)),w.current=E}p(C,E)}},ee=(C,F)=>{P(E=>{const L=Object.assign({},E),G=[].concat(z(C.name.slice(0,-1)),z(F)).join($n);return C.destroy?delete L[G]:L[G]=C,L})},[T,k]=l.useMemo(()=>{const C=z(g.errors),F=z(g.warnings);return Object.values(V).forEach(E=>{C.push.apply(C,z(E.errors||[])),F.push.apply(F,z(E.warnings||[]))}),[C,F]},[V,g.errors,g.warnings]),te=mn();function X(C,F,E){return n&&!b?l.createElement(Ze,{prefixCls:M,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:g,errors:T,warnings:k,noStyle:!0},C):l.createElement(wn,Object.assign({key:"row"},e,{className:U(r,D,W,H),prefixCls:M,fieldId:F,isRequired:E,errors:T,warnings:k,meta:g,onSubItemMetaChange:ee}),C)}if(!j&&!u&&!o)return R(X(d));let A={};return typeof h=="string"?A.label=h:t&&(A.label=String(t)),f&&(A=Object.assign(Object.assign({},A),f)),R(l.createElement(Ft,Object.assign({},e,{messageVariables:A,trigger:O,validateTrigger:x,onMetaChange:Z}),(C,F,E)=>{const L=ie(t).length&&F?F.name:[],q=Ye(L,v),G=m!==void 0?m:!!(s&&s.some(N=>{if(N&&typeof N=="object"&&N.required&&!N.warningOnly)return!0;if(typeof N=="function"){const re=N(E);return re&&re.required&&!re.warningOnly}return!1})),K=Object.assign({},C);let Y=null;if(Array.isArray(d)&&j)Y=d;else if(!(u&&(!(i||o)||j))){if(!(o&&!u&&!j))if(jt(d)){const N=Object.assign(Object.assign({},d.props),K);if(N.id||(N.id=q),$||T.length>0||k.length>0||e.extra){const oe=[];($||T.length>0)&&oe.push(`${q}_help`),e.extra&&oe.push(`${q}_extra`),N["aria-describedby"]=oe.join(" ")}T.length>0&&(N["aria-invalid"]="true"),G&&(N["aria-required"]="true"),xt(d)&&(N.ref=te(L,d)),new Set([].concat(z(ie(O)),z(ie(x)))).forEach(oe=>{N[oe]=function(){for(var Oe,_e,ge,Ne,he,Me=arguments.length,be=new Array(Me),ce=0;ce<Me;ce++)be[ce]=arguments[ce];(ge=K[oe])===null||ge===void 0||(Oe=ge).call.apply(Oe,[K].concat(be)),(he=(Ne=d.props)[oe])===null||he===void 0||(_e=he).call.apply(_e,[Ne].concat(be))}});const se=[N["aria-required"],N["aria-invalid"],N["aria-describedby"]];Y=l.createElement(Fn,{control:K,update:d,childProps:se},Pt(d,N))}else u&&(i||o)&&!j?Y=d(E):Y=d}return X(Y,q,G)}))}const et=En;et.useStatus=dn;const On=et;var _n=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};const Nn=e=>{var{prefixCls:t,children:n}=e,r=_n(e,["prefixCls","children"]);const{getPrefixCls:o}=l.useContext($e),a=o("form",t),i=l.useMemo(()=>({prefixCls:a,status:"error"}),[a]);return l.createElement(Et,Object.assign({},r),(s,c,m)=>l.createElement(Ie.Provider,{value:i},n(s.map(h=>Object.assign(Object.assign({},h),{fieldKey:h.key})),c,{errors:m.errors,warnings:m.warnings})))},Mn=Nn;function jn(){const{form:e}=l.useContext(Q);return e}const J=sn;J.Item=On;J.List=Mn;J.ErrorList=Ke;J.useForm=Qe;J.useFormInstance=jn;J.useWatch=Ot;J.Provider=De;J.create=()=>{};const Pn=J,xe=fe(Xe)`
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
`,ve=fe(pe)`
  margin-left: 0.5rem;
`,Se=fe.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,we=fe(Pn.Item)`
  margin-bottom: 0;
`,nr=lt`
  --tw-bg-opacity: 1 !important;
  background-color: rgba(219, 234, 254, var(--tw-bg-opacity)) !important;

  .ant-input {
    background-color: rgba(219, 234, 254, var(--tw-bg-opacity)) !important;
  }
`;try{xe.displayName="StyledRow",xe.__docgenInfo={description:"",displayName:"StyledRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{ve.displayName="StyledCol",ve.__docgenInfo={description:"",displayName:"StyledCol",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{Se.displayName="LabelContainer",Se.__docgenInfo={description:"",displayName:"LabelContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{we.displayName="FormItemStyled",we.__docgenInfo={description:"",displayName:"FormItemStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}function Ae(e){const{name:t,labelOpts:n,children:r,valuePropName:o,required:a=!1,validatorOpts:i,locale:s}=e,{t:c=void 0}=l.useContext(rt)||{};function m(u){return ot(u,s,c)}let h;if(i&&a){const{type:u,validator:p}=i;h=[{required:!0,message:m("fillRequiredField"),type:u,validator:p?(y,x)=>{p(x)}:void 0}]}function f(){return ne.jsx(we,{name:t,valuePropName:o,rules:h,children:r})}if(!n)return f();const{tooltip:O,layout:S="horizontal",align:b="left",text:$}=n;function I(){return ne.jsx(nt,{text:`${$} :`,tooltip:O,align:b})}function v(){return ne.jsxs(xe,{align:"middle",children:[ne.jsx(ve,{flex:"7rem",children:ne.jsx(Se,{children:I()})}),ne.jsx(pe,{flex:"auto",children:f()})]})}return S==="horizontal"?v():(()=>ne.jsxs(ne.Fragment,{children:[I(),f()]}))()}try{Ae.displayName="Field",Ae.__docgenInfo={description:"",displayName:"Field",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},labelOpts:{defaultValue:null,description:"",name:"labelOpts",required:!1,type:{name:"LabelOptions"}},validatorOpts:{defaultValue:null,description:"",name:"validatorOpts",required:!1,type:{name:"ValidatorOptions"}},valuePropName:{defaultValue:null,description:"",name:"valuePropName",required:!1,type:{name:"string"}}}}}catch{}export{Pn as A,Ae as F,nr as R,Qe as u};