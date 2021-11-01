const schema = require('./enum_example_pb.js');

console.log(schema.DayOfTheWeek);

const enumMessage = new schema.EnumMessage();
enumMessage.setId(1);
enumMessage.setDayOfTheWeek(schema.DayOfTheWeek.MONDAY);

console.log(enumMessage.toObject());
