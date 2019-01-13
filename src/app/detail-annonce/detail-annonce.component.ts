import { Component, OnInit } from '@angular/core';
import { Animal } from '../add-annonce/add-annonce.component';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Accommodation } from '../../Model/accommodation';
import { map } from 'rxjs/operators';
import { AnnonceService } from '../../Service/annonceService';

@Component({
  selector: 'app-detail-annonce',
  templateUrl: './detail-annonce.component.html',
  styleUrls: ['./detail-annonce.component.css']
})


export class DetailAnnonceComponent implements OnInit {
  



  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Apparatement', sound: 'Woof!'},
    {name: 'Villa ou maison', sound: 'Meow!'},
  ];

  animal : Animal = 
    {name: 'Apparatement', sound: 'Woof!'}
    

  selectedFiles: FileList;
  progress: { percentage: number } = { percentage: 0 };
  currentFileUpload: any;
  employee: { empName: string; email: string; phone: number; address: string; };
  kll: Accommodation;
  sessionId: any;
  id: number;
  selectedAnnonce: any;
  address: any;
  city: any;
  numberOfRooms: any;
  category : any;
  prix : any;
  region: any;
  furnished : any;
  description: any;
 
    constructor(public route : ActivatedRoute,public annonceService : AnnonceService) {

      console.log("detail annonce")
    debugger
    console.log(" detail annonce" +this.route.snapshot.params);
    this.employee = { empName: 'Sanket', email: '', phone: 444, address:'Appartement' };
    this.route.params.subscribe(params => {
      debugger
      this.id = params['id']; 
   });

   this.annonceService.detailAnnonce(this.id).subscribe(result =>{
     debugger;
     this.selectedAnnonce = result;
      this.address = this.selectedAnnonce.address;
      this.city = this.selectedAnnonce.city;
      this.numberOfRooms = this.selectedAnnonce.numberOfRooms;
      this.category = this.selectedAnnonce.category;
      this.prix = this.selectedAnnonce.prix;
      this.region = this.selectedAnnonce.country;
      this.furnished = this.selectedAnnonce.furnished;
      this.description = this.selectedAnnonce.description;
   })

  }

  ngOnInit() {
    debugger
    /*this.sessionId = this.route
    .queryParamMap
    .pipe(map(params => 
      
      params.get('session_id') || 'None'
      
    ));*/

  

    console.log("hhhh" + this.sessionId)
  }
  onFileChanged(event) {
    const file = event.target.files[0]
  }
  selectFile(event) {
    const file = event.target.files.item(0);
 
    if (file.type.match('image.*')) {
      this.selectedFiles = event.target.files;
    } else {
      alert('invalid format!');
    }
  }
 
 
}
