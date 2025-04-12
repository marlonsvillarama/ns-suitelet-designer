<script>
    // import { SuiteletData, UpdateObject } from "../store/suitelet";
    import { createSuiteletData, createUpdateData } from "../store/suitelet";
    import { generateId } from "../store/string";

    // export let data = {};
    // export let id = data?.id || `grp-${generateId()}`;
    // export let label = data?.label || 'Ungrouped...';

    let suitelet = createSuiteletData();
    let { data, onmouseup } = $props();
    let id = data?.id || generateId();
    let label = data?.label || 'Field Group';

    // let groups = $SuiteletData.groups || [];
    let group = (suitelet.groups || []).find(g => g.id === id) || {};
    // $: group = groups.find(g => g.id === id) || {};
    // $: groupId = data.id || id;
    // $: groupLabel = data.label || label;
    // $: groupClasses = group.submit === true ? 'btn-submit' : 'btn-regular';

    const editGroup = () => {
        suitelet.updateGroup()
        // UpdateObject.set({ type: 'group', key: group?.id || id });
        console.log('FIELD_GROUP editGroup', suitelet);
    };
</script>

<section id={id}>
    <div class="header">
        <h3>{label}</h3>
        <div>
            <button type="button" on:mouseup={editGroup}>Add field</button>
            <button type="button" on:mouseup={editGroup}>Edit</button>
        </div>
    </div>
    <div class="contents">
        <div class="col">
        </div>
        <div class="col">
        </div>
    </div>
</section>

<style>
    section {
        border: 1px solid transparent;
        padding: 0 0.25rem;
    }

    /* .field-grp:hover {
        border: 1px solid var(--color-hover);
        border-radius: 0.25rem;
    } */

    .header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-menu-bg);
        margin-bottom: 1rem;
        padding: 0.25rem 1rem;
    }

    .header h3 {
        color: white;
        font-size: var(--fs-sm);
    }

    .header button {
        padding: 2px 1rem;
        color: var(--color-font);
        font-size: var(--fs-xs);
        border: 1px solid var(--color-border);
        border-radius: 0.25rem;
        cursor: pointer;
    }

    .header button:hover {
        transform: translateY(-1px);
    }

    .contents {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
        padding: 0 1rem 0;
    }
    .col {
        border: 0px solid red;
    }

    .col > *:not(:last-child) {
        margin-bottom: 1rem;
    }
</style>