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
  const admitirPaso=(persona) =>{
      if(persona.edad >= 18){
          console.log('puedes pasar ${persona.nombre} ${persona.edad}');

      }else{
          console.log('no puedes pasar ${persona.nombre} ${persona.edad');
      }
  }
  arregloPersonas.forEach((persona) =>{admitirPaso(persona);});