# Changelog — Pínax Bases

Fork de obsidian-notion-bases-plugin (GPL-3.0). Formato: lo más nuevo arriba. El instalable se genera con
`scripts/install-vault.sh`.

## 1.13.0 — 2026-11-11

### Agregado
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

### Proceso
- Ciclo de desarrollo BDD + TDD mínimo (`runbooks/`), historias en
  `docs/features/`, board en `mng/`, instalador `scripts/install-vault.sh`.
- `releases/` fuera de git.

## 1.12.0
Última versión del upstream antes del fork. Ver el historial de git.
