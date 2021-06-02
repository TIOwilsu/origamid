<template>
  <b-modal id="modal-contact" title="Contato">
    <p class="my-4">
      <b-form>
        <b-form-group
          v-for="(field, index) in fields"
          :key="index"
          :id="`input-group-${index}`"
          :label="field.label"
          :label-for="`input-${index}`"
        >
          <b-form-input
            :id="`input-${index}`"
            v-model="form[field.key]"
            :type="field.type"
            :placeholder="field.placeholder"
            required
          ></b-form-input>
        </b-form-group>
      </b-form>
    </p>
  </b-modal>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  name: "Contact"
})
export default class ModalContact extends Vue {
  private form = {
    name: "",
    email: ""
  };
  get fields(): Array<object> {
    return [
      {
        type: "text",
        label: "Nome:",
        key: "name",
        placeholder: "Digite o nome"
      },
      {
        type: "email",
        label: "Email:",
        key: "email",
        placeholder: "Digite o E-mail"
      }
    ];
  }
}
</script>
