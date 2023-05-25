const convertBtn = document.getElementById("convert-btn")
const length = document.getElementById("length-el")
const meterFeetRatio = 3.281
const volume = document.getElementById("volume-el")
const literGallonRatio = 0.264
const mass = document.getElementById("mass-el")
const kilogramPoundRatio = 2.204

convertBtn.addEventListener("click", function() {
    //Meter / Feet
    const number = document.getElementById("number-id").value
    const conversionToFeet = number * meterFeetRatio
    const conversionToMeters = number / meterFeetRatio
    length.innerHTML = `${number} meters = ${conversionToFeet.toFixed(3)} feet | ${number} feet = ${conversionToMeters.toFixed(3)} meters`
    
    //Liters / Gallons 
    const conversionToGallons = number * literGallonRatio
    const conversionToLiters = number / literGallonRatio
    volume.innerHTML = `${number} liters = ${conversionToGallons.toFixed(3)} gallons | ${number} gallons = ${conversionToLiters.toFixed(3)} liters`
    
    //Kilograms / Pounds
    const conversionToPounds = number * kilogramPoundRatio
    const conversionToKilograms = number / kilogramPoundRatio
    mass.innerHTML = `${number} kilograms = ${conversionToPounds.toFixed(3)} pounds | ${number} pounds = ${conversionToKilograms.toFixed(3)} kilograms`
})
