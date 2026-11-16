import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { GettingStarted } from './pages/GettingStarted'
import { AccordionPage } from './pages/components/AccordionPage'
import { AlertPage } from './pages/components/AlertPage'
import { AutocompletePage } from './pages/components/AutocompletePage'
import { AvatarPage } from './pages/components/AvatarPage'
import { BadgePage } from './pages/components/BadgePage'
import { BottomNavPage } from './pages/components/BottomNavPage'
import { ButtonPage } from './pages/components/ButtonPage'
import { CheckboxPage } from './pages/components/CheckboxPage'
import { CardPage } from './pages/components/CardPage'
import { DialogPage } from './pages/components/DialogPage'
import { FieldPage } from './pages/components/FieldPage'
import { LoadingPage } from './pages/components/LoadingPage'
import { NumberFieldPage } from './pages/components/NumberFieldPage'
import { PaginationPage } from './pages/components/PaginationPage'
import { ProgressPage } from './pages/components/ProgressPage'
import { SelectPage } from './pages/components/SelectPage'
import { SeparatorPage } from './pages/components/SeparatorPage'
import { SliderPage } from './pages/components/SliderPage'
import { SwitchPage } from './pages/components/SwitchPage'
import { TablePage } from './pages/components/TablePage'
import { TabsPage } from './pages/components/TabsPage'
import { ToastPage } from './pages/components/ToastPage'
import { TooltipPage } from './pages/components/TooltipPage'
import { WeekStripPage } from './pages/components/WeekStripPage'
import { InputPage } from './pages/components/InputPage'
import { TogglePage } from './pages/components/TogglePage'
import { CollapsiblePage } from './pages/components/CollapsiblePage'
import { RadioGroupPage } from './pages/components/RadioGroupPage'
import { ScrollAreaPage } from './pages/components/ScrollAreaPage'
import { PopoverPage } from './pages/components/PopoverPage'
import { DrawerPage } from './pages/components/DrawerPage'
import { PreviewCardPage } from './pages/components/PreviewCardPage'
import { ComboboxPage } from './pages/components/ComboboxPage'
import { MenuPage } from './pages/components/MenuPage'
import { ContextMenuPage } from './pages/components/ContextMenuPage'
import { NavigationMenuPage } from './pages/components/NavigationMenuPage'
import { MenubarPage } from './pages/components/MenubarPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="/docs/getting-started" element={<GettingStarted />} />
          {/* redirect /docs/components/ → first component */}
          <Route path="/docs/components" element={<Navigate to="/docs/components/accordion" replace />} />
          <Route path="/docs/components/" element={<Navigate to="/docs/components/accordion" replace />} />
          <Route path="/docs/components/accordion" element={<AccordionPage />} />
          <Route path="/docs/components/alert" element={<AlertPage />} />
          <Route path="/docs/components/autocomplete" element={<AutocompletePage />} />
          <Route path="/docs/components/avatar" element={<AvatarPage />} />
          <Route path="/docs/components/badge" element={<BadgePage />} />
          <Route path="/docs/components/bottom-nav" element={<BottomNavPage />} />
          <Route path="/docs/components/button" element={<ButtonPage />} />
          <Route path="/docs/components/checkbox" element={<CheckboxPage />} />
          <Route path="/docs/components/card" element={<CardPage />} />
          <Route path="/docs/components/dialog" element={<DialogPage />} />
          <Route path="/docs/components/field" element={<FieldPage />} />
          <Route path="/docs/components/loading" element={<LoadingPage />} />
          <Route path="/docs/components/number-field" element={<NumberFieldPage />} />
          <Route path="/docs/components/pagination" element={<PaginationPage />} />
          <Route path="/docs/components/progress" element={<ProgressPage />} />
          <Route path="/docs/components/select" element={<SelectPage />} />
          <Route path="/docs/components/separator" element={<SeparatorPage />} />
          <Route path="/docs/components/slider" element={<SliderPage />} />
          <Route path="/docs/components/switch" element={<SwitchPage />} />
          <Route path="/docs/components/table" element={<TablePage />} />
          <Route path="/docs/components/tabs" element={<TabsPage />} />
          <Route path="/docs/components/toast" element={<ToastPage />} />
          <Route path="/docs/components/tooltip" element={<TooltipPage />} />
          <Route path="/docs/components/week-strip" element={<WeekStripPage />} />
          <Route path="/docs/components/input" element={<InputPage />} />
          <Route path="/docs/components/toggle" element={<TogglePage />} />
          <Route path="/docs/components/collapsible" element={<CollapsiblePage />} />
          <Route path="/docs/components/radio-group" element={<RadioGroupPage />} />
          <Route path="/docs/components/scroll-area" element={<ScrollAreaPage />} />
          <Route path="/docs/components/popover" element={<PopoverPage />} />
          <Route path="/docs/components/drawer" element={<DrawerPage />} />
          <Route path="/docs/components/preview-card" element={<PreviewCardPage />} />
          <Route path="/docs/components/combobox" element={<ComboboxPage />} />
          <Route path="/docs/components/menu" element={<MenuPage />} />
          <Route path="/docs/components/context-menu" element={<ContextMenuPage />} />
          <Route path="/docs/components/navigation-menu" element={<NavigationMenuPage />} />
          <Route path="/docs/components/menubar" element={<MenubarPage />} />
          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
