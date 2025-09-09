import { Table, Column, Model, DataType } from "sequelize-typescript";
import { TaskStatus } from "../../constants/todo.constant";

@Table({
  timestamps: true,
  createdAt: "created_at",
  updatedAt: "updated_at",
  tableName: "tasks",
})
export class Task extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  description!: string;

  @Column({
    type: DataType.ENUM(...Object.values(TaskStatus)),
    defaultValue: TaskStatus.PENDING,
  })
  status!: TaskStatus;
}
