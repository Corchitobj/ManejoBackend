# ManejoBackend

Trabajo Práctico de Taller de Programación 2

a) Requerimientos del Trabajo

Esta aplicación debe permitir ingresar mediante un formulario nombres de conceptos vistos en la materia, junto a otro campo de texto para desarrollarlos. Esta información se guardará en arreglos y deberá poder visualizarse en una vista. Debe existir una interfaz del sistema estilada (con CSS). Por otra parte, el servidor deberá poder procesar las siguientes solicitudes REST en formato JSON:

• GET: obtener listado de todos los conceptos.

• GET/id: obtener información de un concepto en particular.

• DELETE: eliminar todos los conceptos creados.

• DELETE/id: eliminar un concepto en particular.


b) Validaciones del Trabajo

<img width="1919" height="944" alt="Pantalla" src="https://github.com/user-attachments/assets/9aac055f-e91e-4062-97f5-c392c4e24f92" />  -Pantalla principal


<img width="513" height="51" alt="GET sin elementos cargados" src="https://github.com/user-attachments/assets/51458c80-ea0e-4211-b1e3-4ae8f03b11fb" /> -Peticion GET sin elementos cargados


<img width="615" height="56" alt="GET general" src="https://github.com/user-attachments/assets/8c9668b2-619f-463a-bc7c-b96e1b772721" /> -Peticion GET con todos los elementos


<img width="589" height="53" alt="Get usando un ID" src="https://github.com/user-attachments/assets/cb6b8d4c-6d8c-4100-9a79-63d687cf9c14" /> -Peticion GET usando un ID de un elemento


<img width="443" height="45" alt="DELETE general" src="https://github.com/user-attachments/assets/9fd74793-f209-4c79-bd71-955f4dcdd873" /> -Peticion DELETE donde borra todos los elementos


<img width="466" height="42" alt="Delete con ID" src="https://github.com/user-attachments/assets/8887535a-0bd4-44f0-a03a-ac2aa4917404" /> -Peticion DELETE donde borra el elemento con un ID en especifico.


c) Dificultades del trabajo
1. Mientras hacía el trabajo práctico, aprendí a manejar el flujo de un servidor backedn en Node.js, desde la creación del formulario en el frontende hasta la implementacion de la API REST que permite agregar, obtener y eliminar conceptos. Me ayudó a entender de manera práctica como funciona la comunicación entre el cliente y el servidor, también de como se manejan los datos en memoria de manera temporal-

2. Una de las principales dificultades que encontré fue probar correctamente las peticiones de la API, ya que requería tener el servidor corriendo, enviar los datos en formato JSON y verificar las respuestas usando herramientas como curl. Para solucionar este incoveniente tuve que tener 2 pestañas de "Git Bash" al mismo tiempo.
Por último, tuve que ser cuidadoso con el manejo de Git, especialmente al hacer el merge de mi rama "test" a "main" y subir los cambios al repositorio de Github, asegurandome de no perder ningun cambio. 
