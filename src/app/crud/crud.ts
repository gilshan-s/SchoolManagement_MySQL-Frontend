// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-crud',
//   imports: [],
//   templateUrl: './crud.html',
//   styleUrl: './crud.css',
// })
// export class Crud {

// }
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './crud.html',
  styleUrl: './crud.css'
})
export class Crud {

  StudentArray : any[] = [];

  name: string ="";
  address: string ="";
  fee: number =0;

  currentStudentID = "";

  constructor(private http: HttpClient )
  {
    this.getAllStudent();
  }

  saveRecords()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "fee" : this.fee
    };

    this.http.post("http://127.0.0.1:8000/student",bodyData)
    .subscribe((resultData: any)=>
    {
        alert("Student Registered Successfully");
        this.getAllStudent();
    });
  }


  getAllStudent()
  {
    this.http.get("http://127.0.0.1:8000/student")
    .subscribe((resultData: any)=>
    {
        this.StudentArray = resultData;
    });
  }


  setUpdate(data: any)
  {
   this.name = data.name;
   this.address = data.address;
   this.fee = data.fee;
   this.currentStudentID = data.id;
  }


  UpdateRecords()
  {
    let bodyData = {
      "name" : this.name,
      "address" : this.address,
      "fee" : this.fee
    };

    this.http.put("http://127.0.0.1:8000/student/"+ this.currentStudentID , bodyData)
    .subscribe((resultData: any)=>
    {
        alert("Updated Successfully");
        this.name = '';
        this.address = '';
        this.fee  = 0;
        this.getAllStudent();
    });
  }


  setDelete(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/student/"+data.id)
    .subscribe((resultData: any)=>
    {
        alert("Deleted Successfully");
        this.getAllStudent();
    });
  }

}
