import{j as r}from"./jsx-runtime-ffb262ed.js";import{s as o}from"./styled-components.browser.esm-06c7d463.js";import{C as d}from"./index-1f86069e.js";const m=o(d)`
  .ant-checkbox-inner {
    background-color: #dbeafe;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #089cff;
  }
`,n=o.div`
  display: flex;
  flex-direction: row;
`;try{n.displayName="CheckboxContainer",n.__docgenInfo={description:"",displayName:"CheckboxContainer",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const t=e=>{const{required:u,readOnly:l,value:i,onChange:a,...c}=e,s=u&&!l?m:d;return r.jsx(n,{"data-testid":"checkbox_container",children:r.jsx(s,{...c,"data-testid":"checkbox_input",disabled:l,checked:i,onChange:p=>{a==null||a(p.target.checked)}})})};try{t.displayName="BooleanInput",t.__docgenInfo={description:"",displayName:"BooleanInput",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: boolean) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}}}}}catch{}export{t as B};
