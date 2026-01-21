import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  experience = [
    {
      role: 'Senior Full-Stack Developer',
      company: 'Tech Startup',
      period: '2022 - Present',
      description: 'Leading development of scalable applications, mentoring junior developers, and optimizing system architecture.',
    },
    {
      role: 'Full-Stack Developer',
      company: 'Digital Agency',
      period: '2020 - 2022',
      description: 'Built e-commerce platforms and web applications for various clients using Angular and Node.js.',
    },
    {
      role: 'Junior Developer',
      company: 'Web Solutions Inc',
      period: '2019 - 2020',
      description: 'Developed front-end components and fixed bugs while learning best practices and modern web development.',
    },
  ];

  education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science',
      institution: 'Institute of Technology',
      year: '2019',
    },
    {
      degree: 'Online Certifications',
      field: 'Angular Advanced, Node.js Mastery, AWS Solutions Architect',
      institution: 'Udemy & Coursera',
      year: '2019-2024',
    },
  ];
}
