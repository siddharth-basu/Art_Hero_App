import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-causes',
  templateUrl: './causes.component.html',
  styleUrls: ['./causes.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() {
      this.openMenu();
  };

  ngOnInit() {
  }

    openMenu(){
        $('body').removeClass('noScroll');

        if ($('.collapse').hasClass('collapse-active')) {
            $('.collapse').removeClass('collapse-active');
        }
        else {
            $('.collapse').addClass('collapse-active');
        }
    }

}
