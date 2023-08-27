-- CreateTable
CREATE TABLE "CategoryPost" (
    "categorypostId" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "CategoryPost_pkey" PRIMARY KEY ("categorypostId")
);

-- CreateTable
CREATE TABLE "InfoPost" (
    "infopostId" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "categorypostId" INTEGER NOT NULL,

    CONSTRAINT "InfoPost_pkey" PRIMARY KEY ("infopostId")
);

-- AddForeignKey
ALTER TABLE "InfoPost" ADD CONSTRAINT "InfoPost_categorypostId_fkey" FOREIGN KEY ("categorypostId") REFERENCES "CategoryPost"("categorypostId") ON DELETE RESTRICT ON UPDATE CASCADE;
