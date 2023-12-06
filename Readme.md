# backend setup

This is an overview of this backend folder

- [Model Link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj#note-title-editor)

# time line

npm init 
git new repo and intial commit
public > temp folder created
.gitkeep file use 
.gitignore file created
gitignore generator use
.env file created
created new folder -> src
in src created some files using git bash -> touch app.js index.js constants.js
in package file add -> "type": "module"
install nodemon as adev depedency for server reload
in package file add -> "start": "nodemon src/index.js"
add and push the changes to the git (git push)
in src folder create essential folders -> mkdir controllers db routes middlewares models utils 
install prettier package
created file -> .prettierrc [here we can configure prettier for whole team as common styling and formatting]
some configure settings for prettier "{
    "singleQuote":false,
    "barcketSpacing":true,
    "tabWidth":2,
    "trailingComma":"es5",
    "semi":true
}"
create new file .prettierignore -> this file is use to tell prettier which files and folder we don't want to use prettier configures 
"/.vscode
/node_modules
./dist

*.env
.env
.env*"
