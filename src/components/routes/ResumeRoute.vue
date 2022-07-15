<template>
    <div class="outer-container">
        <div class="container">
            <div class="about-me-container">
                <div class="header-text">Datasets ( .excel Files )</div>
                <div class="mt-5 simple-text">Hi There 👋</div>
                <div class="mt-5 simple-text">Bellow you can download all the datasets that we used for the project</div>
            </div>
        </div>
        <div class="xlsx-container">
            <div class="download-text">
                Students Adaptability Level in Online Education
            </div>
            <div>
                <a href="https://www.kaggle.com/datasets/aacd0960cb0636ad956dcf1a07cf7a58bc7d621e3813a8ed8ef8b4f25dd837c8?resource=download" target="_blank"><button class="dn-button">Download</button></a>
            </div>
        </div>
        <div class="xlsx-container">
            <div class="download-text">
                Tracking the situation of children during COVID-19
            </div>
            <div>
                <a href="https://data.unicef.org/resources/rapid-situation-tracking-covid-19-socioeconomic-impacts-data-viz/" target="_blank"><button class="dn-button">Download</button></a>
            </div>
        </div>
        <div class="xlsx-container">
            <div class="download-text">
                Acceptance of e-learning System among Universities Students' under the COVID-19 Pandemic Conditions
            </div>
            <div>
                <a href="https://data.mendeley.com/datasets/vgvkh4fr8x/1" target="_blank"><button class="dn-button">Download</button></a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Resume"
    }
</script>

<style scoped>
.outer-container{
    background: url('~@/assets/orange-yellow-minimal-paint-white.jpg');
    background-size: cover;
    height: 100%;
}

.container{
    padding-top: 30px;
    flex-direction: column;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* flex-wrap: wrap; */
    /* row-gap: 20px; */
}

.dn-button{
    font-size: 22px;
    line-height: 24px;
    text-align: left;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
    color: white;
    text-decoration: none;
    background: #E0814B;
    border-radius: 5px;
    padding: 10px;

}

.simple-text{
    font-size: 22px;
    line-height: 24px;
    text-align: left;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
}

.download-text{
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 25px;
    font-weight: 700;
}

.about-me-container{
    max-width: 500px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
    margin-bottom: 20px;
}

.header-text{
    font-size: 25px;
    font-weight: 700;
}

.xlsx-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px;
    column-gap: 50px;
    row-gap: 10px;
}

</style>
