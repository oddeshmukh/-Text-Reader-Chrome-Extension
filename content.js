let utterance;

chrome.runtime.onMessage.addListener((message) => {
  const selectedText = window.getSelection().toString();

  switch (message.action) {
    case "read":
      if (selectedText) {
        if (speechSynthesis.speaking) speechSynthesis.cancel();
        utterance = new SpeechSynthesisUtterance(selectedText);
        speechSynthesis.speak(utterance);
      } else {
        alert("Please select some text before clicking Read.");
      }
      break;

    case "pause":
      if (speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.pause();
      }
      break;

    case "resume":
      if (speechSynthesis.paused) {
        speechSynthesis.resume();
      }
      break;

    case "stop":
      speechSynthesis.cancel();
      break;
  }
});
