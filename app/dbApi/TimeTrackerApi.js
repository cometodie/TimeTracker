import { db } from "../../config/firebase";

export const doCreateTime = (id, date, time) => {
  db.ref(`/TimeTracker/${id}`).push({ date: date, time: time });
};

export const onceGetTime = id => db.ref(`/TimeTracker/${id}`).once("value");
