import { describe, it, expect } from 'vitest'
import en from '../src/i18n/locales/en'
import es from '../src/i18n/locales/es'
import de from '../src/i18n/locales/de'
import fr from '../src/i18n/locales/fr'
import ja from '../src/i18n/locales/ja'
import ptBR from '../src/i18n/locales/pt-BR'
import zh from '../src/i18n/locales/zh'

// docs/features/04-borrar-seleccionados-en-header.feature
describe('botón borrar seleccionados', () => {
	const locales = { en, es, de, fr, ja, 'pt-BR': ptBR, zh } as Record<string, Record<string, string>>

	it('el tooltip (delete_selected) existe en todos los idiomas', () => {
		for (const [name, dict] of Object.entries(locales)) {
			expect(dict['delete_selected'], `locale ${name}`).toBeTruthy()
		}
	})

	it('en inglés el tooltip es "Delete all selected"', () => {
		expect(en['delete_selected']).toBe('Delete all selected')
	})
})
