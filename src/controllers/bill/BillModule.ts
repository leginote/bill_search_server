import { Module } from "@nestjs/common";

import { BillController } from "./BillController";

@Module({
  controllers: [BillController],
})
export class BillModule {}
