<template>
  <div class="events">
    <OrgCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<script>
// @ is an alias to /src
import OrgCard from "@/components/OrgCard.vue";
import EventService2 from "@/services/EventService2.js";

export default {
  name: "OrgListView",
  components: {
    OrgCard, // register it as a child component
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService2.getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
