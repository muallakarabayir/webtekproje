
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <script
    src="https://kit.fontawesome.com/64d58efce2.js"
    crossorigin="anonymous"
  ></script>
    <title>Giriş </title>
    <link rel="stylesheet" href="index.css" />
  </head>
  <body >

  <div class="image">
    <div class="container"> 
      <div class="forms-container">
        <div class="signin-signup">

        <?php 
   if(isset($_POST)){
  if($_POST['kullanici_adi']=='abc'&& $_POST['sifre']=='123'){
    echo "Giriş Başarılı";return;
  }
  else echo "Kullanıcı adınız veya şifreniz hatalı";
}
?>
          <form action="islem.php" method="post">
            <h2 class="title">Giris</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" placeholder="Kullanıcı mail" name="kullanici_adi">
            </div>
            <div class="input-field">
              <i class="fas fa-lock"></i>
              <input type="password" placeholder="Şifre" name="sifre">
            </div>
            
           <a href="index.php" class="btn btn-primary btn-large btn-lock">Giriş Yap</a>
           <a href="kayit.php" class="btn btn-primary btn-large btn-lock"> Kayıt Ol</a>

            <p class="social-text">Ya da Sosyal Medya Hesaplar ile Giriş</p>
            <div class="social-media">
              <a href="#" class="social-icon">
              <i class="fab fa-facebook-f"></i>
            </a>
              <a href="#" class="social-icon">
              <i class="fab fa-google"></i>
            </a>
            <a href="#" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            </div>
          </div>
          
          
<?php
               echo $_SERVER['HTTP_USER_AGENT'];
               if (preg_match('/(android|up.browser|up.link|mmp|symbian|smartphone|midp|wap|phone)/i', strtolower($_SERVER['HTTP_USER_AGENT']))) {
                   echo "Cep telefonundan bağlantı";
               }
               ?>
        </form>


          <footer class="footer">
            <p class="text-footer">
                Copyright &copy 2022
            </p>
        </footer>
         
  <script src="index.js"></script>
  </body>
</html>