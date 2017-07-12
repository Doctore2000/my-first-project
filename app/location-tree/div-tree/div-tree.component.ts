
import {Component, OnInit, Input} from '@angular/core';

import {LocationTreeNode} from '../location-tree.node';

@Component({
  selector: 'div-tree',
  templateUrl: './div-tree.component.html',
  styleUrls: ['./div-tree.component.css']
})

export class DivTreeComponent implements OnInit {
  @Input() public treeNode: LocationTreeNode;
  @Input() public showRoot: boolean = true;

  public isVilible: boolean = true;

  constructor(){
  }

  ngOnInit(){	
    if(this.treeNode.isRoot && !this.showRoot){
      this.isVilible = false;
      this.treeNode.expand();
    }
	}

  toggleExpanded(){    
//    debugger;
    let me = this;

    if(me.treeNode.isExpanded){
      me.treeNode.collapse();

    } else {
      me.treeNode.expand();
    }
//    debugger;
  }

  callDebugger(){
    debugger;
  }
}