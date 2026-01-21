import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../core/services/contact.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  submitted = false;
  loading = false;
  success = false;

  formData = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  contactInfo = [
    {
      icon: 'email',
      label: 'Email',
      value: 'hello@kushagra.dev',
      link: 'mailto:hello@kushagra.dev',
    },
    {
      icon: 'location',
      label: 'Location',
      value: 'India',
      link: '#',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+91 (Your Number)',
      link: 'tel:+919876543210',
    },
  ];

  constructor(private contactService: ContactService) {}

  async onSubmit(): Promise<void> {
    if (!this.formData.name || !this.formData.email || !this.formData.subject || !this.formData.message) {
      return;
    }

    this.loading = true;
    this.submitted = true;

    try {
      const result = await this.contactService.sendMessage(this.formData);
      this.success = result;

      if (result) {
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: '',
        };

        setTimeout(() => {
          this.submitted = false;
        }, 5000);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      this.success = false;
    } finally {
      this.loading = false;
    }
  }
}
