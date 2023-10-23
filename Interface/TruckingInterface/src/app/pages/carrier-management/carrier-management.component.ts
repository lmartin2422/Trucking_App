import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrier-management',
  templateUrl: './carrier-management.component.html',
  styleUrls: ['./carrier-management.component.css']
})
export class CarrierManagementComponent implements OnInit {
  constructor(private http: HttpClient) {}

  // Correctly defined tableData array
  tableData: { Carrier: string, MC: string, 'Ports Serviced': string, 'Power Unit Count': number }[] = [];

  getCarriers(): Observable<any> {
    const url = 'api endpoint location';
    console.log(url);
    return this.http.get<any>(url, { headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  ngOnInit(): void {
    this.getCarriers().subscribe(
      (response) => {
        if (response && response.Data && response.Data.length > 0) {
          response.Data.forEach((d: any) => {
            let temp = [...this.tableData, { Carrier: d.CarrierName, MC: d.McNum, 'Ports Serviced': d.City, 'Power Unit Count': d.MaxCapacity }];
            this.tableData = temp;
            console.log(this.tableData);
          });
        } else {
          console.log('Data not found');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
