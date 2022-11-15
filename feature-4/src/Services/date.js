export const getDate = (offset = 0) => {
    // offset = 0 for today, offset > 0 for future day, offset < 0 for past day
    let d = new Date();
    d.setDate(d.getUTCDate() + offset);
    const day = d.getUTCDate();
    const month = d.getUTCMonth() + 1;
    const year = d.getUTCFullYear();
    return `${month}/${day}/${year}`;
  };
  