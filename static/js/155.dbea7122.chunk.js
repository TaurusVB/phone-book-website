"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[155],{155:function(n,e,r){r.r(e),r.d(e,{default:function(){return X}});var t,i,o,a,s,c,d,l,p,u,x,h,f,m,b,g=r(9439),j=r(5984),Z=r(168),v=r(3081),y=v.Z.form(t||(t=(0,Z.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  border-radius: 5px;\n  background-color: inherit;\n  padding: 20px;\n  backdrop-filter: blur(15px);\n  border: 2px solid #5ea4ed;\n"]))),k=v.Z.label(i||(i=(0,Z.Z)(["\n  font-size: 30px;\n"]))),w=v.Z.input(o||(o=(0,Z.Z)(["\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 30px;\n"]))),C=v.Z.button(a||(a=(0,Z.Z)(["\n  width: 100%;\n  background-color: #4caf50;\n  color: white;\n  padding: 14px 20px;\n  margin: 8px 0;\n  font-size: 25px;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  &:hover {\n    background-color: #45a049;\n  }\n"]))),z=r(2791),_=r(9434),F=r(3634),L=function(n){return n.contacts.items},A=function(n){return n.contacts.isLoading},I=function(n){return n.contacts.error},T=function(n){return n.filter},q=r(184),N=function(){var n=(0,_.v9)(L),e=(0,_.I0)(),r=(0,z.useState)(""),t=(0,g.Z)(r,2),i=t[0],o=t[1],a=(0,z.useState)(""),s=(0,g.Z)(a,2),c=s[0],d=s[1],l=(0,j.x0)(),p=(0,j.x0)(),u=function(n){var e=n.currentTarget,r=e.name,t=e.value;switch(r){case"name":o(t);break;case"number":d(t)}},x=function(){o(""),d("")};return(0,q.jsxs)(y,{onSubmit:function(r){r.preventDefault();var t=i.toLowerCase();if(n.find((function(n){return n.name.toLowerCase()===t})))return alert("".concat(i," is already in contacts")),void x();e((0,F.uK)({name:i,number:c})),x()},children:[(0,q.jsx)(k,{htmlFor:l,children:"Name"}),(0,q.jsx)(w,{name:"name",type:"text",id:l,value:i,onChange:u,pattern:"[A-Za-z0-9]+",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,q.jsx)(k,{htmlFor:p,children:"Number"}),(0,q.jsx)(w,{name:"number",type:"tel",id:p,value:c,onChange:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,q.jsx)(C,{type:"submit",children:"Add contact"})]})},S=v.Z.ul(s||(s=(0,Z.Z)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 50px 30px;\n"]))),D=(v.Z.p(c||(c=(0,Z.Z)(["\n  text-align: center;\n  margin-bottom: 0;\n  padding-bottom: 50px;\n"]))),v.Z.li(d||(d=(0,Z.Z)(["\n  width: 650px;\n  margin: 10px;\n  padding: 5px 15px;\n  border: 1px solid black;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n"])))),E=v.Z.p(l||(l=(0,Z.Z)(["\n  font-size: 30px;\n  padding-right: 40px;\n"]))),K=v.Z.button(p||(p=(0,Z.Z)(["\n  background-color: #04aa6d;\n  border: none;\n  color: white;\n  padding: 16px 32px;\n  text-decoration: none;\n  margin: 4px 2px;\n  cursor: pointer;\n  font-size: 25px;\n  &:hover {\n    background-color: #c23f4d;\n  }\n"]))),B=function(n){var e=n.contact,r=(0,_.I0)();return(0,q.jsxs)(D,{children:[(0,q.jsxs)(E,{children:[e.name,": ",e.number]}),(0,q.jsx)(K,{name:e.name,onClick:function(){return r((0,F.GK)(e.id))},children:"delete"})]},e.id)},G=r(6286),J=function(){return(0,q.jsxs)("div",{style:{display:"flex"},children:[(0,q.jsx)(G.s5,{strokeColor:"grey",strokeWidth:"5",animationDuration:"0.75",width:"96",visible:!0}),(0,q.jsx)("p",{children:"making a request to the server..."})]})},M=function(n){var e=n.children;return(0,q.jsxs)("div",{children:[(0,q.jsx)("h3",{children:"Oops something went wrong!"}),(0,q.jsxs)("p",{children:["Error message: ",e]})]})},O=function(){var n=(0,_.v9)(L),e=(0,_.v9)(A),r=(0,_.v9)(I),t=(0,_.v9)(T),i=t.toLowerCase(),o=n.filter((function(n){return n.name.toLowerCase().includes(i)}));return(0,q.jsxs)(q.Fragment,{children:[e&&(0,q.jsx)(J,{}),r&&(0,q.jsx)(M,{children:r}),!e&&!r&&(0!==o.length?(0,q.jsx)(S,{children:o.map((function(n){return(0,q.jsx)(B,{contact:n},n.id)}))}):0!==t.length?(0,q.jsxs)("p",{children:["There is no name with the name ",t]}):(0,q.jsx)("p",{children:"There are no contacts yet!"}))]})},P=v.Z.div(u||(u=(0,Z.Z)(["\n  border-radius: 5px;\n  background-color: #f2f2f2;\n  padding: 20px;\n"]))),W=v.Z.label(x||(x=(0,Z.Z)(["\n  font-size: 30px;\n"]))),H=v.Z.input(h||(h=(0,Z.Z)(["\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n  font-size: 30px;\n"]))),Q=r(4808),R=function(){var n=(0,_.I0)(),e=(0,_.v9)(T),r=(0,j.x0)();return(0,q.jsx)(P,{children:(0,q.jsxs)(W,{htmlFor:r,children:["Find contacts by name",(0,q.jsx)(H,{name:"filter",type:"text",value:e,onChange:function(e){var r=e.currentTarget.value;n((0,Q.h)(r))},id:r})]})})},U=v.Z.div(f||(f=(0,Z.Z)(["\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  font-size: 40px;\n  color: #010101;\n"]))),V=(v.Z.h1(m||(m=(0,Z.Z)(["\n  margin-top: 0;\n  padding-top: 50px;\n  text-align: center;\n"]))),v.Z.h2(b||(b=(0,Z.Z)(["\n  text-align: center;\n"])))),X=function(){var n=(0,_.I0)();return(0,z.useEffect)((function(){n((0,F.yF)())}),[n]),(0,q.jsxs)(U,{children:[(0,q.jsx)(N,{}),(0,q.jsx)(V,{children:"Contacts"}),(0,q.jsx)(R,{}),(0,q.jsx)(O,{})]})}}}]);
//# sourceMappingURL=155.dbea7122.chunk.js.map