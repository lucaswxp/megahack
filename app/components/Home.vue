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
            <Label class="action-bar-title" text="Ambev"/>

            <ActionItem @tap="openCamToScan"
                        ios.systemIcon="16" ios.position="right"
                        text="Ler QRCode" android.position="popup" />

        </ActionBar>

        <StackLayout>
            <ScrollView orientation="horizontal">
              <StackLayout orientation="horizontal" class="scroll-menu">
                
                  <GridLayout rows="auto,auto,auto" ,
                      columns="auto" style="background-color:red">
                      <Image
                          src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                          row="0" columns="0" width="120" />
                      <Label text="Bar do Rock" row="1" columns="0" />
                      <Label text="28 online" row="2" columns="0" />
                  </GridLayout>

                  <GridLayout rows="auto,auto,auto" ,
                      columns="auto" style="background-color:red">
                      <Image
                          src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                          row="0" columns="0" width="120" />
                      <Label text="Bar do Rock" row="1" columns="0" />
                      <Label text="28 online" row="2" columns="0" />
                  </GridLayout>
                  
                  <GridLayout rows="auto,auto,auto" ,
                      columns="auto" style="background-color:red">
                      <Image
                          src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                          row="0" columns="0" width="120" />
                      <Label text="Bar do Rock" row="1" columns="0" />
                      <Label text="28 online" row="2" columns="0" />
                  </GridLayout>

                  <GridLayout rows="auto,auto,auto" ,
                      columns="auto" style="background-color:red">
                      <Image
                          src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                          row="0" columns="0" width="120" />
                      <Label text="Bar do Rock" row="1" columns="0" />
                      <Label text="28 online" row="2" columns="0" />
                  </GridLayout>

                  <GridLayout rows="auto,auto,auto" ,
                      columns="auto" style="background-color:red">
                      <Image
                          src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                          row="0" columns="0" width="120" />
                      <Label text="Bar do Rock" row="1" columns="0" />
                      <Label text="28 online" row="2" columns="0" />
                  </GridLayout>
                
              </StackLayout>
          </ScrollView>


            <GridLayout rows="auto, auto" columns="50,*,100">
                <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/QR_icon.svg/1200px-QR_icon.svg.png"
                    row="0" col="0" rowSpan="2" width="50" />
                <Label text="Comprou uma bebida hoje?" row="0" col="1" />
                <Label text="Scaneie o QR CODE e pegue seus tickets!" row="1"
                    col="1" />
            </GridLayout>

            <GridLayout rows="auto, auto" columns="*">
                <GridLayout rows="*" columns="*,*" row="0" col="0">
                    <Image
                        src="https://cdn2.vectorstock.com/i/1000x1000/53/81/gift-icon-vector-23205381.jpg"
                        row="0" col="0" width="25" />
                    <Image
                        src="https://cdn2.vectorstock.com/i/1000x1000/53/81/gift-icon-vector-23205381.jpg"
                        row="0" col="1" width="25" />
                </GridLayout>

                <Label text="Faltam 6 tickets para você ganhar um presente!"
                    row="1" col="0" />
            </GridLayout>
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
