# language: es
Característica: Abrir la nota recién creada
  Para no tener que buscar en la tabla la nota que acabo de crear
  Como usuario de una base

  Escenario: con la opción activada, la nota nueva se abre en una pestaña nueva
    Dado la opción "Abrir la nota al crearla" activada
    Cuando creo una nota desde New, "+ New row", subfila, galería, lista, board o calendar
    Entonces la nota se abre en una pestaña nueva
    Y la base queda abierta en su pestaña

  Escenario: con la opción apagada no pasa nada más
    Dado la opción "Abrir la nota al crearla" apagada
    Cuando creo una nota
    Entonces la nota se crea y aparece como fila, sin abrirse

  Escenario: por defecto la opción está activada
    Dado un plugin recién instalado
    Entonces "Abrir la nota al crearla" está activada

  Escenario: la opción y sus textos existen en todos los idiomas
    Entonces los textos del setting existen en los 7 locales
