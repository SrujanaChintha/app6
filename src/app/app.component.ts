import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LoginReactiveComponent } from './login-reactive/login-reactive.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignUpReactiveComponent } from './sign-up-reactive/sign-up-reactive.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,LoginReactiveComponent,SignUpComponent,SignUpReactiveComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app6';
}
