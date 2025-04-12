import { fields, createField, updateField } from "./field.js";
import { buttons, createButton, updateButton } from "./button.js";

const ELEMENTS = {
    Buttons: {
        ADD_BUTTON: 'btnAddButton',
        ADD_FIELD: 'btnAddField',
        ADD_FIELD_GROUP: 'btnAddFieldGroup',
        ADD_SUBLIST: 'btnAddSublist'
    },
    Preview: {
        Buttons: 'previewButtons',
        Fields: 'previewFields',
        Sublists: 'previewSublists'
    },
    Properties: {
        Button: 'buttonProperties',
        Field: 'fieldProperties',
        FieldGroup: 'fieldGroupProperties',
        Sublist: 'sublistProperties'
    },
    Sidebar: 'sidebar',
    SidebarButtons: {
        ButtonSave: 'btnSaveButton',
        ButtonDelete: 'btnDeleteButton',
        FieldSave: 'btnSaveField',
        FieldDelete: 'btnDeleteField'
    }
};

const PREVIEW = {
    Buttons: '',
    Fields: '',
    Sublists: ''
};

const PROPERTIES = {
    Button: '',
    Field: '',
    FieldGroup: '',
    Sublist: ''
};

let CURRENT_ID = '';

const _id = (value) => {
    return document.getElementById(value);
};

const _cls = (value) => {
    return document.getElementsByClassName(value);
};

const _q = (selector, parent) => {
    return (parent || document).querySelector(selector);
};

const _qAll = (selector, parent) => {
    return (parent || document).querySelectorAll(selector);
};

const _el = (content) => {
    const tmp = document.createElement('template');
    tmp.innerHTML = content;
    return tmp.content.firstChild;
};

const _show = (id, hide) => {
    let el = _id(id);
    if (!el) { return; }

    let doHide = !!hide;
    // console.log(`_show ${id}`, el)
    // console.log(`_show ${id}`, hide)

    if (doHide) {
        if (el.classList.contains('hidden') === false) { return; }
        el.classList.remove('hidden');
    }
    else {
        if (el.classList.contains('hidden') === true) { return; }
        el.classList.add('hidden');
    }
};

const attachButtonHandlers = () => {
    _id(ELEMENTS.Buttons.ADD_BUTTON).addEventListener('mouseup', e => {
        let id = generateId();
        let btn = _el(createButton({ id }));
        btn.addEventListener('mouseup', b => {
            console.log(`clicked ${b.target.id}`, b.target);
            showProperties({ id, type: 'button' });
        });
        PREVIEW.Buttons.append(btn);
    });

    _id(ELEMENTS.Buttons.ADD_FIELD).addEventListener('mouseup', e => {
        let id = generateId();
        let fld = _el(createField({ id }));
        fld.addEventListener('mouseup', b => {
            console.log(`clicked ${b.target.id}`, b.target);
            showProperties({ id, type: 'field' });
        });
        PREVIEW.Fields.append(fld);
    });

    _qAll('.sidebar-close').forEach(el => el.addEventListener('mouseup', e => {
        _show(ELEMENTS.Sidebar);
    }));
};

const attachSidebarHandlers = () => {
    // attachSidebarSaveButtonHandler({
    //     el: _id(ELEMENTS.SidebarButtons.ButtonSave),
    //     store: buttons
    // });
    // attachSidebarSaveButtonHandler({
    //     el: _id(ELEMENTS.SidebarButtons.FieldSave),
    //     store: fields
    // });
    _id(ELEMENTS.SidebarButtons.ButtonSave).addEventListener('mouseup', e => {
        console.log('BEFORE buttons', buttons);
        let updates = storeUpdatedValues({ el: e.target, store: buttons });
        _id(CURRENT_ID).textContent = updates.label;
        closeSidebar();
        console.log('AFTER buttons', buttons);
    });

    _id(ELEMENTS.SidebarButtons.FieldSave).addEventListener('mouseup', e => {
        let updates = storeUpdatedValues({ el: e.target, store: fields });
        _id(CURRENT_ID).textContent = updates.label;
        closeSidebar();
    });

    _id(ELEMENTS.SidebarButtons.ButtonDelete).addEventListener('mouseup', e => {});
};

const collectUpdateValues = (options) => {
    let { el } = options;
    let updates = {};

    let fields = _qAll(`[data-prop]`, el.closest('.sidebar-prop'));
    fields.forEach(f => {
        let fp = f.dataset.prop;
        switch (f.type) {
            case 'checkbox': { updates[fp] = f.checked; break; }
            case 'text': { updates[fp] = f.value; break; }
        }
    });

    return updates;
};

const storeUpdatedValues = (options) => {
    let { el, store } = options;

    let index = store.findIndex(b => b.id === CURRENT_ID);
    if (index < 0) { return; }

    let updates = collectUpdateValues({ el });
    for (const key of Object.keys(updates)) {
        store[index][key] = updates[key];
    }

    // _id(CURRENT_ID).textContent = updated.label;
    // closeSidebar();

    return updates;
};

const closeSidebar = () => {
    _show(ELEMENTS.Sidebar);
    CURRENT_ID = '';
};

const collectElements = () => {
    for (const [ key, value ] of Object.entries(ELEMENTS.Preview)) {
        PREVIEW[key] = _id(value);
    }
    console.log('PREVIEW', PREVIEW);

    for (const [ key, value ] of Object.entries(ELEMENTS.Properties)) {
        PROPERTIES[key] = _id(value);
    }
    console.log('PROPERTIES', PROPERTIES);
};

const generateId = (length = 10) => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
        counter++;
    }

    return result;
};

const populateProperties = (options) => {
    let { data, form } = options;
    let fields = _qAll(`#${form} [data-prop]`);
    console.log('populateProperties data', data);
    console.log('populateProperties fields', fields);

    // Store the current object ID
    CURRENT_ID = data.id;

    fields.forEach(f => {
        let fp = f.dataset.prop;
        console.log(`populateProperties f = ${f.type}`, fp);
        switch (f.type) {
            case 'checkbox': { f.checked = (data[fp] === true); break; }
            case 'text': { console.log('field is text'); f.value = data[fp] || ''; break; }
        }
    });
};

const showProperties = (options) => {
    let { id, type } = options;
    let prop = {};

    switch (type) {
        case 'button': {
            prop = { form: ELEMENTS.Properties.Button, data: buttons.find(d => d.id === id) };
            break;
        }
        case 'field': {
            prop = { form: ELEMENTS.Properties.Field, data: fields.find(d => d.id === id) };
            break;
        }
    }

    populateProperties(prop);
    showSidebar(prop);
};

const showSidebar = (options) => {
    let { data, form } = options;
    // console.log(`showSidebar data`, data);
    // console.log(`showSidebar form`, form);

    for (const [ key, value ] of Object.entries(ELEMENTS.Properties)) {
        // console.log(key, value);
        _show(value, value === form);
    }

    _show(ELEMENTS.Sidebar, true);
};

(async () => {
    document.addEventListener('DOMContentLoaded', e => {
        console.log('DOM loaded!');

        collectElements();
        attachButtonHandlers();
        attachSidebarHandlers();
        // createField({});
        // updateField({});
        // createButton({});
        // updateButton({});
    });
})();