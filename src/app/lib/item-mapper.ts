import { map } from "rxjs/operators";

export abstract class ItemMapper<T> {
  // override this to map any types
  public map = map((data: any) => data.map((item) => this.mapFromItem(item)));
  protected abstract mapFromItem(item: any): T;
}
