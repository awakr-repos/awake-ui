import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-BQw8_3wg.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,n as a,s as o}from"./blocks-8bZYQOHY.js";import{a as s,i as c,n as l,r as u,t as d}from"./field.stories-B_SKT1K9.js";function f(e){let n={code:`code`,h1:`h1`,h2:`h2`,p:`p`,pre:`pre`,...t(),...e.components};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o,{of:c}),`
`,(0,m.jsx)(n.h1,{id:`field`,children:`Field`}),`
`,(0,m.jsxs)(n.p,{children:[`Componente composto (`,(0,m.jsx)(n.code,{children:`Field.Root`}),`, `,(0,m.jsx)(n.code,{children:`Field.Label`}),`, `,(0,m.jsx)(n.code,{children:`Field.Control`}),`) para construir campos de formulário com label e input já conectados via acessibilidade nativa do Base UI.`]}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`import { Field } from '@developmentsnil/awake-ui/field';
import '@developmentsnil/awake-ui/style.css';

<Field.Root>
  <Field.Label>Nome</Field.Label>
  <Field.Control placeholder="Digite seu nome" />
</Field.Root>
`})}),`
`,(0,m.jsx)(a,{of:d}),`
`,(0,m.jsx)(n.h2,{id:`desabilitado`,children:`Desabilitado`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`<Field.Root disabled>
  <Field.Label>Nome</Field.Label>
  <Field.Control placeholder="Digite seu nome" />
</Field.Root>
`})}),`
`,(0,m.jsx)(a,{of:l}),`
`,(0,m.jsx)(n.h2,{id:`com-erro-de-validação`,children:`Com erro de validação`}),`
`,(0,m.jsx)(n.pre,{children:(0,m.jsx)(n.code,{className:`language-tsx`,children:`<Field.Root invalid>
  <Field.Label>Email</Field.Label>
  <Field.Control type="email" placeholder="seuemail@exemplo.com" />
</Field.Root>
`})}),`
`,(0,m.jsx)(a,{of:u})]})}function p(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,m.jsx)(n,{...e,children:(0,m.jsx)(f,{...e})}):f(e)}var m;function h(){return(h=e((()=>{m=r(),n(),i(),s()})))()}h();export{p as default};