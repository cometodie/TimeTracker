import { db } from '../../config/firebase';

export const doCreateTime = (id, date, time) => {
  db.ref(`/TimeTracker/${id}`).push({ date: date, time: time });
};

export const getTimeDate = id => {
  let timeRef = db
    .ref(`/TimeTracker/${id}`)
    .orderByKey()
    .limitToLast(100);
  let tempStore = [];
  timeRef.on('child_added', snapshot => {
    tempStore.push({
      date: snapshot.val().date,
      time: snapshot.val().time,
      id: snapshot.key
    });
  });
  return tempStore;
};

export const updateTime = (userid, entityid, time) => {
  let newPostKey = db.ref(`/TimeTracker/${userid}/${entityid}`).update({ time: time });
};

export const onceGetTime = id => db.ref(`/TimeTracker/${id}`).once('value');
