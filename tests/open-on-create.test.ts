import { describe, it, expect, vi } from 'vitest'
import { DatabaseManager } from '../src/database-manager'
import { DEFAULT_SETTINGS } from '../src/settings'
import en from '../src/i18n/locales/en'
import es from '../src/i18n/locales/es'
import de from '../src/i18n/locales/de'
import fr from '../src/i18n/locales/fr'
import ja from '../src/i18n/locales/ja'
import ptBR from '../src/i18n/locales/pt-BR'
import zh from '../src/i18n/locales/zh'

// docs/features/03-abrir-nota-al-crear.feature
function setup(openNoteOnCreate: boolean) {
	const openFile = vi.fn()
	const getLeaf = vi.fn(() => ({ openFile }))
	const app = { workspace: { getLeaf } } as never
	const manager = new DatabaseManager(app, '_database.md')
	manager.openNoteOnCreate = openNoteOnCreate
	const newFile = { path: 'Tasks/Untitled.md' }
	vi.spyOn(manager, 'readConfig').mockReturnValue({ askTemplateOnCreate: false } as never)
	vi.spyOn(manager, 'createNote').mockResolvedValue(newFile as never)
	return { manager, openFile, getLeaf, newFile }
}

describe('abrir la nota recién creada', () => {
	it('con la opción activada, la nota nueva se abre en una pestaña nueva', async () => {
		const { manager, openFile, getLeaf, newFile } = setup(true)
		await manager.createNoteWithTemplate({} as never)
		expect(getLeaf).toHaveBeenCalledWith('tab')
		expect(openFile).toHaveBeenCalledWith(newFile)
	})

	it('con la opción apagada no se abre', async () => {
		const { manager, openFile } = setup(false)
		const created = await manager.createNoteWithTemplate({} as never)
		expect(created.path).toBe('Tasks/Untitled.md')
		expect(openFile).not.toHaveBeenCalled()
	})

	it('por defecto la opción está activada', () => {
		expect(DEFAULT_SETTINGS.openNoteOnCreate).toBe(true)
		expect(new DatabaseManager({} as never, '_database.md').openNoteOnCreate).toBe(true)
	})

	it('los textos del setting existen en todos los idiomas', () => {
		const locales = { en, es, de, fr, ja, 'pt-BR': ptBR, zh } as Record<string, Record<string, string>>
		for (const [name, dict] of Object.entries(locales)) {
			expect(dict['settings_open_on_create_name'], `name ${name}`).toBeTruthy()
			expect(dict['settings_open_on_create_desc'], `desc ${name}`).toBeTruthy()
		}
	})
})
