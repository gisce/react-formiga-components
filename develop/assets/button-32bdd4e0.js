import{r as s,a as c}from"./index-8ee6c85d.js";import{C as so,u as wo,e as $,t as Po,g as No,a as x,z as Lo,m as z,A as Wo,D as Ro,x as Go}from"./index-4e0f86e8.js";import{o as Do}from"./omit-c7331b12.js";import{W as Ao}from"./index-b1f5ed01.js";import{a as Mo,b as _o}from"./Compact-f5d517ab.js";import{c as Fo,a as Vo}from"./reactNode-b58523ea.js";import{L as qo,g as Xo}from"./compact-item-0cc18453.js";var Uo=globalThis&&globalThis.__rest||function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]]);return r};const co=s.createContext(void 0),Jo=o=>{const{getPrefixCls:e,direction:r}=s.useContext(so),{prefixCls:t,size:n,className:i}=o,l=Uo(o,["prefixCls","size","className"]),d=e("btn-group",t),[,,p]=wo();let u="";switch(n){case"large":u="lg";break;case"small":u="sm";break}const y=$(d,{[`${d}-${u}`]:u,[`${d}-rtl`]:r==="rtl"},i,p);return s.createElement(co.Provider,{value:n},s.createElement("div",Object.assign({},l,{className:y})))},Ko=Jo,no=/^[\u4e00-\u9fa5]{2}$/,G=no.test.bind(no);function Pe(o){return o==="danger"?{danger:!0}:{type:o}}function lo(o){return typeof o=="string"}function L(o){return o==="text"||o==="link"}function Qo(o,e){if(o==null)return;const r=e?" ":"";return typeof o!="string"&&typeof o!="number"&&lo(o.type)&&G(o.props.children)?Fo(o,{children:o.props.children.split("").join(r)}):lo(o)?G(o)?c.createElement("span",null,o.split("").join(r)):c.createElement("span",null,o):Vo(o)?c.createElement("span",null,o):o}function Yo(o,e){let r=!1;const t=[];return c.Children.forEach(o,n=>{const i=typeof n,l=i==="string"||i==="number";if(r&&l){const d=t.length-1,p=t[d];t[d]=`${p}${n}`}else t.push(n);r=l}),c.Children.map(t,n=>Qo(n,e))}const Zo=s.forwardRef((o,e)=>{const{className:r,style:t,children:n,prefixCls:i}=o,l=$(`${i}-icon`,r);return c.createElement("span",{ref:e,className:l,style:t},n)}),uo=Zo,io=s.forwardRef((o,e)=>{let{prefixCls:r,className:t,style:n,iconClassName:i}=o;const l=$(`${r}-loading-icon`,t);return c.createElement(uo,{prefixCls:r,className:l,style:n,ref:e},c.createElement(qo,{className:i}))}),W=()=>({width:0,opacity:0,transform:"scale(0)"}),R=o=>({width:o.scrollWidth,opacity:1,transform:"scale(1)"}),ko=o=>{const{prefixCls:e,loading:r,existIcon:t,className:n,style:i}=o,l=!!r;return t?c.createElement(io,{prefixCls:e,className:n,style:i}):c.createElement(Po,{visible:l,motionName:`${e}-loading-icon-motion`,motionLeave:l,removeOnLeave:!0,onAppearStart:W,onAppearActive:R,onEnterStart:W,onEnterActive:R,onLeaveStart:R,onLeaveActive:W},(d,p)=>{let{className:u,style:y}=d;return c.createElement(io,{prefixCls:e,className:n,style:Object.assign(Object.assign({},i),y),ref:p,iconClassName:u})})},oe=ko,ao=(o,e)=>({[`> span, > ${o}`]:{"&:not(:last-child)":{[`&, & > ${o}`]:{"&:not(:disabled)":{borderInlineEndColor:e}}},"&:not(:first-child)":{[`&, & > ${o}`]:{"&:not(:disabled)":{borderInlineStartColor:e}}}}}),ee=o=>{const{componentCls:e,fontSize:r,lineWidth:t,groupBorderColor:n,colorErrorHover:i}=o;return{[`${e}-group`]:[{position:"relative",display:"inline-flex",[`> span, > ${e}`]:{"&:not(:last-child)":{[`&, & > ${e}`]:{borderStartEndRadius:0,borderEndEndRadius:0}},"&:not(:first-child)":{marginInlineStart:o.calc(t).mul(-1).equal(),[`&, & > ${e}`]:{borderStartStartRadius:0,borderEndStartRadius:0}}},[e]:{position:"relative",zIndex:1,"&:hover,\n          &:focus,\n          &:active":{zIndex:2},"&[disabled]":{zIndex:0}},[`${e}-icon-only`]:{fontSize:r}},ao(`${e}-primary`,n),ao(`${e}-danger`,i)]}},re=ee,te=o=>{const{componentCls:e,iconCls:r,fontWeight:t}=o;return{[e]:{outline:"none",position:"relative",display:"inline-block",fontWeight:t,whiteSpace:"nowrap",textAlign:"center",backgroundImage:"none",background:"transparent",border:`${x(o.lineWidth)} ${o.lineType} transparent`,cursor:"pointer",transition:`all ${o.motionDurationMid} ${o.motionEaseInOut}`,userSelect:"none",touchAction:"manipulation",lineHeight:o.lineHeight,color:o.colorText,"&:disabled > *":{pointerEvents:"none"},"> span":{display:"inline-block"},[`${e}-icon`]:{lineHeight:0},[`> ${r} + span, > span + ${r}`]:{marginInlineStart:o.marginXS},[`&:not(${e}-icon-only) > ${e}-icon`]:{[`&${e}-loading-icon, &:not(:last-child)`]:{marginInlineEnd:o.marginXS}},"> a":{color:"currentColor"},"&:not(:disabled)":Object.assign({},Lo(o)),[`&${e}-two-chinese-chars::first-letter`]:{letterSpacing:"0.34em"},[`&${e}-two-chinese-chars > *:not(${r})`]:{marginInlineEnd:"-0.34em",letterSpacing:"0.34em"},[`&-icon-only${e}-compact-item`]:{flex:"none"}}}},f=(o,e,r)=>({[`&:not(:disabled):not(${o}-disabled)`]:{"&:hover":e,"&:active":r}}),ne=o=>({minWidth:o.controlHeight,paddingInlineStart:0,paddingInlineEnd:0,borderRadius:"50%"}),le=o=>({borderRadius:o.controlHeight,paddingInlineStart:o.calc(o.controlHeight).div(2).equal(),paddingInlineEnd:o.calc(o.controlHeight).div(2).equal()}),ie=o=>({cursor:"not-allowed",borderColor:o.borderColorDisabled,color:o.colorTextDisabled,background:o.colorBgContainerDisabled,boxShadow:"none"}),E=(o,e,r,t,n,i,l,d)=>({[`&${o}-background-ghost`]:Object.assign(Object.assign({color:r||void 0,background:e,borderColor:t||void 0,boxShadow:"none"},f(o,Object.assign({background:e},l),Object.assign({background:e},d))),{"&:disabled":{cursor:"not-allowed",color:n||void 0,borderColor:i||void 0}})}),D=o=>({[`&:disabled, &${o.componentCls}-disabled`]:Object.assign({},ie(o))}),go=o=>Object.assign({},D(o)),I=o=>({[`&:disabled, &${o.componentCls}-disabled`]:{cursor:"not-allowed",color:o.colorTextDisabled}}),mo=o=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},go(o)),{background:o.defaultBg,borderColor:o.defaultBorderColor,color:o.defaultColor,boxShadow:o.defaultShadow}),f(o.componentCls,{color:o.colorPrimaryHover,borderColor:o.colorPrimaryHover},{color:o.colorPrimaryActive,borderColor:o.colorPrimaryActive})),E(o.componentCls,o.ghostBg,o.defaultGhostColor,o.defaultGhostBorderColor,o.colorTextDisabled,o.colorBorder)),{[`&${o.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({color:o.colorError,borderColor:o.colorError},f(o.componentCls,{color:o.colorErrorHover,borderColor:o.colorErrorBorderHover},{color:o.colorErrorActive,borderColor:o.colorErrorActive})),E(o.componentCls,o.ghostBg,o.colorError,o.colorError,o.colorTextDisabled,o.colorBorder)),D(o))}),ae=o=>Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},go(o)),{color:o.primaryColor,background:o.colorPrimary,boxShadow:o.primaryShadow}),f(o.componentCls,{color:o.colorTextLightSolid,background:o.colorPrimaryHover},{color:o.colorTextLightSolid,background:o.colorPrimaryActive})),E(o.componentCls,o.ghostBg,o.colorPrimary,o.colorPrimary,o.colorTextDisabled,o.colorBorder,{color:o.colorPrimaryHover,borderColor:o.colorPrimaryHover},{color:o.colorPrimaryActive,borderColor:o.colorPrimaryActive})),{[`&${o.componentCls}-dangerous`]:Object.assign(Object.assign(Object.assign({background:o.colorError,boxShadow:o.dangerShadow,color:o.dangerColor},f(o.componentCls,{background:o.colorErrorHover},{background:o.colorErrorActive})),E(o.componentCls,o.ghostBg,o.colorError,o.colorError,o.colorTextDisabled,o.colorBorder,{color:o.colorErrorHover,borderColor:o.colorErrorHover},{color:o.colorErrorActive,borderColor:o.colorErrorActive})),D(o))}),se=o=>Object.assign(Object.assign({},mo(o)),{borderStyle:"dashed"}),ce=o=>Object.assign(Object.assign(Object.assign({color:o.colorLink},f(o.componentCls,{color:o.colorLinkHover,background:o.linkHoverBg},{color:o.colorLinkActive})),I(o)),{[`&${o.componentCls}-dangerous`]:Object.assign(Object.assign({color:o.colorError},f(o.componentCls,{color:o.colorErrorHover},{color:o.colorErrorActive})),I(o))}),de=o=>Object.assign(Object.assign(Object.assign({},f(o.componentCls,{color:o.colorText,background:o.textHoverBg},{color:o.colorText,background:o.colorBgTextActive})),I(o)),{[`&${o.componentCls}-dangerous`]:Object.assign(Object.assign({color:o.colorError},I(o)),f(o.componentCls,{color:o.colorErrorHover,background:o.colorErrorBg},{color:o.colorErrorHover,background:o.colorErrorBg}))}),ue=o=>{const{componentCls:e}=o;return{[`${e}-default`]:mo(o),[`${e}-primary`]:ae(o),[`${e}-dashed`]:se(o),[`${e}-link`]:ce(o),[`${e}-text`]:de(o),[`${e}-ghost`]:E(o.componentCls,o.ghostBg,o.colorBgContainer,o.colorBgContainer,o.colorTextDisabled,o.colorBorder)}},A=function(o){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const{componentCls:r,controlHeight:t,fontSize:n,borderRadius:i,buttonPaddingHorizontal:l,iconCls:d,buttonPaddingVertical:p}=o,u=`${r}-icon-only`;return[{[`${r}${e}`]:{fontSize:n,height:t,padding:`${x(p)} ${x(l)}`,borderRadius:i,[`&${u}`]:{width:t,paddingInlineStart:0,paddingInlineEnd:0,[`&${r}-round`]:{width:"auto"},[d]:{fontSize:o.buttonIconOnlyFontSize}},[`&${r}-loading`]:{opacity:o.opacityLoading,cursor:"default"},[`${r}-loading-icon`]:{transition:`width ${o.motionDurationSlow} ${o.motionEaseInOut}, opacity ${o.motionDurationSlow} ${o.motionEaseInOut}`}}},{[`${r}${r}-circle${e}`]:ne(o)},{[`${r}${r}-round${e}`]:le(o)}]},ge=o=>A(z(o,{fontSize:o.contentFontSize})),me=o=>{const e=z(o,{controlHeight:o.controlHeightSM,fontSize:o.contentFontSizeSM,padding:o.paddingXS,buttonPaddingHorizontal:o.paddingInlineSM,buttonPaddingVertical:o.paddingBlockSM,borderRadius:o.borderRadiusSM,buttonIconOnlyFontSize:o.onlyIconSizeSM});return A(e,`${o.componentCls}-sm`)},pe=o=>{const e=z(o,{controlHeight:o.controlHeightLG,fontSize:o.contentFontSizeLG,buttonPaddingHorizontal:o.paddingInlineLG,buttonPaddingVertical:o.paddingBlockLG,borderRadius:o.borderRadiusLG,buttonIconOnlyFontSize:o.onlyIconSizeLG});return A(e,`${o.componentCls}-lg`)},be=o=>{const{componentCls:e}=o;return{[e]:{[`&${e}-block`]:{width:"100%"}}}},po=o=>{const{paddingInline:e,onlyIconSize:r,paddingBlock:t}=o;return z(o,{buttonPaddingHorizontal:e,buttonPaddingVertical:t,buttonIconOnlyFontSize:r})},bo=o=>{const e=o.fontSize,r=o.fontSize,t=o.fontSizeLG;return{fontWeight:400,defaultShadow:`0 ${o.controlOutlineWidth}px 0 ${o.controlTmpOutline}`,primaryShadow:`0 ${o.controlOutlineWidth}px 0 ${o.controlOutline}`,dangerShadow:`0 ${o.controlOutlineWidth}px 0 ${o.colorErrorOutline}`,primaryColor:o.colorTextLightSolid,dangerColor:o.colorTextLightSolid,borderColorDisabled:o.colorBorder,defaultGhostColor:o.colorBgContainer,ghostBg:"transparent",defaultGhostBorderColor:o.colorBgContainer,paddingInline:o.paddingContentHorizontal-o.lineWidth,paddingInlineLG:o.paddingContentHorizontal-o.lineWidth,paddingInlineSM:8-o.lineWidth,paddingBlock:Math.max((o.controlHeight-e*o.lineHeight)/2-o.lineWidth,0),paddingBlockSM:Math.max((o.controlHeightSM-r*o.lineHeight)/2-o.lineWidth,0),paddingBlockLG:Math.max((o.controlHeightLG-t*o.lineHeight)/2-o.lineWidth,0),onlyIconSize:o.fontSizeLG,onlyIconSizeSM:o.fontSizeLG-2,onlyIconSizeLG:o.fontSizeLG+2,groupBorderColor:o.colorPrimaryHover,linkHoverBg:"transparent",textHoverBg:o.colorBgTextHover,defaultColor:o.colorText,defaultBg:o.colorBgContainer,defaultBorderColor:o.colorBorder,defaultBorderColorDisabled:o.colorBorder,contentFontSize:e,contentFontSizeSM:r,contentFontSizeLG:t}},fe=No("Button",o=>{const e=po(o);return[te(e),me(e),ge(e),pe(e),be(e),ue(e),re(e)]},bo,{unitless:{fontWeight:!0}});function ye(o,e){return{[`&-item:not(${e}-last-item)`]:{marginBottom:o.calc(o.lineWidth).mul(-1).equal()},"&-item":{"&:hover,&:focus,&:active":{zIndex:2},"&[disabled]":{zIndex:0}}}}function Ce(o,e){return{[`&-item:not(${e}-first-item):not(${e}-last-item)`]:{borderRadius:0},[`&-item${e}-first-item:not(${e}-last-item)`]:{[`&, &${o}-sm, &${o}-lg`]:{borderEndEndRadius:0,borderEndStartRadius:0}},[`&-item${e}-last-item:not(${e}-first-item)`]:{[`&, &${o}-sm, &${o}-lg`]:{borderStartStartRadius:0,borderStartEndRadius:0}}}}function Se(o){const e=`${o.componentCls}-compact-vertical`;return{[e]:Object.assign(Object.assign({},ye(o,e)),Ce(o.componentCls,e))}}const he=o=>{const{componentCls:e,calc:r}=o;return{[e]:{[`&-compact-item${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:r(o.lineWidth).mul(-1).equal(),insetInlineStart:r(o.lineWidth).mul(-1).equal(),display:"inline-block",width:o.lineWidth,height:`calc(100% + ${x(o.lineWidth)} * 2)`,backgroundColor:o.colorPrimaryHover,content:'""'}}},"&-compact-vertical-item":{[`&${e}-primary`]:{[`&:not([disabled]) + ${e}-compact-vertical-item${e}-primary:not([disabled])`]:{position:"relative","&:before":{position:"absolute",top:r(o.lineWidth).mul(-1).equal(),insetInlineStart:r(o.lineWidth).mul(-1).equal(),display:"inline-block",width:`calc(100% + ${x(o.lineWidth)} * 2)`,height:o.lineWidth,backgroundColor:o.colorPrimaryHover,content:'""'}}}}}}},$e=Wo(["Button","compact"],o=>{const e=po(o);return[Xo(e),Se(e),he(e)]},bo);var ve=globalThis&&globalThis.__rest||function(o,e){var r={};for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&e.indexOf(t)<0&&(r[t]=o[t]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var n=0,t=Object.getOwnPropertySymbols(o);n<t.length;n++)e.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(o,t[n])&&(r[t[n]]=o[t[n]]);return r};function Be(o){if(typeof o=="object"&&o){let e=o==null?void 0:o.delay;return e=!Number.isNaN(e)&&typeof e=="number"?e:0,{loading:e<=0,delay:e}}return{loading:!!o,delay:0}}const Oe=(o,e)=>{var r,t;const{loading:n=!1,prefixCls:i,type:l="default",danger:d,shape:p="default",size:u,styles:y,disabled:j,className:fo,rootClassName:yo,children:S,icon:v,ghost:Co=!1,block:So=!1,htmlType:ho="button",classNames:H,style:$o={}}=o,_=ve(o,["loading","prefixCls","type","danger","shape","size","styles","disabled","className","rootClassName","children","icon","ghost","block","htmlType","classNames","style"]),{getPrefixCls:vo,autoInsertSpaceInButton:F,direction:V,button:g}=s.useContext(so),a=vo("btn",i),[q,Bo,Oo]=fe(a),xo=s.useContext(Ro),B=j??xo,Eo=s.useContext(co),O=s.useMemo(()=>Be(n),[n]),[C,X]=s.useState(O.loading),[T,U]=s.useState(!1),h=Go(e,s.createRef()),J=s.Children.count(S)===1&&!v&&!L(l);s.useEffect(()=>{let m=null;O.delay>0?m=setTimeout(()=>{m=null,X(!0)},O.delay):X(O.loading);function b(){m&&(clearTimeout(m),m=null)}return b},[O]),s.useEffect(()=>{if(!h||!h.current||F===!1)return;const m=h.current.textContent;J&&G(m)?T||U(!0):T&&U(!1)},[h]);const K=m=>{const{onClick:b}=o;if(C||B){m.preventDefault();return}b==null||b(m)},Q=F!==!1,{compactSize:Io,compactItemClassnames:Y}=Mo(a,V),zo={large:"lg",small:"sm",middle:void 0},Z=_o(m=>{var b,N;return(N=(b=u??Io)!==null&&b!==void 0?b:Eo)!==null&&N!==void 0?N:m}),k=Z&&zo[Z]||"",jo=C?"loading":v,w=Do(_,["navigate"]),oo=$(a,Bo,Oo,{[`${a}-${p}`]:p!=="default"&&p,[`${a}-${l}`]:l,[`${a}-${k}`]:k,[`${a}-icon-only`]:!S&&S!==0&&!!jo,[`${a}-background-ghost`]:Co&&!L(l),[`${a}-loading`]:C,[`${a}-two-chinese-chars`]:T&&Q&&!C,[`${a}-block`]:So,[`${a}-dangerous`]:!!d,[`${a}-rtl`]:V==="rtl"},Y,fo,yo,g==null?void 0:g.className),eo=Object.assign(Object.assign({},g==null?void 0:g.style),$o),Ho=$(H==null?void 0:H.icon,(r=g==null?void 0:g.classNames)===null||r===void 0?void 0:r.icon),To=Object.assign(Object.assign({},(y==null?void 0:y.icon)||{}),((t=g==null?void 0:g.styles)===null||t===void 0?void 0:t.icon)||{}),ro=v&&!C?c.createElement(uo,{prefixCls:a,className:Ho,style:To},v):c.createElement(oe,{existIcon:!!v,prefixCls:a,loading:!!C}),to=S||S===0?Yo(S,J&&Q):null;if(w.href!==void 0)return q(c.createElement("a",Object.assign({},w,{className:$(oo,{[`${a}-disabled`]:B}),href:B?void 0:w.href,style:eo,onClick:K,ref:h,tabIndex:B?-1:0}),ro,to));let P=c.createElement("button",Object.assign({},_,{type:ho,className:oo,style:eo,onClick:K,disabled:B,ref:h}),ro,to,Y&&c.createElement($e,{key:"compact",prefixCls:a}));return L(l)||(P=c.createElement(Ao,{component:"Button",disabled:!!C},P)),q(P)},M=s.forwardRef(Oe);M.Group=Ko;M.__ANT_BUTTON=!0;const Ne=M;export{Ne as B,Pe as c};