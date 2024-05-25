import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageInicialComponent } from './components/page-inicial/page-inicial.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageInicialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
