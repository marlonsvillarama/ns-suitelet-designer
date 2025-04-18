<script>
    import { createSuiteletData } from "../store/suitelet.svelte";
    import { generateId } from "../store/string";

    const DEFAULT_VALUES = {
        'text': 'Text',
        'integer': '0',
        'float': '0.0'
    };

    // let suitelet = createSuiteletData();
    let { data, onchildclick } = $props();
    let id = data?.id || generateId();
    let label = data?.label || 'Text Field';
    let type = data?.type || 'text';
    let value = $derived(DEFAULT_VALUES[type]);
    let fieldClasses = $derived([ 'fld' ]);
    let css = $derived(fieldClasses.join(' '));
    // export let id = 'field';
    // export let label = 'Field';
    // export let data = {};

    // $: fieldId = data.id || id;
    // $: fieldLabel = data.label || label;
    // $: fieldClasses = data.submit === true ? 'btn-submit' : 'btn-regular';
    // let fieldClasses = $derived(type);
</script>

{#snippet textField({ css, id, label, value })}
    <div class="preview-fld" {id}>
        <span class="fld-label">{label}</span>
        <span class={css}>{value}</span>
    </div>
{/snippet}

{#snippet checkField({ id, label })}
    <label class="cb-container" {id}>{label}
        <input type="checkbox" checked disabled>
        <span class="checkmark"></span>
    </label>
{/snippet}

{#if type === 'check'}
    {@render checkField({ id, label })}
{:else}
    {@render textField({ id, css, label, value })}
{/if}
<!-- <div class="preview-fld" {id}>
    <span class="fld-label">{label}</span>
    <span class="fld fld-text">Text</span>
</div> -->

<style>
    .cb-container {
        display: block;
        position: relative;
        padding-left: 2rem;
        /* margin-bottom: 0rem; */
        cursor: pointer;
        font-size: var(--fs-xs);
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }
    .cb-container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }
    .cb-container .checkmark {
        position: absolute;
        top: -0.125rem;
        left: 0;
        height: 1.25rem;
        width: 1.25rem;
        background-color: #eee;
    }
    .cb-container:hover input ~ .checkmark {
        background-color: #ccc;
    }
    .cb-container input:checked ~ .checkmark {
        background-color: #2196F3;
    }
    .checkmark::after {
        content: "";
        position: absolute;
        display: none;
    }
    .cb-container input:checked ~ .checkmark::after {
        display: block;
    }
    .cb-container .checkmark::after {
        left: 0.45rem;
        top: 0.2rem;
        width: 0.375rem;
        height: 0.725rem;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    .fld {
        color: var(--color-field-font);
        border-radius: 0;
        font-size: var(--fs-sm);
    }

    .fld-text {
        width: 20rem;
        border: 1px solid var(--color-field-border);
        padding: 0.375rem 0.75rem;
    }

    .fld-select {
        width: 20rem;
        border: 1px solid var(--color-field-border);
        padding: 0.375rem 0.75rem;
    }

    .fld-textarea {
        width: 20rem;
        height: 5rem;
        border: 1px solid var(--color-field-border);
        padding: 0.375rem 0.75rem;
    }

    .preview-fld {
        display: flex;
        flex-direction: column;
        /* align-items: baseline;
        position: relative; */
        border: 1px solid transparent;
        gap: 0.25rem;
        padding: 0.25rem;
    }

    .preview-fld:hover {
        /* border-radius: 0.5rem; */
        cursor: pointer;
        border: 1px solid var(--color-hover);
        border-radius: 0.25rem;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        transform: translateY(-1px);
    }

    /* .preview-fld > .fldset {
        border: 1px solid transparent;
        display: flex;
        flex-direction: column;
        gap: 0.25rem;
        padding: 0.25rem;
    } */

    /* .fldset > label {
        font-size: var(--fs-xs);
        text-transform: uppercase;
    } */

    .preview-fld > .fld-label {
        font-size: var(--fs-xs);
        text-transform: uppercase;
    }

    /* .preview-fld:hover > .fldset {
        border: 1px solid var(--color-hover);
        border-radius: 0.25rem;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        transform: translateY(-1px);
    } */
</style>