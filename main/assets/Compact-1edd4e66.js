import{c as f}from"./index-7e3d7086.js";import{t as w}from"./toArray-66e39049.js";import{a as S,r as n}from"./index-8ee6c85d.js";import{S as O,g as P,m as N,C as D}from"./index-f2765735.js";const L=e=>{const t=S.useContext(O);return S.useMemo(()=>e?typeof e=="string"?e??t:e instanceof Function?e(t):t:t,[e,t])},E=L,M=e=>{const{componentCls:t}=e;return{[t]:{"&-block":{display:"flex",width:"100%"},"&-vertical":{flexDirection:"column"}}}},j=M,F=e=>{const{componentCls:t}=e;return{[t]:{display:"inline-flex","&-rtl":{direction:"rtl"},"&-vertical":{flexDirection:"column"},"&-align":{flexDirection:"column","&-center":{alignItems:"center"},"&-start":{alignItems:"flex-start"},"&-end":{alignItems:"flex-end"},"&-baseline":{alignItems:"baseline"}},[`${t}-item:empty`]:{display:"none"}}}},T=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-row-small":{rowGap:e.spaceGapSmallSize},"&-gap-row-middle":{rowGap:e.spaceGapMiddleSize},"&-gap-row-large":{rowGap:e.spaceGapLargeSize},"&-gap-col-small":{columnGap:e.spaceGapSmallSize},"&-gap-col-middle":{columnGap:e.spaceGapMiddleSize},"&-gap-col-large":{columnGap:e.spaceGapLargeSize}}}},_=P("Space",e=>{const t=N(e,{spaceGapSmallSize:e.paddingXS,spaceGapMiddleSize:e.padding,spaceGapLargeSize:e.paddingLG});return[F(t),T(t),j(t)]},()=>({}),{resetStyle:!1});var C=globalThis&&globalThis.__rest||function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,o=Object.getOwnPropertySymbols(e);c<o.length;c++)t.indexOf(o[c])<0&&Object.prototype.propertyIsEnumerable.call(e,o[c])&&(a[o[c]]=e[o[c]]);return a};const m=n.createContext(null),q=(e,t)=>{const a=n.useContext(m),o=n.useMemo(()=>{if(!a)return"";const{compactDirection:c,isFirstItem:d,isLastItem:u}=a,l=c==="vertical"?"-vertical-":"-";return f(`${e}-compact${l}item`,{[`${e}-compact${l}first-item`]:d,[`${e}-compact${l}last-item`]:u,[`${e}-compact${l}item-rtl`]:t==="rtl"})},[e,t,a]);return{compactSize:a==null?void 0:a.compactSize,compactDirection:a==null?void 0:a.compactDirection,compactItemClassnames:o}},B=e=>{let{children:t}=e;return n.createElement(m.Provider,{value:null},t)},A=e=>{var{children:t}=e,a=C(e,["children"]);return n.createElement(m.Provider,{value:a},t)},H=e=>{const{getPrefixCls:t,direction:a}=n.useContext(D),{size:o,direction:c,block:d,prefixCls:u,className:l,rootClassName:v,children:y}=e,x=C(e,["size","direction","block","prefixCls","className","rootClassName","children"]),I=E(i=>o??i),s=t("space-compact",u),[b,G]=_(s),$=f(s,G,{[`${s}-rtl`]:a==="rtl",[`${s}-block`]:d,[`${s}-vertical`]:c==="vertical"},l,v),r=n.useContext(m),p=w(y),z=n.useMemo(()=>p.map((i,g)=>{const h=i&&i.key||`${s}-item-${g}`;return n.createElement(A,{key:h,compactSize:I,compactDirection:c,isFirstItem:g===0&&(!r||(r==null?void 0:r.isFirstItem)),isLastItem:g===p.length-1&&(!r||(r==null?void 0:r.isLastItem))},i)}),[o,p,r]);return p.length===0?null:b(n.createElement("div",Object.assign({className:$},x),z))},J=H;export{J as C,B as N,E as a,_ as b,q as u};
