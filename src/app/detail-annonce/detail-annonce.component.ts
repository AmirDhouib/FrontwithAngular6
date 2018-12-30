import { Component, OnInit } from '@angular/core';
import { Animal } from '../add-annonce/add-annonce.component';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

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
 
    constructor(public route : ActivatedRoute) {
    debugger
    console.log(this.route.snapshot.params);
    this.employee = { empName: 'Sanket', email: '', phone: 444, address:'Appartement' };


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
 
 
}
