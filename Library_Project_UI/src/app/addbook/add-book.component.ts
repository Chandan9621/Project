// import { AddbookService } from './addbook.service';

import { AfterViewInit, Component, EventEmitter, OnInit, Query, QueryList, ViewChildren } from '@angular/core';
import{FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';

import { Router } from '@angular/router';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
  import Swal from 'sweetalert2';
// import { Addbook } from './addbook';
import { AddserviceService } from './addservice.service';
import { Addbooks } from './addbooks';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements AfterViewInit {
  // Apply View Children for multiple matching element.
  @ViewChildren("formRef")marker!:QueryList<any>;
  bookid:any;
  jsonString:any;
  TableVisible=true;
editedData:any;
tableData:any [] = [];
 addbook:any;
 public fin :any[]=[];
  public finn :any;
  //  isTableVisible=false;
  bookdeleted:EventEmitter<any> = new EventEmitter();
  editMode = false;
  editedRowIndex: number = -1;
   userForm = new FormGroup({
    author: new FormControl(''),
    book:new FormControl(''),
    copies:new FormControl(''),
    firstpublished:new FormControl(''),
    genre:new FormControl(''),
     language:new FormControl(''),
     price:new FormControl(''),
    volumesold:new FormControl('')
   });

get log()
{
  return this.userForm.controls;
}
  constructor(private fb:FormBuilder,private addbooks:AddserviceService){}

  ngOnInit() {
    // this.bookid = sessionStorage.getItem("bookid");
    this.userForm=this.fb.group({
    author:['',[Validators.required]],
      book:['',[Validators.required]],
      copies:['',[Validators.required]],
     firstpublished:['',[Validators.required]],
     genre:['',[Validators.required]],
     language:['',[Validators.required]],
     price:['',[Validators.required]],
     volumesold:['',[Validators.required]]

    })

  }

//  Adding the item
  public addItem() {
     this.addbook=<Addbooks>this.userForm.value;
    console.log("Chandan pandey12345"+this.addbook.book)
    this.addbooks.save(this.addbook).subscribe((data:any)=>{
      if(data.data)
      {
        console.log('User data',data);
        console.log('User data',data.data.bookid);
        this.bookid = data.data.bookid;
        alert("Book Details Saved Sucessfully");

      }
    // this.fin.push(this.fin);
    this.tableData.push(this.userForm.value);
    console.log(this.tableData);
    const jsonObject = Object.assign({}, ...this.tableData);
    console.log("ABCDE"+JSON.stringify(jsonObject));
    console.log("OutPut: "+JSON.stringify(this.tableData));
    this.userForm.reset();
     this.TableVisible=false;
    });}


  confirmationBox(value:any) {
      Swal.fire({
      title:'Are you Sure you want to delete',
      //text: 'This process is irreversible.',
     // icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think',
    }).then((result)=>{
      if(result.isConfirmed){
        this.addbooks.deleteBook(this.bookid).subscribe((data:any)=>
        {

        });
    this.bookdeleted.emit(value)
    const it=this.tableData.indexOf(value);
    if(it!=-1)
   {

    this.tableData.splice(it,1);//The splice() method allows you to add or remove elements from an array at a specified index.
    Swal.fire('Removed!', 'Product removed successfully.', 'success');

   }
  }
  else if (result.dismiss === Swal.DismissReason.cancel) {
    Swal.fire('Cancelled', 'Product still in our database.)', 'error');
  }
});
  }
  edit(index: number): void {
    Swal.fire({
      title:'Are you Sure you want to update',
      confirmButtonText: 'Yes, go ahead.',
    }).then((result:any)=>{
      if(result.value){

     this.editMode = true;
     this.editedRowIndex = index;
     const editedRowData = this.tableData[index];
     this.userForm.patchValue(editedRowData);
      }
    });
  }


  Update() {
    if(this.userForm.valid) {
    this. editedData =<Addbooks> this.userForm.value;
    console.log("Result1"+this.bookid);
    console.log("Result2"+this.editedData);
    this. jsonString = JSON.stringify(this.editedData);
    console.log(this. jsonString)
      this.addbooks.updateBook(this. jsonString,this.bookid).subscribe((data:any)=>
      {
        console.log(data.message);


      }
      );
      this.tableData[this.editedRowIndex] = this.editedData;
      console.log("+++++++"+this.editedData.volumesold);
      console.log("+++++"+this.tableData[this.editedRowIndex]);
      this.editMode = false;
      this.editedRowIndex = -1;
      this.userForm.reset();


    }
}
    ngAfterViewInit(): void {
     console.log(this.marker)
     this.marker.first.nativeElement.style.color="green";
     this.marker.last.nativeElement.style.color="green";
    }
  }

