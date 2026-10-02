import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

export interface ApplicationItem {
  application_number: string;
  applicant_name: string;
  business_name: string | null;
  product: string;
  stage: string;
  amount_paid: number;
  payment_status: string;
  created_date: string; // ISO format: YYYY-MM-DD
  actions: string[];
}

@Component({
  selector: 'app-application-list',
  imports: [MatIconModule, RouterLink],
  templateUrl: './application-list.html',
  styleUrl: './application-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationListComponent {
  private readonly pageSize = 10;
  protected readonly searchTerm = signal('');
  protected readonly currentPage = signal(1);

  protected readonly jobs: ApplicationItem[] = [
  {
    "application_number": "APP-2026-0814",
    "applicant_name": "Rajesh Sharma",
    "business_name": "Sharma Enterprises",
    "product": "GST Registration",
    "stage": "Documentation Review",
    "amount_paid": 1500,
    "payment_status": "Paid",
    "created_date": "2026-09-12",
    "actions": ["view_details", "download_receipt"]
  },
  {
    "application_number": "APP-2026-0815",
    "applicant_name": "Sneha Patil",
    "business_name": "Patil Daily Needs",
    "product": "Gumasta (Shop Act)",
    "stage": "Sent to Department",
    "amount_paid": 1200,
    "payment_status": "Paid",
    "created_date": "2026-09-15",
    "actions": ["view_details", "track_status"]
  },
  {
    "application_number": "APP-2026-0816",
    "applicant_name": "Amit Verma",
    "business_name": null,
    "product": "PAN Card (New)",
    "stage": "Biometric KYC Pending",
    "amount_paid": 250,
    "payment_status": "Paid",
    "created_date": "2026-09-18",
    "actions": ["view_details", "resend_kyc_link"]
  },
  {
    "application_number": "APP-2026-0817",
    "applicant_name": "Vikram Mehta",
    "business_name": "Mehta Logistics LLP",
    "product": "MSME / Udyam",
    "stage": "Approved & Issued",
    "amount_paid": 800,
    "payment_status": "Paid",
    "created_date": "2026-09-20",
    "actions": ["view_details", "download_certificate"]
  },
  {
    "application_number": "APP-2026-0818",
    "applicant_name": "Pooja Kulkarni",
    "business_name": "Kulkarni Bakers",
    "product": "FSSAI Basic",
    "stage": "Form Submitted",
    "amount_paid": 2000,
    "payment_status": "Pending",
    "created_date": "2026-09-24",
    "actions": ["view_details", "retry_payment"]
  },
  {
    "application_number": "APP-2026-0819",
    "applicant_name": "Imran Khan",
    "business_name": "Khan Agro Traders",
    "product": "GST Filing (Quarterly)",
    "stage": "Payment Pending",
    "amount_paid": 0,
    "payment_status": "Failed",
    "created_date": "2026-09-28",
    "actions": ["pay_now", "cancel_application"]
  }
]

  protected readonly filteredJobs = computed(() => {
    const query = this.searchTerm().trim().toLowerCase();
    if (!query) return this.jobs;

    return this.jobs.filter((job) =>
      Object.values(job).some((value) => value.toLowerCase().includes(query)),
    );
  });

  protected readonly pageCount = computed(() =>
    Math.max(1, Math.ceil(this.filteredJobs().length / this.pageSize)),
  );
  protected readonly pages = computed(() =>
    Array.from({ length: this.pageCount() }, (_, index) => index + 1),
  );

  protected readonly visibleJobs = computed(() => {
    const start = (this.currentPage() - 1) * this.pageSize;
    return this.filteredJobs().slice(start, start + this.pageSize);
  });

  protected onSearch(event: Event): void {
    this.searchTerm.set((event.target as HTMLInputElement).value);
    this.currentPage.set(1);
  }

  protected setPage(page: number): void {
    this.currentPage.set(Math.min(this.pageCount(), Math.max(1, page)));
  }
}