import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  // user, file or folder
  type: {
    type: String, 
    required: true
},

  // user
  firstName: {
    type: String, 
    required: false
},
  lastName: {
    type: String, 
    required: false
},
  lastLogin: {
    type: Date, 
    required: false
},

  // file
  fileName: {
    type: String, 
    required: false
},
  fileCreator: {
    type: String, 
    required: false
},

  // folder 
  folderName: {
    type: String, 
    required: false
},
  folderCreator: {
    type: String, 
    required: false
},
  createdAt: {
    type: Date, 
    required: false
}

});

const Result = mongoose.model("Result", resultSchema);

export default Result;
