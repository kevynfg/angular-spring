import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog";
import { catchError, Observable, of } from "rxjs";
import { ErrorDialogComponent } from "src/app/shared/components/error-dialog/error-dialog.component";
import { Course } from "../model/course";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]>
  displayedColumns = ['name', 'category'];
  constructor(private coursesService: CoursesService,
              public dialog: MatDialog) {
    this.courses$ = this.coursesService.getCourses().pipe(
      catchError(error => {
        this.onError('Não foi possível buscar os cursos')
        return of([])
      })
    )
  }

  ngOnInit(): void {
    console.log("CoursesComponent.ngOnInit()", this.courses$);
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }
}
