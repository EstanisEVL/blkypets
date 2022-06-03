<?php
    if(isset($_POST['enviar'])){//si el botón con el name enviar es pulsado
        if(!empty($_POST['nombre'])&& !empty($_POST['email'])&&!empty($_POST['msg'])){
            //si no están vacios los inputs name, email y msg 
            //guardo el contenido de cada campo en variables:
            $nombre=$_POST['nombre'];
            $email=$_POST['email'];
            $mascota=$_POST['mascota'];
            $asunto="Consulta sobre productos BLKY Pets"; //puedo poner un input asunto o crearlo yo directamente  
            $msg="Nombre: ".$nombre."\n".$_POST['msg'];
            // $mascota="Mascota: ".$mascota."\n"
            $header="From: ".$email."\r\n";//la persona que escribió me dejo su email, entonces el remitente es ese email
            $header.="Reply-To: noreply@blkypets.com"."\r\n";//Le mando un no responder o noreply
            $header.="X-Mailer: PHP/".phpversion();
            $miCasilla="desarrollowebeevl@gmail.com";
            $mail=mail($miCasilla,$asunto,$msg,$header);//en "tu mail" tenes que colocar tu casilla de email de consultas,es decir, la casilla en la cual vas a recibir las consultas que deja la gente en tu página
            if($mail){// si el email se mando respondo éxito con javascript
                echo "<script>
                        alert('¡Gracias por tu mensaje! En breve nos estaremos comunicando con vos.');
                        window.location='../index.html'
                        </script>";
            }else{//si no se pudo enviar el email lo notifico
                echo "<script>
                        alert('¡Oops! No pudimos enviar tu consulta, intentá de nuevo.');
                        window.location='../index.html'
                        </script>";
            }
        }
        else{//si los parámetros están vacios, aunque podemos controlar esto con required
            echo "<script>
            alert('Por favor completá todos los campos obligatorios.');
                    window.location='../index.html'
                    </script>"; 
        }
    }
    header("Location: form.php");
?>