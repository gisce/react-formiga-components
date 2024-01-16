import{r as c}from"./index-8ee6c85d.js";import{g as I,m as j,e as P,a as d,C as E,c as B}from"./index-7b090294.js";const T=t=>{const{componentCls:e,sizePaddingEdgeHorizontal:l,colorSplit:i,lineWidth:r,textPaddingInline:s,orientationMargin:o,verticalMarginInline:a}=t;return{[e]:Object.assign(Object.assign({},P(t)),{borderBlockStart:`${d(r)} solid ${i}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:a,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${d(r)} solid ${i}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${d(t.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${e}-with-text`]:{display:"flex",alignItems:"center",margin:`${d(t.dividerHorizontalWithTextGutterMargin)} 0`,color:t.colorTextHeading,fontWeight:500,fontSize:t.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${i}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${d(r)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${e}-with-text-left`]:{"&::before":{width:`calc(${o} * 100%)`},"&::after":{width:`calc(100% - ${o} * 100%)`}},[`&-horizontal${e}-with-text-right`]:{"&::before":{width:`calc(100% - ${o} * 100%)`},"&::after":{width:`calc(${o} * 100%)`}},[`${e}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:s},"&-dashed":{background:"none",borderColor:i,borderStyle:"dashed",borderWidth:`${d(r)} 0 0`},[`&-horizontal${e}-with-text${e}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${e}-dashed`]:{borderInlineStartWidth:r,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${e}-with-text`]:{color:t.colorText,fontWeight:"normal",fontSize:t.fontSize},[`&-horizontal${e}-with-text-left${e}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${e}-inner-text`]:{paddingInlineStart:l}},[`&-horizontal${e}-with-text-right${e}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${e}-inner-text`]:{paddingInlineEnd:l}}})}},H=t=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:t.marginXS}),N=I("Divider",t=>{const e=j(t,{dividerHorizontalWithTextGutterMargin:t.margin,dividerHorizontalGutterMargin:t.marginLG,sizePaddingEdgeHorizontal:0});return[T(e)]},H,{unitless:{orientationMargin:!0}});var W=globalThis&&globalThis.__rest||function(t,e){var l={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(l[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(l[i[r]]=t[i[r]]);return l};const k=t=>{const{getPrefixCls:e,direction:l,divider:i}=c.useContext(E),{prefixCls:r,type:s="horizontal",orientation:o="center",orientationMargin:a,className:b,rootClassName:$,children:g,dashed:u,plain:x,style:v}=t,y=W(t,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","plain","style"]),n=e("divider",r),[S,w,z]=N(n),C=o.length>0?`-${o}`:o,h=!!g,f=o==="left"&&a!=null,m=o==="right"&&a!=null,O=B(n,i==null?void 0:i.className,w,z,`${n}-${s}`,{[`${n}-with-text`]:h,[`${n}-with-text${C}`]:h,[`${n}-dashed`]:!!u,[`${n}-plain`]:!!x,[`${n}-rtl`]:l==="rtl",[`${n}-no-default-orientation-margin-left`]:f,[`${n}-no-default-orientation-margin-right`]:m},b,$),p=c.useMemo(()=>typeof a=="number"?a:/^\d+$/.test(a)?Number(a):a,[a]),M=Object.assign(Object.assign({},f&&{marginLeft:p}),m&&{marginRight:p});return S(c.createElement("div",Object.assign({className:O,style:Object.assign(Object.assign({},i==null?void 0:i.style),v)},y,{role:"separator"}),g&&s!=="vertical"&&c.createElement("span",{className:`${n}-inner-text`,style:M},g)))},L=k;export{L as D};
