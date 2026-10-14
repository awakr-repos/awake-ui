import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{i as t,r as n}from"./react-BQw8_3wg.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{c as i,i as a,n as o,s}from"./blocks-8bZYQOHY.js";import{a as c,c as l,i as u,l as d,n as f,o as p,r as m,s as h,t as g}from"./tooltip.stories-Cf0LejXn.js";function _(e){let n={code:`code`,h1:`h1`,h2:`h2`,h3:`h3`,li:`li`,p:`p`,pre:`pre`,ul:`ul`,...t(),...e.components};return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s,{of:d}),`
`,(0,y.jsx)(n.h1,{id:`tooltip`,children:`Tooltip`}),`
`,(0,y.jsx)(n.p,{children:`A popup that appears when an element is hovered or focused, showing a hint for sighted users. Based on Base UI Tooltip for accessibility and consistent behavior.`}),`
`,(0,y.jsx)(n.h2,{id:`basic-usage`,children:`Basic Usage`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`import { Tooltip } from '@developmentsnil/awake-ui/tooltip';
import '@developmentsnil/awake-ui/style.css';

<Tooltip.Provider>
  <Tooltip.Root>
    <Tooltip.Trigger aria-label="Bold">
      <button>Hover me</button>
    </Tooltip.Trigger>
    <Tooltip.Portal>
      <Tooltip.Positioner>
        <Tooltip.Popup>
          <Tooltip.Arrow />
          Tooltip content
        </Tooltip.Popup>
      </Tooltip.Positioner>
    </Tooltip.Portal>
  </Tooltip.Root>
</Tooltip.Provider>
`})}),`
`,(0,y.jsx)(o,{of:m}),`
`,(0,y.jsx)(n.h2,{id:`multiple-tooltips`,children:`Multiple Tooltips`}),`
`,(0,y.jsx)(n.p,{children:`Coordinate multiple tooltips with a single Provider.`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Tooltip.Provider>
  <div style={{ display: 'flex', gap: '16px' }}>
    <Tooltip.Root>
      <Tooltip.Trigger aria-label="Bold">
        <button>Bold</button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner>
          <Tooltip.Popup>
            <Tooltip.Arrow />
            Bold text
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
    <Tooltip.Root>
      <Tooltip.Trigger aria-label="Italic">
        <button>Italic</button>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Positioner>
          <Tooltip.Popup>
            <Tooltip.Arrow />
            Italic text
          </Tooltip.Popup>
        </Tooltip.Positioner>
      </Tooltip.Portal>
    </Tooltip.Root>
  </div>
</Tooltip.Provider>
`})}),`
`,(0,y.jsx)(o,{of:c}),`
`,(0,y.jsx)(n.h2,{id:`positioning`,children:`Positioning`}),`
`,(0,y.jsxs)(n.p,{children:[`Control tooltip position with the `,(0,y.jsx)(n.code,{children:`side`}),` prop.`]}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Tooltip.Positioner side="top">
  {/* popup */}
</Tooltip.Positioner>
`})}),`
`,(0,y.jsxs)(n.p,{children:[`Available positions: `,(0,y.jsx)(n.code,{children:`top`}),`, `,(0,y.jsx)(n.code,{children:`bottom`}),`, `,(0,y.jsx)(n.code,{children:`left`}),`, `,(0,y.jsx)(n.code,{children:`right`})]}),`
`,(0,y.jsx)(o,{of:p}),`
`,(0,y.jsx)(n.h2,{id:`controlled-mode`,children:`Controlled Mode`}),`
`,(0,y.jsx)(n.p,{children:`Control tooltip open/close state programmatically.`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`const [open, setOpen] = useState(false);

<Tooltip.Root open={open} onOpenChange={setOpen}>
  {/* trigger and popup */}
</Tooltip.Root>
`})}),`
`,(0,y.jsx)(o,{of:f}),`
`,(0,y.jsx)(n.h2,{id:`with-viewport`,children:`With Viewport`}),`
`,(0,y.jsx)(n.p,{children:`Ensure tooltip stays within viewport boundaries.`}),`
`,(0,y.jsx)(n.pre,{children:(0,y.jsx)(n.code,{className:`language-tsx`,children:`<Tooltip.Portal>
  <Tooltip.Viewport>
    <Tooltip.Positioner>
      <Tooltip.Popup>
        <Tooltip.Arrow />
        Tooltip stays within viewport
      </Tooltip.Popup>
    </Tooltip.Positioner>
  </Tooltip.Viewport>
</Tooltip.Portal>
`})}),`
`,(0,y.jsx)(o,{of:h}),`
`,(0,y.jsx)(n.h2,{id:`long-content`,children:`Long Content`}),`
`,(0,y.jsx)(n.p,{children:`Tooltip handles text wrapping and maximum width constraints.`}),`
`,(0,y.jsx)(o,{of:u}),`
`,(0,y.jsx)(n.h2,{id:`complete-example`,children:`Complete Example`}),`
`,(0,y.jsx)(n.p,{children:`Complete tooltip with all features combined.`}),`
`,(0,y.jsx)(o,{of:g}),`
`,(0,y.jsx)(n.h2,{id:`props`,children:`Props`}),`
`,(0,y.jsx)(n.h3,{id:`tooltipprovider`,children:`Tooltip.Provider`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`children`}),` - Tooltip Root components to coordinate`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`delay`}),` - Delay before tooltip appears (in milliseconds)`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`delayClose`}),` - Delay before tooltip closes (in milliseconds)`]}),`
`]}),`
`,(0,y.jsx)(n.h3,{id:`tooltiproot`,children:`Tooltip.Root`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`open`}),` - Controlled open state (boolean)`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`onOpenChange`}),` - Callback when open state changes `,(0,y.jsx)(n.code,{children:`(open: boolean) => void`})]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`defaultOpen`}),` - Default open state for uncontrolled usage`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`closeDelay`}),` - Delay before closing (in milliseconds)`]}),`
`]}),`
`,(0,y.jsx)(n.h3,{id:`tooltiptrigger`,children:`Tooltip.Trigger`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`aria-label`}),` - Accessible label for the trigger (required for accessibility)`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`className`}),` - Additional CSS classes`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`disabled`}),` - Disables the trigger and tooltip`]}),`
`]}),`
`,(0,y.jsx)(n.h3,{id:`tooltippositioner`,children:`Tooltip.Positioner`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`side`}),` - Position relative to trigger: `,(0,y.jsx)(n.code,{children:`"top" | "bottom" | "left" | "right"`})]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`align`}),` - Alignment on the specified side`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`sideOffset`}),` - Distance from the trigger (in pixels)`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`alignOffset`}),` - Offset from the alignment point`]}),`
`]}),`
`,(0,y.jsx)(n.h3,{id:`tooltipportal`,children:`Tooltip.Portal`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`container`}),` - Container element for portal rendering`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`disabled`}),` - Disable portal rendering`]}),`
`]}),`
`,(0,y.jsx)(n.h3,{id:`tooltippopup`,children:`Tooltip.Popup`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`className`}),` - Additional CSS classes`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`id`}),` - Unique identifier for the popup`]}),`
`]}),`
`,(0,y.jsx)(n.h3,{id:`tooltiparrow`,children:`Tooltip.Arrow`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`className`}),` - Additional CSS classes`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`width`}),` - Arrow width`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`height`}),` - Arrow height`]}),`
`]}),`
`,(0,y.jsx)(n.h3,{id:`tooltipviewport`,children:`Tooltip.Viewport`}),`
`,(0,y.jsxs)(n.ul,{children:[`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`className`}),` - Additional CSS classes`]}),`
`,(0,y.jsxs)(n.li,{children:[(0,y.jsx)(n.code,{children:`padding`}),` - Padding from viewport edges`]}),`
`]}),`
`,(0,y.jsx)(a,{})]})}function v(e={}){let{wrapper:n}={...t(),...e.components};return n?(0,y.jsx)(n,{...e,children:(0,y.jsx)(_,{...e})}):_(e)}var y;function b(){return(b=e((()=>{y=r(),n(),i(),l()})))()}b();export{v as default};