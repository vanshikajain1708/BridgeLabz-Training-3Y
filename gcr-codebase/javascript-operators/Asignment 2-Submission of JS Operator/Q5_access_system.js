// Q5. Boolean Logic Access System

function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  // Secure only when ALL conditions are true
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

  // Same check using ! and || (unsafe if ANY condition fails)
  const isUnsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

  console.log(
    `Door: ${isDoorLocked}, Window: ${isWindowClosed}, Alarm: ${isAlarmOn}, Owner: ${isOwnerInside}`
  );
  console.log(isSecure && !isUnsafe ? "Secure" : "Unsafe");
  console.log("-----");
}

// Test multiple outcomes
checkSecurity(true, true, true, true);   // Secure
checkSecurity(true, false, true, true);  // Unsafe (window open)
checkSecurity(true, true, false, true);  // Unsafe (alarm off)
checkSecurity(true, true, true, false);  // Unsafe (owner not inside)