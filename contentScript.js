// console.log('<----- Content script started running ----->');
console.log(document);

var port = chrome.runtime.connect({name:"contentScript"});
port.onMessage.addListener(function(message,sender){

  if(message.greeting === "hello"){

    console.log(message.greeting);
    console.log(message.data);

  }
});




// function injectScript(file_path, tag) {
//     var node = document.getElementsByTagName(tag)[0];
//     var script = document.createElement('script');
//     script.setAttribute('type', 'text/javascript');
//     script.setAttribute('src', file_path);
//     node.appendChild(script);
// }

// injectScript(chrome.extension.getURL('injectScript.js'), 'body');

// window.addEventListener("message", function (event) {
//     // only accept messages from the current tab
//     if (event.source != window)
//         return;

//     if (event.data.type && (event.data.type == "FROM_PAGE") && typeof chrome.app.isInstalled !== 'undefined') {
//         chrome.runtime.sendMessage({ essential: event.data.essential });
//     }
// }, false);