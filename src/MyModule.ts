import { Module } from "@nestjs/common";

import { BillModule } from "./controllers/bill/BillModule";

@Module({
  imports: [BillModule],
})
export class MyModule {}
