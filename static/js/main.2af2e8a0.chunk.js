(this["webpackJsonpowners-app"]=this["webpackJsonpowners-app"]||[]).push([[0],{27:function(e,t,s){},28:function(e,t,s){},35:function(e,t,s){"use strict";s.r(t);var c=s(1),n=s.n(c),a=s(20),i=s.n(a),l=(s(27),s(10)),r=s(6),j=s(2),h=[{id:1,name:"Savannah Nguyen",endDate:"1/15/12",profits:"$328.85",losses:"$779.58",phone:"(983) 555-0123"},{id:2,name:"Jenny Wilson",endDate:"8/30/14",profits:"$948.55",losses:"$589.99",phone:"(980) 555-0129"},{id:3,name:"Annette Black",endDate:"5/30/14",profits:"$778.35",losses:"$948.55",phone:"(978) 555-0121"},{id:4,name:"Kathryn Murphy",endDate:"11/7/16",profits:"$169.43",losses:"$202.87",phone:"(912) 555-0107"}],o=(s(28),s(22)),d=s(4),b=s.n(d),O=s(0),x=function(e){var t=e.newOwners;return Object(O.jsx)(O.Fragment,{children:t.map((function(e){var t=e.id,s=e.fullName,c=e.endDate,n=e.profits,a=e.losses,i=e.phone;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("article",{className:"owner",children:Object(O.jsxs)("div",{className:b.a.owner_line,children:[Object(O.jsx)("h3",{children:s}),Object(O.jsx)("span",{children:c}),Object(O.jsx)("span",{className:b.a.profits,children:"$".concat(Math.abs(n))}),Object(O.jsx)("span",{className:b.a.losses,children:"$".concat(Math.abs(a))}),Object(O.jsx)("span",{children:i})]})},t)})}))})},p=function(e){var t=e.owners;return Object(O.jsx)(O.Fragment,{children:t.map((function(e){var t=e.id,s=e.name,c=e.endDate,n=e.profits,a=e.losses,i=e.phone;return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("article",{className:"owner",children:Object(O.jsxs)("div",{className:b.a.owner_line,children:[Object(O.jsx)("h3",{children:s}),Object(O.jsx)("span",{children:c}),Object(O.jsx)("span",{className:b.a.profits,children:n}),Object(O.jsx)("span",{className:b.a.losses,children:a}),Object(O.jsx)("span",{children:i})]})},t)})}))})},u=function(e){var t=e.owners,s=Object(c.useState)(!1),n=Object(l.a)(s,2),a=n[0],i=n[1],r=Object(c.useState)(localStorage.getItem("listOfOwners")?JSON.parse(localStorage.getItem("listOfOwners")):[]),j=Object(l.a)(r,2),h=j[0],d=j[1],u=Object(c.useState)(""),m=Object(l.a)(u,2),f=m[0],_=m[1],v=Object(c.useState)(""),w=Object(l.a)(v,2),g=w[0],N=w[1],z=Object(c.useState)(null),y=Object(l.a)(z,2),S=y[0],H=y[1],D=Object(c.useState)(null),L=Object(l.a)(D,2),A=L[0],M=L[1],C=Object(c.useState)(""),F=Object(l.a)(C,2),k=F[0],X=F[1];return Object(c.useEffect)((function(){localStorage.setItem("listOfOwners",JSON.stringify(h))}),[h]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("div",{className:b.a.owners_heading,children:[!a&&Object(O.jsx)("h2",{children:"Overview"}),a&&Object(O.jsxs)("form",{action:"",className:b.a.add_form,onSubmit:function(e){e.preventDefault();var t={id:(new Date).getTime().toString(),fullName:f,endDate:g,profits:S,losses:A,phone:k};d([].concat(Object(o.a)(h),[t])),_(""),N(""),H(""),M(""),X(""),i(!1)},children:[Object(O.jsxs)("div",{className:b.a.iputs_wrapper,children:[Object(O.jsxs)("label",{htmlFor:"fullName",children:[Object(O.jsx)("span",{children:"Full name: "}),Object(O.jsx)("input",{type:"text",id:"fullName",name:"fullName",value:f,placeholder:"Name Surname",onChange:function(e){return _(e.target.value)}})]}),Object(O.jsxs)("label",{htmlFor:"endDate",children:[Object(O.jsx)("span",{children:"End date: "}),Object(O.jsx)("input",{type:"text",id:"endDate",name:"endDate",value:g,placeholder:"00/00/00",onChange:function(e){return N(e.target.value)},required:!0})]})]}),Object(O.jsxs)("div",{className:b.a.iputs_wrapper,children:[Object(O.jsxs)("label",{htmlFor:"profits",children:[Object(O.jsx)("span",{children:"Profits: "}),Object(O.jsx)("input",{type:"text",id:"profits",name:"profits",value:S,onChange:function(e){return H(e.target.value)},required:!0})]}),Object(O.jsxs)("label",{htmlFor:"losses",children:[Object(O.jsx)("span",{children:"Losses: "}),Object(O.jsx)("input",{type:"text",id:"losses",name:"losses",value:A,onChange:function(e){return M(e.target.value)},required:!0})]}),Object(O.jsxs)("label",{htmlFor:"phone",children:[Object(O.jsx)("span",{children:"Phone: "}),Object(O.jsx)("input",{type:"text",id:"phone",name:"phone",value:k,placeholder:"+7 XXX XXX XX XX",onChange:function(e){return X(e.target.value)},required:!0,pattern:"^\\+7{1,2}(\\s|-|\u2012|)\\d{3}(\\s|-|\u2012|)\\d{3}(\\s|-|\u2012|)\\d{2}(\\s|-|\u2012|)\\d{2}$"})]})]}),Object(O.jsxs)("div",{className:b.a.form_buttons_wrapper,children:[Object(O.jsx)("button",{type:"submit",children:"Add owner"}),Object(O.jsx)("button",{type:"button",onClick:function(){return i(!a)},children:"Hide"})]})]}),!a&&Object(O.jsxs)("div",{className:b.a.button_wrapper,children:[Object(O.jsx)("button",{className:b.a.some_btn,type:"submit",title:"functionality is not yet available",children:"..."}),Object(O.jsx)("button",{className:b.a.add_btn,onClick:function(){return i(!a)},children:"Add"})]})]}),Object(O.jsxs)("p",{className:b.a.lines_heading,children:[Object(O.jsx)("span",{children:"Owner"}),Object(O.jsx)("span",{children:"End date"}),Object(O.jsx)("span",{children:"Profits"}),Object(O.jsx)("span",{children:"Losses"}),Object(O.jsx)("span",{children:"Phone"})]}),Object(O.jsx)(p,{owners:t}),Object(O.jsx)(x,{newOwners:h})]})},m=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Cloud page is under construction"})})},f=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Sketch page is under construction"})})},_=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Experiments page is under construction"})})},v=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Security page is under construction"})})},w=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Ownership page is under construction"})})},g=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"A/B test page is under construction"})})},N=function(){return Object(O.jsx)("div",{children:Object(O.jsx)("h2",{children:"Colors page is under construction"})})},z=function(){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h1",{children:"Error Page"}),Object(O.jsx)(r.b,{to:"/",children:"Back Home"})]})},y=s(5),S=s.n(y),H=s.p+"static/media/logo.c304b31b.svg",D=function(){return Object(O.jsxs)("aside",{className:S.a.main_menu,children:[Object(O.jsxs)("div",{className:S.a.aside_top,children:[Object(O.jsxs)("div",{className:S.a.logo_container,children:[Object(O.jsx)("a",{href:"index",children:Object(O.jsx)("img",{src:H,alt:"logo"})}),Object(O.jsx)("hr",{})]}),Object(O.jsxs)("ul",{className:S.a.items_list,children:[Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/",style:{textDecoration:"none"},children:Object(O.jsxs)("a",{href:"ss",className:S.a.list_item,children:[Object(O.jsx)("svg",{width:"22",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{opacity:".5",d:"M21.5 18.4a3 3 0 01-1 2.2l-4.3 4.3-4.3-4.3a3.1 3.1 0 010-4.4l1-.7c.3-.2.8-.3 1.2-.3l1.1.2 1 .7a3 3 0 011-.6c.4-.2.7-.3 1.1-.3a3 3 0 012.3 1 3.1 3.1 0 01.9 2.2zm-1.5 0c0-.2 0-.5-.2-.7l-.3-.5c-.2-.1-.3-.3-.5-.3l-.7-.2c-.4 0-.8.2-1.1.5l-1 1-1-1c0-.1-.3-.3-.5-.3l-.6-.2c-.2 0-.4 0-.6.2-.2 0-.4.2-.5.3l-.4.5-.1.7c0 .4.1.8.5 1.1l3.2 3.3 3.3-3.3c.3-.3.5-.7.5-1.1zm-18 5H12l1.5 1.6H.5V4h6c0-.4 0-.8.2-1.2l.7-1 .9-.6L9.5 1c.4 0 .8 0 1.1.2l1 .7c.3.2.5.6.6 1 .2.3.3.7.3 1h6v9.5h-.2a7 7 0 00-1.4.2V5.5h-1.4v3h-12v-3H2v18zm3-18V7h9V5.5h-3V4c0-.3-.1-.6-.3-.8-.1-.3-.4-.5-.6-.6l-.6-.1-.6.1c-.3.1-.5.3-.7.6L8 4v1.5H5z",fill:"#fff"})}),Object(O.jsx)("p",{children:"Overview"})]})})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/cloud",style:{textDecoration:"none"},children:Object(O.jsxs)("a",{href:"ss",className:S.a.list_item,children:[Object(O.jsx)("svg",{width:"25",height:"21",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{opacity:".5",d:"M11.5 14L10 15.5H7a5.8 5.8 0 01-4.3-1.7c-.5-.6-1-1.2-1.2-2-.4-.7-.5-1.4-.5-2.3a5.8 5.8 0 011.7-4.2c.6-.5 1.2-1 2-1.3A5.7 5.7 0 018 3.6a7 7 0 012.4-2.2L12 .7a6.6 6.6 0 017.2 2.7c.5.6.8 1.3 1 2l-.7.6-.6.6a5.3 5.3 0 00-3.3-4.2 5.3 5.3 0 00-3.3-.2 5.3 5.3 0 00-3.2 2.6l-.3.6A7.6 7.6 0 007 5c-.7 0-1.2.2-1.8.4-.5.2-1 .5-1.4 1a4.4 4.4 0 00-1.3 3.1c0 .7 0 1.2.3 1.8a4.7 4.7 0 002.4 2.4c.6.2 1.1.3 1.8.3h4.5zM25 9a2.3 2.3 0 01-.7 1.6L15.9 19 11.5 20l1-4.4L21 7.2l.7-.5a2.4 2.4 0 012.6.5l.5.7.2 1zm-1.5 0c0-.3-.1-.5-.3-.6a.9.9 0 00-.6-.3 1 1 0 00-.3 0l-.3.3-8 8-.5 1.7 1.6-.4 8.1-8.1.3-.6z",fill:"#fff"})}),Object(O.jsx)("p",{children:"Cloud"})]})})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/sketch",style:{textDecoration:"none"},children:Object(O.jsxs)("a",{href:"ss",className:S.a.list_item,children:[Object(O.jsx)("svg",{width:"24",height:"22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{opacity:".5",d:"M23.3 21.6h-1.5a4.4 4.4 0 00-1.3-3.2c-.4-.4-1-.7-1.5-1-.5-.2-1.1-.3-1.7-.3a4.4 4.4 0 00-3.2 1.3 4.5 4.5 0 00-1.3 3.2h-1.5a5.8 5.8 0 01.9-3.2 6 6 0 012.4-2.2 4.5 4.5 0 116.8-5.4 4.5 4.5 0 01-1.5 5.4 5.8 5.8 0 012.5 2.2 5.8 5.8 0 01.9 3.2zm-3-9c0-.5-.1-.8-.3-1.2-.1-.4-.3-.7-.6-1-.3-.2-.6-.5-1-.6-.3-.2-.7-.2-1.1-.2-.4 0-.8 0-1.2.2l-1 .6-.6 1-.2 1.2c0 .4 0 .8.2 1.1l.6 1c.3.3.6.5 1 .6.4.2.7.3 1.2.3.4 0 .8-.1 1.1-.3.4-.1.7-.3 1-.6.3-.3.5-.6.6-1 .2-.3.3-.7.3-1.1zM12.8 8H8.4l2.5 8.8a9.6 9.6 0 00-1 1.8L.8 7.3 7 .6h8.6l6.3 6.7-.4.5-1-.7-1.2-.5h.1L15.2 2h-1.5l1.7 4.4A5.6 5.6 0 0012.8 8zm-.4-6h-2.2L8.5 6.6H14L12.4 2zm-5 0L3 6.6h4L8.8 2H7.3zm1.9 13.8L7.1 8H3l6.3 7.8z",fill:"#fff"})}),Object(O.jsx)("p",{children:"Sketch"})]})})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/experiments",style:{textDecoration:"none"},children:Object(O.jsxs)("a",{href:"ss",className:S.a.list_item,children:[Object(O.jsx)("svg",{width:"24",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{opacity:".5",d:"M20.4 20.4L23 23l-1 1-2.7-2.6-2.7 2.7-1-1 2.6-2.7-2.6-2.7 1-1 2.7 2.6 2.7-2.7 1 1.1-2.6 2.7zm-4.8 0L12.9 23l1.1 1.1H3.2a2.2 2.2 0 01-1.6-.7 2.3 2.3 0 01-.3-2.7L7.9 9.1a1 1 0 00.1-.4V1.6H6.5V.1h9v1.5H14v7.3l.2.2 2.6 4.7-1 1-3-5a2.5 2.5 0 01-.3-1.1V1.6h-3v7a2.2 2.2 0 01-.3 1.2l-3.9 6.8H14l-1 1 2.6 2.8z",fill:"#fff"})}),Object(O.jsx)("p",{children:"Experiments"})]})})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/security",style:{textDecoration:"none"},children:Object(O.jsxs)("a",{href:"ss",className:S.a.list_item,children:[Object(O.jsx)("svg",{width:"24",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{opacity:".5",d:"M1.9 5v4.6a10.3 10.3 0 001.2 5l1.3 2.1a20 20 0 005.7 5.2 3.2 3.2 0 00-.2 1.6A31.5 31.5 0 015.3 20a19.4 19.4 0 01-3.5-4.7A12.7 12.7 0 01.4 9.6v-6A24.6 24.6 0 004 3.3a10.4 10.4 0 003.4-1.4A7.2 7.2 0 0111.6.7c.8 0 1.5 0 2.2.2.7.2 1.4.5 2 1a9.9 9.9 0 003.4 1.4 13.2 13.2 0 003.7.3v6h-1.5V5.1a11.8 11.8 0 01-4-.9 24.5 24.5 0 01-3-1.4 7.3 7.3 0 00-2.8-.7c-.5 0-1 0-1.4.2l-1.4.5a55.8 55.8 0 00-3 1.4l-1.7.6-2.2.3zm21.7 18.1a1.4 1.4 0 01-.5 1l-.5.4-.5.1h-8.9a1.4 1.4 0 01-1-.4c-.2-.2-.3-.3-.3-.5l-.2-.6.2-.9a18.2 18.2 0 011.4-2.9 58.4 58.4 0 012-3.9v-2.8H14v-1.5h7.5v1.5h-1.5v2.8a25 25 0 001.2 2.3 49.5 49.5 0 012.5 5.4zm-5.2-10.5h-1.5v3.2L14.7 20h5.9l-2.2-4.3v-3.2z",fill:"#fff"})}),Object(O.jsx)("p",{children:"Security"})]})})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/ownership",style:{textDecoration:"none"},children:Object(O.jsxs)("a",{href:"ss",className:S.a.list_item,children:[Object(O.jsx)("svg",{width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{opacity:".5",d:"M13 .1a12 12 0 110 24 12 12 0 110-24zm9.5 7.5A9.8 9.8 0 0020 4.3a10 10 0 00-3.6-2 10 10 0 011.4 2.5 16.7 16.7 0 01.8 2.8h3.9zm1 4.5c0-1-.2-2-.5-3h-4.2a24.6 24.6 0 010 6H23c.3-1 .5-2 .5-3zM13 22.6a2 2 0 001-.3l1-.8a22.7 22.7 0 001.8-3.8l.2-1H9a15.4 15.4 0 001.2 3.6c.2.5.5.8.8 1.2l.9.8c.3.2.7.3 1 .3zm4.3-7.5a24.6 24.6 0 000-6H8.7a24.5 24.5 0 000 6h8.6zm-14.8-3c0 1 .1 2 .4 3h4.3a24.5 24.5 0 010-6H2.9c-.3 1-.4 2-.4 3zM13 1.6a2 2 0 00-1 .4l-1 .8c-.3.3-.6.7-.8 1.2a22.7 22.7 0 00-1 2.6l-.3 1H17A15.4 15.4 0 0015.7 4c-.2-.5-.4-.9-.7-1.2a4 4 0 00-1-.8 2 2 0 00-1-.4zm-3.5.6A10 10 0 006 4.3a10.8 10.8 0 00-2.5 3.3h3.9a24.6 24.6 0 01.8-2.8 11.7 11.7 0 011.3-2.6zm-6 14.4A9.8 9.8 0 006 20a10 10 0 003.5 2 10 10 0 01-1.3-2.5 16.7 16.7 0 01-.8-2.9h-4zm13 5.5A10 10 0 0020 20a10.8 10.8 0 002.5-3.4h-4a24.7 24.7 0 01-.7 2.9 11.7 11.7 0 01-1.4 2.6z",fill:"#fff"})}),Object(O.jsx)("p",{children:"Ownership"})]})})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/ab_test",style:{textDecoration:"none"},children:Object(O.jsxs)("a",{href:"ss",className:S.a.list_item,children:[Object(O.jsx)("svg",{width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{opacity:".5",d:"M13 .7a12 12 0 110 24 12 12 0 110-24zm0 22.5a10.2 10.2 0 007.4-3 11 11 0 002.7-4.7 10.2 10.2 0 00-2.7-10.2 11 11 0 00-4.6-2.7 9.8 9.8 0 00-4.3-.3v20.8l1.5.1z",fill:"#fff"})}),Object(O.jsx)("p",{children:"A/B Test"})]})})}),Object(O.jsx)("li",{children:Object(O.jsx)(r.b,{to:"/colors",style:{textDecoration:"none"},children:Object(O.jsxs)("a",{href:"ss",className:S.a.list_item,children:[Object(O.jsx)("svg",{width:"25",height:"25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{opacity:".5",d:"M13 .7a12 12 0 110 24 2.9 2.9 0 01-2.1-.9 3 3 0 01-1-2 4.1 4.1 0 01.8-2.5l.4-.6a3 3 0 00-1.5-4.2 2.8 2.8 0 00-2-.2l-.6.3a16.2 16.2 0 00-1.2.7l-.8.3a6 6 0 01-1 .1 2.9 2.9 0 01-2.1-.9 3 3 0 01-1-2 12 12 0 0112-12zm0 22.5a10.2 10.2 0 007.4-3 11 11 0 002.7-4.7 10.2 10.2 0 00-2.7-10.2 11 11 0 00-4.6-2.7A10.2 10.2 0 005.6 5.3a11 11 0 00-2.8 4.6l-.3 2.8a1.5 1.5 0 00.4 1l.5.4.6.1a2.7 2.7 0 001.4-.4l.6-.3.7-.4.8-.3a4.4 4.4 0 014.2 1.2 4.5 4.5 0 01.9 5 7 7 0 01-.4.7l-.3.6a3 3 0 00-.4 1.4 1.5 1.5 0 00.4 1l.5.4.6.1zm-6-15a1.5 1.5 0 011 .5c.2 0 .3.2.4.4v.6a1.5 1.5 0 01-.4 1c0 .2-.3.3-.4.4l-.6.1a1.5 1.5 0 01-1-.4l-.4-.5-.1-.6a1.5 1.5 0 01.4-1l.5-.4H7zm4.5-3a1.5 1.5 0 011 .5c.2 0 .3.2.4.4v.6a1.5 1.5 0 01-.4 1c0 .2-.3.3-.4.4l-.6.1a1.5 1.5 0 01-1-.4l-.4-.5-.1-.6a1.5 1.5 0 01.4-1l.5-.4h.6zm6 4.5a1.5 1.5 0 01-1-.4l-.4-.5-.1-.6a1.5 1.5 0 01.4-1l.5-.4h.6a1.5 1.5 0 011 .4c.2 0 .3.2.4.4v.6a1.5 1.5 0 01-.4 1c0 .2-.3.3-.4.4l-.6.1zm1.5 3a1.5 1.5 0 011 .5c.2 0 .3.2.4.4v.6a1.5 1.5 0 01-.4 1c0 .2-.3.3-.4.4l-.6.1a1.5 1.5 0 01-1-.4l-.4-.5-.1-.6a1.5 1.5 0 01.4-1l.5-.4h.6zm-3 4.5a1.5 1.5 0 011 .5c.2 0 .3.2.4.4v.6a1.5 1.5 0 01-.4 1c0 .2-.3.3-.4.4l-.6.1a1.5 1.5 0 01-1-.4l-.4-.5-.1-.6a1.5 1.5 0 01.4-1l.5-.4h.6z",fill:"#fff"})}),Object(O.jsx)("p",{children:"Colors"})]})})})]})]}),Object(O.jsxs)("a",{href:"ss",className:S.a.logout_item,children:[Object(O.jsx)("svg",{width:"23",height:"24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{d:"M2.5 21.9H13v1.5H1V.9h12v1.5H2.5v19.5zM22 12l-5.7 5.7-.9-.9 4-4H7v-1.5h12.5l-4-4 1-1 5.6 5.7z",fill:"#C680CD"})}),Object(O.jsx)("p",{children:"Logout"})]})]})};var L=function(){var e=Object(c.useState)(h),t=Object(l.a)(e,2),s=t[0];return t[1],Object(O.jsx)(r.a,{children:Object(O.jsxs)("main",{children:[Object(O.jsx)(D,{}),Object(O.jsx)("section",{className:"container",children:Object(O.jsxs)(j.c,{children:[Object(O.jsx)(j.a,{exact:!0,path:"/",children:Object(O.jsx)(u,{owners:s})}),Object(O.jsx)(j.a,{path:"/cloud",children:Object(O.jsx)(m,{})}),Object(O.jsx)(j.a,{path:"/sketch",children:Object(O.jsx)(f,{})}),Object(O.jsx)(j.a,{path:"/experiments",children:Object(O.jsx)(_,{})}),Object(O.jsx)(j.a,{path:"/security",children:Object(O.jsx)(v,{})}),Object(O.jsx)(j.a,{path:"/ownership",children:Object(O.jsx)(w,{})}),Object(O.jsx)(j.a,{path:"/ab_test",children:Object(O.jsx)(g,{})}),Object(O.jsx)(j.a,{path:"/colors",children:Object(O.jsx)(N,{})}),Object(O.jsx)(j.a,{path:"*",children:Object(O.jsx)(z,{})})]})})]})})},A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,36)).then((function(t){var s=t.getCLS,c=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;s(e),c(e),n(e),a(e),i(e)}))};i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(L,{})}),document.getElementById("root")),A()},4:function(e,t,s){e.exports={owners_heading:"Overview_owners_heading__3dnze",button_wrapper:"Overview_button_wrapper__2tn2_",form_buttons_wrapper:"Overview_form_buttons_wrapper__1DpiN",add_btn:"Overview_add_btn__1HeGb",some_btn:"Overview_some_btn__2df_p",owner_line:"Overview_owner_line__30100",lines_heading:"Overview_lines_heading__m0auc",profits:"Overview_profits__3PkS_",losses:"Overview_losses__18kQS",add_form:"Overview_add_form__3rf0O",iputs_wrapper:"Overview_iputs_wrapper___BDKg"}},5:function(e,t,s){e.exports={main_menu:"Sidebar_main_menu__3hpDX","aside-top":"Sidebar_aside-top__2Puu4",logo_container:"Sidebar_logo_container__2OWq_",items_list:"Sidebar_items_list__3N7qg",list_item:"Sidebar_list_item__3SA3D",logout_item:"Sidebar_logout_item__2fN7c"}}},[[35,1,2]]]);
//# sourceMappingURL=main.2af2e8a0.chunk.js.map