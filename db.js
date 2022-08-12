const mongoose = require("mongoose");

// Connection -----

mongoose.connect(`mongodb://127.0.0.1:27017/jams`)
  .then( () => {console.log('MongoDB connected...')})
  .catch( (err) => {console.log('err:', err)});

// Schemas -----

const jamsAuthSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String
  }
);

const jamsUserSchema = new mongoose.Schema(
   {
    username: String,
    bio: String,
    profile_img: String,
    category: Array,
    following: Array,
    followed_by: Array,
    member_of: Array
    uploads: [
      {
        title: String,
        description: String,
        url: String,
        likes: Number,
        created_At: String
      }
    ],
    timeline: {
      time: String,
      action: String
    }
  },
);

const jamsBandSchema = new mongoose.Schema(
  {
    band_name: String,
    bio: String,
    profile_img: String,
    genre: Array,
    followers: Array,
    following: Array
    uploads: [
      {
        title: String,
        description: String,
        url: String,
        likes: Number,
        created_At: String
      }
    ],
    timeline: {
      time: String,
      action: String,
      collaborator: String
    },
    members: Array
  }
)

const jamsChatSchema = new mongoose.Schema(
  {
    combinedUserNames: {
      members: Array,
      content: [
          {
          timestamp: String,
          username: String,
          comment: String,
        }
      ]
    }
  }
);

const JamsAuth = new mongoose.model('JamsAuth', jamsAuthSchema);
const JamsUser = new mongoose.model('JamsUser', jamsUserSchema);
const JamsBand = new mongoose.model('JamsBand', jamsBandSchema);
const JamsChat = new mongoose.model('JamsChat', jamsChatSchema);



/* Methods/Helper Functions */

// GET data -----

const findAuth = () => {
  return JamsAuth.find({});
 };

 const findUser = () => {
  return JamsUser.find({});
 };

 const findBand = () => {
  return JamsBand.find({});
 };

 const findChat = () => {
  return JamsChat.find({});
 };


 // POST data -----

 const createAuth = (data) => {
  // console.log('data:', data);
  return JamsAuth.create(data);
};

const createUser = (data) => {
  // console.log('data:', data);
  return JamsUser.create(data);
};

const createBand = (data) => {
  // console.log('data:', data);
  return JamsBand.create(data);
};

const createChat = (data) => {
  // console.log('data:', data);
  return JamsChat.create(data);
};


// PUT data -----

const replaceAuth = (data) => {
  console.log('I am the database, I have received PUT request:', data)
  console.log('data.word:', data);
  var filter = {username: data.username};
  var update = {password: data.password};
  console.log('filter:', filter, 'update:', update);
  return JamsAuth.findOneAndUpdate(filter, update);
};

const replaceUser = (data) => {
  console.log('I am the database, I have received PUT request:', data)
  // console.log('data.word:', data);
  var filter = {user: data.user};
  var update = {definition: data.definition};
  console.log('filter:', filter, 'update:', update);
  return JamsUser.updateOne(filter, update);
};
const replaceBand = (data) => {
  console.log('I am the database, I have received PUT request:', data)
  // console.log('data.word:', data);
  var filter = {user: data.user};
  var update = {definition: data.definition};
  console.log('filter:', filter, 'update:', update);
  return JamsBand.updateOne(filter, update);
};

const replaceChat = (data) => {
  console.log('I am the database, I have received PUT request:', data)
  // console.log('data.word:', data);
  var filter = {user: data.user};
  var update = {definition: data.definition};
  console.log('filter:', filter, 'update:', update);
  return JamsChat.updateOne(filter, update);
};

// DELETE data

const removeAuth = (data) => {
  console.log('I am the database, I will remove the data:')
  return JamsAuth.deleteOne(data);
};

const removeUser = (data) => {
  console.log('I am the database, I will remove the data:')
  return JamsUser.deleteOne(data);
};

const removeBand = (data) => {
  console.log('I am the database, I will remove the data:')
  return JamsBand.deleteOne(data);
};

const removeChat = (data) => {
  console.log('I am the database, I will remove the data:')
  return JamsChat.deleteOne(data);
};


 module.exports = {findAuth, createAuth, replaceAuth, removeAuth, findUser, createUser, replaceUser, removeUser, findBand, createBand, replaceBand, removeBand, findChat, createChat, replaceChat, removeChat};