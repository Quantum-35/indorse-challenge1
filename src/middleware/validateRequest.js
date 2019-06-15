import Joi from '@hapi/joi';
import _ from 'lodash';
import validations from '../utils/validateUser';

const validateRequest= validate => (req, res, next) => {
    const data = req.body;
    if(_.has(validations, validate)) {
        const validateSchema = _.get(validations, validate);
        const err = Joi.validate(data, validateSchema, { abortEarly: false });

        if (!err.error) {
            req.body = data;
            next();
        } else {
            const allErrors = [];
            err.error.details.forEach((errors) => {
                const findError = allErrors.filter(error => error === errors.context.label);
                if (findError.length === 0) {
                  allErrors.push(errors.context.label);
                }
              });
            return res.status(400).send({
                message: allErrors,
            });
        }
    }
}

export default validateRequest;