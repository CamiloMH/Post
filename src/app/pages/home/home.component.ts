import { compileNgModuleDeclarationExpression } from '@angular/compiler/src/render3/r3_module_compiler';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private userService: UserService) { }

  user = {
    name: 'asd',
    lastName: 'Hola',
    mail: 'frontend@gmail.com',
    password: '123456'
  }

  ngOnInit(): void {

    // this.userService.loginUser(this.user).then((resp) => {
    //   console.log(resp);

    // })
    /* //Create user
    this.userService.createUser(this.user).then((data) => {
      console.log({ data });
    }) */

    // setTimeout(() => {
    //   /* //Delete user
    //   this.userService.deleteUser('61770a442ce9b52c00a848f5').then((data) => {
    //     console.log(data); */
    //   /* //get Users
    //   this.userService.getUser().then(({ data }) => {
    //     console.log(data); */
    //   // })
    //   // })
    //   /* //Logout
    //   this.userService.logout(); */
    //   this.userService.getUserById('6173208167e399900aa7a2a0').then(({ data }) => {
    //     console.log(data);

    //   })
    // }, 4000)


  }

}
