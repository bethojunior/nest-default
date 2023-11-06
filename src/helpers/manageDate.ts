export default function manageDate(birthday: string) {
  const birthdayParts = birthday.split('/');

  if (birthdayParts.length === 3) {
    const day = parseInt(birthdayParts[0]);
    const month = parseInt(birthdayParts[1]) - 1;
    const year = 2000 + parseInt(birthdayParts[2]);
    if (!isNaN(day) && !isNaN(month) && !isNaN(year)) {
      const formattedBirthday = new Date(year, month, day);

      if (!isNaN(formattedBirthday.getTime())) {
        return formattedBirthday;
      }
    }
  }

  return null;
}
