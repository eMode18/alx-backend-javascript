import ClassRoom from './0-classroom.js';

function initializeRooms() {
  let givenRooms = [19, 20, 34];
  let rooms = givenRooms.map(size=>new ClassRoom(size));
  return rooms;
}

export default initializeRooms;
