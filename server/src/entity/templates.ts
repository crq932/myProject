import { 
  Entity, 
  PrimaryGeneratedColumn,
  Column, 
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { users_templates } from './users_templates';

@Entity()
export class templates {
      
    @PrimaryGeneratedColumn()
      id: number;
  
    @Column()
      content: string;
  
    @Column()
      category: string;
  
    @Column()
      font: string;
  
    @Column()
      font_size: number;
      
    @Column()
      hits: number;
  
    @Column()
      letter_type: string;
      
    @CreateDateColumn()
    readonly created_at: Date;

    @UpdateDateColumn()
    readonly updated_at: Date;

    @OneToMany(() => users_templates, (users_templates) => users_templates.templates_id,)
      users_templates: users_templates[];
}