import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcfixesComponent } from './pcfixes/pcfixes.component';
import { PcportablesComponent } from './pcportables/pcportables.component';
const routes: Routes = [

 {path: 'pcfixes', component: PcfixesComponent},
 {path: 'pcportables', component: PcportablesComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
