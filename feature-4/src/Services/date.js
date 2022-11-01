export const getDate = (offset = 0) => {
    // offset = 0 for today, offset > 0 for future day, offset < 0 for past day
    let d = new Date();
    d.setDate(d.getDate() + offset);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return `${month}/${day}/${year}`;
  };
  