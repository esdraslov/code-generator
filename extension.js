// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

const pythonCodesExample = [
	'expression = input("enter a math expression")\nprint(eval(expression))',
	'from flask import Flask\n\napp = Flask(__name__)\n\n@app.route("/")\ndef home():\n		return "hello world"\n\nif __name__ == "__main__":\n	app.run(debug=True)'
]
const consoleGames = [
	'let count = Math.round(Math.random() * 9) + Math.round(Math.random() * 9))+"";\nconsole.log(count)\nfunction response(result){\n	if(result == eval(count)){\n		console.log("you win!")',
	'any'
]

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "code-generator" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	let python = vscode.commands.registerCommand('code-generator.pythonCode', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage(`ok, the code is:\n ${pythonCodesExample[Math.round(Math.random())]}`);
	});
	let consoleJsGame = vscode.commands.registerCommand('code-generator.jsConsoleGame', function () {
		// The code you place here will be executed every time your command is executed

		// Display a message box to the user
		vscode.window.showInformationMessage(`ok, the code is:\n ${consoleGames[Math.round(Math.random())]}`);
	});

	context.subscriptions.push(python);
	context.subscriptions.push(consoleJsGame);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
