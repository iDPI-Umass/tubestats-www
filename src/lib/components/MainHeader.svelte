<script>
    import "@shoelace-style/shoelace/dist/components/button/button.js";
    import "@shoelace-style/shoelace/dist/components/icon/icon.js";
    import SampleSelector from "$lib/components/SampleSelector.svelte";
</script>

<header>
    <nav>
        <sl-button href="/">
            <img slot="prefix" src="/favicon.png" alt="">
            TubeStats
        </sl-button>

        <sl-button href="/about" >
            About
        </sl-button>

        <sl-button href="/data" >
            Data
        </sl-button>

        <sl-button href="/cite" >
            Cite
        </sl-button>

        <sl-button href="/team" >
            Team
        </sl-button>

        <sl-button href="/read" >
            Read more
        </sl-button>
    </nav>

</header>

<style>
    header {
        padding: 1rem;
        background: var(--tube-color-panel);
        border-bottom: var(--tube-border-panel);
        height: 4rem;
    }

    nav {
        height: 2rem;
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }

    nav > sl-button {
        margin: 0 var(--tube-width-spacer-half);
        height: 2rem;
    }

    nav > sl-button:first-of-type {
        margin-left: 0;
    }

    nav > sl-button::part(base) {
        height: 2rem;
        padding: 0;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        background: var(--tube-color-panel);
        color: var(--tube-color-text-menu);
        border: none;
    }

    nav > sl-button::part(label) {
        padding: 0;
        font-size: 1.125rem;
        font-weight: var(--tube-font-weight-bold);
    }

    header sl-button img {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.5rem;
    }

</style>