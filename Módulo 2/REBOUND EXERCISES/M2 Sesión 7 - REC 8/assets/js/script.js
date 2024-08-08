do {
    var opcion = prompt(
        "\n1.- Opción 1 \n2.- Opción 2 \n3.- Opción 3 \n4.- Opción 4 \n5.- Salir"
    );
    if (opcion < 1 || opcion > 5) {
        alert(
            "Opción no válida, por favor ingrese una de las opciones anteriomente mostradas"
        );
    }
} while (opcion != 5);
