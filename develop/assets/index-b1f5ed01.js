import{_ as V,f as K,s as Y,w as _,t as J,e as L,C as k,u as Q,v as X,x as Z}from"./index-4e0f86e8.js";import{a as ee,i as te}from"./isVisible-b65992d0.js";import{r as s,a as x}from"./index-8ee6c85d.js";import{c as oe}from"./reactNode-b58523ea.js";import{_ as $,a as E}from"./asyncToGenerator-4dda2c7d.js";import{R as ne}from"./index-8eb238e3.js";var h=V({},ne),re=h.version,se=h.render,ae=h.unmountComponentAtNode,C;try{var ie=Number((re||"").split(".")[0]);ie>=18&&(C=h.createRoot)}catch{}function O(e){var t=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&K(t)==="object"&&(t.usingClientEntryPoint=e)}var y="__rc_react_root__";function ue(e,t){O(!0);var o=t[y]||C(t);O(!1),o.render(e),t[y]=o}function ce(e,t){se(e,t)}function le(e,t){if(C){ue(e,t);return}ce(e,t)}function de(e){return S.apply(this,arguments)}function S(){return S=$(E().mark(function e(t){return E().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Promise.resolve().then(function(){var r;(r=t[y])===null||r===void 0||r.unmount(),delete t[y]}));case 1:case"end":return n.stop()}},e)})),S.apply(this,arguments)}function fe(e){ae(e)}function pe(e){return N.apply(this,arguments)}function N(){return N=$(E().mark(function e(t){return E().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:if(C===void 0){n.next=2;break}return n.abrupt("return",de(t));case 2:fe(t);case 3:case"end":return n.stop()}},e)})),N.apply(this,arguments)}const me=e=>{const{componentCls:t,colorPrimary:o}=e;return{[t]:{position:"absolute",background:"transparent",pointerEvents:"none",boxSizing:"border-box",color:`var(--wave-color, ${o})`,boxShadow:"0 0 0 0 currentcolor",opacity:.2,"&.wave-motion-appear":{transition:[`box-shadow 0.4s ${e.motionEaseOutCirc}`,`opacity 2s ${e.motionEaseOutCirc}`].join(","),"&-active":{boxShadow:"0 0 0 6px currentcolor",opacity:0},"&.wave-quick":{transition:[`box-shadow 0.3s ${e.motionEaseInOut}`,`opacity 0.35s ${e.motionEaseInOut}`].join(",")}}}}},ve=Y("Wave",e=>[me(e)]);function be(e){const t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}function g(e){return e&&e!=="#fff"&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&e!=="rgba(255, 255, 255, 1)"&&be(e)&&!/rgba\((?:\d*, ){3}0\)/.test(e)&&e!=="transparent"}function he(e){const{borderTopColor:t,borderColor:o,backgroundColor:n}=getComputedStyle(e);return g(t)?t:g(o)?o:g(n)?n:null}const A="ant-wave-target";function w(e){return Number.isNaN(e)?0:e}const Re=e=>{const{className:t,target:o,component:n}=e,r=s.useRef(null),[c,d]=s.useState(null),[f,R]=s.useState([]),[l,a]=s.useState(0),[p,m]=s.useState(0),[I,D]=s.useState(0),[U,j]=s.useState(0),[B,F]=s.useState(!1),W={left:l,top:p,width:I,height:U,borderRadius:f.map(u=>`${u}px`).join(" ")};c&&(W["--wave-color"]=c);function T(){const u=getComputedStyle(o);d(he(o));const i=u.position==="static",{borderLeftWidth:b,borderTopWidth:v}=u;a(i?o.offsetLeft:w(-parseFloat(b))),m(i?o.offsetTop:w(-parseFloat(v))),D(o.offsetWidth),j(o.offsetHeight);const{borderTopLeftRadius:q,borderTopRightRadius:z,borderBottomLeftRadius:M,borderBottomRightRadius:G}=u;R([q,z,G,M].map(H=>w(parseFloat(H))))}if(s.useEffect(()=>{if(o){const u=_(()=>{T(),F(!0)});let i;return typeof ResizeObserver<"u"&&(i=new ResizeObserver(T),i.observe(o)),()=>{_.cancel(u),i==null||i.disconnect()}}},[]),!B)return null;const P=(n==="Checkbox"||n==="Radio")&&(o==null?void 0:o.classList.contains(A));return s.createElement(J,{visible:!0,motionAppear:!0,motionName:"wave-motion",motionDeadline:5e3,onAppearEnd:(u,i)=>{var b;if(i.deadline||i.propertyName==="opacity"){const v=(b=r.current)===null||b===void 0?void 0:b.parentElement;pe(v).then(()=>{v==null||v.remove()})}return!1}},u=>{let{className:i}=u;return s.createElement("div",{ref:r,className:L(t,{"wave-quick":P},i),style:W})})},_e=(e,t)=>{var o;const{component:n}=t;if(n==="Checkbox"&&!(!((o=e.querySelector("input"))===null||o===void 0)&&o.checked))return;const r=document.createElement("div");r.style.position="absolute",r.style.left="0px",r.style.top="0px",e==null||e.insertBefore(r,e==null?void 0:e.firstChild),le(s.createElement(Re,Object.assign({},t,{target:e})),r)},Ee=_e;function ye(e,t,o){const{wave:n}=s.useContext(k),[,r,c]=Q(),d=ee(l=>{const a=e.current;if(n!=null&&n.disabled||!a)return;const p=a.querySelector(`.${A}`)||a,{showEffect:m}=n||{};(m||Ee)(p,{className:t,token:r,component:o,event:l,hashId:c})}),f=s.useRef();return l=>{_.cancel(f.current),f.current=_(()=>{d(l)})}}const Ce=e=>{const{children:t,disabled:o,component:n}=e,{getPrefixCls:r}=s.useContext(k),c=s.useRef(null),d=r("wave"),[,f]=ve(d),R=ye(c,L(d,f),n);if(x.useEffect(()=>{const a=c.current;if(!a||a.nodeType!==1||o)return;const p=m=>{!te(m.target)||!a.getAttribute||a.getAttribute("disabled")||a.disabled||a.className.includes("disabled")||a.className.includes("-leave")||R(m)};return a.addEventListener("click",p,!0),()=>{a.removeEventListener("click",p,!0)}},[o]),!x.isValidElement(t))return t??null;const l=X(t)?Z(t.ref,c):c;return oe(t,{ref:l})},xe=Ce;export{A as T,xe as W,le as r,pe as u};
