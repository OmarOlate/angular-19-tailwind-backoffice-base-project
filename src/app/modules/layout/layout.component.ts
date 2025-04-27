import { Component, OnInit } from '@angular/core';
import { Event, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AngularSvgIconModule, SvgIconRegistryService, SvgHttpLoader, SvgLoader } from 'angular-svg-icon';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  imports: [
    SidebarComponent,
    NavbarComponent,
    RouterOutlet,
    FooterComponent,
    AngularSvgIconModule, 
  ],
  providers: [
    {
      provide: SvgLoader,   
      useClass: SvgHttpLoader 
    },
    SvgIconRegistryService,  // Proveer el servicio globalmente
    { provide: SvgHttpLoader, useClass: SvgHttpLoader } // Si necesitas cargar íconos desde una URL, configúralo aquí
  ]
})
export class LayoutComponent implements OnInit {
  private mainContent: HTMLElement | null = null;

  constructor(private router: Router) {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        if (this.mainContent) {
          this.mainContent!.scrollTop = 0;
        }
      }
    });
  }

  ngOnInit(): void {
    this.mainContent = document.getElementById('main-content');
  }
}
