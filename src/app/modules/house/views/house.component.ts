import { Component, OnDestroy } from '@angular/core';
import { Characters } from '../../../models/Characters.interface';
import { HogwartsService } from '../../../services/hogwarts.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css'],
})
export class HouseComponent implements OnDestroy {

  public selectedHouse: string = '';
  public characters: Characters[] = [];

  /**
   * Variable for component destruction
   *
   * @private
   * @type {Subject<void>}
   * @memberof HouseComponent
   */
  private _destroy$: Subject<void> = new Subject();

  constructor(private _hogwartsService: HogwartsService) {}

  /**
     * Call the service when a house is selected.
     *
     * @return {void}
     * @memberof HouseComponent
    */
  public chooseHouse(): void {
    if (this.selectedHouse !== '') {
      this._hogwartsService
        .getCharactersListByHouse(this.selectedHouse)
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
  }

  /**
   * Destruction of the component when exiting the component
   *
   * @memberof HouseComponent
   */
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
