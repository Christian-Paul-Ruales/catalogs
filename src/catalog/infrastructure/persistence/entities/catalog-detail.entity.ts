import { Catalog } from "src/catalog/infrastructure/persistence/entities/catalog.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "catalog-detail"})
export class CatalogDetail {
    @PrimaryGeneratedColumn("uuid")
    id?: string;

    @ManyToOne(
        () => Catalog,
        catalog => catalog.details,
        {
            onDelete: 'CASCADE'
        }
    )
    catalog: Catalog;

    @Column('text', {
        unique: true,
        nullable: false,
    
    })
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
    origin: string;

    @Column('text',
        {
            nullable: true,
        }
    )
    destination: string;
    @Column('date', {
        name: 'creation_date'
    })
    creationDate: Date;
    @Column('date',{
        name: 'modification_date',
    })
    modificationDate: Date;

    @Column('boolean', {})
    status: boolean;



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
