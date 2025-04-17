<script>
    // import { SuiteletData } from "../store/suitelet";
    import { createSuiteletData } from "../store/suitelet.svelte";
    import { generateId } from "../store/string";

    let suitelet = createSuiteletData();
    let { data, onchildclick } = $props();
    let id = data?.id || generateId();
    let label = data?.label || 'Button';

    let buttons = suitelet.buttons || [];
    let button = buttons.find(b => b.id === id) || {};
    let buttonClasses = button.submit === true ? 'btn-submit' : 'btn-regular';
</script>

<div id={id} class="btn" onclick={onchildclick} role="button">
    <span class={buttonClasses}>{label}</span>
</div>

<style>
    .btn {
        border: 1px solid transparent;
        padding: 0.25rem;
        display: flex;
        flex-direction: column;
        align-items: baseline;
        position: relative;
    }

    .btn:hover {
        border: 1px solid var(--color-hover);
        border-radius: 0.25rem;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        transform: translateY(-1px);
        cursor: pointer;
    }

    .btn > span {
        border: 1px solid var(--color-border);
        border-radius: 0.25rem;
        padding: 0.5rem 1.25rem;
        font-size: var(--fs-xs);
        font-weight: 600;
        display: inline-block;
    }
</style>