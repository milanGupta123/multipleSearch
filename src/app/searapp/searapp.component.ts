import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-searapp',
  templateUrl: './searapp.component.html',
  styleUrls: ['./searapp.component.css']
})
export class SearappComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'fee', 'symbol', 'school', 'village', 'country', 'price'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  searchValue: string = '';


  constructor() {
    this.dataSource.filterPredicate = (data: PeriodicElement, filter: string) => {
      const filters = filter.split(',').map(f => f.trim().toLowerCase());
      return filters.every(f => {
        return this.displayedColumns.some(column => {
          const columnValue = data[column as keyof PeriodicElement];
          return columnValue && columnValue.toString().toLowerCase().includes(f);
        });
      });
    };
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface PeriodicElement {
  name: string;
  position: number;
  fee: number;
  symbol: string;
  school: string;
  village: string;
  country: string;
  price: number;
}


  const ELEMENT_DATA: PeriodicElement[] = [
    {"position": 1, "name": "vikash", "fee": 160102, "symbol": "UOP", "school": "Springdales School", "village": "Mundhela Kalan", "country": "India", "price": 762.48},
    {"position": 2, "name": "Himanshu", "fee": 640487, "symbol": "Gl", "school": "Adarsh Public School, Vikaspuri.", "village": "	Paprawat", "country": "USA", "price": 105.77},
    {"position": 3, "name": "atul", "fee": 456929, "symbol": "lZhX", "school": "Air Force Bal Bharati School, Lodhi Road.", "village": "Mundhela Kalan", "country": "Canada", "price": 289.92},
    {"position": 4, "name": "nitesh", "fee": 130019, "symbol": "RWx", "school": "The Air Force School", "village": "YlgCm", "country": "Australia", "price": 985.34},
    {"position": 5, "name": "nitesh", "fee": 791225, "symbol": "Fegc", "school": "Air Force Bal Bharati School, Lodhi Road.", "village": "Mundhela Kalan", "country": "UK", "price": 174.23},
    {"position": 6, "name": "vikash", "fee": 800505, "symbol": "sZ", "school": "pps", "village": "Raghu Pur", "country": "India", "price": 432.19},
    {"position": 7, "name": "bablu", "fee": 104052, "symbol": "XOd", "school": "The Air Force School", "village": "panchayat", "country": "UK", "price": 256.47},
    {"position": 8, "name": "atul", "fee": 170054, "symbol": "dC", "school": "Air Force Bal Bharati School, Lodhi Road.", "village": "Pindwala Kalan", "country": "Australia", "price": 319.58},
    {"position": 9, "name": "atul", "fee": 805930, "symbol": "Mci", "school": "Adarsh Public School, Vikaspuri.", "village": "	Paprawat", "country": "Canada", "price": 490.36},
    {"position": 10, "name": "vikash", "fee": 470734, "symbol": "nDqT", "school": "The Air Force School", "village": "Qazi Pur", "country": "USA", "price": 654.72},
    {"position": 11, "name": "vikash", "fee": 256382, "symbol": "zxT", "school": "Don Bosco School", "village": "Raghu Pur", "country": "UK", "price": 321.89},
    {"position": 12, "name": "aashish", "fee": 975863, "symbol": "MmP", "school": "Don Bosco School", "village": "Pindwala Kalan", "country": "India", "price": 129.47},
    {"position": 13, "name": "sonu", "fee": 304819, "symbol": "nAF", "school": "Adarsh Public School, Vikaspuri.", "village": "Raghu Pur", "country": "Australia", "price": 847.21},
    {"position": 14, "name": "Rupesh", "fee": 674589, "symbol": "Qnp", "school": "Springdales School", "village": "panchayat", "country": "UK", "price": 245.63},
    {"position": 15, "name": "Rupesh", "fee": 897546, "symbol": "Ty", "school": "Springdales School", "village": "Qazi Pur", "country": "USA", "price": 746.84},
    {"position": 16, "name": "Deepak", "fee": 43501, "symbol": "tx", "school": "delhi", "village": "oDmWj", "country": "Canada", "price": 95.62},
    {"position": 17, "name": "milan", "fee": 126018, "symbol": "Vv", "school": "Air Force Bal Bharati School, Lodhi Road.", "village": "Qazi Pur", "country": "India", "price": 578.41},
    {"position": 18, "name": "Raju", "fee": 381798, "symbol": "pxJ", "school": "Don Bosco School", "village": "Budhan Pur", "country": "Australia", "price": 412.35},
    {"position": 19, "name": "Ranjeet", "fee": 325673, "symbol": "Vgx", "school": "Adarsh Public School, Vikaspuri.", "village": "Pindwala Kalan", "country": "USA", "price": 367.28},
    {"position": 20, "name": "sonu", "fee": 190048, "symbol": "mnG", "school": "Mount Carmel School", "village": "	Raota", "country": "UK", "price": 739.54},
    {"position": 21, "name": "Ranjeet", "fee": 80923, "symbol": "qY", "school": "Mount Carmel School", "village": "Pindwala Khurd", "country": "India", "price": 149.65},
    {"position": 22, "name": "Ravi", "fee": 410238, "symbol": "bRS", "school": "delhi", "village": "panchayat", "country": "Australia", "price": 854.96},
    {"position": 23, "name": "milan", "fee": 22384, "symbol": "rya", "school": "Adarsh Public School, Vikaspuri.", "village": "Qutab Pur", "country": "UK", "price": 98.41},
    {"position": 24, "name": "Ravi", "fee": 160951, "symbol": "zarC", "school": "Sanskriti School", "village": "	Raota", "country": "Canada", "price": 542.17},
    {"position": 25, "name": "amit", "fee": 7473, "symbol": "IbvH", "school": "Mount Carmel School", "village": "Pindwala Khurd", "country": "USA", "price": 376.84},
    {"position": 26, "name": "Prabhakar", "fee": 398708, "symbol": "xJ", "school": "Sanskriti School", "village": "	Raota", "country": "UK", "price": 789.42},
    {"position": 27, "name": "Prabhakar", "fee": 92842, "symbol": "ODi", "school": "Mount Carmel School", "village": "Pindwala Khurd", "country": "India", "price": 263.19},
    {"position": 28, "name": "amit", "fee": 422526, "symbol": "ViQS", "school": "Mount Carmel School", "village": "Qutab Pur", "country": "Canada", "price": 468.23},
    {"position": 29, "name": "sonu", "fee": 32814, "symbol": "CqvGo", "school": "Sanskriti School", "village": "Qutab Pur", "country": "Australia", "price": 351.84},
  ]  