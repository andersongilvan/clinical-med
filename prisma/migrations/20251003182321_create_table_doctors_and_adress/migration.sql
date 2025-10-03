-- CreateTable
CREATE TABLE "adress" (
    "id" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "neighbohhod" TEXT NOT NULL,
    "public_place" TEXT NOT NULL,
    "number" TEXT NOT NULL,

    CONSTRAINT "adress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "doctors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "crm" TEXT NOT NULL,
    "speciality" TEXT NOT NULL,
    "adress_id" TEXT NOT NULL,

    CONSTRAINT "doctors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "doctors_username_key" ON "doctors"("username");

-- CreateIndex
CREATE UNIQUE INDEX "doctors_adress_id_key" ON "doctors"("adress_id");

-- AddForeignKey
ALTER TABLE "doctors" ADD CONSTRAINT "doctors_adress_id_fkey" FOREIGN KEY ("adress_id") REFERENCES "adress"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
