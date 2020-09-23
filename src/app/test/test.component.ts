import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  dataSource: any;
  title:string = "Test Page";



  collapsed = false;
  contentReady = (e) => {
    if (!this.collapsed) {
      this.collapsed = true;
      e.component.expandRow(["EnviroCare"]);
    }
  };


  constructor(private productService:ProductService) { }

  ngOnInit() {

    this.getProducts()
    
  }


  getProducts() {
    this.productService.getAllProducts().subscribe(data => {
      this.dataSource = data
    }

    )
  }

}
