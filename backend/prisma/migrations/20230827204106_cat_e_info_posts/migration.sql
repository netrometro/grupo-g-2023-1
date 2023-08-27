-- CreateTable
CREATE TABLE "CategoryPost" (
    "categorypostId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CategoryPost_pkey" PRIMARY KEY ("categorypostId")
);

-- CreateTable
CREATE TABLE "InfoPost" (
    "infopostId" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categorypostId" INTEGER NOT NULL,

    CONSTRAINT "InfoPost_pkey" PRIMARY KEY ("infopostId")
);

-- AddForeignKey
ALTER TABLE "InfoPost" ADD CONSTRAINT "InfoPost_categorypostId_fkey" FOREIGN KEY ("categorypostId") REFERENCES "CategoryPost"("categorypostId") ON DELETE RESTRICT ON UPDATE CASCADE;
