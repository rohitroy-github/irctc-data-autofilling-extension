(function autofillPassengerDetails() {
    try {
      // Fill Name
      const nameInput = document.querySelector('input[placeholder="Name"]');
      if (nameInput) nameInput.value = "Rohit Roy";
  
      // Fill Age
      const ageInput = document.querySelector('input[placeholder="Age"]');
      if (ageInput) ageInput.value = "23";
  
      // Select Gender
      const genderSelect = document.querySelector('select[formcontrolname="passengerGender"]');
      if (genderSelect) genderSelect.value = "M"; // M / F / T
  
      // Select Country
      const countrySelect = document.querySelector('select[formcontrolname="passengerNationality"]');
      if (countrySelect) countrySelect.value = "IN"; // India
  
      // Select Berth Preference
      const berthSelect = document.querySelector('select[formcontrolname="passengerBerthChoice"]');
      if (berthSelect) berthSelect.value = "SL"; // LB / MB / UB / SL / SU
  
      // Select Catering Option
      const foodSelect = document.querySelector('select[formcontrolname="passengerFoodChoice"]');
      if (foodSelect) foodSelect.value = "N"; // V / N / J / F / G / D
  
      console.log("✅ Passenger details auto-filled!");
    } catch (err) {
      console.error("❌ Error auto-filling form:", err);
    }
  })();
  