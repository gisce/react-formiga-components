import{a as o}from"./index-8ee6c85d.js";import{r as s}from"./index-4cbabd78.js";function n(a){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=[];return o.Children.forEach(a,function(r){r==null&&!t.keepEmpty||(Array.isArray(r)?e=e.concat(n(r)):s.isFragment(r)&&r.props?e=e.concat(n(r.props.children,t)):e.push(r))}),e}export{n as t};
