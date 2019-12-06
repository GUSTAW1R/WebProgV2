import { Component, OnInit, ViewChild } from '@angular/core';
import { ExpensService } from '../shared/expens.service';
import { Expens } from '../shared/expens.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-expens-list',
  templateUrl: './expens-list.component.html',
  styleUrls: ['./expens-list.component.less']
})
export class ExpensListComponent implements OnInit {

  constructor(private expensService: ExpensService, private toastr : ToastrService) { }
  expens:Expens[];

  ngOnInit() {
    this.expensService.GetExpenses().subscribe(x => this.expens=x);
  }

  showForEdit(exp: Expens) {
    this.expensService.selectedExpens = Object.assign({}, exp);
  }
 
  onDelete(id: number) {
    this.expensService.DeleteExpenses(id)
    .subscribe(x => {
      this.expensService.GetExpenses().subscribe(x => this.expens=x);
    })
  }

}
