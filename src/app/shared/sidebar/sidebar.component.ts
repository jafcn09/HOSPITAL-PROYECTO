import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {
 menu: any[] = [];
  constructor(private service: SidebarService) {
    this.menu = service.menu;
   }

  ngOnInit(): void {
  }

}
