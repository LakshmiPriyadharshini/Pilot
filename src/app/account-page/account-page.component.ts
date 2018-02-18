import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-account-page',
  templateUrl: './account-page.component.html',
  styleUrls: ['./account-page.component.scss']
})
export class AccountPageComponent implements OnInit {
  oneAtATime: boolean = true;
  constructor() { }

  ngOnInit() {}


}
