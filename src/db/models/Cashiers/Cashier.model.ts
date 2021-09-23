import { Table, Column, Model, DataType, Unique, AllowNull, Scopes,
    HasMany, ForeignKey, BelongsTo, IsEmail, Default, DefaultScope } from 'sequelize-typescript';
import User from '../User/User.model';
@Table({
  paranoid: true,
  timestamps: true, 
})
  class Cashier extends Model<Cashier> {
    @AllowNull(false)
    @Column(DataType.STRING)
    nfc!: string;


    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    userId!: number;
  
    @BelongsTo(() => User, 'userId')
    user!: User;
  }
  
  export default Cashier;