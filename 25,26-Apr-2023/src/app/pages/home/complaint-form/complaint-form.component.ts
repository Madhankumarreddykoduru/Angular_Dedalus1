import { Component,OnInit} from '@angular/core';
import { ComplaintService } from 'src/app/services/complaint.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
@Component({
  selector: 'app-complaint-form',
  templateUrl: './complaint-form.component.html',
  styleUrls: ['./complaint-form.component.css']
})
export class ComplaintFormComponent implements OnInit{
  fname:any;
  email:any;
  message:any;
  myControl = new FormControl('');
  options: string[] = ['Lorenzo', 'Orbis', 'EM'];
  filteredOptions!: Observable<string[]>;
  errors:string[]=[];
  constructor(private hs:ComplaintService) { }
  ngOnInit(){
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  submit(){
    this.errors = []
   
    let expr=/^[a-z][a-z\._0-9]+@[a-z]+\.(com|net|co\.in|in)$/;
    if(this.fname==undefined || this.fname.length<3)
      this.errors.push("First name should be greatr than 3 characters")
    if(this.email==undefined || !expr.test(this.email))
      this.errors.push("Should be in email format")
    if(this.message==undefined || this.message.length<30)
      this.errors.push("Message should be greate than 30 characters")

      if(this.errors.length==0){
        let obj={
          id:Math.round(Math.random()*100000),
          fname: this.fname,
          email: this.email,
          message: this.message

        }
        this.hs.postEnquiry(obj).subscribe({
          next: ()=>{
            alert("You Complaiint is posted")
            this.fname="",
            this.email="",
            this.message=""
          },
          error: ()=>alert("there is a problem posting your complaint")
        }
        )
      }
  }

}
