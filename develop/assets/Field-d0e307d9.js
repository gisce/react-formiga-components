import{j as re}from"./jsx-runtime-f6d73c06.js";import{Q as tt,L as rt}from"./Label-5dc05267.js";import{u as nt}from"./LocaleContext-948e5f1f.js";import{s as fe,C as ot}from"./styled-components.browser.esm-d9ff1479.js";import{g as lt,b as ze,u as ae,m as at,p as z,t as it,c as U,a3 as st,D as ct,C as $e,a4 as dt,a5 as ut,S as mt,w as Pe,x as ft,P as pt,d as gt,q as ht,Q as bt,f as yt,v as Ct}from"./index-4cbabd78.js";import{r as l}from"./index-8ee6c85d.js";import{i as je}from"./motion-343f592f.js";import{a as Ie,u as Fe,b as xt,V as vt,c as De,d as Q,R as St,F as ue,e as Be,C as wt,L as $t,W as It,f as Ft,g as Et}from"./context-4b385781.js";import{z as ke,T as Ot}from"./index-7d371500.js";import{g as _t}from"./collapse-97de76d4.js";import{b as Nt}from"./Compact-5059a700.js";import{i as Mt,c as Pt}from"./reactNode-c432c2b0.js";import{t as jt}from"./toArray-fde42edc.js";import{i as Vt}from"./isVisible-21091144.js";import{o as Rt}from"./omit-699eb5ab.js";import{C as pe,R as Xe}from"./row-0fcba45e.js";import{u as Lt}from"./useLocale-4d1812fe.js";import{C as qt}from"./CheckCircleFilled-69f018f7.js";import{C as Tt}from"./CloseCircleFilled-f91b490c.js";import{E as Wt}from"./ExclamationCircleFilled-7836cda2.js";import{L as Ht}from"./compact-item-5948db7d.js";const Ve=e=>typeof e=="object"&&e!=null&&e.nodeType===1,Re=(e,t)=>(!t||e!=="hidden")&&e!=="visible"&&e!=="clip",ye=(e,t)=>{if(e.clientHeight<e.scrollHeight||e.clientWidth<e.scrollWidth){const r=getComputedStyle(e,null);return Re(r.overflowY,t)||Re(r.overflowX,t)||(n=>{const o=(a=>{if(!a.ownerDocument||!a.ownerDocument.defaultView)return null;try{return a.ownerDocument.defaultView.frameElement}catch{return null}})(n);return!!o&&(o.clientHeight<n.scrollHeight||o.clientWidth<n.scrollWidth)})(e)}return!1},de=(e,t,r,n,o,a,i,s)=>a<e&&i>t||a>e&&i<t?0:a<=e&&s<=r||i>=t&&s>=r?a-e-n:i>t&&s<r||a<e&&s>r?i-t+o:0,At=e=>{const t=e.parentElement;return t??(e.getRootNode().host||null)},Le=(e,t)=>{var r,n,o,a;if(typeof document>"u")return[];const{scrollMode:i,block:s,inline:d,boundary:u,skipOverflowHiddenElements:p}=t,g=typeof u=="function"?u:j=>j!==u;if(!Ve(e))throw new TypeError("Invalid target");const O=document.scrollingElement||document.documentElement,x=[];let y=e;for(;Ve(y)&&g(y);){if(y=At(y),y===O){x.push(y);break}y!=null&&y===document.body&&ye(y)&&!ye(document.documentElement)||y!=null&&ye(y,p)&&x.push(y)}const v=(n=(r=window.visualViewport)==null?void 0:r.width)!=null?n:innerWidth,I=(a=(o=window.visualViewport)==null?void 0:o.height)!=null?a:innerHeight,{scrollX:S,scrollY:c}=window,{height:m,width:h,top:b,right:w,bottom:P,left:M}=e.getBoundingClientRect(),{top:W,right:L,bottom:H,left:D}=(j=>{const f=window.getComputedStyle(j);return{top:parseFloat(f.scrollMarginTop)||0,right:parseFloat(f.scrollMarginRight)||0,bottom:parseFloat(f.scrollMarginBottom)||0,left:parseFloat(f.scrollMarginLeft)||0}})(e);let _=s==="start"||s==="nearest"?b-W:s==="end"?P+H:b+m/2-W+H,$=d==="center"?M+h/2-D+L:d==="end"?w+L:M-D;const V=[];for(let j=0;j<x.length;j++){const f=x[j],{height:B,width:Z,top:ee,right:q,bottom:k,left:te}=f.getBoundingClientRect();if(i==="if-needed"&&b>=0&&M>=0&&P<=I&&w<=v&&b>=ee&&P<=k&&M>=te&&w<=q)return V;const X=getComputedStyle(f),A=parseInt(X.borderLeftWidth,10),C=parseInt(X.borderTopWidth,10),F=parseInt(X.borderRightWidth,10),E=parseInt(X.borderBottomWidth,10);let R=0,T=0;const G="offsetWidth"in f?f.offsetWidth-f.clientWidth-A-F:0,K="offsetHeight"in f?f.offsetHeight-f.clientHeight-C-E:0,Y="offsetWidth"in f?f.offsetWidth===0?0:Z/f.offsetWidth:0,N="offsetHeight"in f?f.offsetHeight===0?0:B/f.offsetHeight:0;if(O===f)R=s==="start"?_:s==="end"?_-I:s==="nearest"?de(c,c+I,I,C,E,c+_,c+_+m,m):_-I/2,T=d==="start"?$:d==="center"?$-v/2:d==="end"?$-v:de(S,S+v,v,A,F,S+$,S+$+h,h),R=Math.max(0,R+c),T=Math.max(0,T+S);else{R=s==="start"?_-ee-C:s==="end"?_-k+E+K:s==="nearest"?de(ee,k,B,C,E+K,_,_+m,m):_-(ee+B/2)+K/2,T=d==="start"?$-te-A:d==="center"?$-(te+Z/2)+G/2:d==="end"?$-q+F+G:de(te,q,Z,A,F+G,$,$+h,h);const{scrollLeft:ne,scrollTop:se}=f;R=N===0?0:Math.max(0,Math.min(se+R/N,f.scrollHeight-B/N+K)),T=Y===0?0:Math.max(0,Math.min(ne+T/Y,f.scrollWidth-Z/Y+G)),_+=se-R,$+=ne-T}V.push({el:f,top:R,left:T})}return V},zt=e=>e===!1?{block:"end",inline:"nearest"}:(t=>t===Object(t)&&Object.keys(t).length!==0)(e)?e:{block:"start",inline:"nearest"};function Dt(e,t){if(!e.isConnected||!(o=>{let a=o;for(;a&&a.parentNode;){if(a.parentNode===document)return!0;a=a.parentNode instanceof ShadowRoot?a.parentNode.host:a.parentNode}return!1})(e))return;const r=(o=>{const a=window.getComputedStyle(o);return{top:parseFloat(a.scrollMarginTop)||0,right:parseFloat(a.scrollMarginRight)||0,bottom:parseFloat(a.scrollMarginBottom)||0,left:parseFloat(a.scrollMarginLeft)||0}})(e);if((o=>typeof o=="object"&&typeof o.behavior=="function")(t))return t.behavior(Le(e,t));const n=typeof t=="boolean"||t==null?void 0:t.behavior;for(const{el:o,top:a,left:i}of Le(e,zt(t))){const s=a-r.top+r.bottom,d=i-r.left+r.right;o.scroll({top:s,left:d,behavior:n})}}function me(e){const[t,r]=l.useState(e);return l.useEffect(()=>{const n=setTimeout(()=>{r(e)},e.length?0:10);return()=>{clearTimeout(n)}},[e]),t}const Bt=e=>{const{componentCls:t}=e,r=`${t}-show-help`,n=`${t}-show-help-item`;return{[r]:{transition:`opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`,"&-appear, &-enter":{opacity:0,"&-active":{opacity:1}},"&-leave":{opacity:1,"&-active":{opacity:0}},[n]:{overflow:"hidden",transition:`height ${e.motionDurationSlow} ${e.motionEaseInOut},
                     opacity ${e.motionDurationSlow} ${e.motionEaseInOut},
                     transform ${e.motionDurationSlow} ${e.motionEaseInOut} !important`,[`&${n}-appear, &${n}-enter`]:{transform:"translateY(-5px)",opacity:0,"&-active":{transform:"translateY(0)",opacity:1}},[`&${n}-leave-active`]:{transform:"translateY(-5px)"}}}}},kt=Bt,Xt=e=>({legend:{display:"block",width:"100%",marginBottom:e.marginLG,padding:0,color:e.colorTextDescription,fontSize:e.fontSizeLG,lineHeight:"inherit",border:0,borderBottom:`${ae(e.lineWidth)} ${e.lineType} ${e.colorBorder}`},'input[type="search"]':{boxSizing:"border-box"},'input[type="radio"], input[type="checkbox"]':{lineHeight:"normal"},'input[type="file"]':{display:"block"},'input[type="range"]':{display:"block",width:"100%"},"select[multiple], select[size]":{height:"auto"},"input[type='file']:focus,\n  input[type='radio']:focus,\n  input[type='checkbox']:focus":{outline:0,boxShadow:`0 0 0 ${ae(e.controlOutlineWidth)} ${e.controlOutline}`},output:{display:"block",paddingTop:15,color:e.colorText,fontSize:e.fontSize,lineHeight:e.lineHeight}}),qe=(e,t)=>{const{formItemCls:r}=e;return{[r]:{[`${r}-label > label`]:{height:t},[`${r}-control-input`]:{minHeight:t}}}},Gt=e=>{const{componentCls:t}=e;return{[e.componentCls]:Object.assign(Object.assign(Object.assign({},ze(e)),Xt(e)),{[`${t}-text`]:{display:"inline-block",paddingInlineEnd:e.paddingSM},"&-small":Object.assign({},qe(e,e.controlHeightSM)),"&-large":Object.assign({},qe(e,e.controlHeightLG))})}},Kt=e=>{const{formItemCls:t,iconCls:r,componentCls:n,rootPrefixCls:o,labelRequiredMarkColor:a,labelColor:i,labelFontSize:s,labelHeight:d,labelColonMarginInlineStart:u,labelColonMarginInlineEnd:p,itemMarginBottom:g}=e;return{[t]:Object.assign(Object.assign({},ze(e)),{marginBottom:g,verticalAlign:"top","&-with-help":{transition:"none"},[`&-hidden,
        &-hidden.${o}-row`]:{display:"none"},"&-has-warning":{[`${t}-split`]:{color:e.colorError}},"&-has-error":{[`${t}-split`]:{color:e.colorWarning}},[`${t}-label`]:{flexGrow:0,overflow:"hidden",whiteSpace:"nowrap",textAlign:"end",verticalAlign:"middle","&-left":{textAlign:"start"},"&-wrap":{overflow:"unset",lineHeight:e.lineHeight,whiteSpace:"unset"},"> label":{position:"relative",display:"inline-flex",alignItems:"center",maxWidth:"100%",height:d,color:i,fontSize:s,[`> ${r}`]:{fontSize:e.fontSize,verticalAlign:"top"},[`&${t}-required:not(${t}-required-mark-optional)::before`]:{display:"inline-block",marginInlineEnd:e.marginXXS,color:a,fontSize:e.fontSize,fontFamily:"SimSun, sans-serif",lineHeight:1,content:'"*"',[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-optional`]:{display:"inline-block",marginInlineStart:e.marginXXS,color:e.colorTextDescription,[`${n}-hide-required-mark &`]:{display:"none"}},[`${t}-tooltip`]:{color:e.colorTextDescription,cursor:"help",writingMode:"horizontal-tb",marginInlineStart:e.marginXXS},"&::after":{content:'":"',position:"relative",marginBlock:0,marginInlineStart:u,marginInlineEnd:p},[`&${t}-no-colon::after`]:{content:'"\\a0"'}}},[`${t}-control`]:{"--ant-display":"flex",flexDirection:"column",flexGrow:1,[`&:first-child:not([class^="'${o}-col-'"]):not([class*="' ${o}-col-'"])`]:{width:"100%"},"&-input":{position:"relative",display:"flex",alignItems:"center",minHeight:e.controlHeight,"&-content":{flex:"auto",maxWidth:"100%"}}},[t]:{"&-explain, &-extra":{clear:"both",color:e.colorTextDescription,fontSize:e.fontSize,lineHeight:e.lineHeight},"&-explain-connected":{width:"100%"},"&-extra":{minHeight:e.controlHeightSM,transition:`color ${e.motionDurationMid} ${e.motionEaseOut}`},"&-explain":{"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning}}},[`&-with-help ${t}-explain`]:{height:"auto",opacity:1},[`${t}-feedback-icon`]:{fontSize:e.fontSize,textAlign:"center",visibility:"visible",animationName:ke,animationDuration:e.motionDurationMid,animationTimingFunction:e.motionEaseOutBack,pointerEvents:"none","&-success":{color:e.colorSuccess},"&-error":{color:e.colorError},"&-warning":{color:e.colorWarning},"&-validating":{color:e.colorPrimary}}})}},Yt=e=>{const{componentCls:t,formItemCls:r}=e;return{[`${t}-horizontal`]:{[`${r}-label`]:{flexGrow:0},[`${r}-control`]:{flex:"1 1 0",minWidth:0},[`${r}-label[class$='-24'], ${r}-label[class*='-24 ']`]:{[`& + ${r}-control`]:{minWidth:"unset"}}}}},Ut=e=>{const{componentCls:t,formItemCls:r}=e;return{[`${t}-inline`]:{display:"flex",flexWrap:"wrap",[r]:{flex:"none",marginInlineEnd:e.margin,marginBottom:0,"&-row":{flexWrap:"nowrap"},[`> ${r}-label,
        > ${r}-control`]:{display:"inline-block",verticalAlign:"top"},[`> ${r}-label`]:{flex:"none"},[`${t}-text`]:{display:"inline-block"},[`${r}-has-feedback`]:{display:"inline-block"}}}}},le=e=>({padding:e.verticalLabelPadding,margin:e.verticalLabelMargin,whiteSpace:"initial",textAlign:"start","> label":{margin:0,"&::after":{visibility:"hidden"}}}),Qt=e=>{const{componentCls:t,formItemCls:r,rootPrefixCls:n}=e;return{[`${r} ${r}-label`]:le(e),[`${t}:not(${t}-inline)`]:{[r]:{flexWrap:"wrap",[`${r}-label, ${r}-control`]:{[`&:not([class*=" ${n}-col-xs"])`]:{flex:"0 0 100%",maxWidth:"100%"}}}}}},Jt=e=>{const{componentCls:t,formItemCls:r,rootPrefixCls:n}=e;return{[`${t}-vertical`]:{[r]:{"&-row":{flexDirection:"column"},"&-label > label":{height:"auto"},[`${t}-item-control`]:{width:"100%"}}},[`${t}-vertical ${r}-label,
      .${n}-col-24${r}-label,
      .${n}-col-xl-24${r}-label`]:le(e),[`@media (max-width: ${ae(e.screenXSMax)})`]:[Qt(e),{[t]:{[`.${n}-col-xs-24${r}-label`]:le(e)}}],[`@media (max-width: ${ae(e.screenSMMax)})`]:{[t]:{[`.${n}-col-sm-24${r}-label`]:le(e)}},[`@media (max-width: ${ae(e.screenMDMax)})`]:{[t]:{[`.${n}-col-md-24${r}-label`]:le(e)}},[`@media (max-width: ${ae(e.screenLGMax)})`]:{[t]:{[`.${n}-col-lg-24${r}-label`]:le(e)}}}},Zt=e=>({labelRequiredMarkColor:e.colorError,labelColor:e.colorTextHeading,labelFontSize:e.fontSize,labelHeight:e.controlHeight,labelColonMarginInlineStart:e.marginXXS/2,labelColonMarginInlineEnd:e.marginXS,itemMarginBottom:e.marginLG,verticalLabelPadding:`0 0 ${e.paddingXS}px`,verticalLabelMargin:0}),Ge=(e,t)=>at(e,{formItemCls:`${e.componentCls}-item`,rootPrefixCls:t}),Ee=lt("Form",(e,t)=>{let{rootPrefixCls:r}=t;const n=Ge(e,r);return[Gt(n),Kt(n),kt(n),Yt(n),Ut(n),Jt(n),_t(n),ke]},Zt,{order:-1e3}),Te=[];function Ce(e,t,r){let n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return{key:typeof e=="string"?e:`${t}-${n}`,error:e,errorStatus:r}}const er=e=>{let{help:t,helpStatus:r,errors:n=Te,warnings:o=Te,className:a,fieldId:i,onVisibleChanged:s}=e;const{prefixCls:d}=l.useContext(Ie),u=`${d}-item-explain`,p=Fe(d),[g,O,x]=Ee(d,p),y=l.useMemo(()=>je(d),[d]),v=me(n),I=me(o),S=l.useMemo(()=>t!=null?[Ce(t,"help",r)]:[].concat(z(v.map((m,h)=>Ce(m,"error","error",h))),z(I.map((m,h)=>Ce(m,"warning","warning",h)))),[t,r,v,I]),c={};return i&&(c.id=`${i}_help`),g(l.createElement(it,{motionDeadline:y.motionDeadline,motionName:`${d}-show-help`,visible:!!S.length,onVisibleChanged:s},m=>{const{className:h,style:b}=m;return l.createElement("div",Object.assign({},c,{className:U(u,h,x,p,a,O),style:b,role:"alert"}),l.createElement(st,Object.assign({keys:S},je(d),{motionName:`${d}-show-help-item`,component:!1}),w=>{const{key:P,error:M,errorStatus:W,className:L,style:H}=w;return l.createElement("div",{key:P,className:U(L,{[`${u}-${W}`]:W}),style:H},M)}))}))},Ke=er,tr=["parentNode"],rr="form_item";function ie(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function Ye(e,t){if(!e.length)return;const r=e.join("_");return t?`${t}_${r}`:tr.includes(r)?`${rr}_${r}`:r}function Ue(e,t,r,n,o,a){let i=n;return a!==void 0?i=a:r.validating?i="validating":e.length?i="error":t.length?i="warning":(r.touched||o&&r.validated)&&(i="success"),i}function We(e){return ie(e).join("_")}function Qe(e){const[t]=xt(),r=l.useRef({}),n=l.useMemo(()=>e??Object.assign(Object.assign({},t),{__INTERNAL__:{itemRef:o=>a=>{const i=We(o);a?r.current[i]=a:delete r.current[i]}},scrollToField:function(o){let a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=ie(o),s=Ye(i,n.__INTERNAL__.name),d=s?document.getElementById(s):null;d&&Dt(d,Object.assign({scrollMode:"if-needed",block:"nearest"},a))},getFieldInstance:o=>{const a=We(o);return r.current[a]}}),[e,t]);return[n]}var nr=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const or=(e,t)=>{const r=l.useContext(ct),{getPrefixCls:n,direction:o,form:a}=l.useContext($e),{prefixCls:i,className:s,rootClassName:d,size:u,disabled:p=r,form:g,colon:O,labelAlign:x,labelWrap:y,labelCol:v,wrapperCol:I,hideRequiredMark:S,layout:c="horizontal",scrollToFirstError:m,requiredMark:h,onFinishFailed:b,name:w,style:P,feedbackIcons:M,variant:W}=e,L=nr(e,["prefixCls","className","rootClassName","size","disabled","form","colon","labelAlign","labelWrap","labelCol","wrapperCol","hideRequiredMark","layout","scrollToFirstError","requiredMark","onFinishFailed","name","style","feedbackIcons","variant"]),H=Nt(u),D=l.useContext(dt),_=l.useMemo(()=>h!==void 0?h:S?!1:a&&a.requiredMark!==void 0?a.requiredMark:!0,[S,h,a]),$=O??(a==null?void 0:a.colon),V=n("form",i),j=Fe(V),[f,B,Z]=Ee(V,j),ee=U(V,`${V}-${c}`,{[`${V}-hide-required-mark`]:_===!1,[`${V}-rtl`]:o==="rtl",[`${V}-${H}`]:H},Z,j,B,a==null?void 0:a.className,s,d),[q]=Qe(g),{__INTERNAL__:k}=q;k.name=w;const te=l.useMemo(()=>({name:w,labelAlign:x,labelCol:v,labelWrap:y,wrapperCol:I,vertical:c==="vertical",colon:$,requiredMark:_,itemRef:k.itemRef,form:q,feedbackIcons:M}),[w,x,v,I,c,$,_,q,M]);l.useImperativeHandle(t,()=>q);const X=(C,F)=>{if(C){let E={block:"nearest"};typeof C=="object"&&(E=C),q.scrollToField(F,E)}},A=C=>{if(b==null||b(C),C.errorFields.length){const F=C.errorFields[0].name;if(m!==void 0){X(m,F);return}a&&a.scrollToFirstError!==void 0&&X(a.scrollToFirstError,F)}};return f(l.createElement(vt.Provider,{value:W},l.createElement(ut,{disabled:p},l.createElement(mt.Provider,{value:H},l.createElement(De,{validateMessages:D},l.createElement(Q.Provider,{value:te},l.createElement(St,Object.assign({id:w},L,{name:w,onFinishFailed:A,form:q,style:Object.assign(Object.assign({},a==null?void 0:a.style),P),className:ee}))))))))},lr=l.forwardRef(or),ar=lr;function ir(e){if(typeof e=="function")return e;const t=jt(e);return t.length<=1?t[0]:t}const Je=()=>{const{status:e,errors:t=[],warnings:r=[]}=l.useContext(ue);return{status:e,errors:t,warnings:r}};Je.Context=ue;const sr=Je;function cr(e){const[t,r]=l.useState(e),n=l.useRef(null),o=l.useRef([]),a=l.useRef(!1);l.useEffect(()=>(a.current=!1,()=>{a.current=!0,Pe.cancel(n.current),n.current=null}),[]);function i(s){a.current||(n.current===null&&(o.current=[],n.current=Pe(()=>{n.current=null,r(d=>{let u=d;return o.current.forEach(p=>{u=p(u)}),u})})),o.current.push(s))}return[t,i]}function dr(){const{itemRef:e}=l.useContext(Q),t=l.useRef({});function r(n,o){const a=o&&typeof o=="object"&&o.ref,i=n.join("_");return(t.current.name!==i||t.current.originRef!==a)&&(t.current.name=i,t.current.originRef=a,t.current.ref=ft(e(n),a)),t.current.ref}return r}const ur=e=>{const{formItemCls:t}=e;return{"@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none)":{[`${t}-control`]:{display:"flex"}}}},mr=pt(["Form","item-item"],(e,t)=>{let{rootPrefixCls:r}=t;const n=Ge(e,r);return[ur(n)]}),fr=e=>{const{prefixCls:t,status:r,wrapperCol:n,children:o,errors:a,warnings:i,_internalItemRender:s,extra:d,help:u,fieldId:p,marginBottom:g,onErrorVisibleChanged:O}=e,x=`${t}-item`,y=l.useContext(Q),v=n||y.wrapperCol||{},I=U(`${x}-control`,v.className),S=l.useMemo(()=>Object.assign({},y),[y]);delete S.labelCol,delete S.wrapperCol;const c=l.createElement("div",{className:`${x}-control-input`},l.createElement("div",{className:`${x}-control-input-content`},o)),m=l.useMemo(()=>({prefixCls:t,status:r}),[t,r]),h=g!==null||a.length||i.length?l.createElement("div",{style:{display:"flex",flexWrap:"nowrap"}},l.createElement(Ie.Provider,{value:m},l.createElement(Ke,{fieldId:p,errors:a,warnings:i,help:u,helpStatus:r,className:`${x}-explain-connected`,onVisibleChanged:O})),!!g&&l.createElement("div",{style:{width:0,height:g}})):null,b={};p&&(b.id=`${p}_extra`);const w=d?l.createElement("div",Object.assign({},b,{className:`${x}-extra`}),d):null,P=s&&s.mark==="pro_table_render"&&s.render?s.render(e,{input:c,errorList:h,extra:w}):l.createElement(l.Fragment,null,c,h,w);return l.createElement(Q.Provider,{value:S},l.createElement(pe,Object.assign({},v,{className:I}),P),l.createElement(mr,{prefixCls:t}))},pr=fr;var gr=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function hr(e){return e?typeof e=="object"&&!l.isValidElement(e)?e:{title:e}:null}const br=e=>{let{prefixCls:t,label:r,htmlFor:n,labelCol:o,labelAlign:a,colon:i,required:s,requiredMark:d,tooltip:u}=e;var p;const[g]=Lt("Form"),{vertical:O,labelAlign:x,labelCol:y,labelWrap:v,colon:I}=l.useContext(Q);if(!r)return null;const S=o||y||{},c=a||x,m=`${t}-item-label`,h=U(m,c==="left"&&`${m}-left`,S.className,{[`${m}-wrap`]:!!v});let b=r;const w=i===!0||I!==!1&&i!==!1;w&&!O&&typeof r=="string"&&r.trim()!==""&&(b=r.replace(/[:|：]\s*$/,""));const M=hr(u);if(M){const{icon:D=l.createElement(tt,null)}=M,_=gr(M,["icon"]),$=l.createElement(Ot,Object.assign({},_),l.cloneElement(D,{className:`${t}-item-tooltip`,title:"",onClick:V=>{V.preventDefault()},tabIndex:null}));b=l.createElement(l.Fragment,null,b,$)}const W=d==="optional",L=typeof d=="function";L?b=d(b,{required:!!s}):W&&!s&&(b=l.createElement(l.Fragment,null,b,l.createElement("span",{className:`${t}-item-optional`,title:""},(g==null?void 0:g.optional)||((p=gt.Form)===null||p===void 0?void 0:p.optional))));const H=U({[`${t}-item-required`]:s,[`${t}-item-required-mark-optional`]:W||L,[`${t}-item-no-colon`]:!w});return l.createElement(pe,Object.assign({},S,{className:h}),l.createElement("label",{htmlFor:n,className:H,title:typeof r=="string"?r:""},b))},yr=br,Cr={success:qt,warning:Wt,error:Tt,validating:Ht};function Ze(e){let{children:t,errors:r,warnings:n,hasFeedback:o,validateStatus:a,prefixCls:i,meta:s,noStyle:d}=e;const u=`${i}-item`,{feedbackIcons:p}=l.useContext(Q),g=Ue(r,n,s,null,!!o,a),{isFormItemInput:O,status:x,hasFeedback:y,feedbackIcon:v}=l.useContext(ue),I=l.useMemo(()=>{var S;let c;if(o){const h=o!==!0&&o.icons||p,b=g&&((S=h==null?void 0:h({status:g,errors:r,warnings:n}))===null||S===void 0?void 0:S[g]),w=g&&Cr[g];c=b!==!1&&w?l.createElement("span",{className:U(`${u}-feedback-icon`,`${u}-feedback-icon-${g}`)},b||l.createElement(w,null)):null}const m={status:g||"",errors:r,warnings:n,hasFeedback:!!o,feedbackIcon:c,isFormItemInput:!0};return d&&(m.status=(g??x)||"",m.isFormItemInput=O,m.hasFeedback=!!(o??y),m.feedbackIcon=o!==void 0?m.feedbackIcon:v),m},[g,o,d,O,x]);return l.createElement(ue.Provider,{value:I},t)}var xr=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function vr(e){const{prefixCls:t,className:r,rootClassName:n,style:o,help:a,errors:i,warnings:s,validateStatus:d,meta:u,hasFeedback:p,hidden:g,children:O,fieldId:x,required:y,isRequired:v,onSubItemMetaChange:I}=e,S=xr(e,["prefixCls","className","rootClassName","style","help","errors","warnings","validateStatus","meta","hasFeedback","hidden","children","fieldId","required","isRequired","onSubItemMetaChange"]),c=`${t}-item`,{requiredMark:m}=l.useContext(Q),h=l.useRef(null),b=me(i),w=me(s),P=a!=null,M=!!(P||i.length||s.length),W=!!h.current&&Vt(h.current),[L,H]=l.useState(null);ht(()=>{if(M&&h.current){const j=getComputedStyle(h.current);H(parseInt(j.marginBottom,10))}},[M,W]);const D=j=>{j||H(null)},$=function(){let j=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;const f=j?b:u.errors,B=j?w:u.warnings;return Ue(f,B,u,"",!!p,d)}(),V=U(c,r,n,{[`${c}-with-help`]:P||b.length||w.length,[`${c}-has-feedback`]:$&&p,[`${c}-has-success`]:$==="success",[`${c}-has-warning`]:$==="warning",[`${c}-has-error`]:$==="error",[`${c}-is-validating`]:$==="validating",[`${c}-hidden`]:g});return l.createElement("div",{className:V,style:o,ref:h},l.createElement(Xe,Object.assign({className:`${c}-row`},Rt(S,["_internalItemRender","colon","dependencies","extra","fieldKey","getValueFromEvent","getValueProps","htmlFor","id","initialValue","isListField","label","labelAlign","labelCol","labelWrap","messageVariables","name","normalize","noStyle","preserve","requiredMark","rules","shouldUpdate","trigger","tooltip","validateFirst","validateTrigger","valuePropName","wrapperCol","validateDebounce"])),l.createElement(yr,Object.assign({htmlFor:x},e,{requiredMark:m,required:y??v,prefixCls:t})),l.createElement(pr,Object.assign({},e,u,{errors:b,warnings:w,prefixCls:t,status:$,help:a,marginBottom:L,onErrorVisibleChanged:D}),l.createElement(Be.Provider,{value:I},l.createElement(Ze,{prefixCls:t,meta:u,errors:u.errors,warnings:u.warnings,hasFeedback:p,validateStatus:$},O)))),!!L&&l.createElement("div",{className:`${c}-margin-offset`,style:{marginBottom:-L}}))}const Sr="__SPLIT__";function wr(e,t){const r=Object.keys(e),n=Object.keys(t);return r.length===n.length&&r.every(o=>{const a=e[o],i=t[o];return a===i||typeof a=="function"||typeof i=="function"})}const $r=l.memo(e=>{let{children:t}=e;return t},(e,t)=>wr(e.control,t.control)&&e.update===t.update&&e.childProps.length===t.childProps.length&&e.childProps.every((r,n)=>r===t.childProps[n]));function He(){return{errors:[],warnings:[],touched:!1,validating:!1,name:[],validated:!1}}function Ir(e){const{name:t,noStyle:r,className:n,dependencies:o,prefixCls:a,shouldUpdate:i,rules:s,children:d,required:u,label:p,messageVariables:g,trigger:O="onChange",validateTrigger:x,hidden:y,help:v}=e,{getPrefixCls:I}=l.useContext($e),{name:S}=l.useContext(Q),c=ir(d),m=typeof c=="function",h=l.useContext(Be),{validateTrigger:b}=l.useContext(wt),w=x!==void 0?x:b,P=t!=null,M=I("form",a),W=Fe(M),[L,H,D]=Ee(M,W);bt();const _=l.useContext($t),$=l.useRef(),[V,j]=cr({}),[f,B]=yt(()=>He()),Z=C=>{const F=_==null?void 0:_.getKey(C.name);if(B(C.destroy?He():C,!0),r&&v!==!1&&h){let E=C.name;if(C.destroy)E=$.current||E;else if(F!==void 0){const[R,T]=F;E=[R].concat(z(T)),$.current=E}h(C,E)}},ee=(C,F)=>{j(E=>{const R=Object.assign({},E),G=[].concat(z(C.name.slice(0,-1)),z(F)).join(Sr);return C.destroy?delete R[G]:R[G]=C,R})},[q,k]=l.useMemo(()=>{const C=z(f.errors),F=z(f.warnings);return Object.values(V).forEach(E=>{C.push.apply(C,z(E.errors||[])),F.push.apply(F,z(E.warnings||[]))}),[C,F]},[V,f.errors,f.warnings]),te=dr();function X(C,F,E){return r&&!y?l.createElement(Ze,{prefixCls:M,hasFeedback:e.hasFeedback,validateStatus:e.validateStatus,meta:f,errors:q,warnings:k,noStyle:!0},C):l.createElement(vr,Object.assign({key:"row"},e,{className:U(n,D,W,H),prefixCls:M,fieldId:F,isRequired:E,errors:q,warnings:k,meta:f,onSubItemMetaChange:ee}),C)}if(!P&&!m&&!o)return L(X(c));let A={};return typeof p=="string"?A.label=p:t&&(A.label=String(t)),g&&(A=Object.assign(Object.assign({},A),g)),L(l.createElement(It,Object.assign({},e,{messageVariables:A,trigger:O,validateTrigger:w,onMetaChange:Z}),(C,F,E)=>{const R=ie(t).length&&F?F.name:[],T=Ye(R,S),G=u!==void 0?u:!!(s&&s.some(N=>{if(N&&typeof N=="object"&&N.required&&!N.warningOnly)return!0;if(typeof N=="function"){const ne=N(E);return ne&&ne.required&&!ne.warningOnly}return!1})),K=Object.assign({},C);let Y=null;if(Array.isArray(c)&&P)Y=c;else if(!(m&&(!(i||o)||P))){if(!(o&&!m&&!P))if(Mt(c)){const N=Object.assign(Object.assign({},c.props),K);if(N.id||(N.id=T),v||q.length>0||k.length>0||e.extra){const oe=[];(v||q.length>0)&&oe.push(`${T}_help`),e.extra&&oe.push(`${T}_extra`),N["aria-describedby"]=oe.join(" ")}q.length>0&&(N["aria-invalid"]="true"),G&&(N["aria-required"]="true"),Ct(c)&&(N.ref=te(R,c)),new Set([].concat(z(ie(O)),z(ie(w)))).forEach(oe=>{N[oe]=function(){for(var Oe,_e,ge,Ne,he,Me=arguments.length,be=new Array(Me),ce=0;ce<Me;ce++)be[ce]=arguments[ce];(ge=K[oe])===null||ge===void 0||(Oe=ge).call.apply(Oe,[K].concat(be)),(he=(Ne=c.props)[oe])===null||he===void 0||(_e=he).call.apply(_e,[Ne].concat(be))}});const se=[N["aria-required"],N["aria-invalid"],N["aria-describedby"]];Y=l.createElement($r,{control:K,update:c,childProps:se},Pt(c,N))}else m&&(i||o)&&!P?Y=c(E):Y=c}return X(Y,T,G)}))}const et=Ir;et.useStatus=sr;const Fr=et;var Er=globalThis&&globalThis.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};const Or=e=>{var{prefixCls:t,children:r}=e,n=Er(e,["prefixCls","children"]);const{getPrefixCls:o}=l.useContext($e),a=o("form",t),i=l.useMemo(()=>({prefixCls:a,status:"error"}),[a]);return l.createElement(Ft,Object.assign({},n),(s,d,u)=>l.createElement(Ie.Provider,{value:i},r(s.map(p=>Object.assign(Object.assign({},p),{fieldKey:p.key})),d,{errors:u.errors,warnings:u.warnings})))},_r=Or;function Nr(){const{form:e}=l.useContext(Q);return e}const J=ar;J.Item=Fr;J.List=_r;J.ErrorList=Ke;J.useForm=Qe;J.useFormInstance=Nr;J.useWatch=Et;J.Provider=De;J.create=()=>{};const Mr=J,xe=fe(Xe)`
  padding-bottom: 0.25rem;
  padding-top: 0.25rem;
`,ve=fe(pe)`
  margin-left: 0.5rem;
`,Se=fe.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`,we=fe(Mr.Item)`
  margin-bottom: 0;
`,Zr=ot`
  --tw-bg-opacity: 1 !important;
  background-color: rgba(219, 234, 254, var(--tw-bg-opacity)) !important;

  .ant-input {
    background-color: rgba(219, 234, 254, var(--tw-bg-opacity)) !important;
  }
`;try{xe.displayName="StyledRow",xe.__docgenInfo={description:"",displayName:"StyledRow",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{ve.displayName="StyledCol",ve.__docgenInfo={description:"",displayName:"StyledCol",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{Se.displayName="LabelContainer",Se.__docgenInfo={description:"",displayName:"LabelContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{we.displayName="FormItemStyled",we.__docgenInfo={description:"",displayName:"FormItemStyled",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}function Ae(e){const{name:t,labelOpts:r,children:n,valuePropName:o,required:a=!1,validatorOpts:i,locale:s}=e,{t:d}=nt(s);let u;if(i&&a){const{type:c,validator:m}=i;u=[{required:!0,message:d("fillRequiredField"),type:c,validator:m?(h,b)=>{m(b)}:void 0}]}function p(){return re.jsx(we,{name:t,valuePropName:o,rules:u,children:n})}if(!r)return p();const{tooltip:g,layout:O="horizontal",align:x="left",text:y}=r;function v(){return re.jsx(rt,{text:`${y} :`,tooltip:g,align:x})}function I(){return re.jsxs(xe,{align:"middle",children:[re.jsx(ve,{flex:"7rem",children:re.jsx(Se,{children:v()})}),re.jsx(pe,{flex:"auto",children:p()})]})}return O==="horizontal"?I():(()=>re.jsxs(re.Fragment,{children:[v(),p()]}))()}try{Ae.displayName="Field",Ae.__docgenInfo={description:"",displayName:"Field",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},labelOpts:{defaultValue:null,description:"",name:"labelOpts",required:!1,type:{name:"LabelOptions"}},validatorOpts:{defaultValue:null,description:"",name:"validatorOpts",required:!1,type:{name:"ValidatorOptions"}},valuePropName:{defaultValue:null,description:"",name:"valuePropName",required:!1,type:{name:"string"}}}}}catch{}export{Mr as A,Ae as F,Zr as R,Qe as u};
