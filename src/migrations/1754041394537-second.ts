import { MigrationInterface, QueryRunner } from "typeorm";

export class Second1754041394537 implements MigrationInterface {
    name = 'Second1754041394537'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "quote_post" DROP CONSTRAINT "FK_9302d17791833d5ea1ddd4fd58d"`);
        await queryRunner.query(`ALTER TABLE "text_post" DROP CONSTRAINT "FK_0e5c6e0b12c62909b210fb1fd34"`);
        await queryRunner.query(`ALTER TABLE "quote_post" ADD CONSTRAINT "FK_9302d17791833d5ea1ddd4fd58d" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "text_post" ADD CONSTRAINT "FK_0e5c6e0b12c62909b210fb1fd34" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "text_post" DROP CONSTRAINT "FK_0e5c6e0b12c62909b210fb1fd34"`);
        await queryRunner.query(`ALTER TABLE "quote_post" DROP CONSTRAINT "FK_9302d17791833d5ea1ddd4fd58d"`);
        await queryRunner.query(`ALTER TABLE "text_post" ADD CONSTRAINT "FK_0e5c6e0b12c62909b210fb1fd34" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "quote_post" ADD CONSTRAINT "FK_9302d17791833d5ea1ddd4fd58d" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
