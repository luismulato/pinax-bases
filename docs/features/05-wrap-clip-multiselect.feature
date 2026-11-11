# language: es
Característica: Ajustar o cortar texto en columnas multi-select
  Para controlar cuánto espacio ocupan los chips de una columna multi-select
  Como usuario de una base en vista Table

  Antecedentes:
    Dado una base con una columna multi-select con varias opciones por nota
    Y la vista Table abierta

  Escenario: el menú de la columna ofrece Ajustar texto y Cortar texto
    Cuando abro el menú de la columna multi-select
    Entonces veo "Ajustar texto" y "Cortar texto"

  Escenario: Ajustar texto hace que los chips pasen a la línea siguiente
    Cuando activo "Ajustar texto" en la columna
    Entonces los chips bajan de línea cuando no entran
    Y la fila crece en alto

  Escenario: Cortar texto deja los chips en una línea
    Cuando activo "Cortar texto" en la columna
    Entonces los chips quedan en una línea y se cortan en el borde de la celda
    Y la columna se puede achicar por debajo del ancho de todos los chips
    Y el borde derecho se difumina salvo que se desactive "Mostrar puntos suspensivos"

  Escenario: Cortar texto gana sobre el ajuste global de la vista
    Dado el ajuste de texto activado para toda la vista
    Cuando activo "Cortar texto" en la columna multi-select
    Entonces la columna corta en vez de ajustar
