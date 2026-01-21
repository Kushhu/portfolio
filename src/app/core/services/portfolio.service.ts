import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  tags: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  private projectsSubject = new BehaviorSubject<Project[]>(this.getDefaultProjects());
  public projects$: Observable<Project[]> = this.projectsSubject.asObservable();

  private ideasSubject = new BehaviorSubject<any[]>(this.getDefaultIdeas());
  public ideas$: Observable<any[]> = this.ideasSubject.asObservable();

  getProjects(): Observable<Project[]> {
    return this.projects$;
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return new Observable((observer) => {
      observer.next(this.projectsSubject.value.find((p) => p.id === id));
      observer.complete();
    });
  }

  getIdeas(): Observable<any[]> {
    return this.ideas$;
  }

  private getDefaultProjects(): Project[] {
    return [
      {
        id: '1',
        title: 'E-Commerce Platform',
        shortDescription: 'Full-stack e-commerce solution with payments integration',
        description: 'A modern e-commerce platform built with Angular and Node.js featuring product catalog, shopping cart, payment processing, and admin dashboard.',
        tags: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
        featured: true,
        githubUrl: 'https://github.com',
        liveUrl: 'https://example.com',
      },
      {
        id: '2',
        title: 'Real-Time Chat App',
        shortDescription: 'WebSocket-based messaging application',
        description: 'Real-time chat application with user authentication, group chat, file sharing, and push notifications.',
        tags: ['Angular', 'WebSocket', 'Firebase', 'RxJS'],
        githubUrl: 'https://github.com',
      },
      {
        id: '3',
        title: 'Analytics Dashboard',
        shortDescription: 'Data visualization and analytics platform',
        description: 'Interactive dashboard for data visualization with real-time metrics, custom reports, and data export capabilities.',
        tags: ['Angular', 'D3.js', 'TypeScript', 'REST API'],
        featured: true,
        liveUrl: 'https://example.com',
      },
      {
        id: '4',
        title: 'Task Management Tool',
        shortDescription: 'Collaborative project management application',
        description: 'Team task management system with kanban boards, team collaboration, file attachments, and deadline tracking.',
        tags: ['Angular', 'Express', 'PostgreSQL', 'Socket.io'],
        githubUrl: 'https://github.com',
      },
    ];
  }

  private getDefaultIdeas(): any[] {
    return [
      {
        id: '1',
        title: 'AI-Powered Code Review Tool',
        description: 'An IDE extension that uses AI to provide intelligent code reviews and suggestions in real-time.',
        date: '2025-01-20',
        category: 'AI/ML',
        tags: ['AI', 'Developer Tools', 'VSCode Extension'],
      },
      {
        id: '2',
        title: 'Personalized Learning Platform',
        description: 'Adaptive learning system that adjusts difficulty based on user performance and learning patterns.',
        date: '2025-01-18',
        category: 'EdTech',
        tags: ['Education', 'AI', 'Web App'],
      },
      {
        id: '3',
        title: 'Web Performance Analyzer',
        description: 'Real-time web performance monitoring and optimization suggestions for production websites.',
        date: '2025-01-15',
        category: 'Developer Tools',
        tags: ['Performance', 'Analytics', 'SaaS'],
      },
      {
        id: '4',
        title: 'Distributed Task Queue',
        description: 'Scalable background job processing system for microservices architecture.',
        date: '2025-01-12',
        category: 'Backend',
        tags: ['Backend', 'System Design', 'Open Source'],
      },
    ];
  }
}
