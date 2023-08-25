export const formatTime = (hours, mins) => {
  let timeDay = "AM";

  if (hours >= 12) {
    timeDay = "PM";
    if (hours > 12) {
      hours = hours - 12;
    }
  }
  if (mins == 0) {
    mins = "";
  } else {
    mins = ":" + mins;
  }

  return `${hours}${mins} ${timeDay}`;
};
