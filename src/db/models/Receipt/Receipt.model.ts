import { Table, Column, Model, DataType, Unique, AllowNull, Scopes,
    HasMany, ForeignKey, BelongsTo, IsEmail, Default, DefaultScope } from 'sequelize-typescript';
import User from '../User/User.model';
@Table({
  paranoid: true,
  timestamps: true, 
})
  class Receipt extends Model<Receipt> {
    @AllowNull(false)
    @Column(DataType.INTEGER)
    sum!: number;
  

    @AllowNull(false)
    @Column(DataType.DATE)
    printDate!: Date

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    userId!: number;
  
    @BelongsTo(() => User, 'userId')
    user!: User;
  }
  
  export default Receipt;