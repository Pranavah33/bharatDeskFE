import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [RouterOutlet],
  templateUrl: './login-component.html',
  styleUrl: './login-component.scss',
})
export class LoginComponent {
  private readonly router = inject(Router);
  protected readonly showLoginButtons = signal(true);

  protected openLoginForm(userType: 'admin' | 'customer'): void {
    this.router.navigate(['/login', userType]);
  }

  protected showLoginForm(): void {
    this.showLoginButtons.set(false);
  }

  protected showLoginButtonsAgain(): void {
    this.showLoginButtons.set(true);
  }
}
