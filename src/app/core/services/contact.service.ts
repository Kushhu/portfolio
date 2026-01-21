import { Injectable } from '@angular/core';

export interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  // In production, this would call your backend API
  // Example: POST to /api/contact
  async sendMessage(data: ContactData): Promise<boolean> {
    try {
      // Placeholder for actual API call
      console.log('Sending contact message:', data);
      // await this.http.post('/api/contact', data).toPromise();
      return true;
    } catch (error) {
      console.error('Failed to send message:', error);
      return false;
    }
  }
}
