<template>
  <div>
    <b-card :title="title" tag="article" class="mb-2">
      <b-card-text>
        <p>{{ description }}</p>
      </b-card-text>
      <b-row>
        <b-col></b-col>
      </b-row>
      <b-button variant="primary" v-b-modal.modal-service class="mr-2">
        Serviços
      </b-button>
      <b-button variant="primary" v-b-modal.modal-contact>Contato</b-button>
    </b-card>
    <ModalService ref="service" />
    <ModalContact ref="contact" />
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  name: "CardCompany",
  components: {
    ModalService: () => import("../modals/ModalService.vue"),
    ModalContact: () => import("../modals/ModalContact.vue")
  }
})
export default class CardCompany extends Vue {
  @Prop({ required: true, type: String, default: "" }) readonly title!: string;
  @Prop({ required: true, type: String, default: "" })
  readonly description!: string;
}
</script>
