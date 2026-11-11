import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// docs/features/08-wrap-clip-select.feature
const read = (p: string) => readFileSync(resolve(__dirname, '..', p), 'utf8')
const css = read('styles.css')
const header = read('src/components/ColumnHeader.tsx')

describe('wrap / clip en columnas Select y Status', () => {
	it('el menú ofrece Ajustar texto y Cortar texto para select y status', () => {
		expect(header).toMatch(/col\.type === 'select' \|\| col\.type === 'status'[\s\S]*?\) && \(\s*<>[\s\S]*?enable_wrap_text[\s\S]*?enable_clip_text/)
	})

	it('con clip el chip encoge y muestra puntos suspensivos', () => {
		expect(css).toMatch(/\.nb-td--clip \.nb-select-badge\s*\{[^}]*min-width:\s*0[^}]*overflow:\s*hidden[^}]*text-overflow:\s*ellipsis/)
	})

	it('sin ellipsis (ajuste del plugin) el chip se corta seco', () => {
		expect(css).toMatch(/\.nb-clip-hard \.nb-td--clip \.nb-select-badge\s*\{[^}]*text-overflow:\s*clip/)
	})

	it('los chips del multi-select no encogen (el corte es del contenedor)', () => {
		expect(css).toMatch(/\.nb-td--clip \.nb-cell-multiselect \.nb-select-badge\s*\{[^}]*flex-shrink:\s*0/)
	})

	it('con wrap el texto del chip pasa a varias líneas', () => {
		expect(css).toMatch(/\.nb-td--wrap \.nb-select-badge[^{]*\{[^}]*white-space:\s*normal/)
	})
})
