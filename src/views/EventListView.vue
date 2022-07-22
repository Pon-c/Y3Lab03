<template>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
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
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService.js";
// import axios from "axios";
import OrgCard from "@/components/OrgCard.vue";

export default {
  name: "EventListView",
  components: {
    EventCard,
    OrgCard, // register it as a child component
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    EventService.getEvents()
      .then((response) => {
        this.events = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
