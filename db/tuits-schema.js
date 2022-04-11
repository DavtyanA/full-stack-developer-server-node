import mongoose from 'mongoose';
const schema = mongoose.Schema({
    tuit: String,
    likes: Number,
    postedBy: {
        username: String
    },
    verified: Boolean,
    handle: String,
    "logo-image": String,
    comments: Number,
    retuits: Number,
}, {collection: 'tuits'});
export default schema;