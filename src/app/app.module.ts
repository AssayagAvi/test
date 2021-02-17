import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PcfixesComponent } from './pcfixes/pcfixes.component';
import { PcportablesComponent } from './pcportables/pcportables.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PcfixesComponent,
    PcportablesComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
