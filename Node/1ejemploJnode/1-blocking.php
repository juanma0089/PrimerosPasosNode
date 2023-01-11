<?php
printf("Abriendo archivo...<br>");

$fichero_ruta = fopen("archivo.txt", "r");

$texto = "";

while ($trozo = fgets($fichero_ruta)){

    $texto .= $trozo;
}

printf($texto);

printf("<br>Haciendo otra cosa");
?>