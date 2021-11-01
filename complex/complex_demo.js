const schema = require('./complex_pb.js');
const fs = require('fs');
const path = require('path');

function createEnumExample1andSaveToBinaryFile() {
    const dm1 = new schema.DummyMessage();
    dm1.setId(1);
    dm1.setName('Dummy 1');
    const dm2 = new schema.DummyMessage();
    dm2.setId(1);
    dm2.setName('Dummy 2');
    const dm3 = new schema.DummyMessage();
    dm3.setId(1);
    dm3.setName('Dummy 3');

    const cm = new schema.ComplexMessage();
    cm.setOneDummy(dm1);
    cm.addMultipleDummy(dm2);
    cm.addMultipleDummy(dm3);

    const cmPath = path.join(__dirname, './complex.bin');
    fs.writeFileSync(cmPath, cm.serializeBinary());
}

createEnumExample1andSaveToBinaryFile();
