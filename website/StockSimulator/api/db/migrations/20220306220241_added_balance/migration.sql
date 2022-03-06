/*
  Warnings:

  - Added the required column `balance` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `numberOfStocks` to the `StockToUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `stockId` to the `StockToUser` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "balance" REAL NOT NULL
);
INSERT INTO "new_User" ("email", "id", "name") SELECT "email", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_StockToUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "stockId" INTEGER NOT NULL,
    "numberOfStocks" INTEGER NOT NULL,
    CONSTRAINT "StockToUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_StockToUser" ("id", "userId") SELECT "id", "userId" FROM "StockToUser";
DROP TABLE "StockToUser";
ALTER TABLE "new_StockToUser" RENAME TO "StockToUser";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
