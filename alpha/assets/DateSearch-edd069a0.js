import{j as c}from"./jsx-runtime-f6d73c06.js";import{d as a,D as l}from"./index-c776dc32.js";import{d as n}from"./DateSearch.types-d0dadd73.js";const d=t=>t&&[t[0]?a(t[0]):null,t[1]?a(t[1]):null],u=t=>{const r=t[0]?t[0].format(n):null,e=t[1]?t[1].format(n):null;return[r,e]},p="DD/MM/YYYY",o=t=>{const{value:r,onChange:e}=t,i=d(r);return c.jsx(l.RangePicker,{"data-datepicker-id":"datepicker-input",allowEmpty:[!0,!0],format:p,value:i,onChange:s=>{e==null||e(u(s))}})};try{o.displayName="DateSearch",o.__docgenInfo={description:"",displayName:"DateSearch",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"[string, string]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: [string, string]) => void)"}}}}}catch{}export{o as D};
