import { Component, OnInit } from '@angular/core';
import { HogwartsService } from 'src/app/services/hogwarts.service';
import { Characters } from '../../../models/Characters.interface';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css'],
})
export class StaffComponent implements OnInit {
  characters: Characters[] = [];

  /**
   * Variable for component destruction
   *
   * @private
   * @type {Subject<void>}
   * @memberof StaffComponent
   */
  private _destroy$: Subject<void> = new Subject();

  constructor(private _hogwartsService: HogwartsService) {}

  /**
   * ngOnInit of the component
   *
   * @memberof StaffComponent
   */
  ngOnInit(): void {
    this._hogwartsService
      .getStaffList()
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
   * @memberof StaffComponent
   */
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
