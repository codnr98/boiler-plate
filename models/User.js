const mongoose = require("mongoose"); // mongoose를 가져온다.

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50,
  },
  email: {
    type: String,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    minlength: 5,
  },
  lastname: {
    type: String,
    maxlength: 50,
  },
  role: {
    // 권한설정 유저의 권한이 관리자면 1, default는 0으로 설정
    type: Number,
    default: 0,
  },
  Image: String, // 이런식으로 object를 사용 안하고 작성할 수 있다.
  token: {
    // token을 통해 유효성을 관리할 수 있다.
    type: String,
  },
  tokenExp: {
    //expiration 유효기간을 준다.
    type: Number,
  },
});

const User = mongoose.model("User", userSchema); //schema를 model로 감싸준다.

module.exports = { User }; //다른 파일에서도 쓸 수 있게 exports를 해준다.
