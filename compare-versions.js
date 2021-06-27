#!/usr/bin/env node

const { Version } = require('./Version');

function main() {
    const [version1Str, version2Str] = parseArgs();
    const version1 = new Version(version1Str);
    const version2 = new Version(version2Str);

    const result = version1.compareTo(version2);
    console.log(result);
    return result;
}

function parseArgs() {
    if (process.argv.length !== 4) {
        console.error('Wrong number of arguments');
        process.exit(10);
    }
    return [process.argv[2], process.argv[3]];
}

if (require.main === module) {
    main();
}
