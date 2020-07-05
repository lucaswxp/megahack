<template lang="html">
    <GridLayout rows="auto, *" class="nt-drawer__content">
        <StackLayout row="0" class="nt-drawer__header">
            <Image class="nt-drawer__header-image fas t-36" src.decode="font://&#xf2bd;"/>
            <Label class="nt-drawer__header-brand" text="User Name"/>
            <Label class="nt-drawer__header-footnote" text="username@mail.com"/>
        </StackLayout>

        <ScrollView row="1" class="nt-drawer__body">
            <StackLayout>
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Home' ? ' -selected': '')"
                            @tap="onNavigationItemTap(Home)">
                    <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
                    <Label col="1" text="Home" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'SelectBar' ? ' -selected': '')"
                            @tap="onNavigationItemTap(SelectBar)">
                    <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
                    <Label col="1" text="SelectBar" class="p-r-10"/>
                </GridLayout>
                
                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'TicketCredited' ? ' -selected': '')"
                            @tap="onNavigationItemTap(TicketCredited)">
                    <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
                    <Label col="1" text="TicketCredited" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'BarTables' ? ' -selected': '')"
                            @tap="onNavigationItemTap(BarTables)">
                    <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
                    <Label col="1" text="BarTables" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'SelectedTable' ? ' -selected': '')"
                            @tap="onNavigationItemTap(SelectedTable)">
                    <Label col="0" text.decode="&#xf015;" class="nt-icon fas"/>
                    <Label col="1" text="SelectedTable" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Browse' ? ' -selected': '')"
                            @tap="onNavigationItemTap(Browse)">
                    <Label col="0" text.decode="&#xf1ea;" class="nt-icon far"/>
                    <Label col="1" text="Browse" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Search' ? ' -selected': '')"
                            @tap="onNavigationItemTap(Search)">
                    <Label col="0" text.decode="&#xf002;" class="nt-icon fas"/>
                    <Label col="1" text="Search" class="p-r-10"/>
                </GridLayout>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Featured' ? ' -selected': '')"
                            @tap="onNavigationItemTap(Featured)">
                    <Label col="0" text.decode="&#xf005;" class="nt-icon fas"/>
                    <Label col="1" text="Featured" class="p-r-10"/>
                </GridLayout>

                <StackLayout class="hr"/>

                <GridLayout columns="auto, *"
                            :class="'nt-drawer__list-item' + (selectedPage === 'Settings' ? ' -selected': '')"
                            @tap="onNavigationItemTap(Settings)">
                    <Label col="0" text.decode="&#xf013;" class="nt-icon fas"/>
                    <Label col="1" text="Settings" class="p-r-10"/>
                </GridLayout>
            </StackLayout>
        </ScrollView>
    </GridLayout>
</template>

<script>
  import Home from "./Home";
  import Browse from "./Browse";
  import SelectBar from "./SelectBar";
  import SelectedTable from "./SelectedTable";
  import BarTables from "./BarTables";
  import Featured from "./Featured";
  import Search from "./Search";
  import TicketCredited from "./TicketCredited";
  import Settings from "./Settings";
  import * as utils from "~/shared/utils";
  import SelectedPageService from "~/shared/selected-page-service";

  export default {
    mounted() {
      SelectedPageService.getInstance().selectedPage$
        .subscribe((selectedPage) => this.selectedPage = selectedPage);
    },
    data() {
      return {
        Home: Home,
        Browse: Browse,
        SelectBar: SelectBar,
        SelectedTable: SelectedTable,
        BarTables: BarTables,
        Featured: Featured,
        Search: Search,
        Settings: Settings,
        TicketCredited: TicketCredited,
        selectedPage: ""
      };
    },
    components: {
      Home,
      Browse,
      Featured,
      SelectBar,
      Search,
      TicketCredited,
      Settings
    },
    methods: {
      onNavigationItemTap(component) {
        this.$navigateTo(component, {
          clearHistory: true
        });
        utils.closeDrawer();
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
