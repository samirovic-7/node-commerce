const {validationResult} = require('express-validator')
const ValidError =  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        next(); // Call next middleware or route handler if validation passes
    }
}

module.exports = ValidError