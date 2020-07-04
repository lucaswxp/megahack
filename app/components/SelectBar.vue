<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <!--
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar
            -->
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"/>
            <!--
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
            <ActionItem icon="res://menu"
                        android:visibility="collapsed"
                        @tap="onDrawerButtonTap"
                        ios.position="left"/>
            <Label class="action-bar-title" text="ambev"/>

            <ActionItem @tap="openCamToScan"
                        ios.systemIcon="16" ios.position="right"
                        text="Ler QRCode" android.position="popup" />

        </ActionBar>

        <StackLayout>

            <ScrollView orientation="horizontal">
                <StackLayout orientation="horizontal" class="scroll-menu">
                    
                    <GridLayout rows="320,*,*,*" ,
                        columns="*">
                        <Image
                            src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                            row="0" col="0" width="100%" />
                        <Label text="Bar do Rock" row="1" col="0" />
                        <Button text="Entrar no Bar" @tap="onButtonTap" row="2" col="0" />
                        <Label text="28 online" row="3" col="0" />
                    </GridLayout>

                    <GridLayout rows="320,*,*,*" ,
                        columns="*">
                        <Image
                            src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                            row="0" col="0" width="100%" />
                        <Label text="Bar do Rock" row="1" col="0" />
                        <Button text="Entrar no Bar" @tap="onButtonTap" row="2" col="0" />
                        <Label text="28 online" row="3" col="0" />
                    </GridLayout>
                    
                    <GridLayout rows="320,*,*,*" ,
                        columns="*">
                        <Image
                            src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                            row="0" col="0" width="100%" />
                        <Label text="Bar do Rock" row="1" col="0" />
                        <Button text="Entrar no Bar" @tap="onButtonTap" row="2" col="0" />
                        <Label text="28 online" row="3" col="0" />
                    </GridLayout>

                    <GridLayout rows="320,*,*,*" ,
                        columns="*">
                        <Image
                            src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                            row="0" col="0" width="100%" />
                        <Label text="Bar do Rock" row="1" col="0" />
                        <Button text="Entrar no Bar" @tap="onButtonTap" row="2" col="0" />
                        <Label text="28 online" row="3" col="0" />
                    </GridLayout>

                    <GridLayout rows="320,*,*,*" ,
                        columns="*">
                        <Image
                            src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                            row="0" col="0" width="100%" />
                        <Label text="Bar do Rock" row="1" col="0" />
                        <Button text="Entrar no Bar" @tap="onButtonTap" row="2" col="0" />
                        <Label text="28 online" row="3" col="0" />
                    </GridLayout>
                    
                </StackLayout>
            </ScrollView>

        </StackLayout>

    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import SelectedPageService from "../shared/selected-page-service";

  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Home");
    },
    computed: {
      message() {
        return "<!-- Page content goes here -->";
      }
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
      },
      openCamToScan() {
        console.log(`Abrindo câmera para scan do QRCode`)
      }
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    // Custom styles
</style>
