import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    button: 'src/button/index.tsx',
    dialog: 'src/dialog/index.tsx',
    field: 'src/field/index.tsx',
    separator: 'src/separator/index.tsx',
    table: 'src/table/index.tsx',
    pagination: 'src/pagination/index.tsx',
    select: 'src/select/index.tsx',
    switch: 'src/switch/index.tsx',
    loading: 'src/loading/index.tsx',
    tooltip: 'src/tooltip/index.tsx',
    alert: 'src/alert/index.tsx',
    autocomplete: 'src/autocomplete/index.tsx',
    'number-field': 'src/number-field/index.tsx'
  },
  format: ['cjs', 'esm'],
  dts: true,
  external: ['react', 'react-dom'],
  sourcemap: true,
  clean: false,
});