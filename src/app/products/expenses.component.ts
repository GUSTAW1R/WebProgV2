import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ExpensService } from 'src/app/products/shared/expens.service'
import { ToastrService } from 'ngx-toastr';
import { ExpensListComponent } from './expens-list/expens-list.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.less']
})
export class ExpensesComponent implements OnInit {

  @ViewChild(ExpensListComponent, {static: false}) list: ExpensListComponent;

  constructor(private expensService: ExpensService, private toastr: ToastrService) {
    this.ws.onopen = () => {
          this.setStatus('ONLINE');
       this.ws.onmessage = (response) => {
           this.toastr.success(response.data);
         this.printMessage(response.data);
       };
      };
   }

  ngOnInit() {
    this.resetForm();
  }
  private sub = document.getElementById('submit');
  private ws = new WebSocket('ws://localhost:3000');
  setStatus(value) {
    console.log(value)
  }
  printMessage(value) {
  //  this.toastr.success('User login successful');
    console.log(value);
  }
  SendMessage() {
    console.log("I'm is Admin and i send message!");
    var te = new TextEncoder();
    this.ws.send(this.expensService.selectedExpens.Name); 
    //this.ws.send('isUpgrade');
  }
  resetForm(form?: NgForm) {
    if (form != null)
      form.reset();
    this.expensService.selectedExpens = {
      ID: null,
      Name: '',
      Category: '',
      Date: '',
      Sum: null,
      Description: ''
    }
  }
  onSubmit(form: NgForm) {
    if (form.value.ID == null) {
      this.expensService.PostExpenses(form.value)
        .subscribe(data => {
          this.resetForm(form);
          this.toastr.success('Запись добавлена!', 'Expenses');
          this.list.ngOnInit();
        })
    }
    else {
      this.expensService.PutExpenses(form.value.ID, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.list.ngOnInit();
        this.toastr.success('Запись изменена!', 'Expenses');
      });
    }   
  }
}
