import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})

export class AddImageComponent implements OnInit {

  imageSelected:boolean = false;
  imageToCrop: boolean = false;
  imageToUpload: boolean = true;;
  imageURL:string;
  orgimageURL: string;

  rotateValue = 0;
  imageSize: FormGroup;
  

  constructor(
    public fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
  ){
    
    this.imageURL = "";
    this.orgimageURL = "";
    this.imageSize = this.fb.group({
      vert: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      horz: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    })
  }

  ngOnInit(): void {  
    this.activatedRoute.params.subscribe(params => {
      this.imageSelected = false;
      this.imageToCrop = false;
      this.imageToUpload = true;
    });
    
  }

  formatLabel(value: number) {
    return value;
  }
  async changeSize(){
    if(!this.imageSize.valid){
      console.log("invalid")
      return false;
    }
    else{
      this.compressImage(this.imageSize.controls['vert'].value,this.imageSize.controls['horz'].value).then((compressed : any) => {
        console.log(compressed.length);
        this.imageURL = compressed;
      })
    }
    return;
  }
  compressImage(newX : number, newY : number ) {
    return new Promise((res : any, rej) => {
      console.log(newX, newY, "-------------")
      const img = new Image();
      img.src = this.orgimageURL;
      img.onload = () => {
        const elem = document.createElement('canvas');
        elem.width = newX;
        elem.height = newY;
        const ctx = elem.getContext('2d');
        if(ctx != null){
          ctx.drawImage(img, 0, 0, newX, newY);
          const data = ctx.canvas.toDataURL();
          res(data);
        }
        else res("sd");
      }
      img.onerror = error => rej(error);
    })
  }
  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.imageURL = event.target.result;
      this.orgimageURL = event.target.result;
      var img = new Image();
      img.onload = () => {
          this.imageSelected = true;
          //this.setHandW();
      };
      img.src = this.imageURL;
    });
    reader.readAsDataURL(file);
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageToUpload = false;
    this.imageToCrop = true;
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
      this.croppedImage = event.base64;
  }

  imageCroppedFinal(){
    this.imageToCrop = false;
    this.imageSelected = true;
    this.imageURL = this.croppedImage;
    this.orgimageURL = this.croppedImage;
  }

}
