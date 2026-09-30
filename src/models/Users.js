import { DataTypes } from 'sequelize';
import db from '../config/database.js';

export default db.define('User', {
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING
});