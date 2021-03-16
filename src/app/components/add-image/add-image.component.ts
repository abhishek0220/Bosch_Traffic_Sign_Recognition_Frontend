import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})

export class AddImageComponent implements OnInit {

  imageSelected:boolean;
  imageURL:string;

  constructor(){
    this.imageSelected = false;
    this.imageURL = "";
  }

  ngOnInit(): void {
    
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.imageURL = event.target.result;
    });
    reader.readAsDataURL(file);
  }

}
