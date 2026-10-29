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
          {/* fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
