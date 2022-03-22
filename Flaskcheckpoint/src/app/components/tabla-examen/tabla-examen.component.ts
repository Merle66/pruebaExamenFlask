import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla-examen',
  templateUrl: './tabla-examen.component.html',
  styleUrls: ['./tabla-examen.component.scss']
})
export class TablaExamenComponent implements OnInit {
    elements: any = [];
    headElements = ['ID', 'First', 'Last', 'Handle'];
  
    ngOnInit() {
      for (let i = 1; i <= 15; i++) {
        this.elements.push({
          id: i,
          first: 'User ' + i,
          last: 'Name ' + i,
          handle: 'Handle ' + i
        });
      }
    }
  }