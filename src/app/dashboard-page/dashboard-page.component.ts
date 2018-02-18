import { Component, OnInit, Injectable } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ViewEncapsulation } from '@angular/core';


@Injectable()
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [HttpClient]
})
export class DashboardPageComponent implements OnInit {


  loadingIndicator: boolean = true;
  reorderable: boolean = true;

  columns = [
    { prop: 'ID' },
    { name: 'POLICY NUMBER' },
    { name: 'CONTENT' },
    { name: 'STATUS' },
    { name: 'EFFECTIVEDATE' },
    { name: 'EXPIRYDATE' }
  ];
  rows :any;
  constructor(private http: HttpClient) {
    
  }

  ngOnInit() {
    setTimeout(() => { this.loadingIndicator = false; }, 1500);
    this.http.get('assets/data/tableData.json', {responseType: 'json'})
    .map(response => this.rows = response  )
    .subscribe(result => console.log(result) );
    console.log(this.rows);
  }

}
