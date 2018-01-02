import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	// styleUrls: ['./server.component.css']
	styles: ['.online {color: white;}']
})

export class ServerComponent {
    server1Id = 10;
    server2Id = 20;
    server1Status = 'offline';
    server2Status = 'offline';

		getServer1Id() {
        return this.server1Id;
    }

    getServer1Status() {
        return this.server1Status;
    }

    getServer2Id() {
        return this.server2Id;
    }

    getServer2Status() {
        return this.server2Status;
    }

		constructor() {
			this.server1Status = Math.random() > 0.5 ? 'online' : 'offline';
			this.server2Status = Math.random() > 0.5 ? 'online' : 'offline';
		}

		getColor() {
			return this.server1Status === 'online' ? 'green' : 'red';
		}

}
