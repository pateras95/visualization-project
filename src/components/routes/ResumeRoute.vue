<template>
    <div class="outer-container">
        <div class="container">
            <div class="about-me-container">
                <div class="header-text">Datasets ( .excel Files )</div>
                <div class="mt-5 simple-text">Hi There 👋</div>
                <div class="mt-5 simple-text">Bellow you can download all the datasets that we used for the project</div>
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

.badge-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 100%;
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

.simple-text{
    font-size: 22px;
    line-height: 24px;
    text-align: left;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 500;
}

.simple-text-badge{
    font-size: 20px;
    line-height: 22px;
    text-align: center;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
}

.row-badges-container{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 20px;
    margin: 20px;
    justify-content: space-evenly;
    align-items: center;
}

.badges-container{
    display: flex;
    column-gap: 20px;
    align-items: center;
    justify-content: space-evenly;
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

@media only screen and (max-width: 700px) {
    .skills-container {
        flex-wrap: wrap;
    }

    .badges-container {
        flex-direction: column;
    }
}


</style>
