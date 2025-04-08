// (function autofillPassengerDetails() {
//     try {
//       // Fill Name
//       const nameInput = document.querySelector('input[placeholder="Name"]');
//       if (nameInput) nameInput.value = "Rohit Roy";
  
//       // Fill Age
//       const ageInput = document.querySelector('input[placeholder="Age"]');
//       if (ageInput) ageInput.value = "23";
  
//       // Select Gender
//       const genderSelect = document.querySelector('select[formcontrolname="passengerGender"]');
//       if (genderSelect) genderSelect.value = "M"; // M / F / T
  
//       // Select Country
//       const countrySelect = document.querySelector('select[formcontrolname="passengerNationality"]');
//       if (countrySelect) countrySelect.value = "IN"; // India
  
//       // Select Berth Preference
//       const berthSelect = document.querySelector('select[formcontrolname="passengerBerthChoice"]');
//       if (berthSelect) berthSelect.value = "SL"; // LB / MB / UB / SL / SU
  
//       // Select Catering Option
//       const foodSelect = document.querySelector('select[formcontrolname="passengerFoodChoice"]');
//       if (foodSelect) foodSelect.value = "N"; // V / N / J / F / G / D
  
//       console.log("✅ Passenger details auto-filled!");
//     } catch (err) {
//       console.error("❌ Error auto-filling form:", err);
//     }
//   })();
  

chrome.storage.sync.get("passengerData", ({ passengerData }) => {
  // Define default values
  const defaults = {
    name: "Rohit Roy",
    age: "23",
    gender: "M",
    berth: "SL",
    food: "N",
    nationality: "IN"
  };

  // Merge stored data with defaults (stored values overwrite defaults if present)
  const data = {
    ...defaults,
    ...passengerData
  };

  try {
    const nameInput = document.querySelector('input[placeholder="Name"]');
    if (nameInput) nameInput.value = data.name || defaults.name;

    const ageInput = document.querySelector('input[placeholder="Age"]');
    if (ageInput) ageInput.value = data.age || defaults.age;

    const genderSelect = document.querySelector('select[formcontrolname="passengerGender"]');
    if (genderSelect) genderSelect.value = data.gender || defaults.gender;

    const countrySelect = document.querySelector('select[formcontrolname="passengerNationality"]');
    if (countrySelect) countrySelect.value = data.nationality || defaults.nationality;

    const berthSelect = document.querySelector('select[formcontrolname="passengerBerthChoice"]');
    if (berthSelect) berthSelect.value = data.berth || defaults.berth;

    const foodSelect = document.querySelector('select[formcontrolname="passengerFoodChoice"]');
    if (foodSelect) foodSelect.value = data.food || defaults.food;

    console.log("✅ Passenger details auto-filled");
  } catch (err) {
    console.error("❌ Error auto-filling form:", err);
  }
});
