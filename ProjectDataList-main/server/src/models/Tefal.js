module.exports = (sequelize, DataTypes) => {
    const Tefal = sequelize.define('Tefal', {
        name_thai: DataTypes.STRING,
        name_eng: DataTypes.STRING,
        model: DataTypes.STRING,
        category: DataTypes.STRING,
        detail: DataTypes.STRING,
        price: DataTypes.INTEGER
    })
    return Tefal
}