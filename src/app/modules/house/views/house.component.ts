import { Component, OnInit } from '@angular/core';
import { Characters, House } from '../../../models/Characters.interface';
import { HogwartsService } from '../../../services/hogwarts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  selectedHouse: string = '';
  characters: Characters[] = [];
  constructor(private _hogwartsService: HogwartsService ) {}
  myValueSub!: Subscription;

  ngOnInit(): void {
  }


  choose() {
    
    if (this.selectedHouse !== ''){
      this.myValueSub = this._hogwartsService.getCharactersListByHouse(this.selectedHouse).subscribe({
        next: (data: Characters[]) => {
          
          this.characters = data;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }

  }

  ngOnDestroy() {
    if (this.myValueSub) {
      this.myValueSub.unsubscribe();
    }
  }
}
