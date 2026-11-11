# language: es
Característica: Ajustar o cortar texto en columnas Select y Status
  Para controlar el ancho de una columna de opciones igual que las demás
  Como usuario de una base en vista Table

  Antecedentes:
    Dado una base con una columna Select con opciones de texto largo
    Y la vista Table abierta

  Escenario: el menú de la columna ofrece Ajustar texto y Cortar texto
    Cuando abro el menú de la columna Select (o Status)
    Entonces veo "Ajustar texto" y "Cortar texto"

  Escenario: Cortar texto
    Cuando activo "Cortar texto"
    Entonces el chip queda en una línea y termina en "…" en el borde de la celda
    Y la columna se puede achicar por debajo del largo del chip

  Escenario: Ajustar texto
    Cuando activo "Ajustar texto"
    Entonces el texto del chip pasa a varias líneas y la fila crece en alto

  Escenario: Cortar texto en multi-select no cambia
    Cuando activo "Cortar texto" en una columna multi-select
    Entonces los chips siguen en una línea, cortados por el borde de la celda
