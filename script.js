function createMessage() {
    let message = {};
    message.sender = prompt("What is your name?");
    message.recipient = prompt("Who will you send the message to?")
    message.request = prompt("What do you want your class to stop?");
  
    myMessage.innerHTML = `Hello ${message.recipient}, I want to beg you to ${message.request}. These assignments take me a week to do because of this. -- ${message.sender}`
  
    myHeader.style.color = "skyblue";
    myHeader.style.backgroundColor = "black";
    myMessage.style.color = "skyblue";
    myMessage.style.backgroundColor = "black";
  }
  
  messageButton.onclick = createMessage;
