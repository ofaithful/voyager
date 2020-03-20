const User = require('../models/user');

module.exports = async function(username) {
    const user = await User.find({username});
    return await new Promise((resolve, reject) => {
        resolve(user.length > 0);
    });
}