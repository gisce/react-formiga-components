import{_ as U}from"./extends-4c19d496.js";import{w as W,a as h,_ as l,g as q,C as N,u as F,e as R,b as S,f as G,c as H,h as x}from"./index-7e3d7086.js";import{a as _,r as s}from"./index-8ee6c85d.js";function E(n){var o;return n==null||(o=n.getRootNode)===null||o===void 0?void 0:o.call(n)}function J(n){return E(n)instanceof ShadowRoot}function K(n){return J(n)?E(n):null}function M(n){return n.replace(/-(.)/g,function(o,e){return e.toUpperCase()})}function Q(n,o){W(n,"[@ant-design/icons] ".concat(o))}function k(n){return h(n)==="object"&&typeof n.name=="string"&&typeof n.theme=="string"&&(h(n.icon)==="object"||typeof n.icon=="function")}function I(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(n).reduce(function(o,e){var r=n[e];switch(e){case"class":o.className=r,delete o.class;break;default:delete o[e],o[M(e)]=r}return o},{})}function T(n,o,e){return e?_.createElement(n.tag,l(l({key:o},I(n.attrs)),e),(n.children||[]).map(function(r,a){return T(r,"".concat(o,"-").concat(n.tag,"-").concat(a))})):_.createElement(n.tag,l({key:o},I(n.attrs)),(n.children||[]).map(function(r,a){return T(r,"".concat(o,"-").concat(n.tag,"-").concat(a))}))}function z(n){return q(n)[0]}function A(n){return n?Array.isArray(n)?n:[n]:[]}var cn={width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",focusable:"false"},V=`
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,X=function(o){var e=s.useContext(N),r=e.csp,a=e.prefixCls,c=e.layer,t=V;a&&(t=t.replace(/anticon/g,a)),c&&(t="@layer ".concat(c,` {
`).concat(t,`
}`)),s.useEffect(function(){var u=o.current,d=K(u);F(t,"@ant-design-icons",{prepend:!c,csp:r,attachTo:d})},[])},Y=["icon","className","onClick","style","primaryColor","secondaryColor"],f={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function Z(n){var o=n.primaryColor,e=n.secondaryColor;f.primaryColor=o,f.secondaryColor=e||z(o),f.calculated=!!e}function nn(){return l({},f)}var y=function(o){var e=o.icon,r=o.className,a=o.onClick,c=o.style,t=o.primaryColor,u=o.secondaryColor,d=R(o,Y),C=s.useRef(),m=f;if(t&&(m={primaryColor:t,secondaryColor:u||z(t)}),X(C),Q(k(e),"icon should be icon definiton, but got ".concat(e)),!k(e))return null;var i=e;return i&&typeof i.icon=="function"&&(i=l(l({},i),{},{icon:i.icon(m.primaryColor,m.secondaryColor)})),T(i.icon,"svg-".concat(i.name),l(l({className:r,onClick:a,style:c,"data-icon":i.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},d),{},{ref:C}))};y.displayName="IconReact";y.getTwoToneColors=nn;y.setTwoToneColors=Z;const w=y;function $(n){var o=A(n),e=S(o,2),r=e[0],a=e[1];return w.setTwoToneColors({primaryColor:r,secondaryColor:a})}function on(){var n=w.getTwoToneColors();return n.calculated?[n.primaryColor,n.secondaryColor]:n.primaryColor}var en=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];$(G.primary);var g=s.forwardRef(function(n,o){var e=n.className,r=n.icon,a=n.spin,c=n.rotate,t=n.tabIndex,u=n.onClick,d=n.twoToneColor,C=R(n,en),m=s.useContext(N),i=m.prefixCls,v=i===void 0?"anticon":i,j=m.rootClassName,P=H(j,v,x(x({},"".concat(v,"-").concat(r.name),!!r.name),"".concat(v,"-spin"),!!a||r.name==="loading"),e),p=t;p===void 0&&u&&(p=-1);var B=c?{msTransform:"rotate(".concat(c,"deg)"),transform:"rotate(".concat(c,"deg)")}:void 0,O=A(d),b=S(O,2),D=b[0],L=b[1];return s.createElement("span",U({role:"img","aria-label":r.name},C,{ref:o,tabIndex:p,onClick:u,className:P}),s.createElement(w,{icon:r,primaryColor:D,secondaryColor:L,style:B}))});g.displayName="AntdIcon";g.getTwoToneColor=on;g.setTwoToneColor=$;const ln=g;export{ln as A,on as a,$ as b,K as g,cn as s,X as u,Q as w};
