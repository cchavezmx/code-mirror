const Instrucciones = () => {
  return (
    <div style={{ "width": "70%", height: "70vh", overflow: "auto", padding: "0 30px" }}>
      <h1>Instrucciones</h1>
      <div>
        <h3>Instrucciones del ejercicio:</h3>        
        <p>Crea un formulario de inicio de sesión utilizando HTML, CSS y JavaScript. El formulario debe tener los siguientes requisitos:</p>

        <li>Un campo de entrada de texto para el nombre de usuario.</li>
        <li>Un campo de entrada de texto para la contraseña.</li>
        <li>Un botón de inicio de sesión que, al hacer clic, muestre un mensaje de bienvenida si el nombre de usuario y la contraseña son correctos.</li>
        <li>Utiliza CSS para estilizar el formulario y darle un aspecto atractivo.</li>

         <br/>

        <h3>Estructura de archivos:</h3>  
        <p>Crea tres archivos en tu playground en las secciones de HTML, CSS y JavaScript:</p>

        <br/>

        <li>index.html - Contendrá el código HTML del formulario de inicio de sesión.</li>
        <li>styles.css - Contendrá el código CSS para estilizar el formulario.</li>
        <li>script.js - Contendrá el código JavaScript para recolectar los datos del formulario y mostrar un mensaje de alerta en la ventana.</li>        
      </div>
    </div>
  )
}

export default Instrucciones;