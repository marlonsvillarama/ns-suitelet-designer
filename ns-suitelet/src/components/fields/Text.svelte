<script>
    import { createSuiteletData } from "../../store/suitelet.svelte";

    let suitelet = createSuiteletData();
    
</script>

<div class="preview-fld">
    <label for="fld1">Text field</label>
    <span class="fld fld-text">Text</span>
</div>

<style>
    .fld-text {
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

</style>