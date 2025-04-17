export const createSuiteletData = () => {
    let id = $state('')
    let name = $state('')
    let buttons = $state([])
    let groups = $state([])
    let sublists = $state([])

    return {
        get id() { return id },
        get name() { return name },
        get buttons() { return buttons },
        get groups() { return groups },
        get sublists() { return sublists },

        set id(value) { id = value },
        set name(value) { name = value },

        addButton(button) { buttons.push(button) },
        addGroup(group) { groups.push(group) },
        addSublist(sublist) { sublists.push(sublist) },

        reset: () => {
            id = '';
            name = '';
            buttons = [];
            groups = [];
            sublists = [];
        },

        updateButton(button) {
            let index = buttons.find(b => b.id === id);
            if (index < 0) { return }

            buttons[index] = { ...buttons[index], ...button };
        },
        updateGroup(group) {
            let index = groups.find(g => g.id === id);
            if (index < 0) { return }

            groups[index] = { ...groups[index], ...group };
        },
        updateSublist(sublist) {
            let index = sublists.find(s => s.id === id);
            if (index < 0) { return }

            sublists[index] = { ...sublists[index], ...sublist };
        }
    };
};
export const createUpdateData = () => {
    let updateKey = $state('');
    let updateId = $state('');
    let updateType = $state('');

    return {
        get key() { return updateKey },

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