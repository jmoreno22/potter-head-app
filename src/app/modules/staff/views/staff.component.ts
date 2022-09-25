import { Component, OnInit } from '@angular/core';
import { HogwartsService } from 'src/app/services/hogwarts.service';
import { Characters } from '../../../models/Characters.interface';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {

  characters: Characters[] = [];
  constructor(private _hogwartsService: HogwartsService ) {}

  ngOnInit(): void {

    this._hogwartsService.getStaffList().subscribe({
      next: (data: Characters[]) => {
        
        this.characters = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });

  }

}
