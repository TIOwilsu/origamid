<template>
  <transition name="modal-custom">
    <div class="modal-custom" v-if="show" @click="clickout">
      <div class="modal-custom__container">
        <div class="modal-custom__content">
          <div class="modal-custom__header">
            <h5>Modal Custom</h5>
            <button class="modal-custom__close" @click="close">x</button>
          </div>
          <div class="modal-custom__body">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              typeand scrambled it to make a type specimen book. It has survived
              not only five centuries, but also the leap into electronic
              typesetting,remaining essentially unchanged. It was popularised in
              the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages,more recently with desktop publishing software like
              Aldus PageMaker and including versions of Lorem Ipsum.
            </p>
          </div>
          <div class="modal-custom__footer">
            <button class="modal-custom__button" @click="close">Fechar</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  name: "ModalCustom"
})
export default class ModalCustom extends Vue {
  private show = false;
  public close(): void {
    this.show = false;
  }
  public clickout({ currentTarget = "", target = "" }): void {
    if (currentTarget === target) this.show = false;
  }
}
</script>
<style lang="scss">
.modal-custom {
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  position: absolute;
  overflow: hidden;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  &-enter-active,
  &-leave-active {
    transition: opacity 0.5s;
  }
  &-enter,
  &-leave-to {
    opacity: 0;
  }
  &-enter-to {
    .modal-custom__container {
      animation: slide 0.3s;
    }
  }
  &-leave-to {
    .modal-custom__container {
      animation: slide 0.3s reverse;
    }
  }
  &__container {
    background-color: white;
    border-radius: 4px;
    padding: 0 16px;
    max-width: 500px;
    width: 100%;
    @keyframes slide {
      from {
        transform: translate3d(0, 40px, 0);
      }
      to {
        transform: translate3d(0, 0px, 0);
      }
    }
  }
  &__content {
    margin: 0 -16px;
    & > div[class^="modal-custom"] {
      padding: 16px;
    }
  }
  &__header {
    align-items: center;
    border-bottom: 1px solid #cccccc;
    display: flex;
    position: relative;
    justify-content: space-between;
  }
  &__footer {
    border-top: 1px solid #cccccc;
  }
  &__close {
    background-color: white;
    border-radius: 50%;
    padding: 0 8px;
  }
  &__button {
    background-color: white;
    border-radius: 4px;
    padding: 8px;
    width: 100%;
  }
  & h5,
  p {
    margin-bottom: 0px;
  }
}
</style>
