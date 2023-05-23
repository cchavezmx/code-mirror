const CSS_PROMT = ({ CSS, HTML }) => {
  return `$TOMA EL ROL DE REVISOR DE UNA PRUBA TECNICA, TE PASARE CODIGO HTML, CSS, NECESITAMOS EVALUAR LA PRUEBA, 
  HAY QUE revisa si hay errores en el codigo css ${JSON.stringify(CSS)} revisa tambien si el usuario ha colocado los estilos y si esos estilos sirven para el html que se le ha dado,
  si el usuario no ha colocado estilos puedes hacer recomendaciones de como mejorar el codigo css, no contestar que los estilos estan bien, recueda revisar el codigo con 
  el siguiente codigo de html ${JSON.stringify(HTML)}, de no encontrar errores, puedes hacer recomendaciones de como mejorar el codigo css  
  `
}


export {
  CSS_PROMT
}