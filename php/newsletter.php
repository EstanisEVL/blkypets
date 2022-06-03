<?php
    if(isset($_POST['suscribirme'])){
        if(!empty($_POST['email'])&& !empty($_POST['nombreMascota'])){

            $email=$_POST['email'];
            $mascota=$_POST['nombreMascota'];
            $asunto="¡Suscribirme!";
            $header="From: ".$email."\r\n";
            $header.="Reply-To: noreply@blkypets.com"."\r\n";
            $header.="X-Mailer: PHP/".phpversion();
            $miCasilla="desarrollowebeevl@gmail.com";
            $mail=mail($miCasilla,$asunto,$header);
            if($mail){
                echo "<script>
                        alert('¡Gracias por suscribirte y ser parte de nuestra comunidad!');
                        window.location='../index.html'
                        </script>";
            }else{
                echo "<script>
                        alert('¡Oops! Ocurrió un error, por favor intentá de nuevo.');
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