<template>
    <div class="outer-container">
        <div class="header-text">Parents & Students</div>
        <div class="main-container">
            <div class="iframe-container">
                <iframe class="custom-iframe" src="https://public.tableau.com/views/Universities_16556409459470/Universities?:language=en-US&publish=yes:display_count=n&:showVizHome=n&:origin=viz_share_link:embed=yes" width="100%" height="1080"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DataVisualization"
    }
</script>

<style scoped>

.outer-container{
    background: url('~@/assets/orange-yellow-minimal-paint-white.jpg');
    background-size: cover;
    height: 100%;
}

.custom-iframe{
    border:none;
}

.header-text{
    padding-top: 30px;
    margin-bottom: 25px;
    font-size: 25px;
    text-align: center;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
}

.description-text{
    margin-left: 20px;
    font-size: 20px;
    text-align: left;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    max-width: 500px;
}

.simple-text{
    margin: 0 auto;
    width: 75%;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
}

.iframe-container{
    margin: 0 auto;
    text-align: center;
    width: 1700px;
}

.main-container{
    display: flex;
    align-items: center;
}

@media only screen and (max-width: 700px) {
    .main-container {
        flex-wrap: wrap;
    }

    .description-text {
        text-align: center;
        margin-left: 0px;
        padding: 10px;
    }
}

</style>
