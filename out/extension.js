"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const antlr4 = require("antlr4");
const logicspecLexer = require("./logicspecLexer.js");
const logicspecParser = require("./logicspecParser.js");
function activate(context) {
    const collection = vscode.languages.createDiagnosticCollection("logicspec");
    if (vscode.window.activeTextEditor) {
        updateDiagnostics(vscode.window.activeTextEditor.document, collection);
    }
    context.subscriptions.push(vscode.window.onDidChangeActiveTextEditor((editor) => {
        if (editor) {
            updateDiagnostics(editor.document, collection);
        }
    }));
    context.subscriptions.push(vscode.workspace.onDidChangeTextDocument((event) => {
        if (vscode.window.activeTextEditor &&
            event.document === vscode.window.activeTextEditor.document) {
            updateDiagnostics(event.document, collection);
        }
    }));
}
exports.activate = activate;
function updateDiagnostics(document, collection) {
    if (document && document.languageId === "logicspec") {
        console.log("checking syntax for " + document.uri);
        let errors = [];
        class CustomErrorListener extends antlr4.error.ErrorListener {
            syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
                errors.push({
                    code: "",
                    message: msg,
                    range: new vscode.Range(line, column, line, column),
                    severity: vscode.DiagnosticSeverity.Error,
                    source: "",
                    relatedInformation: [],
                });
            }
        }
        const errorListener = new CustomErrorListener();
        const text = document.getText();
        const input = new antlr4.InputStream(text);
        const lexer = new logicspecLexer(input);
        lexer.removeErrorListeners();
        lexer.addErrorListener(errorListener);
        const tokens = new antlr4.CommonTokenStream(lexer);
        const parser = new logicspecParser(tokens);
        parser.buildParseTrees = true;
        parser.removeErrorListeners();
        parser.addErrorListener(errorListener);
        const tree = parser.file();
        collection.set(document.uri, errors);
    }
    else {
        collection.clear();
    }
}
//# sourceMappingURL=extension.js.map