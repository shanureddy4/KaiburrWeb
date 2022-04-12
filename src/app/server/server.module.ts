import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServerModule { 
  name:string | undefined
  id: string | undefined
  language:string | undefined
  framework:string | undefined 
}
