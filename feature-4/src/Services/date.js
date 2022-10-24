export const getDate = (offset) => {
    // TODO: add ability to find date other than today
    let d = new Date();
    //d.setDate(d.getDate + offset); this is code that will uncommented later
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    // Currently return a string with date format
    // Possibly switch to an object with month, day, and year
    // though this will make comparing dates more difficult.
    return `${month}/${day}/${year}`;
  };
  