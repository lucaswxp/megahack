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

            <ActionItem @tap="showModal">
                <GridLayout columns="25, 20">
                    <Image row="0" col="0" horizontalAlignment="right" src="~/images/ico-drink.png" width="21" />
                    <Span row="0" col="1" />
                </GridLayout>
            </ActionItem>
        </ActionBar>

        <GridLayout columns="*" rows="auto,auto,*">
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
            <StackLayout  class="scroll-menu box friends" orientation="horizontal" col="0" row="1">
                <StackLayout v-for="(person,index) in table.members" :key="index">
                    <Image :src="person.avatar"
                    width="50" class="img-circle" borderRadius="100" row="0" col="0" />
                    <Label :text="person.name" row="1" col="0" />
                </StackLayout>
            </StackLayout>

            <!-- Chat -->
            <StackLayout row="2" col="0">
                <ScrollView height="80%">
                    <StackLayout verticalAlignment="bottom">
                        <StackLayout v-for="conversation in conversations" :horizontalAlignment="isOwner(conversation) ? 'left' : 'right'" class="message-stream wrap">
                            <Label :text="conversation.sender.name" class="sender" />
                            <StackLayout>
                                <GridLayout v-for="(message, index) in conversation.messages" columns="auto">
                                    <Label col="0" row="0" textWrap="true" class="message" :text="message.message" />
                                </GridLayout>
                            </StackLayout>
                        </StackLayout>
                    </StackLayout>
                </ScrollView>

                <StackLayout height="20%" class="message-input">
                    <GridLayout columns="auto,*" style="padding: 10">
                        <Image src="~/images/ico-chat-smile.png" width="26" row="0" col="0" />
                        <TextField class="chatTextField" row="0" @focus="cleanMessage" @returnPress="sendMessage" col="1" v-model="message"></TextField>
                    </GridLayout>
                </StackLayout>
            </StackLayout>

        </GridLayout>
    </Page>
</template>

<script>
  import * as utils from "~/shared/utils";
  import SelectedPageService from "../shared/selected-page-service";
  import * as fixture from "../shared/fixture";
  import ModalDrink from "./ModalDrink";

  const mesa = fixture.barTables[2]
  const logged = mesa.members[0]

  export default {
    data: () => ({
        bars: fixture.bares,
        table:  mesa,
        message: "Fale um oi...",
        conversations: [
        ]
    }),
    computed: {
        
    },
    methods: {
      onDrawerButtonTap() {
        utils.showDrawer();
      },
      sendMessage(message, from){
          const conversation = this.conversations.slice(-1)[0]

          if(typeof message != 'string') message = ''
          if(!from) from = logged

          const msg = {message: message||this.message}
          if(conversation && conversation.sender == from){
              conversation.messages.push(msg)
          }else{
              this.conversations.push({
                  sender: from,
                  messages: [msg]
              })
          }
          this.cleanMessage()


          if(msg.message == 'Como vai?'){
              setTimeout(() => {
                this.sendMessage('Opa, seja bem-vinda!', mesa.members[1])
              }, 2000)
              setTimeout(() => {
                this.sendMessage('Olá, tudo bem? :)', mesa.members[2])
              }, 4000)
          }
      },
      cleanMessage() {
          this.message = ''
      },
      isOwner(conversation){
          return conversation.sender == logged
      },
      count(table){
          return table.members.length
      },
      showModal() {
        this.$showModal(ModalDrink);
      },
      chat() {
          alert(this.message)
      }
    }
  };
</script>

<style scoped lang="scss">

    Page {
        background: linear-gradient(#8E00FE, #a163de);
    }

    .message-input {
        TextField {
            background: rgba(242,242,242, .8);
            height: 37pt;
            border-radius: 16pt;
            color: #666;
            font-size: 14px;
            padding-left: 15pt;
            android-elevation: 3pt;
        }
    }

    .message-stream {
        margin-bottom: 15pt;
        .sender {
            font-size: 14px;
            color: #fff;
        }
        .message {
            border-radius: 20px;
            background: #fff;
            android-elevation: 5pt;
            font-size: 13px;
            color: #333;
            padding: 5pt 7pt;
            margin-bottom: 8pt;
        }
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

    .friends {
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