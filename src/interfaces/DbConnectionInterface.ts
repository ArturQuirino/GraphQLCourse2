import * as Sequelize from 'sequelize';
import { ModeslInterface } from './ModelsInterface';

export interface DbConnection extends ModeslInterface {
    sequelize: Sequelize.Sequelize;
}