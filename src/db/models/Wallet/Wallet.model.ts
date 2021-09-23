import { Table, Column, Model, DataType, Unique, AllowNull, Scopes,
    HasMany, ForeignKey, BelongsTo, IsEmail, Default, DefaultScope } from 'sequelize-typescript';
import User from '../User/User.model';
@Table({
  paranoid: true,
  timestamps: true, 
})
  class Cafe extends Model<Cafe> {
    @AllowNull(false)
    @Column(DataType.STRING)
    cashToken!: string;

    @Column(DataType.INTEGER)
    cashValue!: number;

    @Column(DataType.STRING)
      address!: string;

      @Column(DataType.STRING)
      privKey!: string

      @ForeignKey(()=> User)
      @Column(DataType.INTEGER)
      userId!: number
  }
  
  export default Cafe;