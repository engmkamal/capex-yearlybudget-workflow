import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frefgvwbtncstm',
  templateUrl: './frefgvwbtncstm.component.html',
  styleUrls: ['./frefgvwbtncstm.component.scss']
})
export class FrefgvwbtncstmComponent implements OnInit {

  data:any;
  wfName:any;

  constructor() { }

  ngOnInit() {
    this.wfName = "FreeFGIssue";
  }

  agInit(params){
    this.data = params.value;
  }
  
  viewFullAplication(item) {
    //alert("the items are: "+item);
    var Url = ""; 
    //=========for production environment =========
    Url = window.location.origin + "/leaveauto/SitePages/"+this.wfName+".aspx?UniqueId=" + item + "&mode=read";   
    //========for localhost dev environment ==
    //Url = "https://portaldv.bergerbd.com/leaveauto/SitePages/"+this.wfName+".aspx?UniqueId=" + item + "&mode=read";
    
    var Title = "Request Details";
    window.open(Url, '_blank').focus();
    //this.gridApi.setQuickFilter(this.txtOfQuickSearchInpFld);
  }


}
