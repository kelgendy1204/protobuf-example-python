#!/usr/bin/env bash
protoc -I=simple/ --js_out=import_style=commonjs,binary:./simple simple/simple.proto
protoc -I=enums/ --js_out=import_style=commonjs,binary:./enums enums/enum_example.proto
protoc -I=complex/ --js_out=import_style=commonjs,binary:./complex complex/complex.proto
