let updateKey = $state('');
let updateId = $state('');
let updateType = $state('');

export const createUpdateData = () => {
    return {
        get id() { return updateId },
        get key() { return updateKey },
        get type() { return updateType },

        set key(value) {
            updateKey = value;
            let parts = updateKey.split('-');
            if (parts.length < 2) {
                updateKey = '';
                return
            }

            updateType = parts[0];
            updateId = parts[1];
        }
    }
}