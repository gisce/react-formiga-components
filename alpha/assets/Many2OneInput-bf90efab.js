import{j as c}from"./jsx-runtime-f6d73c06.js";import{r as o}from"./index-8ee6c85d.js";import{M as p}from"./Many2OneDummy-da27af59.js";const d=l=>{const{value:e,onChange:u,onSearchForResult:t,onShowResultDetails:s,searching:r=!1,...m}=l,a=e?{id:e.id||void 0,name:e.name||void 0}:{id:void 0,name:""},n=o.useRef(a.name);return o.useEffect(()=>{n.current=e&&e.name||""},[e]),c.jsx(p,{...m,searching:r,value:n.current,onChange:i=>{if(e&&e.id){n.current="",u({id:void 0,name:""});return}n.current=i,u({id:void 0,name:i})},disableFolderButton:!(a&&a.id!==void 0),disableSearchButton:r,onClickFolderButton:()=>{s(a)},onClickSearchButton:()=>{t(n.current)},onEnterPressed:()=>{a.id!==void 0||r||t(n.current)},onElementLostFocus:()=>{a.id!==void 0||r||t(n.current)}})};try{d.displayName="Many2OneInput",d.__docgenInfo={description:"",displayName:"Many2OneInput",props:{locale:{defaultValue:null,description:"",name:"locale",required:!1,type:{name:"enum",value:[{value:'"en_US"'},{value:'"es_ES"'},{value:'"ca_ES"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"ItemPair"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: ItemPair) => void)"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},readOnly:{defaultValue:null,description:"",name:"readOnly",required:!1,type:{name:"boolean"}},required:{defaultValue:null,description:"",name:"required",required:!1,type:{name:"boolean"}},tabIndex:{defaultValue:null,description:"",name:"tabIndex",required:!1,type:{name:"number"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"((event: FocusEvent<HTMLInputElement, Element>) => void)"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},onShowResultDetails:{defaultValue:null,description:"",name:"onShowResultDetails",required:!1,type:{name:"((item: ItemPair) => void)"}},onSearchForResult:{defaultValue:null,description:"",name:"onSearchForResult",required:!1,type:{name:"((name: string) => void)"}},searching:{defaultValue:null,description:"",name:"searching",required:!1,type:{name:"boolean"}}}}}catch{}export{d as M};
