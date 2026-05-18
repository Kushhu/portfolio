import { Component, ElementRef, OnInit, Signal, signal, viewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
  protected now = new Date();
  protected name = signal(localStorage.getItem('x-user-name'))

  protected headerEle: any = viewChild('header');
  protected curtainEle: Signal<ElementRef<HTMLElement> | undefined> = viewChild('curtain');
  protected nameEle: Signal<ElementRef<HTMLElement> | undefined> = viewChild('name');

  /**
   * 0 - Ohh... So You've Landend In My Space 
   * 1 - Tell me your name and pretend this is professional
   * 2 - Auth required - enter name
   * 3 - Your identity is loading...
   * 4 - This interaction was definitely unnecessary 💅
   */
  introductionSteps = signal(0);

  nextStep(index: number) {
    this.introductionSteps.set(index)
  }

  constructor() {
    if (this.name()) {
      setTimeout(() => this.nextStep(5), 3000);
      setTimeout(() => {
        this.headerEle()!.nativeElement.classList.remove('user-greet');
        this.curtainEle()!.nativeElement.classList.add('curtain-out')
      }, 4500);
      setTimeout(() => {
        this.nameEle()!.nativeElement.classList.remove('typewriter');
        this.curtainEle()!.nativeElement.style.display = "none";
      }, 6000);
    }
    else
      setTimeout(() => this.nextStep(2), 3200);
  }

  afterFillingName(name: string) {
    const normaize = name.length < 12 ? name : name.split(' ').at(0);
    if (!normaize) return;

    this.name.set(normaize)
    localStorage.setItem('x-user-name', normaize)

    setTimeout(() => this.nextStep(3), 2000);
    setTimeout(() => this.nextStep(4), 4500);
    setTimeout(() => this.nextStep(5), 7500);
    setTimeout(() => {
      this.headerEle()!.nativeElement.classList.remove('user-greet');
      this.curtainEle()!.nativeElement.classList.add('curtain-out')
    }, 8000);
    setTimeout(() => {
      this.nameEle()!.nativeElement.classList.remove('typewriter');
      this.curtainEle()!.nativeElement.style.display = "none";
    }, 11000);
  }

  openCurtain() {

  }

  copyEmail() {
    navigator.clipboard.writeText('kushagragangwal+work@gmail.com')
  }
}
