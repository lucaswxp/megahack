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
            <Image  src="~/images/logo.png" width="71" />

            <ActionItem @tap="openCamToScan"
                        ios.systemIcon="16" ios.position="right"
                        text="Ler QRCode" android.position="popup" />

        </ActionBar>

        <StackLayout>
            <Label class="h1 wrap" text="Bares abertos agora" />

            <ScrollView orientation="horizontal">
              <StackLayout orientation="horizontal" class="scroll-menu box">
                
                  <GridLayout rows="auto,auto,auto" ,
                      columns="auto">
                      <Image
                          src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                          row="0" columns="0" width="120" />
                      <Label text="Bar do Rock" row="1" columns="0" class="heading" />
                      <Label text="28 online" row="2" columns="0" class="p" />
                  </GridLayout>

                  <GridLayout rows="auto,auto,auto" ,
                      columns="auto">
                      <Image
                          src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                          row="0" columns="0" width="120" />
                      <Label text="Bar do Rock" row="1" columns="0" class="heading" />
                      <Label text="28 online" row="2" columns="0" class="p" />
                  </GridLayout>
                  
                  <GridLayout rows="auto,auto,auto" ,
                      columns="auto">
                      <Image
                          src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                          row="0" columns="0" width="120" />
                      <Label text="Bar do Rock" row="1" columns="0" class="heading" />
                      <Label text="28 online" row="2" columns="0" class="p" />
                  </GridLayout>

                  <GridLayout rows="auto,auto,auto" ,
                      columns="auto">
                      <Image
                          src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                          row="0" columns="0" width="120" />
                      <Label text="Bar do Rock" row="1" columns="0" class="heading" />
                      <Label text="28 online" row="2" columns="0" class="p" />
                  </GridLayout>

                  <GridLayout rows="auto,auto,auto" ,
                      columns="auto">
                      <Image
                          src="https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"
                          row="0" columns="0" width="120" />
                      <Label text="Bar do Rock" row="1" columns="0" class="heading" />
                      <Label text="28 online" row="2" columns="0" class="p" />
                  </GridLayout>
                
              </StackLayout>
          </ScrollView>


            <GridLayout rows="auto, auto" columns="50,*" class="box-qrcode box">
                <Image
                    src="~/images/box-ticket-qrcode.png"
                    row="0" col="0" rowSpan="2" width="50" />
                <Label text="Comprou uma bebida hoje?" row="0" col="1" class="heading" />
                <Label text="Scaneie o QR CODE e pegue seus tickets!" row="1"
                    col="1" class="p" textWrap="true" verticalAlignment="top" />
            </GridLayout>

            <GridLayout rows="auto, 40, auto" columns="*" class="box-ticket box">
                <GridLayout rows="*" columns="*,*" row="0" col="0">
                    <Image
                        src="~/images/ico-ticket.png"
                        width="25"
                        horizontalAlignment="left"
                        row="0" col="0" />
                    <Image
                        src="~/images/ico-gift.png"
                        width="21"
                        horizontalAlignment="right"
                        row="0" col="1" />
                </GridLayout>


                <StackLayout orientation="horizontal" class="progressbar" row="1" col="0">
                    <StackLayout orientation="horizontal" class="progress">
                    </StackLayout>
                </StackLayout>

                <Label textWrap="true" row="2" col="0">
                    <FormattedString>
                        <Span text="Faltam " />
                        <Span text="6 tickets" fontAttributes="Bold" />
                        <Span text=" para você ganhar um" />
                        <Span text=" presente!" fontAttributes="Bold" />
                    </FormattedString>
                </Label>
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
    data: {
        progressbar: '80%'
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

    ActionBar {
        background: #8E00FE;
        box-shadow: none;
        border-width: 0;
        border-color: transparent;
        android-elevation: 0;
        margin-bottom: 40px;
    }
    Page {
        background: linear-gradient(#8E00FE, #a163de);
        font-family: Roboto;
    }
    .box, .wrap {
        margin: 0 40px;
    }

    .h1 {
        color: #fff;
        font-size: 18px;
        font-weight:bold;
        //margin: 20px 0;
    }

    .box {
        border-radius: 20px;
        background: #fff;
        box-shadow: 2px 2px 1px rgba(255, 255, 255, .25);
        margin: 40px;
        padding: 20px;
        .heading {
            font-size: 18px;
            font-weight: bold;
        }
        .p {
            font-size: 16px;
        }
        // lista de bares
        GridLayout {
            margin-right: 20px;
            Image {
                border-radius: 18px;
                margin-bottom: 3px;
            }
        }
    }
    .box-qrcode {
        Label {
            margin: 0 32px;
        }
    }
    .box-ticket {
        border: 1px solid #000;
        .progressbar {
            height: 24px;
            background: #AEAEAE;
            border-radius:  16px;
            .progress {
                height: 100%;
                width: 40%;
                border-radius: 16px;
                background: linear-gradient(to right, #8E00FE, #a163de);
            }
        }
        Label {
            text-align: center;
            font-size: 12px;
            [fontAttributes=Bold] {
                font-weight: bold;
            }
        }
    }
    // Custom styles
</style>
