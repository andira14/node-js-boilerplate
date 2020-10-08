const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    experience_day: DataTypes.INTEGER,
    gender: DataTypes.CHAR,
    point: DataTypes.BIGINT,
    login_type: DataTypes.STRING,
    social_login_id: DataTypes.STRING,
    referral: DataTypes.STRING,
    referral_id: DataTypes.BIGINT,
    ktp_number: DataTypes.STRING,
    selfie_url: DataTypes.STRING,
    ktp_status: DataTypes.STRING,
    profile_picture_url: DataTypes.STRING,
    npwp_number: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'user',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
  });
  return user;
};
