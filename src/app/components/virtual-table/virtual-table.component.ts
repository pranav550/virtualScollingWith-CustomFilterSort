import { testData } from "./../../dataSource/testData.";
import { Data } from "./../../dataSource/data";
import { VirtualListService } from "./../../services/virtual-list.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-virtual-table",
  templateUrl: "./virtual-table.component.html",
  styleUrls: ["./virtual-table.component.css"],
  providers: [VirtualListService]
})
export class VirtualTableComponent implements OnInit {
  order: string = "info.name";
  reverse: boolean = false;

  public searchText: string;

  direction: number;
  public filteredList: any[];
  constructor(private _virtualListService: VirtualListService) {}

  ngOnInit() {
    this.filteredList = this._virtualListService.getTableList;

    console.log("bbbbbbbb", this.filteredList);
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }
}
