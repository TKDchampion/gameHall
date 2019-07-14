import { Component, OnInit } from '@angular/core';
import { isMobile } from '../models/config';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  isMobile = isMobile(); //todo

  constructor() { 
  }

  ngOnInit() {
    
  }
}
