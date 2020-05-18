(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{190:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(1),a=r(9),o=(r(0),r(229)),c={id:"package_header",title:"Upgrading package header"},i={id:"upgrades/0.11_to_1.0/package_header",title:"Upgrading package header",description:"The `@package` header is described in details [here](/advanced/package_header.md).",source:"@site/docs/upgrades/0.11_to_1.0/package_header.md",permalink:"/docs/next/upgrades/0.11_to_1.0/package_header",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/0.11_to_1.0/package_header.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1589788783,sidebar:"Docs",previous:{title:"Release process",permalink:"/docs/next/development/release"}},l=[{value:"Before",id:"before",children:[]},{value:"After",id:"after",children:[]}],p={rightToc:l};function d(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"@package")," header is described in details ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/advanced/package_header"}),"here"),".\nYou are encouraged to read the details, but the TLDR is:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"For configs mentioned in ",Object(o.b)("inlineCode",{parentName:"li"},"hydra.main()")," (Primary config files), you don't need to do anything."),Object(o.b)("li",{parentName:"ul"},"For configs in config groups, read on.")),Object(o.b)("h3",{id:"before"},"Before"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'}),"db:\n  driver: mysql\n  host: localhost\n  port: 3306\n")),Object(o.b)("h3",{id:"after"},"After"),Object(o.b)("p",null,"The recommended method is to use the special package ",Object(o.b)("inlineCode",{parentName:"p"},"_group_"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'}),"# @package _group_\ndriver: mysql\nhost: localhost\nport: 3306\n")),Object(o.b)("p",null,"If you do not want to change your config structure, use ",Object(o.b)("inlineCode",{parentName:"p"},"@package _global_"),". "),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="db/mysql.yaml"',title:'"db/mysql.yaml"'}),"# @package _global_\ndb:\n  driver: mysql\n  host: localhost\n  port: 3306\n")),Object(o.b)("div",{class:"alert alert--info",role:"alert"},"For configs in config groups, ",Object(o.b)("b",null,"@package _group_")," will become the default in Hydra 1.1 and you will no longer need to specify it. By adding an explicit @package to these configs now, you guarantee that your configs will not break when you upgrade to Hydra 1.1."))}d.isMDXComponent=!0},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),d=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=d(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(r),b=n,m=s["".concat(c,".").concat(b)]||s[b]||u[b]||o;return r?a.a.createElement(m,i({ref:t},p,{components:r})):a.a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);