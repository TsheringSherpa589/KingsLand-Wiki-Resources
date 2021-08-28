const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: "String"},
    password: { type: "String"}, 
    CreatedArticles: { type:"String"}
 }, {
     timestamps: true,
 });




// userSchema.methods.generateAuthToken = async function() {
//     // Generate an auth token for the user
//     const user = this
//     const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET)
//     user.tokens = user.tokens.concat({token})
//     await user.save()
//     return token
// }

const User = mongoose.model('User', userSchema);


module.exports = User;