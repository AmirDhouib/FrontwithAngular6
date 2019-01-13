import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AnnonceService } from '../../Service/annonceService';
import { concat } from 'rxjs';

export interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {

  nameProp : any;
  phoneProp :any;
  categorie : any;
  ville : any;
  region : any;
  address : any;
  nbrePiece : any;
  prix : any;
  furnished : any =false;


  categorieControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  villeControl = new FormControl('', Validators.required);
  regionControl = new FormControl('', Validators.required);

  categories: any[] = [
    {name: 'Appartement'},
    {name: 'Villa ou maison'},
  ];

  villes: any[] = [
    {name: 'Ariana'},
    {name: 'Béja'},
    {name: 'Ben Arous'}, 
    {name: 'Bizerte'},
    {name: 'Gabes'},
    {name: 'Gafsa'},
    {name: 'Jendouba'},
    {name: 'Kairouan'},
    {name: 'Kasserine'},
    {name: 'Kebili'},
    {name: 'La Manouba'},
    {name: 'Le Kef'},
    {name: 'Mahdia'},
    {name: 'Médenine'},
    {name: 'Monastir'},
    {name: 'Nabeul'},
    {name: 'Sfax'},
    {name: 'Sidi Bouzid'},
    {name: 'Siliana'},
    {name: 'Sousse'},
    {name: 'Tataouine'},
    {name: 'Tozeur'},
    {name: 'Tunis'},
    {name: 'Zaghouan'},
   
  ];


  
  checked(event){
    debugger;
    console.log(event)
    this.furnished = event.checked
  }

  selectedFiles: FileList;
  progress: { percentage: number } = { percentage: 0 };
  currentFileUpload: any;
  regions: any = [];
  constructor(public router : Router,public route : ActivatedRoute,public dialog: MatDialog, private annonceService : AnnonceService) {
    debugger
    console.log(this.route.snapshot.params);
    

  }
  onChange(event){
debugger;
if(this.ville.name == 'Sfax'){
  this.regions = [
     {name : 'region1'},
     {name : 'region2'},
     {name : 'region3'},
     {name : 'region4'},
     {name : 'region5'},
     {name : 'region6'},
 
   ]
 }
  }
  ngOnInit() {
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

  addAnnonce(){

    
    debugger;
    if(this.nameProp && this.phoneProp && this.address && this.region && this.ville && this.categorie && this.nbrePiece && this.prix){
      console.log("nom prop " + this.nameProp)
      console.log("phone prop " + this.phoneProp)
      console.log("adress " + this.address)
      console.log("reg " + this.region.name)
      console.log("ville " + this.ville.name)
      console.log("cat " +this.categorie.name)
      console.log("chambre " +this.nbrePiece )
      console.log("prix " + this.prix)

      var accommodation = {
        "city" : this.ville.name,
        "address" : this.address,
        "numberOfRooms" : this.nbrePiece,
        "furnished" :  this.furnished,
        "images" : [],
        "description" : "hfhbfjnjfhbnkk,f",
        "prix": this.prix,
        "category": this.categorie.name,
        "country" : this.region.name
      }
      this.annonceService.addAnnonce(accommodation).subscribe(res => {
        debugger;
        console.log(res);
        this.router.navigate(['/starter']);

      })

    } else 
     {
      console.log("rrr")
     }
   

  }
 
 
}


