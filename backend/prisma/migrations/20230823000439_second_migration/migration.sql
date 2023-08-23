-- CreateTable
CREATE TABLE "EcoDica" (
    "id" SERIAL NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "EcoDica_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InfoCard" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "texto" TEXT NOT NULL,
    "ecodicaId" INTEGER NOT NULL,

    CONSTRAINT "InfoCard_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "InfoCard" ADD CONSTRAINT "InfoCard_ecodicaId_fkey" FOREIGN KEY ("ecodicaId") REFERENCES "EcoDica"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
