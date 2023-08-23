-- CreateTable
CREATE TABLE "post" (
    "postId" SERIAL NOT NULL,
    "quote" TEXT NOT NULL DEFAULT ' ',
    "userId" INTEGER NOT NULL,

    CONSTRAINT "post_pkey" PRIMARY KEY ("postId")
);

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_userId_fkey" FOREIGN KEY ("userId") REFERENCES "usuario"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
