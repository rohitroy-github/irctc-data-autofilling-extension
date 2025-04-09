# IRCTC AutoFill

**IRCTC AutoFill** is a lightweight Chrome Extension designed to automatically fill passenger details on the IRCTC booking website. It stores frequently used data and fills it with a single click — saving time during ticket booking.

**This extension runs locally in your browser!**

---

## Features

- **Save Passenger Info**: Save passenger details (Name, Age, Mobile, Gender, Berth, Food) to browser storage.
- **One-Click Autofill**: Instantly fill the IRCTC booking form using saved data.
- **Clear Data Support**: Clear stored data easily with the "Clear Data" button.
- **Auto Checkbox Selection**: Automatically checks the "Auto Upgradation" checkbox on the form.
- **Simple UI**: Minimal and responsive popup interface for inputting and managing details.

---

## Snapshots

| ![Popup UI](https://github.com/user-attachments/assets/sample-autofill-popup-1) | ![Form Auto-Filled](https://github.com/user-attachments/assets/sample-autofill-popup-2) |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |

---

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Browser API**: Chrome Extension APIs (storage, scripting)
- **Storage**: `chrome.storage.sync` for persistent data across devices
- **Event Binding**: JavaScript DOM manipulation

---

## Getting Started

### Prerequisites

- **Google Chrome Browser**
- **Basic knowledge of Extensions**

---

## Installation

### 1. Clone or Download the Repo
```sh
https://github.com/your-username/irctc-autofill.git
```

### 2. Load the Extension in Chrome
- Go to `chrome://extensions`
- Enable **Developer Mode** (top-right)
- Click **Load unpacked**
- Select the folder containing this extension’s files

---

## Usage
- Click the extension icon in your Chrome toolbar
- Enter passenger details in the popup
- Click **Save Data**
- Go to IRCTC booking page
- Click **Fill Data** in the popup
- The form will auto-populate with your stored data

---

## File Structure
```
IRCTC-AutoFill/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
└── styles (inline in popup.html)
```

---

If you find this project helpful, consider giving it a ⭐ on GitHub!

