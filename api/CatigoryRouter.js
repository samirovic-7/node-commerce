const express = require('express')
const {param,validationResult} = require('express-validator')
const {getCategoryValidation} = require('../ErrorValidations/ValidationErrors')
const {getCatigories,CreateCatig,getCatigory,getCatigoryUpdate,getCatigoryDelete} = require('../Controllers/CatigoryServices')

const router = express.Router()

router.route('/').get(getCatigories).post(CreateCatig)
router.route('/:id').get(getCategoryValidation,getCatigory).put(getCatigoryUpdate).delete(getCatigoryDelete)

module.exports=router;