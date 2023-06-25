import { Injectable } from '@angular/core';
import { Folder } from '@core/classes/folder.class';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FolderService {

  public folders: Folder[] = [
    {
      id: 1,
      faTitle: 'این عنوان تستی می باشد.',
      enTitle: 'This title is sample...',
      subject: 'تعریف طرح'
    },
    {
      id: 2,
      faTitle: 'این عنوان تستی می باشد.',
      enTitle: 'This title is sample...',
      subject: 'تعریف طرح'
    },
    {
      id: 3,
      faTitle: 'این عنوان تستی می باشد.',
      enTitle: 'This title is sample...',
      subject: 'تعریف طرح'
    },
    {
      id: 4,
      faTitle: 'این عنوان تستی می باشد.',
      enTitle: 'This title is sample...',
      subject: 'تعریف طرح'
    },
    {
      id: 5,
      faTitle: 'این عنوان تستی می باشد.',
      enTitle: 'This title is sample...',
      subject: 'تعریف طرح'
    },
    {
      id: 6,
      faTitle: 'این عنوان تستی می باشد.',
      enTitle: 'This title is sample...',
      subject: 'تعریف طرح'
    },
    {
      id: 7,
      faTitle: 'این عنوان تستی می باشد.',
      enTitle: 'This title is sample...',
      subject: 'تعریف طرح'
    },
    {
      id: 8,
      faTitle: 'این عنوان تستی می باشد.',
      enTitle: 'This title is sample...',
      subject: 'تعریف طرح'
    },
    {
      id: 9,
      faTitle: 'این عنوان تستی می باشد.',
      enTitle: 'This title is sample...',
      subject: 'تعریف طرح'
    },
    {
      id: 10,
      faTitle: 'این عنوان تستی می باشد.',
      enTitle: 'This title is sample...',
      subject: 'تعریف طرح'
    },
  ];

  constructor() { }

  /**
   * get folders
   */
  public getFolders() {
    let result = of(this.folders);
    return result;
  }

}
