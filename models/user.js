var mongoose = require('mongoose');
var schema = mongoose.Schema;

userShema = new schema({
  first_name:{type:String,require:true},
  last_name:{type:String,require:true},
  mobile:{type:String,require:true},
  email:{type:String,require:true}
})

module.exports = mongoose.model("User",userShema);