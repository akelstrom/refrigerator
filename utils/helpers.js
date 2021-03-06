// Any helpers functions we create for Handlebars
module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },
  getUsername: inventories => {
    return inventories.length > 0 ? inventories[0].user.username : 'User';
  }
}