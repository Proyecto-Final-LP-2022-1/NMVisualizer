INSTRUCCIONES INSTALACION

-INSTALAR node.js (proyecto desarrollado en versión 16.15.1)
	https://nodejs.org/en/

-Para ejecutar proyecto entero ejecutar el siguiente comando en un terminal ubicado en la carpeta del proyecto.

node .\server.js

-Para probar la gramática utilizar el archivo input.txt y ejecutar el siguiente comando en un terminal ubicado en la carpeta del proyecto.

node .\index.js

INSTRUCCIONES DE USO

-Una vez este ejecutándose el servidor abrir en un navegador de la misma máquina:
	http://localhost:3000
	
-Ingresar la función a graficar en el campo 'f(x)' siguiendo la gramática de MATLAB.
-Para evitar problemas anteceder los llamados a funciones (sin, cos, tan, exp) y la variable x con '1*'. EJ: sin(x+1) > 1*sin(1*x+1)

-Ingresar parámetros adicionales dependiendo del algoritmo seleccionado:
	Bisection:
		xi: valor inicial del límite izquierdo del rango de bisección.
		xf: valor inicial del límite derecho del rango de bisección.
		épsilon: parámetro para evaluar la precisión de la aproximación.
	Newton:
		xi: aproximación inicial para Newton.
		pad: padding a la derecha e izquierda de xi, para determinar rango graficado de la función.
		épsilon: parámetro para evaluar la precisión de la aproximación.

-Hacer click en botón 'Start' para iniciar a graficar la función.

-Utilizando los botones 'Next Step' y 'Prev Step' se puede avanzar o retroceder una interacción del algoritmo, limitado por valores iniciales y final.

-Utilizando el botón 'Reset' se puede reiniciar el sistema y probar nuevamente.

Integrantes del grupo de trabajo:
Sergio Camilo Espinosa Botero - sespinosab@unal.edu.co
Juan Sebastian Reina Zamora - jreinaz@unal.edu.co
Andrés Felipe Balcero Cerón - anfbalceroce@unal.edu.co
