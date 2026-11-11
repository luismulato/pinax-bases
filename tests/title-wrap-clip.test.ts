import { describe, it, expect } from 'vitest'
import { readFileSync } from 'fs'
import { resolve } from 'path'

// docs/features/07-wrap-clip-columna-name.feature
// Sin jsdom: se verifica el contrato en las fuentes; el render se prueba a mano.
const read = (p: string) => readFileSync(resolve(__dirname, '..', p), 'utf8')
const table = read('src/components/DatabaseTable.tsx')
const types = read('src/types.ts')
const css = read('styles.css')

describe('wrap / clip en la columna Name', () => {
	it('la vista guarda titleWrap y titleClip (cada vista su elección)', () => {
		expect(types).toMatch(/interface ViewConfig[\s\S]*?titleWrap\?: boolean[\s\S]*?titleClip\?: boolean/)
	})

	it('el encabezado Name es un TitleHeader con menú de Ajustar / Cortar', () => {
		expect(table).toMatch(/function TitleHeader\(/)
		expect(table).toMatch(/enable_wrap_text[\s\S]*?enable_clip_text/)
		expect(table).toMatch(/<TitleHeader[\s\S]*?onToggleWrap[\s\S]*?onToggleClip/)
	})

	it('activar uno desactiva el otro y se guarda en la vista', () => {
		expect(table).toMatch(/titleWrap: !activeView\.titleWrap, titleClip: false/)
		expect(table).toMatch(/titleClip: !activeView\.titleClip, titleWrap: false/)
	})

	it('las celdas de Name reciben las clases wrap/clip y clip gana', () => {
		expect(table).toMatch(/isTitleCol \? !!titleClip/)
		expect(table).toMatch(/isTitleCol \? !!titleWrap && !clipCell/)
	})

	it('con wrap en Name se desactiva la virtualización (filas de alto variable)', () => {
		expect(table).toMatch(/disableVirtual=\{!!activeView\.titleWrap/)
	})

	it('el contenedor del nombre puede encolher (sino clip no corta)', () => {
		expect(css).toMatch(/\.nb-title-cell\s*\{[^}]*min-width:\s*0/)
		expect(table).toMatch(/className="nb-title-cell"/)
	})
})
