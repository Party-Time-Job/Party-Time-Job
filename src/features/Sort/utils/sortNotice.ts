import { Notice } from '@/entities/Post/types.ts';

export const sortByDeadline = (list: Notice[]) => {
  const newList = [...list].sort((a, b) => {
    const startA = new Date(a.item.startsAt).getTime();
    const startB = new Date(b.item.startsAt).getTime();
    return startA - startB;
  });
  return newList;
};

export const sortByHourlyPay = (list: Notice[]) => {
  const newList = [...list].sort((a, b) => {
    return b.item.hourlyPay - a.item.hourlyPay;
  });
  return newList;
};

export const sortByWorkHour = (list: Notice[]) => {
  const newList = [...list].sort((a, b) => {
    return a.item.workhour - b.item.workhour;
  });
  return newList;
};

export const sortByWord = (list: Notice[]) => {
  const newList = [...list].sort((a, b) => {
    return a.item.shop.item.name.localeCompare(b.item.shop.item.name);
  });
  return newList;
};
