import{j as Q}from"./jsx-runtime-f6d73c06.js";import{u as _t}from"./LocaleContext-02870291.js";import"./FormigaConfig-4316f169.js";import{r,a}from"./index-8ee6c85d.js";import{s as Rt,S as Dt}from"./SelectAllRecordsRow-cad32b3e.js";import{u as Ht,R as At,C as ze}from"./row-35453298.js";import{_ as U}from"./assertThisInitialized-4fab7dd0.js";import{A as nt}from"./index-9c320998.js";import{L as Ge}from"./LeftOutlined-7fdbb18c.js";import{R as Je}from"./RightOutlined-ec7eb7b5.js";import{q as Lt,i as he,c as A,n as G,_ as qt,g as Vt,b as Kt,u as f,O as Wt,o as Qe,m as Xt,P as Ft,k as Ut,C as Gt,V as Jt}from"./index-916df0c6.js";import{u as Ye}from"./isVisible-c2160674.js";import{K as H}from"./KeyCode-6413d982.js";import{p as Qt}from"./PurePanel-5fd7e678.js";import{b as Yt}from"./Compact-11981144.js";import{S as Se}from"./index-850ee6f4.js";import{i as Zt,a as kt,g as ei,b as ti,c as ii,d as ni}from"./index-b67453a2.js";import{u as ri}from"./useLocale-7291e1d6.js";import{S as ai}from"./index-fce1f0c7.js";function oi(){const[,e]=r.useReducer(t=>t+1,0);return e}function li(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const t=r.useRef({}),s=oi(),c=Ht();return Lt(()=>{const i=c.subscribe(h=>{t.current=h,e&&s()});return()=>c.unsubscribe(i)},[]),t.current}var ci={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"}}]},name:"double-left",theme:"outlined"};const si=ci;var ui=function(t,s){return r.createElement(nt,U({},t,{ref:s,icon:si}))};const Ze=r.forwardRef(ui);var mi={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"}}]},name:"double-right",theme:"outlined"};const di=mi;var gi=function(t,s){return r.createElement(nt,U({},t,{ref:s,icon:di}))};const ke=r.forwardRef(gi);var pi={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"},bi=["10","20","50","100"],vi=function(t){var s=t.pageSizeOptions,c=s===void 0?bi:s,i=t.locale,h=t.changeSize,B=t.pageSize,z=t.goButton,$=t.quickGo,y=t.rootPrefixCls,g=t.selectComponentClass,M=t.selectPrefixCls,S=t.disabled,m=t.buildOptionText,I=a.useState(""),v=he(I,2),p=v[0],u=v[1],j=function(){return!p||Number.isNaN(p)?void 0:Number(p)},_=typeof m=="function"?m:function(P){return"".concat(P," ").concat(i.items_per_page)},L=function(d){h==null||h(Number(d))},q=function(d){u(d.target.value)},R=function(d){z||p===""||(u(""),!(d.relatedTarget&&(d.relatedTarget.className.indexOf("".concat(y,"-item-link"))>=0||d.relatedTarget.className.indexOf("".concat(y,"-item"))>=0))&&($==null||$(j())))},x=function(d){p!==""&&(d.keyCode===H.ENTER||d.type==="click")&&(u(""),$==null||$(j()))},Z=function(){return c.some(function(d){return d.toString()===B.toString()})?c:c.concat([B.toString()]).sort(function(d,k){var W=Number.isNaN(Number(d))?0:Number(d),X=Number.isNaN(Number(k))?0:Number(k);return W-X})},N="".concat(y,"-options");if(!h&&!$)return null;var V=null,K=null,J=null;if(h&&g){var w=Z().map(function(P,d){return a.createElement(g.Option,{key:d,value:P.toString()},_(P))});V=a.createElement(g,{disabled:S,prefixCls:M,showSearch:!1,className:"".concat(N,"-size-changer"),optionLabelProp:"children",popupMatchSelectWidth:!1,value:(B||c[0]).toString(),onChange:L,getPopupContainer:function(d){return d.parentNode},"aria-label":i.page_size,defaultOpen:!1},w)}return $&&(z&&(J=typeof z=="boolean"?a.createElement("button",{type:"button",onClick:x,onKeyUp:x,disabled:S,className:"".concat(N,"-quick-jumper-button")},i.jump_to_confirm):a.createElement("span",{onClick:x,onKeyUp:x},z)),K=a.createElement("div",{className:"".concat(N,"-quick-jumper")},i.jump_to,a.createElement("input",{disabled:S,type:"text",value:p,onChange:q,onKeyUp:x,onBlur:R,"aria-label":i.page}),i.page,J)),a.createElement("li",{className:N},V,K)},ce=function(t){var s,c=t.rootPrefixCls,i=t.page,h=t.active,B=t.className,z=t.showTitle,$=t.onClick,y=t.onKeyPress,g=t.itemRender,M="".concat(c,"-item"),S=A(M,"".concat(M,"-").concat(i),(s={},G(s,"".concat(M,"-active"),h),G(s,"".concat(M,"-disabled"),!i),s),B),m=function(){$(i)},I=function(u){y(u,$,i)},v=g(i,"page",a.createElement("a",{rel:"nofollow"},i));return v?a.createElement("li",{title:z?String(i):null,className:S,onClick:m,onKeyDown:I,tabIndex:0},v):null},fi=function(t,s,c){return c};function et(){}function tt(e){var t=Number(e);return typeof t=="number"&&!Number.isNaN(t)&&isFinite(t)&&Math.floor(t)===t}function Y(e,t,s){var c=typeof e>"u"?t:e;return Math.floor((s-1)/c)+1}var hi=function(t){var s,c=t.prefixCls,i=c===void 0?"rc-pagination":c,h=t.selectPrefixCls,B=h===void 0?"rc-select":h,z=t.className,$=t.selectComponentClass,y=t.current,g=t.defaultCurrent,M=g===void 0?1:g,S=t.total,m=S===void 0?0:S,I=t.pageSize,v=t.defaultPageSize,p=v===void 0?10:v,u=t.onChange,j=u===void 0?et:u,_=t.hideOnSinglePage,L=t.showPrevNextJumpers,q=L===void 0?!0:L,R=t.showQuickJumper,x=t.showLessItems,Z=t.showTitle,N=Z===void 0?!0:Z,V=t.onShowSizeChange,K=V===void 0?et:V,J=t.locale,w=J===void 0?pi:J,P=t.style,d=t.totalBoundaryShowSizeChanger,k=d===void 0?50:d,W=t.disabled,X=t.simple,Ne=t.showTotal,Ce=t.showSizeChanger,ct=t.pageSizeOptions,Ee=t.itemRender,ee=Ee===void 0?fi:Ee,Oe=t.jumpPrevIcon,Ie=t.jumpNextIcon,st=t.prevIcon,ut=t.nextIcon,mt=a.useRef(null),dt=Ye(10,{value:I,defaultValue:p}),je=he(dt,2),O=je[0],gt=je[1],pt=Ye(1,{value:y,defaultValue:M,postState:function(l){return Math.max(1,Math.min(l,Y(void 0,O,m)))}}),we=he(pt,2),o=we[0],Be=we[1],bt=a.useState(o),Me=he(bt,2),te=Me[0],se=Me[1];r.useEffect(function(){se(o)},[o]);var Te=Math.max(1,o-(x?3:5)),_e=Math.min(Y(void 0,O,m),o+(x?3:5));function ue(n,l){var b=n||a.createElement("button",{type:"button","aria-label":l,className:"".concat(i,"-item-link")});return typeof n=="function"&&(b=a.createElement(n,qt({},t))),b}function Re(n){var l=n.target.value,b=Y(void 0,O,m),F;return l===""?F=l:Number.isNaN(Number(l))?F=te:l>=b?F=b:F=Number(l),F}function vt(n){return tt(n)&&n!==o&&tt(m)&&m>0}var ft=m>O?R:!1;function ht(n){(n.keyCode===H.UP||n.keyCode===H.DOWN)&&n.preventDefault()}function De(n){var l=Re(n);switch(l!==te&&se(l),n.keyCode){case H.ENTER:T(l);break;case H.UP:T(l-1);break;case H.DOWN:T(l+1);break}}function St(n){T(Re(n))}function Ct(n){var l=Y(n,O,m),b=o>l&&l!==0?l:o;gt(n),se(b),K==null||K(o,n),Be(b),j==null||j(b,n)}function T(n){if(vt(n)&&!W){var l=Y(void 0,O,m),b=n;return n>l?b=l:n<1&&(b=1),b!==te&&se(b),Be(b),j==null||j(b,O),b}return o}var me=o>1,de=o<Y(void 0,O,m),$t=Ce??m>k;function He(){me&&T(o-1)}function Ae(){de&&T(o+1)}function Le(){T(Te)}function qe(){T(_e)}function ie(n,l){if(n.key==="Enter"||n.charCode===H.ENTER||n.keyCode===H.ENTER){for(var b=arguments.length,F=new Array(b>2?b-2:0),fe=2;fe<b;fe++)F[fe-2]=arguments[fe];l.apply(void 0,F)}}function xt(n){ie(n,He)}function yt(n){ie(n,Ae)}function Pt(n){ie(n,Le)}function zt(n){ie(n,qe)}function Nt(n){var l=ee(n,"prev",ue(st,"prev page"));return a.isValidElement(l)?a.cloneElement(l,{disabled:!me}):l}function Et(n){var l=ee(n,"next",ue(ut,"next page"));return a.isValidElement(l)?a.cloneElement(l,{disabled:!de}):l}function ge(n){(n.type==="click"||n.keyCode===H.ENTER)&&T(te)}var Ve=null,Ot=Qt(t,{aria:!0,data:!0}),It=Ne&&a.createElement("li",{className:"".concat(i,"-total-text")},Ne(m,[m===0?0:(o-1)*O+1,o*O>m?m:o*O])),Ke=null,C=Y(void 0,O,m);if(_&&m<=O)return null;var E=[],ne={rootPrefixCls:i,onClick:T,onKeyPress:ie,showTitle:N,itemRender:ee,page:-1},jt=o-1>0?o-1:0,wt=o+1<C?o+1:C,pe=R&&R.goButton,re=pe,We=null;X&&(pe&&(typeof pe=="boolean"?re=a.createElement("button",{type:"button",onClick:ge,onKeyUp:ge},w.jump_to_confirm):re=a.createElement("span",{onClick:ge,onKeyUp:ge},pe),re=a.createElement("li",{title:N?"".concat(w.jump_to).concat(o,"/").concat(C):null,className:"".concat(i,"-simple-pager")},re)),We=a.createElement("li",{title:N?"".concat(o,"/").concat(C):null,className:"".concat(i,"-simple-pager")},a.createElement("input",{type:"text",value:te,disabled:W,onKeyDown:ht,onKeyUp:De,onChange:De,onBlur:St,size:3}),a.createElement("span",{className:"".concat(i,"-slash")},"/"),C));var D=x?1:2;if(C<=3+D*2){C||E.push(a.createElement(ce,U({},ne,{key:"noPager",page:1,className:"".concat(i,"-item-disabled")})));for(var ae=1;ae<=C;ae+=1)E.push(a.createElement(ce,U({},ne,{key:ae,page:ae,active:o===ae})))}else{var Bt=x?w.prev_3:w.prev_5,Mt=x?w.next_3:w.next_5,Xe=ee(Te,"jump-prev",ue(Oe,"prev page")),Fe=ee(_e,"jump-next",ue(Ie,"next page"));q&&(Ve=Xe?a.createElement("li",{title:N?Bt:null,key:"prev",onClick:Le,tabIndex:0,onKeyDown:Pt,className:A("".concat(i,"-jump-prev"),G({},"".concat(i,"-jump-prev-custom-icon"),!!Oe))},Xe):null,Ke=Fe?a.createElement("li",{title:N?Mt:null,key:"next",onClick:qe,tabIndex:0,onKeyDown:zt,className:A("".concat(i,"-jump-next"),G({},"".concat(i,"-jump-next-custom-icon"),!!Ie))},Fe):null);var $e=Math.max(1,o-D),xe=Math.min(o+D,C);o-1<=D&&(xe=1+D*2),C-o<=D&&($e=C-D*2);for(var oe=$e;oe<=xe;oe+=1)E.push(a.createElement(ce,U({},ne,{key:oe,page:oe,active:o===oe})));if(o-1>=D*2&&o!==1+2&&(E[0]=a.cloneElement(E[0],{className:A("".concat(i,"-item-after-jump-prev"),E[0].props.className)}),E.unshift(Ve)),C-o>=D*2&&o!==C-2){var Ue=E[E.length-1];E[E.length-1]=a.cloneElement(Ue,{className:A("".concat(i,"-item-before-jump-next"),Ue.props.className)}),E.push(Ke)}$e!==1&&E.unshift(a.createElement(ce,U({},ne,{key:1,page:1}))),xe!==C&&E.push(a.createElement(ce,U({},ne,{key:C,page:C})))}var be=Nt(jt);if(be){var ye=!me||!C;be=a.createElement("li",{title:N?w.prev_page:null,onClick:He,tabIndex:ye?null:0,onKeyDown:xt,className:A("".concat(i,"-prev"),G({},"".concat(i,"-disabled"),ye)),"aria-disabled":ye},be)}var ve=Et(wt);if(ve){var le,Pe;X?(le=!de,Pe=me?0:null):(le=!de||!C,Pe=le?null:0),ve=a.createElement("li",{title:N?w.next_page:null,onClick:Ae,tabIndex:Pe,onKeyDown:yt,className:A("".concat(i,"-next"),G({},"".concat(i,"-disabled"),le)),"aria-disabled":le},ve)}var Tt=A(i,z,(s={},G(s,"".concat(i,"-simple"),X),G(s,"".concat(i,"-disabled"),W),s));return a.createElement("ul",U({className:Tt,style:P,ref:mt},Ot),It,be,X?We:E,ve,a.createElement(vi,{locale:w,rootPrefixCls:i,disabled:W,selectComponentClass:$,selectPrefixCls:B,changeSize:$t?Ct:null,pageSize:O,pageSizeOptions:ct,quickGo:ft?T:null,goButton:re}))};const rt=e=>r.createElement(Se,Object.assign({},e,{showSearch:!0,size:"small"})),at=e=>r.createElement(Se,Object.assign({},e,{showSearch:!0,size:"middle"}));rt.Option=Se.Option;at.Option=Se.Option;const Si=e=>{const{componentCls:t}=e;return{[`${t}-disabled`]:{"&, &:hover":{cursor:"not-allowed",[`${t}-item-link`]:{color:e.colorTextDisabled,cursor:"not-allowed"}},"&:focus-visible":{cursor:"not-allowed",[`${t}-item-link`]:{color:e.colorTextDisabled,cursor:"not-allowed"}}},[`&${t}-disabled`]:{cursor:"not-allowed",[`${t}-item`]:{cursor:"not-allowed","&:hover, &:active":{backgroundColor:"transparent"},a:{color:e.colorTextDisabled,backgroundColor:"transparent",border:"none",cursor:"not-allowed"},"&-active":{borderColor:e.colorBorder,backgroundColor:e.itemActiveBgDisabled,"&:hover, &:active":{backgroundColor:e.itemActiveBgDisabled},a:{color:e.itemActiveColorDisabled}}},[`${t}-item-link`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:hover, &:active":{backgroundColor:"transparent"},[`${t}-simple&`]:{backgroundColor:"transparent","&:hover, &:active":{backgroundColor:"transparent"}}},[`${t}-simple-pager`]:{color:e.colorTextDisabled},[`${t}-jump-prev, ${t}-jump-next`]:{[`${t}-item-link-icon`]:{opacity:0},[`${t}-item-ellipsis`]:{opacity:1}}},[`&${t}-simple`]:{[`${t}-prev, ${t}-next`]:{[`&${t}-disabled ${t}-item-link`]:{"&:hover, &:active":{backgroundColor:"transparent"}}}}}},Ci=e=>{const{componentCls:t}=e;return{[`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]:{height:e.itemSizeSM,lineHeight:f(e.itemSizeSM)},[`&${t}-mini ${t}-item`]:{minWidth:e.itemSizeSM,height:e.itemSizeSM,margin:0,lineHeight:f(e.calc(e.itemSizeSM).sub(2).equal())},[`&${t}-mini:not(${t}-disabled) ${t}-item:not(${t}-item-active)`]:{backgroundColor:"transparent",borderColor:"transparent","&:hover":{backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive}},[`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]:{minWidth:e.itemSizeSM,height:e.itemSizeSM,margin:0,lineHeight:f(e.itemSizeSM)},[`&${t}-mini:not(${t}-disabled)`]:{[`${t}-prev, ${t}-next`]:{[`&:hover ${t}-item-link`]:{backgroundColor:e.colorBgTextHover},[`&:active ${t}-item-link`]:{backgroundColor:e.colorBgTextActive},[`&${t}-disabled:hover ${t}-item-link`]:{backgroundColor:"transparent"}}},[`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]:{backgroundColor:"transparent",borderColor:"transparent","&::after":{height:e.itemSizeSM,lineHeight:f(e.itemSizeSM)}},[`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]:{height:e.itemSizeSM,marginInlineEnd:0,lineHeight:f(e.itemSizeSM)},[`&${t}-mini ${t}-options`]:{marginInlineStart:e.paginationMiniOptionsMarginInlineStart,"&-size-changer":{top:e.miniOptionsSizeChangerTop},"&-quick-jumper":{height:e.itemSizeSM,lineHeight:f(e.itemSizeSM),input:Object.assign(Object.assign({},ei(e)),{width:e.paginationMiniQuickJumperInputWidth,height:e.controlHeightSM})}}}},$i=e=>{const{componentCls:t}=e;return{[`
    &${t}-simple ${t}-prev,
    &${t}-simple ${t}-next
    `]:{height:e.itemSizeSM,lineHeight:f(e.itemSizeSM),verticalAlign:"top",[`${t}-item-link`]:{height:e.itemSizeSM,backgroundColor:"transparent",border:0,"&:hover":{backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive},"&::after":{height:e.itemSizeSM,lineHeight:f(e.itemSizeSM)}}},[`&${t}-simple ${t}-simple-pager`]:{display:"inline-block",height:e.itemSizeSM,marginInlineEnd:e.marginXS,input:{boxSizing:"border-box",height:"100%",marginInlineEnd:e.marginXS,padding:`0 ${f(e.paginationItemPaddingInline)}`,textAlign:"center",backgroundColor:e.itemInputBg,border:`${f(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadius,outline:"none",transition:`border-color ${e.motionDurationMid}`,color:"inherit","&:hover":{borderColor:e.colorPrimary},"&:focus":{borderColor:e.colorPrimaryHover,boxShadow:`${f(e.inputOutlineOffset)} 0 ${f(e.controlOutlineWidth)} ${e.controlOutline}`},"&[disabled]":{color:e.colorTextDisabled,backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,cursor:"not-allowed"}}}}},xi=e=>{const{componentCls:t}=e;return{[`${t}-jump-prev, ${t}-jump-next`]:{outline:0,[`${t}-item-container`]:{position:"relative",[`${t}-item-link-icon`]:{color:e.colorPrimary,fontSize:e.fontSizeSM,opacity:0,transition:`all ${e.motionDurationMid}`,"&-svg":{top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,margin:"auto"}},[`${t}-item-ellipsis`]:{position:"absolute",top:0,insetInlineEnd:0,bottom:0,insetInlineStart:0,display:"block",margin:"auto",color:e.colorTextDisabled,fontFamily:"Arial, Helvetica, sans-serif",letterSpacing:e.paginationEllipsisLetterSpacing,textAlign:"center",textIndent:e.paginationEllipsisTextIndent,opacity:1,transition:`all ${e.motionDurationMid}`}},"&:hover":{[`${t}-item-link-icon`]:{opacity:1},[`${t}-item-ellipsis`]:{opacity:0}}},[`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]:{marginInlineEnd:e.marginXS},[`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]:{display:"inline-block",minWidth:e.itemSize,height:e.itemSize,color:e.colorText,fontFamily:e.fontFamily,lineHeight:`${f(e.itemSize)}`,textAlign:"center",verticalAlign:"middle",listStyle:"none",borderRadius:e.borderRadius,cursor:"pointer",transition:`all ${e.motionDurationMid}`},[`${t}-prev, ${t}-next`]:{fontFamily:"Arial, Helvetica, sans-serif",outline:0,button:{color:e.colorText,cursor:"pointer",userSelect:"none"},[`${t}-item-link`]:{display:"block",width:"100%",height:"100%",padding:0,fontSize:e.fontSizeSM,textAlign:"center",backgroundColor:"transparent",border:`${f(e.lineWidth)} ${e.lineType} transparent`,borderRadius:e.borderRadius,outline:"none",transition:`all ${e.motionDurationMid}`},[`&:hover ${t}-item-link`]:{backgroundColor:e.colorBgTextHover},[`&:active ${t}-item-link`]:{backgroundColor:e.colorBgTextActive},[`&${t}-disabled:hover`]:{[`${t}-item-link`]:{backgroundColor:"transparent"}}},[`${t}-slash`]:{marginInlineEnd:e.paginationSlashMarginInlineEnd,marginInlineStart:e.paginationSlashMarginInlineStart},[`${t}-options`]:{display:"inline-block",marginInlineStart:e.margin,verticalAlign:"middle","&-size-changer.-select":{display:"inline-block",width:"auto"},"&-quick-jumper":{display:"inline-block",height:e.controlHeight,marginInlineStart:e.marginXS,lineHeight:f(e.controlHeight),verticalAlign:"top",input:Object.assign(Object.assign(Object.assign({},ti(e)),ii(e,{borderColor:e.colorBorder,hoverBorderColor:e.colorPrimaryHover,activeBorderColor:e.colorPrimary,activeShadow:e.activeShadow})),{"&[disabled]":Object.assign({},ni(e)),width:e.calc(e.controlHeightLG).mul(1.25).equal(),height:e.controlHeight,boxSizing:"border-box",margin:0,marginInlineStart:e.marginXS,marginInlineEnd:e.marginXS})}}}},yi=e=>{const{componentCls:t}=e;return{[`${t}-item`]:{display:"inline-block",minWidth:e.itemSize,height:e.itemSize,marginInlineEnd:e.marginXS,fontFamily:e.fontFamily,lineHeight:f(e.calc(e.itemSize).sub(2).equal()),textAlign:"center",verticalAlign:"middle",listStyle:"none",backgroundColor:"transparent",border:`${f(e.lineWidth)} ${e.lineType} transparent`,borderRadius:e.borderRadius,outline:0,cursor:"pointer",userSelect:"none",a:{display:"block",padding:`0 ${f(e.paginationItemPaddingInline)}`,color:e.colorText,"&:hover":{textDecoration:"none"}},[`&:not(${t}-item-active)`]:{"&:hover":{transition:`all ${e.motionDurationMid}`,backgroundColor:e.colorBgTextHover},"&:active":{backgroundColor:e.colorBgTextActive}},"&-active":{fontWeight:e.fontWeightStrong,backgroundColor:e.itemActiveBg,borderColor:e.colorPrimary,a:{color:e.colorPrimary},"&:hover":{borderColor:e.colorPrimaryHover},"&:hover a":{color:e.colorPrimaryHover}}}}},Pi=e=>{const{componentCls:t}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},Kt(e)),{"ul, ol":{margin:0,padding:0,listStyle:"none"},"&::after":{display:"block",clear:"both",height:0,overflow:"hidden",visibility:"hidden",content:'""'},[`${t}-total-text`]:{display:"inline-block",height:e.itemSize,marginInlineEnd:e.marginXS,lineHeight:f(e.calc(e.itemSize).sub(2).equal()),verticalAlign:"middle"}}),yi(e)),xi(e)),$i(e)),Ci(e)),Si(e)),{[`@media only screen and (max-width: ${e.screenLG}px)`]:{[`${t}-item`]:{"&-after-jump-prev, &-before-jump-next":{display:"none"}}},[`@media only screen and (max-width: ${e.screenSM}px)`]:{[`${t}-options`]:{display:"none"}}}),[`&${e.componentCls}-rtl`]:{direction:"rtl"}}},zi=e=>{const{componentCls:t}=e;return{[`${t}:not(${t}-disabled)`]:{[`${t}-item`]:Object.assign({},Wt(e)),[`${t}-jump-prev, ${t}-jump-next`]:{"&:focus-visible":Object.assign({[`${t}-item-link-icon`]:{opacity:1},[`${t}-item-ellipsis`]:{opacity:0}},Qe(e))},[`${t}-prev, ${t}-next`]:{[`&:focus-visible ${t}-item-link`]:Object.assign({},Qe(e))}}}},ot=e=>Object.assign({itemBg:e.colorBgContainer,itemSize:e.controlHeight,itemSizeSM:e.controlHeightSM,itemActiveBg:e.colorBgContainer,itemLinkBg:e.colorBgContainer,itemActiveColorDisabled:e.colorTextDisabled,itemActiveBgDisabled:e.controlItemBgActiveDisabled,itemInputBg:e.colorBgContainer,miniOptionsSizeChangerTop:0},Zt(e)),lt=e=>Xt(e,{inputOutlineOffset:0,paginationMiniOptionsMarginInlineStart:e.calc(e.marginXXS).div(2).equal(),paginationMiniQuickJumperInputWidth:e.calc(e.controlHeightLG).mul(1.1).equal(),paginationItemPaddingInline:e.calc(e.marginXXS).mul(1.5).equal(),paginationEllipsisLetterSpacing:e.calc(e.marginXXS).div(2).equal(),paginationSlashMarginInlineStart:e.marginXXS,paginationSlashMarginInlineEnd:e.marginSM,paginationEllipsisTextIndent:"0.13em"},kt(e)),Ni=Vt("Pagination",e=>{const t=lt(e);return[Pi(t),zi(t)]},ot),Ei=e=>{const{componentCls:t}=e;return{[`${t}${t}-bordered${t}-disabled:not(${t}-mini)`]:{"&, &:hover":{[`${t}-item-link`]:{borderColor:e.colorBorder}},"&:focus-visible":{[`${t}-item-link`]:{borderColor:e.colorBorder}},[`${t}-item, ${t}-item-link`]:{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,[`&:hover:not(${t}-item-active)`]:{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,a:{color:e.colorTextDisabled}},[`&${t}-item-active`]:{backgroundColor:e.itemActiveBgDisabled}},[`${t}-prev, ${t}-next`]:{"&:hover button":{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder,color:e.colorTextDisabled},[`${t}-item-link`]:{backgroundColor:e.colorBgContainerDisabled,borderColor:e.colorBorder}}},[`${t}${t}-bordered:not(${t}-mini)`]:{[`${t}-prev, ${t}-next`]:{"&:hover button":{borderColor:e.colorPrimaryHover,backgroundColor:e.itemBg},[`${t}-item-link`]:{backgroundColor:e.itemLinkBg,borderColor:e.colorBorder},[`&:hover ${t}-item-link`]:{borderColor:e.colorPrimary,backgroundColor:e.itemBg,color:e.colorPrimary},[`&${t}-disabled`]:{[`${t}-item-link`]:{borderColor:e.colorBorder,color:e.colorTextDisabled}}},[`${t}-item`]:{backgroundColor:e.itemBg,border:`${f(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,[`&:hover:not(${t}-item-active)`]:{borderColor:e.colorPrimary,backgroundColor:e.itemBg,a:{color:e.colorPrimary}},"&-active":{borderColor:e.colorPrimary}}}}},Oi=Ft(["Pagination","bordered"],e=>{const t=lt(e);return[Ei(t)]},ot);var Ii=globalThis&&globalThis.__rest||function(e,t){var s={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&t.indexOf(c)<0&&(s[c]=e[c]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,c=Object.getOwnPropertySymbols(e);i<c.length;i++)t.indexOf(c[i])<0&&Object.prototype.propertyIsEnumerable.call(e,c[i])&&(s[c[i]]=e[c[i]]);return s};const ji=e=>{const{prefixCls:t,selectPrefixCls:s,className:c,rootClassName:i,style:h,size:B,locale:z,selectComponentClass:$,responsive:y,showSizeChanger:g}=e,M=Ii(e,["prefixCls","selectPrefixCls","className","rootClassName","style","size","locale","selectComponentClass","responsive","showSizeChanger"]),{xs:S}=li(y),[,m]=Ut(),{getPrefixCls:I,direction:v,pagination:p={}}=r.useContext(Gt),u=I("pagination",t),[j,_,L]=Ni(u),q=g??p.showSizeChanger,R=r.useMemo(()=>{const P=r.createElement("span",{className:`${u}-item-ellipsis`},"•••"),d=r.createElement("button",{className:`${u}-item-link`,type:"button",tabIndex:-1},v==="rtl"?r.createElement(Je,null):r.createElement(Ge,null)),k=r.createElement("button",{className:`${u}-item-link`,type:"button",tabIndex:-1},v==="rtl"?r.createElement(Ge,null):r.createElement(Je,null)),W=r.createElement("a",{className:`${u}-item-link`},r.createElement("div",{className:`${u}-item-container`},v==="rtl"?r.createElement(ke,{className:`${u}-item-link-icon`}):r.createElement(Ze,{className:`${u}-item-link-icon`}),P)),X=r.createElement("a",{className:`${u}-item-link`},r.createElement("div",{className:`${u}-item-container`},v==="rtl"?r.createElement(Ze,{className:`${u}-item-link-icon`}):r.createElement(ke,{className:`${u}-item-link-icon`}),P));return{prevIcon:d,nextIcon:k,jumpPrevIcon:W,jumpNextIcon:X}},[v,u]),[x]=ri("Pagination",Jt),Z=Object.assign(Object.assign({},x),z),N=Yt(B),V=N==="small"||!!(S&&!N&&y),K=I("select",s),J=A({[`${u}-mini`]:V,[`${u}-rtl`]:v==="rtl",[`${u}-bordered`]:m.wireframe},p==null?void 0:p.className,c,i,_,L),w=Object.assign(Object.assign({},p==null?void 0:p.style),h);return j(r.createElement(r.Fragment,null,m.wireframe&&r.createElement(Oi,{prefixCls:u}),r.createElement(hi,Object.assign({},R,M,{style:w,prefixCls:u,selectPrefixCls:K,className:J,selectComponentClass:$||(V?rt:at),locale:Z,showSizeChanger:q}))))},wi=ji,Bi=e=>{const{total:t,initialPage:s,initialPageSize:c,currentPageSelectedCount:i,totalSelectedCount:h,onRequestPageChange:B,onSelectAllGlobalRecords:z,totalRowsLoading:$}=e,{t:y}=_t(),[g,M]=r.useState(s),[S,m]=r.useState(c),I=r.useMemo(()=>(g-1)*S+1,[g,S]),v=r.useMemo(()=>Math.min(g*S,t),[g,S,t]),p=r.useCallback((R,x)=>{M(R),x!==void 0&&m(x),B(R,x)},[B]),u=r.useMemo(()=>t===void 0?null:t===0?y("no_results"):y("summary").replace("{from}",I==null?void 0:I.toString()).replace("{to}",v==null?void 0:v.toString()).replace("{total}",t==null?void 0:t.toString()),[t,I,v,y]),j=r.useMemo(()=>({total:t,pageSize:S,current:g,onChange:p,showSizeChanger:!0,showLessItems:!0,locale:{items_per_page:y("items_per_page")}}),[t,S,g,p,y]),_=r.useMemo(()=>z?Rt({currentPageSelectedCount:i,currentPageSize:S,totalRecordsCount:t,totalSelectedCount:h,currentPage:g}):!1,[z,i,S,t,h,g]),L=r.useMemo(()=>({shouldShow:_,currentPageSelectedCount:i,totalRecordsCount:t,totalSelectedCount:h,onSelectAllRecords:z}),[_,i,t,h,z]),q=_?8:12;return Q.jsxs(At,{align:"bottom",className:"pb-4",wrap:!1,children:[Q.jsx(ze,{span:q,children:Q.jsx(wi,{...j})}),_&&Q.jsx(ze,{span:8,className:"text-center",children:Q.jsx(Dt,{...L})}),Q.jsx(ze,{span:q,className:"text-right",children:$?Q.jsx(ai,{}):u})]})},it=r.memo(Bi);try{it.displayName="PaginationHeader",it.__docgenInfo={description:"",displayName:"PaginationHeader",props:{total:{defaultValue:null,description:"Total number of records across all pages",name:"total",required:!0,type:{name:"number"}},initialPage:{defaultValue:null,description:"Initial page number",name:"initialPage",required:!0,type:{name:"number"}},initialPageSize:{defaultValue:null,description:"Initial number of items per page",name:"initialPageSize",required:!0,type:{name:"number"}},currentPageSelectedCount:{defaultValue:null,description:"Number of selected records in the current page",name:"currentPageSelectedCount",required:!0,type:{name:"number"}},totalSelectedCount:{defaultValue:null,description:"Total number of selected records across all pages",name:"totalSelectedCount",required:!0,type:{name:"number"}},onRequestPageChange:{defaultValue:null,description:"Callback when page or page size changes",name:"onRequestPageChange",required:!0,type:{name:"(page: number, pageSize?: number | undefined) => void"}},onSelectAllGlobalRecords:{defaultValue:null,description:"Optional callback to select all records across all pages",name:"onSelectAllGlobalRecords",required:!1,type:{name:"(() => Promise<void>)"}},totalRowsLoading:{defaultValue:null,description:"Whether the total number of rows is loading",name:"totalRowsLoading",required:!0,type:{name:"boolean"}}}}}catch{}export{it as P,li as a,wi as b,oi as u};
