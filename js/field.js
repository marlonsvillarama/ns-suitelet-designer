const FIELD_DATA = [];

export const fields = FIELD_DATA;

export const createField = (options) => {
    let { id, label, type, group, source } = options;
    console.log('Field.create', options);
};

export const updateField = (options) => {
    let { id, label, type, group, source } = options;
    console.log('Field.update', options);
};