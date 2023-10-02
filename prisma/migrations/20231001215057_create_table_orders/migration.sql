-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "status" INTEGER NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "document" TEXT NOT NULL,
    "payment" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "productId" INTEGER NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
