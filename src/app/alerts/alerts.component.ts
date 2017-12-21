import { Component } from '@angular/core';

@Component({
	selector: 'app-alerts',
	templateUrl: './alerts.component.html',
//	styleUrls: ['./alerts.component.css']
})

export class AlertsComponent {
    server1Alert = 'Success';
    server2Alert = 'Success';

    getServer1Alert() {
        return this.server1Alert;
    }

    getServer2Alert() {
        return this.server2Alert;
    }

}
