import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class AppHeaderComponent {
  constructor(public router : Router){
    console.log("header component")
  }

  btnClick= function () {
    this.router.navigateByUrl('/dialog');
};
}
