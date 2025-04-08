function setValueAndDispatch(selector, value) {
  const el = document.querySelector(selector);
  if (el) {
    el.value = value;
    el.dispatchEvent(new Event("input", { bubbles: true }));
    el.dispatchEvent(new Event("change", { bubbles: true }));
  }
}

function fillAngularAutoComplete(selector, value) {
  const input = document.querySelector(selector);
  if (!input) return console.warn("❗ Autocomplete input not found");

  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value"
  ).set;
  nativeInputValueSetter.call(input, value);

  // Dispatch input & keyboard events to trigger Angular's form control logic
  input.dispatchEvent(new Event("input", { bubbles: true }));
  input.dispatchEvent(
    new KeyboardEvent("keydown", { bubbles: true, key: "a" })
  );
  input.dispatchEvent(new Event("blur")); // Optional: trigger validation
}

chrome.storage.sync.get("passengerData", ({ passengerData }) => {
  const defaults = {
    name: "Rohit Roy",
    age: "23",
    gender: "M",
    berth: "SL",
    food: "N",
    mobile: "7003275110",
  };

  // ✅ Merge stored values with defaults
  const data = {
    ...defaults,
    ...passengerData,
  };

  console.log("🚀 Auto-filling with data:", data); // Checking purpose

  fillAngularAutoComplete(
    'input[placeholder="Name"][maxlength="16"]',
    data.name
  );
  setValueAndDispatch('input[formcontrolname="passengerAge"]', data.age);
  setValueAndDispatch('select[formcontrolname="passengerGender"]', data.gender);
  setValueAndDispatch(
    'select[formcontrolname="passengerBerthChoice"]',
    data.berth
  );
  setValueAndDispatch(
    'select[formcontrolname="passengerFoodChoice"]',
    data.food
  );
  setValueAndDispatch('input[formcontrolname="mobileNumber"]', data.mobile);

  console.log("✅ Data filled successfully!"); // Checking purpose
});
