"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tabulaCommand = void 0;
var child_process_1 = require("child_process");
var path = require("path");
var jarFilePath = "./tabula-1.0.5-jar-with-dependencies.jar";
var tabulaCommand = function (file, commandArgs) {
    return new Promise(function (resolve, reject) {
        var javaProcess = (0, child_process_1.spawn)("java", __spreadArray(__spreadArray([
            "-jar",
            path.join(__dirname, jarFilePath)
        ], commandArgs, true), [
            file,
        ], false));
        var output = "";
        var errorOutput = "";
        javaProcess.stdout.on("data", function (data) {
            output += data.toString();
        });
        javaProcess.stderr.on("data", function (data) {
            errorOutput += data.toString();
        });
        javaProcess.on("close", function (code) {
            if (code === 0) {
                resolve(output);
            }
            else {
                reject(new Error("Tabula command failed with code ".concat(code, ": ").concat(errorOutput)));
            }
        });
        javaProcess.on("error", function (err) {
            reject(new Error("Failed to start Tabula process: ".concat(err.message)));
        });
    });
};
exports.tabulaCommand = tabulaCommand;
