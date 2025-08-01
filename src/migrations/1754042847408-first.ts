import { MigrationInterface, QueryRunner } from "typeorm";

export class First1754042847408 implements MigrationInterface {
    name = 'First1754042847408'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quote_post" DROP CONSTRAINT "FK_9302d17791833d5ea1ddd4fd58d"`);
        await queryRunner.query(`ALTER TABLE "text_post" DROP CONSTRAINT "FK_0e5c6e0b12c62909b210fb1fd34"`);
        await queryRunner.query(`ALTER TABLE "quote_post" DROP CONSTRAINT "REL_9302d17791833d5ea1ddd4fd58"`);
        await queryRunner.query(`ALTER TABLE "quote_post" DROP COLUMN "postId"`);
        await queryRunner.query(`ALTER TABLE "text_post" DROP CONSTRAINT "REL_0e5c6e0b12c62909b210fb1fd3"`);
        await queryRunner.query(`ALTER TABLE "text_post" DROP COLUMN "postId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "text_post" ADD "postId" integer`);
        await queryRunner.query(`ALTER TABLE "text_post" ADD CONSTRAINT "REL_0e5c6e0b12c62909b210fb1fd3" UNIQUE ("postId")`);
        await queryRunner.query(`ALTER TABLE "quote_post" ADD "postId" integer`);
        await queryRunner.query(`ALTER TABLE "quote_post" ADD CONSTRAINT "REL_9302d17791833d5ea1ddd4fd58" UNIQUE ("postId")`);
        await queryRunner.query(`ALTER TABLE "text_post" ADD CONSTRAINT "FK_0e5c6e0b12c62909b210fb1fd34" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "quote_post" ADD CONSTRAINT "FK_9302d17791833d5ea1ddd4fd58d" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

}
