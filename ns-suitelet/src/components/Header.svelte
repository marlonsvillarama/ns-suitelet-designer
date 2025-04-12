<script>
    import logo from '../assets/logo.svg'
    // import { SuiteletData } from '../store/suitelet';
    import { createSuiteletData } from '../store/suitelet';

    let suitelet = createSuiteletData();

    const deleteSuitelet = () => {
        if (!confirm('Are you sure you want to delete this Suitelet?')) { return; }
        console.log('deleting...')
    };

    const previewSuitelet = () => {
        console.log('previewing...')
    };

    const updateId = (e) => {
        suitelet.id = e.target.innerText;
        // SuiteletData.update(d => ({ ...d, ...{ id: e.target.innerText} }));
        console.log(`updated suitelet`, suitelet);
    };

    const updateName = (e) => {
        suitelet.name = e.target.value;
        // SuiteletData.update(d => ({ ...d, ...{ name: e.target.value} }));
        console.log(`updated suitelet`, suitelet);
    }
</script>

<header>
    <div id="headerMain">
        <div id="headerTitle">
            <img src={logo} alt="Logo">
            <h2>Suitelet Designer</h2>
        </div>
        <div id="headerActions">
            <button type="button" class="btn-preview" on:mouseup={previewSuitelet}>Preview</button>
            <button type="button" class="btn-delete" on:mouseup={deleteSuitelet}>Delete</button>
        </div>
    </div>
    <div id="headerSub">
        <div id="scriptName">
            <input type="text" name="txtName" id="txtName" on:keyup={updateName}
                placeholder="Enter a name for the Suitelet" maxlength="30">
        </div>
        <div id="scriptId">
            <span>customscript_f5_sl_</span>
            <span id="txtId" role="textbox" tabindex="1" contenteditable="true" on:keyup={updateId}></span>
            <!-- <input type="text" name="txtId" id="txtId" maxlength="30"> -->
        </div>
    </div>
</header>

<style>
    header {
        /* padding: 0.5rem 1.5rem; */
        height: 5.5rem;
        /* border-bottom: 1px solid var(--color-border);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center; */
        /* background-color: #FFFFC5; */
        background-color: #FFC067;
        z-index: 999;
        /* position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 999; */
    }

    header > div {
        padding: 0.5rem 1.5rem;
        /* border-bottom: 1px solid var(--color-border); */
        border-bottom: 1px solid #FFC067;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    header button {
        padding: 0.5rem 1.5rem;
        margin-left: 0.5rem;
        cursor: pointer;
        background-color: white;
        /* border: 1px solid var(--color-border); */
        border: 0;
        border-radius: 0.375rem;
        /* transition: all 150ms ease-in-out; */
    }

    header button:hover {
        background-color: rgba(0, 0, 0, 0.1);
        transform: translateY(-1px);
    }

    .btn-preview {
        font-weight: 700;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    }

    /* header #btnDelete {
        border: 1px solid transparent;
    } */

    .btn-delete:hover {
        color: red;
    }

    header input[type=text] {
        border: 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 0.5rem 0.5rem 0.25rem;
        /* margin: 0.25rem 0; */
        width: 25rem;
        font-size: var(--fs-md);
        font-weight: 700;
    }

    /* header #btnPreview:hover {
        background-color: #ccc;
    }

    header #btnDeploy {
        color: var(--color-font-lite);
        background-color: white;
    }

    header #btnDeploy:hover {
        background-color: #dfdfdf;
    } */

    #headerTitle {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    #headerTitle h2 {
        margin-left: 0.75rem;
        font-size: var(--fs-lg);
        /* color: white; */
    }

    #headerSub {
        height: 3rem;
        background-color: white;
        gap: 1rem;
    }

    #headerSub > div {
        display: flex;
        flex-direction: row;
        /* gap: 1rem; */
        align-items: center;
        font-size: var(--fs-sm);
    }

    #txtId {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        padding: 0.5rem 0.5rem 0.25rem;
        /* margin: 0.25rem 0; */
        min-width: 5rem;
        font-size: var(--fs-md);
        font-weight: 700;
    }
</style>