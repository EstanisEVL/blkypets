<?php
    if(isset($_POST['enviar'])){
        if(!empty($_POST['nombre'])&& !empty($_POST['email'])&&!empty($_POST['msg'])){
            $nombre=$_POST['nombre'];
            $email=$_POST['email'];
            $mascota=$_POST['mascota'];
            $asunto="Consulta sobre productos BLKY Pets"; 
            $msg="Nombre: ".$nombre."\n".$_POST['msg'];
            $header="From: ".$email."\r\n";
            $header.="Reply-To: noreply@blkypets.com"."\r\n";
            $header.="X-Mailer: PHP/".phpversion();
            $miCasilla="desarrollowebeevl@gmail.com";
            $mail=mail($miCasilla,$asunto,$msg,$header);
            if($mail){
                echo "<script>
                        alert('¡Gracias por tu mensaje! En breve nos estaremos comunicando con vos.');
                        window.location='../index.html'
                        </script>";
            }else{
                echo "<script>
                        alert('¡Oops! No pudimos enviar tu consulta, intentá de nuevo.');
                        window.location='../index.html'
                        </script>";
            }
        }
        else{
            echo "<script>
            alert('Por favor completá todos los campos obligatorios.');
                    window.location='../index.html'
                    </script>"; 
        }
    }
    header("Location: form.php");
?>