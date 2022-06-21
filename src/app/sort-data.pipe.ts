import { Pipe, PipeTransform } from '@angular/core';
import { Scores } from 'src/intefaces/scores';
@Pipe({
  name: 'sortData',
})
export class SortDataPipe implements PipeTransform {
  transform(tableScores: Array<Scores>, tableL: number): Array<Scores> {
    const newTable: Array<Scores> = [];
    let sortTable = tableScores.sort((a, b) => b.score - a.score);
    sortTable.forEach((data) => {
      if (newTable.length < 10) {
        newTable.push(data);
      }
    });
    return newTable;
  }
}
