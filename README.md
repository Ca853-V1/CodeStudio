# Online Code Editor -

## Objective:
This is a web-based **Online Code Editor** built using **React framework boilerplate**, designed to write and test **HTML, CSS, and JavaScript** code snippets.

## Features:
- **Three Code Containers** (HTML, CSS, and JavaScript) in the **Upper Pane**.
- **Live Preview** of the code output in the **Lower Pane**.
- **CodeMirror Integration** for an enhanced coding experience.
- **Contract/Expand Button** for ease of view for each editor.

## Project Structure:
```
ONLINE-CODE-EDITOR/
│-- src/
│   │-- Components/
│   │   ├── CSSEditor.js              # Handling CSS Input
│   │   ├── Editor.js                 # Wraping the Panes and Editors 
│   │   ├── HTMLEditor.js             # Handling HTML Input
│   │   ├── JSEditor.js               # Handling JavaScript Input
│   │   ├── LowerPane.js              # Displays the Output
│   │   ├── UpperPane.js              # Appbar
│   │-- App.js                  # Main React component
│   │-- index.js                # Main entry point
│-- package-lock.json     # npm package lock file
│-- package.json          # Project Dependencies
│-- README.md
```

## Installation & Usage:
### 1) Clone the Repository
```sh
git clone https://github.com/Ca853-V1/CodeStudio.git
cd online-code-editor
```
### 2) Install Dependencies
```sh
npm install
```
### 3) Run the Application
```sh
npm start
```
This will start the project on **localhost:3000**.

## Future Scope: 
- Multi-Language Support
- Cloud-based Storage and User Authentication
