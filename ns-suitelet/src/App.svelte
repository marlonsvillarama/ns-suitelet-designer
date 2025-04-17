<script>
    import Header from "./components/Header.svelte";
    import Sidebar from "./components/Sidebar.svelte";
    import Editor from "./components/Editor.svelte";
    import { createUpdateData } from "./store/update.svelte";

    console.log('loading app...')
    const updateData = createUpdateData();

    const showSidebar = (show) => {
        if (show === true) {}
    };

    const onchildclick = () => {
        console.log(`APP onchildclick`, updateData.key);
    };
</script>

<Header />
<main>
    <Sidebar />
    <Editor {onchildclick} />
</main>

<style>
    main {
        background-color: rgba(127, 127, 127, 0.05);
        flex-grow: 1;
        display: flex;
        flex-direction: row;
        /* border: 3px solid red; */
    }
</style>