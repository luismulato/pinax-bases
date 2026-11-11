# Changelog — Pínax Bases

Fork de obsidian-notion-bases-plugin (GPL-3.0). Formato: lo más nuevo arriba. El instalable se genera con
`scripts/install-vault.sh`.

## Sin publicar (sobre 1.13.0)

### Agregado
- **Name: Ajustar texto y Cortar texto.** El encabezado de la columna Name
  abre un menú con ambos modos (antes no tenía menú). Se guarda por vista
  (`titleWrap` / `titleClip`). Con Ajustar texto en Name se desactiva la
  virtualización de filas. `docs/features/07-wrap-clip-columna-name.feature`
- **Select y Status: Ajustar texto y Cortar texto.** El chip encoge con "…"
  al cortar y su texto pasa a varias líneas al ajustar; el multi-select no
  cambia. `docs/features/08-wrap-clip-select.feature`

## 1.13.0 — 2026-11-11

### Agregado
- **Popup About** en el menú "..." de la pestaña, después de Split: nombre,
  URL de GitHub y autor (con links) de Pínax Bases y del proyecto base Notion
  Bases (bgarciamoura), más la licencia GPL-3.0.
  `docs/features/06-about-y-nombre.feature`
- **Multi-select: Ajustar texto y Cortar texto.** El menú de columna ofrece
  ambos modos también para columnas multi-select. Ajustar texto hace que los
  chips pasen a la línea siguiente y la fila crezca en alto; Cortar texto los
  deja en una línea, cortados en el borde de la celda, con degradado a la
  derecha (se apaga con "Mostrar puntos suspensivos" desactivado). Cortar gana
  sobre el ajuste de toda la vista. `docs/features/05-wrap-clip-multiselect.feature`
- **Botón New en el header de la tabla**, a la derecha del formato condicional;
  crea una nota con el template por defecto. Texto traducido en los 7 idiomas.
  `docs/features/01-boton-new-en-header.feature`
- **Abrir la nota al crearla** (ajuste, activado por defecto): la nota nueva se
  abre en una pestaña nueva. Cubre New, "+ New row", subfila, galería, lista,
  board, calendar y quick add. `docs/features/03-abrir-nota-al-crear.feature`
- **Botón de papelera junto a Actions** cuando hay filas seleccionadas; borra
  lo seleccionado igual que Actions > Delete all selected.
  `docs/features/04-borrar-seleccionados-en-header.feature`

### Cambiado
- **Nombre "Pínax bases"** en la pestaña de la base y en el ribbon (antes
  "Notion bases"), en los 7 idiomas.

### Proceso
- Ciclo de desarrollo BDD + TDD mínimo (`runbooks/`), historias en
  `docs/features/`, board en `mng/`, instalador `scripts/install-vault.sh`.
- `releases/` y el tablero `mng/` fuera de git (el board queda solo local).
- README, CONTRIBUTING y SECURITY apuntan a luismulato/pinax-bases, con la
  atribución al proyecto original (Notion Bases, bgarciamoura); se quitaron los
  badges, links de donación y `FUNDING.yml` del upstream.

## 1.12.0
Última versión del upstream antes del fork. Ver el historial de git.
