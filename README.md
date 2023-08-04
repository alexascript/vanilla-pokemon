# Ejercicio: Lista de Pokémons

Objetivo: Crear una aplicación web para mostrar una lista de pokémons y permitir al usuario ver más información sobre cada uno de ellos al hacer clic en su tarjeta.

### Paso 1: Configuración inicial

1. Revisar la carpeta src y los archivos dentro de ella: `index.html`, `app.js` y `styles.scss`.

2. En el archivo `index.html`, revisar la estructura básica del documento y enlaza el archivo `app.js`.

3. Importa los estilos del archivo `styles.css` en el `<head>` del documento.

### Paso 2: Obtener datos de la API

2. En el archivo `app.js`, utuliza el array proporcionado (`urls`) para realizar la petición a la API y obtener los datos de los pokémons. Asegúrate de que el código se encuentre antes de la siguiente sección.

### Paso 3: Mostrar tarjetas de los pokémons

1. Crea una función llamada `generateCards(pokemons)` que recibirá un array de objetos de pokémons y devolverá un string con el HTML de las tarjetas. Utiliza el método `.reduce()` para generar el HTML. utiliza el siguiente string dado para generar las tarjetas

```
  `
    <div class="card" id="id-${pokemon.id}">
      <h1>${pokemon.name}</h1>
      <img src='${pokemon.sprites.front_default}' class="pokeImg"/>
    </div>
  `
```

2. Llama a la función `generateCards(pokemons)` pasando el array de pokémons obtenido en el paso anterior y almacena el resultado en una variable llamada `cards`.

3. Crea un contenedor `<section>` con la clase "container" y agrega el contenido de `cards` dentro de él.

4. Utiliza el método `document.getElementById()` para seleccionar el elemento con el id "app" y utiliza la propiedad `.innerHTML` para insertar el contenido del contenedor de tarjetas dentro del elemento con el id "app".

### Paso 4: Mostrar más información al hacer clic

1. Crea un evento de clic que escuche en todo el documento. Puedes utilizar el método `document.addEventListener()` para ello.

2. Dentro del evento de clic, verifica si el elemento clickeado tiene la clase "card". Puedes utilizar el método `.matches()` para ello.

3. Si el elemento clickeado es una tarjeta, obtén su id único utilizando la propiedad `id`.

4. Utiliza el método `.find()` para buscar en el array de pokémons el objeto que tenga un id que coincida con el id único de la tarjeta clickeada.

5. Si se encuentra el pokémon correspondiente, crea un nuevo elemento `<p>` para mostrar la URL del pokémon. Asigna una clase "description" y un id único para este párrafo.

6. Utiliza el método `.append()` para insertar el elemento de la descripción debajo de la tarjeta clickeada.

7. Si la descripción ya existe (es decir, se hizo clic nuevamente en la misma tarjeta), elimina el elemento de descripción utilizando el método `.removeChild()`.

### Paso 5: Estilos CSS (styles.scss)

1. Estiliza las tarjetas de los pokémons. Puedes utilizar la clase "card" para aplicar estilos a estas tarjetas.

2. Estiliza el contenedor principal con la clase "container" para que los pokémons estén distribuidos en filas y columnas.

3. Agrega un estilo visual para resaltar la tarjeta mientras se arrastra. Puedes utilizar la clase "dragging" para aplicar estilos a la tarjeta arrastrada.

4. Personaliza los estilos a tu gusto para mejorar el diseño de la lista de pokémons.
