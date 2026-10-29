import { Autocomplete } from 'awake-ui/autocomplete';
import { NumberField } from 'awake-ui/number-field';
import { Slider } from 'awake-ui/slider';
import { Progress } from 'awake-ui/progress';
import { Tabs } from 'awake-ui/tabs';
import { Accordion } from 'awake-ui/accordion';
import { Alert } from 'awake-ui/alert';
import { Button } from 'awake-ui/button';
import { Dialog } from 'awake-ui/dialog';
import { Field } from 'awake-ui/field';
import { Loading } from 'awake-ui/loading';
import { Pagination } from 'awake-ui/pagination';
import { Select } from 'awake-ui/select';
import { Separator } from 'awake-ui/separator';
import 'awake-ui/style.css';
import 'awake-ui/dark-theme.css';
import { Switch } from 'awake-ui/switch';
import { Table } from 'awake-ui/table';
import { Tooltip } from 'awake-ui/tooltip';
import { Avatar } from 'awake-ui/avatar';
import { Badge } from 'awake-ui/badge';
import { Card } from 'awake-ui/card';
import { Toast, useToast } from 'awake-ui/toast';
import { BottomNav } from 'awake-ui/bottom-nav';
import { WeekStrip } from 'awake-ui/week-strip';
import { useState } from 'react';
import './App.css';

// ── Section wrapper ──────────────────────────────────────────────────────────
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: '40px' }}>
      <h2 style={{ marginBottom: '16px', fontSize: '13px', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--color-awake-text-muted)', borderBottom: '1px solid var(--color-awake-border)', paddingBottom: '8px' }}>
        {title}
      </h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', alignItems: 'flex-start' }}>
        {children}
      </div>
    </section>
  );
}


// ── Autocomplete demo ────────────────────────────────────────────────────────
// Needs its own component because useFilter must be called inside the tree
function AutocompleteDemo() {
  const FRUITS = [
    'Apple', 'Apricot', 'Avocado', 'Banana', 'Blueberry',
    'Cherry', 'Grape', 'Kiwi', 'Lemon', 'Mango',
    'Orange', 'Peach', 'Pear', 'Pineapple', 'Strawberry', 'Watermelon',
  ];
  const { contains } = Autocomplete.useFilter({ sensitivity: 'base' });

  return (
    <div style={{ width: 280 }}>
      <Autocomplete.Root
        items={FRUITS}
        filter={(item, input) => contains(item, input)}
        autoHighlight
      >
        <Autocomplete.InputGroup>
          <Autocomplete.Input placeholder="Search fruits…" />
          <Autocomplete.Clear aria-label="Clear">✕</Autocomplete.Clear>
          <Autocomplete.Trigger aria-label="Toggle list">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor">
              <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
            </svg>
          </Autocomplete.Trigger>
        </Autocomplete.InputGroup>
        <Autocomplete.Portal>
          <Autocomplete.Positioner sideOffset={4}>
            <Autocomplete.Popup>
              <Autocomplete.List>
                {FRUITS.map((f) => (
                  <Autocomplete.Item key={f} value={f}>{f}</Autocomplete.Item>
                ))}
              </Autocomplete.List>
              <Autocomplete.Empty>No results found.</Autocomplete.Empty>
            </Autocomplete.Popup>
          </Autocomplete.Positioner>
        </Autocomplete.Portal>
      </Autocomplete.Root>
    </div>
  );
}

// ── App ──────────────────────────────────────────────────────────────────────
function App() {
  const [isDark, setIsDark] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [weekSelected, setWeekSelected] = useState<Date>(new Date());
  const [bottomNavActive, setBottomNavActive] = useState('home');
  const { toast } = useToast();

  return (
    <div
      data-theme={isDark ? 'dark' : 'light'}
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-awake-surface)',
        color: 'var(--color-awake-text)',
        padding: '32px',
        fontFamily: 'system-ui, sans-serif',
        transition: 'background-color 0.2s, color 0.2s',
      }}
    >
      {/* ── Header ── */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '48px' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '24px', fontWeight: 700, color: 'var(--color-awake-text)' }}>awake-ui</h1>
          <p style={{ margin: '4px 0 0', fontSize: '14px', color: 'var(--color-awake-text-muted)' }}>Component playground</p>
        </div>
        <Button variant="secondary" onClick={() => setIsDark(!isDark)}>
          {isDark ? '☀️ Light' : '🌙 Dark'}
        </Button>
      </header>

      {/* ── Buttons ── */}
      <Section title="Button — variants">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="primary" disabled>Disabled</Button>
      </Section>

      <Section title="Button — sizes">
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
      </Section>

      {/* ── Separator ── */}
      <Section title="Separator">
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', width: '100%' }}>
          <span style={{ fontSize: '14px', color: 'var(--color-awake-text-muted)' }}>Left</span>
          <Separator orientation="horizontal" style={{ flex: 1 }} />
          <span style={{ fontSize: '14px', color: 'var(--color-awake-text-muted)' }}>Right</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', height: '40px' }}>
          <span style={{ fontSize: '14px', color: 'var(--color-awake-text-muted)' }}>A</span>
          <Separator orientation="vertical" style={{ height: '100%' }} />
          <span style={{ fontSize: '14px', color: 'var(--color-awake-text-muted)' }}>B</span>
        </div>
      </Section>

      {/* ── Alert ── */}
      <Section title="Alert">
        <Alert variant="info">Info — something to know.</Alert>
        <Alert variant="success">Success — operation completed.</Alert>
        <Alert variant="warning">Warning — proceed with care.</Alert>
        <Alert variant="error">Error — something went wrong.</Alert>
      </Section>

      {/* ── Loading ── */}
      <Section title="Loading">
        <Loading size="sm" label="Loading small" />
        <Loading size="md" label="Loading medium" />
        <Loading size="lg" label="Loading large" />
      </Section>

      {/* ── Switch ── */}
      <Section title="Switch">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'pointer' }}>
            <Switch.Root checked={switchChecked} onCheckedChange={setSwitchChecked}>
              <Switch.Thumb />
            </Switch.Root>
            {switchChecked ? 'On' : 'Off'}
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'not-allowed', opacity: 0.5 }}>
            <Switch.Root checked disabled>
              <Switch.Thumb />
            </Switch.Root>
            Disabled (on)
          </label>
          <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', cursor: 'not-allowed', opacity: 0.5 }}>
            <Switch.Root checked={false} disabled>
              <Switch.Thumb />
            </Switch.Root>
            Disabled (off)
          </label>
        </div>
      </Section>

      {/* ── Tooltip ── */}
      <Section title="Tooltip">
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger aria-label="Hover me">
              <Button variant="outline">Hover me</Button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Positioner>
                <Tooltip.Popup>
                  This is a tooltip
                  <Tooltip.Arrow />
                </Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>
          <Tooltip.Root>
            <Tooltip.Trigger aria-label="Another">
              <Button variant="ghost">Another</Button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Positioner side="right">
                <Tooltip.Popup>
                  Positioned to the right
                  <Tooltip.Arrow />
                </Tooltip.Popup>
              </Tooltip.Positioner>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </Section>

      {/* ── Dialog ── */}
      <Section title="Dialog">
        <Dialog.Root open={dialogOpen} onOpenChange={setDialogOpen}>
          <Dialog.Trigger render={<Button variant="primary">Open Dialog</Button>} />
          <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Popup>
              <Dialog.Title>Confirm action</Dialog.Title>
              <p style={{ margin: '8px 0 20px', fontSize: '14px', color: 'var(--color-awake-text-muted)' }}>
                Are you sure you want to proceed? This action cannot be undone.
              </p>
              <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                <Dialog.Close render={<Button variant="ghost">Cancel</Button>} />
                <Dialog.Close render={<Button variant="destructive">Confirm</Button>} />
              </div>
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
        <Dialog.Root>
          <Dialog.Trigger render={<Button variant="outline">Secondary trigger</Button>} />
          <Dialog.Portal>
            <Dialog.Backdrop />
            <Dialog.Popup>
              <Dialog.Title>Simple dialog</Dialog.Title>
              <p style={{ margin: '8px 0 20px', fontSize: '14px', color: 'var(--color-awake-text-muted)' }}>
                A simple dialog with just a close button.
              </p>
              <Dialog.Close render={<Button variant="secondary">Close</Button>} />
            </Dialog.Popup>
          </Dialog.Portal>
        </Dialog.Root>
      </Section>

      {/* ── Field ── */}
      <Section title="Field">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', minWidth: '280px' }}>
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Field.Control type="email" placeholder="you@example.com" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Field.Control type="password" placeholder="••••••••" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Search</Field.Label>
            <Field.Control type="search" placeholder="Type to search…" />
          </Field.Root>
        </div>
      </Section>

      {/* ── Select ── */}
      <Section title="Select">
        <Select.Root>
          <Select.Label>Fruit or vegetable</Select.Label>
          <Select.Trigger>
            <Select.Value placeholder="Choose one…" />
            <Select.Icon>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11 10H5l3 3.5zm0-4H5l3-3.5z" />
              </svg>
            </Select.Icon>
          </Select.Trigger>
          <Select.Portal>
            <Select.Backdrop />
            <Select.Positioner>
              <Select.Popup>
                <Select.ScrollUpArrow>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M12 10H4l4-4.5z" />
                  </svg>
                </Select.ScrollUpArrow>
                <Select.List>
                  <Select.Group>
                    <Select.GroupLabel>Fruits</Select.GroupLabel>
                    <Select.Item value="apple">
                      <Select.ItemIndicator>✓</Select.ItemIndicator>
                      <Select.ItemText>Apple</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="banana">
                      <Select.ItemIndicator>✓</Select.ItemIndicator>
                      <Select.ItemText>Banana</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="mango">
                      <Select.ItemIndicator>✓</Select.ItemIndicator>
                      <Select.ItemText>Mango</Select.ItemText>
                    </Select.Item>
                  </Select.Group>
                  <Select.Separator />
                  <Select.Group>
                    <Select.GroupLabel>Vegetables</Select.GroupLabel>
                    <Select.Item value="carrot">
                      <Select.ItemIndicator>✓</Select.ItemIndicator>
                      <Select.ItemText>Carrot</Select.ItemText>
                    </Select.Item>
                    <Select.Item value="broccoli">
                      <Select.ItemIndicator>✓</Select.ItemIndicator>
                      <Select.ItemText>Broccoli</Select.ItemText>
                    </Select.Item>
                  </Select.Group>
                </Select.List>
                <Select.ScrollDownArrow>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                    <path d="M12 6H4l4 4.5z" />
                  </svg>
                </Select.ScrollDownArrow>
              </Select.Popup>
            </Select.Positioner>
          </Select.Portal>
        </Select.Root>
      </Section>

      {/* ── Table ── */}
      <Section title="Table">
        <Table.Root style={{ width: '100%', maxWidth: '600px' }}>
          <Table.Head>
            <Table.Row>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Role</Table.HeaderCell>
              <Table.HeaderCell>Status</Table.HeaderCell>
            </Table.Row>
          </Table.Head>
          <Table.Body>
            <Table.Row>
              <Table.Cell>Alice</Table.Cell>
              <Table.Cell>Engineer</Table.Cell>
              <Table.Cell><Alert variant="success">Active</Alert></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Bob</Table.Cell>
              <Table.Cell>Designer</Table.Cell>
              <Table.Cell><Alert variant="warning">On leave</Alert></Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>Carol</Table.Cell>
              <Table.Cell>PM</Table.Cell>
              <Table.Cell><Alert variant="error">Inactive</Alert></Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table.Root>
      </Section>

      {/* ── Autocomplete ── */}
      <Section title="Autocomplete">
        <AutocompleteDemo />
      </Section>


      {/* ── NumberField ── */}
      <Section title="NumberField">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'flex-end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-awake-text)' }}>
              Quantity
            </label>
            <NumberField.Root defaultValue={1} min={0} style={{ width: 160 }}>
              <NumberField.Group>
                <NumberField.Decrement>−</NumberField.Decrement>
                <NumberField.Input />
                <NumberField.Increment>+</NumberField.Increment>
              </NumberField.Group>
            </NumberField.Root>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-awake-text)' }}>
              Price (step 0.01)
            </label>
            <NumberField.Root defaultValue={9.99} step={0.01} min={0} style={{ width: 160 }}>
              <NumberField.Group>
                <NumberField.Decrement>−</NumberField.Decrement>
                <NumberField.Input />
                <NumberField.Increment>+</NumberField.Increment>
              </NumberField.Group>
            </NumberField.Root>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-awake-text-muted)', opacity: 0.5 }}>
              Disabled
            </label>
            <NumberField.Root defaultValue={42} disabled style={{ width: 160 }}>
              <NumberField.Group>
                <NumberField.Decrement>−</NumberField.Decrement>
                <NumberField.Input />
                <NumberField.Increment>+</NumberField.Increment>
              </NumberField.Group>
            </NumberField.Root>
          </div>
        </div>
      </Section>


      {/* ── Slider ── */}
      <Section title="Slider">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '400px' }}>
          <Slider.Root defaultValue={40}>
            <Slider.Control>
              <Slider.Track>
                <Slider.Indicator />
                <Slider.Thumb />
              </Slider.Track>
            </Slider.Control>
          </Slider.Root>

          <Slider.Root defaultValue={[20, 75]}>
            <Slider.Control>
              <Slider.Track>
                <Slider.Indicator />
                <Slider.Thumb />
                <Slider.Thumb />
              </Slider.Track>
            </Slider.Control>
          </Slider.Root>

          <Slider.Root defaultValue={50} disabled>
            <Slider.Control>
              <Slider.Track>
                <Slider.Indicator />
                <Slider.Thumb />
              </Slider.Track>
            </Slider.Control>
          </Slider.Root>
        </div>
      </Section>

      {/* ── Pagination ── */}
      <Section title="Pagination">
        <Pagination
          currentPage={currentPage}
          totalPages={10}
          onPageChange={setCurrentPage}
        />
      </Section>

      {/* ── Progress ── */}
      <Section title="Progress">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '400px' }}>
          <Progress.Root value={60}>
            <Progress.Track>
              <Progress.Indicator />
            </Progress.Track>
          </Progress.Root>
          <Progress.Root value={30}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <Progress.Label>Uploading…</Progress.Label>
              <Progress.Value />
            </div>
            <Progress.Track>
              <Progress.Indicator />
            </Progress.Track>
          </Progress.Root>
          <Progress.Root>
            <Progress.Track>
              <Progress.Indicator />
            </Progress.Track>
          </Progress.Root>
        </div>
      </Section>

      {/* ── Tabs ── */}
      <Section title="Tabs">
        <div style={{ width: '100%', maxWidth: '480px' }}>
          <Tabs.Root defaultValue="account">
            <Tabs.List>
              <Tabs.Tab value="account">Account</Tabs.Tab>
              <Tabs.Tab value="password">Password</Tabs.Tab>
              <Tabs.Tab value="settings">Settings</Tabs.Tab>
              <Tabs.Indicator />
            </Tabs.List>
            <Tabs.Panel value="account">Make changes to your account here.</Tabs.Panel>
            <Tabs.Panel value="password">Change your password here.</Tabs.Panel>
            <Tabs.Panel value="settings">Manage your notification settings.</Tabs.Panel>
          </Tabs.Root>
        </div>
      </Section>

      {/* ── Accordion ── */}
      <Section title="Accordion">
        <div style={{ width: '100%', maxWidth: '480px' }}>
          <Accordion.Root>
            <Accordion.Item value="a1">
              <Accordion.Header>
                <Accordion.Trigger>What is awake-ui?</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel>awake-ui is a React component library built on Base UI primitives, with a Tailwind CSS v4 token system and full dark mode support.</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="a2">
              <Accordion.Header>
                <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel>Yes. All interactive components follow WAI-ARIA patterns and are keyboard and screen-reader friendly.</Accordion.Panel>
            </Accordion.Item>
            <Accordion.Item value="a3">
              <Accordion.Header>
                <Accordion.Trigger>Can I customize the styles?</Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel>Override CSS custom properties (semantic tokens) on :root or a wrapper to change colours, spacing and radius globally or per-instance.</Accordion.Panel>
            </Accordion.Item>
          </Accordion.Root>
        </div>
      </Section>

      {/* ── Avatar ── */}
      <Section title="Avatar">
        <Avatar size="sm" alt="AB" />
        <Avatar size="md" alt="CD" />
        <Avatar size="lg" alt="EF" />
        <Avatar size="md" src="https://i.pravatar.cc/150?img=47" alt="Ana Lima" />
        <Avatar size="md" src="https://i.pravatar.cc/150?img=12" alt="Carlos" />
      </Section>

      {/* ── Badge ── */}
      <Section title="Badge">
        <Badge variant="default">Default</Badge>
        <Badge variant="info">Novo</Badge>
        <Badge variant="success">Ativo</Badge>
        <Badge variant="warning">Pendente</Badge>
        <Badge variant="error">Inativo</Badge>
      </Section>

      {/* ── Card ── */}
      <Section title="Card">
        <Card.Root style={{ width: 300 }}>
          <Card.Header>
            <Card.Title>Resumo do mês</Card.Title>
            <Card.Description>Janeiro 2025</Card.Description>
          </Card.Header>
          <Card.Content>
            <p style={{ margin: 0, fontSize: 14 }}>R$ 3.240,00 em receitas esse mês.</p>
          </Card.Content>
          <Card.Footer>
            <Badge variant="success">No prazo</Badge>
          </Card.Footer>
        </Card.Root>
      </Section>

      {/* ── Toast ── */}
      <Section title="Toast">
        <Button variant="secondary" onClick={() => toast({ message: 'Operação realizada!', variant: 'default' })}>Default</Button>
        <Button variant="secondary" onClick={() => toast({ message: 'Salvo com sucesso.', variant: 'success' })}>Success</Button>
        <Button variant="secondary" onClick={() => toast({ message: 'Atenção: verifique os dados.', variant: 'warning' })}>Warning</Button>
        <Button variant="secondary" onClick={() => toast({ message: 'Erro ao processar.', variant: 'error' })}>Error</Button>
        <Button variant="secondary" onClick={() => toast({ message: 'Nova versão disponível.', variant: 'info' })}>Info</Button>
      </Section>

      {/* ── Week Strip ── */}
      <Section title="WeekStrip">
        <div style={{ width: '100%', maxWidth: 480 }}>
          <WeekStrip today={new Date()} selected={weekSelected} onSelect={setWeekSelected} />
          <p style={{ marginTop: 12, fontSize: 14, color: 'var(--color-awake-text-muted)' }}>
            Selecionado: {weekSelected.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' })}
          </p>
        </div>
      </Section>

      {/* ── Bottom Nav ── */}
      <Section title="BottomNav">
        <div style={{ position: 'relative', width: '100%', maxWidth: 480, height: 80 }}>
          <BottomNav.Root style={{ position: 'absolute', left: 0, right: 0, bottom: 0, borderRadius: 'var(--radius-awake-md)', overflow: 'hidden' }}>
            {[
              { id: 'home', label: 'Início', icon: '🏠' },
              { id: 'explore', label: 'Explorar', icon: '🔍' },
              { id: 'profile', label: 'Perfil', icon: '👤' },
            ].map(item => (
              <BottomNav.Item
                key={item.id}
                icon={item.icon}
                label={item.label}
                active={bottomNavActive === item.id}
                onClick={() => setBottomNavActive(item.id)}
              />
            ))}
          </BottomNav.Root>
        </div>
      </Section>
    </div>
  );
}

function AppWithProviders() {
  return (
    <Toast.Provider>
      <App />
    </Toast.Provider>
  );
}

export default AppWithProviders;
