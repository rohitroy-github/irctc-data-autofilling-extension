// document.getElementById("fill").addEventListener("click", async () => {
//     let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//     chrome.scripting.executeScript({
//       target: { tabId: tab.id },
//       files: ["content.js"]
//     });
//   });
  

document.getElementById("save").addEventListener("click", () => {
  const data = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    gender: document.getElementById("gender").value,
    berth: document.getElementById("berth").value,
    food: document.getElementById("food").value
  };

  chrome.storage.sync.set({ passengerData: data }, () => {
    alert("✅ Data saved!");
  });
});

document.getElementById("fill").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ["content.js"]
  });
});
