import{r as c}from"./index-8ee6c85d.js";import{L as i,d as n,e as d}from"./index-4e0f86e8.js";const g=(e,t)=>{const o=c.useContext(i),l=c.useMemo(()=>{var s;const a=t||n[e],u=(s=o==null?void 0:o[e])!==null&&s!==void 0?s:{};return Object.assign(Object.assign({},typeof a=="function"?a():a),u||{})},[e,t,o]),r=c.useMemo(()=>{const s=o==null?void 0:o.locale;return o!=null&&o.exist&&!s?n.locale:s},[o]);return[l,r]},m=g;function $(e,t,o){return d({[`${e}-status-success`]:t==="success",[`${e}-status-warning`]:t==="warning",[`${e}-status-error`]:t==="error",[`${e}-status-validating`]:t==="validating",[`${e}-has-feedback`]:o})}const f=(e,t)=>t||e;export{f as a,$ as g,m as u};