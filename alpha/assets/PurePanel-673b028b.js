import{r as s}from"./index-8ee6c85d.js";import{u as L}from"./isVisible-f24c26d5.js";import{f as K,C as F}from"./index-7b090294.js";var e={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(t){var E=t.keyCode;if(t.altKey&&!t.ctrlKey||t.metaKey||E>=e.F1&&E<=e.F12)return!1;switch(E){case e.ALT:case e.CAPS_LOCK:case e.CONTEXT_MENU:case e.CTRL:case e.DOWN:case e.END:case e.ESC:case e.HOME:case e.INSERT:case e.LEFT:case e.MAC_FF_META:case e.META:case e.NUMLOCK:case e.NUM_CENTER:case e.PAGE_DOWN:case e.PAGE_UP:case e.PAUSE:case e.PRINT_SCREEN:case e.RIGHT:case e.SHIFT:case e.UP:case e.WIN_KEY:case e.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(t){if(t>=e.ZERO&&t<=e.NINE||t>=e.NUM_ZERO&&t<=e.NUM_MULTIPLY||t>=e.A&&t<=e.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&t===0)return!0;switch(t){case e.SPACE:case e.QUESTION_MARK:case e.NUM_PLUS:case e.NUM_MINUS:case e.NUM_PERIOD:case e.NUM_DIVISION:case e.SEMICOLON:case e.DASH:case e.EQUALS:case e.COMMA:case e.PERIOD:case e.SLASH:case e.APOSTROPHE:case e.SINGLE_QUOTE:case e.OPEN_SQUARE_BRACKET:case e.BACKSLASH:case e.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};function p(a){return t=>s.createElement(K,{theme:{token:{motion:!1,zIndexPopupBase:0}}},s.createElement(a,Object.assign({},t)))}const g=(a,t,E,o)=>p(c=>{const{prefixCls:T,style:U}=c,N=s.useRef(null),[I,A]=s.useState(0),[P,R]=s.useState(0),[O,C]=L(!1,{value:c.open}),{getPrefixCls:l}=s.useContext(F),_=l(t||"select",T);s.useEffect(()=>{if(C(!0),typeof ResizeObserver<"u"){const S=new ResizeObserver(r=>{const n=r[0].target;A(n.offsetHeight+8),R(n.offsetWidth)}),u=setInterval(()=>{var r;const n=E?`.${E(_)}`:`.${_}-dropdown`,M=(r=N.current)===null||r===void 0?void 0:r.querySelector(n);M&&(clearInterval(u),S.observe(M))},10);return()=>{clearInterval(u),S.disconnect()}}},[]);let i=Object.assign(Object.assign({},c),{style:Object.assign(Object.assign({},U),{margin:0}),open:O,visible:O,getPopupContainer:()=>N.current});o&&(i=o(i));const f={paddingBottom:I,position:"relative",minWidth:P};return s.createElement("div",{ref:N,style:f},s.createElement(a,Object.assign({},i)))}),W=g;export{e as K,W as g,p as w};