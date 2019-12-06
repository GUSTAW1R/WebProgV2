import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { TransactionComponent } from './transaction/transaction.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ContributionsComponent } from './contributions/contributions.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensComponent } from './expenses/expens/expens.component';
import { ExpensListComponent } from './expenses/expens-list/expens-list.component';


const appRoutes: Routes = [
  { 
    path: 'home', 
    component: LandingComponent,
    data: { title: 'Главная' } 
  },
  { 
    path: 'transaction',  
    component: TransactionComponent,
    data: { title: 'Переводы' }
  },
  { 
    path: 'contributions',  
    component: ContributionsComponent,
    data: { title: 'Вклады и счета' }
  },
  { 
    path: 'marketplace',  
    component: MarketplaceComponent,
    data: { title: 'Специальные предложения' }
  },
  { 
    path: 'expenses',  
    component: ExpensesComponent,
    data: { title: 'Затраты' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
	LandingComponent,
    TransactionComponent,
    MarketplaceComponent,
    ContributionsComponent,
    ExpensesComponent,
    ExpensComponent,
    ExpensListComponent
  ],
  imports: [
  RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
