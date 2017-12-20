import { Component } from '@angular/core';

@Component({
	selector: 'app-server',
	templateUrl: './server.component.html',
	styleUrls: ['./server.component.css']
})

export class ServerComponent {
    server1Id = 10;
    server2Id = 20;
    server1Status = 'offline';
    server2Status = 'online';

    getServer2Id() {
        return this.server2Id;
    }

    getServer2Status() {
        return this.server2Status;
    }

}
