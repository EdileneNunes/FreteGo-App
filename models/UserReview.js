import Sequelize from 'sequelize';
import connection from '../config/db.js';
import User from '../models/User.js';

const UserReview = connection.define(
    'userreview',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true    
        },
        idUser: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        comment: {
            type: Sequelize.STRING,
            allowNull: false
        },
        stars: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }
);

Review.belongsTo(User, {
    foreignKey: 'idUser'
  });

export default UserReview;