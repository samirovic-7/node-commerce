const {check} = require('express-validator')
const ValidError = require('../utils/validationError')
exports.getCategoryValidation =
    [check('id').isMongoId().withMessage('invalid category id for mongos'),ValidError]