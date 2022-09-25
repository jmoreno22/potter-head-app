import { Component, OnInit } from '@angular/core';
import { Characters, House } from '../../../models/Characters.interface';
import { HogwartsService } from '../../../services/hogwarts.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  selectedHouse: string = '';
  characters: Characters[] = [];
  constructor(private _hogwartsService: HogwartsService ) {}

  ngOnInit(): void {
  }


  choose() {
    
    if (this.selectedHouse !== ''){
      this._hogwartsService.getCharactersListByHouse(this.selectedHouse).subscribe({
        next: (data: Characters[]) => {
          
          this.characters = data;
        },
        error: (err: any) => {
          console.log(err);
        },
      });
    }

  }
}
