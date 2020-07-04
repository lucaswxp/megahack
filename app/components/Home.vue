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

            <Image horizontalAlignment="center" src="~/images/logo.png" width="71" />


            <ActionItem @tap="openScanner()">
            <Image horizontalAlignment="right" src="~/images/ico-qrcode-action.png" width="23" />
            </ActionItem>
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
                    <StackLayout orientation="horizontal" class="progress" v-bind:style="{width: progress}">
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
  import {BarcodeScanner} from "nativescript-barcodescanner";
  import SelectBar from "./SelectBar";
  
  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Home");
      let i = 1;
      const MAX = 80
      // porcaria isso TODO: animação de vdd
      const animate = () => {
        setTimeout(() => {
            this.progress = i + '%'
            i += 2
            if(i <= MAX){
                animate()
            }
        }, 1)
      }

      animate()
    },
    data: () => ({
        progress: '0%'
    }),
    computed: {
      message() {
        return "<!-- Page content goes here -->";
      }
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
      },
      openScanner() {
        if(this.isLoading) return
        this.isLoading = true

        const self = this
        const front = false
        new BarcodeScanner().scan({
          cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
          cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
          message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
          preferFrontCamera: front,     // Android only, default false
          showFlipCameraButton: true,   // default false
          showTorchButton: true,        // iOS only, default false
          torchOn: false,               // launch with the flashlight on (default false)
          resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
          beepOnScan: true,             // Play or Suppress beep on scan (default true)
          openSettingsIfPermissionWasPreviouslyDenied: true, // On iOS you can send the user to the settings app if access was previously denied
          closeCallback: () => {
            console.log("Scanner closed @ " + new Date().getTime());

            self.isLoading = false
          }
        }).then(
            function (result) {
              self.isLoading = false
              console.log("--- scanned: " + result.text);
              // Note that this Promise is never invoked when a 'continuousScanCallback' function is provided
              setTimeout(function () {

                self.$navigateTo(SelectBar, {
                    clearHistory: true
                });
              }, 500);
            },
            function (errorMessage) {
              self.isLoading = false
              console.log("No scan. " + errorMessage);
            }
        );
      }
    }
  };
</script>

<style scoped lang="scss">

    Page {
        background: linear-gradient(#8E00FE, #a163de);
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
                transition: width 0.3s linear;
                height: 100%;
                width: 0;
                border-radius: 16px;
                background: linear-gradient(to right, #8E00FE, #a163de);
            }
        }
        Label {
            text-align: center;
            font-size: 12px;
        }
    }
    // Custom styles
</style>
