import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  

 
  isDropdownOpen = false;
  constructor(){}

  
  ngOnInit(): void {
    console.log('NavbarComponent initialized');
    document.addEventListener('click', this.closeDropdown.bind(this));
  }

  onDelete(e:any){
    console.log(e)
  }
  // ngOnDestroy(): void {
  //   console.log('NavbarComponent destroyed');
  //   document.removeEventListener('click', this.closeDropdown.bind(this));
  // }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  closeDropdown(event: Event) {
    if (!(event.target as HTMLElement).closest('.relative')) {
      this.isDropdownOpen = false;
    }
  }
  showMenu = false;
  isMobile = window.innerWidth <= 768;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  onResize(event: any) {
    this.isMobile = event.target.innerWidth <= 768;
  }


  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

}
