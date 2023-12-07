# backend setup

This is an overview of this backend folder

- [Model Link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj#note-title-editor)

# important links

- [express](https://expressjs.com/)
- [mongoose](https://mongoosejs.com/docs/)
- [cookie-parser](https://expressjs.com/en/resources/middleware/cookie-parser.html)
- [mongoose-aggregate-paginate-v2](https://github.com/aravindnc/mongoose-aggregate-paginate-v2)
- [bcrypt](https://github.com/dcodeIO/bcrypt.js/blob/master/README.md)
- [jwt](https://jwt.io/introduction)
- [fs](https://nodejs.org/api/fs.html)
- [cloudinary](https://cloudinary.com/documentation)
- [multer](https://github.com/expressjs/multer)

# time line

# part 1

- npm init 
- git new repo and intial commit
- public > temp folder created
- .gitkeep file use 
- .gitignore file created
- [gitignore generator use](https://mrkandreev.name/snippets/gitignore-generator/#Node)
- .env file created
- created new folder -> src
- in src created some files using git bash -> touch app.js index.js constants.js
- in package file add -> "type": "module"
- install nodemon as a dev depedency for server reload
- in package file add -> "start": "nodemon src/index.js"
- add and push the changes to the git (git push)
- in src folder create essential folders -> mkdir controllers db routes middlewares models utils 
- install prettier package
- created file -> .prettierrc [here we can configure prettier for whole team as common styling and formatting]
- some configure settings for prettier 

```
{
    "singleQuote":false,
    "barcketSpacing":true,
    "tabWidth":2,
    "trailingComma":"es5",
    "semi":true
}
```

- create new file .prettierignore -> this file is use to tell prettier which files and folder we don't want to use prettier configures 

```
/.vscode
/node_modules
./dist
*.env
.env 
.env*
```

- git push changes

# part 2

- visited mongodb atlas and create new project (videoplatform)
- in env file add PORT=8000 MONGODB_URI = mongodb+srv://<username>:<password>@cluster0.umo0aow.mongodb.net
- in constants file add -> export const DB_NAME = "videotube"
- install packages -> npm i express mongoose dotenv
- in db folder create a index.js file and create a mongodb connect to database function and export 

```
import mongoose from "mongoose";
import { DB_NAME } from "../constants";
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`\n MONGODB CONNECTED || DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MONGODB connection error: ", error);
        process.exit(1);
    }
}
export default connectDB;
```

- in main server file index.js import connectDB and execute
- in package file use an experimental feature to load dotenv package before any other file or package use -> "start": "nodemon -r dotenv/config --experimental-json-modules src/index.js"
- in app.js import express and exports const app = express()
- install packages like cors and cookie-parser
- in app file import cors and cookie-parser package, configure the cors and add some options like allowed origin and crediential

```
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));
```

- also configure other middlewares like json, urlencoded, static 

```
app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser);
```

- use of cookie-parser is to configure or do crud operation on cookie storage of front end user browser from server
- in utils folder for code consistency and standard we create some utility functions and classes -> ApiError, ApiResponse, asyncHandler

```
// asyncHandler.js
const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
    }
}

export { asyncHandler };

// ApiError.js
class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };

// ApiResponse.js
class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}

export { ApiResponse };
```
- create user and video models, create their schema using database model diagram in the link 
- install some packages -> npm i mongoose-aggregate-paginate-v2 bcrypt jsonwebtoken
- use mongoose-aggregate-paginate-v2 plugin in videoSchema
- bcrypt and jwt used in functions in mongoose schema methods for later use 
- install cloudinary and multer package
- signup/signin in cloudinary and copy configure file containing cloudname, apikey, etc
- in env keep cloudinary secrets
- create a utils file "cloudinary.js" and add file upload function after configuration and then export
- create a multer.middleware.js file 
