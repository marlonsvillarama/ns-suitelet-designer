<script>
    import ButtonProperties from "./ButtonProperties.svelte";
    import FieldGroupProperties from "./FieldGroupProperties.svelte";
    import FieldProperties from "./FieldProperties.svelte";
    import SublistProperties from "./SublistProperties.svelte";
    import { createSuiteletData } from "../store/suitelet.svelte";
    import { createUpdateData } from "../store/update.svelte";

    const suitelet = createSuiteletData();
    const updateData = createUpdateData();

    $effect(() => {
        console.log(`SIDEBAR updateKey = "${updateData.key}"`)
        if (!updateData.key) { return; }
        
        console.log(`SIDEBAR opening properties form id = "${updateData.id}"; type = ${updateData.type}`)

        // TODO: Dynamically render properties form

    });
</script>

<div id="sidebar" class="hidden">
    <ButtonProperties />
    <!-- <div id="buttonProperties" class="sidebar-prop hidden">
        <div class="sidebar-title">
            <h3>Button Properties</h3>
            <svg class="w-6 h-6 text-gray-800 dark:text-white sidebar-close" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
            </svg>
        </div>
        <section>
            <div class="sidebar-row">
                <label for="">Label</label>
                <input type="text" data-prop="label">
            </div>
            <div class="sidebar-row">
                <label for="" class="script-id">custpage_</label>
                <input type="text" data-prop="scriptId">
            </div>
            <div class="sidebar-row">
                <span>&nbsp;</span>
                <label class="cb-container">Submit button
                    <input type="checkbox" data-prop="submit">
                    <span class="checkmark"></span>
                </label>
            </div>
        </section>
        <div class="sidebar-actions">
            <button type="button" id="btnSaveButton">Save</button>
            <button type="button" id="btnDeleteButton">Delete</button>
        </div>
    </div> -->

    <FieldGroupProperties />
    <!-- <div id="fieldGroupProperties" class="hidden">
        <div class="sidebar-title">
            <h3>Field Group Properties</h3>
            <svg class="w-6 h-6 text-gray-800 dark:text-white sidebar-close" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
            </svg>
        </div>
        <section>
            <div class="sidebar-row">
                <label for="">Label</label>
                <input type="text" name="" id="">
            </div>
            <div class="sidebar-row">
                <label for="" class="script-id">custpage_</label>
                <input type="text" name="" id="">
            </div>
        </section>
        <div class="sidebar-actions">
            <button type="button" id="btnSaveField">Save</button>
            <button type="button" id="btnDeleteField">Delete</button>
        </div>
    </div> -->

    <FieldProperties />
    <!-- <div id="fieldProperties" class="">
        <div class="sidebar-title">
            <h3>Field Properties</h3>
            <svg class="w-6 h-6 text-gray-800 dark:text-white sidebar-close" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
            </svg>
        </div>
        <section>
            <div class="sidebar-row">
                <label for="">Label</label>
                <input type="text" name="" id="">
            </div>
            <div class="sidebar-row">
                <label for="" class="script-id">custpage_</label>
                <input type="text" name="" id="">
            </div>
            <div class="sidebar-row">
                <label for="">Add to group</label>
                <select>
                    <option>&lt;No group&gt;</option>
                    <option>Group 1...</option>
                    <option>Group 2...</option>
                </select>
            </div>
            <div class="sidebar-row">
                <label for="">Field type</label>
                <select>
                    <option>Checkbox</option>
                    <option>Currency</option>
                    <option>Date</option>
                    <option>Date/time</option>
                    <option>Email</option>
                    <option>File</option>
                    <option>Float</option>
                    <option>Help</option>
                    <option>Inline HTML</option>
                    <option>Integer</option>
                    <option>Image</option>
                    <option>Label</option>
                    <option>Long Text</option>
                    <option>Multiple Select</option>
                    <option>Password</option>
                    <option>Percent</option>
                    <option>Phone</option>
                    <option>Select</option>
                    <option>Radio</option>
                    <option>RichText</option>
                    <option>Text</option>
                    <option>Text Area</option>
                    <option>Time of day</option>
                    <option>URL</option>
                </select>
            </div>
            <div class="sidebar-row">
                <label for="">Source type</label>
                <select>
                    <option>Custom list</option>
                    <option>Custom record</option>
                    <option>Saved search</option>
                </select>
            </div>
            <div class="sidebar-row">
                <label for="">Source value</label>
                <select>
                    <option>Saved search 1...</option>
                    <option>Custom record</option>
                    <option>Saved search</option>
                </select>
            </div>
            <div class="sidebar-row">
                <label class="cb-container">Inactive
                    <input type="checkbox" name="cbBtn1IsSubmit" id="cbBtn1IsSubmit">
                    <span class="checkmark"></span>
                </label>
            </div>
        </section>
        <div class="sidebar-actions">
            <button type="button">Save</button>
            <button type="button">Delete</button>
        </div>
    </div> -->

    <SublistProperties />
    <!-- <div id="sublistProperties" class="">
        <div class="sidebar-title">
            <h3>Sublist Properties</h3>
            <svg class="w-6 h-6 text-gray-800 dark:text-white sidebar-close" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
            </svg>
        </div>
        <section>
            <div class="sidebar-row">
                <label for="">Label</label>
                <input type="text" name="" id="">
            </div>
            <div class="sidebar-row">
                <label for="" class="script-id">custpage_</label>
                <input type="text" name="" id="">
            </div>
        </section>
    </div> -->
</div>

<style></style>