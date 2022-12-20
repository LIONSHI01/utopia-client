import moment from 'moment';

export const timePeriod = (updatedAt) => {
  
  const nowTime = moment(new Date());
  const updatedTime = moment(Date.parse(updatedAt));

  const secondsDiff = nowTime.diff(updatedTime, 'seconds');
  const minutesDiff = nowTime.diff(updatedTime, 'minutes');
  const hoursDiff = nowTime.diff(updatedTime, 'hours');
  const daysDiff = nowTime.diff(updatedTime, 'days');
  const weeksDiff = nowTime.diff(updatedTime, 'weeks');
  const monthsDiff = nowTime.diff(updatedTime, 'months');
  const yearsDiff = nowTime.diff(updatedTime, 'years');

  const outputTime =
    (yearsDiff && `${yearsDiff} y`) ||
    (monthsDiff && `${monthsDiff} mo`) ||
    (weeksDiff && `${weeksDiff} w`) ||
    (daysDiff && `${daysDiff} d`) ||
    (hoursDiff && `${hoursDiff} h`) ||
    (minutesDiff && `${minutesDiff} m`) ||
    (secondsDiff && `${secondsDiff} s`);

  return outputTime;
};
