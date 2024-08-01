var opcion = prompt(
  "¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel. Estoy aquí para ayudarte en lo que necesides.\nEscribe el número de la opción que buscas: \n1.- Boletas y Pagos \n2.- Señal y llamadas \n3.- Oferta comercial  \n4.- Otras consultas"
);

function opcion1() {
  let boleta = prompt(
    "Seleccione una opción: \n1.- Ver Boleta \n2.- Pagar cuenta"
  );
  if (boleta == "1") {
    alert("Haga click aquí para descargar su boleta.");
  } else if (boleta == "2") {
    alert("Usted está siendo transferido. Espere por favor.");
  }
}

function opcion2() {
  let problemas = prompt(
    "Seleccione una opción: \n1.- Problemas con la señal \n2.- Problemas con las llamadas"
  );
  if (problemas == "1") {
    let solicitud = prompt("A continuación escriba su solicitud:");
    alert(
      "Estimado usuario, su solicitud: '" +
        solicitud +
        ".' Ha sido ingresa con éxito. Pronto será contactado por uno de nuestros ejecutivos."
    );
  } else if (problemas == "2") {
    let solicitud = prompt("A continuación escriba su solicitud:");
    alert(
      "Estimado usuario, su solicitud: '" +
        solicitud +
        ".' Ha sido ingresa con éxito. Pronto será contactado por uno de nuestros ejecutivos."
    );
  }
}

function opcion3() {
  let oferta = prompt(
    "¡Mentel tiene una oferta comercial acorde a tus necesidas! Para conocer más información y ser asesorado personalmente por un ejecutivo, escribe 'SI' y un ejecutivo te llamará. De lo contrario ingrese 'NO'."
  );

  if (oferta == "SI") {
    alert("Un ejecutivo se contactará con usted.");
  } else if (oferta == "NO") {
    alert("Gracias por preferir nuestro servicio.");
  }
}

function opcion4() {
  let consultas = prompt("A continuación escriba su consulta:");
  alert(
    "Estimado usuario, su consulta: '" +
      consultas +
      ".' Ha sido ingresa con éxito. Pronto será contactado por uno de nuestros ejecutivos."
  );
}

//FUNCIONES

function menus(opcion) {
  switch (opcion) {
    case "1":
      opcion1();
      break;
    case "2":
      opcion2();
      break;
    case "3":
      opcion3();
      break;
    case "4":
      opcion4();
      break;
    default:
      alert(
        "La opción ingresada no es válida. Gracias por preferir nuestros servicios."
      );
      break;
  }
}

menus(opcion);