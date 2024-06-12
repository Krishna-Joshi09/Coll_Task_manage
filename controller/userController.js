const userSchema= require("../model/userModel");
exports.adduser=(req,res) => {
    const user =new userSchema(req.body);
    user.save()
    .then((data)=>{
        if(!data)
            {
                res.json({
                    message:"something went wrong while save the user",
                    status:400,
                    error:err,
                });
            }
        else
        {
            res.json({
                message:"user add successfully",
                status:200,
                data:data,
            });

        }


            
    }).catch((err)=>{
        res.json({
            message:"something went wrong while save user",
            status:400,
            error:err,
        });
    })
};

exports.getAlluser = (req,res) => {
    userSchema.find().then((data)=>{
        if(!data)
        {
            res.json({
                message: "Something went wrong while fetching the user",
                status: 400,
                error: err,
              });
        }
        else
        {
            res.json({
                message: "user fetch successfully",
                status: 200,
                data: data,
              });
        }
    }).catch((err)=>{
        res.json({
            message: "Something went wrong while fetching the user",
            status: 400,
            error: err,
          });
    })
};

exports.getuserById = (req, res) => {
    userSchema
      .findById(req.params.id)
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while fetch the user Id",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "user Fetch successfully",
            status: 200,
            data: data,
          });
        }
      })
      .catch((err) => {
        res.json({
          message: "Something went wrong while Fetch the user",
          status: 400,
          error: err,
        });
      });
  };

  exports.updateuserById = (req, res) => {
    userSchema
      .findOneAndUpdate(
        {
          _id: req.params.id,
        },
        { $set: req.body }
      )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while update the user",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "user update successfully",
            status: 200,
            data: data,
          });
        }
      })
  };

  exports.deleteuserById = (req,res) =>{
    const id = req.params.id;
    console.log(id);
    userSchema.findOneAndDelete(
      {
        _id:id,
      },
    )
      .then((data) => {
        if (!data) {
          res.json({
            message: "Something went wrong while Delete the user",
            status: 400,
            error: err,
          });
        } else {
          res.json({
            message: "user Delete successfully",
            status: 200,
            data: data,
          });
        }

      }).catch((err) => {
          res.json({
            message: "Something went wrong while Fetch the user",
            status: 400,
            error: err,
          });
        })
      
      }