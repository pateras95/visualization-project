<template>
    <div>
        <v-app-bar
            class="outer-container-top"
            color="accent-4"
        >
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-spacer />

            <a href="https://github.com/pateras95/visualization-project" target="_blank">
                <button class="github-button" />
            </a>
            <div class="fix-color"/>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            class="outer-container custom-width"
        >
            <template v-slot:prepend>
                <div class="nav-top-container">
                    <img class="avatar-img" src="@/assets/uoa_logo.png">
                    <div class="mt-3">Visualization</div>
                    <dir class="mt-n1">Project</dir>
                </div>
            </template>

            <v-divider />

            <v-list
                nav
            >
                <v-list-item-group
                    v-model="group"
                    active-class="text--accent-4 nav-bar"
                >
                    <router-link to="/" style="text-decoration: none; color: inherit;">
                        <v-list-item class="nav-bar-text">
                            <v-list-item-title><v-icon class="mr-5">mdi-home</v-icon>Home</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/about-me" style="text-decoration: none; color: inherit;">
                        <v-list-item class="nav-bar-text">
                            <v-list-item-title><v-icon class="mr-5">mdi-account-multiple</v-icon>About The Team</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/resume" style="text-decoration: none; color: inherit;">
                        <v-list-item class="nav-bar-text">
                            <v-list-item-title><v-icon class="mr-5">mdi-folder-download</v-icon>Datasets.csv </v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/data-visualization" style="text-decoration: none; color: inherit;">
                        <v-list-item class="nav-bar-text">
                            <v-list-item-title><v-icon class="mr-5">mdi-chart-histogram</v-icon>Experience with e-learning</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/data-visualization-2" style="text-decoration: none; color: inherit;">
                        <v-list-item class="nav-bar-text">
                            <v-list-item-title><v-icon class="mr-5">mdi-chart-histogram</v-icon>Response to influence</v-list-item-title>
                        </v-list-item>
                    </router-link>
                    <router-link to="/data-visualization-3" style="text-decoration: none; color: inherit;">
                        <v-list-item class="nav-bar-text">
                            <v-list-item-title><v-icon class="mr-5">mdi-chart-histogram</v-icon>E-learning on World</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                drawer: false,
                tems: [
                    { title: 'Home', icon: 'mdi-home-city' },
                    { title: 'My Account', icon: 'mdi-account' },
                    { title: 'Users', icon: 'mdi-account-group-outline' },
                ]
            }
        }
    }
</script>

<style scoped>

.outer-container-top{
    background: url('~@/assets/orange-yellow-minimal-paint-white.jpg');
    background-size:cover;
    background-position: -31px 0px;
    position: relative;
}

.fix-color{
    width: 50px;
    height: 64px;
    margin-right: -20px;
    background: #DF7F49;
}

.outer-container{
    background: url('~@/assets/orange-yellow-minimal-paint-white.jpg');
    background-size: cover;
    height: 100%;
}

.github-button{
    background: url("../assets/github-box.png") no-repeat scroll 0 0 transparent;
    cursor: pointer;
    font-weight: bold;
    height: 32px;
    width: 75px;
}

.avatar-img{
    width: 200px;
    height: auto;
}

.linkedin-button{
    background: url("../assets/linkedin.png") no-repeat scroll 0 0 transparent;
    cursor: pointer;
    font-weight: bold;
    height: 32px;
    width: 75px;
}

.nav-bar-text {
    margin-left: 5px !important;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif !important;
    font-weight: 700 !important;
}

.nav-top-container{
    margin-top: 15px !important;
    margin-bottom: 20px !important;
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    font-weight: 700 !important;
    font-size: 20px !important;
    line-height: 22px !important;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

</style>
