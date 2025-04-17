<script>
    import Header from "./components/Header.svelte";
    import Sidebar from "./components/Sidebar.svelte";
    import Editor from "./components/Editor.svelte";

    console.log('loading app...')

    const showSidebar = (show) => {
        if (show === true) {}
    };

    
</script>

<Header />
<main>
    <Sidebar />
    <Editor />
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