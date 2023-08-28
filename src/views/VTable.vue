<template>
  <el-container>
    <el-header class="px-0">
      <el-card shadow="always">
        <div class="d-flex justify-content-between align-items-center gap-3">
          <h3 class="fw-bold">Menu</h3>
          <el-input
            v-model="searchKeyword"
            placeholder="Search"
            class="input-with-select"
          >
          </el-input>
          <el-button @click="showCart = true">
            <i class="el-icon-shopping-cart-1"></i>
          </el-button>

          <el-drawer v-model="showCart" size="100%" :with-header="false">
            <div class="d-flex justify-content-between align-items-center p-2">
              <h3 class="fw-bold">Cart</h3>

              <i
                class="el-icon-circle-close fs-4"
                @click="showCart = false"
              ></i>
            </div>
            <c-cart :meals="mealOrdered" />
            <el-button
              type="warning"
              round
              class="position-absolute bottom-0 start-50 translate-middle-x my-5"
              >Order</el-button
            >
          </el-drawer>
        </div>
      </el-card>
    </el-header>
    <el-main><c-menu :meals="meals"></c-menu></el-main>
  </el-container>
</template>

<script lang="ts">
import CMenu from "@/components/common/CMenu.vue";
import { ESCart, ESItem, ESTable } from "@/enums/store";
import { computed, defineComponent, onBeforeUnmount, ref, watch } from "vue";
import { useStore } from "vuex";
import CCart from "@/components/common/CCart.vue";

export default defineComponent({
  components: { CMenu, CCart },
  props: ["id"],
  setup(props: any) {
    const store = useStore();
    const meals = computed(() => store.getters[ESItem.G_MEALS]);
    store.dispatch(ESItem.A_GET_ITEMS);
    const mealOrdered = computed(() => store.getters[ESCart.G_MEALS]);
    const showCart = ref(false);
    onBeforeUnmount(async () => {
      await store.dispatch(ESTable.A_OUT_TABLE, props.id);
    });
    const searchKeyword = ref("");

    watch(
      () => searchKeyword,
      (keyword: any) => {
        store.dispatch(ESItem.A_SEARCH_MEAL, keyword.value);
      },
      { deep: true }
    );
    return { meals, mealOrdered, showCart, searchKeyword };
  },
});
</script>
<style scoped></style>
