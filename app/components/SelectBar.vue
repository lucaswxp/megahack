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

                <StackLayout orientation="horizontal" class="scroll-menu">
                    
                    <Pager height="100%" :selectedIndex="selectedBar">

                    <PagerItem  v-for="bar in bares">
                    <GridLayout rows="*" columns="40,*,40">
                        <Image
                            src="~/images/ico-prev.png"
                            width="25"
                            horizontalAlignment="center"
                            row="0" col="0" @tap="prev" />

                        <StackLayout orientation="horizontal" row="0" col="1">
                            <GridLayout rows="320,*,*,*" ,
                                class="bar-hero"
                                columns="*">
                                <Image
                                    :src="bar.logo"
                                    row="0" col="0" width="165" />
                                <Label :text="bar.title" class="bar-title" row="1" col="0" />

                                <Button text="Entrar no Bar" row="2" col="0" />

                                <Label class="bar-online" row="3" col="0">
                                    <FormattedString>
                                        <Span :text="bar.onlineusers + ' usuários '" />
                                        <Span text="online" fontAttributes="Bold" />
                                    </FormattedString>
                                </Label>
                            </GridLayout>
                        </StackLayout>

                        <Image
                            src="~/images/ico-next.png"
                            width="25"
                            horizontalAlignment="center"
                            row="0" col="2" @tap="next" />
                        
                    </GridLayout>
                    </PagerItem>
                </Pager>

                    
                </StackLayout>

        </StackLayout>

    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import SelectedPageService from "../shared/selected-page-service";
  import * as fixture from "../shared/fixture";
  import {screen} from "platform"

  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("Home");
    },
    data: () => ({
        bares: fixture.bares,
        selectedBar: 0
    }),
    computed: {
      message() {
        return "<!-- Page content goes here -->";
      }
    },
    methods: {
      next() {
          this.selectedBar++
          if(this.selectedBar == this.bares.length) this.selectedBar = 0
      },
      prev() {
          this.selectedBar--
          if(this.selectedBar == -1) this.selectedBar = (this.bares.length-1)
      },
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

    .bar-hero {
        text-align: center;
        .bar-title {
            font-size: 26px;
            font-weight: bold;
        }
        .bar-online {
            font-size: 16px;
        }
        Button {
            height: 50pt;
            width: 280pt;
            background: #8E00FE;
            color: #fff;
            border-radius: 32px;
            font-size: 16px;
            font-weight: bold;
            box-shadow: none;
            text-transform: uppercase;
            android-elevation: 0;
        }
    }
    // Custom styles
</style>
