import{j as u}from"./jsx-runtime-f6d73c06.js";import{s as f}from"./styled-components.browser.esm-53a58144.js";import{S as a}from"./index-107d9b63.js";const y=f(a)`
  .ant-select-selector {
    background-color: rgb(219, 234, 254) !important;
  }
`,{Option:v}=a,o=l=>{const{selectionValues:e,readOnly:t,required:i,onChange:s,value:r}=l,d=Object.keys(e).map(n=>{const m=e[n];return u.jsx(v,{value:n,children:m},n)}),c=i&&!t?y:a,p=e[r]!==void 0?r:"";return u.jsx(c,{disabled:t,onChange:s,value:p,children:d})};try{o.displayName="SelectionInput",o.__docgenInfo={description:"",displayName:"SelectionInput",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: any) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},selectionValues:{defaultValue:null,description:"",name:"selectionValues",required:!0,type:{name:"{ [key: string]: string; }"}}}}}catch{}export{o as S};