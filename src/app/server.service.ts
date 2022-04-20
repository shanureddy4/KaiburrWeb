import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ServerModule } from './server/server.module';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:HttpClient) { }
  getServers(){
    
    return this.http.get("http://localhost:8080/api/");
  }
  getServer(id:string){
    let params = new HttpParams().set("id",id);
    return this.http.get("http://localhost:8080/api/",{params:params})
  }
  deleteServer(id:any){
    let params = new HttpParams().set("id",id);
    return this.http.delete("http://localhost:8080/api/",{params:params})
  }
  putServer(server:ServerModule)
  {
    const headers = {'content-type':'application/json'}
    const body = JSON.stringify(server)
    return this.http.put("http://localhost:8080/api/",body,{'headers':headers})
  }
}
