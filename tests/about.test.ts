import { describe, it, expect } from 'vitest'
import en from '../src/i18n/locales/en'
import es from '../src/i18n/locales/es'
import de from '../src/i18n/locales/de'
import fr from '../src/i18n/locales/fr'
import ja from '../src/i18n/locales/ja'
import ptBR from '../src/i18n/locales/pt-BR'
import zh from '../src/i18n/locales/zh'
import { ABOUT_INFO } from '../src/about'

// docs/features/06-about-y-nombre.feature
const locales = { en, es, de, fr, ja, 'pt-BR': ptBR, zh } as Record<string, Record<string, string>>

describe('nombre y About', () => {
	it('el nombre del plugin es Pínax bases en todos los idiomas', () => {
		for (const [name, d] of Object.entries(locales)) {
			expect(d['plugin_display_name'], name).toBe('Pínax bases')
		}
	})

	it('los textos de About existen en todos los idiomas', () => {
		for (const [name, d] of Object.entries(locales)) {
			for (const k of ['about_menu_item', 'about_plugin_label', 'about_based_on', 'about_project', 'about_author']) {
				expect(d[k], `${name}.${k}`).toBeTruthy()
			}
		}
	})

	it('trae nombre, url y autor (con link) del plugin y del proyecto base', () => {
		for (const p of [ABOUT_INFO.plugin, ABOUT_INFO.original]) {
			expect(p.name).toBeTruthy()
			expect(p.url).toMatch(/^https:\/\/github\.com\/[^/]+\/[^/]+$/)
			expect(p.author).toBeTruthy()
			expect(p.authorUrl).toMatch(/^https:\/\/github\.com\/[^/]+$/)
		}
		expect(ABOUT_INFO.original.author).toBe('bgarciamoura')
		expect(ABOUT_INFO.original.url).toContain('obsidian-notion-bases-plugin')
	})
})
