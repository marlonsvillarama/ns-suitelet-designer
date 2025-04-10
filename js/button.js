const BUTTON_DATA = [];

export const buttons = BUTTON_DATA;

export const createButton = (options) => {
    let { id, label, submit } = options;
    label = label || 'Button';
    submit = !!submit;
    console.log('createButton', { id, label, submit });

    BUTTON_DATA.push({ id, label, submit });
    console.log('BUTTON_DATA', BUTTON_DATA);

    return `<div class="preview-btn">
        <span name="${id}" id="${id}" data-id="${id}">${label}</span>
    </div>`;
};



export const updateButton = (options) => {
    let { id, label, submit } = options;
    console.log('updateButton', options);

    let el = BUTTON_DATA.find(b => b.id === id);
    el = options;

    console.log('updated data', BUTTON_DATA);
};