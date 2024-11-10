
<?php
// Parámetros de conexión
$servername = "localhost:8081";
$username = "root"; 
$password = "";      
$dbname = "proyectos";

// Crear conexión
$conexion = new mysqli($servername, $username, $password, $dbname);

// Comprobar conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
} else {
    echo "Conexión exitosa a la base de datos.";
}
?>