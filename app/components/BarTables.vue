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

        <ListView for="(table,index) in tables" :key="index">
            <v-template>
                <StackLayout rows="auto,auto" columns="*">
                    <Label class="h1 wrap" textWrap="true" row="0" col="0">
                        <FormattedString>
                            <Span :text="table.name + ' - '" fontAttributes="Bold" class="table-label" />
                            <Span :text="online(table) + ' online'" class="online" />
                        </FormattedString>
                    </Label>

                    <ScrollView orientation="horizontal" col="0" row="1">
                    <StackLayout orientation="horizontal" class="scroll-menu box">
                        <Image v-for="(itemMember,indexx) in table.members" :key="indexx" :src="itemMember.avatar"
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
  import * as fixture from "../shared/fixture";

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
        barName: "Bar do Rock",
        tables: fixture.barTables
    }),
    computed: {
      message() {
        return "<!-- Page content goes here -->";
      }
    },
    methods: {
      online(table){
          return table.members.length
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

    Page {
        background: linear-gradient(#8E00FE, #a163de);
    }
    .box, .wrap {
        margin: 0 20pt;
    }

    .h1 {
        color: #fff;
        margin: 5px;
    }

    .img-circle {
        border-radius: 100pt;
    }

    .box {
        border-radius: 20px;
        background: #fff;
        box-shadow: 2px 2px 1px rgba(255, 255, 255, .25);
        margin: 5pt;
        Image {
            margin: 0 5pt;
        }
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
    .table-label {
        font-size: 18px;
        font-weight: bold
    }
    .online {
        font-size: 16px;
        font-weight: normal
    }
    // Custom styles
</style>