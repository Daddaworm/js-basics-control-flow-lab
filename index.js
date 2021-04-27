function scuberGreetingForFeet(distance) {
  if (distance <= 400) {
    return'This one is on me!';
  }  else if (distance >= 2001 && distance < 2500) {
    return 'I will gladly take your thirty bucks.'
  }  else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  // Write your code here!
  return (city === 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      //if the tip is generous
      return 'Thank you so much.'
      break;
    case 'not as generous':
      //if the tip is no as generous
      return 'Thank you.'
      break;
    default:
      //if anything else
      return 'Bye.'
  }
}