import{i as h,j as V,k as S}from"./index-4e0f86e8.js";import{r as C}from"./index-8ee6c85d.js";function R(e){var a=C.useRef();a.current=e;var u=C.useCallback(function(){for(var t,r=arguments.length,f=new Array(r),n=0;n<r;n++)f[n]=arguments[n];return(t=a.current)===null||t===void 0?void 0:t.call.apply(t,[a].concat(f))},[]);return u}function c(e){return e!==void 0}function F(e,a){var u=a||{},t=u.defaultValue,r=u.value,f=u.onChange,n=u.postState,E=h(function(){return c(r)?r:c(t)?typeof t=="function"?t():t:typeof e=="function"?e():e}),v=V(E,2),s=v[0],l=v[1],i=r!==void 0?r:s,m=n?n(i):i,w=R(f),x=h([i]),g=V(x,2),d=g[0],B=g[1];S(function(){var o=d[0];s!==o&&w(s,o)},[d]),S(function(){c(r)||l(r)},[r]);var b=R(function(o,p){l(o,p),B([i],p)});return[m,b]}const M=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var a=e.getBBox(),u=a.width,t=a.height;if(u||t)return!0}if(e.getBoundingClientRect){var r=e.getBoundingClientRect(),f=r.width,n=r.height;if(f||n)return!0}}return!1};export{R as a,M as i,F as u};
