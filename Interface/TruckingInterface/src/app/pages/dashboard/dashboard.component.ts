import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  tableData = [
    {'Most Recent': 'USNYC > Queens, NY', 'Rates Received': 7, 'Lowest Rates': 450 }
  ];

}
