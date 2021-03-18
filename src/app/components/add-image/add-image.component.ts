import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})

export class AddImageComponent implements OnInit {

  imageSelected:boolean;
  imageURL:string;
  imageWidth: number = 0;
  imageHeight: number = 0;

  rotateValue = 0;

  

  constructor(){
    this.imageSelected = false;
    this.imageURL = "";
  }

  ngOnInit(): void {
  }

  formatLabel(value: number) {
    return value;
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.imageURL = event.target.result;
      var img = new Image();
      img.onload = () => {
          this.imageWidth = img.width;
          this.imageHeight = img.height;
          this.imageSelected = true;
          //this.setHandW();
      };
      img.src = this.imageURL;
    });
    reader.readAsDataURL(file);
  }

}
