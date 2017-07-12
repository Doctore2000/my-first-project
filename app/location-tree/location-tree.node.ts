
export class LocationTreeNode {
	id: number;
	parent: number;
	label: string;
	isLeaf: boolean=true;
	isRoot: boolean=false;
	children: LocationTreeNode[] = [];
	data: any = null;
	treeLevel: number = 0;
	
	isExpanded: boolean = false;

	constructor(id: number, parent: number, label: string, isLeaf: boolean=true, children: LocationTreeNode[] = []){
		this.id = id;
		this.parent = parent;
		this.label = label;
		this.isLeaf = isLeaf;
		this.children = children;
	}

	collapse(){
		this.children.forEach(child => child.collapse());
		this.isExpanded = false;
	}

	expand(){
		this.isExpanded = true;
	}
}