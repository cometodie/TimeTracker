export const getMonthArray = (year, month, store) => {
  const countDaysCurrentMonth = new Date(year, month, 0).getDate();
  const daysMonth = [];
  for (let i = 1; i <= countDaysCurrentMonth; i++) {
    let logDay = store.find(el => {
      let elDate = new Date(el.date);
      return elDate.getDate() === i && elDate.getMonth() + 1 === month && elDate.getFullYear() === year;
    });
    daysMonth.push({
      day: i,
      time: logDay ? logDay.time : null,
      activeMount: true
    });
    logDay = null;
  }

  return addNextDays(year, month, addPrevDays(year, month, daysMonth));
};

const addPrevDays = (year, month, array) => {
  const dayOfWeekPrevMonth = new Date(year, month - 2).getDay();
  const dayOfWeekCurrrentMonth = new Date(year, month - 1).getDay();
  const countDaysPrevMonth = new Date(year, month - 1, 0).getDate();

  if (dayOfWeekCurrrentMonth != 1) {
    if (!dayOfWeekCurrrentMonth) {
      for (let i = 7; i > 1; i--) {
        array.unshift({
          day: countDaysPrevMonth - 7 + i,
          time: null,
          activeMount: false
        });
      }
    } else {
      for (let i = dayOfWeekCurrrentMonth; i > 1; i--) {
        array.unshift({
          day: countDaysPrevMonth - dayOfWeekCurrrentMonth + i,
          time: null,
          activeMount: false
        });
      }
    }
  }
  return array;
};

const addNextDays = (year, month, array) => {
  const dayOfWeekNextMonth = new Date(year, month).getDay();

  if (dayOfWeekNextMonth != 1) {
    if (!dayOfWeekNextMonth) {
      array.push({
        day: 1,
        time: null,
        activeMount: false
      });
    } else {
      for (let i = 1; i + dayOfWeekNextMonth <= 8; i++) {
        array.push({
          day: i,
          time: null,
          activeMount: false
        });
      }
    }
  }
  return array;
};
