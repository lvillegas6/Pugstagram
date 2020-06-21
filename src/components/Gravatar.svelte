<script>
    import md5 from 'md5';
    export let email;

    const hash = md5(email);

    console.log(email)
</script>

<img class={$$props.class} src={`https://www.gravatar.com/avatar/${hash}"`} alt="Avatar">