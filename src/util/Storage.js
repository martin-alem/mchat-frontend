class Storage {

    /**
     * @param {string} key
     * @param {any} value
     */
    static SSet(key, value) {
        if (sessionStorage) {
            sessionStorage.setItem(key, value);
        }
    }

    static SGet(key) {

        if (sessionStorage) {
            const obj = JSON.parse(sessionStorage.getItem(key));
            return obj;
        }

        return null;
    }

    static SRemove(key) {
        if (sessionStorage) {
            sessionStorage.removeItem(key);
        }
    }

    static SUpdate(key, value) {
        if (sessionStorage) {
            const obj = JSON.parse(sessionStorage.getItem(key));
            obj[key] = value;
            const newObject = JSON.stringify(obj);
            sessionStorage.setItem(key, newObject);
        }
    }
}

export default Storage;
