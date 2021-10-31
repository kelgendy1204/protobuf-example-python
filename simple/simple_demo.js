const schema = require('./simple_pb.js');
const fs = require('fs');
const path = require('path');

function createSimple1andSaveToBinaryFile() {
    const s1 = new schema.SimpleMessage();

    s1.setId(123);
    s1.setIsSimple(true);
    s1.setName('this is a simple message');
    s1.addSampleList(1);
    s1.addSampleList(2);

    const s1Path = path.join(__dirname, './simple1.bin');
    fs.writeFileSync(s1Path, s1.serializeBinary());
}


function getSimple2FromBinaryFileAndLogData() {
    const s2Path = path.join(__dirname, './simple2.bin');
    const s2binary = fs.readFileSync(s2Path);
    const s2Object = schema.SimpleMessage.deserializeBinary(s2binary);
    console.log(s2Object);
}


createSimple1andSaveToBinaryFile();
getSimple2FromBinaryFileAndLogData();
