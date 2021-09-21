import { Table, Column, Model, DataType, Unique, AllowNull, Scopes,
    HasMany, ForeignKey, BelongsTo, IsEmail, Default, DefaultScope } from 'sequelize-typescript';
import User from '../User/User.model';
  
  @DefaultScope(() => ({
    attributes: {exclude: ['password']}
  }))
  
  
  @Scopes(() => ({
    withFK: {
      attributes: {
        exclude: ['password']
      },
      include: [
        Receipt
      ],
    },
  }))
  @Table({
    paranoid: true,
    timestamps: true, 
  })
  class Receipt extends Model<Receipt> {
    @Column(DataType.INTEGER)
    @AllowNull(false)
    sum!: number;
  
    @Column(DataType.DATE)
    @AllowNull(false)
    printDate!: Date

    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    userId!: number;
  
    @BelongsTo(() => User, 'userId')
    user!: User;
  }
  
  export default Receipt;