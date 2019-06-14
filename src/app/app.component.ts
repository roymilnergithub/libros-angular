import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit() {
    $(document).ready(function(){
      $.getScript("assets/librerias/animsition/js/animsition.min.js");
      $.getScript("assets/js/main.js");
      // $.getScript("assets/librerias/jquery/jquery-3.2.1.min.js");
      // $.getScript("assets/librerias/bootstrap/js/popper.js");
      // $.getScript("assets/librerias/bootstrap/js/bootstrap.min.js");
      // $.getScript("assets/librerias/select2/select2.min.js");
      // $.getScript("assets/librerias/daterangepicker/moment.min.js");
      // $.getScript("assets/librerias/daterangepicker/daterangepicker.js");
      // $.getScript("assets/librerias/slick/slick.min.js");
      // $.getScript("assets/js/slick-custom.js");
      // $.getScript("assets/librerias/parallax100/parallax100.js");
      // $.getScript("assets/librerias/MagnificPopup/jquery.magnific-popup.min.js");
      // $.getScript("assets/librerias/isotope/isotope.pkgd.min.js");
      // $.getScript("assets/librerias/sweetalert/sweetalert.min.js");
      // $.getScript("assets/librerias/perfect-scrollbar/perfect-scrollbar.min.js");
    });

  }

}
