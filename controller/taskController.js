const taskSchema= require("../model/taskModel");
exports.addtask=(req,res) => {
    const task =new taskSchema(req.body);
    task.save()
    .then((data)=>{
        if(!data)
            {
                res.json({
                    message:"something went wrong while save the task",
                    status:400,
                    error:err,
                });
            }
        else
        {
            res.json({
                message:"task add successfully",
                status:200,
                data:data,
            });

        }


            
    }).catch((err)=>{
        res.json({
            message:"something went wrong while save task",
            status:400,
            error:err,
        });
    })
};

exports.getAlltask = (req,res) => {
    taskSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the task",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "Task fetch successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the Task",
            status: 400,
            error: err,
          });
    })
};

exports.gettaskById = (req, res) => {
    taskSchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetch the Task Id",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Task Fetch successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Fetch the Task",
          status: 400,
          error: err,
        });
      });
  };

  exports.updatetaskById = (req, res) => {
    taskSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while update the Task",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Task update successfully",
            status: 200,
            data: data,
          });
        }
      })
  };

  exports.deletetaskById = (req,res) =>{
    const id = req.params.id;
    console.log(id);
    taskSchema.findOneAndDelete(
      {
        _id:id,
      },
    )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while Delete the Task",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Task Delete successfully",
            status: 200,
            data: data,
          });
        }

      }).catch((err) => {
          res.json({
            message: "Something went wrong while Fetch the Task",
            status: 400,
            error: err,
          });
        })
      
      }