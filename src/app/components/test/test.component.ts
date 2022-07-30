import { Component, OnInit } from '@angular/core';
import { TestEnum } from "../../interfaces/test.enum";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {



  constructor() {
  }

  ngOnInit(): void {
    let testEnum: Partial<Record<TestEnum, string>>;


    testEnum = {
      [TestEnum.KEY1]: 'qwe'
    }
  }

}
