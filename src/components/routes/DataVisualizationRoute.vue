<template>
    <div>
        <div class="header-text">Visualizing </div>
        <div class='tableauPlaceholder' style='width: 1600px; height: 1227px;'><object class='tableauViz' width='1600' height='1227' style='display:none;'><param name='host_url' value='https%3A%2F%2Fprod-uk-a.online.tableau.com%2F' /> <param name='embed_code_version' value='3' /> <param name='site_root' value='&#47;t&#47;testdi' /><param name='name' value='Schooladaptability&#47;Adaptabilitydashboard&#47;01b41029-1453-4370-8882-acda26173252&#47;d725a342-463f-4c83-9422-922385ceb702' /><param name='tabs' value='no' /><param name='toolbar' value='yes' /><param name='showAppBanner' value='false' /></object></div>
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
