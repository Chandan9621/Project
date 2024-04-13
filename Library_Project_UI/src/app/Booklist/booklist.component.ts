import { Component } from '@angular/core';
import { BooklistService } from './booklist.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent {
onedit(_t19: number) {
throw new Error('Method not implemented.');
}
  editMode = false;
  editedRowIndex: number = -1;
  book:any;
  isEditing: boolean = false;
  booklist:any [] = [];
  bookid:any[]=[];
  isEdit:any=false;
  // item:any;
  // item:any;
   constructor(private service:BooklistService){}
   ngOnInit() {

    this.service.books().subscribe((data:any)=>{

      console.log(data);

      this.book = data.data;
    });

  }
  add()
  {
    console.log("ABCDEFH")
    this.booklist = this.book.filter((selected:any)=>selected.checked).map((selected: any)=>selected);
    console.log(this.booklist);
    for(let i = 0;i<this.booklist.length;i++) {
      
    console.log("++++++++"+this.booklist[i].bookid);
    this.bookid.push(this.booklist[i].bookid);

    }
     this.service.bookselect(this.bookid).subscribe((data:any)=>{
     console.log("chandan"+data);
    if(data.message)
    {
      alert("Book Details Saved Sucessfully");
    }
    else{
      alert("Book Not Selected")
    }
      // this.book = data.data;

     });
  }




}
