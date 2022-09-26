import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  Input,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Characters } from '../../models/Characters.interface';

@Component({
  selector: 'app-characters-table',
  templateUrl: './characters-table.component.html',
  styleUrls: ['./characters-table.component.css'],
})
export class CharactersTableComponent implements OnInit, AfterViewInit, OnChanges {

  displayedColumns: string[] = [
    'name',
    'species',
    'gender',
    'house',
    'dateOfBirth',
    'image',
  ];
  imgPath: string = '../../../assets/img/';
  dataSource!: MatTableDataSource<Characters>;

  loading: boolean = false;

  /**
     * Variable to receive the characters of the parent component
     *
     * @memberof CharactersTableComponent
     */
  @Input() characters!: Characters[];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  /**
   * ngOnInit of the component
   *
   * @memberof CharactersTableComponent
   */
  ngOnInit(): void {
    if (this.characters.length > 0) {
      this.dataSource = new MatTableDataSource(this.characters);
      this.loading = true;
    }
  }

  /**
   * NgOnChanges
   *
   * @memberof CharactersTableComponent
   */
  ngOnChanges(changes: SimpleChanges) {
    this.loading = false;
    if (!changes['characters'].firstChange) {
      this.dataSource = new MatTableDataSource(this.characters);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.loading = true;
    }
  }

  /**
   * Variable initialization ngAfterViewInit.
   *
   * @memberof CharactersTableComponent
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
     * Filter the table according to the event.
     *
     * @return {void}
     * @memberof CharactersTableComponent
    */
  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
