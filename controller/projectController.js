const projectSchema= require("../model/projectModel");
exports.addproject=(req,res) => {
    const project =new projectSchema(req.body);
    project.save()
    .then((data)=>{
        if(!data)
            {
                res.json({
                    message:"something went wrong while save the Project",
                    status:400,
                    error:err,
                });
            }
        else
        {
            res.json({
                message:"Project add successfully",
                status:200,
                data:data,
            });

        }


            
    }).catch((err)=>{
        res.json({
            message:"something went wrong while save Project",
            status:400,
            error:err,
        });
    })
};
exports.getAllproject = (req,res) => {
    projectSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the projects",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "projects fetch successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the projects",
            status: 400,
            error: err,
          });
    })
};


exports.getprojectById = (req, res) => {
    projectSchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetch the Project Id",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Project Fetch successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Fetch the Project",
          status: 400,
          error: err,
        });
      });
  };
  exports.updateprojectById = (req, res) => {
    projectSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while update the project",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Project update successfully",
            status: 200,
            data: data,
          });
        }
      })
  };


  exports.deleteprojectById = (req,res) =>{
    const id = req.params.id;
    console.log(id);
    projectSchema.findOneAndDelete(
      {
        _id:id,
      },
    )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while Delete the Project",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "Project Delete successfully",
            status: 200,
            data: data,
          });
        }

      }).catch((err) => {
          res.json({
            message: "Something went wrong while Fetch the Project",
            status: 400,
            error: err,
          });
        })
      
      }