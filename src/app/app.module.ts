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
import { ExpensesComponent } from './products/expenses.component';
import { ExpensComponent } from './products/expens/expens.component';
import { ExpensListComponent } from './products/expens-list/expens-list.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserService } from './user/shared/user.service';
import { FilesComponent } from './files/files.component';
import { FileSelectDirective } from 'ng2-file-upload';
import { HttpModule } from '@angular/http'


const appRoutes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
},
{
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
},
{ path: 'main', component: LandingComponent,canActivate:[AuthGuard] },

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
    path: 'products',  
    component: ExpensesComponent,
    data: { roles: ['Admin'] },
    canActivate:[AuthGuard]
  },
  { 
    path: 'files',   
    component: FilesComponent,
    canActivate:[AuthGuard], 
    data: { title: 'Файлы' }  
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
    ExpensListComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent
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
    BrowserAnimationsModule	
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
