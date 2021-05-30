(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2770:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Z}});var a=r(5893),n=r(7294),s=r(4184),l=r.n(s),o=r(6265),i=r(8347),c=r(6261);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u=function(e){var t=e.children,r=e.className,n=(0,i.Z)(e,["children","className"]);return(0,a.jsx)("ul",x(x({},n),{},{className:l()("flex md:gap-12 gap-4 md:flex-row flex-col flex-1 md:justify-end justify-center items-center",r),children:t}))};u.Link=function(e){var t=e.children,r=e.text,s=e.icon,o=e.onSetActive,d=e.onSetInactive,p=(0,i.Z)(e,["children","text","icon","onSetActive","onSetInactive"]),x=(0,n.useState)(!1),u=x[0],f=x[1];return(0,a.jsx)("li",{className:l()("text-xs text-center cursor-pointer navlink",{active:u}),children:(0,a.jsxs)(c.rU,m(m({activeClass:"text-red-500",spy:!0,hashSpy:!0,smooth:!0,duration:300,onSetActive:function(e){f(!0),null===o||void 0===o||o(e)},onSetInactive:function(){f(!1),null===d||void 0===d||d()}},p),{},{children:[s&&(0,a.jsx)("p",{className:"material-icons",children:s}),(0,a.jsx)("p",{className:"uppercase",children:t||r||(null===p||void 0===p?void 0:p.to)})]}))})};var f=u;function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(e){var t=e.open,r=e.className,n=e.primaryColor,s=(0,i.Z)(e,["open","className","primaryColor"]);return(0,a.jsxs)("button",g(g({className:"".concat(r," text-red-500 w-14 h-14 focus:outline-none rounded-full bg-").concat(n||"black-50")},s),{},{children:[(0,a.jsx)("span",{className:"sr-only",children:"Open main menu"}),(0,a.jsxs)("div",{className:"block w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-0.5 transform-gpu",children:[(0,a.jsx)("span",{"aria-hidden":"true",className:l()({"md:rotate-0 md:-translate-y-2.5 rotate-45":t,"-translate-y-2.5":!t},"block absolute h-1 w-8 bg-current transform-gpu transition duration-500 ease-in-out")}),(0,a.jsx)("span",{"aria-hidden":"true",className:l()({"md:opacity-100 opacity-0":t},"block absolute h-1 w-8 bg-current transform-gpu transition duration-500 ease-in-out")}),(0,a.jsx)("span",{"aria-hidden":"true",className:l()({"md:rotate-0 md:translate-y-2.5 -rotate-45":t,"translate-y-2.5":!t},"block absolute h-1 w-8 bg-current transform-gpu transition duration-500 ease-in-out")})]})]}))};var j=function(){var e=(0,n.useState)(!1),t=e[0],r=e[1],s=(0,n.useState)("home"),o=s[0],i=s[1],d=["home","portfolio"].includes(o)?"black-50":"gray-50",m=["home","portfolio"].includes(o)?"gray-50":"black-50";return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b,{primaryColor:d,className:l()("fixed z-40 md:left-10 md:top-10 top-4 left-4 ring-red-900 ring-opacity-5",{"ring-4":!t}),open:t,onClick:function(){return r(!t)}}),(0,a.jsx)("nav",{className:l()("fixed z-30 left-0 right-0 top-0\n           bg-".concat(d," border-b-2 border-red-500 text-").concat(m,"\n           flex flex-row\n           transform-gpu overflow-hidden\n           transition-size ease-in-out duration-500"),{"md:h-32 h-full w-full":t,"h-14 w-14 md:translate-x-10 md:translate-y-10  translate-x-4 translate-y-4 rounded-full":!t}),children:(0,a.jsxs)(f,{className:l()("transition-opacity duration-500  px-10",{"opacity-0":!t,"opacity-100 delay-500":t}),children:[(0,a.jsx)(f.Link,{onSetActive:i,to:"home",hashSpy:!1,text:"Home",icon:"home"}),(0,a.jsx)(f.Link,{onSetActive:i,to:"about",offset:-126,text:"About",icon:"info"}),(0,a.jsx)(f.Link,{onSetActive:i,to:"services",text:"Services",icon:"whatshot"}),(0,a.jsx)(f.Link,{onSetActive:i,to:"portfolio",text:"Portfolio",icon:"grid_view"}),(0,a.jsx)(f.Link,{onSetActive:i,to:"contact",text:"Contact",icon:"mail"})]})}),(0,a.jsx)("button",{className:"fixed z-40 hover:bg-red-400 focus:outline-none bottom-12 right-12 rounded-full shadow-lg bg-red-500 h-14 w-14 text-gray-50 flex justify-center items-center",onClick:function(){return c.NY.scrollToTop()},children:(0,a.jsx)("span",{className:"material-icons text-3xl",children:"arrow_upward"})})]})},y=function(e){var t=e.textArr,r=(0,n.useState)(0),s=r[0],o=r[1],i=(0,n.useState)(!1),c=i[0],d=i[1],m=(0,n.useState)(1500),p=m[0],x=m[1],u=function(e){setTimeout((function(){o(e)}),3e3)};return(0,n.useEffect)((function(){d(!0),setTimeout((function(){x(0),s===t.length-1?u(0):u(s+1)}),p)}),[s,t.length,p]),(0,a.jsx)("div",{className:l()("text-2xl text-red-500",{"animate-dim":c}),children:t[s]})},v=r(6926),w=r.n(v);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=function(e){var t=e.options,r=e.children,a=e.as,s=(0,i.Z)(e,["options","children","as"]),l=(0,n.useRef)(null);return(0,n.useEffect)((function(){var e=new(w())((null===l||void 0===l?void 0:l.current)||".about-rellax",t);return function(){null===e||void 0===e||e.destroy()}}),[t]),(0,n.createElement)(a||"div",k(k({},s),{},{ref:l}),r)},P=function(){return(0,a.jsx)("section",{id:"home",className:"bg-black-50 h-screen w-full text-gray-50 pt-20 relative",children:(0,a.jsxs)("div",{className:"bg-profile bg-right-bottom bg-no-repeat bg-contain flex flex-col md:justify-center h-full container",children:[(0,a.jsx)("div",{className:"grid md:grid-cols-6 grid-cols-1 transform-gpu -translate-y-10",children:(0,a.jsx)("div",{className:"md:col-start-2 row-auto col-start-1 md:col-span-3 col-span-6 md:text-left text-center md:ml-5 md:mb-0 mb-5",children:(0,a.jsxs)(O,{options:{speed:-1,center:!0},className:"backdrop-brightness-50 md:backdrop-filter-none backdrop-filter",children:[(0,a.jsxs)("p",{className:"md:text-9xl text-8xl text-gray-500 font-extrabold md:mt-0 mt-10",children:["A",(0,a.jsx)("span",{className:"text-red-900",children:"K"}),"HI",(0,a.jsx)("br",{}),(0,a.jsxs)("span",{className:"text-gray-800",children:["A",(0,a.jsx)("span",{className:"text-yellow-500",children:"K"}),"L"]})]}),(0,a.jsx)(y,{textArr:["WEB DEVELOPER","MOBILE DEVELOPER","3D ARTIST"]})]})})}),(0,a.jsx)("div",{className:"absolute z-20 left-1/2 transform-gpu -translate-x-1/2 bottom-10 text-center",children:(0,a.jsxs)(c.rU,{className:"cursor-pointer",to:"about",spy:!0,smooth:!0,offset:50,duration:500,children:[(0,a.jsx)("h2",{className:"text-red-500 text-2xl mb-4",children:"SEE MORE"}),(0,a.jsx)("span",{className:"animate-bounce material-icons text-6xl",children:"expand_more"})]})})]})})};function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=function(e){var t=e.children,r=e.className,n=e.primaryColor,s=e.secondaryColor,l=(0,i.Z)(e,["children","className","primaryColor","secondaryColor"]);return(0,a.jsxs)("button",E(E({},l),{},{className:"group relative bg-".concat(n||"black-50"," border-2 border-").concat(s||"red-500"," box-content text-").concat(s||"red-500"," shadow-sm px-6 py-2 ").concat(r||""),children:[(0,a.jsx)("span",{className:"top-line bg-".concat(n||"black-50"," absolute -top-0.5 left-0 h-0.5 w-4 md:group-hover:w-0 transition-size duration-500")}),(0,a.jsx)("span",{className:"relative z-10 md:group-hover:text-".concat(n||"black-50"),children:t}),(0,a.jsx)("span",{className:"bottom-line bg-".concat(n||"black-50"," absolute -bottom-0.5 right-0 h-0.5 w-4 md:group-hover:w-0 transition-size duration-500")}),(0,a.jsx)("span",{className:"absolute bg-".concat(s||"red-500"," w-0 h-full left-0 top-0 md:group-hover:w-full z-1 transition-size duration-500")})]}))},z=function(){return(0,a.jsx)("section",{id:"about",children:(0,a.jsx)("div",{className:"about-me bg-red-500 px-12 py-24 text-gray-50",children:(0,a.jsxs)("div",{className:"container mx-auto flex flex-col items-center relative z-0 pt-6 lg:px-48 md:px-20 px-0",children:[(0,a.jsx)(O,{as:"h1",options:{speed:-.225,center:!0},className:"md:text-9xl text-8xl font-extrabold text-red-900 opacity-20 absolute left-50 -top-2 leading-none -z-1",children:"about"}),(0,a.jsxs)("h3",{"data-aos":"fade-in",className:"text-3xl tracking-widest font-extrabold mb-4",children:[(0,a.jsx)("span",{"aria-label":"emoji wave",role:"img",children:"\ud83d\udc4b"})," ","Hi I\u2018m ",(0,a.jsx)("span",{className:"text-yellow-300",children:"Akhil K"})]}),(0,a.jsxs)("p",{"data-aos":"fade-in","data-aos-duration":"1500",className:"text-white md:text-base text-sm text-justify mb-6",children:["An enthusiastic"," ",(0,a.jsx)("span",{className:"text-yellow-300 underline font-bold text-lg",children:"Full stack Javascript developer"})," ","with successful experience in Angular2+, NodeJS, MongoDB, Mysql, HTML & CSS3, Javascript and hands-on experience in React, React Native, AWS, Jest, Wordpress and other CMS. I am an artish who like to create traditional portraits & 3d models. I am a gamer myself and interested in buiding games using Unreal or Unity"]}),(0,a.jsx)(O,{as:"form",options:{speed:-.225},className:"hire-rellax",method:"get",target:"_blank",action:"resume.pdf",children:(0,a.jsxs)(I,{"data-aos":"fade-up",type:"submit",className:"w-100 flex",primaryColor:"red-500",secondaryColor:"gray-50",children:["Checkout my resume","  ",(0,a.jsx)("span",{className:"material-icons-outlined text-base leading-none",children:"file_download"})]})})]})})})},A=function(){var e=function(e){var t=e||{rotate:"rotate(45deg)",translate:"translate3d(-50%, 0, 0)"},r=t.translate,a=t.rotate;return{transform:"".concat(a," ").concat(r),transformOrigin:"left"}};return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"absolute grid grid-cols-6 grid-flow-col -z-1 left-0 right-0 top-0 bottom-0",children:[(0,a.jsx)("div",{className:"col-auto relative z-0 border-gray-300 md:border-l border-opacity-25",children:(0,a.jsx)(O,{options:{speed:1,center:!0},style:e(),className:"z-0 bg-red-500 rounded-md shadow-md absolute bottom-24 transform-gpu -translate-x-1/2 md:h-10 h-8 md:w-10 w-8"})}),(0,a.jsx)("div",{className:"col-auto relative z-0 border-gray-300 md:border-l border-opacity-25"}),(0,a.jsx)("div",{className:"col-auto relative z-0 border-gray-300 md:border-l border-opacity-25",children:(0,a.jsx)(O,{options:{speed:-1,center:!0},style:e(),className:"z-0 bg-red-500 rounded-md shadow-md absolute top-4 md:h-10 h-8 md:w-10 w-8"})}),(0,a.jsx)("div",{className:"col-auto relative z-0 border-gray-300 md:border-l border-opacity-25",children:(0,a.jsx)(O,{style:e(),options:{speed:1,center:!0},className:"md:block hidden z-0 bg-red-500 rounded-md shadow-lg absolute top-2/4 -right-1/4 h-24 w-24"})}),(0,a.jsx)("div",{className:"col-auto relative -z-1 border-gray-300 md:border-l border-opacity-25"}),(0,a.jsx)("div",{className:"col-auto relative -z-1 border-gray-300 md:border-l border-opacity-25 border-r",children:(0,a.jsx)(O,{options:{speed:-1,center:!0},style:{transform:"rotate(65deg)",transformOrigin:"left"},className:"bg-red-500 rounded-md shadow-sm absolute top-24 left-48 h-96 w-96"})})]})})},D=function(e){var t=e.icons;return(0,a.jsx)(a.Fragment,{children:t.map((function(e,t){var r="string"===typeof e?"devicon-".concat(e):"".concat(e.type,"-").concat(e.icon),a=r.split("-")[1],s="string"!==typeof e&&(null===e||void 0===e?void 0:e.link);return(0,n.createElement)(s?"a":"i",{title:a,className:r,key:"".concat(r,"-icon-set-").concat(t),href:s?null===e||void 0===e?void 0:e.link:void 0,target:s?"_blank":void 0})}))})},_=function(e){var t=e.headerIcon,r=e.title,s=e.skillIcons,o=e.gridPosition,i=(0,n.useState)(!1),c=i[0],d=i[1],m=(0,n.useState)(null),p=m[0],x=m[1],u=function(){if(p&&clearTimeout(p),!c){var e=setTimeout((function(){d(!1)}),5e3);x(e)}d(!c)};return(0,a.jsx)("div",{"data-aos":"flip-up",className:"relative group border-2 border-dashed border-black-50 w-full max-w-72 h-80 ".concat(o),children:(0,a.jsx)("div",{className:"h-full w-full bg-gray-50 shadow-xl flex flex-col transition-transform transform-gpu md:group-hover:-translate-x-4 md:group-hover:-translate-y-4 md:group-hover:ring-red-500",children:(0,a.jsxs)("div",{className:l()("flip-card ring-2 ring-black-50 md:group-hover:ring-red-600  md:group-hover:bg-red-500 h-full w-full md:group-hover:text-gray-50",{flipped:c}),children:[(0,a.jsxs)("div",{className:"flip-card-face absolute text-black-50 left-0 right-0 top-0 bottom-0 p-8 md:group-hover:invisible flex flex-col gap-4 items-center justify-center h-full",children:[(0,a.jsx)("div",{className:"w-16 h-16 flex justify-center items-center rounded-full border-red-500 border mt-auto",children:(0,a.jsx)("span",{className:"text-4xl material-icons",children:t})}),(0,a.jsx)("h2",{className:"md:text-2xl text-xl text-center uppercase font-bold border-dotted border-b-2 mb-auto",children:r}),(0,a.jsx)("button",{onClick:u,className:"cursor-pointer md:hidden block mt-auto",children:(0,a.jsx)("span",{className:"material-icons",children:"arrow_forward"})})]}),(0,a.jsxs)("div",{className:"flip-card-face flip-card-face-back absolute left-0 right-0 top-0 bottom-0 p-8 md:group-hover:flex md:hidden flex flex-col justify-center items-center bg-red-500 text-gray-50",children:[(0,a.jsx)("div",{className:"flex-1 w-full grid grid-cols-3 grid-rows-4 gap-4 items-center justify-items-center skillsets text-left text-4xl",children:(0,a.jsx)(D,{icons:s})}),(0,a.jsx)("button",{onClick:u,className:"cursor-pointer md:hidden block mt-3",children:(0,a.jsx)("span",{className:"material-icons",children:"arrow_back"})})]})]})})})},C=function(){return(0,a.jsxs)("section",{id:"services",className:"overflow-hidden bg-gray-50 relative",children:[(0,a.jsx)("h1",{className:"transform-gpu z-0 md:writing-vertical md:rotate-180 md:absolute md:top-36 md:left-4 font-extrabold md:text-10xl text-7xl md:text-left text-center md:text-gray-300 text-gray-700 mb-4",children:"services."}),(0,a.jsxs)("div",{className:"container relative mx-auto min-h-screen z-0 lg:px-20 md:px-10 px-8 md:py-36 py-12",children:[(0,a.jsx)(A,{}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-items-center",children:[(0,a.jsx)(_,{headerIcon:"laptop",title:"Web - Front End",skillIcons:["javascript-plain","typescript-plain","angularjs-plain","react-plain-wordmark","redux-plain","nextjs-plain-wordmark","handlebars-plain-wordmark","html5-plain-wordmark","css3-plain-wordmark","sass-plain","jquery-plain-wordmark"]}),(0,a.jsx)(_,{headerIcon:"construction",title:"Back End",skillIcons:["nodejs-plain-wordmark","express-original","nestjs-plain","php-plain"]}),(0,a.jsx)(_,{headerIcon:"phone_android",title:"Mobile App",skillIcons:["apple-plain","android-plain-wordmark","react-plain-wordmark","swift-plain"]}),(0,a.jsx)(_,{headerIcon:"storage",title:"Database",skillIcons:["mongodb-plain-wordmark","mysql-plain","postgresql-plain-wordmark","sequelize-plain",{type:"icomoon",icon:"knexjs"}]}),(0,a.jsx)(_,{headerIcon:"tune",title:"CMS",skillIcons:["wordpress-plain-wordmark",{type:"icomoon",icon:"strapi"},{type:"icomoon",icon:"cockpit"},{type:"icomoon",icon:"netlify"}]})]})]})]})},T=function(e){var t=e.title,r=e.imageSrc,n=e.index,s=e.description,o=e.stackIcons,i=e.className,c=e.link,d=function(){return(0,a.jsx)("div",{className:l()("tracking-tighter drop-shadow-2xl xl:text-7xl lg:text-7xl md:text-4xl text-2xl uppercase font-extrabold flex md:flex-col flex-row md:gap-0 gap-2",i,{"text-red-500":Number(n)%2!==0,"text-gray-50":Number(n)%2===0}),children:"string"===typeof t?(0,a.jsx)("span",{children:t}):t.map((function(e,t){return(0,a.jsx)("span",{children:e},"titleEl".concat(t))}))})};return(0,a.jsx)("div",{className:"md:h-screen md:bg-transparent bg-gray-50 bg-opacity-5 lg:odd:pl-36 lg:even:pr-36  md:odd:pl-12 md:even:pr-12",children:(0,a.jsx)("div",{className:"py-12 w-full h-full md:px-4 flex items-center",children:(0,a.jsxs)("div",{className:"flex flex-col relative",children:[(0,a.jsxs)(O,{options:{speed:.85,center:!0,breakpoints:[768,1024,1280]},"data-rellax-mobile-speed":"0","data-rellax-xs-speed":"0",className:"md:absolute left-0 xl:top-10 lg:top-3 flex flex-col gap-4 z-10 md:mt-0 mt-6 order-2",children:[(0,a.jsxs)("div",{className:"flex md:flex-col flex-row gap-3",children:[(0,a.jsxs)("h3",{className:l()("font-unica-one md:text-3xl text-xl flex items-center md:gap-2 gap-1 text-opacity-60",{"text-red-500":Number(n)%2!==0,"text-gray-50":Number(n)%2===0}),children:[(0,a.jsx)("span",{className:l()("md:w-4 w-1 h-0 border-b-2 border-opacity-60",{"border-red-500":Number(n)%2!==0,"border-gray-50":Number(n)%2===0})}),n]}),(0,a.jsx)(d,{})]}),s?(0,a.jsx)("p",{className:l()("lg:w-64 md:w-60 text-sm bg-opacity-75",{"text-red-500":Number(n)%2!==0,"text-gray-50":Number(n)%2===0}),children:s}):null,c?(0,a.jsx)("a",{href:c,target:"_blank",className:l()("xl:px-8 xl:py-3 md:px-4 md:py-2 md:no-underline underline cursor-pointer mr-auto",{"md:text-red-500 text-gray-50 md:bg-gray-50 md:hover:bg-gray-200":Number(n)%2!==0,"md:text-gray-50 text-red-500 md:bg-red-500 md:hover:bg-red-600":Number(n)%2===0}),rel:"noreferrer",children:"View project"}):null,o?(0,a.jsx)("div",{className:"md:text-2xl text-xl flex flex-row w-1/4 gap-2 md:order-3 order-2",children:(0,a.jsx)(D,{icons:o})}):null]}),(0,a.jsxs)("div",{"data-aos":"fade-in","data-aos-duration":"1000",className:"w-full flex",children:[(0,a.jsx)("div",{className:"lg:w-64 md:w-60 md:block hidden"}),(0,a.jsx)("div",{className:"flex-1",children:(0,a.jsx)("img",{src:r,alt:"Manwithavan",className:"object-contain w-full h-full"})})]})]})})})},L=function(){return(0,a.jsxs)("section",{id:"portfolio",className:"bg-black-50-dotted text-gray-50 relative",children:[(0,a.jsx)("h1",{className:"z-0 lg:text-10xl md:text-9xl text-7xl md:text-left text-center font-extrabold md:no-underline underline tracking-tighter text-gray-600 opacity-70 drop-shadow-lg md:writing-vertical md:transform-gpu md:rotate-180 md:absolute top-36 lg:left-4 md:left-px",children:(0,a.jsx)("span",{className:"",children:"portfolio."})}),(0,a.jsx)("div",{className:"relative z-10 flex flex-col gap-4 w-full min-h-screen lg:py-10 lg:pb-10 pb-8 px-4",children:(0,a.jsxs)("div",{className:"container mx-auto xl:pl-30 lg:pl-24 flex flex-col lg:gap-0 gap-4 h-1/2 w-full mt-8",children:[(0,a.jsx)(T,{index:"01",title:["MAN WITH","A VAN"],imageSrc:"/img/manwithavan.png",description:"Manwithavan is a web app for the internal assessment of an entire packers and movers company.",stackIcons:["angularjs-plain","typescript-plain","express-original-wordmark","html5-plain-wordmark","sass-plain","mysql-plain-wordmark",{type:"icomoon",icon:"elasticsearch"}],link:"https://manwithavan.com.au"}),(0,a.jsx)(T,{index:"02",title:["GIBLIB"],imageSrc:"/img/giblib.png",description:"Giblib is a streaming service for newest, most-advanced medical courses, surgical videos.",stackIcons:["react-plain","typescript-plain","express-original-wordmark","postgresql-plain-wordmark","sequelize-plain",{type:"icomoon",icon:"elasticsearch"}],link:"https://watch.giblib.com"}),(0,a.jsx)(T,{index:"03",title:["AUDIO","TEASER"],imageSrc:"/img/audioteaser.png",description:"Audioteaser is an application which creates natural-sounding voiceovers.",stackIcons:["amazonwebservices-plain","angularjs-plain","nodejs-plain",{type:"icomoon",icon:"awslambda"},{type:"icomoon",icon:"awscognito"},{type:"icomoon",icon:"awsdynamodb"}],link:"https://audioteaser.com"})]})})]})},M=function(){return(0,a.jsx)("section",{id:"contact",className:"bg-black-50 min-h-screen pt-16 flex flex-col justify-end",children:(0,a.jsx)("div",{className:"bg-gray-50 container mx-auto",children:(0,a.jsxs)("div",{className:"bg-red-500 bg-opacity-5 h-full w-full flex relative pt-10",children:[(0,a.jsx)(O,{as:"h1",options:{speed:.25,center:!0},className:"lg:text-9xl md:text-7xl text-6xl text-red-500 font-extrabold absolute lg:-top-20 md:-top-12 -top-9 left-0 text-center w-full text-stroke-1",children:"contact me"}),(0,a.jsxs)("div",{className:"w-full px-8 text-red-500",children:[(0,a.jsx)("div",{className:"lg:h-56 lg:py-8 py-4 flex",children:(0,a.jsxs)("div",{className:"mt-auto lg:py-0 py-8 flex lg:flex-row flex-col lg:divide-x lg:divide-y-0 divide-y divide-red-500 w-full justify-around",children:[(0,a.jsxs)("div",{className:"flex flex-col items-center w-full px-4 py-4",children:[(0,a.jsx)("h3",{className:"lg:text-4xl text-2xl mb-4",children:"email"}),(0,a.jsxs)("p",{className:"lg:text-2xl text-xl font-unica-one text-red-400 flex flex-row items-center gap-2",children:[(0,a.jsx)("span",{className:"material-icons",children:"mail"}),(0,a.jsx)("a",{className:"underline",href:"mailto:akhilk4k@gmail.com",children:"akhilk4k@gmail.com"})]})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center w-full px-4 py-4",children:[(0,a.jsx)("h3",{className:"lg:text-4xl text-2xl mb-4",children:"address"}),(0,a.jsxs)("p",{className:"lg:text-2xl text-xl font-unica-one text-red-400 flex flex-row items-center gap-2",children:[(0,a.jsx)("span",{className:"material-icons",children:"place"}),(0,a.jsxs)("a",{className:"underline",href:"https://goo.gl/maps/E1JW5Ap1xqeevUi5A",target:"_blank",rel:"noreferrer",children:["Malappuram ",(0,a.jsx)("br",{})," Kerala, India"]})]})]}),(0,a.jsxs)("div",{className:"flex flex-col items-center w-full px-4 py-4",children:[(0,a.jsx)("h3",{className:"lg:text-4xl text-2xl mb-4",children:"phone"}),(0,a.jsxs)("p",{className:"lg:text-2xl text-xl font-unica-one text-red-400 flex flex-row items-center gap-2",children:[(0,a.jsx)("span",{className:"material-icons",children:"phone"}),(0,a.jsx)("a",{className:"underline",href:"tel:+91-9567706055",children:"+91-9567706055"})]})]})]})}),(0,a.jsx)("div",{className:"flex flex-col justify-center lg:h-56 lg:py-8 py-4",children:(0,a.jsx)("div",{className:"lg:mb-10 mb-8 mt-auto flex flex-row justify-center gap-8 text-3xl",children:(0,a.jsx)(D,{icons:[{type:"icomoon",icon:"twitter",link:"https://twitter.com/akhiakl"},{type:"icomoon",icon:"linkedin",link:"https://linkedin.com/in/akhiakl"},{type:"icomoon",icon:"stackoverflow",link:"https://stackoverflow.com/users/story/10472460"},{type:"icomoon",icon:"github",link:"https://github.com/akhiakl"}]})})})]})]})})})};function Z(){return(0,n.useEffect)((function(){var e,t=null===(e=document.getElementsByTagName("body"))||void 0===e?void 0:e[0],r=document.getElementById("preloader");setTimeout((function(){null===t||void 0===t||t.classList.remove("overflow-hidden"),null===r||void 0===r||r.remove()}),2e3)}),[]),(0,a.jsxs)("div",{className:"font-karla subpixel-antialiased",children:[(0,a.jsx)(j,{}),(0,a.jsxs)("main",{children:[(0,a.jsx)(P,{}),(0,a.jsx)(z,{}),(0,a.jsx)(C,{}),(0,a.jsx)(L,{}),(0,a.jsx)(M,{})]})]})}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(2770)}])}},function(e){e.O(0,[909,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);