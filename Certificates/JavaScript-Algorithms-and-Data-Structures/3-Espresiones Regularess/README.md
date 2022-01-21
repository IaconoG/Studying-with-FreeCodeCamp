

Expresiones regulares, a veces acortadas a "regex" o "regexp", son patrones que ayudan a los programadores a encontrar, buscar, y reemplazar texto. Las expresiones regulares son muy potentes, pero pueden ser difícil de leer porque usan caracteres especiales para hacer coincidencias más complejas y flexibles.

En este curso, aprenderás como usar caracteres especiales, grupos de captura, miradas positivas y negativas, así como otras técnicas para hacer coincidir cualquier texto que quieras.

Lo que se ve en esta etapa del curso

    - metodo test
    
    - conicidencia de cadenas literales

    - Extraer coincidencias
    
    - Encuentra mas de 1 coincidencia

    - comodin punto
// https://regexr.com/

    - Un solo caracter con mutliples posibilidades

    - Coincidencia 

        - letras y numeros 

        - caracteres unicos no especificados

        - caracteres que aparecen una o mas veces

        - caracteres que aparecen cero o mas veces

        - condicion perezosa
        
        - todos los numeros

        - todos los caracteres no numericos

        - Espacio en blanco y que no sean espacios en blanco


    - patrones de cadena 

        - inicio y final

    - Restricciones de posibles nombres de users

    - Especificacion
        
        - menor y mayor numero de coincidencias

        - solo el menor numero de coincidencias

        - el numero exacto de coincidencias

    - Comprueba todos o ninguno

    - Lookahead positivo y negativo

    - Comprueba agrupaciones mixtas de caracteeres

    - Reutiliza patrones usando grupos de captura

    - Usa grupos de captura para buscar y remplazar 

    -  Elimina espacio en blanco del inicio y final

    - clases de caracteres abreviados



test = return boolean
match = return expresion o null

/Code/ = cadena a encontrar
/|/ = or 
//\i = mayusculas y minusculas
//\g = mas q una coincidencia
/./ = coincide con cualquier caracter unico
/[]/ = multiples posibilidades
/[-]/ = rango [a-z] conincide con abcedario en minuscula
/^/ = negar
/+/ = 1 o mas repeticiones
/*/ = 0 o mas repeticiones
/?/ = mas corta 
/^/ = patrones iniciales
/$/ = patrones finales
/\w/ = [A-Za-z0-9] = atajo q conincide con abecedario y numeros
/\W/ = [^A-Za-z0-9] = atajo q NO conincide con abecedario y numeros
/\d/ = [0-9] = atajo q coincide con todos los numeros
/\D/ = [^0-9] =  atajo q NO coincide con todos los numeros

Clases de caracteres
    /s = [ \t\r\n\v\f]
    /S = [^ \t\r\n\v\f]
    /r = Coincide con un retorno de carro
    /t = Coincide con una tabulacion horizontal
    /f = Coincide con un caracter de avance de pagina
    /n = Coincide con un salto de linea
    /v = Coincide con una tabulacion vertical

Especificadores de cantidad
    {a,b} = especifica el minimo y maximo de coincidencias

Cuantificadores
    ? = el elemento anterior es opcional, 0 o 1 elemento

Aserciones
    x?=... = devuelve x solo si x va seguido de ... (no devuelve ...) // Lookahead positivo
    x?!... = devuelve x solo si x NO va seguido de ... (no devuelve ...) // Lookahead negativo

Grupos y rangos
    (x) = Grupo de captura coincide con x
    x|y = Conicide con 'x' o 'y'
    (\w+) \1 = \1 nos devuelve el item 1 de la variable temporal creada por ()