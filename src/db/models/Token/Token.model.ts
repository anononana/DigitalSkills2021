import { Table, Column, Model, DataType, Unique, AllowNull, Scopes,
    HasMany, ForeignKey, BelongsTo, IsEmail, Default, DefaultScope } from 'sequelize-typescript';
import User from '../User/User.model';
  
  
 
  @Table({
    paranoid: true,
    timestamps: true, 
  })
  class Token extends Model<Token> {
    @Column(DataType.STRING)
    value!: string;
  
    @ForeignKey(()=> User)
    @Column(DataType.INTEGER)
    userId!: number;
  
    @Column(DataType.DATE)
    expiresAt!: Date;
  
    @BelongsTo(() => User, 'userId')
    user!: User;
  }
  
  export default Token;