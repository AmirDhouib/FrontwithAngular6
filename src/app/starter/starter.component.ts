import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AnnonceService } from '../../Service/annonceService';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}



@Component({
  selector: 'app-starter',
  templateUrl: './starter.component.html',
  styleUrls: ['./starter.component.scss']
})
export class StarterComponent implements AfterViewInit {
  ngAfterViewInit() {}

  annoncesList : any = [];
 
  constructor(public router : Router,private  annonceService : AnnonceService){
    console.log("starter component")
    debugger
    
  }

  ngOnInit(){
    this.annonceService.findAnnonces().subscribe(result => {
      debugger;
      this.annoncesList = result;

    })

  }

  btnClick= function () {
    this.router.navigateByUrl('/dialog',  { queryParams: 'page' });
};

detail(accommodation){
  debugger;
  let navigationExtras: NavigationExtras = {
    queryParams: { 'session_id': accommodation }
  };
  //this.router.navigate(['/progress'], navigationExtras);

  this.router.navigate(['/progress', accommodation]);
}

}
