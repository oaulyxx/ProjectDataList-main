module.exports = (sequelize, DataTypes) => {
    const height130up = sequelize.define('height130up', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        detail: DataTypes.STRING,
        availability: DataTypes.STRING,
        capacity: DataTypes.INTEGER
    })
    return height130up
}