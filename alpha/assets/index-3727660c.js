import{a as Q,r as a}from"./index-8ee6c85d.js";import{C as U,c as P}from"./index-d0686b25.js";import{t as X}from"./toArray-702c099d.js";import{C as Y,u as Z}from"./Compact-190860f8.js";function w(e){return["small","middle","large"].includes(e)}function E(e){return e?typeof e=="number"&&!Number.isNaN(e):!1}const j=Q.createContext({latestIndex:0}),ee=j.Provider,te=e=>{let{className:r,index:n,children:t,split:l,style:s}=e;const{latestIndex:p}=a.useContext(j);return t==null?null:a.createElement(a.Fragment,null,a.createElement("div",{className:r,style:s},t),n<p&&l&&a.createElement("span",{className:`${r}-split`},l))},se=te;var le=globalThis&&globalThis.__rest||function(e,r){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(n[t[l]]=e[t[l]]);return n};const ae=a.forwardRef((e,r)=>{var n,t;const{getPrefixCls:l,space:s,direction:p}=a.useContext(U),{size:c=(s==null?void 0:s.size)||"small",align:N,className:I,rootClassName:V,children:k,direction:S="horizontal",prefixCls:A,split:G,style:H,wrap:R=!1,classNames:f,styles:v}=e,T=le(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[m,d]=Array.isArray(c)?c:[c,c],b=w(d),$=w(m),F=E(d),M=E(m),z=X(k,{keepEmpty:!0}),O=N===void 0&&S==="horizontal"?"center":N,o=l("space",A),[W,q,B]=Z(o),D=P(o,s==null?void 0:s.className,q,`${o}-${S}`,{[`${o}-rtl`]:p==="rtl",[`${o}-align-${O}`]:O,[`${o}-gap-row-${d}`]:b,[`${o}-gap-col-${m}`]:$},I,V,B),h=P(`${o}-item`,(n=f==null?void 0:f.item)!==null&&n!==void 0?n:(t=s==null?void 0:s.classNames)===null||t===void 0?void 0:t.item);let y=0;const J=z.map((i,C)=>{var g,x;i!=null&&(y=C);const L=i&&i.key||`${h}-${C}`;return a.createElement(se,{className:h,key:L,index:C,split:G,style:(g=v==null?void 0:v.item)!==null&&g!==void 0?g:(x=s==null?void 0:s.styles)===null||x===void 0?void 0:x.item},i)}),K=a.useMemo(()=>({latestIndex:y}),[y]);if(z.length===0)return null;const u={};return R&&(u.flexWrap="wrap"),!$&&M&&(u.columnGap=m),!b&&F&&(u.rowGap=d),W(a.createElement("div",Object.assign({ref:r,className:D,style:Object.assign(Object.assign(Object.assign({},u),s==null?void 0:s.style),H)},T),a.createElement(ee,{value:K},J)))}),_=ae;_.Compact=Y;const ce=_;export{ce as S};
