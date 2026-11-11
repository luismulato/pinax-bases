# language: es
Característica: Botón New en el header de la base
  Para crear una nota sin bajar hasta el final de la tabla
  Como usuario de una base

  Antecedentes:
    Dado una base con una carpeta de notas
    Y la vista Table abierta

  Escenario: el botón está en la botonera, a la derecha de todo
    Entonces veo el botón "New" después del botón de formato condicional

  Escenario: New crea una nota con el template por defecto
    Cuando hago click en "New"
    Entonces se crea una nota en la carpeta de la base
    Y se le aplica el template por defecto de la base si tiene uno
    Y aparece como fila en la tabla

  Escenario: la etiqueta está traducida
    Entonces el texto del botón existe en todos los idiomas del plugin
