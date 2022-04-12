import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';
import { ServerModule } from '../server/server.module';

@Component({
  selector: 'app-server-operations',
  templateUrl: './server-operations.component.html',
  styleUrls: ['./server-operations.component.sass']
})
export class ServerOperationsComponent implements OnInit {
  servers:any;
  Id:any;

//identifiers for form fields
name:any;
id:any;
language:any;
framework:any;
  constructor(private service:ServerService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll(){
    this.service.getServers().subscribe(data=>this.servers=data);
  }
  Search(){
 
    this.service.getServer(this.Id).subscribe((data)=>this.servers=[data],
    (error)=>{
      alert("Could not find server with "+this.Id)
    })
  }
  Delete(){
    this.service.deleteServer(this.Id).subscribe(()=>{
      alert(this.Id +" server deleted")
      this.getAll()
    },(error)=>
    {
      alert("Could not find server with "+this.Id)
    })
  }
  Create(){
    let server = new ServerModule()
    server.id=this.id
    server.name=this.name;
    server.language= this.language;
    server.framework= this.framework;
    this.service.postServer(server).subscribe(()=>{
      this.getAll()
      alert(this.id+" server added")
      
    },(error)=>alert("post aborted"))
  }
}
