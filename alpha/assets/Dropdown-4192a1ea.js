import{j as t}from"./jsx-runtime-f6d73c06.js";import{r as a}from"./index-8ee6c85d.js";import{I as _}from"./index-33abafc5.js";import{D as g}from"./index-420ab320.js";const{Search:x}=_,f=({data:e,searchable:r,onItemClick:s})=>{const i=a.useRef(null),[d,u]=a.useState();a.useEffect(()=>{setTimeout(()=>{var n;return(n=i.current)==null?void 0:n.select()})},[]);const c=w(e),p=r===!0||r==="auto"&&c.length>3,l=a.useCallback(n=>{const o=n==null?void 0:n.trim();if(o&&o.length>0){u(o);return}u(void 0)},[]),y=a.useMemo(()=>d?e.map(n=>({...n,items:n.items.filter(o=>o.name.toLowerCase().includes(d.toLowerCase()))})).filter(n=>n.items.length>0):e,[e,d]);return t.jsxs(D,{children:[p&&t.jsx("div",{style:{padding:5},children:t.jsx(x,{ref:i,onChange:n=>l(n.target.value),onSearch:l,allowClear:!0})}),t.jsx("div",{style:{width:300,overflowY:"auto"},children:y.map((n,o)=>t.jsx(I,{title:n.label,children:n.items.map(m=>t.jsx(j,{item:m,onClick:()=>s(m)},m.id))},`${n.label}-${o}`))})]})},D=({children:e})=>t.jsx("div",{className:"ant-dropdown-menu ant-dropdown-menu-root ant-dropdown-menu-vertical ant-dropdown-menu-light",style:{overflow:"hidden"},children:e}),j=({item:e,onClick:r})=>t.jsx("li",{className:"ant-dropdown-menu-item ant-dropdown-menu-item-only-child",role:"menuitem",onClick:r,children:t.jsx("span",{className:"ant-dropdown-menu-title-content",children:e.name})}),I=({title:e,children:r})=>t.jsxs("li",{role:"presentation",className:"ant-dropdown-menu-item-group",children:[t.jsx("div",{role:"presentation",className:"ant-dropdown-menu-item-group-title",title:e,children:e}),t.jsx("ul",{role:"group",className:"ant-dropdown-menu-item-group-list",children:r})]}),w=e=>e.reduce((r,s)=>[...r,...s.items],[]);try{f.displayName="DropdownMenu",f.__docgenInfo={description:"",displayName:"DropdownMenu",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"DropdownMenuGroup[]"}},searchable:{defaultValue:null,description:"",name:"searchable",required:!0,type:{name:'boolean | "auto"'}},onItemClick:{defaultValue:null,description:"",name:"onItemClick",required:!0,type:{name:"(event: any) => void"}}}}}catch{}try{w.displayName="flattenDropdownItems",w.__docgenInfo={description:"",displayName:"flattenDropdownItems",props:{}}}catch{}const h=a.memo(({data:e=[],onItemClick:r,disabled:s=!1,searchable:i="auto",children:d,trigger:u=["click"]})=>{const[c,p]=a.useState(!1);return t.jsx(g,{dropdownRender:()=>t.jsx(f,{searchable:i,data:e,onItemClick:l=>{p(!1),r==null||r(l)}}),disabled:s||e.length===0,trigger:u,onOpenChange:l=>{p(l)},open:c,destroyPopupOnHide:!0,children:d})});h.displayName="Dropdown";try{h.displayName="Dropdown",h.__docgenInfo={description:"",displayName:"Dropdown",props:{trigger:{defaultValue:null,description:"",name:"trigger",required:!1,type:{name:'("click" | "hover")[]'}},onItemClick:{defaultValue:null,description:"",name:"onItemClick",required:!1,type:{name:"((item: DropdownMenuItem) => void)"}},data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"DropdownMenuGroup[]"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},searchable:{defaultValue:null,description:"",name:"searchable",required:!1,type:{name:'boolean | "auto"'}}}}}catch{}export{h as D};
