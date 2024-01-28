import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PickedService {
  private pickedItems$: BehaviorSubject<any> = new BehaviorSubject([])
  private pickedItemsList!: Array<any>;

  getPickedItems() {
    if (!this.pickedItemsList || this.pickedItemsList.length === 0) {
      this.initPickedItemsList()
    }
    return this.pickedItems$.asObservable()
  }

  initPickedItemsList() {
    this.pickedItemsList = []
    this.pickedItems$.next(this.pickedItemsList)
  }

  pick(item: any) {
    this.pickedItemsList.push(item)
    this.pickedItems$.next(this.pickedItemsList)
  }

  unpick(item: any) {
    this.pickedItemsList = this.pickedItemsList.filter(el => el != item)
    this.pickedItems$.next(this.pickedItemsList)
  }

}
