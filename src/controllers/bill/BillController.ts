import { IPage } from "@/lib/structures/common/IPage";
import { IBill } from "@/structures/bill/IBill";
import core from "@nestia/core";
import { Controller } from "@nestjs/common";
import { random } from "typia";

/**
 * This is a fake controller.
 *
 * Remove it or make it to be real one.
 */
@Controller("bill")
export class BillController {
  @core.TypedRoute.Get()
  public index(
    @core.TypedQuery() query: IBill.IRequest,
  ): Promise<IPage<IBill.Summarized>> {
    query.page ??= 1;
    query.limit ??= 10;
    query.query ??= "";
    return Promise.resolve(random<IPage<IBill.Summarized>>());
  }

  /**
   * Get an article with detailed info.
   *
   * Open an article with detailed info, increasing reading count.
   *
   * @param section Target section
   * @param id Target articles id
   * @returns Detailed article info
   */
  @core.TypedRoute.Get(":id")
  public at(@core.TypedParam("id") id: string): Promise<IBill.Detailed> {
    console.log(id);

    return Promise.resolve(random<IBill.Detailed>());
  }
}
