import { ItemMapper } from "src/app/lib/item-mapper";
import { BookModel } from "src/app/models/book.model";

export class BookMapper extends ItemMapper<BookModel> {
  protected mapFromItem(item): BookModel {
    const result = new BookModel();
    // console.log(item.author, decodeURIComponent(escape(item.author)));
    result.author = decodeURIComponent(escape(item.author));
    result.name = decodeURIComponent(escape(item.name));
    result.src = item.src;
    result.libraryNo = item.libraryNo;
    result.alphabet = item.alphabet;
    result.shelfNo = item.shelfNo;
    result.publisher = item.publisher;
    result.status = item.status;
    result.id = item._id;
    return result;
  }
}
