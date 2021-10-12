<template>
  <b-modal>
      <div class="p-5">
          <div>
              <input type="text" name="username" class="form-control">
          </div>
          <div>
              <input type="password" name="password" class="form-control">
          </div>
          <div>
              <button type="submit" class="btn aa-btn-submit"></button>
          </div>
      </div>
  </b-modal>
</template>

<script>
export default {
    name:"LoginModal",
    data: function(){
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
    input{
        padding: 4px;
    }

    .aa-btn-submit{
        padding: 8px 20px;
        width: 100%;
        display: block;
        background-color: #ccc;
        border: 1px solid #ccc;
        color: #424242;
    }

    .aa-btn-submit:hover{
        background-color: #ccc;
        border: 1px solid #ccc;
        color: #424242;
    }
</style>