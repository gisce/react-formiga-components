import{M as yn,N as bn,O as Xr,Q as Yr,v as Tr,U as xr,_ as x,a0 as br,b as Cr,n as yt,H as wn,a1 as Cn,a2 as en,a3 as tn,l as Pr,j as k,a4 as _n,c as qe,u as Mn,F as jt,p as _r,q as Z,a5 as $r,t as rn,x as Rn,a6 as Sn,a7 as Mr,w as pr}from"./index-d0686b25.js";import{_ as Kt}from"./assertThisInitialized-601f600e.js";import{r as i,a as qt,R as En}from"./index-8ee6c85d.js";import{r as kn}from"./index-8eb238e3.js";import{t as Tn}from"./toArray-702c099d.js";import{a as Fe,i as xn}from"./isVisible-10508b7a.js";var Rr=i.createContext(null);function Pn(e){var r=e.children,t=e.onBatchResize,n=i.useRef(0),a=i.useRef([]),o=i.useContext(Rr),s=i.useCallback(function(c,l,v){n.current+=1;var y=n.current;a.current.push({size:c,element:l,data:v}),Promise.resolve().then(function(){y===n.current&&(t==null||t(a.current),a.current=[])}),o==null||o(c,l,v)},[t,o]);return i.createElement(Rr.Provider,{value:s},r)}var nn=function(){if(typeof Map<"u")return Map;function e(r,t){var n=-1;return r.some(function(a,o){return a[0]===t?(n=o,!0):!1}),n}return function(){function r(){this.__entries__=[]}return Object.defineProperty(r.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),r.prototype.get=function(t){var n=e(this.__entries__,t),a=this.__entries__[n];return a&&a[1]},r.prototype.set=function(t,n){var a=e(this.__entries__,t);~a?this.__entries__[a][1]=n:this.__entries__.push([t,n])},r.prototype.delete=function(t){var n=this.__entries__,a=e(n,t);~a&&n.splice(a,1)},r.prototype.has=function(t){return!!~e(this.__entries__,t)},r.prototype.clear=function(){this.__entries__.splice(0)},r.prototype.forEach=function(t,n){n===void 0&&(n=null);for(var a=0,o=this.__entries__;a<o.length;a++){var s=o[a];t.call(n,s[1],s[0])}},r}()}(),Sr=typeof window<"u"&&typeof document<"u"&&window.document===document,Vt=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),zn=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(Vt):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),Nn=2;function Dn(e,r){var t=!1,n=!1,a=0;function o(){t&&(t=!1,e()),n&&c()}function s(){zn(o)}function c(){var l=Date.now();if(t){if(l-a<Nn)return;n=!0}else t=!0,n=!1,setTimeout(s,r);a=l}return c}var $n=20,pn=["top","right","bottom","left","width","height","size","weight"],Ln=typeof MutationObserver<"u",In=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=Dn(this.refresh.bind(this),$n)}return e.prototype.addObserver=function(r){~this.observers_.indexOf(r)||this.observers_.push(r),this.connected_||this.connect_()},e.prototype.removeObserver=function(r){var t=this.observers_,n=t.indexOf(r);~n&&t.splice(n,1),!t.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var r=this.updateObservers_();r&&this.refresh()},e.prototype.updateObservers_=function(){var r=this.observers_.filter(function(t){return t.gatherActive(),t.hasActive()});return r.forEach(function(t){return t.broadcastActive()}),r.length>0},e.prototype.connect_=function(){!Sr||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),Ln?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!Sr||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(r){var t=r.propertyName,n=t===void 0?"":t,a=pn.some(function(o){return!!~n.indexOf(o)});a&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),an=function(e,r){for(var t=0,n=Object.keys(r);t<n.length;t++){var a=n[t];Object.defineProperty(e,a,{value:r[a],enumerable:!1,writable:!1,configurable:!0})}return e},at=function(e){var r=e&&e.ownerDocument&&e.ownerDocument.defaultView;return r||Vt},on=Qt(0,0,0,0);function Ut(e){return parseFloat(e)||0}function Lr(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return r.reduce(function(n,a){var o=e["border-"+a+"-width"];return n+Ut(o)},0)}function Wn(e){for(var r=["top","right","bottom","left"],t={},n=0,a=r;n<a.length;n++){var o=a[n],s=e["padding-"+o];t[o]=Ut(s)}return t}function An(e){var r=e.getBBox();return Qt(0,0,r.width,r.height)}function Bn(e){var r=e.clientWidth,t=e.clientHeight;if(!r&&!t)return on;var n=at(e).getComputedStyle(e),a=Wn(n),o=a.left+a.right,s=a.top+a.bottom,c=Ut(n.width),l=Ut(n.height);if(n.boxSizing==="border-box"&&(Math.round(c+o)!==r&&(c-=Lr(n,"left","right")+o),Math.round(l+s)!==t&&(l-=Lr(n,"top","bottom")+s)),!On(e)){var v=Math.round(c+o)-r,y=Math.round(l+s)-t;Math.abs(v)!==1&&(c-=v),Math.abs(y)!==1&&(l-=y)}return Qt(a.left,a.top,c,l)}var Hn=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof at(e).SVGGraphicsElement}:function(e){return e instanceof at(e).SVGElement&&typeof e.getBBox=="function"}}();function On(e){return e===at(e).document.documentElement}function Fn(e){return Sr?Hn(e)?An(e):Bn(e):on}function jn(e){var r=e.x,t=e.y,n=e.width,a=e.height,o=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,s=Object.create(o.prototype);return an(s,{x:r,y:t,width:n,height:a,top:t,right:r+n,bottom:a+t,left:r}),s}function Qt(e,r,t,n){return{x:e,y:r,width:t,height:n}}var qn=function(){function e(r){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Qt(0,0,0,0),this.target=r}return e.prototype.isActive=function(){var r=Fn(this.target);return this.contentRect_=r,r.width!==this.broadcastWidth||r.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var r=this.contentRect_;return this.broadcastWidth=r.width,this.broadcastHeight=r.height,r},e}(),Vn=function(){function e(r,t){var n=jn(t);an(this,{target:r,contentRect:n})}return e}(),Un=function(){function e(r,t,n){if(this.activeObservations_=[],this.observations_=new nn,typeof r!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=r,this.controller_=t,this.callbackCtx_=n}return e.prototype.observe=function(r){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(r instanceof at(r).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(r)||(t.set(r,new qn(r)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(r){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(r instanceof at(r).Element))throw new TypeError('parameter 1 is not of type "Element".');var t=this.observations_;t.has(r)&&(t.delete(r),t.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var r=this;this.clearActive(),this.observations_.forEach(function(t){t.isActive()&&r.activeObservations_.push(t)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var r=this.callbackCtx_,t=this.activeObservations_.map(function(n){return new Vn(n.target,n.broadcastRect())});this.callback_.call(r,t,r),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),sn=typeof WeakMap<"u"?new WeakMap:new nn,un=function(){function e(r){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var t=In.getInstance(),n=new Un(r,t,this);sn.set(this,n)}return e}();["observe","unobserve","disconnect"].forEach(function(e){un.prototype[e]=function(){var r;return(r=sn.get(this))[e].apply(r,arguments)}});var Gn=function(){return typeof Vt.ResizeObserver<"u"?Vt.ResizeObserver:un}(),ze=new Map;function Kn(e){e.forEach(function(r){var t,n=r.target;(t=ze.get(n))===null||t===void 0||t.forEach(function(a){return a(n)})})}var cn=new Gn(Kn);function Qn(e,r){ze.has(e)||(ze.set(e,new Set),cn.observe(e)),ze.get(e).add(r)}function Jn(e,r){ze.has(e)&&(ze.get(e).delete(r),ze.get(e).size||(cn.unobserve(e),ze.delete(e)))}var Zn=function(e){yn(t,e);var r=bn(t);function t(){return Xr(this,t),r.apply(this,arguments)}return Yr(t,[{key:"render",value:function(){return this.props.children}}]),t}(i.Component);function Xn(e,r){var t=e.children,n=e.disabled,a=i.useRef(null),o=i.useRef(null),s=i.useContext(Rr),c=typeof t=="function",l=c?t(a):t,v=i.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),y=!c&&i.isValidElement(l)&&Tr(l),d=y?l.ref:null,M=xr(d,a),h=function(){var R;return br(a.current)||(a.current&&Cr(a.current)==="object"?br((R=a.current)===null||R===void 0?void 0:R.nativeElement):null)||br(o.current)};i.useImperativeHandle(r,function(){return h()});var b=i.useRef(e);b.current=e;var _=i.useCallback(function(g){var R=b.current,S=R.onResize,w=R.data,f=g.getBoundingClientRect(),P=f.width,W=f.height,A=g.offsetWidth,F=g.offsetHeight,V=Math.floor(P),p=Math.floor(W);if(v.current.width!==V||v.current.height!==p||v.current.offsetWidth!==A||v.current.offsetHeight!==F){var B={width:V,height:p,offsetWidth:A,offsetHeight:F};v.current=B;var ne=A===Math.round(P)?P:A,ae=F===Math.round(W)?W:F,G=x(x({},B),{},{offsetWidth:ne,offsetHeight:ae});s==null||s(G,g,w),S&&Promise.resolve().then(function(){S(G,g)})}},[]);return i.useEffect(function(){var g=h();return g&&!n&&Qn(g,_),function(){return Jn(g,_)}},[a.current,n]),i.createElement(Zn,{ref:o},y?i.cloneElement(l,{ref:M}):l)}var Yn=i.forwardRef(Xn),ea="rc-observer-key";function ta(e,r){var t=e.children,n=typeof t=="function"?[t]:Tn(t);return n.map(function(a,o){var s=(a==null?void 0:a.key)||"".concat(ea,"-").concat(o);return i.createElement(Yn,Kt({},e,{key:s,ref:o===0?r:void 0}),a)})}var zr=i.forwardRef(ta);zr.Collection=Pn;var Qa=function(){function e(r,t){Xr(this,e),yt(this,"name",void 0),yt(this,"style",void 0),yt(this,"_keyframe",!0),this.name=r,this.style=t}return Yr(e,[{key:"getName",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return t?"".concat(t,"-").concat(this.name):this.name}}]),e}();function ln(e){var r;return e==null||(r=e.getRootNode)===null||r===void 0?void 0:r.call(e)}function ra(e){return ln(e)instanceof ShadowRoot}function Gt(e){return ra(e)?ln(e):null}function na(e){return e.replace(/-(.)/g,function(r,t){return t.toUpperCase()})}function aa(e,r){wn(e,"[@ant-design/icons] ".concat(r))}function Ir(e){return Cr(e)==="object"&&typeof e.name=="string"&&typeof e.theme=="string"&&(Cr(e.icon)==="object"||typeof e.icon=="function")}function Wr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Object.keys(e).reduce(function(r,t){var n=e[t];switch(t){case"class":r.className=n,delete r.class;break;default:delete r[t],r[na(t)]=n}return r},{})}function Er(e,r,t){return t?qt.createElement(e.tag,x(x({key:r},Wr(e.attrs)),t),(e.children||[]).map(function(n,a){return Er(n,"".concat(r,"-").concat(e.tag,"-").concat(a))})):qt.createElement(e.tag,x({key:r},Wr(e.attrs)),(e.children||[]).map(function(n,a){return Er(n,"".concat(r,"-").concat(e.tag,"-").concat(a))}))}function fn(e){return Cn(e)[0]}function vn(e){return e?Array.isArray(e)?e:[e]:[]}var oa=`
.anticon {
  display: inline-block;
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
`,ia=function(r){var t=i.useContext(en),n=t.csp,a=t.prefixCls,o=oa;a&&(o=o.replace(/anticon/g,a)),i.useEffect(function(){var s=r.current,c=Gt(s);tn(o,"@ant-design-icons",{prepend:!0,csp:n,attachTo:c})},[])},sa=["icon","className","onClick","style","primaryColor","secondaryColor"],bt={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1};function ua(e){var r=e.primaryColor,t=e.secondaryColor;bt.primaryColor=r,bt.secondaryColor=t||fn(r),bt.calculated=!!t}function ca(){return x({},bt)}var Jt=function(r){var t=r.icon,n=r.className,a=r.onClick,o=r.style,s=r.primaryColor,c=r.secondaryColor,l=Pr(r,sa),v=i.useRef(),y=bt;if(s&&(y={primaryColor:s,secondaryColor:c||fn(s)}),ia(v),aa(Ir(t),"icon should be icon definiton, but got ".concat(t)),!Ir(t))return null;var d=t;return d&&typeof d.icon=="function"&&(d=x(x({},d),{},{icon:d.icon(y.primaryColor,y.secondaryColor)})),Er(d.icon,"svg-".concat(d.name),x(x({className:n,onClick:a,style:o,"data-icon":d.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},l),{},{ref:v}))};Jt.displayName="IconReact";Jt.getTwoToneColors=ca;Jt.setTwoToneColors=ua;const Nr=Jt;function dn(e){var r=vn(e),t=k(r,2),n=t[0],a=t[1];return Nr.setTwoToneColors({primaryColor:n,secondaryColor:a})}function la(){var e=Nr.getTwoToneColors();return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor}var fa=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"];dn(_n.primary);var Zt=i.forwardRef(function(e,r){var t,n=e.className,a=e.icon,o=e.spin,s=e.rotate,c=e.tabIndex,l=e.onClick,v=e.twoToneColor,y=Pr(e,fa),d=i.useContext(en),M=d.prefixCls,h=M===void 0?"anticon":M,b=d.rootClassName,_=qe(b,h,(t={},yt(t,"".concat(h,"-").concat(a.name),!!a.name),yt(t,"".concat(h,"-spin"),!!o||a.name==="loading"),t),n),g=c;g===void 0&&l&&(g=-1);var R=s?{msTransform:"rotate(".concat(s,"deg)"),transform:"rotate(".concat(s,"deg)")}:void 0,S=vn(v),w=k(S,2),f=w[0],P=w[1];return i.createElement("span",Kt({role:"img","aria-label":a.name},y,{ref:r,tabIndex:g,onClick:l,className:_}),i.createElement(Nr,{icon:a,primaryColor:f,secondaryColor:P,style:R}))});Zt.displayName="AntdIcon";Zt.getTwoToneColor=la;Zt.setTwoToneColor=dn;const Ja=Zt,va=qt.createContext(void 0),da=va,je=100,ha=10,ma=je*ha,hn={Modal:je,Drawer:je,Popover:je,Popconfirm:je,Tooltip:je,Tour:je},ga={SelectLike:50,Dropdown:50,DatePicker:50,Menu:50,ImagePreview:1};function ya(e){return e in hn}function Za(e,r){const[,t]=Mn(),n=qt.useContext(da),a=ya(e);if(r!==void 0)return[r,r];let o=n??0;return a?(o+=(n?0:t.zIndexPopupBase)+hn[e],o=Math.min(o,t.zIndexPopupBase+ma)):o+=ga[e],[n===void 0?r:o,o]}var mn=i.createContext(null),Ar=[];function ba(e,r){var t=i.useState(function(){if(!jt())return null;var b=document.createElement("div");return b}),n=k(t,1),a=n[0],o=i.useRef(!1),s=i.useContext(mn),c=i.useState(Ar),l=k(c,2),v=l[0],y=l[1],d=s||(o.current?void 0:function(b){y(function(_){var g=[b].concat(_r(_));return g})});function M(){a.parentElement||document.body.appendChild(a),o.current=!0}function h(){var b;(b=a.parentElement)===null||b===void 0||b.removeChild(a),o.current=!1}return Z(function(){return e?s?s(M):M():h(),h},[e]),Z(function(){v.length&&(v.forEach(function(b){return b()}),y(Ar))},[v]),[a,d]}var wr;function wa(e){if(typeof document>"u")return 0;if(e||wr===void 0){var r=document.createElement("div");r.style.width="100%",r.style.height="200px";var t=document.createElement("div"),n=t.style;n.position="absolute",n.top="0",n.left="0",n.pointerEvents="none",n.visibility="hidden",n.width="200px",n.height="150px",n.overflow="hidden",t.appendChild(r),document.body.appendChild(t);var a=r.offsetWidth;t.style.overflow="scroll";var o=r.offsetWidth;a===o&&(o=t.clientWidth),document.body.removeChild(t),wr=a-o}return wr}function Br(e){var r=e.match(/^(.*)px$/),t=Number(r==null?void 0:r[1]);return Number.isNaN(t)?wa():t}function Ca(e){if(typeof document>"u"||!e||!(e instanceof Element))return{width:0,height:0};var r=getComputedStyle(e,"::-webkit-scrollbar"),t=r.width,n=r.height;return{width:Br(t),height:Br(n)}}function _a(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var Ma="rc-util-locker-".concat(Date.now()),Hr=0;function Ra(e){var r=!!e,t=i.useState(function(){return Hr+=1,"".concat(Ma,"_").concat(Hr)}),n=k(t,1),a=n[0];Z(function(){if(r){var o=Ca(document.body).width,s=_a();tn(`
html body {
  overflow-y: hidden;
  `.concat(s?"width: calc(100% - ".concat(o,"px);"):"",`
}`),a)}else $r(a);return function(){$r(a)}},[r,a])}var Or=!1;function Sa(e){return typeof e=="boolean"&&(Or=e),Or}var Fr=function(r){return r===!1?!1:!jt()||!r?null:typeof r=="string"?document.querySelector(r):typeof r=="function"?r():r},gn=i.forwardRef(function(e,r){var t=e.open,n=e.autoLock,a=e.getContainer;e.debug;var o=e.autoDestroy,s=o===void 0?!0:o,c=e.children,l=i.useState(t),v=k(l,2),y=v[0],d=v[1],M=y||t;i.useEffect(function(){(s||t)&&d(t)},[t,s]);var h=i.useState(function(){return Fr(a)}),b=k(h,2),_=b[0],g=b[1];i.useEffect(function(){var B=Fr(a);g(B??null)});var R=ba(M&&!_),S=k(R,2),w=S[0],f=S[1],P=_??w;Ra(n&&t&&jt()&&(P===w||P===document.body));var W=null;if(c&&Tr(c)&&r){var A=c;W=A.ref}var F=xr(W,r);if(!M||!jt()||_===void 0)return null;var V=P===!1||Sa(),p=c;return r&&(p=i.cloneElement(c,{ref:F})),i.createElement(mn.Provider,{value:f},V?p:kn.createPortal(p,P))});function Ea(){var e=x({},En);return e.useId}var jr=0,qr=Ea();const ka=qr?function(r){var t=qr();return r||t}:function(r){var t=i.useState("ssr-id"),n=k(t,2),a=n[0],o=n[1];return i.useEffect(function(){var s=jr;jr+=1,o("rc_unique_".concat(s))},[]),r||a},Ta=e=>({animationDuration:e,animationFillMode:"both"}),xa=e=>({animationDuration:e,animationFillMode:"both"}),Xa=function(e,r,t,n){const o=(arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1)?"&":"";return{[`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]:Object.assign(Object.assign({},Ta(n)),{animationPlayState:"paused"}),[`${o}${e}-leave`]:Object.assign(Object.assign({},xa(n)),{animationPlayState:"paused"}),[`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]:{animationName:r,animationPlayState:"running"},[`${o}${e}-leave${e}-leave-active`]:{animationName:t,animationPlayState:"running",pointerEvents:"none"}}},Pa=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))};function za(e){var r=e.prefixCls,t=e.align,n=e.arrow,a=e.arrowPos,o=n||{},s=o.className,c=o.content,l=a.x,v=l===void 0?0:l,y=a.y,d=y===void 0?0:y,M=i.useRef();if(!t||!t.points)return null;var h={position:"absolute"};if(t.autoArrow!==!1){var b=t.points[0],_=t.points[1],g=b[0],R=b[1],S=_[0],w=_[1];g===S||!["t","b"].includes(g)?h.top=d:g==="t"?h.top=0:h.bottom=0,R===w||!["l","r"].includes(R)?h.left=v:R==="l"?h.left=0:h.right=0}return i.createElement("div",{ref:M,className:qe("".concat(r,"-arrow"),s),style:h},c)}function Na(e){var r=e.prefixCls,t=e.open,n=e.zIndex,a=e.mask,o=e.motion;return a?i.createElement(rn,Kt({},o,{motionAppear:!0,visible:t,removeOnLeave:!0}),function(s){var c=s.className;return i.createElement("div",{style:{zIndex:n},className:qe("".concat(r,"-mask"),c)})}):null}var Da=i.memo(function(e){var r=e.children;return r},function(e,r){return r.cache}),$a=i.forwardRef(function(e,r){var t=e.popup,n=e.className,a=e.prefixCls,o=e.style,s=e.target,c=e.onVisibleChanged,l=e.open,v=e.keepDom,y=e.fresh,d=e.onClick,M=e.mask,h=e.arrow,b=e.arrowPos,_=e.align,g=e.motion,R=e.maskMotion,S=e.forceRender,w=e.getPopupContainer,f=e.autoDestroy,P=e.portal,W=e.zIndex,A=e.onMouseEnter,F=e.onMouseLeave,V=e.onPointerEnter,p=e.ready,B=e.offsetX,ne=e.offsetY,ae=e.offsetR,G=e.offsetB,me=e.onAlign,L=e.onPrepare,H=e.stretch,E=e.targetWidth,X=e.targetHeight,z=typeof t=="function"?t():t,ce=l||v,oe=(w==null?void 0:w.length)>0,ot=i.useState(!w||!oe),Ve=k(ot,2),ge=Ve[0],Ue=Ve[1];if(Z(function(){!ge&&oe&&s&&Ue(!0)},[ge,oe,s]),!ge)return null;var ie="auto",O={left:"-1000vw",top:"-1000vh",right:ie,bottom:ie};if(p||!l){var Y,le=_.points,fe=_.dynamicInset||((Y=_._experimental)===null||Y===void 0?void 0:Y.dynamicInset),Ge=fe&&le[0][1]==="r",it=fe&&le[0][0]==="b";Ge?(O.right=ae,O.left=ie):(O.left=B,O.right=ie),it?(O.bottom=G,O.top=ie):(O.top=ne,O.bottom=ie)}var q={};return H&&(H.includes("height")&&X?q.height=X:H.includes("minHeight")&&X&&(q.minHeight=X),H.includes("width")&&E?q.width=E:H.includes("minWidth")&&E&&(q.minWidth=E)),l||(q.pointerEvents="none"),i.createElement(P,{open:S||ce,getContainer:w&&function(){return w(s)},autoDestroy:f},i.createElement(Na,{prefixCls:a,open:l,zIndex:W,mask:M,motion:R}),i.createElement(zr,{onResize:me,disabled:!l},function(Ke){return i.createElement(rn,Kt({motionAppear:!0,motionEnter:!0,motionLeave:!0,removeOnLeave:!1,forceRender:S,leavedClassName:"".concat(a,"-hidden")},g,{onAppearPrepare:L,onEnterPrepare:L,visible:l,onVisibleChanged:function(K){var ye;g==null||(ye=g.onVisibleChanged)===null||ye===void 0||ye.call(g,K),c(K)}}),function(Me,K){var ye=Me.className,T=Me.style,Ne=qe(a,ye,n);return i.createElement("div",{ref:Rn(Ke,r,K),className:Ne,style:x(x(x(x({"--arrow-x":"".concat(b.x||0,"px"),"--arrow-y":"".concat(b.y||0,"px")},O),q),T),{},{boxSizing:"border-box",zIndex:W},o),onMouseEnter:A,onMouseLeave:F,onPointerEnter:V,onClick:d},h&&i.createElement(za,{prefixCls:a,arrow:h,arrowPos:b,align:_}),i.createElement(Da,{cache:!l&&!y},z))})}))}),pa=i.forwardRef(function(e,r){var t=e.children,n=e.getTriggerDOMNode,a=Tr(t),o=i.useCallback(function(c){Sn(r,n?n(c):c)},[n]),s=xr(o,t.ref);return a?i.cloneElement(t,{ref:s}):t}),Vr=i.createContext(null);function Ur(e){return e?Array.isArray(e)?e:[e]:[]}function La(e,r,t,n){return i.useMemo(function(){var a=Ur(t??r),o=Ur(n??r),s=new Set(a),c=new Set(o);return e&&(s.has("hover")&&(s.delete("hover"),s.add("click")),c.has("hover")&&(c.delete("hover"),c.add("click"))),[s,c]},[e,r,t,n])}function Ia(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0;return t?e[0]===r[0]:e[0]===r[0]&&e[1]===r[1]}function Wa(e,r,t,n){for(var a=t.points,o=Object.keys(e),s=0;s<o.length;s+=1){var c,l=o[s];if(Ia((c=e[l])===null||c===void 0?void 0:c.points,a,n))return"".concat(r,"-placement-").concat(l)}return""}function Gr(e,r,t,n){return r||(t?{motionName:"".concat(e,"-").concat(t)}:n?{motionName:n}:null)}function Ct(e){return e.ownerDocument.defaultView}function kr(e){for(var r=[],t=e==null?void 0:e.parentElement,n=["hidden","scroll","clip","auto"];t;){var a=Ct(t).getComputedStyle(t),o=a.overflowX,s=a.overflowY,c=a.overflow;[o,s,c].some(function(l){return n.includes(l)})&&r.push(t),t=t.parentElement}return r}function wt(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;return Number.isNaN(e)?r:e}function gt(e){return wt(parseFloat(e),0)}function Kr(e,r){var t=x({},e);return(r||[]).forEach(function(n){if(!(n instanceof HTMLBodyElement||n instanceof HTMLHtmlElement)){var a=Ct(n).getComputedStyle(n),o=a.overflow,s=a.overflowClipMargin,c=a.borderTopWidth,l=a.borderBottomWidth,v=a.borderLeftWidth,y=a.borderRightWidth,d=n.getBoundingClientRect(),M=n.offsetHeight,h=n.clientHeight,b=n.offsetWidth,_=n.clientWidth,g=gt(c),R=gt(l),S=gt(v),w=gt(y),f=wt(Math.round(d.width/b*1e3)/1e3),P=wt(Math.round(d.height/M*1e3)/1e3),W=(b-_-S-w)*f,A=(M-h-g-R)*P,F=g*P,V=R*P,p=S*f,B=w*f,ne=0,ae=0;if(o==="clip"){var G=gt(s);ne=G*f,ae=G*P}var me=d.x+p-ne,L=d.y+F-ae,H=me+d.width+2*ne-p-B-W,E=L+d.height+2*ae-F-V-A;t.left=Math.max(t.left,me),t.top=Math.max(t.top,L),t.right=Math.min(t.right,H),t.bottom=Math.min(t.bottom,E)}}),t}function Qr(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t="".concat(r),n=t.match(/^(.*)\%$/);return n?e*(parseFloat(n[1])/100):parseFloat(t)}function Jr(e,r){var t=r||[],n=k(t,2),a=n[0],o=n[1];return[Qr(e.width,a),Qr(e.height,o)]}function Zr(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return[e[0],e[1]]}function nt(e,r){var t=r[0],n=r[1],a,o;return t==="t"?o=e.y:t==="b"?o=e.y+e.height:o=e.y+e.height/2,n==="l"?a=e.x:n==="r"?a=e.x+e.width:a=e.x+e.width/2,{x:a,y:o}}function Pe(e,r){var t={t:"b",b:"t",l:"r",r:"l"};return e.map(function(n,a){return a===r?t[n]||"c":n}).join("")}function Aa(e,r,t,n,a,o,s){var c=i.useState({ready:!1,offsetX:0,offsetY:0,offsetR:0,offsetB:0,arrowX:0,arrowY:0,scaleX:1,scaleY:1,align:a[n]||{}}),l=k(c,2),v=l[0],y=l[1],d=i.useRef(0),M=i.useMemo(function(){return r?kr(r):[]},[r]),h=i.useRef({}),b=function(){h.current={}};e||b();var _=Fe(function(){if(r&&t&&e){let re=function(_e,Oe){var tt=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Ne,rt=z.x+_e,ht=z.y+Oe,mt=rt+Y,Ht=ht+O,dr=Math.max(rt,tt.left),hr=Math.max(ht,tt.top),mr=Math.min(mt,tt.right),gr=Math.min(Ht,tt.bottom);return Math.max(0,(mr-dr)*(gr-hr))},Bt=function(){Ee=z.y+C,ke=Ee+O,Te=z.x+$,Ze=Te+Y};var S,w,f=r,P=f.ownerDocument,W=Ct(f),A=W.getComputedStyle(f),F=A.width,V=A.height,p=A.position,B=f.style.left,ne=f.style.top,ae=f.style.right,G=f.style.bottom,me=f.style.overflow,L=x(x({},a[n]),o),H=P.createElement("div");(S=f.parentElement)===null||S===void 0||S.appendChild(H),H.style.left="".concat(f.offsetLeft,"px"),H.style.top="".concat(f.offsetTop,"px"),H.style.position=p,H.style.height="".concat(f.offsetHeight,"px"),H.style.width="".concat(f.offsetWidth,"px"),f.style.left="0",f.style.top="0",f.style.right="auto",f.style.bottom="auto",f.style.overflow="hidden";var E;if(Array.isArray(t))E={x:t[0],y:t[1],width:0,height:0};else{var X=t.getBoundingClientRect();E={x:X.x,y:X.y,width:X.width,height:X.height}}var z=f.getBoundingClientRect(),ce=P.documentElement,oe=ce.clientWidth,ot=ce.clientHeight,Ve=ce.scrollWidth,ge=ce.scrollHeight,Ue=ce.scrollTop,ie=ce.scrollLeft,O=z.height,Y=z.width,le=E.height,fe=E.width,Ge={left:0,top:0,right:oe,bottom:ot},it={left:-ie,top:-Ue,right:Ve-ie,bottom:ge-Ue},q=L.htmlRegion,Ke="visible",Me="visibleFirst";q!=="scroll"&&q!==Me&&(q=Ke);var K=q===Me,ye=Kr(it,M),T=Kr(Ge,M),Ne=q===Ke?T:ye,ee=K?T:Ne;f.style.left="auto",f.style.top="auto",f.style.right="0",f.style.bottom="0";var _t=f.getBoundingClientRect();f.style.left=B,f.style.top=ne,f.style.right=ae,f.style.bottom=G,f.style.overflow=me,(w=f.parentElement)===null||w===void 0||w.removeChild(H);var De=wt(Math.round(Y/parseFloat(F)*1e3)/1e3),$e=wt(Math.round(O/parseFloat(V)*1e3)/1e3);if(De===0||$e===0||Mr(t)&&!xn(t))return;var Mt=L.offset,se=L.targetOffset,Xt=Jr(z,Mt),Rt=k(Xt,2),ue=Rt[0],te=Rt[1],ve=Jr(E,se),St=k(ve,2),Et=St[0],Yt=St[1];E.x-=Et,E.y-=Yt;var Qe=L.points||[],Q=k(Qe,2),Re=Q[0],er=Q[1],be=Zr(er),J=Zr(Re),kt=nt(E,be),st=nt(z,J),Se=x({},L),$=kt.x-st.x+ue,C=kt.y-st.y+te,de=re($,C),he=re($,C,T),pe=nt(E,["t","l"]),ut=nt(z,["t","l"]),ct=nt(E,["b","r"]),lt=nt(z,["b","r"]),U=L.overflow||{},tr=U.adjustX,Tt=U.adjustY,Je=U.shiftX,ft=U.shiftY,xt=function(Oe){return typeof Oe=="boolean"?Oe:Oe>=0},Ee,ke,Te,Ze;Bt();var vt=xt(Tt),dt=J[0]===be[0];if(vt&&J[0]==="t"&&(ke>ee.bottom||h.current.bt)){var Le=C;dt?Le-=O-le:Le=pe.y-lt.y-te;var Ie=re($,Le),rr=re($,Le,T);Ie>de||Ie===de&&(!K||rr>=he)?(h.current.bt=!0,C=Le,te=-te,Se.points=[Pe(J,0),Pe(be,0)]):h.current.bt=!1}if(vt&&J[0]==="b"&&(Ee<ee.top||h.current.tb)){var j=C;dt?j+=O-le:j=ct.y-ut.y-te;var Pt=re($,j),nr=re($,j,T);Pt>de||Pt===de&&(!K||nr>=he)?(h.current.tb=!0,C=j,te=-te,Se.points=[Pe(J,0),Pe(be,0)]):h.current.tb=!1}var zt=xt(tr),Nt=J[1]===be[1];if(zt&&J[1]==="l"&&(Ze>ee.right||h.current.rl)){var We=$;Nt?We-=Y-fe:We=pe.x-lt.x-ue;var Dt=re(We,C),ar=re(We,C,T);Dt>de||Dt===de&&(!K||ar>=he)?(h.current.rl=!0,$=We,ue=-ue,Se.points=[Pe(J,1),Pe(be,1)]):h.current.rl=!1}if(zt&&J[1]==="r"&&(Te<ee.left||h.current.lr)){var Ae=$;Nt?Ae+=Y-fe:Ae=ct.x-ut.x-ue;var $t=re(Ae,C),Xe=re(Ae,C,T);$t>de||$t===de&&(!K||Xe>=he)?(h.current.lr=!0,$=Ae,ue=-ue,Se.points=[Pe(J,1),Pe(be,1)]):h.current.lr=!1}Bt();var we=Je===!0?0:Je;typeof we=="number"&&(Te<T.left&&($-=Te-T.left-ue,E.x+fe<T.left+we&&($+=E.x-T.left+fe-we)),Ze>T.right&&($-=Ze-T.right-ue,E.x>T.right-we&&($+=E.x-T.right+we)));var Be=ft===!0?0:ft;typeof Be=="number"&&(Ee<T.top&&(C-=Ee-T.top-te,E.y+le<T.top+Be&&(C+=E.y-T.top+le-Be)),ke>T.bottom&&(C-=ke-T.bottom-te,E.y>T.bottom-Be&&(C+=E.y-T.bottom+Be)));var Ye=z.x+$,et=Ye+Y,Ce=z.y+C,pt=Ce+O,He=E.x,xe=He+fe,Lt=E.y,or=Lt+le,ir=Math.max(Ye,He),It=Math.min(et,xe),sr=(ir+It)/2,ur=sr-Ye,cr=Math.max(Ce,Lt),Wt=Math.min(pt,or),lr=(cr+Wt)/2,fr=lr-Ce;s==null||s(r,Se);var At=_t.right-z.x-($+z.width),vr=_t.bottom-z.y-(C+z.height);y({ready:!0,offsetX:$/De,offsetY:C/$e,offsetR:At/De,offsetB:vr/$e,arrowX:ur/De,arrowY:fr/$e,scaleX:De,scaleY:$e,align:Se})}}),g=function(){d.current+=1;var w=d.current;Promise.resolve().then(function(){d.current===w&&_()})},R=function(){y(function(w){return x(x({},w),{},{ready:!1})})};return Z(R,[n]),Z(function(){e||R()},[e]),[v.ready,v.offsetX,v.offsetY,v.offsetR,v.offsetB,v.arrowX,v.arrowY,v.scaleX,v.scaleY,v.align,g]}function Ba(e,r,t,n,a){Z(function(){if(e&&r&&t){let d=function(){n(),a()};var o=r,s=t,c=kr(o),l=kr(s),v=Ct(s),y=new Set([v].concat(_r(c),_r(l)));return y.forEach(function(M){M.addEventListener("scroll",d,{passive:!0})}),v.addEventListener("resize",d,{passive:!0}),n(),function(){y.forEach(function(M){M.removeEventListener("scroll",d),v.removeEventListener("resize",d)})}}},[e,r,t])}function Ha(e,r,t,n,a,o,s,c){var l=i.useRef(e),v=i.useRef(!1);l.current!==e&&(v.current=!0,l.current=e),i.useEffect(function(){var y=pr(function(){v.current=!1});return function(){pr.cancel(y)}},[e]),i.useEffect(function(){if(r&&n&&(!a||o)){var y=function(){var W=!1,A=function(p){var B=p.target;W=s(B)},F=function(p){var B=p.target;!v.current&&l.current&&!W&&!s(B)&&c(!1)};return[A,F]},d=y(),M=k(d,2),h=M[0],b=M[1],_=y(),g=k(_,2),R=g[0],S=g[1],w=Ct(n);w.addEventListener("mousedown",h,!0),w.addEventListener("click",b,!0),w.addEventListener("contextmenu",b,!0);var f=Gt(t);return f&&(f.addEventListener("mousedown",R,!0),f.addEventListener("click",S,!0),f.addEventListener("contextmenu",S,!0)),function(){w.removeEventListener("mousedown",h,!0),w.removeEventListener("click",b,!0),w.removeEventListener("contextmenu",b,!0),f&&(f.removeEventListener("mousedown",R,!0),f.removeEventListener("click",S,!0),f.removeEventListener("contextmenu",S,!0))}}},[r,t,n,a,o])}var Oa=["prefixCls","children","action","showAction","hideAction","popupVisible","defaultPopupVisible","onPopupVisibleChange","afterPopupVisibleChange","mouseEnterDelay","mouseLeaveDelay","focusDelay","blurDelay","mask","maskClosable","getPopupContainer","forceRender","autoDestroy","destroyPopupOnHide","popup","popupClassName","popupStyle","popupPlacement","builtinPlacements","popupAlign","zIndex","stretch","getPopupClassNameFromAlign","fresh","alignPoint","onPopupClick","onPopupAlign","arrow","popupMotion","maskMotion","popupTransitionName","popupAnimation","maskTransitionName","maskAnimation","className","getTriggerDOMNode"];function Fa(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:gn,r=i.forwardRef(function(t,n){var a=t.prefixCls,o=a===void 0?"rc-trigger-popup":a,s=t.children,c=t.action,l=c===void 0?"hover":c,v=t.showAction,y=t.hideAction,d=t.popupVisible,M=t.defaultPopupVisible,h=t.onPopupVisibleChange,b=t.afterPopupVisibleChange,_=t.mouseEnterDelay,g=t.mouseLeaveDelay,R=g===void 0?.1:g,S=t.focusDelay,w=t.blurDelay,f=t.mask,P=t.maskClosable,W=P===void 0?!0:P,A=t.getPopupContainer,F=t.forceRender,V=t.autoDestroy,p=t.destroyPopupOnHide,B=t.popup,ne=t.popupClassName,ae=t.popupStyle,G=t.popupPlacement,me=t.builtinPlacements,L=me===void 0?{}:me,H=t.popupAlign,E=t.zIndex,X=t.stretch,z=t.getPopupClassNameFromAlign,ce=t.fresh,oe=t.alignPoint,ot=t.onPopupClick,Ve=t.onPopupAlign,ge=t.arrow,Ue=t.popupMotion,ie=t.maskMotion,O=t.popupTransitionName,Y=t.popupAnimation,le=t.maskTransitionName,fe=t.maskAnimation,Ge=t.className,it=t.getTriggerDOMNode,q=Pr(t,Oa),Ke=V||p||!1,Me=i.useState(!1),K=k(Me,2),ye=K[0],T=K[1];Z(function(){T(Pa())},[]);var Ne=i.useRef({}),ee=i.useContext(Vr),_t=i.useMemo(function(){return{registerSubPopup:function(m,N){Ne.current[m]=N,ee==null||ee.registerSubPopup(m,N)}}},[ee]),De=ka(),$e=i.useState(null),Mt=k($e,2),se=Mt[0],Xt=Mt[1],Rt=Fe(function(u){Mr(u)&&se!==u&&Xt(u),ee==null||ee.registerSubPopup(De,u)}),ue=i.useState(null),te=k(ue,2),ve=te[0],St=te[1],Et=i.useRef(null),Yt=Fe(function(u){Mr(u)&&ve!==u&&(St(u),Et.current=u)}),Qe=i.Children.only(s),Q=(Qe==null?void 0:Qe.props)||{},Re={},er=Fe(function(u){var m,N,I=ve;return(I==null?void 0:I.contains(u))||((m=Gt(I))===null||m===void 0?void 0:m.host)===u||u===I||(se==null?void 0:se.contains(u))||((N=Gt(se))===null||N===void 0?void 0:N.host)===u||u===se||Object.values(Ne.current).some(function(D){return(D==null?void 0:D.contains(u))||u===D})}),be=Gr(o,Ue,Y,O),J=Gr(o,ie,fe,le),kt=i.useState(M||!1),st=k(kt,2),Se=st[0],$=st[1],C=d??Se,de=Fe(function(u){d===void 0&&$(u)});Z(function(){$(d||!1)},[d]);var he=i.useRef(C);he.current=C;var pe=i.useRef([]);pe.current=[];var ut=Fe(function(u){var m;de(u),((m=pe.current[pe.current.length-1])!==null&&m!==void 0?m:C)!==u&&(pe.current.push(u),h==null||h(u))}),ct=i.useRef(),lt=function(){clearTimeout(ct.current)},U=function(m){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;lt(),N===0?ut(m):ct.current=setTimeout(function(){ut(m)},N*1e3)};i.useEffect(function(){return lt},[]);var tr=i.useState(!1),Tt=k(tr,2),Je=Tt[0],ft=Tt[1];Z(function(u){(!u||C)&&ft(!0)},[C]);var xt=i.useState(null),Ee=k(xt,2),ke=Ee[0],Te=Ee[1],Ze=i.useState([0,0]),vt=k(Ze,2),dt=vt[0],Le=vt[1],Ie=function(m){Le([m.clientX,m.clientY])},rr=Aa(C,se,oe?dt:ve,G,L,H,Ve),j=k(rr,11),Pt=j[0],nr=j[1],zt=j[2],Nt=j[3],We=j[4],Dt=j[5],ar=j[6],Ae=j[7],$t=j[8],Xe=j[9],we=j[10],Be=La(ye,l,v,y),Ye=k(Be,2),et=Ye[0],Ce=Ye[1],pt=et.has("click"),He=Ce.has("click")||Ce.has("contextMenu"),xe=Fe(function(){Je||we()}),Lt=function(){he.current&&oe&&He&&U(!1)};Ba(C,ve,se,xe,Lt),Z(function(){xe()},[dt,G]),Z(function(){C&&!(L!=null&&L[G])&&xe()},[JSON.stringify(H)]);var or=i.useMemo(function(){var u=Wa(L,o,Xe,oe);return qe(u,z==null?void 0:z(Xe))},[Xe,z,L,o,oe]);i.useImperativeHandle(n,function(){return{nativeElement:Et.current,forceAlign:xe}});var ir=i.useState(0),It=k(ir,2),sr=It[0],ur=It[1],cr=i.useState(0),Wt=k(cr,2),lr=Wt[0],fr=Wt[1],At=function(){if(X&&ve){var m=ve.getBoundingClientRect();ur(m.width),fr(m.height)}},vr=function(){At(),xe()},re=function(m){ft(!1),we(),b==null||b(m)},Bt=function(){return new Promise(function(m){At(),Te(function(){return m})})};Z(function(){ke&&(we(),ke(),Te(null))},[ke]);function _e(u,m,N,I){Re[u]=function(D){var Ot;I==null||I(D),U(m,N);for(var yr=arguments.length,Dr=new Array(yr>1?yr-1:0),Ft=1;Ft<yr;Ft++)Dr[Ft-1]=arguments[Ft];(Ot=Q[u])===null||Ot===void 0||Ot.call.apply(Ot,[Q,D].concat(Dr))}}(pt||He)&&(Re.onClick=function(u){var m;he.current&&He?U(!1):!he.current&&pt&&(Ie(u),U(!0));for(var N=arguments.length,I=new Array(N>1?N-1:0),D=1;D<N;D++)I[D-1]=arguments[D];(m=Q.onClick)===null||m===void 0||m.call.apply(m,[Q,u].concat(I))}),Ha(C,He,ve,se,f,W,er,U);var Oe=et.has("hover"),tt=Ce.has("hover"),rt,ht;Oe&&(_e("onMouseEnter",!0,_,function(u){Ie(u)}),_e("onPointerEnter",!0,_,function(u){Ie(u)}),rt=function(){(C||Je)&&U(!0,_)},oe&&(Re.onMouseMove=function(u){var m;(m=Q.onMouseMove)===null||m===void 0||m.call(Q,u)})),tt&&(_e("onMouseLeave",!1,R),_e("onPointerLeave",!1,R),ht=function(){U(!1,R)}),et.has("focus")&&_e("onFocus",!0,S),Ce.has("focus")&&_e("onBlur",!1,w),et.has("contextMenu")&&(Re.onContextMenu=function(u){var m;he.current&&Ce.has("contextMenu")?U(!1):(Ie(u),U(!0)),u.preventDefault();for(var N=arguments.length,I=new Array(N>1?N-1:0),D=1;D<N;D++)I[D-1]=arguments[D];(m=Q.onContextMenu)===null||m===void 0||m.call.apply(m,[Q,u].concat(I))}),Ge&&(Re.className=qe(Q.className,Ge));var mt=x(x({},Q),Re),Ht={},dr=["onContextMenu","onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur"];dr.forEach(function(u){q[u]&&(Ht[u]=function(){for(var m,N=arguments.length,I=new Array(N),D=0;D<N;D++)I[D]=arguments[D];(m=mt[u])===null||m===void 0||m.call.apply(m,[mt].concat(I)),q[u].apply(q,I)})});var hr=i.cloneElement(Qe,x(x({},mt),Ht)),mr={x:Dt,y:ar},gr=ge?x({},ge!==!0?ge:{}):null;return i.createElement(i.Fragment,null,i.createElement(zr,{disabled:!C,ref:Yt,onResize:vr},i.createElement(pa,{getTriggerDOMNode:it},hr)),i.createElement(Vr.Provider,{value:_t},i.createElement($a,{portal:e,ref:Rt,prefixCls:o,popup:B,className:qe(ne,or),style:ae,target:ve,onMouseEnter:rt,onMouseLeave:ht,onPointerEnter:rt,zIndex:E,open:C,keepDom:Je,fresh:ce,onClick:ot,mask:f,motion:be,maskMotion:J,onVisibleChanged:re,onPrepare:Bt,forceRender:F,autoDestroy:Ke,getPopupContainer:A,align:Xe,arrow:gr,arrowPos:mr,ready:Pt,offsetX:nr,offsetY:zt,offsetR:Nt,offsetB:We,onAlign:xe,stretch:X,targetWidth:sr/Ae,targetHeight:lr/$t})))});return r}const Ya=Fa(gn);export{Ja as A,ma as C,Qa as K,gn as P,zr as R,Ya as T,ka as a,Pa as b,Ca as c,wa as g,Xa as i,Za as u,da as z};
