import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Characters } from '../../../models/Characters.interface';
import { HogwartsService } from '../../../services/hogwarts.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css'],
})
export class StudentsComponent implements OnInit, OnDestroy {
  characters: Characters[] = [];

  /**
   * Variable for component destruction
   *
   * @private
   * @type {Subject<void>}
   * @memberof StudentsComponent
   */
  private _destroy$: Subject<void> = new Subject();

  constructor(private _hogwartsService: HogwartsService) {}

  /**
   * ngOnInit of the component
   *
   * @memberof StudentsComponent
   */
  ngOnInit(): void {
    this._hogwartsService
      .getStudentsList()
      .pipe(takeUntil(this._destroy$))
      .subscribe({
        next: (data: Characters[]) => {
          this.characters = data;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
  }

  /**
   * Destruction of the component when exiting the component
   *
   * @memberof StudentsComponent
   */
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
