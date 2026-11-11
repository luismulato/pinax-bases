# language: es
Característica: Nombre Pínax Bases y popup About
  Para saber qué plugin es, quién lo hizo y en qué proyecto se basa
  Como usuario de una base

  Escenario: el plugin se llama Pínax Bases
    Entonces el nombre del plugin en la pestaña y en el ribbon es "Pínax bases"
    Y no aparece "Notion bases"

  Escenario: el menú "..." de la pestaña tiene About
    Cuando abro el menú "..." de la derecha en una base
    Entonces veo "About" después de las opciones de Split

  Escenario: el popup muestra la información del plugin y del proyecto base
    Cuando elijo "About"
    Entonces veo nombre, URL de GitHub y autor (con link) de Pínax Bases
    Y veo nombre, URL de GitHub y autor (con link) del proyecto base Notion Bases
    Y el texto de About está traducido en los 7 idiomas
