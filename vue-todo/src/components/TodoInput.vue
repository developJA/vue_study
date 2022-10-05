<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" placeholder="Type what you have to do" v-on:keypress.enter="addTodo">
        <!-- <button v-on:click="addTodo"></button> -->
        <span class="addContainer" v-on:click="addTodo">
            <i class="addBtn fas fa-plus" aria-hidden="true"></i>
        </span>
  
        <Modal v-if="showModal" @close="showModal = false">
            <!-- <h3 slot="header">경고</h3> -->
            <h3>
              <slot name="header">경고</slot>
            </h3>
            <span @click="showModal = false">
              <slot name="footer">할 일을 입력하세요.</slot>
            <i class="closeModalBtn fas fa-times" aria-hidden="true"></i>
            </span>
        </Modal>
    </div>
</template>
  
<script>
  import Modal from './common/Modal.vue'
  export default {
    data() {
        return {
          newTodoItem: '',
          showModal: false
        }
    },
    methods: {
        addTodo() {
            if(this.newTodoItem !== ''){
              // this.$emit('addTodoItem', this.newTodoItem);
              const text = this.newTodoItem.trim();
              this.$store.commit('addOneItem', text);  // mutations을 동작시키기 위해 commit함
              this.clearInput();
            }else{
              console.log("모달 노출 >>> ",this.showModal);
              this.showModal = !this.showModal;
            }
        },
        clearInput() {
            this.newTodoItem = '';
        }
    },
    components: {
      // 모달등록
      Modal: Modal  
    }
  }
</script>
  
<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }
  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: inline-block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>