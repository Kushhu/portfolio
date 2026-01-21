import { Component, OnInit, ChangeDetectionStrategy, inject } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { PortfolioService, Project } from '../../core/services/portfolio.service';
import { ProjectCardComponent } from '../../shared/components/project-card/project-card.component';

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule,AsyncPipe, ProjectCardComponent],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit {
    selectedFilter: string = 'all';
    filters: string[] = ['all', 'Angular', 'Node.js', 'MongoDB', 'TypeScript'];
    portfolioService = inject(PortfolioService);
    
    ngOnInit(): void {
        // Projects loaded through service
    }

    projects$ = this.portfolioService.getProjects();

    filterProjects(filter: string): void {
        this.selectedFilter = filter;
    }

    getFilteredProjects(projects: Project[]): Project[] {
        if (this.selectedFilter === 'all') return projects;
        return projects.filter((p) => p.tags.includes(this.selectedFilter));
    }
}
