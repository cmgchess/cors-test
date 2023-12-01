import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss']
})
export class DataDisplayComponent implements OnInit {

  stuff: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getData1();
  }

  getData1(): void {
    this.apiService.getData1().subscribe(
      (data: any) => {
        console.log(data);
        this.stuff = JSON.stringify(data);
      },
      (err: any) => {
        this.stuff = err.message;
      }
    );
  }

  getData2(): void {
    this.apiService.getData2().subscribe(
      (data: any) => {
        console.log(data);
        this.stuff = JSON.stringify(data);
      },
      (err: any) => {
        this.stuff = err.message;
      }
    );
  }
}
