var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MemberSchema = new Schema({
  _memberId: String,
  email: String,
  homepage: String,
  phone: String,
  thesis: String,
  researchFileds : String,
  resume: String,
  socials: [{ type: Schema.Types.ObjectId, ref: 'Social' }],
  articles: [{ type: Schema.Types.Mixed, ref: 'Article' }]
});


module.exports = mongoose.model('Member', MemberSchema);
