<template>
    <div>
        <div class="container">
            <div class="about-me-container">
                <div class="header-text">Project Team Developers</div>
                <div class="mt-5">Hi There 👋</div>
                <div class="mt-5">Bellow you will find all the informations about the members of the team</div>
            </div>
            <div class="badges-container">
                <div class="row-badges-container">
                    <div class="badge-base LI-profile-badge m-5" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="konstantinos-kalivas-45552018a" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://gr.linkedin.com/in/konstantinos-kalivas-45552018a?trk=profile-badge" /></div>
                    <div class="badge-base LI-profile-badge m-5" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="konstantinos-kalivas-45552018a" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://gr.linkedin.com/in/konstantinos-kalivas-45552018a?trk=profile-badge" /></div>
                </div>
                <div class="row-badges-container">
                    <div class="badge-base LI-profile-badge m-5" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="konstantinos-kalivas-45552018a" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://gr.linkedin.com/in/konstantinos-kalivas-45552018a?trk=profile-badge" /></div>
                    <div class="badge-base LI-profile-badge m-5" data-locale="en_US" data-size="medium" data-theme="dark" data-type="VERTICAL" data-vanity="konstantinos-kalivas-45552018a" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://gr.linkedin.com/in/konstantinos-kalivas-45552018a?trk=profile-badge" /></div>
                </div>
                <div class="mr-14"><a target="_blank" href="https://stackoverflow.com/users/9570494/konstantinos-kalivas"><img src="https://stackoverflow.com/users/flair/9570494.png?theme=dark" width="208" height="58" alt="profile for Konstantinos Kalivas at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for Konstantinos Kalivas at Stack Overflow, Q&amp;A for professional and enthusiast programmers"></a></div>
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
.container{
    margin-top: 30px;
    flex-direction: column;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* flex-wrap: wrap; */
    /* row-gap: 20px; */
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
    flex-direction: column;
    justify-content: space-evenly;
    align-items:center;
}
 
.about-me-container{
    width: 500px;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 17px;
}


.header-text{
    font-size: 25px;
    font-weight: 700;
}

@media only screen and (max-width: 700px) {
    .skills-container {
        flex-wrap: wrap;
    }
}


</style>
