import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { AppMaterialModule } from "../shared/app-material/app-material.module";
import { CoursesService } from "./services/courses.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    CoursesComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    AppMaterialModule,
    SharedModule
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule { }
