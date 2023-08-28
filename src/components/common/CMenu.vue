<template>
  <el-row :gutter="12">
    <el-col
      :sx="24"
      :sm="12"
      :md="8"
      :lg="6"
      :xl="4"
      v-for="meal in meals"
      :key="meal.id"
      class="my-1"
    >
      <el-card>
        <h1 class="fw-bold">{{ meal.name }}</h1>
        <div style="padding: 14px">
          <el-button v-if="isOrdered(meal.id)" type="success" circle
            ><i class="el-icon-check"></i
          ></el-button>
          <el-button v-else type="primary" @click="addMeal(meal)"
            >Add</el-button
          >
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { ESCart } from "@/enums/store";
import { defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  props: ["meals"],
  setup() {
    const store = useStore();
    const addMeal = (meal: any) => {
      store.dispatch(ESCart.A_ADD_MEAL, meal);
    };
    const isOrdered = (id: number) => {
      const mealOrdered = store.getters[ESCart.G_MEALS];
      return mealOrdered.find((meal: any) => meal.id === id);
    };
    return { addMeal, isOrdered };
  },
});
</script>

<style scoped></style>
