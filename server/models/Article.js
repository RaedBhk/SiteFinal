var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  _articleId: String,
  authors: {type: Schema.Types.Mixed},
  title: String,
  date: Date,
  url: String,
  description: String
});


module.exports = mongoose.model('Article', ArticleSchema);