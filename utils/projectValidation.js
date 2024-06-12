const zod = require('zod');
const projectValidation = zod.object({
    body: zod.object({
        projectName: zod
        .string()
        .max(30,"The maximum character of Project name should be 30")
        .min(3,"The minimum character of Project name should be 3"),

        

        projectdes: zod.string()
        .max(100,"The maximum character of Project desc should be 100")
        .min(5,"The minimum character of Project desc should be 5"),
        
    
    }),
});

module.exports = projectValidation;