import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginData = { username: '', password: '' };

  onSubmit() {
    console.log('Login Data:', this.loginData);
    // Example: Simple validation
    if (
      this.loginData.username === 'admin' &&
      this.loginData.password === 'admin'
    ) {
      alert('Login successful!');
    } else {
      alert('Invalid username or password.');
    }
  }
}