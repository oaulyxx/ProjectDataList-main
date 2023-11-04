module.exports = (sequelize, DataTypes) => {
    const height110up = sequelize.define('height110up', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        detail: DataTypes.STRING,
        availability: DataTypes.STRING,
        capacity: DataTypes.INTEGER
    })
    return height110up
}