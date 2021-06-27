const PERIOD = '.';

class Version {
    #chunks;

    constructor(version) {
        // No validation, assuming that the input is correct.
        this.#chunks = version.split(PERIOD);
    }

    getChunks() {
        return this.#chunks;
    }

    compareTo(other) {
        const thisChunks = this.getChunks();
        const otherChunks = other.getChunks();
        const thisLen = thisChunks.length;
        const otherLen = otherChunks.length;
        const shorterLen = thisLen < otherLen ? thisLen : otherLen;

        for (let i = 0; i < shorterLen; i++) {
            const thisChunk = Number(thisChunks[i]);
            const otherChunk = Number(otherChunks[i]);
            if (thisChunk > otherChunk) {
                return 1;
            } else if (thisChunk < otherChunk) {
                return -1;
            }
        }

        if (thisLen === otherLen) {
            return 0;
        }

        // If got to this point, the more verbose version is higher.
        return thisLen > otherLen ? 1 : -1;
    }
}

module.exports = {
    Version,
};
