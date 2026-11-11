import { App, Modal } from 'obsidian'
import { t } from './i18n'
import { ABOUT_INFO } from './about'

export class AboutModal extends Modal {
	constructor(app: App, private version: string) {
		super(app)
	}

	onOpen(): void {
		const { contentEl } = this
		contentEl.empty()
		contentEl.addClass('nb-about')
		const { plugin, original } = ABOUT_INFO

		contentEl.createEl('h2', { text: `${plugin.name} ${this.version}` })
		this.section(t('about_plugin_label'), plugin.name, plugin.url, plugin.author, plugin.authorUrl)
		this.section(t('about_based_on'), original.name, original.url, original.author, original.authorUrl)
		contentEl.createEl('p', { text: 'GPL-3.0', cls: 'nb-about-license' })
	}

	onClose(): void {
		this.contentEl.empty()
	}

	private section(label: string, name: string, url: string, author: string, authorUrl: string): void {
		const box = this.contentEl.createDiv({ cls: 'nb-about-section' })
		box.createEl('h4', { text: label })
		const row = (key: string, text: string, href: string) => {
			const p = box.createEl('p')
			p.createEl('strong', { text: `${key}: ` })
			p.createEl('a', { text, href, attr: { target: '_blank', rel: 'noopener' } })
		}
		row(t('about_project'), name, url)
		row(t('about_author'), author, authorUrl)
	}
}
