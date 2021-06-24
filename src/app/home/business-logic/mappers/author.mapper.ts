import { ItemMapper } from "src/app/lib/item-mapper";
import { AuthorModel } from "src/app/models/author.model";

export class AuthorMapper extends ItemMapper<AuthorModel> {
  protected mapFromItem(item): AuthorModel {
    const result = new AuthorModel();
    result.author = decodeURIComponent(escape(item));
    return result;
  }
}
