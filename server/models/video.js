const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  video.init({
    user_id: DataTypes.BIGINT,
    name: DataTypes.STRING,
    category: DataTypes.INTEGER,
    video_url: DataTypes.STRING,
    description: DataTypes.TEXT,
    deleted_at: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'video',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: 'deleted_at',
    paranoid: true,
  });
  return video;
};
