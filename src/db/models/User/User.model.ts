import { Table, Column, Model, DataType, Unique, AllowNull, Scopes,
    HasMany, ForeignKey, BelongsTo, IsEmail, Default, DefaultScope } from 'sequelize-typescript';
  import Receipt from '../Receipt/Receipt.model';
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
  class User extends Model<User> {
    @Column(DataType.STRING)
    login!: string;
  
    @Column(DataType.STRING)
    name!: string;
  
    @Column(DataType.STRING)
    surname!: string;

    @Column(DataType.STRING)
    password!: string;

    @Column(DataType.STRING)
    email!: string;

    @Column(DataType.INTEGER)
    limit!: number;
  
    @HasMany(() => Receipt, 'userId')
    receipts!: Receipt[];
  }
  
  export default User;