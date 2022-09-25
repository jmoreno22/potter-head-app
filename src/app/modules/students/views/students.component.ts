import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { Characters } from '../../../models/Characters.interface';
import { HogwartsService } from '../../../services/hogwarts.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit, OnDestroy {

  characters: Characters[] = [];
  constructor(private _hogwartsService: HogwartsService ) {}
  
  myValueSub!: Subscription;

  ngOnInit(): void {
    
    this.myValueSub = this._hogwartsService.getStudentsList().subscribe({
      next: (data: Characters[]) => {       
        this.characters = data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });

  }

  ngOnDestroy() {
    if (this.myValueSub) {
      this.myValueSub.unsubscribe();
    }
  }
}
