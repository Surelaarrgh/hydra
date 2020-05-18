(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{212:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),o=(r(0),r(229)),i={id:"release",title:"Release process",sidebar_label:"Release process"},c={id:"development/release",title:"Release process",description:"The release process may be automated in the future.",source:"@site/docs/development/release.md",permalink:"/docs/next/development/release",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/development/release.md",version:"next",lastUpdatedBy:"Omry Yadan",lastUpdatedAt:1575499860,sidebar_label:"Release process",sidebar:"Docs",previous:{title:"Contributing",permalink:"/docs/next/development/contributing"},next:{title:"Upgrading package header",permalink:"/docs/next/upgrades/0.11_to_1.0/package_header"}},p=[],l={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The release process may be automated in the future."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Checkout master"),Object(o.b)("li",{parentName:"ul"},"Update the Hydra version in ",Object(o.b)("inlineCode",{parentName:"li"},"hydra/__init__.py")),Object(o.b)("li",{parentName:"ul"},"Update NEWS.md with towncrier"),Object(o.b)("li",{parentName:"ul"},"Create a pip package for hydra-core: ",Object(o.b)("inlineCode",{parentName:"li"},"python setup.py sdist bdist_wheel")),Object(o.b)("li",{parentName:"ul"},"Upload pip package: ",Object(o.b)("inlineCode",{parentName:"li"},"python -m twine upload dist/*"))))}s.isMDXComponent=!0},229:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),s=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),b=n,m=u["".concat(i,".").concat(b)]||u[b]||d[b]||o;return r?a.a.createElement(m,c({ref:t},l,{components:r})):a.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=b;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);