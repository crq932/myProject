import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
  CreateDateColumn,
  OneToMany 
} from 'typeorm';
import { users_templates } from './users_templates';

@Entity()
export default class users {
    
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      email: string;

    @Column()
      password: string;

    @Column()
      name: string;

    @Column()
      nickname: string;
    
    @Column()
      gender: string;

    @Column()
      image: string;
    
    @CreateDateColumn()
    readonly created_at: Date;
    
    @OneToMany(() => users_templates, (users_templates) => users_templates.templates_id,)
      users_templates: users_templates[];
}