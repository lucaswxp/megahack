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

            <Label class="action-name" :text="bars[0].title" />

            <ActionItem>
                <GridLayout columns="25, 20">
                    <Image row="0" col="0" horizontalAlignment="right" src="~/images/ico-drink.png" width="21" />
                    <Span row="0" col="1" />
                </GridLayout>
            </ActionItem>
        </ActionBar>

        <GridLayout columns="*" rows="auto,auto,*" @tap="showModal">
            <!-- musica tocando -->
            <StackLayout class="player wrap" orientation="horizontal" col="0" row="0">
                <Image src="~/images/ico-music.png"
                width="9" />
                
                <Label textWrap="true">
                    <FormattedString>
                        <Span text="Tocando agora: " fontAttributes="Bold" />
                        <Span text="Red Hot Chili Peppers - Californication" />
                    </FormattedString>
                </Label>
            </StackLayout>

            <!-- barra de amigos na mesa -->
            <StackLayout  class="scroll-menu box" orientation="horizontal" col="0" row="1">
                <StackLayout v-for="(person,index) in table.members" :key="index">
                    <Image :src="person.avatar"
                    width="50" class="img-circle" borderRadius="100" row="0" col="0" />
                    <Label :text="person.name" row="1" col="0" />
                </StackLayout>
            </StackLayout>

            <!-- Chat -->
            <StackLayout>
            </StackLayout>

        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import SelectedPageService from "../shared/selected-page-service";
  import * as fixture from "../shared/fixture";
  import ModalDrink from "./ModalDrink";

  export default {
    data: () => ({
        bars: fixture.bares,
        table:  fixture.barTables[2]
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
      count(table){
          return table.members.length
      },
      showModal() {
        this.$showModal(ModalDrink);
      }
    }
  };
</script>

<style scoped lang="scss">

    Page {
        background: linear-gradient(#8E00FE, #a163de);
    }

    .player {
        background: rgba(242,242,242, .5);
        android-elevation: 5pt;
        border-radius: 30pt;
        height: 20pt;
        Image {
            margin: 0 5pt 0 10pt;

        }
        Label {
            color: #fff;
        }
    }


    .img-circle {
        borderRadius: 100;
    }

    .box {
        margin-top: 20pt;
        padding: 20px;
        StackLayout {
            
        }
        Image {
            margin: 0 9pt;
        }
        Label {
            text-align: center;
            font-size: 10pt;
        }
    }
    // Custom styles
</style>