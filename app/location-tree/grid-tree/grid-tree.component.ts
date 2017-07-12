
import {Component, Directive, OnInit, Input} from '@angular/core';

import {LocationTreeNode} from '../location-tree.node';

export class GridColumn {
  name: string;
  index: string;
  renderer: any;

  constructor (congif: any){
    if(congif.name) this.name = congif.name;
    if(congif.index) this.index = congif.index;
    if(congif.renderer) this.renderer = congif.renderer; 
  }
}

@Directive({
  selector: '[var]',
  exportAs: 'var'
})
export class VarDirective {
  @Input() var:any;
}


@Component({
  selector: 'grid-tree',
  templateUrl: './grid-tree.component.html',
  styleUrls: ['./grid-tree.component.css']
})

export class GridTreeComponent implements OnInit {
  @Input() public rootNode: LocationTreeNode;
  @Input() public showRoot: boolean = true;
  @Input() public columns: GridColumn[];

  treeLevel: number = 0;

  public isVilible: boolean = true;

  constructor(){
  }

  public get rootAsArray(): LocationTreeNode[]{
    return [this.rootNode];
  }

  ngOnInit(){	
    this.rootNode.isRoot = true;
    this.setTreeLevel(this.rootNode, 0);
	}

  setTreeLevel(node: LocationTreeNode, lvl: number){
    node.treeLevel = lvl;

    for(var i = 1; i <= node.children.length; i++){
      this.setTreeLevel(node.children[i], lvl+1);
    }
  }

  toggleExpanded(){
  }

  public levelUp(): number {
    this.treeLevel ++;
    return this.treeLevel;
  }

  public levelDown(): number {
    this.treeLevel --;
    return this.treeLevel;
  }

  callDebugger(){
    debugger;
  }
}