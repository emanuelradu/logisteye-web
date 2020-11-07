import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  public logout(){
    this.authenticationService.logout()
  }

}
