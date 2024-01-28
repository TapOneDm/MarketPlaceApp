import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable, debounce, debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
import { dummyData } from './dummyData';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  public showResult: boolean = false
  public searchResult: Array<any> = []; 

  @ViewChild('searchInput') searchInput!: ElementRef
  
  ngOnInit() {

  }

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, 'input').pipe(
      map((e: any) => (e.target as HTMLInputElement).value),
      debounceTime(500),
      distinctUntilChanged(),
    ).subscribe((searchValue: string) => {
      if (searchValue.length) {
        this.dummySearchData(searchValue, dummyData)
      }
    })
  }

  dummySearchData(searchString: string, dummyData: any) {
    let result = [];
    for (let item of dummyData) {
      if ((item.title as string).includes(searchString) || (item.text as string).includes(searchString)) {
        result.push(item)
      }
      
    }
    this.searchResult = result
  }

  close() {
    this.searchResult = []
  }
}
