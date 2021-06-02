<template>
  <div class="home">
    <b-container>
      <b-row>
        <b-col>
          <CardCompany title="Empresa" description="Descrição da empresa" />
        </b-col>
        <b-col>
          <button @click="$refs.modalCustom.show = true">Abrir modal</button>
        </b-col>
      </b-row>
    </b-container>
    <ModalCustom ref="modalCustom" />
  </div>
</template>

<script>
// @ is an alias to /src
import CardCompany from "@/components/cards/CardCompany";
import ModalCustom from "@/components/modals/ModalCustom";
export default {
  name: "Home",
  components: {
    CardCompany,
    ModalCustom
  }
};
</script>
