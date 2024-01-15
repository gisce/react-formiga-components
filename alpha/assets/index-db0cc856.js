import{r as o,a as Y}from"./index-8ee6c85d.js";import{s as Z,j as ee,c as N,t as B,_ as F,g as re,m as te,e as M,v as ae,a as H,C as q,D as oe,w as W}from"./index-7b090294.js";import{_ as ne}from"./assertThisInitialized-f89cd6ac.js";import{u as le}from"./isVisible-f24c26d5.js";import{T as se,W as ie}from"./index-5c8aaf67.js";import{u as L}from"./useCSSVarCls-313dcfc7.js";import{F as ce}from"./context-4f71b533.js";import{o as de}from"./omit-c5f18c7c.js";var ue=["prefixCls","className","style","checked","disabled","defaultChecked","type","title","onChange"],be=o.forwardRef(function(e,r){var t,a=e.prefixCls,l=a===void 0?"rc-checkbox":a,I=e.className,v=e.style,$=e.checked,g=e.disabled,p=e.defaultChecked,b=p===void 0?!1:p,C=e.type,S=C===void 0?"checkbox":C,i=e.title,m=e.onChange,j=Z(e,ue),u=o.useRef(null),n=le(b,{value:$}),O=ee(n,2),w=O[0],x=O[1];o.useImperativeHandle(r,function(){return{focus:function(){var c;(c=u.current)===null||c===void 0||c.focus()},blur:function(){var c;(c=u.current)===null||c===void 0||c.blur()},input:u.current}});var f=N(l,I,(t={},B(t,"".concat(l,"-checked"),w),B(t,"".concat(l,"-disabled"),g),t)),d=function(c){g||("checked"in e||x(c.target.checked),m==null||m({target:F(F({},e),{},{type:S,checked:c.target.checked}),stopPropagation:function(){c.stopPropagation()},preventDefault:function(){c.preventDefault()},nativeEvent:c.nativeEvent}))};return o.createElement("span",{className:f,title:i,style:v},o.createElement("input",ne({},j,{className:"".concat(l,"-input"),ref:u,onChange:d,disabled:g,checked:!!w,type:S})),o.createElement("span",{className:"".concat(l,"-inner")}))});const fe=e=>{const{checkboxCls:r}=e,t=`${r}-wrapper`;return[{[`${r}-group`]:Object.assign(Object.assign({},M(e)),{display:"inline-flex",flexWrap:"wrap",columnGap:e.marginXS,[`> ${e.antCls}-row`]:{flex:1}}),[t]:Object.assign(Object.assign({},M(e)),{display:"inline-flex",alignItems:"baseline",cursor:"pointer","&:after":{display:"inline-block",width:0,overflow:"hidden",content:"'\\a0'"},[`& + ${t}`]:{marginInlineStart:0},[`&${t}-in-form-item`]:{'input[type="checkbox"]':{width:14,height:14}}}),[r]:Object.assign(Object.assign({},M(e)),{position:"relative",whiteSpace:"nowrap",lineHeight:1,cursor:"pointer",borderRadius:e.borderRadiusSM,alignSelf:"center",[`${r}-input`]:{position:"absolute",inset:0,zIndex:1,cursor:"pointer",opacity:0,margin:0,[`&:focus-visible + ${r}-inner`]:Object.assign({},ae(e))},[`${r}-inner`]:{boxSizing:"border-box",display:"block",width:e.checkboxSize,height:e.checkboxSize,direction:"ltr",backgroundColor:e.colorBgContainer,border:`${H(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,borderCollapse:"separate",transition:`all ${e.motionDurationSlow}`,"&:after":{boxSizing:"border-box",position:"absolute",top:"50%",insetInlineStart:"25%",display:"table",width:e.calc(e.checkboxSize).div(14).mul(5).equal(),height:e.calc(e.checkboxSize).div(14).mul(8).equal(),border:`${H(e.lineWidthBold)} solid ${e.colorWhite}`,borderTop:0,borderInlineStart:0,transform:"rotate(45deg) scale(0) translate(-50%,-50%)",opacity:0,content:'""',transition:`all ${e.motionDurationFast} ${e.motionEaseInBack}, opacity ${e.motionDurationFast}`}},"& + span":{paddingInlineStart:e.paddingXS,paddingInlineEnd:e.paddingXS}})},{[`
        ${t}:not(${t}-disabled),
        ${r}:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{borderColor:e.colorPrimary}},[`${t}:not(${t}-disabled)`]:{[`&:hover ${r}-checked:not(${r}-disabled) ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"},[`&:hover ${r}-checked:not(${r}-disabled):after`]:{borderColor:e.colorPrimaryHover}}},{[`${r}-checked`]:{[`${r}-inner`]:{backgroundColor:e.colorPrimary,borderColor:e.colorPrimary,"&:after":{opacity:1,transform:"rotate(45deg) scale(1) translate(-50%,-50%)",transition:`all ${e.motionDurationMid} ${e.motionEaseOutBack} ${e.motionDurationFast}`}}},[`
        ${t}-checked:not(${t}-disabled),
        ${r}-checked:not(${r}-disabled)
      `]:{[`&:hover ${r}-inner`]:{backgroundColor:e.colorPrimaryHover,borderColor:"transparent"}}},{[r]:{"&-indeterminate":{[`${r}-inner`]:{backgroundColor:e.colorBgContainer,borderColor:e.colorBorder,"&:after":{top:"50%",insetInlineStart:"50%",width:e.calc(e.fontSizeLG).div(2).equal(),height:e.calc(e.fontSizeLG).div(2).equal(),backgroundColor:e.colorPrimary,border:0,transform:"translate(-50%, -50%) scale(1)",opacity:1,content:'""'}}}}},{[`${t}-disabled`]:{cursor:"not-allowed"},[`${r}-disabled`]:{[`&, ${r}-input`]:{cursor:"not-allowed",pointerEvents:"none"},[`${r}-inner`]:{background:e.colorBgContainerDisabled,borderColor:e.colorBorder,"&:after":{borderColor:e.colorTextDisabled}},"&:after":{display:"none"},"& + span":{color:e.colorTextDisabled},[`&${r}-indeterminate ${r}-inner::after`]:{background:e.colorTextDisabled}}}]};function pe(e,r){const t=te(r,{checkboxCls:`.${e}`,checkboxSize:r.controlInteractiveSize});return[fe(t)]}const A=re("Checkbox",(e,r)=>{let{prefixCls:t}=r;return[pe(t,e)]}),me=Y.createContext(null),X=me;var he=globalThis&&globalThis.__rest||function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t};const ve=(e,r)=>{var t;const{prefixCls:a,className:l,rootClassName:I,children:v,indeterminate:$=!1,style:g,onMouseEnter:p,onMouseLeave:b,skipGroup:C=!1,disabled:S}=e,i=he(e,["prefixCls","className","rootClassName","children","indeterminate","style","onMouseEnter","onMouseLeave","skipGroup","disabled"]),{getPrefixCls:m,direction:j,checkbox:u}=o.useContext(q),n=o.useContext(X),{isFormItemInput:O}=o.useContext(ce),w=o.useContext(oe),x=(t=(n==null?void 0:n.disabled)||S)!==null&&t!==void 0?t:w,f=o.useRef(i.value);o.useEffect(()=>{n==null||n.registerValue(i.value)},[]),o.useEffect(()=>{if(!C)return i.value!==f.current&&(n==null||n.cancelValue(f.current),n==null||n.registerValue(i.value),f.current=i.value),()=>n==null?void 0:n.cancelValue(i.value)},[i.value]);const d=m("checkbox",a),h=L(d),[c,_,k]=A(d,h),y=Object.assign({},i);n&&!C&&(y.onChange=function(){i.onChange&&i.onChange.apply(i,arguments),n.toggleOption&&n.toggleOption({label:v,value:i.value})},y.name=n.name,y.checked=n.value.includes(i.value));const V=N(`${d}-wrapper`,{[`${d}-rtl`]:j==="rtl",[`${d}-wrapper-checked`]:y.checked,[`${d}-wrapper-disabled`]:x,[`${d}-wrapper-in-form-item`]:O},u==null?void 0:u.className,l,I,k,h,_),D=N({[`${d}-indeterminate`]:$},se,_),R=$?"mixed":void 0;return c(o.createElement(ie,{component:"Checkbox",disabled:x},o.createElement("label",{className:V,style:Object.assign(Object.assign({},u==null?void 0:u.style),g),onMouseEnter:p,onMouseLeave:b},o.createElement(be,Object.assign({"aria-checked":R},y,{prefixCls:d,className:D,disabled:x,ref:r})),v!==void 0&&o.createElement("span",null,v))))},ge=o.forwardRef(ve),K=ge;var Ce=globalThis&&globalThis.__rest||function(e,r){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)r.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(t[a[l]]=e[a[l]]);return t};const xe=o.forwardRef((e,r)=>{const{defaultValue:t,children:a,options:l=[],prefixCls:I,className:v,rootClassName:$,style:g,onChange:p}=e,b=Ce(e,["defaultValue","children","options","prefixCls","className","rootClassName","style","onChange"]),{getPrefixCls:C,direction:S}=o.useContext(q),[i,m]=o.useState(b.value||t||[]),[j,u]=o.useState([]);o.useEffect(()=>{"value"in b&&m(b.value||[])},[b.value]);const n=o.useMemo(()=>l.map(s=>typeof s=="string"||typeof s=="number"?{label:s,value:s}:s),[l]),O=s=>{u(P=>P.filter(E=>E!==s))},w=s=>{u(P=>[].concat(W(P),[s]))},x=s=>{const P=i.indexOf(s.value),E=W(i);P===-1?E.push(s.value):E.splice(P,1),"value"in b||m(E),p==null||p(E.filter(T=>j.includes(T)).sort((T,J)=>{const Q=n.findIndex(z=>z.value===T),U=n.findIndex(z=>z.value===J);return Q-U}))},f=C("checkbox",I),d=`${f}-group`,h=L(f),[c,_,k]=A(f,h),y=de(b,["value","disabled"]),V=l.length?n.map(s=>o.createElement(K,{prefixCls:f,key:s.value.toString(),disabled:"disabled"in s?s.disabled:b.disabled,value:s.value,checked:i.includes(s.value),onChange:s.onChange,className:`${d}-item`,style:s.style,title:s.title,id:s.id,required:s.required},s.label)):a,D={toggleOption:x,value:i,disabled:b.disabled,name:b.name,registerValue:w,cancelValue:O},R=N(d,{[`${d}-rtl`]:S==="rtl"},v,$,k,h,_);return c(o.createElement("div",Object.assign({className:R,style:g},y,{ref:r}),o.createElement(X.Provider,{value:D},V)))}),ye=xe,G=K;G.Group=ye;G.__ANT_CHECKBOX=!0;const je=G;export{je as C,be as a,pe as g};
