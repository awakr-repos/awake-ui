import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-BQw8_3wg.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,i as a,n as o,s}from"./blocks-8bZYQOHY.js";import{a as c,c as l,i as u,n as d,o as f,r as p,s as m,t as h}from"./select.stories-DVAgKw-G.js";function g(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(s,{of:l}),`
`,(0,v.jsx)(n.h1,{id:`select`,children:`Select`}),`
`,(0,v.jsx)(n.p,{children:`Componente composto para criar seletores dropdown com suporte a grouping, scroll arrows, e indicators. Baseado no Base UI Select para acessibilidade e comportamento consistente.`}),`
`,(0,v.jsx)(n.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`import { Select } from '@developmentsnil/awake-ui/select';
import '@developmentsnil/awake-ui/style.css';

<Select.Root>
  <Select.Label>Nome</Select.Label>
  <Select.Trigger>
    <Select.Value placeholder="Selecione" />
  </Select.Trigger>
  <Select.Portal>
    <Select.Positioner>
      <Select.Popup>
        <Select.List>
          <Select.Item value="1">Item 1</Select.Item>
          <Select.Item value="2">Item 2</Select.Item>
        </Select.List>
      </Select.Popup>
    </Select.Positioner>
  </Select.Portal>
</Select.Root>
`})}),`
`,(0,v.jsx)(o,{of:d}),`
`,(0,v.jsx)(n.h2,{id:`with-icon`,children:`With Icon`}),`
`,(0,v.jsx)(n.p,{children:`Adicione um ícone para indicar visualmente que é um dropdown.`}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Select.Root>
  <Select.Label>Escolha uma opção</Select.Label>
  <Select.Trigger>
    <Select.Value placeholder="Selecione" />
    <Select.Icon>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
      </svg>
    </Select.Icon>
  </Select.Trigger>
  {/* ... */}
</Select.Root>
`})}),`
`,(0,v.jsx)(o,{of:u}),`
`,(0,v.jsx)(n.h2,{id:`with-item-indicator`,children:`With Item Indicator`}),`
`,(0,v.jsxs)(n.p,{children:[`Use `,(0,v.jsx)(n.code,{children:`ItemIndicator`}),` para mostrar visualmente qual item está selecionado.`]}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Select.Item value="1">
  <Select.ItemIndicator>✓</Select.ItemIndicator>
  <Select.ItemText>Opção 1</Select.ItemText>
</Select.Item>
`})}),`
`,(0,v.jsx)(o,{of:c}),`
`,(0,v.jsx)(n.h2,{id:`with-groups`,children:`With Groups`}),`
`,(0,v.jsx)(n.p,{children:`Organize items em grupos com labels e separators.`}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Select.Group>
  <Select.GroupLabel>Cítricas</Select.GroupLabel>
  <Select.Item value="laranja">Laranja</Select.Item>
  <Select.Item value="limão">Limão</Select.Item>
</Select.Group>
<Select.Separator />
<Select.Group>
  <Select.GroupLabel>Outras</Select.GroupLabel>
  <Select.Item value="maçã">Maçã</Select.Item>
  <Select.Item value="banana">Banana</Select.Item>
</Select.Group>
`})}),`
`,(0,v.jsx)(o,{of:p}),`
`,(0,v.jsx)(n.h2,{id:`with-scroll-arrows`,children:`With Scroll Arrows`}),`
`,(0,v.jsx)(n.p,{children:`Para listas longas, adicione setas de scroll para melhor UX.`}),`
`,(0,v.jsx)(n.pre,{children:(0,v.jsx)(n.code,{className:`language-tsx`,children:`<Select.ScrollUpArrow>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M12 10H4l4-4.5z" />
  </svg>
</Select.ScrollUpArrow>
{/* ... items ... */}
<Select.ScrollDownArrow>
  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M12 6H4l4 4.5z" />
  </svg>
</Select.ScrollDownArrow>
`})}),`
`,(0,v.jsx)(o,{of:f}),`
`,(0,v.jsx)(n.h2,{id:`complete-example`,children:`Complete Example`}),`
`,(0,v.jsx)(n.p,{children:`Exemplo completo mostrando todas as funcionalidades juntas.`}),`
`,(0,v.jsx)(o,{of:h}),`
`,(0,v.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,v.jsx)(n.h3,{id:`selectroot`,children:`Select.Root`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`items`}),` - Array de objetos para as opções (formato: `,(0,v.jsx)(n.code,{children:`{ value, label }`}),`)`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`defaultValue`}),` - Valor inicial selecionado`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`value`}),` - Valor controlado`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`onValueChange`}),` - Callback quando valor muda`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`multiple`}),` - Permite seleção múltipla`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`disabled`}),` - Desabilita o select`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`required`}),` - Torna a seleção obrigatória em formulários`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`name`}),` - Nome do campo ao submeter um formulário`]}),`
`]}),`
`,(0,v.jsx)(n.h3,{id:`selectlabel`,children:`Select.Label`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`className`}),` - Classes CSS adicionais`]}),`
`]}),`
`,(0,v.jsx)(n.h3,{id:`selecttrigger`,children:`Select.Trigger`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`className`}),` - Classes CSS adicionais`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`disabled`}),` - Desabilita o trigger`]}),`
`]}),`
`,(0,v.jsx)(n.h3,{id:`selectvalue`,children:`Select.Value`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`placeholder`}),` - Texto placeholder quando nenhum valor selecionado`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`className`}),` - Classes CSS adicionais`]}),`
`]}),`
`,(0,v.jsx)(n.h3,{id:`selecticon`,children:`Select.Icon`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`className`}),` - Classes CSS adicionais`]}),`
`]}),`
`,(0,v.jsx)(n.h3,{id:`selectitem`,children:`Select.Item`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`value`}),` - Valor do item (obrigatório)`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`disabled`}),` - Desabilita o item`]}),`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`className`}),` - Classes CSS adicionais`]}),`
`]}),`
`,(0,v.jsx)(n.h3,{id:`selectitemtext`,children:`Select.ItemText`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`className`}),` - Classes CSS adicionais`]}),`
`]}),`
`,(0,v.jsx)(n.h3,{id:`selectitemindicator`,children:`Select.ItemIndicator`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`className`}),` - Classes CSS adicionais`]}),`
`]}),`
`,(0,v.jsx)(n.h3,{id:`selectgroup`,children:`Select.Group`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`className`}),` - Classes CSS adicionais`]}),`
`]}),`
`,(0,v.jsx)(n.h3,{id:`selectgrouplabel`,children:`Select.GroupLabel`}),`
`,(0,v.jsxs)(n.ul,{children:[`
`,(0,v.jsxs)(n.li,{children:[(0,v.jsx)(n.code,{children:`className`}),` - Classes CSS adicionais`]}),`
`]}),`
`,(0,v.jsx)(a,{})]})}function _(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,v.jsx)(n,{...e,children:(0,v.jsx)(g,{...e})}):g(e)}var v;function y(){return(y=e((()=>{v=r(),n(),i(),m()})))()}y();export{_ as default};