import{a as D,r as u}from"./index-8ee6c85d.js";import{k as F,g as U,m as Q,u as K,C as V,c as W}from"./index-4cbabd78.js";const w=["xxl","xl","lg","md","sm","xs"],Y=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),Z=e=>{const t=e,o=[].concat(w).reverse();return o.forEach((n,s)=>{const r=n.toUpperCase(),c=`screen${r}Min`,i=`screen${r}`;if(!(t[c]<=t[i]))throw new Error(`${c}<=${i} fails : !(${t[c]}<=${t[i]})`);if(s<o.length-1){const l=`screen${r}Max`;if(!(t[i]<=t[l]))throw new Error(`${i}<=${l} fails : !(${t[i]}<=${t[l]})`);const d=`screen${o[s+1].toUpperCase()}Min`;if(!(t[l]<=t[d]))throw new Error(`${l}<=${d} fails : !(${t[l]}<=${t[d]})`)}}),e};function z(){const[,e]=F(),t=Y(Z(e));return D.useMemo(()=>{const o=new Map;let n=-1,s={};return{matchHandlers:{},dispatch(r){return s=r,o.forEach(c=>c(s)),o.size>=1},subscribe(r){return o.size||this.register(),n+=1,o.set(n,r),r(s),n},unsubscribe(r){o.delete(r),o.size||this.unregister()},unregister(){Object.keys(t).forEach(r=>{const c=t[r],i=this.matchHandlers[c];i==null||i.mql.removeListener(i==null?void 0:i.listener)}),o.clear()},register(){Object.keys(t).forEach(r=>{const c=t[r],i=g=>{let{matches:d}=g;this.dispatch(Object.assign(Object.assign({},s),{[r]:d}))},l=window.matchMedia(c);l.addListener(i),this.matchHandlers[c]={mql:l,listener:i},i(l)})},responsiveMap:t}},[e])}const ee=u.createContext({}),B=ee,te=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}},ne=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},se=(e,t)=>{const{componentCls:o,gridColumns:n}=e,s={};for(let r=n;r>=0;r--)r===0?(s[`${o}${t}-${r}`]={display:"none"},s[`${o}-push-${r}`]={insetInlineStart:"auto"},s[`${o}-pull-${r}`]={insetInlineEnd:"auto"},s[`${o}${t}-push-${r}`]={insetInlineStart:"auto"},s[`${o}${t}-pull-${r}`]={insetInlineEnd:"auto"},s[`${o}${t}-offset-${r}`]={marginInlineStart:0},s[`${o}${t}-order-${r}`]={order:0}):(s[`${o}${t}-${r}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${r/n*100}%`,maxWidth:`${r/n*100}%`}],s[`${o}${t}-push-${r}`]={insetInlineStart:`${r/n*100}%`},s[`${o}${t}-pull-${r}`]={insetInlineEnd:`${r/n*100}%`},s[`${o}${t}-offset-${r}`]={marginInlineStart:`${r/n*100}%`},s[`${o}${t}-order-${r}`]={order:r});return s},P=(e,t)=>se(e,t),re=(e,t,o)=>({[`@media (min-width: ${K(t)})`]:Object.assign({},P(e,o))}),oe=()=>({}),ie=()=>({}),ae=U("Grid",te,oe),le=U("Grid",e=>{const t=Q(e,{gridColumns:24}),o={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[ne(t),P(t,""),P(t,"-xs"),Object.keys(o).map(n=>re(t,o[n],n)).reduce((n,s)=>Object.assign(Object.assign({},n),s),{})]},ie);var ce=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(o[n[s]]=e[n[s]]);return o};function fe(e){return typeof e=="number"?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const ue=["xs","sm","md","lg","xl","xxl"],pe=u.forwardRef((e,t)=>{const{getPrefixCls:o,direction:n}=u.useContext(V),{gutter:s,wrap:r}=u.useContext(B),{prefixCls:c,span:i,order:l,offset:g,push:d,pull:C,className:R,children:G,flex:j,style:O}=e,S=ce(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),f=o("col",c),[v,k,M]=le(f);let h={};ue.forEach(p=>{let a={};const $=e[p];typeof $=="number"?a.span=$:typeof $=="object"&&(a=$||{}),delete S[p],h=Object.assign(Object.assign({},h),{[`${f}-${p}-${a.span}`]:a.span!==void 0,[`${f}-${p}-order-${a.order}`]:a.order||a.order===0,[`${f}-${p}-offset-${a.offset}`]:a.offset||a.offset===0,[`${f}-${p}-push-${a.push}`]:a.push||a.push===0,[`${f}-${p}-pull-${a.pull}`]:a.pull||a.pull===0,[`${f}-${p}-flex-${a.flex}`]:a.flex||a.flex==="auto",[`${f}-rtl`]:n==="rtl"})});const y=W(f,{[`${f}-${i}`]:i!==void 0,[`${f}-order-${l}`]:l,[`${f}-offset-${g}`]:g,[`${f}-push-${d}`]:d,[`${f}-pull-${C}`]:C},R,h,k,M),x={};if(s&&s[0]>0){const p=s[0]/2;x.paddingLeft=p,x.paddingRight=p}return j&&(x.flex=fe(j),r===!1&&!x.minWidth&&(x.minWidth=0)),v(u.createElement("div",Object.assign({},S,{style:Object.assign(Object.assign({},x),O),className:y,ref:t}),G))}),ye=pe;var de=globalThis&&globalThis.__rest||function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(o[n[s]]=e[n[s]]);return o};function H(e,t){const[o,n]=u.useState(typeof e=="string"?e:""),s=()=>{if(typeof e=="string"&&n(e),typeof e=="object")for(let r=0;r<w.length;r++){const c=w[r];if(!t[c])continue;const i=e[c];if(i!==void 0){n(i);return}}};return u.useEffect(()=>{s()},[JSON.stringify(e),t]),o}const $e=u.forwardRef((e,t)=>{const{prefixCls:o,justify:n,align:s,className:r,style:c,children:i,gutter:l=0,wrap:g}=e,d=de(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:C,direction:R}=u.useContext(V),[G,j]=u.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[O,S]=u.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),f=H(s,O),v=H(n,O),k=u.useRef(l),M=z();u.useEffect(()=>{const b=M.subscribe(L=>{S(L);const m=k.current||0;(!Array.isArray(m)&&typeof m=="object"||Array.isArray(m)&&(typeof m[0]=="object"||typeof m[1]=="object"))&&j(L)});return()=>M.unsubscribe(b)},[]);const h=()=>{const b=[void 0,void 0];return(Array.isArray(l)?l:[l,void 0]).forEach((m,X)=>{if(typeof m=="object")for(let A=0;A<w.length;A++){const T=w[A];if(G[T]&&m[T]!==void 0){b[X]=m[T];break}}else b[X]=m}),b},y=C("row",o),[x,p,a]=ae(y),$=h(),J=W(y,{[`${y}-no-wrap`]:g===!1,[`${y}-${v}`]:v,[`${y}-${f}`]:f,[`${y}-rtl`]:R==="rtl"},r,p,a),E={},I=$[0]!=null&&$[0]>0?$[0]/-2:void 0;I&&(E.marginLeft=I,E.marginRight=I),[,E.rowGap]=$;const[_,N]=$,q=u.useMemo(()=>({gutter:[_,N],wrap:g}),[_,N,g]);return x(u.createElement(B.Provider,{value:q},u.createElement("div",Object.assign({},d,{className:J,style:Object.assign(Object.assign({},E),c),ref:t}),i)))}),xe=$e;export{ye as C,xe as R,z as u};
