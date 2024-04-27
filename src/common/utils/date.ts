export function ConvertInSec(date: string) {
  const [hours = "0", minutes = "0", seconds = "0"] = date.split(":");
  const hourInSec = Number(hours) * 3600;
  const minutesInSec = Number(minutes) * 60;
  return hourInSec + minutesInSec + Number(seconds);
}
