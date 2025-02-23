import { tags } from "typia";

import { IPage } from "../common/IPage";

export interface IBill {}

export namespace IBill {
  /**
   * Page request info with some options.
   */
  export interface IRequest extends IPage.IRequest {
    /**
     * Searching options.
     */
    query?: string;
  }

  export interface Summarized {
    id: string;
    title: string;
    summary: string;
    createdAt: Date;
    updatedAt: Date;
  }

  export interface Detailed {
    id: string;
    title: string;
    description: string;
    proposer: string[];
    leadProposer: string;
    pdfLink: string & tags.Format<"url">;

    createdAt: Date;
    updatedAt: Date;
  }
}
