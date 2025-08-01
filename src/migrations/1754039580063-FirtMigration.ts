import { MigrationInterface, QueryRunner } from "typeorm";

export class FirtMigration1754039580063 implements MigrationInterface {
    name = 'FirtMigration1754039580063'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "quote_post" ("id" SERIAL NOT NULL, "quote" character varying NOT NULL, "author" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "postId" integer, CONSTRAINT "REL_9302d17791833d5ea1ddd4fd58" UNIQUE ("postId"), CONSTRAINT "PK_651f935d773caa71391c5eccf0a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "text_post" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "postId" integer, CONSTRAINT "REL_0e5c6e0b12c62909b210fb1fd3" UNIQUE ("postId"), CONSTRAINT "PK_202b6bbfc3e7aadd8ec62b13fe2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "postType" "public"."post_posttype_enum" NOT NULL, "postId" integer, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" integer, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "like" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "post_id" integer, "user_id" integer, CONSTRAINT "UQ_3221edd468ef18cc93a806b74b2" UNIQUE ("post_id", "user_id"), CONSTRAINT "PK_eff3e46d24d416b52a7e0ae4159" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "quote_post" ADD CONSTRAINT "FK_9302d17791833d5ea1ddd4fd58d" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "text_post" ADD CONSTRAINT "FK_0e5c6e0b12c62909b210fb1fd34" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_5c1cf55c308037b5aca1038a131" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_d41caa70371e578e2a4791a88ae" FOREIGN KEY ("post_id") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "like" ADD CONSTRAINT "FK_4356ac2f9519c7404a2869f1691" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_4356ac2f9519c7404a2869f1691"`);
        await queryRunner.query(`ALTER TABLE "like" DROP CONSTRAINT "FK_d41caa70371e578e2a4791a88ae"`);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_5c1cf55c308037b5aca1038a131"`);
        await queryRunner.query(`ALTER TABLE "text_post" DROP CONSTRAINT "FK_0e5c6e0b12c62909b210fb1fd34"`);
        await queryRunner.query(`ALTER TABLE "quote_post" DROP CONSTRAINT "FK_9302d17791833d5ea1ddd4fd58d"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "like"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "text_post"`);
        await queryRunner.query(`DROP TABLE "quote_post"`);
    }

}
