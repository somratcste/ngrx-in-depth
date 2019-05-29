import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";
import { CoursesService } from "./services/courses.service";
import { CourseRequested, CourseActionTypes, CourseLoaded } from "./course.actions";
import { mergeMap, map } from "rxjs/operators";

@Injectable()
export class CourseEfects {
      
    @Effect()
    loadCourse$ = this.actions$
    .pipe(
        ofType<CourseRequested>(CourseActionTypes.courseRequested),
        mergeMap(action => this.coursesService.findCourseById(action.payload.courseId)),
        map(course => new CourseLoaded({course})),
    )


    constructor(private actions$: Actions, private coursesService: CoursesService) {}
}