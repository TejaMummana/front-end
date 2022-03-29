import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { DocterModel } from '../docters/docters.model';

@Component({
  selector: 'app-show-docter-info',
  templateUrl: './show-docter-info.component.html',
  styleUrls: ['./show-docter-info.component.css']
})
export class ShowDocterInfoComponent implements OnInit {
  docterObj: DocterModel[] = [];
  docterName!: string;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.getDocter()
      .subscribe(res => {
        this.docterObj = res;
        console.log(res);
      })
  }
  Search() {
    if (this.docterName != "") {
      this.docterObj = this.docterObj.filter(res => {
        return res.docterName.toLowerCase().match(this.docterName.toLowerCase());
      });
      }else if (this.docterName == "") {
        this.ngOnInit();
      }
  }

}
