<nav class="navbar navbar-default footer-nav" role="navigation">
  <div class="container">
    <div>

        <ul class="nav navbar-nav navbar-left">
            <li><a href="/About_Power_9_Pro.php">about</a></li>
            <li><a href="/privacy.php">privacy</a></li>
            <li><a href="/terms.php">terms</a></li>
            <li><a href="/warranty/">warranty</a></li>
            
        </ul>
        <!--<ul class="nav navbar-nav navbar-left">
            <li><a href="http://www.twitter.com/power9pro"><img border="0" src="/icos/twitter.png"></a></li>
            <li><a href="http://www.youtube.com/power9pro"><img border="0" src="/icos/youtube.png"></a></li>
            <li><a href="http://www.facebook.com/power9pro"><img border="0" src="/icos/facebook.png"></a></li>
            <li><a href="http://feeds.feedburner.com/power9pro"><img border="0" src="/icos/feed.png"></a></li>
        </ul>-->
        <!--<div class="newsletter_box newsletter_box_footer float_right">
            <p class="dark">Sign up for the P9P newsletter and get a FREE Ben Lundquist workshop video clip!</p>
           
            <div id="mc_embed_signup">
            <form action="http://power9pro.us1.list-manage.com/subscribe/post?u=92f20bac7dfb8333cad64fd7b&amp;id=53da486104" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank">
                        <div class="mc-field-group" style="clear: both;overflow: hidden;">
                            <label for="mce-EMAIL">Email:</label>
                            <input type="text" value="" name="EMAIL" class="required email" id="mce-EMAIL" style="padding:0;width: 140px;z-index: 999;">
                            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="newsletter_btn">
                        </div>
                    </div>
            </form>end mailchimp
            <small>We don't spam - unsubscribe any time</small>
        </div> end newsletter box-->
      <br />
      <div><small>&copy; 2008-<?php echo date("Y"); ?> Power 9 Pro<br />Not affiliated with Wizards of the Coast, the makers of Magic The Gathering&trade;</small></div>
    </div><!-- /.navbar-collapse -->


  </div><!-- /.container-fluid -->

</nav>

    <!--<div class="center badges">
        <img src="/img/credit_card_logos_26.gif" alt="Visa-Mastercard-Americanexpress-Discover-302*45.gif" style="margin-top:25px"/>
    </div>-->

    <?php 

        $path = $_SERVER['SCRIPT_NAME'];
        if ($path == '/index.php') {
            include ('includes/home_seo.php');
        }

    ?>

    <script type="text/javascript">
    //google analytics
      var _gaq = _gaq || [];
      _gaq.push(['_setAccount', 'UA-6496345-1']);
      _gaq.push(['_trackPageview']);

      (function() {
        var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
      })();

    </script>

</body>
</html>