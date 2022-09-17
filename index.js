const express = require("express"); // express모듈을 가져온다.
const app = express(); // 위의 function을 이용해 앱을만들고
const port = 3000; //포트는 번호

const mongoose = require("mongoose"); // mongoose모듈을 가져온다.
mongoose
  .connect(
    "mongodb+srv://chaewook-lee:dnr957755@boilerplate.e2mauon.mongodb.net/?retryWrites=true&w=majority",
    {
      // 이거 작성해줘야 err안 뜬다고 하는데 좀더 알아봐야할 것 같다.
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB Connected...")) //연결이 성공적이면 "MongoDB Connected..."보여준다.
  .catch((err) => console.log(err)); //err가 나면 콘솔에 err를 보여준다.

//root디렉토리에 hello world를 출력되게 해준다.
app.get("/", (req, res) => {
  res.send("Hello World!");
});
//이 앱이 포트 3000번에서 실행되는것이다.
//이 app이 3000번에 listen되면 콘솔에 `Example app listening on port ${port}`)띄운다.
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
