export class Products {
  public pid: string;
  public pname: string;
  public pimg: string;
  public pcost: number;
  public pdesc: string;

  public constructor(id: string, name: string, img: string, cost: number, desc:string) {
    this.pid = id;
    this.pname = name;
    this.pimg = img;
    this.pcost = cost;
    this.pdesc = desc;
  }
}
