import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  currentImage: string = 'assets/webDev.jpg'; // start with a default image

changeImage(service: string) {
    switch(service) {
        case 'webDevelopment':
            this.currentImage = 'assets/webDev.jpg';
            break;
        case 'IOTSolution':
            this.currentImage = 'assets/thisisengineering-raeng-nyAzMQ6Ejgs-unsplash.jpg';
            break;
        case 'VRSolution':
            this.currentImage = 'assets/vrarImg.jpg';
            break;
        case 'GameDEV':
            this.currentImage = 'assets/ales-nesetril-Im7lZjxeLhg-unsplash.jpg';
            break;
        case 'AdvanceTech':
            this.currentImage = 'assets/aideal-hwa-OYzbqk2y26c-unsplash.jpg';
            break;
        case 'GeeksOnD':
            this.currentImage = 'assets/alex-kotliarskyi-QBpZGqEMsKg-unsplash.jpg';
            break;    
        // Add cases for other services
    }
}

navigateToService(service: string) {
    // Here, you'd typically navigate to another route/page
    // For example, using Angular's Router:
    // this.router.navigate(['/services', service]);
}


}
