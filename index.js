function scuberGreetingForFeet(feet){
  if(feet <=400){
    return 'This one is on me!'
  } else if (1999 < feet && feet < 2500){
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  if (city === 'NYC'){
    return 'Ok, sounds good.'
  }else {
    return 'No go.'
  }
}
function switchOnCharmFromTip(tipString){
  if (tipString === "generous"){
    return "Thank you so much."
  }else if (tipString === "not as generous"){
    return "Thank you."
  }else if (tipString === "thanks for everything"){
    return "Bye."
  }
}