<template>
	<StackLayout class="box box-modal" backgroundColor="white" columns="*"
        rows="auto,41">
        <GridLayout row="0" col="0" columns="70,*" rows="auto" class="p-20">
            <Image src="https://i.ya-webdesign.com/images/drink-png-black.png"
                width="50" row="0" col="0" />

            <Label textWrap="true" row="0" col="1" class="label-modal">
                <FormattedString>
                    <Span text="Sofia C." fontAttributes="Bold" />
                    <Span text=" quer pagar um " />
                    <Span text=" drink " fontAttributes="Bold" />
                    <Span text="pra você! " />
                </FormattedString>
            </Label>
        </GridLayout>

        <GridLayout row="1" col="0" columns="*,*" rows="41"
            class="buttons-modal" verticalAlignment="center">
            <Label text="Aceitar" @tap="$modal.close()" row="0" col="0"
                class="r-button-modal" />
            <Label text=" Aceitar" @tap="$modal.close()" row="0" col="1" />
        </GridLayout>
    </StackLayout>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style lang="scss" scoped>
    .box {
        border-radius: 20px;
        background: #fff;
        box-shadow: 2px 2px 1px rgba(255, 255, 255, .25);
        margin: 25px;
        padding: 10pt;
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

    .box-modal {
        border-radius: 20px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
    }

    .label-modal {
        font-size: 18px
    }

    .buttons-modal {
        border-top-width: 2px;
        border-top-color: rgba(196, 196, 196, 0.7);
        text-align: center;
    }

    .r-button-modal {
        border-right-width: 2px;
        border-right-color: rgba(196, 196, 196, 0.7);
    }
</style>
