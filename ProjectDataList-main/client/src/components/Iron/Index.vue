<template>
    <div1>
        <h1><span>Iron All brands</span></h1>
        <ul>
            <li style="--clr: #00ade1;">
            <a href="#/tefals" data-text="TEFAI">TEFAI</a>
            </li>
            <li style="--clr: #ff6493;">
            <a href="#/philipss" data-text="PHILIPS">PHILIPS</a>
            </li>
            <li style="--clr: #ffdd1c;">
            <a href="#/height155ups" data-text="height155up">height155up</a>
            </li>
            <li style="--clr: #00dc82;">
            <a href="#/height130ups" data-text="height130up">height130up</a>
            </li>
        </ul>
    </div1>
</template>
<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
        },
    },
}
</script>
<style scoped></style>
   