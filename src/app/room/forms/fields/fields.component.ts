import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-fields',
  templateUrl: './fields.component.html',
  styleUrls: ['./fields.component.css']
})
export class FieldsComponent implements OnInit {

  @Input() inputFormGroup = this.fb.group({
    title: new FormControl('',Validators.required),
    capacity: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    room_type: new FormControl('', Validators.required),
    image: new FormControl('')
  });
  constructor(
    private fb: FormBuilder
  ) { }
  imageSrc: string= '';
  get f(){
    return this.inputFormGroup.controls;
  }

  onChange(event:any) {
    const reader = new FileReader();

    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {

        this.imageSrc = reader.result as string;

        this.inputFormGroup.patchValue({
          image: reader.result
        });

      };

    }
  }

  ngOnInit(): void {
  }

}
