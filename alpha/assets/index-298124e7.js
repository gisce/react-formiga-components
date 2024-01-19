import{a as Q,r as n}from"./index-8ee6c85d.js";import{C as U,c as P}from"./index-f36c3419.js";import{t as X}from"./toArray-d3285e7a.js";import{C as Y,u as Z}from"./Compact-f42963ce.js";function w(e){return["small","middle","large"].includes(e)}function E(e){return e?typeof e=="number"&&!Number.isNaN(e):!1}const j=Q.createContext({latestIndex:0}),ee=j.Provider,te=e=>{let{className:r,index:a,children:t,split:l,style:s}=e;const{latestIndex:p}=n.useContext(j);return t==null?null:n.createElement(n.Fragment,null,n.createElement("div",{className:r,style:s},t),a<p&&l&&n.createElement("span",{className:`${r}-split`},l))},se=te;var le=globalThis&&globalThis.__rest||function(e,r){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,t=Object.getOwnPropertySymbols(e);l<t.length;l++)r.indexOf(t[l])<0&&Object.prototype.propertyIsEnumerable.call(e,t[l])&&(a[t[l]]=e[t[l]]);return a};const ne=n.forwardRef((e,r)=>{var a,t;const{getPrefixCls:l,space:s,direction:p}=n.useContext(U),{size:c=(s==null?void 0:s.size)||"small",align:N,className:I,rootClassName:V,children:k,direction:S="horizontal",prefixCls:A,split:G,style:H,wrap:R=!1,classNames:f,styles:v}=e,T=le(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[m,d]=Array.isArray(c)?c:[c,c],b=w(d),$=w(m),F=E(d),M=E(m),z=X(k,{keepEmpty:!0}),O=N===void 0&&S==="horizontal"?"center":N,o=l("space",A),[W,q,B]=Z(o),D=P(o,s==null?void 0:s.className,q,`${o}-${S}`,{[`${o}-rtl`]:p==="rtl",[`${o}-align-${O}`]:O,[`${o}-gap-row-${d}`]:b,[`${o}-gap-col-${m}`]:$},I,V,B),h=P(`${o}-item`,(a=f==null?void 0:f.item)!==null&&a!==void 0?a:(t=s==null?void 0:s.classNames)===null||t===void 0?void 0:t.item);let y=0;const J=z.map((i,C)=>{var g,x;i!=null&&(y=C);const L=i&&i.key||`${h}-${C}`;return n.createElement(se,{className:h,key:L,index:C,split:G,style:(g=v==null?void 0:v.item)!==null&&g!==void 0?g:(x=s==null?void 0:s.styles)===null||x===void 0?void 0:x.item},i)}),K=n.useMemo(()=>({latestIndex:y}),[y]);if(z.length===0)return null;const u={};return R&&(u.flexWrap="wrap"),!$&&M&&(u.columnGap=m),!b&&F&&(u.rowGap=d),W(n.createElement("div",Object.assign({ref:r,className:D,style:Object.assign(Object.assign(Object.assign({},u),s==null?void 0:s.style),H)},T),n.createElement(ee,{value:K},J)))}),_=ne;_.Compact=Y;const ce=_;export{ce as S};
