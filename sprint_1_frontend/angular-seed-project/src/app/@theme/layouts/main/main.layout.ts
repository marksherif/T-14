import { Component, OnDestroy } from '@angular/core';
import {
  NbMediaBreakpoint,
  NbMediaBreakpointsService,
  NbMenuItem,
  NbMenuService,
  NbSidebarService,
  NbThemeService
} from '@nebular/theme';

import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/delay';

@Component({
  selector: 'ngx-main-layout',
  styleUrls: ['./main.layout.scss'],
  template: `
    <nb-layout windowMode>
      <nb-layout-header fixed>
        <ngx-header></ngx-header>
      </nb-layout-header>

      <nb-sidebar class="menu-sidebar"
                   tag="menu-sidebar"
                   responsive>
        <nb-sidebar-header>
          <button class="btn btn-hero-success main-btn">
            <span>Navigate</span>
          </button>
        </nb-sidebar-header>
        <ng-content select="nb-menu"></ng-content>
      </nb-sidebar>

      <nb-layout-column class="main-content">
      <p id="p">This is us,T-14,our name is SE CRACKIN,we are MET Students.</p>
      <p id="p">In this sprint "Sprint1" we are looking forward to learn about MEAN stack technologies and use them to build </p>
      <p id="p">a successful application that combines all of the mean stack features. </p>


      <p id="p">Mustafa Salama</p>
      <a ><img id="y" src="../../../../assets/Salama.jpg" /></a>
       <p id="p">Mahmoud Ashmawy</p>
       <img id="y" src="../../../../assets/Ashmawy.jpg" />
         <p> </p>
       <p id="p">Ziad Ramzy</p>
      <a ><img id="y" src="../../../../assets/Ziad.jpg" /></a>
        <p> </p>
	<p id="p">Youssef Sabry</p>
      <a ><img id="y" src="../../../../assets/Sabry.jpg" /></a>
        <p> </p>
      <p id="p">Mohab Tarek</p>
      <a ><img id="y" src="../../../../assets/Mohab.jpg" /></a>
        <p> </p>
      <p id="p">Ali</p>
      <a ><img id="y" src="../../../../assets/Ali.jpg" /></a>
      <p> </p>
    <p id="p">Mark Sherif</p>
    <a ><img id="y" src="../../../../assets/Mark.PNG" /></a>
      <p id="p">Hello World!!!</p>
          <p id="p">Youssef Shoeb</p>
    <a ><img id="y" src="../../../../assets/Shoeb.jpg" /></a>
      <p id="p">Youssef Omar Shoeb 37-0955</p>
      <p id="p">Rafik</p>
<a ><img id="y" src="../../../../assets/Rafik.PNG" /></a>
  <p id="p">Rafik Sherif Louis 37-7419</p>
  

  <p> </p>
<p id="p">Abdallah Eltayeb</p>
<a ><img id="y" src="../../../../assets/Abdallah.PNG" /></a>
<p id="p">Abdallah Eltayeb 37-12409</p>

 <p> </p>
<p id="p">Bassel Elwakil</p>
<a ><img id="y" src="../../../../assets/bassel.png" /></a>
<p id="p">Bassel Elwakil 37-4406</p>

 
        <p id="p">Mohamed Elneily</p>

  <a ><img id="y" src="../../../../assets/elneily.jpg" /></a>
      <p id="p">Mohamed Ahmed Elneily 37-18356</p>
	<p> </p>
	<p id="p">Seif</p>
	<a ><img id="y" src="../../../../assets/Seif.PNG" /></a>
	<p id="p">Seif Hafez  37-737</p>

        <ng-content select="router-outlet"></ng-content>
      </nb-layout-column>

      <nb-layout-footer fixed>
        <ngx-footer></ngx-footer>
      </nb-layout-footer>
    </nb-layout>
  `
})
export class MainLayoutComponent implements OnDestroy {
  protected menuClick$: Subscription;

  constructor(
    protected menuService: NbMenuService,
    protected themeService: NbThemeService,
    protected bpService: NbMediaBreakpointsService,
    protected sidebarService: NbSidebarService
  ) {
    const isBp = this.bpService.getByName('is');
    this.menuClick$ = this.menuService
      .onItemSelect()
      .withLatestFrom(this.themeService.onMediaQueryChange())
      .delay(20)
      .subscribe(
        ([item, [bpFrom, bpTo]]: [
          any,
          [NbMediaBreakpoint, NbMediaBreakpoint]
        ]) => {
          if (bpTo.width <= isBp.width) {
            this.sidebarService.collapse('menu-sidebar');
          }
        }
      );
  }

  ngOnDestroy() {
    this.menuClick$.unsubscribe();
  }
}
