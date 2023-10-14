### Install
1. Install [Node.js](https://nodejs.org/en)
2. In the terminal, run `npm install`
3. In the terminal, run `npm i -D nodemon morgan`

### Start server
1. In the terminal, run `npm start`
2. If you see `Server is running on port 3000`, you have successfully started the server 
3. Open browser, go to `localhost:3000`
4. You should be able to see content from `views/dashboard.ejs` file
5. You can now edit any files, then refresh the page in thr browser to view changes
6. To stop the server from running (in order to use the terminal in VS Code again), press `Ctrl + C`

### Add/edit files
1. To add a new EJS file, run `touch views/file-name-you-want.ejs` from the terminal
2. All EJS files should be in `views` folder
3. All CSS, JS, and image files should be in their own folder in `public`
4. If you decide to create a new JS file in `public`, to link to it from an EJS file, add `<%- include('/js/your-js-file.js') %>` to the bottom of the EJS file (where you would add your `<script>` tag)