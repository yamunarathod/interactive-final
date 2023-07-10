export class FeedbackForm {
  // id?: string;
  // name?: string;
  // phoneNumber?: string;
  // productsSelected? : productSelected[]


  constructor(public id:string,public _name?:string, public productsSelected?: any) {

  }
}

export type productSelected =
{
  brandName? : string;
  productName? : string[];
}
