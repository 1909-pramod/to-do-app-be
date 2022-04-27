-- CreateTable
CREATE TABLE "tasks" (
    "id" SERIAL NOT NULL,
    "task_title" VARCHAR(45) NOT NULL,
    "task_description" VARCHAR(45),
    "start_date" TIMESTAMP NOT NULL,
    "end_date" TIMESTAMP,
    "status" VARCHAR(45) NOT NULL,
    "closed_date" TIMESTAMP,
    "user_id" INTEGER,
    "parent_task_id" INTEGER,
    "deleted_at" TIMESTAMP,

    CONSTRAINT "tasks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "email" VARCHAR(45) NOT NULL,
    "username" VARCHAR(45) NOT NULL,
    "password" TEXT NOT NULL,
    "dob" DATE,
    "first_name" VARCHAR(45) NOT NULL,
    "last_name" VARCHAR(45),
    "deleted_at" TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "task_id_UNIQUE" ON "tasks"("id");

-- CreateIndex
CREATE INDEX "parent_task_id" ON "tasks"("parent_task_id");

-- CreateIndex
CREATE INDEX "user_id" ON "tasks"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "id_UNIQUE" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "email_UNIQUE" ON "user"("email");

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_ibfk_2" FOREIGN KEY ("parent_task_id") REFERENCES "tasks"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tasks" ADD CONSTRAINT "tasks_ibfk_1" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
