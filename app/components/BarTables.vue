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
            <Label class="h1 wrap" :text="barName" />

            <ActionItem @tap="openCamToScan"
                        ios.systemIcon="16" ios.position="right"
                        text="Ler QRCode" android.position="popup" />

        </ActionBar>

        <ListView for="(item,index) in tables" :key="index">
            <v-template>
                <StackLayout rows="auto,auto" columns="*">
                    <Label class="h1 wrap" textWrap="true" row="0" col="0">
                        <FormattedString>
                            <Span :text="item.name + ' - '" fontAttributes="Bold" />
                            <Span :text="item.online + ' online'" />
                        </FormattedString>
                    </Label>

                    <ScrollView orientation="horizontal" col="0" row="1">
                    <StackLayout orientation="horizontal" class="scroll-menu box">
                        <Image v-for="(itemMember,index) in item.members" :key="index" :src="itemMember.picture"
                            width="50" class="img-circle" borderRadius="100" />
                    </StackLayout>
                    </ScrollView>
                </StackLayout>
            </v-template>
        </ListView>

    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import SelectedPageService from "../shared/selected-page-service";

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
        progress: '0%',
        barName: "Bar do Rock",
        tables: [
            {name:"Mesa 1", online: 8, members: [{picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"}, {picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"},{picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"},{picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"}]},
            {name:"Mesa 2", online: 6, members: [{picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"}, {picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"},{picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"}]},
            {name:"Mesa 3", online: 16, members: [{picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"}, {picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"},{picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"},{picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"},{picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"}, {picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"},{picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"},{picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"}, {picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"},{picture: "https://www.ahstatic.com/photos/3269_rsr001_00_p_1024x768.jpg"}]}
        ]
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
      openCamToScan() {
        console.log(`Abrindo câmera para scan do QRCode`)
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

    .img-circle {
        borderRadius: 100;
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