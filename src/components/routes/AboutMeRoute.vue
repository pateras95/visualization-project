<template>
    <div class="outer-container">
        <div class="container">
            <div class="about-me-container">
                <div class="header-text">Project Team Developers</div>
                <div class="mt-5 simple-text">Hi There 👋</div>
                <div class="mt-5 simple-text">Bellow you will find all the informations about the members of the team</div>
            </div>
            <div class="badges-container">
                <div class="badge-container">
                    <div class="simple-text-badge mb-3">Γεράσιμος Βαλλιανάτος cs2200002</div>
                    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="gerasimos-vallianatos" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://gr.linkedin.com/in/gerasimos-vallianatos?trk=profile-badge"></a></div>
                </div>
                <div class="badge-container">
                    <div class="simple-text-badge mb-3">Νικόλαος - Αλέξανδρος Χαρίτος ic121010</div>
                    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="nikos-charitos-497774129" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://gr.linkedin.com/in/konstantinos-kalivas-45552018a?trk=profile-badge"></a></div>
                </div>
                <div class="badge-container">
                    <div class="simple-text-badge mb-3">Αθηνά Σταματίου cs2200019</div>
                    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="athinastamatiou" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://gr.linkedin.com/in/athinastamatiou?trk=profile-badge"></a></div>
                </div>
                <div class="badge-container">
                    <div class="simple-text-badge mb-3">Κωνσταντίνος Καλύβας ic1200008</div>
                    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="konstantinos-kalivas-45552018a" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://gr.linkedin.com/in/konstantinos-kalivas-45552018a?trk=profile-badge"></a></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AboutMe",
        metaInfo: {
            script: [
                { src: 'https://platform.linkedin.com/badges/js/profile.js', async: true, defer: true }
            ],
        }
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
