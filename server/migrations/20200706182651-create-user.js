module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      phone_number: {
        type: Sequelize.STRING,
      },
      experience_day: {
        type: Sequelize.INTEGER,
      },
      gender: {
        type: Sequelize.CHAR,
      },
      point: {
        type: Sequelize.BIGINT,
      },
      login_type: {
        type: Sequelize.STRING,
      },
      social_login_id: {
        type: Sequelize.STRING,
      },
      referral: {
        type: Sequelize.STRING,
      },
      referral_id: {
        type: Sequelize.BIGINT,
      },
      ktp_number: {
        type: Sequelize.STRING,
      },
      selfie_url: {
        type: Sequelize.STRING,
      },
      ktp_status: {
        type: Sequelize.STRING,
      },
      profile_picture_url: {
        type: Sequelize.STRING,
      },
      npwp_number: {
        type: Sequelize.STRING,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deleted_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface) => {
    await queryInterface.dropTable('users');
  },
};
