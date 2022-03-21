import { 
  Entity, 
  PrimaryGeneratedColumn, 
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { templates } from './templates';
import users from './users';
    
@Entity()
export class users_templates {
  
    @PrimaryGeneratedColumn()
      id: number;
  
    @CreateDateColumn()
    readonly created_at: Date;
  
    @UpdateDateColumn()
    readonly updated_at: Date;

    @ManyToOne(() => users, (users) => users.users_templates, {
      onDelete: 'CASCADE',
    })

    @JoinColumn({name: 'users_id'})
      users_id: users;

    @ManyToOne(() => templates, (templates) => templates.users_templates, {
      onDelete: 'CASCADE',
    })
  
    @JoinColumn({name: 'templates_id'})
      templates_id: templates;    
}