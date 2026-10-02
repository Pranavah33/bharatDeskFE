import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login-form-component.html',
  styleUrl: './login-form-component.css',
})
export class LoginFormComponent {
  private readonly router = inject(Router);
  protected readonly userType = inject(ActivatedRoute).snapshot.paramMap.get('userType') ?? 'admin';

  protected get userGreeting(): string {
    return this.userType === 'customer' ? 'Customer' : 'Admin';
  }

  protected goBackToLoginOptions(): void {
    this.router.navigate(['/']);
  }
}
