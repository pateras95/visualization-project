<template>
    <div class="wrapper">
        <div class="header-text">
            Video Presentation
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods:{
            goToResume(){
                this.$router.push('/about-me')
            }
        }
    }
</script>

<style lang="scss" scoped>

.header-text{
    margin-top: 30px;
    font-size: 25px;
    text-align: center;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
}

</style>


