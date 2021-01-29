<body>
<nav class="navbar navbar-inverse" role="navigation">
  <div class="container">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <a class="navbar-brand" href="/"><img src="/media/img/p9p-small.png" alt="Power 9 Pro" /></a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div id="bs-example-navbar-collapse-1">


      <ul class="nav navbar-nav navbar-right">
        <li><a href="/dragons-egg">dragon's egg</a></li>
        <li><a href="/sidekit/">sidekit</a></li>
        <li><a href="/ndexers">n-dexers</a></li> 
        <li><a href="/retail.php">retailers</a></li>
        <li><a class="foxycart" href="https://power9pro.foxycart.com/cart?cart=view"><img border="0" src="/icos/cart.png"></a></li>
        <?php
    if ($wholesale_user) {
        print '<li><a href="/wholesale/" class="wholesale_portal_link">wholesaler portal</a></li>';
    }
    ?>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

