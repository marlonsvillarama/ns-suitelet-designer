<script>
    import { createSuiteletData } from "../store/suitelet.svelte";
    import { generateId } from "../store/string";
    import Field from "./Field.svelte";

    let suitelet = createSuiteletData();
    let { data, onchildclick } = $props();
    let id = data?.id || generateId();
    let label = data?.label || 'Field Group';
    let group = $derived(suitelet.groups.find(g => g.id === id) || {});

    // let groups = $SuiteletData.groups || [];
    // $: group = groups.find(g => g.id === id) || {};
    // $: groupId = data.id || id;
    // $: groupLabel = data.label || label;
    // $: groupClasses = group.submit === true ? 'btn-submit' : 'btn-regular';

    // const calcHeight = (col) => {
    //     let height = col.reduce((sum, f) => {
    //         sum += f.type === ''
    //     }, 0);
    // };

    const addField = () => {
        group.col1.push({ id: generateId(), label: 'Field' });
        console.log(`suitelet groups`, suitelet.groups);

    };

    const editGroup = () => {
        suitelet.updateGroup();
        console.log('FIELD_GROUP editGroup', suitelet);
    };
</script>

<section id={id}>
    <div class="header">
        <h3>{label}</h3>
        <div>
            <button type="button" onmouseup={addField}>Add field</button>
            <button type="button" onmouseup={editGroup}>Edit</button>
            <button type="button" onmouseup={editGroup}>Delete</button>
        </div>
    </div>
    <div class="contents">
        <div class="col">
            {#each group.col1 as fld}
                <Field data={fld} {onchildclick} />
            {/each}
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