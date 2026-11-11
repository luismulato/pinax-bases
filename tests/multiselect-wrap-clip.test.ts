import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// docs/features/05-wrap-clip-multiselect.feature
// El render no tiene tests (sin jsdom): se verifica el contrato en las fuentes
// y el comportamiento visual a mano en Obsidian.
const read = (p: string) => readFileSync(resolve(__dirname, '..', p), 'utf8')
const css = read('styles.css')
const header = read('src/components/ColumnHeader.tsx')

describe('wrap / clip en columnas multi-select', () => {
	it('el menú de la columna ofrece Ajustar texto y Cortar texto para multiselect', () => {
		expect(header).toMatch(/col\.type === 'multiselect'\) && \(\s*<>\s*<button[\s\S]*?enable_wrap_text[\s\S]*?enable_clip_text/)
	})

	it('con wrap los chips pasan a la línea siguiente', () => {
		expect(css).toMatch(/\.nb-td--wrap \.nb-cell-multiselect\s*\{[^}]*flex-wrap:\s*wrap/)
		expect(css).toMatch(/\.nb-table--wrap \.nb-cell-multiselect/)
	})

	it('con clip los chips quedan en una línea y se cortan en el borde', () => {
		expect(css).toMatch(/\.nb-td--clip \.nb-cell-multiselect\s*\{[^}]*flex-wrap:\s*nowrap[^}]*overflow:\s*hidden/)
		expect(css).toMatch(/\.nb-td--clip \.nb-cell-select-wrapper\s*\{[^}]*min-width:\s*0/)
	})

	it('clip se declara después de wrap, así gana sobre el wrap de la vista', () => {
		const wrap = css.indexOf('.nb-td--wrap .nb-cell-multiselect')
		const clip = css.indexOf('.nb-td--clip .nb-cell-multiselect')
		expect(wrap).toBeGreaterThan(-1)
		expect(clip).toBeGreaterThan(wrap)
	})

	it('sin puntos suspensivos el degradado se desactiva', () => {
		expect(css).toMatch(/\.nb-clip-hard \.nb-td--clip \.nb-cell-multiselect\s*\{[^}]*mask-image:\s*none/)
	})
})
