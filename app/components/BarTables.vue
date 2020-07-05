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

            <Label class="action-name" :text="barName" />

            <ActionItem>
                <GridLayout columns="25, 20">
                    <Image row="0" col="0" horizontalAlignment="right" src="~/images/ico-drink.png" width="21" />
                    <Span row="0" col="1" />
                </GridLayout>
            </ActionItem>

        </ActionBar>

        <ListView for="table in tables" separatorColor="transparent">
            <v-template>
                <StackLayout >
                    <GridLayout columns="auto, auto">
                        <Label class="h1 wrap" textWrap="true" row="0" col="0">
                            <FormattedString>
                                <Span :text="table.name + ' - '" fontAttributes="Bold" class="table-label" />
                                <Span :text="online(table) + ' online'" class="online" />
                            </FormattedString>
                        </Label>
                        <Image src="~/images/ico-lock.png" v-if="table.private" style="text-align:right" row="0" col="1" width="12" />
                    </GridLayout>

                    <ScrollView orientation="horizontal">
                        <StackLayout orientation="horizontal" class="scroll-menu box">
                            <Image v-for="itemMember in table.members" :src="itemMember.avatar"
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
            margin: 0 9pt;
        }
        .heading {
            font-size: 18px;
            font-weight: bold;
        }
        .p {
            font-size: 16px;
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