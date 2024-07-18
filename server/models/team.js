// src/models/team.js
  
module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define('Team', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      coach: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    });
  
    return Team;
  };