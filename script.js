$(document).ready(function(){
  var vp_width = vpWidth(); 
  var vp_height = vpHeight();  
  var x_pos = 0;
  var y_pos = 0;
  var korrektur_faktor = 0.9;
  var band_position = 0;
  var anzahl_buchstaben = 29;
  var buchstaben_breite = Math.floor(vp_height/4);
  var buchstaben_hoehe = buchstaben_breite;
  var font_size = buchstaben_breite - 4;
  var buchstaben_position = font_size * korrektur_faktor;
  var buchstaben_breite_display = Math.floor(buchstaben_breite / 2);
  var buchstaben_hoehe_display = Math.floor(buchstaben_hoehe / 2);
  var font_size_display = Math.floor(font_size / 2);
  var buchstaben_position_display = Math.floor(buchstaben_position / 2);
  var buchstaben_pro_zeile = Math.floor(vp_width / buchstaben_breite);
  var bandlaengegesamt = buchstaben_breite * anzahl_buchstaben;
  var anzahl_buchstaben_sichtbar = Math.floor(vp_width / buchstaben_breite);
  var bandlaengesichtbar = anzahl_buchstaben_sichtbar * buchstaben_breite;
  var anzahl_voll_scrollen = Math.floor(bandlaengegesamt / bandlaengesichtbar) - 1;
  var letztes_stueck_scrollen = bandlaengegesamt - bandlaengesichtbar * (anzahl_voll_scrollen + 1);
  var zeile = "#row1";
  var zeile_als_zahl = 1;
  var anzahl_buchstaben_in_zeile = 0;

  resize(buchstaben_hoehe, bandlaengegesamt, bandlaengesichtbar);
  fill_band(buchstaben_breite, buchstaben_hoehe, buchstaben_position, font_size);

  $( "#row1" ).sortable({
            distance:30
  });
  $( "#row2" ).sortable();

  if(zeile_als_zahl < 4) {
	  $('#buchstabe_a').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display+ '" height="' + buchstaben_hoehe_display+ '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">A</text></svg></li>');
	  });

	  $('#buchstabe_b').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">B</text></svg></li>');
	  });

	  $('#buchstabe_c').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">C</text></svg></li>');
	  });

	  $('#buchstabe_d').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">D</text></svg></li>');
	  });

	  $('#buchstabe_e').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">E</text></svg></li>');
	  });

	  $('#buchstabe_f').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">F</text></svg></li>');
	  });

	  $('#buchstabe_g').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">G</text></svg></li>');
	  });

	  $('#buchstabe_h').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">H</text></svg></li>');
	  });

	  $('#buchstabe_i').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">I</text></svg></li>');
	  });

	  $('#buchstabe_j').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">J</text></svg></li>');
	  });

	  $('#buchstabe_k').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">K</text></svg></li>');
	  });

	  $('#buchstabe_l').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">L</text></svg></li>');
	  });

	  $('#buchstabe_m').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">M</text></svg></li>');
	  });

	  $('#buchstabe_n').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">N</text></svg></li>');
	  });
	  $('#buchstabe_o').click(function(){

	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">O</text></svg></li>');
	  });

	  $('#buchstabe_p').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">P</text></svg></li>');
	  });

	  $('#buchstabe_q').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">Q</text></svg></li>');
	  });

	  $('#buchstabe_r').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">R</text></svg></li>');
	  });

	  $('#buchstabe_s').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">S</text></svg></li>');
	  });

	  $('#buchstabe_t').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">T</text></svg></li>');
	  });

	  $('#buchstabe_u').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">U</text></svg></li>');
	  });

	  $('#buchstabe_v').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">V</text></svg></li>');
	  });

	  $('#buchstabe_w').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">W</text></svg></li>');
	  });

	  $('#buchstabe_x').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">X</text></svg></li>');
	  });

	  $('#buchstabe_y').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">Y</text></svg></li>');
	  });

	  $('#buchstabe_z').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">Z</text></svg></li>');
	  });

	  $('#buchstabe_auml').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">&Auml;</text></svg></li>');
	  });

	  $('#buchstabe_ouml').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">&Ouml;</text></svg></li>');
	  });

	  $('#buchstabe_uuml').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	   $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">&Uuml;</text></svg></li>');
	  });

	  $('#leertaste').click(function(){
	    anzahl_buchstaben_in_zeile = anzahl_buchstaben_in_zeile + 1;
	    if(anzahl_buchstaben_in_zeile >= anzahl_buchstaben_sichtbar * 2 - 1) {
	      anzahl_buchstaben_in_zeile = 1;
	      zeile_als_zahl = zeile_als_zahl + 1;
	      zeile = "#row" + zeile_als_zahl;
	    }
	    $(zeile).append('<li class="buchstabe"><svg width="' + buchstaben_breite_display + '" height="' + buchstaben_hoehe_display + '" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position_display + '" font-size="' + font_size_display + '">&nbsp;</text></svg></li>');
	  });
  }

  $('#erase').click(function() {
    location.reload();
  });

  $('#double_left_arrow').click(function(){
    band_position = 0;
    $('#letters_inner').animate({'left':'0'}, 'fast');
  });

  $('#left_arrow').click(function(){
    band_position = band_position - 1;
    if (band_position > 0) {
      // Scroll left
      $('#letters_inner').animate({'left':'+=' + bandlaengesichtbar}, 'slow');
    } else {
      $('#letters_inner').animate({'left':'+=' + letztes_stueck_scrollen}, 'slow');
    }
  });

  $('#double_right_arrow').click(function(){
     $('#letters_inner').animate({'left':'-=' + (bandlaengegesamt - bandlaengesichtbar)}, 'fast');
  });

  $('#right_arrow').click(function(){
    band_position = band_position + 1;

    if (band_position < anzahl_voll_scrollen) {
      // Scroll left
      $('#letters_inner').animate({'left':'-=' + bandlaengesichtbar}, 'slow');
    } else {
      $('#letters_inner').animate({'left':'-=' + letztes_stueck_scrollen}, 'slow');
    }
  });
});

function vpWidth() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return e[ a+'Width' ] 
}

function vpHeight() {
    var e = window, a = 'inner';
    if (!('innerWidth' in window )) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return e[ a+'Height' ] 
}

function fill_band(buchstaben_breite, buchstaben_hoehe, buchstaben_position, font_size) {
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_a" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">A</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_b" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">B</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_c" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">C</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_d" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">D</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_e" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">E</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_f" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">F</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_g" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">G</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_h" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">H</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_i" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">I</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_j" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">J</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_k" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">K</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_l" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">L</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_m" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">M</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_n" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">N</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_o" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">O</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_p" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">P</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_q" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">Q</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_r" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">R</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_s" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">S</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_t" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">T</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_u" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">U</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_v" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">V</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_w" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">W</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_x" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">X</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_y" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">Y</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_z" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">Z</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_auml" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">&Auml;</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_ouml" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">&Ouml;</text></svg>');
	$('#letters_inner').append('<svg class="buchstabe" id="buchstabe_uuml" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">&Uuml;</text></svg>');

        $('#navi').append('<svg id="double_left_arrow" width="' + (buchstaben_breite * 1.5) + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">&lt;&lt;</text></svg>');
        $('#navi').append('<svg width="' + (buchstaben_breite / 3) + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">&nbsp;</text></svg>');
        $('#navi').append('<svg id="left_arrow" width="' + (buchstaben_breite) + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">&lt;</text></svg>');
//        $('#navi').append('<svg width="' + (buchstaben_breite / 3) + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">&nbsp;</text></svg>');
        $('#navi').append('<svg id="right_arrow" width="' + (buchstaben_breite) + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">&gt;</text></svg>');
        $('#navi').append('<svg width="' + (buchstaben_breite / 3) + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">&nbsp;</text></svg>');
//        $('#navi').append('<svg id="double_right_arrow" width="' + (buchstaben_breite * 2) + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">&gt;&gt;</text></svg>');
//        $('#navi').append('<svg width="' + (buchstaben_breite / 2) + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">&nbsp;</text></svg>');
        $('#navi').append('<svg class="buchstabe" id="leertaste" width="' + buchstaben_breite + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + (buchstaben_position * 0.7) + '" font-size="' + (font_size / 4) + '">Space</text></svg>');
        $('#navi').append('<svg width="' + (buchstaben_breite / 3) + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">&nbsp;</text></svg>');
        $('#navi').append('<svg class="buchstabe" id="erase" width="' + (buchstaben_breite) + 'px" height="' + buchstaben_hoehe + 'px" xmlns="http://www.w3.org/2000/svg"><text x="2" y="' + buchstaben_position + '" font-size="' + font_size + '">&larr;</text></svg>');

}

function resize(buchstaben_hoehe, bandlaengegesamt, bandlaengesichtbar) {
// slider gesamt
  $('#letters_inner').css('width' , bandlaengegesamt);
  $('#letters_inner').css('height' , buchstaben_hoehe);
  $('#letters_inner img').css('width' , buchstaben_hoehe);
  $('#letters_inner img').css('height' , buchstaben_hoehe);
// slider sichtbar
  $('#letters').css('width' , bandlaengesichtbar);
  $('#letters').css('height' , buchstaben_hoehe);
}

