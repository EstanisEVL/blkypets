<?php
    if(isset($_POST['suscribirme'])){//si el botón con el name enviar es pulsado
        if(!empty($_POST['email'])&& !empty($_POST['nombreMascota'])){
            //si no están vacios los inputs email y nombre de mascota 
            //guardo el contenido de cada campo en variables:
            $email=$_POST['email'];
            $mascota=$_POST['nombreMascota'];
            $asunto="¡Suscribirme!"; //puedo poner un input asunto o crearlo yo directamente  
            $msg="Email: ".$email."\n"
            $mascota="Mascota: ".$mascota."\n".
            $header="From: ".$email."\r\n";//la persona que escribió me dejo su email, entonces el remitente es ese email
            $header.="Reply-To: noreply@blkypets.com"."\r\n";//Le mando un no responder o noreply
            $header.="X-Mailer: PHP/".phpversion();
            $miCasilla="desarrollowebeevl@gmail.com";
            $mail=mail($miCasilla,$asunto,$msg,$header);//en "tu mail" tenes que colocar tu casilla de email de consultas,es decir, la casilla en la cual vas a recibir las consultas que deja la gente en tu página
            if($mail){// si el email se mando respondo éxito con javascript
                echo "<script>
                        alert('¡Gracias por suscribirte y ser parte de nuestra comunidad!');
                        window.location='index.html'
                        </script>";
            }else{//si no se pudo enviar el email lo notifico
                echo "<script>
                        alert('¡Oops! Ocurrió un error, por favor intentá de nuevo.');
                        window.location='index.html'
                        </script>";
            }
        }
        else{//si los parámetros están vacios, aunque podemos controlar esto con required
            echo "<script>
            alert('Por favor completá todos los campos obligatorios.');
                    window.location='index.html'
                    </script>"; 
        }
    }
    header("Location: form.php");
?>