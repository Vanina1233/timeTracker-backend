module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        isEmail: true, //checks for email format
        allowNull: false,
      },
      signature: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: true }
  );

  User.associate = (models) => {
    User.hasMany(models.DailySchedule, {
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  };

  return User;
};
