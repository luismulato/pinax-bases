# language: es
Característica: Botón de borrar seleccionados junto a Actions
  Para borrar registros sin abrir el menú Actions
  Como usuario de una base

  Escenario: sin selección no hay botón
    Dado la vista Table sin filas seleccionadas
    Entonces no veo el ícono de borrar al lado de "Actions"

  Escenario: con una o varias filas seleccionadas aparece el ícono
    Cuando selecciono una o más filas
    Entonces veo un ícono de papelera (sin texto) al lado de "Actions"
    Y su tooltip es "Delete all selected" (traducido)

  Escenario: click borra lo seleccionado
    Cuando hago click en el ícono
    Entonces se borran las notas seleccionadas, igual que Actions > Delete all selected
    Y la selección queda vacía y el ícono desaparece
