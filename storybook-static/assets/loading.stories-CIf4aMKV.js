import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./jsx-runtime-DeHZSEgm.js";import{n as r,t as i}from"./clsx-CTwy9ux-.js";function a({size:e=`md`,label:t=`Loading…`,className:n,...r}){return(0,o.jsx)(`div`,{role:`status`,"aria-label":t,className:i(`awake-loading-container`,n),...r,children:(0,o.jsxs)(`div`,{className:`awake-loading-dots`,children:[(0,o.jsx)(`span`,{className:i(`awake-loading-dot`,s[e])}),(0,o.jsx)(`span`,{className:i(`awake-loading-dot`,s[e])}),(0,o.jsx)(`span`,{className:i(`awake-loading-dot`,s[e])})]})})}var o,s;function c(){return(c=e((()=>{r(),o=n(),s={sm:`awake-loading-dot--sm`,md:`awake-loading-dot--md`,lg:`awake-loading-dot--lg`},a.__docgenInfo={description:``,methods:[],displayName:`Loading`,props:{size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size of the dots.
@default 'md'`,defaultValue:{value:`'md'`,computed:!1}},label:{required:!1,tsType:{name:`string`},description:`Accessible label for screen readers.
@default 'Loading…'`,defaultValue:{value:`'Loading…'`,computed:!1}}}}})))()}var l=t({Default:()=>f,Sizes:()=>p,__namedExportsOrder:()=>m,default:()=>d}),u,d,f,p,m;function h(){return(h=e((()=>{c(),u=n(),d={title:`Components/Loading`,component:a,argTypes:{size:{control:`select`,options:[`sm`,`md`,`lg`]}},args:{size:`md`}},f={},p={render:()=>(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`16px`},children:[(0,u.jsx)(a,{size:`sm`}),(0,u.jsx)(a,{size:`md`}),(0,u.jsx)(a,{size:`lg`})]})},m=[`Default`,`Sizes`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }}>
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
    </div>
}`,...p.parameters?.docs?.source}}}})))()}export{h as n,l as r,f as t};