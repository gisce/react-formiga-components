import{j as g}from"./jsx-runtime-f6d73c06.js";import{s as u}from"./styled-components.browser.esm-f71162e2.js";import{R as i}from"./Field-074a9b5f.js";import{A as n}from"./index-7f6f4650.js";import{T as v}from"./theme-ac0bd082.js";const t=u(n)`
  ${i}
`,d=u(n)`
  ${i}
`;try{t.displayName="RequiredCharInput",t.__docgenInfo={description:"",displayName:"RequiredCharInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}try{d.displayName="RequiredPasswordInput",d.__docgenInfo={description:"",displayName:"RequiredPasswordInput",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}}}catch{}const s=e=>{const{name:o,readOnly:a=!1,isPassword:p=!1,required:r=!1,value:m,onChange:l,tabIndex:c,size:f,onBlur:y}=e,q=r&&!a?t:n,_=r&&!a?d:n.Password,I=r&&!a?v.requiredClass:void 0,h=p?_:q,V={id:o,disabled:a,onChange:C=>{l==null||l(C.target.value)},value:m,className:I,tabIndex:c,maxLength:f,onBlur:y};return g.jsx(h,{...V})};try{s.displayName="CharInput",s.__docgenInfo={description:"",displayName:"CharInput",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},isPassword:{defaultValue:null,description:"",name:"isPassword",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"number"}}}}}catch{}export{s as C};
