import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class StockService {

  private headers = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

 

  constructor(public http: HttpClient) { }


  getEndofDayUSStockPrices(ticker: string) {
    const url = '/datasets/WIKI/'+`${ticker}`+'/data.json?api_key='+`${environment.quandlAPIKey}`;
    return this.http.get<any>(`${environment.quandlBaseUrl}`+`${url}`, this.headers);
  }

  

}



