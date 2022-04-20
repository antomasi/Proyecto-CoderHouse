const nombre = prompt("¿Cómo te llamas?");
let edad = parseInt(prompt("¿Cuántos años tienes?"));

const calcularGanancia = (monto) => {
  const breakPoints = [100, 500, 1500, 5000, 10000, 50000];
  const interes = [0.05, 0.1, 0.15, 0.2, 0.25, 0.3];
  const ganancia = [];
  for (let i = 0; i < interes.length; i++) {
    ganancia.push(monto * interes[i]);
  }
  switch (true) {
    case monto <= breakPoints[0]:
      console.log(`Con $${monto} obtenés $${ganancia[0]} de ganancia. case1`);
      break;
    case monto > breakPoints[0] && monto <= breakPoints[1]:
      console.log(`Con $${monto} obtenés $${ganancia[1]} de ganancia. case2`);
      break;
    case monto > breakPoints[1] && monto <= breakPoints[2]:
      console.log(`Con $${monto} obtenés $${ganancia[2]} de ganancia. case3`);
      break;
    case monto > breakPoints[2] && monto <= breakPoints[3]:
      console.log(`Con $${monto} obtenés $${ganancia[3]} de ganancia. case4`);
      break;
    case monto > breakPoints[3] && monto <= breakPoints[4]:
      console.log(`Con $${monto} obtenés $${ganancia[4]} de ganancia. case5`);
      break;
    default:
      console.log(`Con $${monto} obtenés $${ganancia[5]} de ganancia. case6`);
      break;
  }
};

if (edad == null || /\D/.test(edad) || edad == "") {
  edad = prompt("Entre un número VÁLIDO: ");
} else {
  if (edad < 18) {
    alert(
      `Hola ${nombre.toUpperCase()}, por tu edad no es conveniente que veas el contenido de nuestra página. Lo lamentamos.`
    );
  } else {
    alert(`Hola ${nombre.toUpperCase()}, tienes ${edad} años. ¡Disfruta nuestro contenido!`);
    let monto = prompt("¿Cuánto dinero quieres invertir?");
    const montoNumber = parseInt(monto);

    calcularGanancia(montoNumber);
  }
}
