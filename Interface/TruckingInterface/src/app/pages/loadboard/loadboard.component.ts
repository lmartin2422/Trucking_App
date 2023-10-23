import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loadboard',
  templateUrl: './loadboard.component.html',
  styleUrls: ['./loadboard.component.css']
})
export class LoadboardComponent implements OnInit {
  quote: any;

  // Correctly defined loadboardData object
  loadboardData = [
    { Origin: 'USCHI', Dest: 'Detroit, Mi', Carrier: 'Cargo Logistics', Status: 'Open', 'Rate Date': '6/11/23', Rate: '$200', Customer: 'Walmart'},
    { Origin: 'USCHI', Dest: 'Detroit, Mi', Carrier: 'Cargo Logistics', Status: 'Open', 'Rate Date': '6/11/23', Rate: '$200', Customer: 'Walmart'}
  ];

  constructor(private http: HttpClient) {}

  getQuote(): Observable<any> {
    const url = 'api endpoint location';
    console.log(url);
    return this.http.get<any>(url, { headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  ngOnInit(): void {
    this.getQuote().subscribe(
      (response) => {
        if (response && response.Data && response.Data.length > 0) {
          this.quote = response.Data[0];
          console.log(this.quote);
        } else {
          console.log('Quote not found');
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
