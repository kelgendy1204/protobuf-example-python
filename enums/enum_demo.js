const schema = require('./enum_example_pb.js');
const fs = require('fs');
const path = require('path');

function createEnumExample1andSaveToBinaryFile() {
    const e1 = new schema.EnumMessage();
    e1.setId(1);
    e1.setDayOfTheWeek(schema.DayOfTheWeek.MONDAY);
    const e1Path = path.join(__dirname, './enum1.bin');
    fs.writeFileSync(e1Path, e1.serializeBinary());
}

function getEnumExample2FromBinaryFileAndLogData() {
    const e2Path = path.join(__dirname, './enum2.bin');
    const e2binary = fs.readFileSync(e2Path);
    const e2Object = schema.EnumMessage.deserializeBinary(e2binary).toObject();
    console.log(e2Object);
}

createEnumExample1andSaveToBinaryFile();
getEnumExample2FromBinaryFileAndLogData();
