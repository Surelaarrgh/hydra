(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{59:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));n(0);var r=n(93);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={id:"release",title:"Release process",sidebar_label:"Release process"},p=[],c={rightToc:p},l="wrapper";function u(e){var t=e.components,n=o(e,["components"]);return Object(r.b)(l,a({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The release process is work in progress and will be automated in the future."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Checkout master"),Object(r.b)("li",{parentName:"ul"},"Update the Hydra version in ",Object(r.b)("inlineCode",{parentName:"li"},"hydra/__init__.py")),Object(r.b)("li",{parentName:"ul"},"Update NEWS.rst with towncrier"),Object(r.b)("li",{parentName:"ul"},"Create a pip package for hydra-core: ",Object(r.b)("inlineCode",{parentName:"li"},"python setup.py sdist bdist_wheel")),Object(r.b)("li",{parentName:"ul"},"Upload pip package: python -m ",Object(r.b)("inlineCode",{parentName:"li"},"twine upload dist/*"))))}u.isMDXComponent=!0},93:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r),o=a.a.createContext({}),i=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},p=function(e){var t=i(e.components);return a.a.createElement(o.Provider,{value:t},e.children)};var c="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}(e,["components","mdxType","originalType","parentName"]),u=i(n),s=r,f=u[p+"."+s]||u[s]||l[s]||o;return n?a.a.createElement(f,Object.assign({},{ref:t},c,{components:n})):a.a.createElement(f,Object.assign({},{ref:t},c))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);