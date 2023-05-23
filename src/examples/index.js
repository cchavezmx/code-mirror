const html = `  
  <body>
    <h1>Iniciar sesión</h1>

    <form id="login-form">
      <label for="username">Nombre de usuario:</label>
      <input type="text" id="username" name="username" required>

      <label for="password">Contraseña:</label>
      <input type="password" id="password" name="password" required>

      <button type="submit">Iniciar sesión</button>
    </form>

    <script src="script.js"></script>
  </body>  
`

const css = `
  /* Estilos para el formulario de inicio de sesión */
  /* Añade aquí tu código CSS para estilizar el formulario de inicio de sesión */
`

const js = `
  document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === 'usuario' && password === 'contraseña') {
      alert('¡Bienvenido! Has iniciado sesión correctamente.');
    } else {
      alert('Nombre de usuario o contraseña incorrectos.');
    }
  });
`

export {
  html,
  css,
  js
}