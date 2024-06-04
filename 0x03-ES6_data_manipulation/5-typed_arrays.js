function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  const view = new DataView(buffer);
  if (position >= 0 && position < length) {
    view.setInt8(position, value);
    return view;
  } else {
    throw new Error('Position outside range');
  }
}

export default createInt8TypedArray;

