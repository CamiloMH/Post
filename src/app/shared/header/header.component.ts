import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: any;
  constructor(private keycloakService: KeycloakService) { }

  ngOnInit(): void {
    this.initializeUserOptions();
  }

  initializeUserOptions(): void {
    this.keycloakService.isLoggedIn().then((data) => {
      if (data)
        this.keycloakService.loadUserProfile().then((data) => {
          this.user = data.firstName
        })
    })
  }
  login(): void {
    this.keycloakService.login();
  }

  logout(): void {
    this.keycloakService.logout('http://localhost:4200');
    this.keycloakService.clearToken();
  }

}
