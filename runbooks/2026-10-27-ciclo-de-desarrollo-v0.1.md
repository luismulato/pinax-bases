# Ciclo de desarrollo de Pínax Bases — v0.1 (BDD + TDD mínimo viable)

_Creado: 2026-10-27 · Versión 0.1 (se ajusta con la práctica)._

Una historia = una tarjeta en `mng/pinax-bases.kanban.md` = un `.feature` = un commit = una versión instalable.

## Pasos

1. **Tarjeta a WIP al empezar** (con `owner: Claude`). Terminada, va a **Verify**, nunca a Done: Done lo marca Luis después de probarla en su Obsidian.
2. **Historia en Gherkin** (BDD): `docs/features/<nn>-<slug>.feature` con `Given / When / Then`. Los criterios de aceptación de la tarjeta son la fuente.
3. **Test en rojo** (TDD): `tests/<slug>.test.ts` (vitest). Un `it()` por escenario, con el nombre del escenario. Correr `npm test` y ver que falla por la razón correcta.
4. **Implementación mínima** hasta verde. Lo que se pueda se saca a funciones puras (`src/*.ts`) para poder testearlo; el JSX queda fino.
5. **Verificación completa**: `npm test` + `npm run build` (tsc + esbuild) + `npm run lint`. Todo verde.
6. **Instalable**: `npm run build` deja `main.js`, `manifest.json`, `styles.css`. Se copian a `<vault>/.obsidian/plugins/pinax-bases/` (clarity-os). Se recarga el plugin en Obsidian.
7. **Prueba manual** de lo que los tests no cubren (la UI de React no tiene tests automáticos: no hay jsdom). Se anota en la tarjeta qué se probó.
8. **Cierre**: tarjeta a Verify con el resumen de lo hecho. Commit en la rama `pinax-bases` (una historia, un commit) cuando Luis lo autoriza.

## Qué cubren los tests (límite de v0.1)

- Sí: lógica pura, traducciones, creación de notas contra un `app` falso.
- No: render de componentes y clicks. Eso se verifica a mano en Obsidian (paso 7). Si duele, v0.2 suma jsdom + testing-library.

## Reglas

- Una historia por vez; lo que sobra va al Backlog.
- No tocar el upstream más de lo necesario (es un fork GPL-3.0; mantener los cambios chicos y localizados para poder traer mejoras).
- Textos nuevos en los 7 locales (`src/i18n/locales/`) — un test lo verifica.
- Plugin instalado como `pinax-bases` (convive con `notion-bases` en el vault).
