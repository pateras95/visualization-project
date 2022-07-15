<template>
    <div class="outer-container">
        <div class="header-text">
            Video Presentation
        </div>
        <div class="simple-text">
            Online education has been widely applied for the last 2 years, due to the pandemic conditions. Initially it was perceived as a temporary solution to an urgent condition, but as years went by, students  became familiar with this new kind of education and started to adapt to it. Some may argue that online education is here to stay, initiating a new era in education from anywhere, anytime. However, is online education enough? No matter the overall students performance, online education is considered to be insufficient with regards to students' social interaction with each other, culture, ethics, etc. 
            This work aims to highlight and combine the facts into visualisations that will help us build a solid view on whether students are well adapted to online education and under which circumstances.
        </div>
        <div class="simple-text">
            Even though the issue has been widely discussed the past two years, we have not been able to find good variety of datasets
            in order to form our visualizations, probably because the issue is relatively new.
            We have utilized datasets from Unicef, Kaggle and Mendley as presented in the corresponding section,
            and we tried to form visualizations that bring value to the stakeholders.
        </div>
        <div class="text-center">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/neOL-QDAUIA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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

.outer-container{
    background: url('~@/assets/orange-yellow-minimal-paint-white.jpg');
    background-size: cover;
    height: 100%;
}

.header-text{
    padding-top: 30px;
    font-size: 25px;
    text-align: center;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
}

.simple-text{
    width: 75%;
    margin: 30px auto;
    font-size: 22px;
    line-height: 24px;
    text-align: left;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
}

</style>


