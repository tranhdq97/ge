<template>
  <div class="container">
    <div class="header">{{ $t(ECommon.PERSONAL_INFORMATION) }}</div>
    <div class="body">
      <CDropDownField
        :title="$t(ECommon.EMAIL)"
        :value="$t(staff?.type?.name?.toLocaleLowerCase())"
      />
      <div class="personal" v-if="!!staff?.profile">
        <div>{{ staff?.profile?.first_name || "" }}</div>
        <div>{{ staff?.profile?.last_name || "" }}</div>
        <div>{{ staff?.profile?.dob || "" }}</div>
        <div>{{ staff?.profile?.address || "" }}</div>
        <div>{{ staff?.profile?.citizen_number || "" }}</div>
        <div>{{ staff?.profile?.sex?.name || "" }}</div>
        <div>{{ staff?.profile?.phone_number || "" }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ECommon } from "@/enums/common";
import { ESStaff } from "@/enums/store";
import { IFStaff } from "@/interfaces/staff";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import CDropDownField from "@/components/common/CDropDownField.vue";

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const staff = ref<IFStaff>();
    const staffIndex = (router.currentRoute.value.params.id || 0) as number;
    async function initPage() {
      staff.value = await store.dispatch(ESStaff.A_GET_STAFF, staffIndex);
    }
    initPage();
    return { ECommon, CDropDownField, staff };
  },
});
</script>
