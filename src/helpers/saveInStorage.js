export const saveInStorage = (key, element) => {

    // Conseguir los elements que ya tenemos en el LocalStorage
    let elements = JSON.parse(localStorage.getItem(key));

    console.log(elements);

    // Comprobar si es un array
    if (Array.isArray(elements)) {
        // Añadir dentro del array un element nuevo
        elements.push(element);
    } else {
        // Crear un array con el nuevo element
        elements = [element];
    }

    // Guardar en el LocalStorage
    localStorage.setItem(key, JSON.stringify(elements));

    // Devolver objeto guardado
    return element;

}