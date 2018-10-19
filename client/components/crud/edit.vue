<template lang="pug">
  div
    page-header(v-once :title="item.name || title")
    page-content(v-if="usesDefaultSlot")
      slot
    slot(name="navigation")
    bottom-navigation(v-if="bottomActions !== undefined")
      bottom-action(
        v-for="action in bottomActions"
        :key="action.title"
        :icon="action.icon"
        @click="emitAction(action.event)") {{ action.title }}
    bottom-navigation(v-else)
      bottom-action(icon="delete" @click="remove()") Delete
      bottom-action(icon="check" @click="save()") Save
</template>

<script>
import BottomAction from "~/components/bottom-action";
import BottomNavigation from "~/components/bottom-navigation";
import PageContent from "~/components/page-content";
import PageHeader from "~/components/page-header";

export default {
  components: {
    BottomAction,
    BottomNavigation,
    PageContent,
    PageHeader
  },
  props: {
    title: {
      type: String,
      default: undefined
    },
    api: {
      type: String,
      required: true
    },
    bottomActions: {
      type: Array,
      default: undefined
    }
  },
  computed: {
    item() {
      return this.$apiState(this.api).editing;
    },
    usesDefaultSlot() {
      return !!this.$slots.default;
    }
  },
  methods: {
    async save() {
      if (!this.$apiGet(`${this.api}/editingIsValid`)) {
        return;
      }
      await this.$apiDispatch(`${this.api}/update`, [this.item.id, this.item]);
      this.$router.go(-1);
    },
    async remove() {
      await this.$apiDispatch(`${this.api}/remove`, this.item.id);
      this.$router.go(-1);
    },
    emitAction(event) {
      this.$emit(event);
    }
  }
};
</script>
