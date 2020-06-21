<script>
    import { onMount } from 'svelte'
    import { state } from '../store/store.js'
    import Header from '../components/Header'
    import Main from '../components/Main'
    import Sidebar from '../components/Sidebar'
    import TimeLine from '../components/TimeLine'

    let data = {};
    const api = "https://us-central1-pugstagram-co.cloudfunctions.net/data"

    onMount( async () => {
        const response = await fetch(api)
        data = await response.json()
    })

</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
    :global(body){
        background-color: #fafafa;
        color: rgba(38, 38, 38, 0.7);
        font-family: "Lato", sans-serif;
        margin: 0;
        padding: 0;
    }

    :global(h1, h2, h3){
        margin: 0;
        padding: 0;
    }


</style>

<Header />
<Main>
    <TimeLine posts={data.posts}/>
    <Sidebar {...data.user} />
</Main>