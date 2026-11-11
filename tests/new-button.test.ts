import { describe, it, expect } from 'vitest'
import en from '../src/i18n/locales/en'
import es from '../src/i18n/locales/es'
import de from '../src/i18n/locales/de'
import fr from '../src/i18n/locales/fr'
import ja from '../src/i18n/locales/ja'
import ptBR from '../src/i18n/locales/pt-BR'
import zh from '../src/i18n/locales/zh'

// docs/features/01-boton-new-en-header.feature
describe('botón New en el header', () => {
	const locales = { en, es, de, fr, ja, 'pt-BR': ptBR, zh } as Record<string, Record<string, string>>

	it('la etiqueta del botón existe en todos los idiomas del plugin', () => {
		for (const [name, dict] of Object.entries(locales)) {
			expect(dict['new_button'], `locale ${name}`).toBeTruthy()
		}
	})

	it('en inglés y español se llama New / Nuevo', () => {
		expect(en['new_button']).toBe('New')
		expect(es['new_button']).toBe('Nuevo')
	})
})
