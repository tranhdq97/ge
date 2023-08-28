<template>
  <el-row :gutter="12">
    <el-col span="24" v-for="meal in meals" :key="meal.id" class="m-1">
      <el-card shadow="always">
        <div class="d-flex justify-content-between">
          <h1 class="fw-bold">{{ meal.name }}</h1>
          <div>
            <!-- <el-input v-model="quantity"></el-input> -->
            <el-input-number
              v-model="quantity[meal.id]"
              @input="(quantity) => handleChangeQuantity(meal.id, quantity)"
              :min="1"
            ></el-input-number>
            <el-button
              type="danger"
              circle
              class="mx-1"
              @click="handleRemove(meal.id)"
            >
              <i class="el-icon-delete"></i>
            </el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watch } from "vue";
import { useStore } from "vuex";
import { ESCart } from "@/enums/store";

export default defineComponent({
  props: ["meals"],
  setup(props) {
    const store = useStore();
    const handleChangeQuantity = (id: number, quantity: number) => {
      console.log(id, quantity);
      store.dispatch(ESCart.A_CHANGE_QUANTITY, {
        id,
        quantity,
      });
    };
    const handleRemove = (id: number) => {
      store.dispatch(ESCart.A_REMOVE, id);
    };
    const getQuantity = (meals: any) => {
      return meals.reduce(
        (result: any, meal: any) => ((result[meal.id] = meal.quantity), result),
        {}
      );
    };
    const quantity = ref(getQuantity(props.meals));
    watch(
      () => props.meals,
      (meals: any) => {
        quantity.value = getQuantity(meals);
      },
      { deep: true }
    );
    return {
      handleChangeQuantity,
      quantity,
      handleRemove,
    };
  },
});
</script>

<style scoped></style>
