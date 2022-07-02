<template>
    <div class="outer-container">
        <div class="header-text">Students Assess Influence</div>
        <div class="main-container">
            <div class="description-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tristique sodales lectus vitae vulputate. In augue libero, molestie vel orci ut, porta lacinia lacus. Nullam euismod, metus nec consectetur sagittis, tortor ligula rutrum ex, nec sollicitudin est tellus quis purus. Aliquam varius vestibulum justo, quis feugiat massa. Sed et efficitur tellus. Fusce non ante vitae diam dapibus ullamcorper a vitae nulla. Pellentesque in eros tempor, finibus dui sed, semper tellus. Ut tristique nec mi nec condimentum. Sed sit amet viverra nibh, et interdum velit. Nam mollis, enim in convallis placerat, ante mi malesuada ex, non ultrices urna lectus nec justo. Aenean ac imperdiet nulla. Mauris tincidunt eu tellus sed egestas. Donec quam turpis, tincidunt vel lacinia ac, imperdiet et tellus. Integer sit amet varius diam.
            </div>
            <div class="iframe-container">
                <iframe src="https://public.tableau.com/views/e-learning_16566918852420/Dashboard3?:language=en-US&publish=yes:display_count=n&:showVizHome=n&:origin=viz_share_link:embed=yes" width="100%" height="1080"></iframe>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "DataVisualization3"
    }
</script>

<style scoped>

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
    width: 1210px;
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
