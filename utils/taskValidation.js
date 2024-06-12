const zod = require('zod');
const taskValidation = zod.object({
    body: zod.object({
        taskName: zod
        .string()
        .max(50,"The maximum character of Task name should be 50")
        .min(3,"The minimum character of Task name should be 3"),

        
        taskDescrip: zod.string()
        .max(100,"The maximum character of Task desc should be 100")
        .min(5,"The minimum character of Task desc should be 5"),
        
        task_status: zod
        .string()
        .max(20,"The maximum character of Task satatus should be 20")
        .min(3,"The minimum character of Task status should be 3"),

        task_assignTo:zod
        .string()
        .max(20,"The maximum character of Task assign To should be 20")
        .min(3,"The minimum character of Task assign To should be 3"),
    
    }),
});

module.exports = taskValidation;