
//slider for pricing estimates
  $(".noUiSlider").noUiSlider({
    range: [0, 10]
   ,start: [0, 10]
   ,step: 1
   ,handles: 1
   ,slide: function(){
      var value = $(this).val();
      var valueCost = value * 15;
      valueCost = parseFloat(Math.round(valueCost * 100) / 100).toFixed(2);
      
      if (value >=4) {
        var savings = valueCost - 39.95;
        $('.which-plan').text('Pro');
      }
      else {
        var savings = valueCost - 8.95;
        $('.which-plan').text('Player Plus');
      }

      savings = parseFloat(Math.round(savings * 100) / 100).toFixed(2);



      $(".cost").text(valueCost);
      //$(".hours").text(value);
      $(".hours-saved").text(value);
      if (savings < 0) {
        $(".savings").text('0.00');
      }
      else {
         $(".savings").text(savings);
      }
      
      if (value == 1) {
        $('.noUiSlider.horizontal div').html('<span class="slider-val">'+value+' hour</span>');
        $(".hours").text('hour');
      }
      else {
        $('.noUiSlider.horizontal div').html('<span class="slider-val">'+value+' hours</span>');
        $(".hours").text('hours');
      }
      
   }
  }); 

  $(function() {
    //enable popoovers

      $('html').click(function(e) {
          $('.popovers a').popover('hide');
      });

      $('.popovers a').popover({
          html: true,
          trigger: 'manual'
      }).click(function(e) {
          $(this).popover('toggle');
          e.stopPropagation();
      });

      //registratrion amount due notification
      $('#plan').on('change', function() {
          if ($(this).val() == 'Player') {
              $('.amount-due').text('1.95');
          }
          else if($(this).val() == 'playerbasic') {
              $('.amount-due').text('4.95');
          }
          else if($(this).val() == 'Pro') {
              $('.amount-due').text('39.95');
            }
          else if($(this).val() == 'Storefront') {
              $('.amount-due').text('49.95');
          }
      });

      //international state switching 
     $('#country').on('change', function() {
          if( $(this).val() == 'MX' ) {
            $('#state').html('<option value="DIF">Distrito Federal</option> <option value="AGS">Aguascalientes</option> <option value="BCN">Baja California</option> <option value="BCS">Baja California Sur</option> <option value="CAM">Campeche</option> <option value="CHP">Chiapas</option> <option value="CHI">Chihuahua</option> <option value="COA">Coahuila</option> <option value="COL">Colima</option> <option value="DUR">Durango</option> <option value="GTO">Guanajuato</option> <option value="GRO">Guerrero</option> <option value="HGO">Hidalgo</option> <option value="JAL">Jalisco</option> <option value="MEX">M&eacute;xico</option> <option value="MIC">Michoac&aacute;n</option> <option value="MOR">Morelos</option> <option value="NAY">Nayarit</option> <option value="NLE">Nuevo Le&oacute;n</option> <option value="OAX">Oaxaca</option> <option value="PUE">Puebla</option> <option value="QRO">Quer&eacute;taro</option> <option value="ROO">Quintana Roo</option> <option value="SLP">San Luis Potos&iacute;</option> <option value="SIN">Sinaloa</option> <option value="SON">Sonora</option> <option value="TAB">Tabasco</option> <option value="TAM">Tamaulipas</option> <option value="TLX">Tlaxcala</option> <option value="VER">Veracruz</option> <option value="YUC">Yucat&aacute;n</option> <option value="ZAC">Zacatecas</option>');
          }
          else if ( $(this).val() == 'CA' ) {
            $('#state').html('<option value="AB">Alberta</option> <option value="BC">British Columbia</option> <option value="MB">Manitoba</option> <option value="NB">New Brunswick</option> <option value="NL">Newfoundland and Labrador</option> <option value="NS">Nova Scotia</option> <option value="ON">Ontario</option> <option value="PE">Prince Edward Island</option> <option value="QC">Quebec</option> <option value="SK">Saskatchewan</option> <option value="NT">Northwest Territories</option> <option value="NU">Nunavut</option> <option value="YT">Yukon</option>');
          }
          else { //only US for now.
            $('#state').html('<option value="">State</option> <option value="AL">Alabama</option> <option value="AK">Alaska</option> <option value="AZ">Arizona</option> <option value="AR">Arkansas</option> <option value="CA">California</option> <option value="CO">Colorado</option> <option value="CT">Connecticut</option> <option value="DE">Delaware</option> <option value="DC">District of Columbia</option> <option value="FL">Florida</option> <option value="GA">Georgia</option> <option value="HI">Hawaii</option> <option value="ID">Idaho</option> <option value="IL">Illinois</option> <option value="IN">Indiana</option> <option value="IA">Iowa</option> <option value="KS">Kansas</option> <option value="KY">Kentucky</option> <option value="LA">Louisiana</option> <option value="ME">Maine</option> <option value="MD">Maryland</option> <option value="MA">Massachusetts</option> <option value="MI">Michigan</option> <option value="MN">Minnesota</option> <option value="MS">Mississippi</option> <option value="MO">Missouri</option> <option value="MT">Montana</option> <option value="NE">Nebraska</option> <option value="NV">Nevada</option> <option value="NH">New Hampshire</option> <option value="NJ">New Jersey</option> <option value="NM">New Mexico</option> <option value="NY">New York</option> <option value="NC">North Carolina</option> <option value="ND">North Dakota</option> <option value="OH">Ohio</option> <option value="OK">Oklahoma</option> <option value="OR">Oregon</option> <option value="PA">Pennsylvania</option> <option value="RI">Rhode Island</option> <option value="SC">South Carolina</option> <option value="SD">South Dakota</option> <option value="TN">Tennessee</option> <option value="TX">Texas</option> <option value="UT">Utah</option> <option value="VT">Vermont</option> <option value="VA">Virginia</option> <option value="WA">Washington</option> <option value="WV">West Virginia</option> <option value="WI">Wisconsin</option> <option value="WY">Wyoming</option>');
          } 
      }); 

      //form validation
      $.validator.addMethod("password_match", function(value, element) {
         return $('#password').val() == $('#password_confirm').val()
      }, "Passwords do not match");


      $('#reg-form').validate({
      rules: {
        username: {
          minlength: 2,
          required: true
        },
        email: {
          required: true,
          email: true
        },
        password: {
          minlength: 6,
          password_match: true
        },
        password_confirm: {
          minlength: 6,
          password_match: true
        },
        full_name: {
          minlength: 2,
          required: true
        },
        address_line1: {
          minlength: 2,
          required: true
        },
        city: {
          minlength: 2,
          required: true
        },
        zip: {
          minlength: 2,
          required: true
        }

      },
      highlight: function(element) {
        $(element).closest('.control-group').removeClass('success').addClass('error');
      },
      success: function(element) {
        element
        .text('OK!').addClass('valid')
        .closest('.control-group').removeClass('error').addClass('success');
      }
    });
  });//end ready