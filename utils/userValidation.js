const zod = require('zod');
const userValidation = zod.object({
    body: zod.object({
        userName: zod
        .string()
        .max(20,"The maximum character of User name should be 20")
        .min(3,"The minimum character of User name should be 3"),

        

        user_email:zod.string().email(),
        
    
    }),
});

module.exports = userValidation;



