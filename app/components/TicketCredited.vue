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

        <StackLayout orientation="vertical" verticalAlignment="center">
            <GridLayout rows="auto, auto, auto, auto" ,
                class="ticket-credited"
                columns="*">

                <Label text="Parabéns" class="congrats" row="0" col="0" />

                <Label class="credit" row="1" col="0">
                    <FormattedString>
                        <Span text="Você ganhou " />
                        <Span text="4 tickets!" fontAttributes="Bold" />
                    </FormattedString>
                </Label>

                <Image
                    src="~/images/ticket-credited.png"
                    row="2" col="0" width="119" />

                <Button text="Ver bares abertos" @tap="seeBars" row="3" col="0" />
            </GridLayout>

        </StackLayout>

    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import SelectedPageService from "../shared/selected-page-service";
  import * as fixture from "../shared/fixture";
  import {screen} from "platform"
  import SelectBar from "./SelectBar";

  export default {
    mounted() {
      SelectedPageService.getInstance().updateSelectedPage("TicketCredited");
    },
    data: () => ({
        bares: fixture.bares
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
      seeBars() {
        this.$navigateTo(SelectBar);
      }
    }
  };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '~@nativescript/theme/scss/variables/blue';
    // End custom common variables

    .ticket-credited {
        text-align: center;
        .congrats {
            color: #8E00FE;
            font-size: 26px;
            text-transform: uppercase;
            font-weight: bold;
        }
        .credit {
            font-size: 22px;
        }
        Image {
            margin: 50pt 0;
        }
        Button {
            height: 50pt;
            background: #8E00FE;
            color: #fff;
            border-radius: 32px;
            font-size: 16px;
            font-weight: bold;
            box-shadow: none;
            text-transform: uppercase;
            width: 280pt;
            android-elevation: 0;
        }
    }
    // Custom styles
</style>
