<template>
	<StackLayout class="p-10" backgroundColor="white" columns="*" rows="auto,auto">
	    <StackLayout row="0" col="0" columns="70,*" rows="auto">
            <Image src="~/images/bares/rock.png"
                width="50" row="0" col="0" />
            <Label class="h2 text-center" text="Sofia quer pagar um drink para você!" row="0" col="1" />
	    </StackLayout>

        <StackLayout row="1" col="0" columns="*,*" rows="auto">
            <Button class="btn btn-outline" text="Aceitar" @tap="$modal.close()" row="0" col="0" />
            <Button class="btn btn-outline" text="Recusar" @tap="$modal.close()" row="0" col="1" />
        </StackLayout>
	</StackLayout>
</template>

<script>
export default {
    data() {
        return {};
    }
};
</script>

<style>
</style>
