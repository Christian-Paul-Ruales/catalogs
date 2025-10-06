import { MaxLength } from "class-validator";
import { CatalogDetail } from "src/catalog-detail/entities/catalog-detail.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "catalog"})
export class Catalog {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column('text',
        {
            unique: true,
            nullable: false

        }
    )
    code: string;
    @Column('text',
        {
            nullable: false,
            
        }
    )
    name: string;

    @Column('text',
        {
            nullable: true,
        }
    )
    @MaxLength(255)
    description: string;

    @Column({
        type: 'date',
        name: 'creation_date'
    })
    creationDate: Date;

    @Column({
        type: 'date',
        name: 'modification_date',
    })
    modificationDate: Date;

    @Column({
        type: 'boolean',
    })
    status: boolean;

    @OneToMany(
        () => CatalogDetail,
        detail => detail.catalog,
        {
            cascade: true,
            eager: true
        },
        
    )
    details: CatalogDetail[];

    @BeforeInsert()
    onCreate() {
        this.creationDate = new Date();
        this.modificationDate = new Date();
        this.status = true;
    }

    @BeforeUpdate()
    onUpdate() {
        this.modificationDate = new Date();
    }
}
