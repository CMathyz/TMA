export class Produit {

  private _id: number = 0;
  private _name: string = '';

  private _price: number = 0.0;

  private _quantity : number = 0;

  constructor(data : any) {
    this.id = data.id ? data.id : null;
    this.name = data.name ? data.name : null;
    this.price = data.price ?  data.price : null;
    this.quantity = data.quantity ? data.quantity : null;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get quantity(): number {
    return this._quantity;
  }

  set quantity(value: number) {
    this._quantity = value;
  }

  public serialize() {
    return {
      id: this.id == 0 ? null : this.id,
      name: this.name == '' ? null : this.name,
      price: this.price == 0.0 ? null: this.price,
      quantity: this.quantity == 0 ? null : this.quantity
    }
  }
}
