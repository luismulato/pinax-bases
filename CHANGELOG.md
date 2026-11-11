# Changelog — Pínax Bases

Fork of obsidian-notion-bases-plugin (GPL-3.0). Format: newest first. The
installable is built with `scripts/install-vault.sh`.

## Unreleased (on top of 1.13.0)

### Added
- **Name: Wrap text and Clip text.** The Name column header now opens a menu
  with both modes (it had no menu before). The choice is saved per view
  (`titleWrap` / `titleClip`). Turning on Wrap text for Name disables row
  virtualization. `docs/features/07-wrap-clip-columna-name.feature`
- **Select and Status: Wrap text and Clip text.** On clip, the chip shrinks and
  shows "…"; on wrap, its text flows onto several lines. Multi-select is
  unchanged. `docs/features/08-wrap-clip-select.feature`

## 1.13.0 — 2026-11-11

### Added
- **About popup** in the tab's "..." menu, after Split: name, GitHub URL and
  author (with links) of Pínax Bases and of the base project Notion Bases
  (bgarciamoura), plus the GPL-3.0 license.
  `docs/features/06-about-y-nombre.feature`
- **Multi-select: Wrap text and Clip text.** The column menu now offers both
  modes for multi-select columns too. Wrap text makes chips flow onto the next
  line and the row grow taller; Clip text keeps them on one line, cut at the
  cell border, with a fade on the right (turned off when "Show ellipsis when
  clipping text" is disabled). Clip wins over the view-wide wrap.
  `docs/features/05-wrap-clip-multiselect.feature`
- **New button in the table header**, to the right of conditional formatting;
  creates a note with the default template. Label translated into all 7
  languages. `docs/features/01-boton-new-en-header.feature`
- **Open note on create** (setting, on by default): the new note opens in a new
  tab. Covers New, "+ New row", subrow, gallery, list, board, calendar and
  quick add. `docs/features/03-abrir-nota-al-crear.feature`
- **Trash button next to Actions** when rows are selected; deletes the
  selection the same way as Actions > Delete all selected.
  `docs/features/04-borrar-seleccionados-en-header.feature`

### Changed
- **Name "Pínax bases"** on the base's tab and in the ribbon (previously
  "Notion bases"), in all 7 languages.

### Process
- Minimal BDD + TDD development cycle (`runbooks/`), stories in
  `docs/features/`, board in `mng/`, installer `scripts/install-vault.sh`.
- `releases/` and the `mng/` board are kept out of git (the board stays local
  only).
- README, CONTRIBUTING and SECURITY point to luismulato/pinax-bases, keeping the
  attribution to the original project (Notion Bases, bgarciamoura); the
  upstream badges, donation links and `FUNDING.yml` were removed.

## 1.12.0
Last upstream version before the fork. See the git history.
