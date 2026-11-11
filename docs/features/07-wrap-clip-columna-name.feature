# language: es
Característica: Ajustar o cortar texto en la columna Name
  Para controlar el ancho de la primera columna igual que las demás
  Como usuario de una base en vista Table

  Antecedentes:
    Dado una base con notas de nombre largo
    Y la vista Table abierta

  Escenario: el encabezado Name tiene menú
    Cuando hago click en "Name" en el encabezado
    Entonces veo "Ajustar texto" y "Cortar texto"

  Escenario: Cortar texto en Name
    Cuando activo "Cortar texto" en Name
    Entonces el nombre queda en una línea, cortado con "…" en el borde de la celda
    Y la columna se puede achicar por debajo del largo del nombre

  Escenario: Ajustar texto en Name
    Cuando activo "Ajustar texto" en Name
    Entonces el nombre pasa a varias líneas y la fila crece en alto

  Escenario: la elección se guarda en la vista
    Dado que activé "Cortar texto" en Name
    Cuando recargo la base
    Entonces Name sigue cortado
    Y cada vista tiene su propia elección

  Escenario: Cortar gana sobre Ajustar
    Dado que Name tiene "Ajustar texto"
    Cuando activo "Cortar texto"
    Entonces "Ajustar texto" se desactiva
