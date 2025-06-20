# 🔊 Text Reader Chrome Extension

This is a Chrome Extension that allows users to select text on any webpage and have it read aloud using the browser's built-in Speech Synthesis API. It also supports pause, resume, and stop functionality.

---

## 🚀 Features

- 🔊 Read selected text aloud
- ⏸ Pause speech
- ▶ Resume paused speech
- ⏹ Stop speech
- 💡 Works on any website (except `chrome://` pages)

---

## 🛠️ Installation

1. Download the [ZIP release](./text-reader-extension.zip) and extract it.
2. Open **Chrome** and go to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **Load unpacked** and select the extracted folder.

---

## 🧪 How to Use

1. Visit any website (e.g., `https://example.com`).
2. Select the text you want to read aloud.
3. Click the extension icon.
4. Use the buttons:
   - 🔊 **Read** – Start speaking the selected text
   - ⏸ **Pause** – Pause the speech
   - ▶ **Resume** – Continue reading
   - ⏹ **Stop** – Cancel the current speech

---

## 📂 Project Structure

text-reader-extension/
├── manifest.json # Extension configuration
├── popup.html # UI popup with controls
├── popup.js # Sends user commands to content script
├── content.js # Handles speech actions
└── icon.png # Extension icon
![image](https://github.com/user-attachments/assets/c12b0ca1-94ea-48bc-b8e0-4424aeb7c23a)
