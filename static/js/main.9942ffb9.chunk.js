(this.webpackJsonpmarkdownpreviewer=this.webpackJsonpmarkdownpreviewer||[]).push([[0],{25:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n,i,d,r,j,s,l=c(0),h=c.n(l),o=c(16),a=c.n(o),b=c(10),x=c(6),O=(c(25),c(26),c(36)),p=c(20),m=c(37),v=c(7),u=c(1),g=c(28),w=v.a.div(n||(n=Object(x.a)(["\n\theight: 100%;\n\twidth: 100%;\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\tbackground-color: #d0e2db;\n"]))),f=v.a.div(i||(i=Object(x.a)(['\n\tfont-size: 2.5em;\n\ttext-align: center;\n\tcolor: palevioletred;\n\tfont-family: "Monaco", monospace;\n\tfont-weight: 700;\n\tmargin: 1em;\n']))),y=Object(v.a)(O.a.Label)(d||(d=Object(x.a)(['\n\tfont-size: 1.5em;\n\ttext-align: center;\n\tcolor: palevioletred;\n\tfont-family: "Montserrat", monospace;\n\tpadding: 1em;\n\tborder-bottom: 2px solid palevioletred;\n\twidth: 100%;\n']))),k=Object(v.a)(O.a.Control)(r||(r=Object(x.a)(["\n\tresize: none;\n\tborder: none;\n\toutline: none;\n\twidth: 100%;\n\theight: 60vh;\n\tpadding-top: 1em;\n\tbackground-color: #d0e2db;\n"]))),I=Object(v.a)(p.a)(j||(j=Object(x.a)(["\n\tborder-right: 2px solid palevioletred;\n\tmargin-bottom: 4em;\n"]))),T=v.a.div(s||(s=Object(x.a)(["\n\theight: 20em;\n\twidth: 70vw;\n\tmargin: 2em 0;\n\tpadding: 2em;\n\tborder: 2px solid palevioletred;\n\tborder-radius: 15px;\n\toverflow-y: scroll;\n"])));var M=function(){var e=Object(l.useState)(""),t=Object(b.a)(e,2),c=t[0],n=t[1],i=Object(l.useState)(!1),d=Object(b.a)(i,2),r=d[0],j=d[1],s=Object(l.useState)(!1),h=Object(b.a)(s,2),o=h[0],a=h[1];return Object(u.jsxs)(w,{children:[Object(u.jsx)(f,{children:"Markdown Editor"}),Object(u.jsxs)("div",{children:[Object(u.jsxs)(m.a,{href:"#cheatsheet",variant:"secondary mb-4 mr-2",onClick:function(e){return j(!r)},children:["Markdown Cheatsheet"," "]}),Object(u.jsx)(m.a,{variant:"secondary mb-4",onClick:function(e){return a(!o)},children:"HTML"})]}),Object(u.jsx)("div",{className:"container",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)(I,{children:Object(u.jsx)(O.a,{children:Object(u.jsxs)(O.a.Group,{controlId:"formControlTextArea",children:[Object(u.jsx)(y,{children:"Enter text:"}),Object(u.jsx)(k,{as:"textarea",value:c,onChange:function(e){return n(e.target.value)}})]})})}),Object(u.jsxs)("div",{className:"col",children:[Object(u.jsx)(y,{children:"Markdown text"}),Object(u.jsx)("div",{dangerouslySetInnerHTML:{__html:g(c,{breaks:!0})},style:{paddingTop:"1em"}})]}),o&&Object(u.jsxs)("div",{className:"col",style:{borderLeft:"2px solid palevioletred"},children:[Object(u.jsx)(y,{children:"HTML"}),Object(u.jsx)("div",{children:g(c)})]})]})}),r&&Object(u.jsxs)(T,{id:"cheatsheet",children:[Object(u.jsx)("h4",{children:"Headers"}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsxs)("code",{children:[Object(u.jsx)("p",{children:"# This is an `<h1>` tag"}),Object(u.jsx)("p",{children:"## This is an `<h2>` tag"}),Object(u.jsx)("p",{children:"### This is an `<h3>`; tag"})]})})}),Object(u.jsx)("h4",{children:"Emphasis"}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsxs)("code",{children:[Object(u.jsx)("p",{children:"*This text will be italic*"}),Object(u.jsx)("p",{children:"_This will also be italic_"}),Object(u.jsx)("p",{children:"**This text will be bold**"}),Object(u.jsx)("p",{children:"__This will also be bold__"}),Object(u.jsx)("p",{children:"_You **can** combine them_"})]})})}),Object(u.jsx)("h4",{children:"Unordered list"}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsxs)("code",{children:[Object(u.jsx)("p",{children:"* Item 1"}),Object(u.jsx)("p",{children:"* Item 2"}),Object(u.jsx)("p",{children:"* Item 2a"}),Object(u.jsx)("p",{children:"* Item 2b"})]})})}),Object(u.jsx)("h4",{children:"Ordered list"}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsxs)("code",{children:[Object(u.jsx)("p",{children:"1. Item 1"}),Object(u.jsx)("p",{children:"2. Item 2"}),Object(u.jsx)("p",{children:" 3. Item 2a"}),Object(u.jsx)("p",{children:" 4. Item 2b"})]})})}),Object(u.jsx)("h4",{children:"Images"}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)("code",{children:Object(u.jsx)("p",{children:"![This App was buiilt in React](https://cdn.iconscout.com/icon/free/png-256/logo-1889531-1597591.png)"})})})}),Object(u.jsx)("h4",{children:"Links"}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsxs)("code",{children:[Object(u.jsx)("p",{children:" https://www.markdownguide.org/basic-syntax/ automatic!"}),Object(u.jsx)("p",{children:"[Basic Syntax](https://www.markdownguide.org/basic-syntax/)"})]})})}),Object(u.jsx)("h4",{children:"Blockquotes"}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)("code",{children:Object(u.jsx)("p",{children:"> Dorothy followed her through many of the beautiful rooms in her castle."})})})}),Object(u.jsx)("h4",{children:"Inline code"}),Object(u.jsx)("div",{children:Object(u.jsx)("div",{children:Object(u.jsx)("code",{children:Object(u.jsx)("p",{children:"I think you should use an `<addr>` element here instead."})})})}),Object(u.jsx)("h4",{children:"Multiline code"}),Object(u.jsxs)("code",{children:[Object(u.jsx)("p",{children:"```"}),Object(u.jsx)("p",{children:"let y = 1"}),Object(u.jsx)("p",{children:"let x = 1"}),Object(u.jsx)("p",{children:"let z = y + x"}),Object(u.jsx)("p",{children:"``` "})]})]})]})},_=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,38)).then((function(t){var c=t.getCLS,n=t.getFID,i=t.getFCP,d=t.getLCP,r=t.getTTFB;c(e),n(e),i(e),d(e),r(e)}))};a.a.render(Object(u.jsx)(h.a.StrictMode,{children:Object(u.jsx)(M,{})}),document.getElementById("root")),_()}},[[34,1,2]]]);
//# sourceMappingURL=main.9942ffb9.chunk.js.map