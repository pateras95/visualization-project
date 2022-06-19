<template>
    <div>
        <div class="header-text">Visualizing </div>
        <iframe src="https://prod-uk-a.online.tableau.com/t/testdi/views/Schooladaptability/Adaptabilitydashboard/1243eebe-3eb8-42cb-9760-e0c9957fa642/fedfccf1-b8ee-4c92-8dbf-43bc3566ca0a?:display_count=n&:showVizHome=n&:origin=viz_share_link:embed=yes" width="1920" height="1080"></iframe>
    </div>
</template>

<script>
    export default {
        name: "DataVisualization",
        metaInfo: {
            script: [
                { src: 'https://prod-uk-a.online.tableau.com/javascripts/api/viz_v1.js', async: true, defer: true }
            ],
        }
    }
</script>

<style scoped>

.header-text{
    margin-top: 30px;
    font-size: 25px;
    text-align: center;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
}

.simple-text{
    margin: 0 auto;
    width: 75%;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
}

</style>
