import { ItemMapper } from "src/app/lib/item-mapper";
import { SaleBookModel } from "src/app/models/salebook.model";

export class SaleBookMapper extends ItemMapper<SaleBookModel> {
  protected mapFromItem(item): SaleBookModel {
    const result = new SaleBookModel();
    console.log(item.author, decodeURIComponent(escape(item.author)));
    result.author = decodeURIComponent(escape(item.author));
    result.name = decodeURIComponent(escape(item.name));
    result.publisher = item.publisher;
    result.src = item.src;
    result.price = item.price;
    result.id = item._id;
    return result;
  }
}
