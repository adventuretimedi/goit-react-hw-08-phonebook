"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[788],{788:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r=t(9434),a="ContactForm_contactForm__Nb2nQ",o="ContactForm_button__gXRow",i=t(208),c=t(1686),s=function(n){return n.contacts.items},u=function(n){return n.filter},l=function(n){return n.contacts.isLoading},m=function(n){return n.contacts.error},d=t(4554),f=t(6597),h=t(6151),p=t(184),b=function(){var n=(0,r.v9)(s),e=(0,r.I0)();return(0,p.jsxs)(d.Z,{component:"form",onSubmit:function(t){t.preventDefault();var r=t.currentTarget,a=r.elements.name.value,o=r.elements.number.value,s=n.find((function(n){return n.name.toLowerCase()===a.toLowerCase()}));r.reset(),s?c.Notify.failure("".concat(a," is already in contacts")):e((0,i.uK)({name:a,number:o}))},className:a,children:[(0,p.jsx)(f.Z,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",autoFocus:!0,inputProps:{pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}}),(0,p.jsx)(f.Z,{margin:"normal",required:!0,fullWidth:!0,id:"number",label:"Phone Number",name:"number",type:"tel",inputProps:{inputMode:"numeric",pattern:"[0-9]*",title:"Phone number must be digits"}}),(0,p.jsx)(h.Z,{color:"primary",size:"medium",variant:"contained",type:"submit",className:o,children:"Add contact"})]})},v="ContactList_list__3DsEX",x=t(493),j=t(4852),_=t(3400),g=t(6259),y=t(7247),C=function(){var n=(0,r.v9)(s),e=(0,r.v9)(u),t=(0,r.I0)(),a=function(){var t=e.toLowerCase();return""===e?n:n.filter((function(n){return n.name.toLowerCase().includes(t)}))}();console.log(a);return(0,p.jsx)(x.Z,{className:v,children:a.map((function(n){return(0,p.jsx)(j.ZP,{secondaryAction:(0,p.jsx)(_.Z,{edge:"end","aria-label":"delete",onClick:function(){!function(n){t((0,i.GK)(n.id))}(n)},children:(0,p.jsx)(y.Z,{})}),children:(0,p.jsx)(g.Z,{primary:n.name,secondary:n.number})},n.id)}))})},Z=t(6895),w=function(){var n=(0,r.I0)();return(0,p.jsx)(f.Z,{name:"filter",label:"Find contacts by name",onChange:function(e){var t=e.currentTarget.value;n((0,Z.T)(t))}})},N=t(2791),k=t(890),A=function(){var n=(0,r.v9)(l),e=(0,r.v9)(m),t=(0,r.I0)();return(0,N.useEffect)((function(){t((0,i.yF)())}),[t]),(0,p.jsxs)("div",{children:[(0,p.jsx)(b,{}),(0,p.jsx)(k.Z,{variant:"h3",children:"Contacts"}),(0,p.jsx)(w,{}),n&&(0,p.jsx)("p",{children:"Loading contacts..."}),e&&(0,p.jsx)("p",{children:"cheems crying so sorry, error"}),(0,p.jsx)(C,{})]})}}}]);
//# sourceMappingURL=788.e16f2756.chunk.js.map