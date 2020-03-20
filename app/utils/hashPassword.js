const bcrypt = require('bcryptjs');

module.exports = async function(password) {
    const saltRounds = 10;
    const hashedPassword = await new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, function(err, hash) {
            if (err) reject();
            resolve(hash);
        })
    })
    return hashedPassword;
}