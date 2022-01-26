console.log("MANZO OLGUIN ALEX YAZMIN");
const ejercicio2 = [
    {
      nombre: "Gabriel",
      edad: 22,
      esFamiliar: false,
    },
    {
      nombre: "Jaime",
      edad: 15,
      esFamiliar: true,
    },
    {
      nombre: "María",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Angel",
      edad: 19,
      esFamiliar: true,
    },
    {
      nombre: "Fer",
      edad: 18,
      esFamiliar: true,
    },
    {
      nombre: "Rachel",
      edad: 30,
      esFamiliar: true,
    },
  ];
  
  const arregloPersonas=[ejercicio2];
function admitirPaso(persona) {
      if(persona.edad >= 18 && persona.esFamiliar== true){
         return ( console.log("la persona tiene el nombre:"+ persona.nombre +"y la tiene la edad"+ persona.edad));

      }else{
          return
      }
  }
  ejercicio2.forEach(admitirPaso);