<script>
    // import { SuiteletData, UpdateObject } from "../store/suitelet";
    import { createSuiteletData } from "../store/suitelet.svelte";
    import { createUpdateData } from "../store/update.svelte";
    import { generateId } from "../store/string";
    import Button from "./Button.svelte";
    import FieldGroup from "./FieldGroup.svelte";

    let suitelet = createSuiteletData();
    let updateData = createUpdateData();
    let { onchildclick } = $props();

    // let buttonList = suitelet.buttons || [];
    // let fieldGroups = suitelet.groups || [];
    // let sublists = suitelet.sublists || [];

    const addButton = () => {
        suitelet.addButton({ id: generateId(), label: 'Button' });
        // let buttons = suitelet.buttons || [];
        // buttons.push({ id: generateId(), label: 'Button' });
        // SuiteletData.update(d => ({ ...$SuiteletData, buttons }));
        console.log(`EDITOR addButton END`, suitelet);
    };

    const addFieldGroup = () => {
        let label = prompt('Enter the field group label.');
        if (!label) { return; }

        // let groups = $SuiteletData['groups'] || [];
        suitelet.groups.push({ id: generateId(), label, col1: [], col2: [] });

        // SuiteletData.update(d => ({ ...$SuiteletData, groups }));
        console.log(`EDITOR addFieldGroup END`, `suitelet = ${suitelet.id}`);
    };

    const addSublist = () => {
        console.log(`addSublist END`, suitelet.id);
    };

    const updateButton = (d) => {
        updateData.key = `button-${d.id}`;
        console.log(`EDITOR update key = ${updateData.key}`);
    };

    const updateGroup = (d) => {
        updateData.key = `group-${d.id}`;
        console.log(`EDITOR update key = "${updateData.key}"`);
    };
</script>

<div id="preview">
    <div id="previewHeader">
        <input type="text" bind:value={suitelet.title} placeholder="Type the form name here" maxlength="80">
        <div>
            <button type="button" onmouseup={addButton}>Add button</button>
            <button type="button" onmouseup={addFieldGroup}>Add field group</button>
            <!-- <button type="button" on:mouseup={addField}>Add field</button> -->
            <button type="button" onmouseup={addSublist}>Add sublist</button>
        </div>
    </div>

    <div id="previewButtons">
        {#each (suitelet.buttons || []) as button}
            <Button data={button} onchildclick={() => {updateButton(button)}} />
        {/each}
    </div>
    <div id="previewFields">
        {#each (suitelet.groups || []) as group}
            <FieldGroup data={group} onchildclick={() => {updateGroup(group)}} />
        {/each}
        <!-- <div class="preview-grp">
            <div class="preview-grp-header">
                <h3>Ungrouped</h3>
                <button type="button">Edit</button>
            </div>
            <div class="preview-grp-contents">
                <div class="col">
                    <div class="preview-fld">
                        <label for="fld1">Text field</label>
                        <span class="fld fld-text">Text</span>
                    </div>
                    <div class="preview-fld">
                        <label for="fld1">Select field</label>
                        <span class="fld fld-select">Select</span>
                    </div>
                    <div class="preview-fld">
                        <label for="fld1">Integer field</label>
                        <span class="fld fld-select">0</span>
                    </div>
                </div>
                <div class="col">
                    <div class="preview-fld">
                        <label for="fld1">Textarea</label>
                        <span class="fld fld-textarea"></span>
                    </div>
                    <div class="preview-fld">
                        <label for="fld1">Integer field</label>
                        <span class="fld fld-select">0</span>
                    </div>
                </div>

            </div>

        </div> -->

        <!-- <div class="preview-grp">
            <div class="preview-grp-header">
                <h3>Ungrouped</h3>
                <button type="button">Edit</button>
            </div>
            <div class="preview-grp-contents">
                <div class="col">
                    <div class="preview-fld">
                        <label for="fld1">Text field</label>
                        <span class="fld fld-text">Text</span>
                    </div>
                    <div class="preview-fld">
                        <label for="fld1">Select field</label>
                        <span class="fld fld-select">Select</span>
                    </div>
                    <div class="preview-fld">
                        <label for="fld1">Integer field</label>
                        <span class="fld fld-select">0</span>
                    </div>
                </div>
                <div class="col">
                    <div class="preview-fld">
                        <label for="fld1">Textarea</label>
                        <span class="fld fld-textarea"></span>
                    </div>
                    <div class="preview-fld">
                        <label for="fld1">Integer field</label>
                        <span class="fld fld-select">0</span>
                    </div>
                </div>

            </div>

        </div> -->

    </div>
    <div id="previewSublists">
        {#each (suitelet.sublists || []) as sublist}
            sublist
        {/each}
    </div>
</div>

<style>
    #preview {
        flex-grow: 1;
        background-color: white;
        overflow-y: auto;
        /* margin: 2rem 2rem 3rem; */
        padding: 2rem 2rem 3rem;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        font-family: var(--font);
        color: #666;
    }

    #previewHeader {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    #previewHeader input[type=text] {
        padding: 0.25rem 0.75rem;
        border: 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        font-size: var(--fs-xl);
        width: 40%;
        color: #666;
    }

    #previewHeader button {
        padding: 0.5rem 1rem;
        margin-left: 0.5rem;
        cursor: pointer;
        border: 0;
        border-radius: 0.25rem;
        background-color: rgba(0, 0, 0, 0.05);
        font-size: var(--fs-sm);
        font-weight: 600;
        color: #666;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }

    #previewHeader button:hover {
        background-color: var(--color-hover);
        transform: translateY(-1px);
    }

    #previewButtons {
        display: flex;
        flex-direction: row;
        gap: 0.75rem;
        align-items: center;
    }

    #previewFields {
        display: flex;
        flex-direction: column;
        gap: 3rem;
    }
</style>