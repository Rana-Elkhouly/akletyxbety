import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public totalItem: number = 0;
  public userRole = 'idle';

  constructor(
    private CartService: CartService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subUserActivity();
    this.CartService.getProducts().subscribe((res) => {
      this.totalItem = res.length;
    });
  }

  subUserActivity() {
    this.userService.userSub.subscribe((data) => {
      let user = this.userService.getUserPayload();
      if (user) {
        this.userRole = user?.role?.toLowerCase();
      } else {
        this.userRole = 'idle';
      }
      console.log('User : ', user);
    });
  }
}
