define(function (require, exports, module) {
    "use strict";
    var commandName         = "addComment";
    var Menus               = brackets.getModule("command/Menus"),
        CommandManager      = brackets.getModule("command/CommandManager"),
        DocumentManager     = brackets.getModule("document/DocumentManager"),
        EditorManager       = brackets.getModule("editor/EditorManager");
    /*
     * Implementation
     */
    function addComment() {

        var currentDoc = DocumentManager.getCurrentDocument();
        var editor = EditorManager.getCurrentFullEditor();
        var pos = editor.getCursorPos();
        
        var current_date = new Date().toDateString();
        var comment = "<!-- MGA on " + current_date + ": " + prompt("Comment Text","") + " -->";
        
        currentDoc.replaceRange(comment, pos);
    }
    /*
     * Command
     */
    CommandManager.register("Add Comment", commandName, addComment);
    /*
     * Custom menu
     */
    var menu = Menus.addMenu("First Web", "edgedocks.custom.menu");
    menu.addMenuItem(commandName);
});
